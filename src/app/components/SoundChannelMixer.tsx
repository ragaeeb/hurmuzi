'use client';

import { useCallback, useState } from 'react';
import { useChannelMixer } from '@/hooks/useChannelMixer';
import type { CoreOption } from '@/lib/emulator/types';
import { SNES_CHANNELS } from '@/lib/emulator/types';
import { getAudioOptions } from '@/lib/emulator/utils';
import ChannelButton from './ChannelButton';

interface SoundChannelMixerProps {
    onSetVariable: (key: string, value: string) => boolean;
    onReloadEmulator?: (pendingSettings: Record<string, string>) => Promise<void>;
    onSaveStates?: (states: boolean[]) => void;
    disabled?: boolean;
    coreOptions?: CoreOption[];
    initialStates?: boolean[] | null;
    romName?: string;
}

export default function SoundChannelMixer({
    onSetVariable,
    onReloadEmulator,
    onSaveStates,
    disabled = false,
    coreOptions = [],
    initialStates = null,
    romName = '',
}: SoundChannelMixerProps) {
    const [showOptions, setShowOptions] = useState(false);

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

    const handleAudioOptionChange = useCallback(
        (key: string, value: string) => {
            onSetVariable(key, value);
        },
        [onSetVariable],
    );

    return (
        <div className="rounded-xl border border-[#2a2a4a] bg-[#1a1a3a]/50 p-5">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-bold text-cyan-400 text-sm">
                    <span>🎵</span> Sound Channel Mixer
                </h3>
                <button
                    type="button"
                    onClick={handleToggleAll}
                    disabled={disabled || isApplying}
                    className={`rounded-full px-3 py-1 text-xs transition-all ${
                        disabled || isApplying
                            ? 'cursor-not-allowed bg-[#2a2a4a] text-[#4a4a6a]'
                            : allEnabled
                              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    }`}
                >
                    {allEnabled ? 'Mute All' : 'Enable All'}
                </button>
            </div>

            {disabled && <p className="mb-3 text-[#6a6a8a] text-xs italic">Start the game to enable controls</p>}

            {!disabled && hasChannelSupport === false && (
                <div className="mb-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
                    <p className="text-amber-400 text-xs">⚠️ Sound channel options not found in this core.</p>
                </div>
            )}

            {!disabled && hasChannelSupport === true && (
                <div className="mb-3 rounded-lg border border-green-500/30 bg-green-500/10 p-2">
                    <p className="text-green-400 text-xs">
                        ✓ Sound channel control active
                        {initialStates && <span className="ml-2 text-cyan-400">(Loaded saved preferences)</span>}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-4 gap-2">
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
                            disabled={disabled || isApplying}
                            onToggle={() => handleToggle(index)}
                            onSolo={() => handleSolo(index)}
                        />
                    );
                })}
            </div>

            {!disabled && needsReload && (
                <div className="mt-4 border-[#2a2a4a] border-t pt-3">
                    <button
                        type="button"
                        onClick={applyWithReload}
                        disabled={isApplying || !onReloadEmulator}
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

            <div className="mt-4 border-[#2a2a4a] border-t pt-3">
                <p className="text-center text-[#4a4a6a] text-[8px]">
                    SNES SPC700 • 8 Channel Audio
                    {romName && <span className="mt-1 block text-cyan-400/50">Settings auto-saved for this ROM</span>}
                </p>
            </div>
        </div>
    );
}
