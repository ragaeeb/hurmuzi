import { describe, expect, it } from 'bun:test';
import { scanForMusic } from './musicScan';
import { FRAME_BYTES, JOYPAD, VOICE_BYTES, type VoiceProbe } from './voiceProbe';

interface Note {
    sample: number;
    pitch: number;
}

interface GameState {
    frame: number;
    paused: boolean;
    startHeld: boolean;
    musicStopped: boolean;
    /** Frames the music is running behind, as happens when the sound driver is busy. */
    lag: number;
    /** Remaining frames of the sound effect on each voice. */
    effects: number[];
}

type Voices = (Note | null)[];

const SILENT: Voices = new Array(8).fill(null);
const EFFECT: Note = { pitch: 0x0800, sample: 0x20 };

/** Voice 1 holds a melody, voice 2 plays a short hit on every beat. */
function music(frame: number): Voices {
    const voices = [...SILENT];
    voices[0] = { pitch: 0x1000 + (Math.floor(frame / 20) % 4) * 0x200, sample: 1 };
    voices[1] = frame % 30 < 10 ? { pitch: 0x1000, sample: 2 } : null;
    return voices;
}

/** A scriptable stand-in for the emulator: `step` advances one frame and says what each voice plays. */
function fakeGame(step: (state: GameState, joypad: number) => Voices): VoiceProbe {
    const initial: GameState = {
        effects: new Array(8).fill(0),
        frame: 0,
        lag: 0,
        musicStopped: false,
        paused: false,
        startHeld: false,
    };
    let state = structuredClone(initial);
    let saved = structuredClone(initial);

    return {
        restore() {
            state = structuredClone(saved);
        },
        run(frames, joypad) {
            const trace = new Uint8Array(frames * FRAME_BYTES);
            for (let frame = 0; frame < frames; frame++) {
                step(state, joypad).forEach((note, voice) => {
                    if (note) {
                        const offset = frame * FRAME_BYTES + voice * VOICE_BYTES;
                        trace[offset] = 0xff;
                        trace[offset + 1] = 0x07;
                        trace[offset + 3] = note.sample;
                        trace[offset + 4] = note.pitch & 0xff;
                        trace[offset + 5] = note.pitch >> 8;
                    }
                });
                state.frame++;
            }
            return trace;
        },
        save() {
            saved = structuredClone(state);
        },
    };
}

/** Plays the effect on `voice` for a while after `button` goes down, over whatever the voice was playing. */
function withEffect(state: GameState, joypad: number, voices: Voices, button: number, voice: number): Voices {
    if (joypad & button) {
        state.effects[voice] = 15;
    }
    if (state.effects[voice] > 0) {
        state.effects[voice]--;
        const result = [...voices];
        result[voice] = EFFECT;
        return result;
    }
    return voices;
}

const roles = (probe: VoiceProbe) => scanForMusic(probe).channels.map((channel) => channel.role);

describe('scanForMusic', () => {
    it('should call steady voices music and a voice that only answers a button effects', () => {
        const probe = fakeGame((state, joypad) => withEffect(state, joypad, music(state.frame), JOYPAD.B, 6));

        expect(roles(probe)).toEqual(['music', 'music', 'unused', 'unused', 'unused', 'unused', 'effects', 'unused']);
    });

    it('should mark a music voice as shared when a sound effect cuts in on it', () => {
        const probe = fakeGame((state, joypad) => withEffect(state, joypad, music(state.frame), JOYPAD.Y, 1));

        expect(roles(probe).slice(0, 2)).toEqual(['music', 'shared']);
    });

    it('should not mistake a press that stops the music for sound effects', () => {
        const probe = fakeGame((state, joypad) => {
            state.musicStopped ||= Boolean(joypad & JOYPAD.A);
            return state.musicStopped ? SILENT : music(state.frame);
        });

        expect(roles(probe).slice(0, 2)).toEqual(['music', 'music']);
    });

    it('should tolerate music that slips a frame when a sound effect starts', () => {
        const probe = fakeGame((state, joypad) => {
            if (joypad & JOYPAD.B && state.effects[6] === 0) {
                state.lag++;
            }
            return withEffect(state, joypad, music(state.frame - state.lag), JOYPAD.B, 6);
        });

        expect(roles(probe)).toEqual(['music', 'music', 'unused', 'unused', 'unused', 'unused', 'effects', 'unused']);
    });

    it('should wait out a silent intro before listening', () => {
        const probe = fakeGame((state) => (state.frame < 600 ? SILENT : music(state.frame)));

        const result = scanForMusic(probe);
        expect(result.heardAudio).toBe(true);
        expect(result.channels.slice(0, 2).map((channel) => channel.role)).toEqual(['music', 'music']);
    });

    it('should still find the music when Start pauses the game into silence', () => {
        const probe = fakeGame((state, joypad) => {
            const startDown = Boolean(joypad & JOYPAD.START);
            if (startDown && !state.startHeld) {
                state.paused = !state.paused;
            }
            state.startHeld = startDown;
            return state.paused ? SILENT : withEffect(state, joypad, music(state.frame), JOYPAD.B, 6);
        });

        expect(roles(probe)).toEqual(['music', 'music', 'unused', 'unused', 'unused', 'unused', 'effects', 'unused']);
    });

    it('should report that nothing was heard for a silent game', () => {
        const result = scanForMusic(fakeGame(() => SILENT));

        expect(result.heardAudio).toBe(false);
        expect(result.channels.every((channel) => channel.role === 'unused')).toBe(true);
    });

    it('should give the same answer every time', () => {
        const game = () => fakeGame((state, joypad) => withEffect(state, joypad, music(state.frame), JOYPAD.Y, 1));

        expect(scanForMusic(game())).toEqual(scanForMusic(game()));
    });
});
