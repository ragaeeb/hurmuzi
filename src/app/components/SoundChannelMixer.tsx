"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { CoreOption } from "./GameEmulator";

// SNES SPC700 has 8 audio channels
// Variable names: snes9x_sndchan_1 through snes9x_sndchan_8
const SNES_CHANNELS = [
  { id: 1, name: "CH 1", color: "#ef4444", varKey: "snes9x_sndchan_1" },
  { id: 2, name: "CH 2", color: "#f97316", varKey: "snes9x_sndchan_2" },
  { id: 3, name: "CH 3", color: "#eab308", varKey: "snes9x_sndchan_3" },
  { id: 4, name: "CH 4", color: "#22c55e", varKey: "snes9x_sndchan_4" },
  { id: 5, name: "CH 5", color: "#06b6d4", varKey: "snes9x_sndchan_5" },
  { id: 6, name: "CH 6", color: "#3b82f6", varKey: "snes9x_sndchan_6" },
  { id: 7, name: "CH 7", color: "#8b5cf6", varKey: "snes9x_sndchan_7" },
  { id: 8, name: "CH 8", color: "#ec4899", varKey: "snes9x_sndchan_8" },
];

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
  romName = "",
}: SoundChannelMixerProps) {
  // Track channel UI states - true = enabled (playing), false = disabled (muted)
  const [channels, setChannels] = useState<boolean[]>(new Array(8).fill(true));
  const [hasChannelSupport, setHasChannelSupport] = useState<boolean | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const initializedRef = useRef(false);
  const appliedInitialStatesRef = useRef(false);
  const lastRomNameRef = useRef<string>("");
  
  // Track the EFFECTIVE audio state - what the core is actually playing
  // Muting works immediately, unmuting does NOT until reload
  const [effectiveAudioState, setEffectiveAudioState] = useState<boolean[]>(new Array(8).fill(true));

  // Track the first channel option value to detect when core reloads
  const lastCoreStateRef = useRef<string>("");

  // Reset when ROM changes
  useEffect(() => {
    if (romName !== lastRomNameRef.current) {
      lastRomNameRef.current = romName;
      initializedRef.current = false;
      appliedInitialStatesRef.current = false;
      lastCoreStateRef.current = "";
      setChannels(new Array(8).fill(true));
      setEffectiveAudioState(new Array(8).fill(true));
      setHasChannelSupport(null);
    }
  }, [romName]);

  // Check if the core has sound channel options and initialize/sync states
  useEffect(() => {
    if (coreOptions.length === 0) return;
    
    const channelOptions = coreOptions.filter(opt => 
      opt.key.match(/snes9x_sndchan_\d/)
    );
    
    if (channelOptions.length === 0) {
      setHasChannelSupport(false);
      return;
    }
    
    // Create a fingerprint of the core state to detect changes
    const coreStateFingerprint = channelOptions.map(o => `${o.key}:${o.currentValue}`).join(',');
    
    // If this is first init or core state changed (reload happened)
    if (!initializedRef.current || lastCoreStateRef.current !== coreStateFingerprint) {
      setHasChannelSupport(true);
      initializedRef.current = true;
      lastCoreStateRef.current = coreStateFingerprint;
      
      // Check if we should apply saved initial states
      if (initialStates && !appliedInitialStatesRef.current) {
        appliedInitialStatesRef.current = true;
        console.log("📂 Applying saved channel states:", initialStates);
        
        // Apply saved states to the emulator
        SNES_CHANNELS.forEach((ch, i) => {
          const value = initialStates[i] ? "enabled" : "disabled";
          onSetVariable(ch.varKey, value);
        });
        
        setChannels([...initialStates]);
        setEffectiveAudioState([...initialStates]);
        
        // If any were disabled, show notification
        const mutedCount = initialStates.filter(s => !s).length;
        if (mutedCount > 0) {
          console.log(`🔇 Restored ${mutedCount} muted channel(s) from saved preferences`);
        }
      } else {
        // Initialize/sync channel states from core options
        const newChannels = SNES_CHANNELS.map(ch => {
          const opt = coreOptions.find(o => o.key === ch.varKey);
          return opt ? opt.currentValue === 'enabled' : true;
        });
        setChannels(newChannels);
        setEffectiveAudioState([...newChannels]);
        
        console.log("Initialized channel states from core:", newChannels);
      }
    }
  }, [coreOptions, initialStates, onSetVariable]);

  // Save states to localStorage whenever channels change (debounced)
  useEffect(() => {
    if (!initializedRef.current || !onSaveStates) return;
    
    // Debounce the save to avoid too many writes
    const timeout = setTimeout(() => {
      onSaveStates(channels);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [channels, onSaveStates]);

  // Compute if reload is needed: any channel where UI=enabled but effective=disabled
  const needsReload = channels.some((uiState, i) => uiState === true && effectiveAudioState[i] === false);

  // Compute allEnabled from channels state
  const allEnabled = channels.every(ch => ch);

  // Find audio-related options for display (exclude channel options)
  const audioOptions = coreOptions.filter(opt => 
    (opt.key.toLowerCase().includes('audio') || 
     opt.key.toLowerCase().includes('interpolation') ||
     opt.key.toLowerCase().includes('echo')) &&
    !opt.key.match(/snes9x_sndchan_\d/)
  );

  // Full emulator reload to apply unmuting
  const applyWithReload = useCallback(async () => {
    if (!onReloadEmulator) {
      console.warn("No reload function provided");
      return;
    }

    setIsApplying(true);
    console.log("🔄 Full emulator reload to apply channel settings...");
    console.log("📊 Desired channel state:", channels.map((c, i) => `CH${i+1}:${c ? 'ON' : 'OFF'}`).join(' '));

    // Build the pending settings object with ALL channel values
    const pendingSettings: Record<string, string> = {};
    SNES_CHANNELS.forEach((channel, i) => {
      pendingSettings[channel.varKey] = channels[i] ? "enabled" : "disabled";
    });

    try {
      await onReloadEmulator(pendingSettings);
      
      // After reload, the effective state should match the desired state
      setTimeout(() => {
        setEffectiveAudioState([...channels]);
        console.log("✅ Effective state updated to match UI");
        setIsApplying(false);
      }, 2000);
    } catch (err) {
      console.error("Reload failed:", err);
      setIsApplying(false);
    }
  }, [channels, onReloadEmulator]);

  const handleToggle = useCallback(
    (channelIndex: number) => {
      const channel = SNES_CHANNELS[channelIndex];
      const currentUIState = channels[channelIndex];
      const newUIState = !currentUIState;
      const newValue = newUIState ? "enabled" : "disabled";
      
      console.log(`Toggling ${channel.name}: ${currentUIState ? 'enabled' : 'disabled'} -> ${newValue}`);
      
      // Set the core variable
      onSetVariable(channel.varKey, newValue);
      
      // Update UI state
      setChannels(prev => {
        const updated = [...prev];
        updated[channelIndex] = newUIState;
        return updated;
      });
      
      // Update effective state ONLY if we're muting (muting works immediately)
      // Unmuting does NOT update effective state (requires reload)
      if (!newUIState) {
        // Muting - this works immediately
        setEffectiveAudioState(prev => {
          const updated = [...prev];
          updated[channelIndex] = false;
          return updated;
        });
        console.log(`  ✓ Muting works immediately - effective state updated`);
      } else {
        // Unmuting - this does NOT work until reload
        console.log(`  ⚠️ Unmuting requires reload - effective state unchanged`);
      }
    },
    [channels, onSetVariable]
  );

  const handleToggleAll = useCallback(() => {
    const newState = !allEnabled;
    const value = newState ? "enabled" : "disabled";
    
    console.log(`Toggling all channels to: ${value}`);
    
    // Toggle all channels
    SNES_CHANNELS.forEach((channel) => {
      onSetVariable(channel.varKey, value);
    });
    
    const newChannels = new Array(8).fill(newState);
    setChannels(newChannels);
    
    // Only update effective state if muting all (muting works immediately)
    if (!newState) {
      setEffectiveAudioState(new Array(8).fill(false));
    }
    // If enabling all, effective state stays as-is (needs reload)
  }, [allEnabled, onSetVariable]);

  const handleSolo = useCallback(
    (channelIndex: number) => {
      console.log(`Soloing channel ${channelIndex + 1}`);
      
      // Enable only the soloed channel, disable all others
      SNES_CHANNELS.forEach((channel, i) => {
        const value = i === channelIndex ? "enabled" : "disabled";
        onSetVariable(channel.varKey, value);
      });
      
      const newChannels = new Array(8).fill(false);
      newChannels[channelIndex] = true;
      setChannels(newChannels);
      
      // Update effective state: all muted channels work immediately
      // The soloed channel only works if it was already playing
      setEffectiveAudioState(prev => {
        const updated = new Array(8).fill(false);
        // The soloed channel keeps its effective state (if it was playing, still plays)
        updated[channelIndex] = prev[channelIndex];
        return updated;
      });
    },
    [onSetVariable]
  );

  // Handle audio option changes
  const handleAudioOptionChange = useCallback((key: string, value: string) => {
    onSetVariable(key, value);
  }, [onSetVariable]);

  return (
    <div className="bg-[#1a1a3a]/50 rounded-xl p-5 border border-[#2a2a4a]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-cyan-400 text-sm font-bold flex items-center gap-2">
          <span>🎵</span> Sound Channel Mixer
        </h3>
        <button
          type="button"
          onClick={handleToggleAll}
          disabled={disabled || isApplying}
          className={`text-xs px-3 py-1 rounded-full transition-all ${
            disabled || isApplying
              ? "bg-[#2a2a4a] text-[#4a4a6a] cursor-not-allowed"
              : allEnabled
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
          }`}
        >
          {allEnabled ? "Mute All" : "Enable All"}
        </button>
      </div>

      {disabled && (
        <p className="text-[#6a6a8a] text-xs mb-3 italic">
          Start the game to enable controls
        </p>
      )}

      {!disabled && hasChannelSupport === false && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 mb-3">
          <p className="text-amber-400 text-xs">
            ⚠️ Sound channel options not found in this core.
          </p>
        </div>
      )}

      {!disabled && hasChannelSupport === true && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 mb-3">
          <p className="text-green-400 text-xs">
            ✓ Sound channel control active
            {initialStates && <span className="text-cyan-400 ml-2">(Loaded saved preferences)</span>}
          </p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-2">
        {SNES_CHANNELS.map((channel, index) => {
          const isUIEnabled = channels[index];
          const isEffectivelyPlaying = effectiveAudioState[index];
          const needsReloadForThis = isUIEnabled && !isEffectivelyPlaying;
          
          return (
            <div
              key={channel.id}
              className="flex flex-col items-center gap-1"
            >
              {/* Channel toggle button */}
              <button
                type="button"
                onClick={() => handleToggle(index)}
                disabled={disabled || isApplying}
                className={`relative w-full aspect-square rounded-lg transition-all flex items-center justify-center ${
                  disabled || isApplying
                    ? "bg-[#2a2a4a] cursor-not-allowed"
                    : isUIEnabled
                    ? needsReloadForThis 
                      ? "bg-gradient-to-br from-amber-900/30 to-amber-950/30 border border-amber-500/50 animate-pulse"
                      : "bg-gradient-to-br from-[#2a2a4a] to-[#1a1a3a] hover:from-[#3a3a5a] hover:to-[#2a2a4a] shadow-lg"
                    : "bg-[#0f0f23] border border-red-500/30"
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
                  className={`absolute top-1.5 right-1.5 w-2 h-2 rounded-full transition-all ${
                    isEffectivelyPlaying && !disabled ? "animate-pulse" : ""
                  }`}
                  style={{
                    backgroundColor: isEffectivelyPlaying && !disabled 
                      ? channel.color 
                      : needsReloadForThis 
                        ? "#f59e0b" // Amber for pending
                        : "#4a1a1a",
                    boxShadow: isEffectivelyPlaying && !disabled 
                      ? `0 0 8px ${channel.color}` 
                      : needsReloadForThis
                        ? "0 0 8px rgba(245,158,11,0.5)"
                        : "0 0 4px rgba(239,68,68,0.5)",
                  }}
                />
                
                {/* Pending reload indicator */}
                {needsReloadForThis && !disabled && (
                  <div className="absolute top-1 left-1 text-[8px] text-amber-400">
                    ⏳
                  </div>
                )}
                
                {/* Muted X indicator */}
                {!isUIEnabled && !disabled && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-red-500/60 text-2xl font-bold">✕</span>
                  </div>
                )}
                
                {/* Waveform icon */}
                <div className={`flex items-end gap-0.5 h-6 ${!isUIEnabled ? 'opacity-20' : needsReloadForThis ? 'opacity-50' : ''}`}>
                  {[0.4, 0.7, 1, 0.6, 0.8, 0.5, 0.9].map((height, barIndex) => (
                    <div
                      key={`bar-${barIndex}-${height}`}
                      className="w-0.5 rounded-full transition-all"
                      style={{
                        height: `${height * 100}%`,
                        backgroundColor: isEffectivelyPlaying && !disabled 
                          ? channel.color 
                          : needsReloadForThis 
                            ? "#f59e0b"
                            : "#3a3a5a",
                      }}
                    />
                  ))}
                </div>
              </button>

              {/* Channel label */}
              <span
                className={`text-[10px] font-mono transition-colors ${
                  !isUIEnabled 
                    ? "text-red-400/70"
                    : needsReloadForThis
                      ? "text-amber-400"
                      : "text-[#cacafa]"
                }`}
              >
                {channel.name}
                {!isUIEnabled && !disabled && " ✕"}
                {needsReloadForThis && !disabled && " ⏳"}
              </span>

              {/* Solo button */}
              <button
                type="button"
                onClick={() => handleSolo(index)}
                disabled={disabled || isApplying}
                className={`text-[8px] px-1.5 py-0.5 rounded transition-all ${
                  disabled || isApplying
                    ? "text-[#3a3a5a] cursor-not-allowed"
                    : "text-[#6a6a8a] hover:text-yellow-400 hover:bg-yellow-400/10"
                }`}
                title={`Solo ${channel.name}`}
              >
                SOLO
              </button>
            </div>
          );
        })}
      </div>

      {/* Apply Changes Button - Full emulator reload */}
      {!disabled && needsReload && (
        <div className="mt-4 pt-3 border-t border-[#2a2a4a]">
          <button
            type="button"
            onClick={applyWithReload}
            disabled={isApplying || !onReloadEmulator}
            className={`w-full py-2 px-4 rounded-lg text-xs font-bold transition-all ${
              isApplying
                ? "bg-[#2a2a4a] text-[#6a6a8a] cursor-wait"
                : "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/30"
            }`}
          >
            {isApplying ? "🔄 Reloading Emulator..." : "🔊 Apply Changes (Full Reload)"}
          </button>
          <p className="text-[8px] text-amber-400/70 text-center mt-1">
            ⚠️ Re-enabling channels requires reloading the emulator. Your progress will be preserved.
          </p>
        </div>
      )}

      {/* Debug info */}
      {!disabled && hasChannelSupport && (
        <div className="mt-3 pt-2 border-t border-[#2a2a4a]/50">
          <div className="text-[8px] text-[#4a4a6a] font-mono">
            <div>UI: {channels.map((c, i) => c ? (i+1) : '·').join('')}</div>
            <div>Audio: {effectiveAudioState.map((c, i) => c ? (i+1) : '·').join('')}</div>
            {needsReload && <div className="text-amber-400">Pending: {channels.map((c, i) => (c && !effectiveAudioState[i]) ? (i+1) : '·').join('')}</div>}
          </div>
        </div>
      )}

      {/* Available Audio Options */}
      {!disabled && audioOptions.length > 0 && (
        <div className="mt-4 pt-3 border-t border-[#2a2a4a]">
          <button
            type="button"
            onClick={() => setShowOptions(!showOptions)}
            className="text-[10px] text-cyan-400/70 hover:text-cyan-400 flex items-center gap-1"
          >
            <span>{showOptions ? "▼" : "▶"}</span>
            Audio Options ({audioOptions.length})
          </button>
          
          {showOptions && (
            <div className="mt-2 space-y-2">
              {audioOptions.map((opt) => (
                <div key={opt.key} className="flex flex-col gap-1">
                  <label htmlFor={`audio-opt-${opt.key}`} className="text-[10px] text-[#8a8aba]">
                    {opt.displayName}
                  </label>
                  <select
                    id={`audio-opt-${opt.key}`}
                    value={opt.currentValue}
                    onChange={(e) => handleAudioOptionChange(opt.key, e.target.value)}
                    className="bg-[#0f0f23] text-[10px] text-[#cacafa] border border-[#2a2a4a] rounded px-2 py-1 focus:border-cyan-400/50 focus:outline-none"
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

      <div className="mt-4 pt-3 border-t border-[#2a2a4a]">
        <p className="text-[8px] text-[#4a4a6a] text-center">
          SNES SPC700 • 8 Channel Audio
          {romName && <span className="block text-cyan-400/50 mt-1">Settings auto-saved for this ROM</span>}
        </p>
      </div>
    </div>
  );
}
