'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { measureCurrentChannelActivity } from '@/lib/emulator/musicDetection';
import type { MusicDetectionResult } from '@/lib/emulator/types';
import { getSavedChannelStates, saveChannelStates } from '@/lib/storage/channelStates';
import { loadRomSource } from '@/lib/storage/roms';
import type { CoreOption, GameEmulatorRef } from '../components/GameEmulator';
import SoundChannelMixer from '../components/SoundChannelMixer';

const GameEmulator = dynamic(() => import('../components/GameEmulator'), {
    loading: () => (
        <div className="flex h-full min-h-[480px] w-full items-center justify-center bg-[#0c0c1e]">
            <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent" />
                <span className="font-mono text-cyan-400 text-xs tracking-wider">Initializing Core...</span>
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
    const [romError, setRomError] = useState<string | null>(null);
    const [romLoading, setRomLoading] = useState(true);
    const [romSource, setRomSource] = useState('');
    const [romBlob, setRomBlob] = useState<Blob | null>(null);
    const [romName, setRomName] = useState<string>('Unknown Game');
    const source = searchParams.get('source');

    useEffect(() => {
        let cancelled = false;
        setGameStarted(false);
        setCoreOptions([]);
        setSavedChannelStates(null);
        setRomSource('');
        setRomBlob(null);
        setRomError(null);
        setRomLoading(Boolean(source));

        if (!source) {
            return;
        }

        loadRomSource(source)
            .then((rom) => {
                if (cancelled) {
                    return;
                }

                setRomBlob(rom.blob);
                setRomName(rom.name);
                setRomSource(rom.source);
                setSavedChannelStates(getSavedChannelStates(rom.source));
            })
            .catch((error) => {
                if (!cancelled) {
                    console.error('Failed to load ROM:', error);
                    setRomError(error instanceof Error ? error.message : 'Failed to load ROM');
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setRomLoading(false);
                }
            });

        return () => {
            cancelled = true;
        };
    }, [source]);

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
        if (romSource) {
            saveChannelStates(romSource, states);
        }
    };

    const handleDetectMusic = useCallback(
        async (durationMs: number, onProgress: (percent: number) => void): Promise<MusicDetectionResult[]> => {
            const emulator = emulatorRef.current;
            if (!emulator) {
                throw new Error('The emulator is not ready');
            }

            const results = await measureCurrentChannelActivity(() => emulator.getState(), durationMs, onProgress);

            if (results.every((result) => result.maxLevel === 0)) {
                throw new Error('No audio detected. Try again while music is playing and the emulator is unmuted.');
            }

            return results;
        },
        [],
    );

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

    if (!romBlob) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#070712] px-4">
                <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f24] p-8 text-center shadow-2xl">
                    <div className="mb-4 text-4xl">{romLoading ? '⏳' : '⚠️'}</div>
                    <h1 className="mb-2 font-semibold text-lg text-zinc-100">
                        {romLoading ? 'Loading ROM…' : romError || 'No ROM loaded'}
                    </h1>
                    <p className="mb-6 text-xs text-zinc-400">
                        {romLoading ? 'Retrieving and verifying game data...' : 'Could not launch the requested game.'}
                    </p>
                    <Link
                        href="/"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95"
                    >
                        <span>← Back to Home</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#070712]">
            {/* Scanline overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.4) 1px, rgba(0,0,0,0.4) 2px)',
                    }}
                />
            </div>

            {/* Top Bar Header */}
            <header className="sticky top-0 z-40 w-full border-white/10 border-b bg-[#090918]/80 backdrop-blur-md">
                <div className="flex w-full items-center justify-between px-4 py-2.5 md:px-8">
                    <div className="flex min-w-0 items-center gap-3">
                        <Link
                            href="/"
                            className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#121226] px-3 py-1.5 font-medium text-xs text-zinc-300 transition-all duration-150 hover:border-white/20 hover:bg-[#181832] hover:text-white active:scale-95"
                        >
                            <span>←</span>
                            <span>Home</span>
                        </Link>

                        <div className="flex items-center gap-2 truncate">
                            <span className="text-base">🎮</span>
                            <h1 className="truncate font-semibold text-sm text-zinc-100 md:text-base">{romName}</h1>
                        </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                        <div
                            className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors ${
                                gameStarted
                                    ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300'
                                    : 'border-amber-500/30 bg-amber-500/15 text-amber-300'
                            }`}
                        >
                            <span
                                className={`h-2 w-2 rounded-full ${
                                    gameStarted
                                        ? 'animate-pulse bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                                        : 'bg-amber-400'
                                }`}
                            />
                            <span className="font-medium font-mono text-[10px] uppercase tracking-wider">
                                {gameStarted ? 'Running' : 'Loading'}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Game Workspace (Full-Width Responsive Dashboard) */}
            <main className="w-full flex-1 px-4 py-4 md:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                    {/* Left/Center Column: Game Screen Area */}
                    <div className="flex flex-col gap-4 lg:col-span-8 xl:col-span-8">
                        <div className="game-container relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1a] shadow-2xl">
                            {/* Emulator Container */}
                            <div className="relative aspect-[4/3] w-full bg-[#05050d]">
                                <GameEmulator
                                    key={romSource}
                                    ref={emulatorRef}
                                    game={romBlob}
                                    onReady={handleGameReady}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Audio Mixer & Quick Controls */}
                    <div className="flex flex-col gap-4 lg:col-span-4 xl:col-span-4">
                        <SoundChannelMixer
                            key={romSource}
                            onDetectMusic={handleDetectMusic}
                            onSetVariable={handleSetVariable}
                            onReloadEmulator={handleReloadEmulator}
                            onSaveStates={handleSaveChannelStates}
                            disabled={!gameStarted}
                            coreOptions={coreOptions}
                            initialStates={savedChannelStates}
                            romName={romSource}
                        />

                        {/* Compact Keyboard Controls */}
                        <div className="rounded-2xl border border-white/10 bg-[#101024]/80 p-4 shadow-xl backdrop-blur-md">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="flex items-center gap-2 font-semibold text-xs text-zinc-200 tracking-tight">
                                    <span>⌨️</span> Keyboard Controls
                                </h3>
                                <span className="font-mono text-[10px] text-zinc-500">Player 1</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                                    <div className="font-medium font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                                        Movement
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-400">
                                        <span>D-Pad</span>
                                        <span className="flex gap-1">
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200">
                                                ↑
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200">
                                                ↓
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200">
                                                ←
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200">
                                                →
                                            </kbd>
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-400">
                                        <span>Start / Select</span>
                                        <span className="flex gap-1">
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200">
                                                Enter
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200">
                                                Shift
                                            </kbd>
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                                    <div className="font-medium font-mono text-[10px] text-purple-400 uppercase tracking-wider">
                                        Buttons
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-400">
                                        <span>A / B</span>
                                        <span className="flex gap-1">
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                                S
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                                A
                                            </kbd>
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-400">
                                        <span>X / Y</span>
                                        <span className="flex gap-1">
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                                W
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                                Q
                                            </kbd>
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-400">
                                        <span>L / R</span>
                                        <span className="flex gap-1">
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                                Z
                                            </kbd>
                                            <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                                X
                                            </kbd>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2.5 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-[11px] text-zinc-400">
                                <span>
                                    ⚡ Fast-Forward:{' '}
                                    <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                        Space
                                    </kbd>
                                </span>
                                <span>
                                    Fullscreen:{' '}
                                    <kbd className="rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200">
                                        F11
                                    </kbd>
                                </span>
                            </div>
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
                <div className="flex min-h-screen items-center justify-center bg-[#070712]">
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent" />
                        <span className="font-mono text-cyan-400 text-xs tracking-wider">Loading Game...</span>
                    </div>
                </div>
            }
        >
            <PlayContent />
        </Suspense>
    );
}
