/**
 * Storage utilities for channel states persistence
 */

const STORAGE_PREFIX = 'snes-channels-';

/**
 * Gets saved channel states for a specific ROM from localStorage
 */
export function getSavedChannelStates(romName: string): boolean[] | null {
    if (!romName) {
        return null;
    }

    try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}${romName}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length === 8) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Failed to load saved channel states:', e);
    }
    return null;
}

/**
 * Saves channel states for a specific ROM to localStorage
 */
export function saveChannelStates(romName: string, states: boolean[]): boolean {
    if (!romName || states.length !== 8) {
        return false;
    }

    try {
        localStorage.setItem(`${STORAGE_PREFIX}${romName}`, JSON.stringify(states));
        console.log(`💾 Saved channel states for "${romName}"`);
        return true;
    } catch (e) {
        console.warn('Failed to save channel states:', e);
        return false;
    }
}

/**
 * Clears saved channel states for a specific ROM
 */
export function clearChannelStates(romName: string): boolean {
    if (!romName) {
        return false;
    }

    try {
        localStorage.removeItem(`${STORAGE_PREFIX}${romName}`);
        return true;
    } catch (e) {
        console.warn('Failed to clear channel states:', e);
        return false;
    }
}
