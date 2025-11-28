import { describe, expect, it } from 'bun:test';
import {
    areAllChannelsEnabled,
    createPendingSettings,
    hasSoundChannelSupport,
    initializeChannelStates,
    needsReload,
    updateEffectiveStateOnMute,
    updateEffectiveStateOnSolo,
} from './channelState';
import type { CoreOption } from './types';

describe('needsReload', () => {
    it('should return true when UI wants to enable but effective is disabled', () => {
        const uiStates = [true, true, false, false, true, true, true, true];
        const effectiveStates = [true, false, false, false, true, true, true, true];
        expect(needsReload(uiStates, effectiveStates)).toBe(true);
    });

    it('should return false when all states match', () => {
        const states = [true, true, false, false, true, true, true, true];
        expect(needsReload(states, states)).toBe(false);
    });

    it('should return false when only muting (UI disabled, effective disabled)', () => {
        const uiStates = [false, true, true, true, true, true, true, true];
        const effectiveStates = [true, true, true, true, true, true, true, true];
        expect(needsReload(uiStates, effectiveStates)).toBe(false);
    });
});

describe('areAllChannelsEnabled', () => {
    it('should return true when all channels are enabled', () => {
        expect(areAllChannelsEnabled([true, true, true, true, true, true, true, true])).toBe(true);
    });

    it('should return false when any channel is disabled', () => {
        expect(areAllChannelsEnabled([true, true, false, true, true, true, true, true])).toBe(false);
    });

    it('should return false when all channels are disabled', () => {
        expect(areAllChannelsEnabled([false, false, false, false, false, false, false, false])).toBe(false);
    });
});

describe('initializeChannelStates', () => {
    it('should initialize states from core options', () => {
        const options: CoreOption[] = [
            { currentValue: 'enabled', displayName: 'CH1', key: 'snes9x_sndchan_1', values: [] },
            { currentValue: 'disabled', displayName: 'CH2', key: 'snes9x_sndchan_2', values: [] },
            { currentValue: 'enabled', displayName: 'CH3', key: 'snes9x_sndchan_3', values: [] },
            { currentValue: 'enabled', displayName: 'CH4', key: 'snes9x_sndchan_4', values: [] },
            { currentValue: 'enabled', displayName: 'CH5', key: 'snes9x_sndchan_5', values: [] },
            { currentValue: 'enabled', displayName: 'CH6', key: 'snes9x_sndchan_6', values: [] },
            { currentValue: 'enabled', displayName: 'CH7', key: 'snes9x_sndchan_7', values: [] },
            { currentValue: 'enabled', displayName: 'CH8', key: 'snes9x_sndchan_8', values: [] },
        ];

        const result = initializeChannelStates(options);
        expect(result).toEqual([true, false, true, true, true, true, true, true]);
    });

    it('should default to enabled when option not found', () => {
        const result = initializeChannelStates([]);
        expect(result).toEqual([true, true, true, true, true, true, true, true]);
    });
});

describe('hasSoundChannelSupport', () => {
    it('should return true when sound channel options exist', () => {
        const options: CoreOption[] = [
            { currentValue: 'enabled', displayName: 'CH1', key: 'snes9x_sndchan_1', values: [] },
        ];
        expect(hasSoundChannelSupport(options)).toBe(true);
    });

    it('should return false when no sound channel options exist', () => {
        const options: CoreOption[] = [
            { currentValue: '48000', displayName: 'Rate', key: 'snes9x_audio_rate', values: [] },
        ];
        expect(hasSoundChannelSupport(options)).toBe(false);
    });
});

describe('createPendingSettings', () => {
    it('should create settings object with correct values', () => {
        const channelStates = [true, false, true, false, true, false, true, false];
        const result = createPendingSettings(channelStates);

        expect(result['snes9x_sndchan_1']).toBe('enabled');
        expect(result['snes9x_sndchan_2']).toBe('disabled');
        expect(result['snes9x_sndchan_3']).toBe('enabled');
        expect(result['snes9x_sndchan_4']).toBe('disabled');
        expect(Object.keys(result)).toHaveLength(8);
    });
});

describe('updateEffectiveStateOnMute', () => {
    it('should update effective state when muting', () => {
        const current = [true, true, true, true, true, true, true, true];
        const result = updateEffectiveStateOnMute(current, 2, true);

        expect(result[2]).toBe(false);
        expect(result[0]).toBe(true);
        expect(result[1]).toBe(true);
    });

    it('should not update effective state when unmuting', () => {
        const current = [true, false, true, true, true, true, true, true];
        const result = updateEffectiveStateOnMute(current, 1, false);

        expect(result).toEqual(current);
    });

    it('should not mutate original array', () => {
        const current = [true, true, true, true, true, true, true, true];
        const result = updateEffectiveStateOnMute(current, 2, true);

        expect(current[2]).toBe(true);
        expect(result[2]).toBe(false);
    });
});

describe('updateEffectiveStateOnSolo', () => {
    it('should mute all channels except soloed', () => {
        const current = [true, true, false, true, true, true, true, true];
        const result = updateEffectiveStateOnSolo(current, 3);

        expect(result[3]).toBe(true);
        expect(result.filter((s) => s).length).toBe(1);
    });

    it('should preserve effective state of soloed channel', () => {
        const current = [true, true, false, true, true, true, true, true];
        const result = updateEffectiveStateOnSolo(current, 2);

        expect(result[2]).toBe(false);
    });
});
