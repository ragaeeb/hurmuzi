'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getValidRomExtensions, isValidRomFile } from '@/lib/emulator/utils';
import { getSavedChannelStates, saveChannelStates } from '@/lib/storage/channelStates';
import type { CoreOption, GameEmulatorRef } from './components/GameEmulator';
import SoundChannelMixer from './components/SoundChannelMixer';

const GameEmulator = dynamic(() => import('./components/GameEmulator'), {
    loading: () => (
        <div className="flex h-full min-h-[480px] items-center justify-center bg-[#0f0f23]">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
                <span className="animate-pulse font-mono text-sm text-yellow-400 tracking-wider">
                    Loading Emulator...
                </span>
            </div>
        </div>
    ),
    ssr: false,
});

export default function Home() {
    const emulatorRef = useRef<GameEmulatorRef>(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [coreOptions, setCoreOptions] = useState<CoreOption[]>([]);
    const [romUrl, setRomUrl] = useState<string | null>(null);
    const [romName, setRomName] = useState<string>('');
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

    const handleSaveChannelStates = useCallback(
        (states: boolean[]) => {
            if (romName) {
                saveChannelStates(romName, states);
            }
        },
        [romName],
    );

    const handleFileDrop = useCallback(async (file: File) => {
        if (!isValidRomFile(file.name)) {
            alert(`Invalid file type. Please use a SNES ROM file (${getValidRomExtensions()})`);
            return;
        }

        // Convert File to data URL (not blob URL)
        const reader = new FileReader();

        reader.onload = (e) => {
            const dataUrl = e.target?.result as string;

            const saved = getSavedChannelStates(file.name);

            if (saved) {
                console.log(`📂 Found saved channel states for "${file.name}":`, saved);
                setSavedChannelStates(saved);
            } else {
                setSavedChannelStates(null);
            }

            setRomName(file.name);
            setRomUrl(dataUrl); // Use data URL instead
            setGameStarted(false);
            setCoreOptions([]);
        };

        reader.readAsDataURL(file); // Read as data URL
    }, []);

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

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileDrop(files[0]);
            }
        },
        [handleFileDrop],
    );

    const handleFileSelect = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                handleFileDrop(files[0]);
            }
        },
        [handleFileDrop],
    );

    const handleClearRom = useCallback(() => {
        setRomUrl(null);
        setRomName('');
        setGameStarted(false);
        setCoreOptions([]);
        setSavedChannelStates(null);
    }, []);

    // Prevent arrow keys from scrolling
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

    return (
        <div className="min-h-screen bg-[#0a0a1a] font-mono">
            {/* Scanline overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
                    }}
                />
            </div>

            {/* Header */}
            <header className="relative border-[#2a2a4a] border-b bg-gradient-to-b from-[#1a1a3a] to-[#0f0f23]">
                <div className="mx-auto max-w-6xl px-6 py-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">🎮</span>
                            <h1 className="font-bold text-2xl tracking-tight md:text-4xl">
                                <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    SNES EMULATOR
                                </span>
                            </h1>
                            <span className="text-3xl">🕹️</span>
                        </div>
                        <p className="text-[#6a6a9a] text-sm uppercase tracking-widest">
                            {romName ? romName : 'Play SNES games in your browser'}
                        </p>
                    </div>
                </div>

                {/* Decorative pixels */}
                <div className="absolute top-4 left-4 flex gap-1 opacity-50">
                    <div className="h-2 w-2 bg-red-500" />
                    <div className="h-2 w-2 bg-yellow-400" />
                    <div className="h-2 w-2 bg-green-500" />
                </div>
                <div className="absolute top-4 right-4 flex gap-1 opacity-50">
                    <div className="h-2 w-2 bg-green-500" />
                    <div className="h-2 w-2 bg-yellow-400" />
                    <div className="h-2 w-2 bg-red-500" />
                </div>
            </header>

            {/* Main Game Container */}
            <main className="mx-auto max-w-6xl px-4 py-8">
                <div className="game-container relative">
                    {/* Glow effect */}
                    <div className="-inset-4 absolute rounded-3xl bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 blur-xl" />

                    {/* Emulator frame */}
                    <div className="relative rounded-2xl border border-[#3a3a5a] bg-gradient-to-b from-[#2a2a4a] to-[#1a1a3a] p-3 shadow-2xl">
                        <div className="overflow-hidden rounded-xl bg-[#0f0f23] shadow-inner">
                            {/* Power LED */}
                            <div className="flex items-center gap-2 border-[#1a1a3a] border-b bg-[#0a0a1a] px-4 py-2">
                                <div
                                    className={`h-2 w-2 rounded-full transition-all ${
                                        gameStarted
                                            ? 'animate-pulse bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]'
                                            : romUrl
                                              ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]'
                                              : 'bg-gray-600'
                                    }`}
                                />
                                <span className="text-[#4a4a7a] text-[10px] uppercase tracking-widest">
                                    {gameStarted ? 'Running' : romUrl ? 'Ready' : 'No ROM'}
                                </span>
                                {romUrl && (
                                    <button
                                        type="button"
                                        onClick={handleClearRom}
                                        className="ml-auto text-[10px] text-red-400/70 transition-colors hover:text-red-400"
                                    >
                                        ✕ Eject ROM
                                    </button>
                                )}
                            </div>

                            {/* Game screen or Drop Zone */}
                            <div className="aspect-[4/3] w-full">
                                {romUrl ? (
                                    <GameEmulator ref={emulatorRef} gameUrl={romUrl} onReady={handleGameReady} />
                                ) : (
                                    <label
                                        htmlFor="rom-file-input"
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`flex h-full w-full cursor-pointer flex-col items-center justify-center transition-all duration-300 ${
                                            isDragging
                                                ? 'border-2 border-yellow-400 border-dashed bg-yellow-500/10'
                                                : 'bg-[#0f0f23] hover:bg-[#151530]'
                                        }`}
                                    >
                                        <input
                                            id="rom-file-input"
                                            type="file"
                                            accept=".smc,.sfc,.fig,.swc,.bs,.st"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />
                                        <div className="pointer-events-none p-8 text-center">
                                            <div
                                                className={`mb-4 text-6xl transition-transform duration-300 ${isDragging ? 'scale-125' : ''}`}
                                            >
                                                {isDragging ? '📥' : '🎮'}
                                            </div>
                                            <h2 className="mb-2 font-bold text-[#cacafa] text-xl">
                                                {isDragging ? 'Drop ROM here!' : 'Drop a SNES ROM to play'}
                                            </h2>
                                            <p className="mb-4 text-[#6a6a9a] text-sm">
                                                Supported formats: .smc, .sfc, .fig, .swc
                                            </p>
                                            <span className="pointer-events-auto inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 font-bold text-sm text-white transition-all hover:from-purple-500 hover:to-blue-500">
                                                Click or drop file to load
                                            </span>
                                            <p className="mt-4 text-[#4a4a6a] text-[10px]">
                                                Your ROM files are processed locally and never uploaded
                                            </p>
                                        </div>
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls info */}
                {romUrl && (
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <SoundChannelMixer
                            onSetVariable={handleSetVariable}
                            onReloadEmulator={handleReloadEmulator}
                            onSaveStates={handleSaveChannelStates}
                            disabled={!gameStarted}
                            coreOptions={coreOptions}
                            initialStates={savedChannelStates}
                            romName={romName}
                        />

                        <div className="rounded-xl border border-[#2a2a4a] bg-[#1a1a3a]/50 p-5">
                            <h3 className="mb-3 flex items-center gap-2 font-bold text-sm text-yellow-400">
                                <span>⌨️</span> Keyboard Controls
                            </h3>

                            <div className="space-y-3">
                                <div className="mb-1 text-[10px] text-cyan-400 uppercase tracking-wider">D-Pad</div>
                                <div className="grid grid-cols-2 gap-1 text-xs">
                                    <div className="flex justify-between text-[#8a8aba]">
                                        <span>↑ ↓ ← →</span>
                                        <span className="text-[#cacafa]">Arrow Keys</span>
                                    </div>
                                </div>

                                <div className="mt-3 mb-1 text-[10px] text-cyan-400 uppercase tracking-wider">
                                    Face Buttons
                                </div>
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

                                <div className="mt-3 mb-1 text-[10px] text-cyan-400 uppercase tracking-wider">
                                    Shoulder
                                </div>
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

                                <div className="mt-3 mb-1 text-[10px] text-cyan-400 uppercase tracking-wider">Menu</div>
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

                                <div className="mt-3 mb-1 text-[10px] text-green-400 uppercase tracking-wider">
                                    Emulator
                                </div>
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

                        <div className="rounded-xl border border-[#2a2a4a] bg-[#1a1a3a]/50 p-5">
                            <h3 className="mb-3 flex items-center gap-2 font-bold text-green-400 text-sm">
                                <span>🎯</span> Tips
                            </h3>
                            <ul className="space-y-2 text-[#8a8aba] text-xs">
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

                            <div className="mt-4 border-[#2a2a4a] border-t pt-3">
                                <h4 className="mb-2 font-bold text-purple-400 text-xs">🎵 Sound Channel Tips</h4>
                                <ul className="space-y-1 text-[#6a6a8a] text-[10px]">
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
            <footer className="mt-12 border-[#2a2a4a] border-t py-6">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <p className="text-[#4a4a7a] text-xs">
                        Powered by{' '}
                        <a
                            href="https://emulatorjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400/80 transition-colors hover:text-yellow-400"
                        >
                            EmulatorJS
                        </a>
                        {' • '}
                        <span className="text-[#3a3a5a]">ROM files are processed locally</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
