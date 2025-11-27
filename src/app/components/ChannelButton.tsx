'use client';

import type { SnesChannel } from '@/lib/emulator/types';

interface ChannelButtonProps {
    channel: SnesChannel;
    isUIEnabled: boolean;
    isEffectivelyPlaying: boolean;
    needsReloadForThis: boolean;
    disabled: boolean;
    onToggle: () => void;
    onSolo: () => void;
}

export default function ChannelButton({
    channel,
    isUIEnabled,
    isEffectivelyPlaying,
    needsReloadForThis,
    disabled,
    onToggle,
    onSolo,
}: ChannelButtonProps) {
    return (
        <div className="flex flex-col items-center gap-1">
            {/* Channel toggle button */}
            <button
                type="button"
                onClick={onToggle}
                disabled={disabled}
                className={`relative flex aspect-square w-full items-center justify-center rounded-lg transition-all ${
                    disabled
                        ? 'cursor-not-allowed bg-[#2a2a4a]'
                        : isUIEnabled
                          ? needsReloadForThis
                              ? 'animate-pulse border border-amber-500/50 bg-gradient-to-br from-amber-900/30 to-amber-950/30'
                              : 'bg-gradient-to-br from-[#2a2a4a] to-[#1a1a3a] shadow-lg hover:from-[#3a3a5a] hover:to-[#2a2a4a]'
                          : 'border border-red-500/30 bg-[#0f0f23]'
                }`}
                title={
                    needsReloadForThis
                        ? `${channel.name} - Pending reload to unmute`
                        : isUIEnabled
                          ? `Mute ${channel.name}`
                          : `Unmute ${channel.name}`
                }
            >
                {/* LED indicator */}
                <div
                    className={`absolute top-1.5 right-1.5 h-2 w-2 rounded-full transition-all ${
                        isEffectivelyPlaying && !disabled ? 'animate-pulse' : ''
                    }`}
                    style={{
                        backgroundColor:
                            isEffectivelyPlaying && !disabled
                                ? channel.color
                                : needsReloadForThis
                                  ? '#f59e0b'
                                  : '#4a1a1a',
                        boxShadow:
                            isEffectivelyPlaying && !disabled
                                ? `0 0 8px ${channel.color}`
                                : needsReloadForThis
                                  ? '0 0 8px rgba(245,158,11,0.5)'
                                  : '0 0 4px rgba(239,68,68,0.5)',
                    }}
                />

                {/* Pending reload indicator */}
                {needsReloadForThis && !disabled && (
                    <div className="absolute top-1 left-1 text-[8px] text-amber-400">⏳</div>
                )}

                {/* Muted X indicator */}
                {!isUIEnabled && !disabled && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-bold text-2xl text-red-500/60">✕</span>
                    </div>
                )}

                {/* Waveform icon */}
                <div
                    className={`flex h-6 items-end gap-0.5 ${!isUIEnabled ? 'opacity-20' : needsReloadForThis ? 'opacity-50' : ''}`}
                >
                    {[0.4, 0.7, 1, 0.6, 0.8, 0.5, 0.9].map((height, barIndex) => (
                        <div
                            key={`bar-${barIndex}-${height}`}
                            className="w-0.5 rounded-full transition-all"
                            style={{
                                backgroundColor:
                                    isEffectivelyPlaying && !disabled
                                        ? channel.color
                                        : needsReloadForThis
                                          ? '#f59e0b'
                                          : '#3a3a5a',
                                height: `${height * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </button>

            {/* Channel label */}
            <span
                className={`font-mono text-[10px] transition-colors ${
                    !isUIEnabled ? 'text-red-400/70' : needsReloadForThis ? 'text-amber-400' : 'text-[#cacafa]'
                }`}
            >
                {channel.name}
                {!isUIEnabled && !disabled && ' ✕'}
                {needsReloadForThis && !disabled && ' ⏳'}
            </span>

            {/* Solo button */}
            <button
                type="button"
                onClick={onSolo}
                disabled={disabled}
                className={`rounded px-1.5 py-0.5 text-[8px] transition-all ${
                    disabled
                        ? 'cursor-not-allowed text-[#3a3a5a]'
                        : 'text-[#6a6a8a] hover:bg-yellow-400/10 hover:text-yellow-400'
                }`}
                title={`Solo ${channel.name}`}
            >
                SOLO
            </button>
        </div>
    );
}
