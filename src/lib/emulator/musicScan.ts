import {
    FRAME_BYTES,
    JOYPAD,
    VOICE_COUNT,
    type VoiceProbe,
    voiceEnvelope,
    voicePitch,
    voiceSample,
} from './voiceProbe';

/**
 * Deterministic music-channel scan.
 *
 * The ROM is run from power-on with a fixed input script, so the same ROM always gives the same
 * answer. The script waits for the first sound, taps Start to get past the title and menus, then
 * keeps tapping it now and then while the game sits. Every two seconds it replays one second of the
 * game a few times, each time with a different button held, and compares those with the same
 * second left alone:
 *
 * - a voice that sounds the same either way is not reacting to the player: music;
 * - a voice that changes when a button is pressed is playing sound effects.
 */

/** Bump when the script or the thresholds change, so stored results are scanned again. */
export const MUSIC_SCAN_VERSION = 1;

/** One step of the script: a window that is replayed with buttons, then an optional Start tap. */
const PERIOD_FRAMES = 120;
const WINDOW_FRAMES = 60;
const START_TAP_FRAMES = 6;
const PRESS_FRAMES = 8;

/** Give up waiting for sound after this long and start tapping Start anyway. */
const MAX_SILENT_INTRO_PERIODS = 10;
/** Listen to the title screen for a moment before leaving it. */
const TITLE_PERIODS = 3;
const START_TAP_PERIODS = 15;
const PLAY_PERIODS = 40;
/**
 * While playing, Start is tapped this often. In a game it pauses and unpauses, so either way half of
 * the play time is spent unpaused; on a menu or cutscene it keeps things moving.
 */
const PLAY_START_EVERY_PERIODS = 5;

/** Each window is replayed with the next two action buttons and the next one of the others. */
const ACTION_BUTTONS = [JOYPAD.B, JOYPAD.Y, JOYPAD.A, JOYPAD.X];
const OTHER_BUTTONS = [JOYPAD.R, JOYPAD.RIGHT, JOYPAD.L, JOYPAD.DOWN, JOYPAD.LEFT, JOYPAD.UP];

/**
 * Starting a sound effect keeps the sound driver busy for a moment, which can shift the notes of the
 * music by a frame or two. Two traces count as the same sound when every note has a counterpart
 * within this many frames…
 */
const TIMING_SLACK_FRAMES = 2;
/** …at (nearly) the same pitch: vibrato sampled a frame apart is still the same note. */
const PITCH_SLACK_SHIFT = 5;
/** A voice reacted to a press only if it sounded different for longer than timing slack explains. */
const MIN_REACTION_FRAMES = TIMING_SLACK_FRAMES + 2;

/**
 * A press that changes this share of the playing voices at once did not trigger a sound effect; it
 * changed the scene (new song, pause, fade-out). Such a replay says nothing about single channels.
 */
const SCENE_CHANGE_SHARE = 0.5;
const SCENE_CHANGE_MIN_VOICES = 2;

/** A voice must react to presses in this many windows before it counts as an effects channel. */
const MIN_EFFECT_RESPONSES = 2;
/** Share of listened-to windows a voice must sound in, unprompted, to count as music. */
const MUSIC_PRESENCE = 0.25;
/** Below this share of windows a voice is treated as never used. */
const USED_PRESENCE = 0.02;

/**
 * - `music`: sounds steadily and never reacts to the player.
 * - `effects`: only sounds now and then, or when a button is pressed.
 * - `shared`: carries music, but sound effects cut in on it.
 * - `unused`: silent for the whole scan.
 */
export type ChannelRole = 'music' | 'effects' | 'shared' | 'unused';

export interface ChannelEvidence {
    /** Frames the voice sounded in windows where it did not react to a press. */
    steadyFrames: number;
    /** Windows the voice sounded in without reacting to a press. */
    steadyWindows: number;
    /** Windows where a press made the silent voice sound. */
    addedResponses: number;
    /** Windows where a press changed what the already-sounding voice was playing. */
    changedResponses: number;
}

export interface ScanEvidence {
    channels: ChannelEvidence[];
    /** Windows with sound in them where at least one press did not change the scene. */
    windows: number;
    /** Windows thrown away because every press changed the scene. */
    sceneChanges: number;
    framesEmulated: number;
}

export interface ChannelVerdict {
    /** 1–8 */
    channel: number;
    role: ChannelRole;
    /** Share of listened-to windows the voice sounded in unprompted (0–1). */
    presence: number;
    /** Share of listened-to time the voice sounded unprompted (0–1). */
    activeRatio: number;
    /** Windows in which a button press made or changed this voice's sound. */
    effectResponses: number;
}

export interface MusicScanResult {
    version: number;
    channels: ChannelVerdict[];
    /** False when the game never made a sound during the scan. */
    heardAudio: boolean;
    framesEmulated: number;
}

