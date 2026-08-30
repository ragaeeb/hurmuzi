'use client';

import type { SnesChannel } from '@/lib/emulator/types';

interface ChannelButtonProps {
    activityPercent?: number;
    channel: SnesChannel;
    isUIEnabled: boolean;
    isEffectivelyPlaying: boolean;
    isLikelyMusic?: boolean;
    needsReloadForThis: boolean;
    disabled: boolean;
    onToggle: () => void;
    onSolo: () => void;
}

const EQ_ANIMATIONS = [
    'animate-eq-1',
    'animate-eq-2',
    'animate-eq-3',
    'animate-eq-4',
    'animate-eq-2',
    'animate-eq-1',
    'animate-eq-3',
];

export default function ChannelButton({
    activityPercent,
    channel,
    isUIEnabled,
    isEffectivelyPlaying,
    isLikelyMusic = false,
    needsReloadForThis,
    disabled,
    onToggle,
    onSolo,
}: ChannelButtonProps) {
    const isLive = isEffectivelyPlaying && !disabled;
    const toggleLabel = needsReloadForThis
        ? `${channel.name} - Pending reload to unmute`
        : isUIEnabled
          ? `Mute ${channel.name}${activityPercent !== undefined ? ` (${activityPercent}% active)` : ''}`
          : `Unmute ${channel.name}`;

    return (
        <div className="group/channel flex flex-col items-center gap-1">
            {/* Channel toggle button */}
            <button
                type="button"
                onClick={onToggle}
                disabled={disabled}
                aria-label={toggleLabel}
                className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border transition-all duration-150 active:scale-95 ${
                    disabled
                        ? 'cursor-not-allowed border-white/5 bg-[#141424] opacity-50'
                        : isUIEnabled
                          ? needsReloadForThis
                              ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-amber-900/20 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:border-amber-400/60'
                              : isLikelyMusic
                                ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-[#121224] shadow-[0_0_14px_rgba(168,85,247,0.2)] hover:border-purple-400'
                                : 'border-white/10 bg-gradient-to-b from-[#1e1e36] to-[#121224] shadow-md hover:border-cyan-400/40 hover:shadow-[0_0_14px_rgba(6,182,212,0.15)]'
                          : 'border-red-500/20 bg-[#0d0d1a] opacity-70 hover:border-red-500/40 hover:opacity-90'
                }`}
                title={toggleLabel}
            >
                {/* Subtle top light sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* LED indicator */}
                <div
                    className={`absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isLive ? 'scale-110' : ''
                    }`}
                    style={{
                        backgroundColor: isLive
                            ? channel.color
                            : needsReloadForThis
                              ? '#f59e0b'
                              : isUIEnabled
                                ? '#3a3a5a'
                                : '#ef4444',
                        boxShadow: isLive
                            ? `0 0 8px ${channel.color}, 0 0 2px #fff`
                            : needsReloadForThis
                              ? '0 0 6px rgba(245,158,11,0.6)'
                              : !isUIEnabled
                                ? '0 0 4px rgba(239,68,68,0.5)'
                                : 'none',
                    }}
                />

                {/* Pending reload indicator */}
                {needsReloadForThis && !disabled && (
                    <div className="absolute top-1 left-1 animate-pulse font-mono text-[9px] text-amber-400">⏳</div>
                )}

                {/* Music detected icon badge */}
                {isLikelyMusic && isUIEnabled && !needsReloadForThis && !disabled && (
                    <div className="absolute top-1 left-1 text-[8px] text-purple-300">🎵</div>
                )}

                {activityPercent !== undefined && (
                    <div className="absolute bottom-1 left-1 rounded bg-black/60 px-1 font-mono text-[8px] text-white">
                        {activityPercent}%
                    </div>
                )}

                {/* Muted X indicator */}
                {!isUIEnabled && !disabled && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-bold text-lg text-red-400/50">✕</span>
                    </div>
                )}

                {/* Waveform / Equalizer icon */}
                <div
                    className={`flex h-5 items-end gap-[2px] transition-opacity ${
                        !isUIEnabled ? 'opacity-15' : needsReloadForThis ? 'opacity-40' : 'opacity-90'
                    }`}
                >
                    {[0.35, 0.7, 1, 0.55, 0.85, 0.45, 0.75].map((height, idx) => (
                        <div
                            key={height}
                            className={`w-[2.5px] rounded-full transition-all ${
                                isLive ? EQ_ANIMATIONS[idx % EQ_ANIMATIONS.length] : ''
                            }`}
                            style={{
                                backgroundColor: isLive
                                    ? channel.color
                                    : needsReloadForThis
                                      ? '#f59e0b'
                                      : isUIEnabled
                                        ? isLikelyMusic
                                            ? '#a855f7'
                                            : '#555577'
                                        : '#33334d',
                                height: isLive ? undefined : `${height * 100}%`,
                                minHeight: '3px',
                            }}
                        />
                    ))}
                </div>
            </button>

            {/* Channel label */}
            <div className="flex items-center gap-1">
                <span
                    className={`font-medium font-mono text-[10px] tracking-tight transition-colors ${
                        !isUIEnabled
                            ? 'text-red-400/60'
                            : needsReloadForThis
                              ? 'text-amber-400'
                              : isLikelyMusic
                                ? 'font-semibold text-purple-300'
                                : 'text-zinc-300 group-hover/channel:text-cyan-300'
                    }`}
                >
                    {channel.name}
                </span>
            </div>

            {/* Solo button */}
            <button
                type="button"
                onClick={onSolo}
                disabled={disabled}
                className={`rounded border px-1.5 py-0.5 font-mono font-semibold text-[8px] uppercase tracking-wider transition-all duration-150 active:scale-90 ${
                    disabled
                        ? 'cursor-not-allowed border-transparent text-zinc-600'
                        : 'border-white/5 bg-[#121224] text-zinc-400 hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-300 hover:shadow-[0_0_8px_rgba(245,158,11,0.2)]'
                }`}
                title={`Solo ${channel.name}`}
            >
                SOLO
            </button>
        </div>
    );
}
