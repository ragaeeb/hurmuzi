import { useCallback } from 'react';
import type { EmulatorInstance, IframeWindow } from '@/lib/emulator/types';
import { parseCoreOptions } from '@/lib/emulator/utils';

interface UseEmulatorSetupOptions {
    core: string;
    gameUrl: string;
    iframeKey: number;
    onReady?: (coreOptions: any[]) => void;
    onGameStart?: () => void;
    pendingSettings?: Record<string, string> | null;
    pendingState?: Uint8Array | null;
}

export function useEmulatorSetup({
    core,
    gameUrl,
    iframeKey,
    onReady,
    onGameStart,
    pendingSettings,
    pendingState,
}: UseEmulatorSetupOptions) {
    const getIframeWindow = useCallback((iframe: HTMLIFrameElement): IframeWindow | null => {
        return (iframe.contentWindow as IframeWindow) || null;
    }, []);

    const getEmulator = useCallback(
        (iframe: HTMLIFrameElement): EmulatorInstance | null => {
            const iframeWin = getIframeWindow(iframe);
            return iframeWin?.EJS_emulator || null;
        },
        [getIframeWindow],
    );

    const setupIframe = useCallback(
        (iframe: HTMLIFrameElement) => {
            const iframeWin = getIframeWindow(iframe);
            if (!iframeWin || iframeWin.__setupComplete) {
                return;
            }

            const isReload = pendingSettings !== null;
            console.log(
                `%c🎮 Setting up emulator iframe (key: ${iframeKey}, reload: ${isReload})`,
                'color: #00ff00; font-weight: bold',
            );

            iframeWin.__setupComplete = true;

            const iframeDoc = iframe.contentDocument;
            if (!iframeDoc) {
                return;
            }

            // Write HTML content
            iframeDoc.open();
            iframeDoc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { width: 100%; height: 100%; overflow: hidden; background: #0f0f23; }
            #game { width: 100%; height: 100%; }
          </style>
        </head>
        <body>
          <div id="game"></div>
        </body>
        </html>
      `);
            iframeDoc.close();

            // Configure EmulatorJS
            iframeWin.EJS_player = '#game';
            iframeWin.EJS_core = core;
            iframeWin.EJS_gameUrl = gameUrl;
            iframeWin.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
            iframeWin.EJS_color = '#1a1a2e';
            iframeWin.EJS_startOnLoaded = true;

            // Store current values in closure
            const currentPendingSettings = pendingSettings;
            const currentPendingState = pendingState;

            // Game start callback
            iframeWin.EJS_onGameStart = () => {
                console.log('%c🎮 Game started in iframe!', 'color: #00ff00; font-weight: bold');
                onGameStart?.();

                // Apply pending settings if reload
                if (currentPendingSettings && Object.keys(currentPendingSettings).length > 0) {
                    console.log('📝 Applying pending settings...');
                    setTimeout(() => {
                        const emulator = iframeWin.EJS_emulator;
                        if (emulator?.menuOptionChanged) {
                            for (const [key, value] of Object.entries(currentPendingSettings)) {
                                emulator.menuOptionChanged(key, value);
                                console.log(`  ✓ Applied: ${key} = ${value}`);
                            }
                        }

                        // Load pending state
                        if (currentPendingState) {
                            console.log('📂 Loading saved state...');
                            setTimeout(() => {
                                if (iframeWin.EJS_emulator?.gameManager?.loadState) {
                                    iframeWin.EJS_emulator.gameManager.loadState(currentPendingState);
                                    console.log('✅ State restored!');
                                }
                            }, 500);
                        }
                    }, 300);
                }

                // Log core options
                setTimeout(() => {
                    const emulator = iframeWin.EJS_emulator;
                    if (!emulator?.gameManager?.getCoreOptions) {
                        return;
                    }

                    const optionsString = emulator.gameManager.getCoreOptions();
                    const options = parseCoreOptions(optionsString);

                    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00');
                    console.log(
                        `%c  SNES9X CORE OPTIONS (Total: ${options.length})`,
                        'color: #00ff00; font-weight: bold; font-size: 14px',
                    );
                    console.log(
                        '%c═══════════════════════════════════════════════════════════════\n',
                        'color: #00ff00',
                    );

                    onReady?.(options);
                }, 500);
            };

            // Load EmulatorJS script
            const script = iframeDoc.createElement('script');
            script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
            script.async = true;
            iframeDoc.body.appendChild(script);
        },
        [core, gameUrl, iframeKey, onReady, onGameStart, pendingSettings, pendingState, getIframeWindow],
    );

    return { getEmulator, getIframeWindow, setupIframe };
}
