'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getSavedChannelStates, saveChannelStates } from '@/lib/storage/channelStates';
import type { CoreOption, GameEmulatorRef } from '../components/GameEmulator';
import SoundChannelMixer from '../components/SoundChannelMixer';

const GameEmulator = dynamic(() => import('../components/GameEmulator'), {
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

function PlayContent() {
    const searchParams = useSearchParams();
    const emulatorRef = useRef<GameEmulatorRef>(null);

    const [gameStarted, setGameStarted] = useState(false);
    const [coreOptions, setCoreOptions] = useState<CoreOption[]>([]);
    const [savedChannelStates, setSavedChannelStates] = useState<boolean[] | null>(null);
    const [romUrl, setRomUrl] = useState<string | null>(null);
    const [romName, setRomName] = useState<string>('Unknown Game');

    // Load ROM data from sessionStorage on mount
    useEffect(() => {
        const storedRomData = sessionStorage.getItem('romData');
        const storedRomName = sessionStorage.getItem('romName') || searchParams.get('name') || 'Unknown Game';

        if (storedRomData) {
            setRomUrl(storedRomData);
            setRomName(storedRomName);

            // Load saved channel states
            const saved = getSavedChannelStates(storedRomName);
            if (saved) {
                console.log(`📂 Found saved channel states for "${storedRomName}":`, saved);
                setSavedChannelStates(saved);
            }
        }
    }, [searchParams]);

    const handleGameReady = (options: CoreOption[]) => {
        setGameStarted(true);
        setCoreOptions(options);
    };

    const handleSetVariable = (key: string, value: string): boolean => {
        if (emulatorRef.current) {
            return emulatorRef.current.setVariable(key, value);
        }
        return false;
    };

    const handleReloadEmulator = async (pendingSettings: Record<string, string>): Promise<void> => {
        if (emulatorRef.current) {
            setGameStarted(false);
            await emulatorRef.current.reloadEmulator(pendingSettings);
        }
    };

    const handleSaveChannelStates = (states: boolean[]) => {
        if (romName) {
            saveChannelStates(romName, states);
        }
    };

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

    if (!romUrl) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0a0a1a]">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl text-red-400">No ROM loaded</h1>
                    <Link
                        href="/"
                        className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-bold text-white transition-all hover:from-purple-500 hover:to-blue-500"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

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
                <div className="mx-auto max-w-6xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link
                                href="/"
                                className="rounded-lg bg-[#2a2a4a] px-3 py-2 text-cyan-400 text-sm transition-colors hover:bg-[#3a3a5a]"
                            >
                                ← Back
                            </Link>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🎮</span>
                                <h1 className="font-bold text-[#cacafa] text-lg tracking-tight md:text-xl">
                                    {romName}
                                </h1>
                            </div>
                        </div>
                        <div
                            className={`flex items-center gap-2 rounded-full px-3 py-1 ${
                                gameStarted ? 'bg-green-500/20' : 'bg-yellow-500/20'
                            }`}
                        >
                            <div
                                className={`h-2 w-2 rounded-full ${
                                    gameStarted
                                        ? 'animate-pulse bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]'
                                        : 'bg-yellow-500'
                                }`}
                            />
                            <span className="text-[#cacafa] text-xs uppercase tracking-wider">
                                {gameStarted ? 'Running' : 'Loading'}
                            </span>
                        </div>
                    </div>
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
                            <div className="aspect-[4/3] w-full">
                                <GameEmulator ref={emulatorRef} gameUrl={romUrl} onReady={handleGameReady} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls info */}
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

                            <div className="mt-3 mb-1 text-[10px] text-cyan-400 uppercase tracking-wider">Shoulder</div>
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
                                Game auto-starts when loaded
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
            </main>
        </div>
    );
}

export default function Play() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center bg-[#0a0a1a]">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />
                        <span className="animate-pulse font-mono text-sm text-yellow-400 tracking-wider">
                            Loading...
                        </span>
                    </div>
                </div>
            }
        >
            <PlayContent />
        </Suspense>
    );
}
