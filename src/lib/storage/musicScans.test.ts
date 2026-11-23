import { beforeEach, describe, expect, it } from 'bun:test';

const store = new Map<string, string>();
global.localStorage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
        store.set(key, value);
    },
} as Storage;

// Import after mocking
import { MUSIC_SCAN_VERSION, type MusicScanResult } from '@/lib/emulator/musicScan';
import { getSavedMusicScan, saveMusicScan } from './musicScans';

const result: MusicScanResult = {
    channels: Array.from({ length: 8 }, (_, index) => ({
        activeRatio: 0.5,
        channel: index + 1,
        effectResponses: 0,
        presence: 0.9,
        role: 'music' as const,
    })),
    framesEmulated: 1000,
    heardAudio: true,
    version: MUSIC_SCAN_VERSION,
};

describe('music scan storage', () => {
    beforeEach(() => {
        store.clear();
    });

    it('should return what was saved for the same ROM', () => {
        expect(saveMusicScan('opfs:/roms/local/abc/game.sfc', result)).toBe(true);

        expect(getSavedMusicScan('opfs:/roms/local/abc/game.sfc')).toEqual(result);
        expect(getSavedMusicScan('opfs:/roms/local/def/other.sfc')).toBeNull();
    });

    it('should ignore a result saved by an older version of the scan', () => {
        saveMusicScan('game.sfc', { ...result, version: MUSIC_SCAN_VERSION - 1 });

        expect(getSavedMusicScan('game.sfc')).toBeNull();
    });

    it('should ignore corrupt entries', () => {
        store.set('snes-music-scan-game.sfc', '{not json');

        expect(getSavedMusicScan('game.sfc')).toBeNull();
    });
});
