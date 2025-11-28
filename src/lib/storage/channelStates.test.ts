import { beforeEach, describe, expect, it } from 'bun:test';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        clear: () => {
            store = {};
        },
        getItem: (key: string) => store[key] || null,
        removeItem: (key: string) => {
            delete store[key];
        },
        setItem: (key: string, value: string) => {
            store[key] = value;
        },
    };
})();

global.localStorage = localStorageMock as Storage;

// Import after mocking
import { clearChannelStates, getSavedChannelStates, saveChannelStates } from './channelStates';

describe('getSavedChannelStates', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('should return saved states when they exist', () => {
        const states = [true, false, true, false, true, false, true, false];
        localStorageMock.setItem('snes-channels-game.smc', JSON.stringify(states));

        const result = getSavedChannelStates('game.smc');
        expect(result).toEqual(states);
    });

    it('should return null when no saved states exist', () => {
        expect(getSavedChannelStates('nonexistent.smc')).toBeNull();
    });

    it('should return null for empty rom name', () => {
        expect(getSavedChannelStates('')).toBeNull();
    });

    it('should return null for invalid data length', () => {
        localStorageMock.setItem('snes-channels-game.smc', JSON.stringify([true, false]));
        expect(getSavedChannelStates('game.smc')).toBeNull();
    });

    it('should handle JSON parse errors gracefully', () => {
        localStorageMock.setItem('snes-channels-game.smc', 'invalid json');
        expect(getSavedChannelStates('game.smc')).toBeNull();
    });
});

describe('saveChannelStates', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('should save valid channel states', () => {
        const states = [true, false, true, false, true, false, true, false];
        const result = saveChannelStates('game.smc', states);

        expect(result).toBe(true);
        const saved = localStorageMock.getItem('snes-channels-game.smc');
        expect(JSON.parse(saved!)).toEqual(states);
    });

    it('should return false for empty rom name', () => {
        const states = [true, true, true, true, true, true, true, true];
        expect(saveChannelStates('', states)).toBe(false);
    });

    it('should return false for invalid states length', () => {
        expect(saveChannelStates('game.smc', [true, false])).toBe(false);
    });
});

describe('clearChannelStates', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    it('should clear saved states', () => {
        const states = [true, true, true, true, true, true, true, true];
        saveChannelStates('game.smc', states);

        expect(clearChannelStates('game.smc')).toBe(true);
        expect(getSavedChannelStates('game.smc')).toBeNull();
    });

    it('should return false for empty rom name', () => {
        expect(clearChannelStates('')).toBe(false);
    });
});
