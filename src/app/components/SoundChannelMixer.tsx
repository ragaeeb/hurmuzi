'use client';

import { useCallback, useState } from 'react';
import { useChannelMixer } from '@/hooks/useChannelMixer';
import { findLikelyMusicChannels } from '@/lib/emulator/channelState';
import type { CoreOption, MusicDetectionResult } from '@/lib/emulator/types';
import { SNES_CHANNELS } from '@/lib/emulator/types';
import { getAudioOptions } from '@/lib/emulator/utils';
import ChannelButton from './ChannelButton';

interface SoundChannelMixerProps {
    onDetectMusic?: (
        originalChannelStates: boolean[],
        onProgress: (channel: number) => void,
    ) => Promise<MusicDetectionResult[]>;
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
        setDetectionProgress(1);
        setDetectionResults([]);
        setDetectionError('');

        try {
            setDetectionResults(await onDetectMusic([...effectiveAudioState], setDetectionProgress));
        } catch (error) {
            setDetectionError(error instanceof Error ? error.message : 'Music detection failed');
        } finally {
            setIsDetectingMusic(false);
            setDetectionProgress(0);
        }
    }, [effectiveAudioState, onDetectMusic]);

    return (
        <div className="rounded-xl border border-[#2a2a4a] bg-[#1a1a3a]/50 p-3">
            <div className="mb-2 flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-bold text-cyan-400 text-sm">
                    <span>🎵</span> Sound Channel Mixer
                </h3>
                <button
                    type="button"
                    onClick={handleToggleAll}
                    disabled={controlsDisabled}
                    className={`rounded-full px-3 py-1 text-xs transition-all ${
                        controlsDisabled
                            ? 'cursor-not-allowed bg-[#2a2a4a] text-[#4a4a6a]'
                            : allEnabled
                              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    }`}
                >
                    {allEnabled ? 'Mute All' : 'Enable All'}
                </button>
            </div>

            {disabled && (
                <p className="mb-2 text-[#6a6a8a] text-xs italic">
                    {isDetectingMusic ? 'Music detection in progress…' : 'Start the game to enable controls'}
                </p>
            )}

            {!disabled && hasChannelSupport === false && (
                <div className="mb-2 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2">
                    <p className="text-amber-400 text-xs">⚠️ Sound channel options not found in this core.</p>
                </div>
            )}

            {!disabled && hasChannelSupport === true && (
                <div className="mb-2 rounded-lg border border-green-500/30 bg-green-500/10 p-1.5">
                    <p className="text-green-400 text-xs">
                        ✓ Sound channel control active
                        {initialStates && <span className="ml-2 text-cyan-400">(Loaded saved preferences)</span>}
                    </p>
                </div>
            )}

            {(!disabled || isDetectingMusic) && hasChannelSupport && (
                <div className="mb-2">
                    <button
                        type="button"
                        onClick={handleDetectMusic}
                        disabled={isApplying || isDetectingMusic || needsReload || !onDetectMusic}
                        title={needsReload ? 'Apply pending channel changes before detecting music' : undefined}
                        className={`w-full rounded-lg border px-3 py-2 font-bold text-xs transition-all ${
                            isDetectingMusic
                                ? 'cursor-wait border-purple-500/30 bg-purple-500/10 text-purple-300'
                                : needsReload || isApplying || !onDetectMusic
                                  ? 'cursor-not-allowed border-[#2a2a4a] bg-[#20203a] text-[#5a5a7a]'
                                  : 'border-purple-500/40 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
                        }`}
                    >
                        {isDetectingMusic ? `🎧 Measuring CH ${detectionProgress}/8…` : '✨ Detect Music Channels'}
                    </button>
                    <p className="mt-1 text-center text-[#6a6a8a] text-[8px]">
                        Replays the current moment once per channel • about 1 minute
                    </p>
                </div>
            )}

            {detectionResults.length > 0 && (
                <div
                    role="status"
                    className="mb-2 rounded-lg border border-purple-500/30 bg-purple-500/10 p-2 text-[10px]"
                >
                    <p className="font-bold text-purple-300">
                        Likely music:{' '}
                        {likelyMusicChannels.length > 0
                            ? likelyMusicChannels.map((channel) => `CH ${channel}`).join(', ')
                            : 'No consistently active channels'}
                    </p>
                    <p className="mt-1 text-[#8a8aba]">
                        Activity:{' '}
                        {detectionResults
                            .map((result) => `${result.channel}:${Math.round(result.activeRatio * 100)}%`)
                            .join(' · ')}
                    </p>
                </div>
            )}

            {detectionError && (
                <p
                    role="alert"
                    className="mb-2 rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-300 text-xs"
                >
                    {detectionError}
                </p>
            )}

            <div className="grid grid-cols-4 gap-1.5">
                {SNES_CHANNELS.map((channel, index) => {
                    const isUIEnabled = channels[index];
                    const isEffectivelyPlaying = effectiveAudioState[index];
                    const needsReloadForThis = isUIEnabled && !isEffectivelyPlaying;

                    return (
                        <ChannelButton
                            key={channel.id}
                            channel={channel}
                            isUIEnabled={isUIEnabled}
                            isEffectivelyPlaying={isEffectivelyPlaying}
                            needsReloadForThis={needsReloadForThis}
                            disabled={controlsDisabled}
                            onToggle={() => handleToggle(index)}
                            onSolo={() => handleSolo(index)}
                        />
                    );
                })}
            </div>

            {!disabled && needsReload && (
                <div className="mt-3 border-[#2a2a4a] border-t pt-2">
                    <button
                        type="button"
                        onClick={applyWithReload}
                        disabled={isApplying || isDetectingMusic || !onReloadEmulator}
                        className={`w-full rounded-lg px-4 py-2 font-bold text-xs transition-all ${
                            isApplying
                                ? 'cursor-wait bg-[#2a2a4a] text-[#6a6a8a]'
                                : 'border border-cyan-500/30 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                        }`}
                    >
                        {isApplying ? '🔄 Reloading Emulator...' : '🔊 Apply Changes (Full Reload)'}
                    </button>
                    <p className="mt-1 text-center text-[8px] text-amber-400/70">
                        ⚠️ Re-enabling channels requires reloading the emulator. Your progress will be preserved.
                    </p>
                </div>
            )}

            {!disabled && hasChannelSupport && (
                <div className="mt-3 border-[#2a2a4a]/50 border-t pt-2">
                    <div className="font-mono text-[#4a4a6a] text-[8px]">
                        <div>UI: {channels.map((c, i) => (c ? i + 1 : '·')).join('')}</div>
                        <div>Audio: {effectiveAudioState.map((c, i) => (c ? i + 1 : '·')).join('')}</div>
                        {needsReload && (
                            <div className="text-amber-400">
                                Pending: {channels.map((c, i) => (c && !effectiveAudioState[i] ? i + 1 : '·')).join('')}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!disabled && audioOptions.length > 0 && (
                <div className="mt-4 border-[#2a2a4a] border-t pt-3">
                    <button
                        type="button"
                        onClick={() => setShowOptions(!showOptions)}
                        disabled={isDetectingMusic}
                        className="flex items-center gap-1 text-[10px] text-cyan-400/70 hover:text-cyan-400"
                    >
                        <span>{showOptions ? '▼' : '▶'}</span>
                        Audio Options ({audioOptions.length})
                    </button>

                    {showOptions && (
                        <div className="mt-2 space-y-2">
                            {audioOptions.map((opt) => (
                                <div key={opt.key} className="flex flex-col gap-1">
                                    <label htmlFor={`audio-opt-${opt.key}`} className="text-[#8a8aba] text-[10px]">
                                        {opt.displayName}
                                    </label>
                                    <select
                                        id={`audio-opt-${opt.key}`}
                                        value={opt.currentValue}
                                        onChange={(e) => handleAudioOptionChange(opt.key, e.target.value)}
                                        disabled={isDetectingMusic}
                                        className="rounded border border-[#2a2a4a] bg-[#0f0f23] px-2 py-1 text-[#cacafa] text-[10px] focus:border-cyan-400/50 focus:outline-none"
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

            <div className="mt-3 border-[#2a2a4a] border-t pt-2">
                <p className="text-center text-[#4a4a6a] text-[8px]">
                    SNES SPC700 • 8 Channel Audio
                    {romName && <span className="mt-1 block text-cyan-400/50">Settings auto-saved for this ROM</span>}
                </p>
            </div>
        </div>
    );
}
