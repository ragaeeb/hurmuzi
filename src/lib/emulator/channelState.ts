import type { CoreOption } from './types';
import { SNES_CHANNELS } from './types';
import { getSoundChannelOptions } from './utils';

/**
 * Determines if any channels need a reload to apply unmuting
 */
export function needsReload(uiStates: boolean[], effectiveStates: boolean[]): boolean {
    return uiStates.some((uiState, i) => uiState === true && effectiveStates[i] === false);
}

/**
 * Checks if all channels are enabled in UI state
 */
export function areAllChannelsEnabled(states: boolean[]): boolean {
    return states.every((ch) => ch);
}

/**
 * Initializes channel states from core options
 */
export function initializeChannelStates(options: CoreOption[]): boolean[] {
    return SNES_CHANNELS.map((ch) => {
        const opt = options.find((o) => o.key === ch.varKey);
        return opt ? opt.currentValue === 'enabled' : true;
    });
}

/**
 * Checks if the core has sound channel support
 */
export function hasSoundChannelSupport(options: CoreOption[]): boolean {
    return getSoundChannelOptions(options).length > 0;
}

/**
 * Creates pending settings object for all channels
 */
export function createPendingSettings(channelStates: boolean[]): Record<string, string> {
    const settings: Record<string, string> = {};
    SNES_CHANNELS.forEach((channel, i) => {
        settings[channel.varKey] = channelStates[i] ? 'enabled' : 'disabled';
    });
    return settings;
}

/**
 * Updates effective state when muting (muting works immediately)
 */
export function updateEffectiveStateOnMute(
    currentEffective: boolean[],
    channelIndex: number,
    isMuting: boolean,
): boolean[] {
    if (!isMuting) {
        return currentEffective;
    }

    const updated = [...currentEffective];
    updated[channelIndex] = false;
    return updated;
}

/**
 * Updates effective state for solo operation
 */
export function updateEffectiveStateOnSolo(currentEffective: boolean[], soloedIndex: number): boolean[] {
    const updated = new Array(8).fill(false);
    updated[soloedIndex] = currentEffective[soloedIndex];
    return updated;
}
