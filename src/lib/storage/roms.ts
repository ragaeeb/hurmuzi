import { isValidRomFile } from '@/lib/emulator/utils';

const ROMS_DIRECTORY = 'roms';
const LOCAL_DIRECTORY = 'local';
const REMOTE_DIRECTORY = 'remote';

interface OpfsStorageManager extends StorageManager {
    getDirectory(): Promise<FileSystemDirectoryHandle>;
}

export interface LoadedRom {
    blob: Blob;
    cacheHit: boolean;
    name: string;
    source: string;
}

export interface StoredRom {
    lastModified: number;
    name: string;
    source: string;
}

function getStorageManager(): OpfsStorageManager {
    const storage = navigator.storage as OpfsStorageManager | undefined;
    if (!storage?.getDirectory) {
        throw new Error('This browser does not support Origin Private File System storage');
    }
    return storage;
}

async function getDirectory(path: string[], create: boolean): Promise<FileSystemDirectoryHandle> {
    let directory = await getStorageManager().getDirectory();
    for (const name of path) {
        directory = await directory.getDirectoryHandle(name, { create });
    }
    return directory;
}

async function writeFile(directory: FileSystemDirectoryHandle, name: string, blob: Blob): Promise<void> {
    const handle = await directory.getFileHandle(name, { create: true });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
}

async function sourceHash(source: string): Promise<string> {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(source));
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function safeFilename(name: string): string {
    const filename = name.split('/').pop() || '';
    if (!filename || filename === '.' || filename === '..' || filename.includes('\\') || !isValidRomFile(filename)) {
        throw new Error('ROM source must end with a supported SNES file extension');
    }
    return filename;
}

export function normalizeRemoteRomSource(value: string): string {
    const url = new URL(value.trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new Error('ROM source must use HTTP or HTTPS');
    }

    if (url.hostname === 'github.com' && url.pathname.includes('/blob/')) {
        const [repositoryPath, filePath] = url.pathname.split('/blob/');
        if (!repositoryPath || !filePath) {
            throw new Error('Invalid GitHub ROM URL');
        }
        url.hostname = 'raw.githubusercontent.com';
        url.pathname = `${repositoryPath}/${filePath}`;
    }

    url.hash = '';
    return url.toString();
}

export function getRomNameFromSource(source: string): string {
    const url = new URL(source);
    if (url.protocol === 'opfs:') {
        return safeFilename(decodeURIComponent(url.pathname.split('/').pop() || ''));
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new Error('Unsupported ROM source');
    }
    if (url.hostname === 'api.github.com' && url.pathname.includes('/git/blobs/')) {
        return 'game.sfc';
    }
    return safeFilename(decodeURIComponent(url.pathname.split('/').pop() || ''));
}

export async function saveLocalRom(file: File): Promise<string> {
    const name = safeFilename(file.name);
    const id = crypto.randomUUID();
    const directory = await getDirectory([ROMS_DIRECTORY, LOCAL_DIRECTORY, id], true);
    await writeFile(directory, name, file);
    return `opfs:/${ROMS_DIRECTORY}/${LOCAL_DIRECTORY}/${id}/${encodeURIComponent(name)}`;
}

async function loadStoredRom(source: string): Promise<LoadedRom> {
    const url = new URL(source);
    const parts = url.pathname.split('/').filter(Boolean).map(decodeURIComponent);
    if (
        parts.length !== 4 ||
        parts[0] !== ROMS_DIRECTORY ||
        (parts[1] !== LOCAL_DIRECTORY && parts[1] !== REMOTE_DIRECTORY)
    ) {
        throw new Error('Invalid OPFS ROM source');
    }

    const name = safeFilename(parts[3]);
    const directory = await getDirectory(parts.slice(0, -1), false);
    const file = await (await directory.getFileHandle(name)).getFile();
    return { blob: file, cacheHit: true, name, source };
}

export async function listStoredRoms(limit = 8): Promise<StoredRom[]> {
    const roms: StoredRom[] = [];

    for (const category of [LOCAL_DIRECTORY, REMOTE_DIRECTORY]) {
        try {
            const directory = await getDirectory([ROMS_DIRECTORY, category], false);
            for await (const entry of directory.values()) {
                if (entry.kind !== 'directory') {
                    continue;
                }
                for await (const handle of (entry as FileSystemDirectoryHandle).values()) {
                    if (handle.kind !== 'file' || !isValidRomFile(handle.name)) {
                        continue;
                    }
                    const file = await (handle as FileSystemFileHandle).getFile();
                    roms.push({
                        lastModified: file.lastModified,
                        name: file.name,
                        source: `opfs:/${ROMS_DIRECTORY}/${category}/${entry.name}/${encodeURIComponent(file.name)}`,
                    });
                }
            }
        } catch (error) {
            if (!(error instanceof DOMException) || error.name !== 'NotFoundError') {
                throw error;
            }
        }
    }

    // ponytail: Filename is the recent-list identity; use content hashes if same-name variants must coexist.
    const unique = new Map<string, StoredRom>();
    for (const rom of roms.sort((a, b) => b.lastModified - a.lastModified)) {
        if (!unique.has(rom.name.toLowerCase())) {
            unique.set(rom.name.toLowerCase(), rom);
        }
    }
    return Array.from(unique.values()).slice(0, limit);
}

async function loadRemoteCache(source: string): Promise<File | null> {
    try {
        const directory = await getDirectory([ROMS_DIRECTORY, REMOTE_DIRECTORY, await sourceHash(source)], false);
        for await (const handle of directory.values()) {
            if (handle.kind === 'file' && isValidRomFile(handle.name)) {
                return await (handle as FileSystemFileHandle).getFile();
            }
        }
    } catch (error) {
        if (!(error instanceof DOMException) || error.name !== 'NotFoundError') {
            throw error;
        }
    }
    return null;
}

async function cacheRemoteRom(source: string, name: string, blob: Blob): Promise<void> {
    const directory = await getDirectory([ROMS_DIRECTORY, REMOTE_DIRECTORY, await sourceHash(source)], true);
    await writeFile(directory, name, blob);
}

async function downloadRemoteRom(source: string): Promise<{ blob: Blob; name: string }> {
    const url = new URL(source);
    const response = await fetch(source);
    if (!response.ok) {
        throw new Error(`Failed to download ROM: ${response.status} ${response.statusText}`);
    }

    if (url.hostname === 'api.github.com' && url.pathname.includes('/git/blobs/')) {
        const data = await response.json();
        if (!data.content || data.encoding !== 'base64') {
            throw new Error('Unexpected GitHub API response format');
        }
        const binary = atob(data.content.replace(/\s/g, ''));
        const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
        return { blob: new Blob([bytes], { type: 'application/octet-stream' }), name: 'game.sfc' };
    }

    return { blob: await response.blob(), name: getRomNameFromSource(source) };
}

export async function loadRomSource(value: string): Promise<LoadedRom> {
    if (value.startsWith('opfs:')) {
        return loadStoredRom(value);
    }

    const source = normalizeRemoteRomSource(value);
    try {
        const cached = await loadRemoteCache(source);
        if (cached) {
            return { blob: cached, cacheHit: true, name: cached.name, source };
        }
    } catch (error) {
        console.warn('Failed to read the OPFS ROM cache:', error);
    }

    const downloaded = await downloadRemoteRom(source);
    try {
        await cacheRemoteRom(source, downloaded.name, downloaded.blob);
    } catch (error) {
        console.warn('Failed to cache the ROM in OPFS:', error);
    }
    return { ...downloaded, cacheHit: false, source };
}
