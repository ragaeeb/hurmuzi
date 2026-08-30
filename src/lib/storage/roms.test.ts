import { describe, expect, it } from 'bun:test';
import { getRomNameFromSource, listStoredRoms, normalizeRemoteRomSource } from './roms';

describe('normalizeRemoteRomSource', () => {
    it('should convert GitHub blob URLs to raw URLs', () => {
        expect(normalizeRemoteRomSource('https://github.com/user/repo/blob/main/roms/game.sfc')).toBe(
            'https://raw.githubusercontent.com/user/repo/main/roms/game.sfc',
        );
    });

    it('should reject local filesystem URLs', () => {
        expect(() => normalizeRemoteRomSource('file:///tmp/game.sfc')).toThrow('HTTP or HTTPS');
    });
});

describe('getRomNameFromSource', () => {
    it('should read names from remote and OPFS sources', () => {
        expect(getRomNameFromSource('https://example.com/Aladdin%20(USA).sfc')).toBe('Aladdin (USA).sfc');
        expect(getRomNameFromSource('opfs:/roms/local/id/Aladdin%20(USA).sfc')).toBe('Aladdin (USA).sfc');
    });
});

describe('listStoredRoms', () => {
    it('should list cached ROMs newest first', async () => {
        const fileHandle = (name: string, lastModified: number) =>
            ({
                getFile: async () => new File(['rom'], name, { lastModified }),
                kind: 'file',
                name,
            }) as unknown as FileSystemFileHandle;
        const directoryHandle = (name: string, entries: FileSystemHandle[]) =>
            ({
                kind: 'directory',
                name,
                async *values() {
                    yield* entries;
                },
            }) as unknown as FileSystemDirectoryHandle;

        const local = directoryHandle('local', [directoryHandle('one', [fileHandle('Same.sfc', 1)])]);
        const remote = directoryHandle('remote', [
            directoryHandle('two', [fileHandle('Same.sfc', 2), fileHandle('Other.sfc', 3)]),
        ]);
        const roms = {
            getDirectoryHandle: async (name: string) => (name === 'local' ? local : remote),
        } as unknown as FileSystemDirectoryHandle;
        const root = { getDirectoryHandle: async () => roms } as unknown as FileSystemDirectoryHandle;
        const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
        Object.defineProperty(globalThis, 'navigator', {
            configurable: true,
            value: { storage: { getDirectory: async () => root } },
        });

        try {
            expect(await listStoredRoms()).toEqual([
                { lastModified: 3, name: 'Other.sfc', source: 'opfs:/roms/remote/two/Other.sfc' },
                { lastModified: 2, name: 'Same.sfc', source: 'opfs:/roms/remote/two/Same.sfc' },
            ]);
        } finally {
            if (originalNavigator) {
                Object.defineProperty(globalThis, 'navigator', originalNavigator);
            } else {
                delete (globalThis as { navigator?: Navigator }).navigator;
            }
        }
    });
});
