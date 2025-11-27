"use client";

import { useEffect, useRef, useCallback, forwardRef, useImperativeHandle, useState } from "react";

// Types for the emulator inside the iframe
interface GameManagerInstance {
  getCoreOptions: () => string;
  setVariable: (option: string, value: string) => void;
  getState?: () => Uint8Array;
  loadState?: (state: Uint8Array) => void;
  restart?: () => void;
}

interface EmulatorInstance {
  gameManager?: GameManagerInstance;
  setVolume?: (volume: number) => void;
  volume?: number;
  menuOptionChanged?: (option: string, value: string) => void;
  playing?: boolean;
}

interface IframeWindow extends Window {
  EJS_player: string;
  EJS_core: string;
  EJS_gameUrl: string;
  EJS_pathtodata: string;
  EJS_color: string;
  EJS_startOnLoaded: boolean;
  EJS_emulator: EmulatorInstance | null;
  EJS_onGameStart: () => void;
  __setupComplete?: boolean;
}

export interface CoreOption {
  key: string;
  currentValue: string;
  values: string[];
  displayName: string;
}

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

function parseCoreOptions(optionsString: string): CoreOption[] {
  if (!optionsString) return [];
  
  const options: CoreOption[] = [];
  const lines = optionsString.split("\n").filter(line => line.trim());
  
  for (const line of lines) {
    const [keyPart, valuesPart] = line.split("; ");
    if (!keyPart || !valuesPart) continue;
    
    const [key, currentValue] = keyPart.split("|");
    const values = valuesPart.split("|");
    
    const displayName = key
      .replace(/^snes9x[-_]/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase());
    
    options.push({
      key: key.trim(),
      currentValue: currentValue?.trim() || values[0]?.replace("(Default) ", "").trim(),
      values: values.map(v => v.replace("(Default) ", "").trim()),
      displayName
    });
  }
  
  return options;
}

// Debug helper
function logResourceDebug(label: string) {
  console.log(`%c═══ RESOURCE DEBUG: ${label} ═══`, "color: #ff00ff; font-weight: bold");
  // @ts-expect-error - Chrome-specific API
  const memory = performance.memory;
  if (memory) {
    console.log(`  📊 JS Heap: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`);
  }
  console.log(`  📄 Iframes: ${document.querySelectorAll('iframe').length}`);
  console.log(`%c═══════════════════════════════════════`, "color: #ff00ff");
}