export interface WindowReport {
    /** Frames each voice sounded while the game was left alone. */
    active: number[];
    /** Voices that sounded different when a button was pressed. */
    reacted: boolean[];
    outcome: 'silent' | 'scene-change' | 'counted';
}

export interface ScanObserver {
    onProgress?: (fraction: number) => void;
    /** Debugging hook: called once per replayed window. */
    onWindow?: (report: WindowReport & { phase: string; tappedStart: boolean }) => void;
}

function activeFrames(trace: Uint8Array, voice: number): number {
    const frames = trace.length / FRAME_BYTES;
    let active = 0;
    for (let frame = 0; frame < frames; frame++) {
        active += Number(voiceEnvelope(trace, frame, voice) > 0);
    }
    return active;
}

function hasSound(trace: Uint8Array): boolean {
    for (let voice = 0; voice < VOICE_COUNT; voice++) {
        if (activeFrames(trace, voice) > 0) {
            return true;
        }
    }
    return false;
}

/** True when what `voice` plays in `frame` of `trace` also occurs in `other` around the same time. */
function hasCounterpart(trace: Uint8Array, other: Uint8Array, frame: number, voice: number): boolean {
    const active = voiceEnvelope(trace, frame, voice) > 0;
    const sample = voiceSample(trace, frame, voice);
    const pitch = voicePitch(trace, frame, voice);
    const first = Math.max(0, frame - TIMING_SLACK_FRAMES);
    const last = Math.min(other.length / FRAME_BYTES - 1, frame + TIMING_SLACK_FRAMES);

    for (let near = first; near <= last; near++) {
        const otherActive = voiceEnvelope(other, near, voice) > 0;
        if (!active && !otherActive) {
            return true;
        }
        if (
            active &&
            otherActive &&
            voiceSample(other, near, voice) === sample &&
            Math.abs(voicePitch(other, near, voice) - pitch) <= pitch >> PITCH_SLACK_SHIFT
        ) {
            return true;
        }
    }
    return false;
}

/** True when pressing the button made `voice` play something it does not play when left alone. */
function reactedToPress(leftAlone: Uint8Array, pressed: Uint8Array, voice: number): boolean {
    const frames = Math.min(leftAlone.length, pressed.length) / FRAME_BYTES;
    let different = 0;
    for (let frame = 0; frame < frames; frame++) {
        if (!hasCounterpart(pressed, leftAlone, frame, voice) || !hasCounterpart(leftAlone, pressed, frame, voice)) {
            different++;
        }
    }
    return different >= MIN_REACTION_FRAMES;
}

/**
 * Adds what one window shows to the evidence: the window left alone, and the same window replayed
 * once per pressed button.
 */
export function recordWindow(evidence: ScanEvidence, leftAlone: Uint8Array, replays: Uint8Array[]): WindowReport {
    const active = Array.from({ length: VOICE_COUNT }, (_, voice) => activeFrames(leftAlone, voice));
    const playing = active.filter((frames) => frames > 0).length;
    const reacted = new Array<boolean>(VOICE_COUNT).fill(false);
    let usableReplays = 0;
    let anyReaction = false;

    for (const pressed of replays) {
        const changes = active.map((_, voice) => reactedToPress(leftAlone, pressed, voice));
        anyReaction ||= changes.some(Boolean);
        const changedPlaying = changes.filter((changed, voice) => changed && active[voice] > 0).length;
        if (changedPlaying >= Math.max(SCENE_CHANGE_MIN_VOICES, playing * SCENE_CHANGE_SHARE)) {
            continue;
        }
        usableReplays++;
        changes.forEach((changed, voice) => {
            reacted[voice] ||= changed;
        });
    }

    if (playing === 0 && !anyReaction) {
        return { active, outcome: 'silent', reacted };
    }
    if (usableReplays === 0) {
        evidence.sceneChanges++;
        return { active, outcome: 'scene-change', reacted };
    }

    evidence.windows++;
    for (let voice = 0; voice < VOICE_COUNT; voice++) {
        const channel = evidence.channels[voice];
        if (!reacted[voice]) {
            channel.steadyFrames += active[voice];
            channel.steadyWindows += Number(active[voice] > 0);
        } else if (active[voice] > 0) {
            channel.changedResponses++;
        } else {
            channel.addedResponses++;
        }
    }
    return { active, outcome: 'counted', reacted };
}

type Phase = 'intro' | 'title' | 'start' | 'play';

