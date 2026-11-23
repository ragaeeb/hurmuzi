/**
 * Headless Snes9x voice probe (core/snes9x-probe). It runs a ROM without video or audio output
 * and reports the state of the eight S-DSP voices once per emulated frame.
 */

export const VOICE_COUNT = 8;
export const VOICE_BYTES = 8;
/** Eight voice records followed by eight global DSP registers. */
export const FRAME_BYTES = VOICE_COUNT * VOICE_BYTES + 8;

/** libretro joypad bitmask understood by {@link VoiceProbe.run}. */
export const JOYPAD = {
    A: 1 << 8,
    B: 1 << 0,
    DOWN: 1 << 5,
    L: 1 << 10,
    LEFT: 1 << 6,
    R: 1 << 11,
    RIGHT: 1 << 7,
    START: 1 << 3,
    UP: 1 << 4,
    X: 1 << 9,
    Y: 1 << 1,
} as const;

export interface VoiceProbe {
    /** Runs `frames` frames holding `joypad` and returns FRAME_BYTES per frame. */
    run(frames: number, joypad: number): Uint8Array;
    /** Snapshots the machine so the same moment can be replayed with different input. */
    save(): void;
    /** Rewinds to the last {@link VoiceProbe.save}. */
    restore(): void;
}

/** The Emscripten module produced by core/snes9x-probe/build.sh. */
export interface ProbeModule {
    HEAPU8: Uint8Array;
    _free(pointer: number): void;
    _malloc(size: number): number;
    _probe_frame_bytes(): number;
    _probe_load(rom: number, size: number): number;
    _probe_restore(): number;
    _probe_run(frames: number, joypad: number, out: number): number;
    _probe_save(): number;
}

/** Envelope level (0–2047) of `voice` in frame `frame` of a trace. Zero means the voice is silent. */
export function voiceEnvelope(trace: Uint8Array, frame: number, voice: number): number {
    const offset = frame * FRAME_BYTES + voice * VOICE_BYTES;
    return trace[offset] | (trace[offset + 1] << 8);
}

/** Number of the sample (instrument or effect) the voice is set to play. */
export function voiceSample(trace: Uint8Array, frame: number, voice: number): number {
    return trace[frame * FRAME_BYTES + voice * VOICE_BYTES + 3];
}

/** Playback rate of the voice (14 bits; 0x1000 plays the sample at its recorded pitch). */
export function voicePitch(trace: Uint8Array, frame: number, voice: number): number {
    const offset = frame * FRAME_BYTES + voice * VOICE_BYTES + 4;
    return (trace[offset] | (trace[offset + 1] << 8)) & 0x3fff;
}

/** Loads `rom` into a probe module. Throws when Snes9x rejects the image. */
export function createVoiceProbe(module: ProbeModule, rom: Uint8Array): VoiceProbe {
    if (module._probe_frame_bytes() !== FRAME_BYTES) {
        throw new Error('Voice probe build does not match this version of Hurmuzi');
    }

    const romPointer = module._malloc(rom.length);
    module.HEAPU8.set(rom, romPointer);
    const loaded = module._probe_load(romPointer, rom.length);
    module._free(romPointer);
    if (!loaded) {
        throw new Error('Snes9x could not load this ROM');
    }

    let buffer = 0;
    let capacity = 0;
    return {
        restore() {
            if (!module._probe_restore()) {
                throw new Error('Voice probe could not rewind');
            }
        },
        run(frames, joypad) {
            if (frames > capacity) {
                module._free(buffer);
                buffer = module._malloc(frames * FRAME_BYTES);
                capacity = frames;
            }
            module._probe_run(frames, joypad, buffer);
            // HEAPU8 is re-read every call: growing the wasm memory replaces the view.
            return module.HEAPU8.slice(buffer, buffer + frames * FRAME_BYTES);
        },
        save() {
            if (!module._probe_save()) {
                throw new Error('Voice probe could not snapshot');
            }
        },
    };
}
