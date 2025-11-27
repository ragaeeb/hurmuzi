import { useCallback, useEffect, useRef, useState } from 'react';
import {
    areAllChannelsEnabled,
    hasSoundChannelSupport as checkChannelSupport,
    needsReload as checkNeedsReload,
    createPendingSettings,
    initializeChannelStates,
    updateEffectiveStateOnMute,
    updateEffectiveStateOnSolo,
} from '@/lib/emulator/channelState';
import type { CoreOption } from '@/lib/emulator/types';
import { SNES_CHANNELS } from '@/lib/emulator/types';
import { createCoreStateFingerprint, getSoundChannelOptions } from '@/lib/emulator/utils';

interface UseChannelMixerOptions {
    coreOptions: CoreOption[];
    initialStates: boolean[] | null;
    romName: string;
    onSetVariable: (key: string, value: string) => boolean;
    onReloadEmulator?: (pendingSettings: Record<string, string>) => Promise<void>;
    onSaveStates?: (states: boolean[]) => void;
}

export function useChannelMixer({
    coreOptions,
    initialStates,
    romName,
    onSetVariable,
    onReloadEmulator,
    onSaveStates,
}: UseChannelMixerOptions) {
    const [channels, setChannels] = useState<boolean[]>(new Array(8).fill(true));
    const [hasChannelSupport, setHasChannelSupport] = useState<boolean | null>(null);
    const [isApplying, setIsApplying] = useState(false);
    const [effectiveAudioState, setEffectiveAudioState] = useState<boolean[]>(new Array(8).fill(true));

    const initializedRef = useRef(false);
    const appliedInitialStatesRef = useRef(false);
    const lastRomNameRef = useRef<string>('');
    const lastCoreStateRef = useRef<string>('');

    // Reset when ROM changes
    useEffect(() => {
        if (romName !== lastRomNameRef.current) {
            lastRomNameRef.current = romName;
            initializedRef.current = false;
            appliedInitialStatesRef.current = false;
            lastCoreStateRef.current = '';
            setChannels(new Array(8).fill(true));
            setEffectiveAudioState(new Array(8).fill(true));
            setHasChannelSupport(null);
        }
    }, [romName]);

    // Initialize from core options
    useEffect(() => {
        if (coreOptions.length === 0) {
            return;
        }

        const channelOptions = getSoundChannelOptions(coreOptions);

        if (channelOptions.length === 0) {
            setHasChannelSupport(false);
            return;
        }

        const coreStateFingerprint = createCoreStateFingerprint(channelOptions);

        if (!initializedRef.current || lastCoreStateRef.current !== coreStateFingerprint) {
            setHasChannelSupport(true);
            initializedRef.current = true;
            lastCoreStateRef.current = coreStateFingerprint;

            if (initialStates && !appliedInitialStatesRef.current) {
                appliedInitialStatesRef.current = true;
                console.log('📂 Applying saved channel states:', initialStates);

                SNES_CHANNELS.forEach((ch, i) => {
                    const value = initialStates[i] ? 'enabled' : 'disabled';
                    onSetVariable(ch.varKey, value);
                });

                setChannels([...initialStates]);
                setEffectiveAudioState([...initialStates]);

                const mutedCount = initialStates.filter((s) => !s).length;
                if (mutedCount > 0) {
                    console.log(`🔇 Restored ${mutedCount} muted channel(s) from saved preferences`);
                }
            } else {
                const newChannels = initializeChannelStates(coreOptions);
                setChannels(newChannels);
                setEffectiveAudioState([...newChannels]);
                console.log('Initialized channel states from core:', newChannels);
            }
        }
    }, [coreOptions, initialStates, onSetVariable]);

    // Save states to localStorage (debounced)
    useEffect(() => {
        if (!initializedRef.current || !onSaveStates) {
            return;
        }

        const timeout = setTimeout(() => {
            onSaveStates(channels);
        }, 500);

        return () => clearTimeout(timeout);
    }, [channels, onSaveStates]);

    const needsReload = checkNeedsReload(channels, effectiveAudioState);
    const allEnabled = areAllChannelsEnabled(channels);
    const hasSupport = checkChannelSupport(coreOptions);

    const handleToggle = useCallback(
        (channelIndex: number) => {
            const channel = SNES_CHANNELS[channelIndex];
            const currentUIState = channels[channelIndex];
            const newUIState = !currentUIState;
            const newValue = newUIState ? 'enabled' : 'disabled';

            console.log(`Toggling ${channel.name}: ${currentUIState ? 'enabled' : 'disabled'} -> ${newValue}`);

            onSetVariable(channel.varKey, newValue);

            setChannels((prev) => {
                const updated = [...prev];
                updated[channelIndex] = newUIState;
                return updated;
            });

            if (!newUIState) {
                setEffectiveAudioState((prev) => updateEffectiveStateOnMute(prev, channelIndex, true));
                console.log(`  ✓ Muting works immediately - effective state updated`);
            } else {
                console.log(`  ⚠️ Unmuting requires reload - effective state unchanged`);
            }
        },
        [channels, onSetVariable],
    );

    const handleToggleAll = useCallback(() => {
        const newState = !allEnabled;
        const value = newState ? 'enabled' : 'disabled';

        console.log(`Toggling all channels to: ${value}`);

        SNES_CHANNELS.forEach((channel) => {
            onSetVariable(channel.varKey, value);
        });

        const newChannels = new Array(8).fill(newState);
        setChannels(newChannels);

        if (!newState) {
            setEffectiveAudioState(new Array(8).fill(false));
        }
    }, [allEnabled, onSetVariable]);

    const handleSolo = useCallback(
        (channelIndex: number) => {
            console.log(`Soloing channel ${channelIndex + 1}`);

            SNES_CHANNELS.forEach((channel, i) => {
                const value = i === channelIndex ? 'enabled' : 'disabled';
                onSetVariable(channel.varKey, value);
            });

            const newChannels = new Array(8).fill(false);
            newChannels[channelIndex] = true;
            setChannels(newChannels);

            setEffectiveAudioState((prev) => updateEffectiveStateOnSolo(prev, channelIndex));
        },
        [onSetVariable],
    );

    const applyWithReload = useCallback(async () => {
        if (!onReloadEmulator) {
            console.warn('No reload function provided');
            return;
        }

        setIsApplying(true);
        console.log('🔄 Full emulator reload to apply channel settings...');

        const pendingSettings = createPendingSettings(channels);

        try {
            await onReloadEmulator(pendingSettings);

            setTimeout(() => {
                setEffectiveAudioState([...channels]);
                console.log('✅ Effective state updated to match UI');
                setIsApplying(false);
            }, 2000);
        } catch (err) {
            console.error('Reload failed:', err);
            setIsApplying(false);
        }
    }, [channels, onReloadEmulator]);

    return {
        allEnabled,
        applyWithReload,
        channels,
        effectiveAudioState,
        handleSolo,
        handleToggle,
        handleToggleAll,
        hasChannelSupport,
        hasSupport,
        isApplying,
        needsReload,
    };
}