/** The script moves on once a phase has run its course; the intro ends as soon as there is sound. */
function nextPhase(phase: Phase, periodsInPhase: number, heardSound: boolean): Phase {
    if (phase === 'intro') {
        if (heardSound) {
            return 'title';
        }
        return periodsInPhase >= MAX_SILENT_INTRO_PERIODS ? 'start' : 'intro';
    }
    if (phase === 'title' && periodsInPhase >= TITLE_PERIODS) {
        return 'start';
    }
    if (phase === 'start' && periodsInPhase >= START_TAP_PERIODS) {
        return 'play';
    }
    return phase;
}

/** Runs the scripted scan and collects the per-channel evidence. */
export function collectScanEvidence(probe: VoiceProbe, observer: ScanObserver = {}): ScanEvidence {
    const evidence: ScanEvidence = {
        channels: Array.from({ length: VOICE_COUNT }, () => ({
            addedResponses: 0,
            changedResponses: 0,
            steadyFrames: 0,
            steadyWindows: 0,
        })),
        framesEmulated: 0,
        sceneChanges: 0,
        windows: 0,
    };

    const run = (frames: number, joypad: number) => {
        evidence.framesEmulated += frames;
        return probe.run(frames, joypad);
    };
    const replayPressing = (button: number) => {
        probe.restore();
        const pressed = new Uint8Array(WINDOW_FRAMES * FRAME_BYTES);
        pressed.set(run(PRESS_FRAMES, button));
        pressed.set(run(WINDOW_FRAMES - PRESS_FRAMES, 0), PRESS_FRAMES * FRAME_BYTES);
        return pressed;
    };
    /** Plays the coming window once per button, then rewinds so it can be played left alone. */
    const replayWindow = (windowIndex: number) => {
        probe.save();
        const replays = [
            ACTION_BUTTONS[(windowIndex * 2) % ACTION_BUTTONS.length],
            ACTION_BUTTONS[(windowIndex * 2 + 1) % ACTION_BUTTONS.length],
            OTHER_BUTTONS[windowIndex % OTHER_BUTTONS.length],
        ].map(replayPressing);
        probe.restore();
        return replays;
    };

    const maxPeriods = MAX_SILENT_INTRO_PERIODS + TITLE_PERIODS + START_TAP_PERIODS + PLAY_PERIODS;
    let phase: Phase = 'intro';
    let periodsInPhase = 0;
    let windows = 0;
    let periods = 0;

    while (phase !== 'play' || periodsInPhase < PLAY_PERIODS) {
        const listening = phase !== 'intro';
        const tapStart = phase === 'start' || (phase === 'play' && periodsInPhase % PLAY_START_EVERY_PERIODS === 0);
        const replays = listening ? replayWindow(windows++) : [];
        const leftAlone = run(WINDOW_FRAMES, 0);
        // Start goes after the window, so a pause jingle has faded before the next window listens.
        const rest = tapStart
            ? [run(START_TAP_FRAMES, JOYPAD.START), run(PERIOD_FRAMES - WINDOW_FRAMES - START_TAP_FRAMES, 0)]
            : [run(PERIOD_FRAMES - WINDOW_FRAMES, 0)];

        if (listening) {
            const report = recordWindow(evidence, leftAlone, replays);
            observer.onWindow?.({ ...report, phase, tappedStart: tapStart });
        }

        const next = nextPhase(phase, periodsInPhase + 1, hasSound(leftAlone) || rest.some(hasSound));
        periodsInPhase = next === phase ? periodsInPhase + 1 : 0;
        phase = next;
        observer.onProgress?.(Math.min(1, ++periods / maxPeriods));
    }

    return evidence;
}

/** Turns the collected evidence into a role per channel. */
export function classifyChannels(evidence: ScanEvidence): ChannelVerdict[] {
    return evidence.channels.map((channel, index) => {
        const presence = evidence.windows ? channel.steadyWindows / evidence.windows : 0;
        const activeRatio = evidence.windows ? channel.steadyFrames / (evidence.windows * WINDOW_FRAMES) : 0;
        const effectResponses = channel.addedResponses + channel.changedResponses;
        const playsMusic = presence >= MUSIC_PRESENCE;
        const playsEffects = effectResponses >= MIN_EFFECT_RESPONSES;

        let role: ChannelRole = 'unused';
        if (playsMusic && playsEffects) {
            role = 'shared';
        } else if (playsMusic) {
            role = 'music';
        } else if (playsEffects || presence >= USED_PRESENCE) {
            // Sounds now and then without being a steady part of the mix: effects.
            role = 'effects';
        }

        return { activeRatio, channel: index + 1, effectResponses, presence, role };
    });
}

export function scanForMusic(probe: VoiceProbe, onProgress?: (fraction: number) => void): MusicScanResult {
    const evidence = collectScanEvidence(probe, { onProgress });
    return {
        channels: classifyChannels(evidence),
        framesEmulated: evidence.framesEmulated,
        heardAudio: evidence.windows + evidence.sceneChanges > 0,
        version: MUSIC_SCAN_VERSION,
    };
}
