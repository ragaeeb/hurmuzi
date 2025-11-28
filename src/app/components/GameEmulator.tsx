'use client';

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useEmulatorSetup } from '@/hooks/useEmulatorSetup';
import type { CoreOption, EmulatorInstance } from '@/lib/emulator/types';
import { parseCoreOptions } from '@/lib/emulator/utils';

interface GameEmulatorProps {
    gameUrl: string;
    core?: string;
    onReady?: (coreOptions: CoreOption[]) => void;
}

export interface GameEmulatorRef {
    setVariable: (option: string, value: string) => boolean;
    getCoreOptions: () => CoreOption[];
    isReady: () => boolean;
    getEmulator: () => EmulatorInstance | null;
    refreshCoreOptions: () => CoreOption[];
    reloadEmulator: (pendingSettings: Record<string, string>) => Promise<void>;
    getState: () => Uint8Array | null;
    loadState: (state: Uint8Array) => void;
}

const GameEmulator = forwardRef<GameEmulatorRef, GameEmulatorProps>(function GameEmulator(
    { gameUrl, core = 'snes9x', onReady },
    ref,
) {
    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const emulatorReady = useRef(false);
    const coreOptionsRef = useRef<CoreOption[]>([]);
    const pendingStateRef = useRef<Uint8Array | null>(null);
    const pendingSettingsRef = useRef<Record<string, string> | null>(null);
    const [iframeKey, setIframeKey] = useState(0);
    const onReadyRef = useRef(onReady);

    useEffect(() => {
        onReadyRef.current = onReady;
    }, [onReady]);

    const handleGameStart = useCallback(() => {
        emulatorReady.current = true;
    }, []);

    const handleReady = useCallback((options: CoreOption[]) => {
        coreOptionsRef.current = options;
        onReadyRef.current?.(options);
    }, []);

    const { setupIframe, getEmulator: getEmulatorFromHook } = useEmulatorSetup({
        core,
        gameUrl,
        iframeKey,
        onGameStart: handleGameStart,
        onReady: handleReady,
        pendingSettings: pendingSettingsRef.current,
        pendingState: pendingStateRef.current,
    });

    const getEmulator = useCallback((): EmulatorInstance | null => {
        if (!iframeRef.current) {
            return null;
        }
        return getEmulatorFromHook(iframeRef.current);
    }, [getEmulatorFromHook]);

    const getCoreOptions = useCallback((): CoreOption[] => {
        const emulator = getEmulator();
        if (!emulator?.gameManager?.getCoreOptions) {
            return coreOptionsRef.current;
        }
        try {
            const optionsString = emulator.gameManager.getCoreOptions();
            const options = parseCoreOptions(optionsString);
            coreOptionsRef.current = options;
            return options;
        } catch (err) {
            console.warn('Failed to get core options:', err);
            return coreOptionsRef.current;
        }
    }, [getEmulator]);

    const refreshCoreOptions = useCallback((): CoreOption[] => {
        return getCoreOptions();
    }, [getCoreOptions]);

    const setVariable = useCallback(
        (option: string, value: string): boolean => {
            const emulator = getEmulator();
            if (!emulator) {
                console.warn('Emulator not ready');
                return false;
            }

            try {
                if (emulator.menuOptionChanged) {
                    emulator.menuOptionChanged(option, value);
                    console.log(`✓ Set via menuOptionChanged: ${option} = ${value}`);
                } else if (emulator.gameManager?.setVariable) {
                    emulator.gameManager.setVariable(option, value);
                    console.log(`✓ Set via gameManager.setVariable: ${option} = ${value}`);
                } else {
                    console.warn('No method available to set variable');
                    return false;
                }

                setTimeout(() => {
                    const options = getCoreOptions();
                    const opt = options.find((o) => o.key === option);
                    if (opt) {
                        const match = opt.currentValue === value;
                        console.log(`📋 Verify: ${option} = ${opt.currentValue} ${match ? '✓' : '⚠️ MISMATCH'}`);
                    }
                }, 100);

                return true;
            } catch (err) {
                console.warn('Failed to set variable:', err);
                return false;
            }
        },
        [getEmulator, getCoreOptions],
    );

    const getState = useCallback((): Uint8Array | null => {
        const emulator = getEmulator();
        if (emulator?.gameManager?.getState) {
            return emulator.gameManager.getState();
        }
        return null;
    }, [getEmulator]);

    const loadState = useCallback(
        (state: Uint8Array): void => {
            const emulator = getEmulator();
            if (emulator?.gameManager?.loadState) {
                emulator.gameManager.loadState(state);
            }
        },
        [getEmulator],
    );

    const isReady = useCallback(() => emulatorReady.current, []);

    const reloadEmulator = useCallback(
        async (pendingSettings: Record<string, string>): Promise<void> => {
            console.log(
                '%c🔄 FULL EMULATOR RELOAD (iframe method)',
                'color: #00ffff; font-weight: bold; font-size: 14px',
            );
            console.log('📝 Pending settings:', pendingSettings);

            // Save current game state
            const emulator = getEmulator();
            if (emulator?.gameManager?.getState) {
                const savedState = emulator.gameManager.getState();
                console.log('💾 State captured:', savedState?.length, 'bytes');
                pendingStateRef.current = savedState;
            }

            // Store settings to apply after reload
            pendingSettingsRef.current = pendingSettings;

            // Mark as not ready
            emulatorReady.current = false;

            // Destroy and recreate iframe
            console.log('🗑️ Destroying iframe...');
            setIframeKey((k) => k + 1);
        },
        [getEmulator],
    );

    useImperativeHandle(
        ref,
        () => ({
            getCoreOptions,
            getEmulator,
            getState,
            isReady,
            loadState,
            refreshCoreOptions,
            reloadEmulator,
            setVariable,
        }),
        [setVariable, getCoreOptions, refreshCoreOptions, isReady, getEmulator, reloadEmulator, getState, loadState],
    );

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) {
            return;
        }

        // Setup immediately if document ready
        if (iframe.contentDocument?.readyState === 'complete') {
            setupIframe(iframe);
        }

        // Also setup on load event
        const handleLoad = () => {
            setupIframe(iframe);
        };

        iframe.addEventListener('load', handleLoad);

        return () => {
            iframe.removeEventListener('load', handleLoad);
        };
    }, [setupIframe]);

    return (
        <div ref={containerRef} className="h-full w-full" style={{ minHeight: '480px' }}>
            <iframe
                key={iframeKey}
                ref={iframeRef}
                title="Hurmuzi"
                className="h-full w-full border-0"
                style={{ minHeight: '480px' }}
                sandbox="allow-scripts allow-same-origin allow-pointer-lock"
            />
        </div>
    );
});

export default GameEmulator;
export type { CoreOption };
