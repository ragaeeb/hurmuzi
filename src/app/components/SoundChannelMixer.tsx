'use client';

import { useCallback, useState } from 'react';
import { useChannelMixer } from '@/hooks/useChannelMixer';
import { findLikelyMusicChannels } from '@/lib/emulator/channelState';
import type { CoreOption, MusicDetectionResult } from '@/lib/emulator/types';
import { SNES_CHANNELS } from '@/lib/emulator/types';
import { getAudioOptions } from '@/lib/emulator/utils';
import ChannelButton from './ChannelButton';

interface SoundChannelMixerProps {
    onDetectMusic?: (durationMs: number, onProgress: (percent: number) => void) => Promise<MusicDetectionResult[]>;
    onSetVariable: (key: string, value: string) => boolean;
    onReloadEmulator?: (pendingSettings: Record<string, string>) => Promise<void>;
    onSaveStates?: (states: boolean[]) => void;
    disabled?: boolean;
    coreOptions?: CoreOption[];
    initialStates?: boolean[] | null;
    romName?: string;
}

export default function SoundChannelMixer({
    onDetectMusic,
    onSetVariable,
    onReloadEmulator,
    onSaveStates,
    disabled = false,
    coreOptions = [],
    initialStates = null,
    romName = '',
}: SoundChannelMixerProps) {
    const [showOptions, setShowOptions] = useState(false);
    const [isDetectingMusic, setIsDetectingMusic] = useState(false);
    const [detectionProgress, setDetectionProgress] = useState(0);
    const [detectionResults, setDetectionResults] = useState<MusicDetectionResult[]>([]);
    const [detectionError, setDetectionError] = useState('');
    const [sampleDurationMs, setSampleDurationMs] = useState(3000);

    const {
        channels,
        effectiveAudioState,
        hasChannelSupport,
        needsReload,
        allEnabled,
        isApplying,
        handleToggle,
        handleToggleAll,
        handleSolo,
        applyWithReload,
    } = useChannelMixer({ coreOptions, initialStates, onReloadEmulator, onSaveStates, onSetVariable, romName });

    const audioOptions = getAudioOptions(coreOptions);
    const likelyMusicChannels = findLikelyMusicChannels(detectionResults);
    const controlsDisabled = disabled || isApplying || isDetectingMusic;

    const handleAudioOptionChange = useCallback(
        (key: string, value: string) => {
            onSetVariable(key, value);
        },
        [onSetVariable],
    );

    const handleDetectMusic = useCallback(async () => {
        if (!onDetectMusic) {
            return;
        }

        setIsDetectingMusic(true);
        setDetectionProgress(0);
        setDetectionResults([]);
        setDetectionError('');

        try {
            setDetectionResults(await onDetectMusic(sampleDurationMs, setDetectionProgress));
        } catch (error) {
            setDetectionError(error instanceof Error ? error.message : 'Music detection failed');
        } finally {
            setIsDetectingMusic(false);
            setDetectionProgress(0);
        }
    }, [onDetectMusic, sampleDurationMs]);

    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101024]/90 p-4 shadow-xl backdrop-blur-md">
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 text-xs">
                        🎛️
                    </span>
                    <h3 className="font-semibold text-sm text-zinc-200 tracking-tight">Audio Channels</h3>
                </div>

                <button
                    type="button"
                    onClick={handleToggleAll}
                    disabled={controlsDisabled}
                    className={`relative overflow-hidden rounded-full px-3 py-1 font-medium text-xs tracking-tight transition-all duration-150 active:scale-95 ${
                        controlsDisabled
                            ? 'cursor-not-allowed border border-white/5 bg-zinc-900 text-zinc-600'
                            : allEnabled
                              ? 'border border-red-500/30 bg-red-500/15 text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.15)] hover:border-red-500/50 hover:bg-red-500/25'
                              : 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 hover:bg-emerald-500/25'
                    }`}
                >
                    {allEnabled ? 'Mute All' : 'Enable All'}
                </button>
            </div>

            {disabled && (
                <p className="mb-3 rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center text-xs text-zinc-500">
                    {isDetectingMusic ? 'Music detection in progress…' : 'Start the game to enable controls'}
                </p>
            )}

            {!disabled && hasChannelSupport === false && (
                <div className="mb-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2">
                    <p className="text-amber-400 text-xs">⚠️ Sound channel options not found in this core.</p>
                </div>
            )}

            {/* Music detection bar */}
            {(!disabled || isDetectingMusic) && hasChannelSupport && (
                <div className="mb-3 space-y-1.5">
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={handleDetectMusic}
                            disabled={isApplying || isDetectingMusic || !onDetectMusic}
                            className={`group relative flex-1 overflow-hidden rounded-xl border px-3 py-2 font-semibold text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${
                                isDetectingMusic
                                    ? 'cursor-wait border-purple-500/50 bg-purple-500/20 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                    : isApplying || !onDetectMusic
                                      ? 'cursor-not-allowed border-white/5 bg-[#18182e] text-zinc-600'
                                      : 'border-purple-500/30 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-purple-600/30 text-purple-200 shadow-[0_0_12px_rgba(147,51,234,0.15)] hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]'
                            }`}
                        >
                            {/* Shimmer sweep */}
                            <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <span className="relative flex items-center justify-center gap-1.5">
                                {isDetectingMusic ? (
                                    <>
                                        <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-purple-300 border-t-transparent" />
                                        <span>Sampling voices… {detectionProgress}%</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-purple-400">✨</span>
                                        <span>Detect Music Channels</span>
                                    </>
                                )}
                            </span>
                        </button>

                        <label className="sr-only" htmlFor="music-sample-duration">
                            Music sampling time
                        </label>
                        <select
                            id="music-sample-duration"
                            value={sampleDurationMs}
                            onChange={(event) => setSampleDurationMs(Number(event.target.value))}
                            disabled={isDetectingMusic}
                            className="rounded-xl border border-white/10 bg-[#16162c] px-2.5 font-mono text-xs text-zinc-300 transition-colors focus:border-purple-400/50 focus:outline-none"
                        >
                            <option value={2000}>2s</option>
                            <option value={3000}>3s</option>
                            <option value={5000}>5s</option>
                            <option value={10000}>10s</option>
                        </select>
                    </div>

                    <p className="text-center font-mono text-[9px] text-zinc-500">
                        Live snapshot of SPC700 voices • 0 reload
                    </p>
                </div>
            )}

            {detectionError && (
                <p
                    role="alert"
                    className="mb-3 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-red-300 text-xs"
                >
                    {detectionError}
                </p>
            )}

            {/* Channel matrix */}
            <div className="grid grid-cols-4 gap-2">
                {SNES_CHANNELS.map((channel, index) => {
                    const isUIEnabled = channels[index];
                    const isEffectivelyPlaying = effectiveAudioState[index];
                    const needsReloadForThis = isUIEnabled && !isEffectivelyPlaying;
                    const detectionResult = detectionResults[index];

                    return (
                        <ChannelButton
                            key={channel.id}
                            channel={channel}
                            isUIEnabled={isUIEnabled}
                            isEffectivelyPlaying={isEffectivelyPlaying}
                            needsReloadForThis={needsReloadForThis}
                            activityPercent={
                                detectionResult ? Math.round(detectionResult.activeRatio * 100) : undefined
                            }
                            isLikelyMusic={likelyMusicChannels.includes(channel.id)}
                            disabled={controlsDisabled}
                            onToggle={() => handleToggle(index)}
                            onSolo={() => handleSolo(index)}
                        />
                    );
                })}
            </div>

            {/* Pending reload alert & button */}
            {!disabled && needsReload && (
                <div className="mt-3 border-white/10 border-t pt-3">
                    <button
                        type="button"
                        onClick={applyWithReload}
                        disabled={isApplying || isDetectingMusic || !onReloadEmulator}
                        className={`group relative w-full overflow-hidden rounded-xl border px-4 py-2.5 font-bold text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${
                            isApplying
                                ? 'cursor-wait border-cyan-500/20 bg-cyan-950/30 text-cyan-400'
                                : 'animate-pulse-glow border-cyan-400/60 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110'
                        }`}
                    >
                        <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <span className="relative flex items-center justify-center gap-2">
                            {isApplying ? (
                                <>
                                    <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                    <span>Reloading Emulator...</span>
                                </>
                            ) : (
                                <>
                                    <span>🔊</span>
                                    <span>Apply Changes (Preserves Game State)</span>
                                </>
                            )}
                        </span>
                    </button>
                    <p className="mt-1.5 text-center font-mono text-[9px] text-amber-400/80">
                        Unmuting requires restarting audio engine. Game state will be restored.
                    </p>
                </div>
            )}

            {/* Core audio options dropdown */}
            {!disabled && audioOptions.length > 0 && (
                <div className="mt-3 border-white/5 border-t pt-2">
                    <button
                        type="button"
                        onClick={() => setShowOptions(!showOptions)}
                        disabled={isDetectingMusic}
                        className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 transition-colors hover:text-cyan-400"
                    >
                        <span className="text-[8px]">{showOptions ? '▼' : '▶'}</span>
                        Audio Options ({audioOptions.length})
                    </button>

                    {showOptions && (
                        <div className="mt-2 space-y-2 rounded-xl border border-white/5 bg-[#141428] p-2.5">
                            {audioOptions.map((opt) => (
                                <div key={opt.key} className="flex flex-col gap-1">
                                    <label
                                        htmlFor={`audio-opt-${opt.key}`}
                                        className="font-mono text-[10px] text-zinc-400"
                                    >
                                        {opt.displayName}
                                    </label>
                                    <select
                                        id={`audio-opt-${opt.key}`}
                                        value={opt.currentValue}
                                        onChange={(e) => handleAudioOptionChange(opt.key, e.target.value)}
                                        disabled={isDetectingMusic}
                                        className="rounded-lg border border-white/10 bg-[#0d0d1b] px-2 py-1 font-mono text-[10px] text-zinc-200 focus:border-cyan-400/50 focus:outline-none"
                                    >
                                        {opt.values.map((val) => (
                                            <option key={val} value={val}>
                                                {val}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Footer status */}
            <div className="mt-3 border-white/5 border-t pt-2">
                <p className="text-center font-mono text-[9px] text-zinc-500">
                    SNES SPC700 Audio • Settings saved per ROM
                </p>
            </div>
        </div>
    );
}
