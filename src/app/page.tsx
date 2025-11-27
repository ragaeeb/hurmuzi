"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useCallback, useEffect } from "react";
import type { GameEmulatorRef, CoreOption } from "./components/GameEmulator";
import SoundChannelMixer from "./components/SoundChannelMixer";

const GameEmulator = dynamic(() => import("./components/GameEmulator"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full min-h-[480px] bg-[#0f0f23]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-yellow-400 font-mono text-sm tracking-wider animate-pulse">
          Loading Emulator...
        </span>
      </div>
    </div>
  ),
});

// Helper to get saved channel states from localStorage
function getSavedChannelStates(romName: string): boolean[] | null {
  try {
    const saved = localStorage.getItem(`snes-channels-${romName}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === 8) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Failed to load saved channel states:", e);
  }
  return null;
}

// Helper to save channel states to localStorage
function saveChannelStates(romName: string, states: boolean[]) {
  try {
    localStorage.setItem(`snes-channels-${romName}`, JSON.stringify(states));
    console.log(`💾 Saved channel states for "${romName}"`);
  } catch (e) {
    console.warn("Failed to save channel states:", e);
  }
}

export default function Home() {
  const emulatorRef = useRef<GameEmulatorRef>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [coreOptions, setCoreOptions] = useState<CoreOption[]>([]);
  const [romUrl, setRomUrl] = useState<string | null>(null);
  const [romName, setRomName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [savedChannelStates, setSavedChannelStates] = useState<boolean[] | null>(null);

  const handleGameReady = useCallback((options: CoreOption[]) => {
    setGameStarted(true);
    setCoreOptions(options);
  }, []);

  const handleSetVariable = useCallback((key: string, value: string): boolean => {
    if (emulatorRef.current) {
      return emulatorRef.current.setVariable(key, value);
    }
    return false;
  }, []);

  const handleReloadEmulator = useCallback(async (pendingSettings: Record<string, string>): Promise<void> => {
    if (emulatorRef.current) {
      setGameStarted(false);
      await emulatorRef.current.reloadEmulator(pendingSettings);
    }
  }, []);

  // Handle saving channel states
  const handleSaveChannelStates = useCallback((states: boolean[]) => {
    if (romName) {
      saveChannelStates(romName, states);
    }
  }, [romName]);

  // Handle file drop
  const handleFileDrop = useCallback((file: File) => {
    // Validate file extension
    const validExtensions = ['.smc', '.sfc', '.fig', '.swc', '.bs', '.st'];
    const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    
    if (!validExtensions.includes(ext)) {
      alert(`Invalid file type. Please use a SNES ROM file (${validExtensions.join(', ')})`);
      return;
    }

    // Create blob URL for the ROM
    const url = URL.createObjectURL(file);
    
    // Check for saved channel states
    const saved = getSavedChannelStates(file.name);
    if (saved) {
      console.log(`📂 Found saved channel states for "${file.name}":`, saved);
      setSavedChannelStates(saved);
    } else {
      setSavedChannelStates(null);
    }
    
    setRomName(file.name);
    setRomUrl(url);
    setGameStarted(false);
    setCoreOptions([]);
  }, []);

  // Drag and drop handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileDrop(files[0]);
    }
  }, [handleFileDrop]);

  // File input handler
  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileDrop(files[0]);
    }
  }, [handleFileDrop]);

  // Clear ROM and go back to drop zone
  const handleClearRom = useCallback(() => {
    if (romUrl) {
      URL.revokeObjectURL(romUrl);
    }
    setRomUrl(null);
    setRomName("");
    setGameStarted(false);
    setCoreOptions([]);
    setSavedChannelStates(null);
  }, [romUrl]);

  // Prevent arrow keys from scrolling the page when game has focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isIframeFocused = activeElement?.tagName === 'IFRAME';
      const gameContainer = document.querySelector('.game-container');
      const isGameAreaFocused = gameContainer?.contains(activeElement as Node);
      
      if (isIframeFocused || isGameAreaFocused) {
        const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Space'];
        if (gameKeys.includes(e.key) || gameKeys.includes(e.code)) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, []);

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (romUrl) {
        URL.revokeObjectURL(romUrl);
      }
    };
  }, [romUrl]);

  return (
    <div className="min-h-screen bg-[#0a0a1a] font-mono">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative border-b border-[#2a2a4a] bg-gradient-to-b from-[#1a1a3a] to-[#0f0f23]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                  SNES EMULATOR
                </span>
              </h1>
              <span className="text-3xl">🕹️</span>
            </div>
            <p className="text-[#6a6a9a] text-sm tracking-widest uppercase">
              {romName ? romName : "Play SNES games in your browser"}
            </p>
          </div>
        </div>

        {/* Decorative pixels */}
        <div className="absolute top-4 left-4 flex gap-1 opacity-50">
          <div className="w-2 h-2 bg-red-500" />
          <div className="w-2 h-2 bg-yellow-400" />
          <div className="w-2 h-2 bg-green-500" />
        </div>
        <div className="absolute top-4 right-4 flex gap-1 opacity-50">
          <div className="w-2 h-2 bg-green-500" />
          <div className="w-2 h-2 bg-yellow-400" />
          <div className="w-2 h-2 bg-red-500" />
        </div>
      </header>

      {/* Main Game Container */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative game-container">
          {/* Glow effect behind the emulator */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 blur-xl rounded-3xl" />

          {/* Emulator frame */}
          <div className="relative bg-gradient-to-b from-[#2a2a4a] to-[#1a1a3a] rounded-2xl p-3 shadow-2xl border border-[#3a3a5a]">
            {/* Inner bezel */}
            <div className="bg-[#0f0f23] rounded-xl overflow-hidden shadow-inner">
              {/* Power LED and ROM info */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0a0a1a] border-b border-[#1a1a3a]">
                <div 
                  className={`w-2 h-2 rounded-full transition-all ${
                    gameStarted 
                      ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" 
                      : romUrl 
                        ? "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                        : "bg-gray-600"
                  }`} 
                />
                <span className="text-[10px] text-[#4a4a7a] uppercase tracking-widest">
                  {gameStarted ? "Running" : romUrl ? "Ready" : "No ROM"}
                </span>
                {romUrl && (
                  <button
                    type="button"
                    onClick={handleClearRom}
                    className="ml-auto text-[10px] text-red-400/70 hover:text-red-400 transition-colors"
                  >
                    ✕ Eject ROM
                  </button>
                )}
              </div>

              {/* Game screen or Drop Zone */}
              <div className="aspect-[4/3] w-full">
                {romUrl ? (
                  <GameEmulator 
                    ref={emulatorRef}
                    gameUrl={romUrl}
                    onReady={handleGameReady}
                  />
                ) : (
                  <label
                    htmlFor="rom-file-input"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                      isDragging 
                        ? "bg-yellow-500/10 border-2 border-dashed border-yellow-400" 
                        : "bg-[#0f0f23] hover:bg-[#151530]"
                    }`}
                  >
                    <input
                      id="rom-file-input"
                      type="file"
                      accept=".smc,.sfc,.fig,.swc,.bs,.st"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <div className="text-center p-8 pointer-events-none">
                      <div className={`text-6xl mb-4 transition-transform duration-300 ${isDragging ? 'scale-125' : ''}`}>
                        {isDragging ? "📥" : "🎮"}
                      </div>
                      <h2 className="text-xl font-bold text-[#cacafa] mb-2">
                        {isDragging ? "Drop ROM here!" : "Drop a SNES ROM to play"}
                      </h2>
                      <p className="text-sm text-[#6a6a9a] mb-4">
                        Supported formats: .smc, .sfc, .fig, .swc
                      </p>
                      <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all text-sm font-bold pointer-events-auto">
                        Click or drop file to load
                      </span>
                      <p className="text-[10px] text-[#4a4a6a] mt-4">
                        Your ROM files are processed locally and never uploaded
                      </p>
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Controls info - only show when ROM is loaded */}
        {romUrl && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sound Channel Mixer */}
            <SoundChannelMixer 
              onSetVariable={handleSetVariable}
              onReloadEmulator={handleReloadEmulator}
              onSaveStates={handleSaveChannelStates}
              disabled={!gameStarted}
              coreOptions={coreOptions}
              initialStates={savedChannelStates}
              romName={romName}
            />

            <div className="bg-[#1a1a3a]/50 rounded-xl p-5 border border-[#2a2a4a]">
              <h3 className="text-yellow-400 text-sm font-bold mb-3 flex items-center gap-2">
                <span>⌨️</span> Keyboard Controls
              </h3>
              
              {/* SNES Controller Layout */}
              <div className="space-y-3">
                {/* D-Pad */}
                <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1">D-Pad</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>↑ ↓ ← →</span>
                    <span className="text-[#cacafa]">Arrow Keys</span>
                  </div>
                </div>

                {/* Face Buttons */}
                <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1 mt-3">Face Buttons</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>A</span>
                    <span className="text-[#cacafa]">S</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>B</span>
                    <span className="text-[#cacafa]">A</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>X</span>
                    <span className="text-[#cacafa]">W</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Y</span>
                    <span className="text-[#cacafa]">Q</span>
                  </div>
                </div>

                {/* Shoulder Buttons */}
                <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1 mt-3">Shoulder</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>L</span>
                    <span className="text-[#cacafa]">Z</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>R</span>
                    <span className="text-[#cacafa]">X</span>
                  </div>
                </div>

                {/* Menu Buttons */}
                <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1 mt-3">Menu</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Start</span>
                    <span className="text-[#cacafa]">Enter</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Select</span>
                    <span className="text-[#cacafa]">Shift</span>
                  </div>
                </div>

                {/* Emulator Controls */}
                <div className="text-[10px] text-green-400 uppercase tracking-wider mb-1 mt-3">Emulator</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Fast Fwd</span>
                    <span className="text-[#cacafa]">Space</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Save State</span>
                    <span className="text-[#cacafa]">F2</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Load State</span>
                    <span className="text-[#cacafa]">F4</span>
                  </div>
                  <div className="flex justify-between text-[#8a8aba]">
                    <span>Fullscreen</span>
                    <span className="text-[#cacafa]">F11</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a3a]/50 rounded-xl p-5 border border-[#2a2a4a]">
              <h3 className="text-green-400 text-sm font-bold mb-3 flex items-center gap-2">
                <span>🎯</span> Tips
              </h3>
              <ul className="text-xs text-[#8a8aba] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  Click play to start the game
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  Use fullscreen for best experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  Progress is saved automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  Hold Space for fast-forward
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  Check emulator menu for more options
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-[#2a2a4a]">
                <h4 className="text-purple-400 text-xs font-bold mb-2">🎵 Sound Channel Tips</h4>
                <ul className="text-[10px] text-[#6a6a8a] space-y-1">
                  <li>• CH 1-4 typically carry melody/music</li>
                  <li>• CH 5-8 often have drums/SFX</li>
                  <li>• Mute CH 1-5 to hear just SFX</li>
                  <li>• Your channel settings are saved per ROM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2a2a4a] mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#4a4a7a] text-xs">
            Powered by{" "}
            <a
              href="https://emulatorjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400/80 hover:text-yellow-400 transition-colors"
            >
              EmulatorJS
            </a>
            {" • "}
            <span className="text-[#3a3a5a]">ROM files are processed locally</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
