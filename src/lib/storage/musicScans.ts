import { MUSIC_SCAN_VERSION, type MusicScanResult } from '@/lib/emulator/musicScan';

const STORAGE_PREFIX = 'snes-music-scan-';

/**
 * The scan is deterministic, so its result for a ROM is kept until the scan itself changes.
 */
export function getSavedMusicScan(romSource: string): MusicScanResult | null {
    if (!romSource) {
        return null;
    }

    try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}${romSource}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (
                parsed?.version === MUSIC_SCAN_VERSION &&
                Array.isArray(parsed.channels) &&
                parsed.channels.length === 8
            ) {
                return parsed;
            }
        }
    } catch (error) {
        console.warn('Failed to load the saved music scan:', error);
    }
    return null;
}

export function saveMusicScan(romSource: string, result: MusicScanResult): boolean {
    if (!romSource) {
        return false;
    }

    try {
        localStorage.setItem(`${STORAGE_PREFIX}${romSource}`, JSON.stringify(result));
        return true;
    } catch (error) {
        console.warn('Failed to save the music scan:', error);
        return false;
    }
}