const GameEmulator = forwardRef<GameEmulatorRef, GameEmulatorProps>(
  function GameEmulator({ gameUrl, core = "snes9x", onReady }, ref) {
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

    // Get the iframe's window object
    const getIframeWindow = useCallback((): IframeWindow | null => {
      if (iframeRef.current?.contentWindow) {
        return iframeRef.current.contentWindow as IframeWindow;
      }
      return null;
    }, []);

    // Get the emulator instance from the iframe
    const getEmulator = useCallback((): EmulatorInstance | null => {
      const iframeWin = getIframeWindow();
      return iframeWin?.EJS_emulator || null;
    }, [getIframeWindow]);

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
        console.warn("Failed to get core options:", err);
        return coreOptionsRef.current;
      }
    }, [getEmulator]);

    const refreshCoreOptions = useCallback((): CoreOption[] => {
      return getCoreOptions();
    }, [getCoreOptions]);

    const setVariable = useCallback((option: string, value: string): boolean => {
      const emulator = getEmulator();
      if (!emulator) {
        console.warn("Emulator not ready");
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
          console.warn("No method available to set variable");
          return false;
        }

        setTimeout(() => {
          const options = getCoreOptions();
          const opt = options.find(o => o.key === option);
          if (opt) {
            const match = opt.currentValue === value;
            console.log(`📋 Verify: ${option} = ${opt.currentValue} ${match ? '✓' : '⚠️ MISMATCH'}`);
          }
        }, 100);

        return true;
      } catch (err) {
        console.warn("Failed to set variable:", err);
        return false;
      }
    }, [getEmulator, getCoreOptions]);

    const getState = useCallback((): Uint8Array | null => {
      const emulator = getEmulator();
      if (emulator?.gameManager?.getState) {
        return emulator.gameManager.getState();
      }
      return null;
    }, [getEmulator]);

    const loadState = useCallback((state: Uint8Array): void => {
      const emulator = getEmulator();
      if (emulator?.gameManager?.loadState) {
        emulator.gameManager.loadState(state);
      }
    }, [getEmulator]);

    const isReady = useCallback(() => emulatorReady.current, []);

    // Full emulator reload using iframe destruction
    const reloadEmulator = useCallback(async (pendingSettings: Record<string, string>): Promise<void> => {
      console.log("%c🔄 FULL EMULATOR RELOAD (iframe method)", "color: #00ffff; font-weight: bold; font-size: 14px");
      console.log("📝 Pending settings:", pendingSettings);
      
      logResourceDebug("BEFORE RELOAD");

      // 1. Save the current game state
      const emulator = getEmulator();
      if (emulator?.gameManager?.getState) {
        const savedState = emulator.gameManager.getState();
        console.log("💾 State captured:", savedState?.length, "bytes");
        pendingStateRef.current = savedState;
      }

      // 2. Store settings to apply after reload
      pendingSettingsRef.current = pendingSettings;

      // 3. Mark as not ready
      emulatorReady.current = false;

      // 4. Destroy and recreate the iframe by changing the key
      console.log("🗑️ Destroying iframe...");
      setIframeKey(k => k + 1);
      
    }, [getEmulator]);

    useImperativeHandle(ref, () => ({
      setVariable,
      getCoreOptions,
      refreshCoreOptions,
      isReady,
      getEmulator,
      reloadEmulator,
      getState,
      loadState,
    }), [setVariable, getCoreOptions, refreshCoreOptions, isReady, getEmulator, reloadEmulator, getState, loadState]);

    // Setup function - extracted for clarity
    const setupIframe = useCallback((iframe: HTMLIFrameElement) => {
      const iframeWin = iframe.contentWindow as IframeWindow;
      if (!iframeWin) {
        console.warn("No iframe window");
        return;
      }
      
      // Check if this iframe was already setup (in its own window)
      if (iframeWin.__setupComplete) {
        console.log("Skipping duplicate setup - iframe already initialized");
        return;
      }
      
      const isReload = pendingSettingsRef.current !== null;
      
      console.log(`%c🎮 Setting up emulator iframe (key: ${iframeKey}, reload: ${isReload})`, "color: #00ff00; font-weight: bold");
      
      // Mark as setup in the iframe's window
      iframeWin.__setupComplete = true;

      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) {
        console.warn("No iframe document");
        return;
      }

      // Write the HTML content for the iframe
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

      // Configure EmulatorJS in the iframe's window
      iframeWin.EJS_player = "#game";
      iframeWin.EJS_core = core;
      iframeWin.EJS_gameUrl = gameUrl;
      iframeWin.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
      iframeWin.EJS_color = "#1a1a2e";
      iframeWin.EJS_startOnLoaded = isReload; // Auto-start on reload

      // Capture current values in closure
      const currentPendingSettings = pendingSettingsRef.current;
      const currentPendingState = pendingStateRef.current;

      // Set up the game start callback
      iframeWin.EJS_onGameStart = () => {
        console.log("%c🎮 Game started in iframe!", "color: #00ff00; font-weight: bold");
        emulatorReady.current = true;

        // Apply pending settings if this is a reload
        if (currentPendingSettings && Object.keys(currentPendingSettings).length > 0) {
          console.log("📝 Applying pending settings...");
          setTimeout(() => {
            const emulator = iframeWin.EJS_emulator;
            if (emulator?.menuOptionChanged) {
              for (const [key, value] of Object.entries(currentPendingSettings)) {
                emulator.menuOptionChanged(key, value);
                console.log(`  ✓ Applied: ${key} = ${value}`);
              }
            }
            // Clear pending settings
            pendingSettingsRef.current = null;

            // Load pending state
            if (currentPendingState) {
              console.log("📂 Loading saved state...");
              setTimeout(() => {
                if (iframeWin.EJS_emulator?.gameManager?.loadState) {
                  iframeWin.EJS_emulator.gameManager.loadState(currentPendingState);
                  console.log("✅ State restored!");
                  pendingStateRef.current = null;
                  
                  setTimeout(() => logResourceDebug("AFTER RELOAD COMPLETE"), 1000);
                }
              }, 500);
            }
          }, 300);
        }

        // Log core options
        setTimeout(() => {
          const emulator = iframeWin.EJS_emulator;
          if (!emulator?.gameManager?.getCoreOptions) return;
          
          const optionsString = emulator.gameManager.getCoreOptions();
          const options = parseCoreOptions(optionsString);
          coreOptionsRef.current = options;
          
          console.log("%c═══════════════════════════════════════════════════════════════", "color: #00ff00");
          console.log("%c  SNES9X CORE OPTIONS (Total: " + options.length + ")", "color: #00ff00; font-weight: bold; font-size: 14px");
          console.log("%c═══════════════════════════════════════════════════════════════", "color: #00ff00");
          
          const soundChannelOptions = options.filter(opt => opt.key.match(/snes9x_sndchan_\d/));
          
          if (soundChannelOptions.length > 0) {
            console.log("%c\n🔊 SOUND CHANNEL OPTIONS FOUND:", "color: #00ff00; font-weight: bold");
            soundChannelOptions.forEach(opt => {
              console.log(`  %c${opt.key}%c = %c${opt.currentValue}%c (values: ${opt.values.join(", ")})`,
                "color: #66ccff", "color: white", "color: #ffff00", "color: #888");
            });
            console.log("%c\n✓ Channel muting is supported!", "color: #00ff00");
          }
          
          console.log("%c═══════════════════════════════════════════════════════════════\n", "color: #00ff00");
          
          onReadyRef.current?.(options);
        }, 500);
      };

      // Load EmulatorJS script in the iframe
      const script = iframeDoc.createElement("script");
      script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
      script.async = true;
      iframeDoc.body.appendChild(script);
      
    }, [iframeKey, core, gameUrl]);

    // Effect to setup iframe when it's available
    useEffect(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      
      // Use iframeKey to ensure we're tracking the right iframe
      const currentKey = iframeKey;
      console.log(`Setting up iframe effect for key ${currentKey}`);
      
      // Try to setup immediately if document is ready
      if (iframe.contentDocument?.readyState === 'complete') {
        setupIframe(iframe);
      }
      
      // Also setup on load event (handles most cases)
      const handleLoad = () => {
        setupIframe(iframe);
      };
      
      iframe.addEventListener('load', handleLoad);
      
      return () => {
        iframe.removeEventListener('load', handleLoad);
      };
    }, [setupIframe, iframeKey]);

    return (
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ minHeight: "480px" }}
      >
        <iframe
          key={iframeKey}
          ref={iframeRef}
          title="SNES Emulator"
          className="w-full h-full border-0"
          style={{ minHeight: "480px" }}
          sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        />
      </div>
    );
  }
);

export default GameEmulator;
