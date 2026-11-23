(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/emulator/musicScan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MUSIC_SCAN_VERSION",
    ()=>MUSIC_SCAN_VERSION,
    "classifyChannels",
    ()=>classifyChannels,
    "collectScanEvidence",
    ()=>collectScanEvidence,
    "recordWindow",
    ()=>recordWindow,
    "scanForMusic",
    ()=>scanForMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/voiceProbe.ts [app-client] (ecmascript)");
;
const MUSIC_SCAN_VERSION = 1;
/** One step of the script: a window that is replayed with buttons, then an optional Start tap. */ const PERIOD_FRAMES = 120;
const WINDOW_FRAMES = 60;
const START_TAP_FRAMES = 6;
const PRESS_FRAMES = 8;
/** Give up waiting for sound after this long and start tapping Start anyway. */ const MAX_SILENT_INTRO_PERIODS = 10;
/** Listen to the title screen for a moment before leaving it. */ const TITLE_PERIODS = 3;
const START_TAP_PERIODS = 15;
const PLAY_PERIODS = 40;
/**
 * While playing, Start is tapped this often. In a game it pauses and unpauses, so either way half of
 * the play time is spent unpaused; on a menu or cutscene it keeps things moving.
 */ const PLAY_START_EVERY_PERIODS = 5;
/** Each window is replayed with the next two action buttons and the next one of the others. */ const ACTION_BUTTONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].B,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].Y,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].A,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].X
];
const OTHER_BUTTONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].R,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].RIGHT,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].L,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].DOWN,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].LEFT,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].UP
];
/**
 * Starting a sound effect keeps the sound driver busy for a moment, which can shift the notes of the
 * music by a frame or two. Two traces count as the same sound when every note has a counterpart
 * within this many frames…
 */ const TIMING_SLACK_FRAMES = 2;
/** …at (nearly) the same pitch: vibrato sampled a frame apart is still the same note. */ const PITCH_SLACK_SHIFT = 5;
/** A voice reacted to a press only if it sounded different for longer than timing slack explains. */ const MIN_REACTION_FRAMES = TIMING_SLACK_FRAMES + 2;
/**
 * A press that changes this share of the playing voices at once did not trigger a sound effect; it
 * changed the scene (new song, pause, fade-out). Such a replay says nothing about single channels.
 */ const SCENE_CHANGE_SHARE = 0.5;
const SCENE_CHANGE_MIN_VOICES = 2;
/** A voice must react to presses in this many windows before it counts as an effects channel. */ const MIN_EFFECT_RESPONSES = 2;
/** Share of listened-to windows a voice must sound in, unprompted, to count as music. */ const MUSIC_PRESENCE = 0.25;
/** Below this share of windows a voice is treated as never used. */ const USED_PRESENCE = 0.02;
function activeFrames(trace, voice) {
    const frames = trace.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"];
    let active = 0;
    for(let frame = 0; frame < frames; frame++){
        active += Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceEnvelope"])(trace, frame, voice) > 0);
    }
    return active;
}
function hasSound(trace) {
    for(let voice = 0; voice < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]; voice++){
        if (activeFrames(trace, voice) > 0) {
            return true;
        }
    }
    return false;
}
/** True when what `voice` plays in `frame` of `trace` also occurs in `other` around the same time. */ function hasCounterpart(trace, other, frame, voice) {
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceEnvelope"])(trace, frame, voice) > 0;
    const sample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceSample"])(trace, frame, voice);
    const pitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voicePitch"])(trace, frame, voice);
    const first = Math.max(0, frame - TIMING_SLACK_FRAMES);
    const last = Math.min(other.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"] - 1, frame + TIMING_SLACK_FRAMES);
    for(let near = first; near <= last; near++){
        const otherActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceEnvelope"])(other, near, voice) > 0;
        if (!active && !otherActive) {
            return true;
        }
        if (active && otherActive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceSample"])(other, near, voice) === sample && Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voicePitch"])(other, near, voice) - pitch) <= pitch >> PITCH_SLACK_SHIFT) {
            return true;
        }
    }
    return false;
}
/** True when pressing the button made `voice` play something it does not play when left alone. */ function reactedToPress(leftAlone, pressed, voice) {
    const frames = Math.min(leftAlone.length, pressed.length) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"];
    let different = 0;
    for(let frame = 0; frame < frames; frame++){
        if (!hasCounterpart(pressed, leftAlone, frame, voice) || !hasCounterpart(leftAlone, pressed, frame, voice)) {
            different++;
        }
    }
    return different >= MIN_REACTION_FRAMES;
}
function recordWindow(evidence, leftAlone, replays) {
    const active = Array.from({
        length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]
    }, (_, voice)=>activeFrames(leftAlone, voice));
    const playing = active.filter((frames)=>frames > 0).length;
    const reacted = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]).fill(false);
    let usableReplays = 0;
    let anyReaction = false;
    for (const pressed of replays){
        const changes = active.map((_, voice)=>reactedToPress(leftAlone, pressed, voice));
        anyReaction ||= changes.some(Boolean);
        const changedPlaying = changes.filter((changed, voice)=>changed && active[voice] > 0).length;
        if (changedPlaying >= Math.max(SCENE_CHANGE_MIN_VOICES, playing * SCENE_CHANGE_SHARE)) {
            continue;
        }
        usableReplays++;
        changes.forEach((changed, voice)=>{
            reacted[voice] ||= changed;
        });
    }
    if (playing === 0 && !anyReaction) {
        return {
            active,
            outcome: 'silent',
            reacted
        };
    }
    if (usableReplays === 0) {
        evidence.sceneChanges++;
        return {
            active,
            outcome: 'scene-change',
            reacted
        };
    }
    evidence.windows++;
    for(let voice = 0; voice < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]; voice++){
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
    return {
        active,
        outcome: 'counted',
        reacted
    };
}
/** The script moves on once a phase has run its course; the intro ends as soon as there is sound. */ function nextPhase(phase, periodsInPhase, heardSound) {
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
function collectScanEvidence(probe, observer = {}) {
    const evidence = {
        channels: Array.from({
            length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]
        }, ()=>({
                addedResponses: 0,
                changedResponses: 0,
                steadyFrames: 0,
                steadyWindows: 0
            })),
        framesEmulated: 0,
        sceneChanges: 0,
        windows: 0
    };
    const run = (frames, joypad)=>{
        evidence.framesEmulated += frames;
        return probe.run(frames, joypad);
    };
    const replayPressing = (button)=>{
        probe.restore();
        const pressed = new Uint8Array(WINDOW_FRAMES * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"]);
        pressed.set(run(PRESS_FRAMES, button));
        pressed.set(run(WINDOW_FRAMES - PRESS_FRAMES, 0), PRESS_FRAMES * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"]);
        return pressed;
    };
    /** Plays the coming window once per button, then rewinds so it can be played left alone. */ const replayWindow = (windowIndex)=>{
        probe.save();
        const replays = [
            ACTION_BUTTONS[windowIndex * 2 % ACTION_BUTTONS.length],
            ACTION_BUTTONS[(windowIndex * 2 + 1) % ACTION_BUTTONS.length],
            OTHER_BUTTONS[windowIndex % OTHER_BUTTONS.length]
        ].map(replayPressing);
        probe.restore();
        return replays;
    };
    const maxPeriods = MAX_SILENT_INTRO_PERIODS + TITLE_PERIODS + START_TAP_PERIODS + PLAY_PERIODS;
    let phase = 'intro';
    let periodsInPhase = 0;
    let windows = 0;
    let periods = 0;
    while(phase !== 'play' || periodsInPhase < PLAY_PERIODS){
        const listening = phase !== 'intro';
        const tapStart = phase === 'start' || phase === 'play' && periodsInPhase % PLAY_START_EVERY_PERIODS === 0;
        const replays = listening ? replayWindow(windows++) : [];
        const leftAlone = run(WINDOW_FRAMES, 0);
        // Start goes after the window, so a pause jingle has faded before the next window listens.
        const rest = tapStart ? [
            run(START_TAP_FRAMES, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].START),
            run(PERIOD_FRAMES - WINDOW_FRAMES - START_TAP_FRAMES, 0)
        ] : [
            run(PERIOD_FRAMES - WINDOW_FRAMES, 0)
        ];
        if (listening) {
            const report = recordWindow(evidence, leftAlone, replays);
            observer.onWindow?.({
                ...report,
                phase,
                tappedStart: tapStart
            });
        }
        const next = nextPhase(phase, periodsInPhase + 1, hasSound(leftAlone) || rest.some(hasSound));
        periodsInPhase = next === phase ? periodsInPhase + 1 : 0;
        phase = next;
        observer.onProgress?.(Math.min(1, ++periods / maxPeriods));
    }
    return evidence;
}
function classifyChannels(evidence) {
    return evidence.channels.map((channel, index)=>{
        const presence = evidence.windows ? channel.steadyWindows / evidence.windows : 0;
        const activeRatio = evidence.windows ? channel.steadyFrames / (evidence.windows * WINDOW_FRAMES) : 0;
        const effectResponses = channel.addedResponses + channel.changedResponses;
        const playsMusic = presence >= MUSIC_PRESENCE;
        const playsEffects = effectResponses >= MIN_EFFECT_RESPONSES;
        let role = 'unused';
        if (playsMusic && playsEffects) {
            role = 'shared';
        } else if (playsMusic) {
            role = 'music';
        } else if (playsEffects || presence >= USED_PRESENCE) {
            // Sounds now and then without being a steady part of the mix: effects.
            role = 'effects';
        }
        return {
            activeRatio,
            channel: index + 1,
            effectResponses,
            presence,
            role
        };
    });
}
function scanForMusic(probe, onProgress) {
    const evidence = collectScanEvidence(probe, {
        onProgress
    });
    return {
        channels: classifyChannels(evidence),
        framesEmulated: evidence.framesEmulated,
        heardAudio: evidence.windows + evidence.sceneChanges > 0,
        version: MUSIC_SCAN_VERSION
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/musicScanWorker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/// <reference lib="webworker" />
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/musicScan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/voiceProbe.ts [app-client] (ecmascript)");
;
;
const post = (message)=>self.postMessage(message);
self.onmessage = async ({ data })=>{
    try {
        // The probe is a prebuilt Emscripten module served from /public, not part of the bundle.
        const { default: createModule } = await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ data.probeUrl);
        const module = await createModule({
            print: ()=>{},
            printErr: ()=>{}
        });
        const probe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVoiceProbe"])(module, new Uint8Array(data.rom));
        post({
            result: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scanForMusic"])(probe, (fraction)=>post({
                    fraction,
                    type: 'progress'
                })),
            type: 'result'
        });
    } catch (error) {
        post({
            message: error instanceof Error ? error.message : 'Music scan failed',
            type: 'error'
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/voiceProbe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Headless Snes9x voice probe (core/snes9x-probe). It runs a ROM without video or audio output
 * and reports the state of the eight S-DSP voices once per emulated frame.
 */ __turbopack_context__.s([
    "FRAME_BYTES",
    ()=>FRAME_BYTES,
    "JOYPAD",
    ()=>JOYPAD,
    "VOICE_BYTES",
    ()=>VOICE_BYTES,
    "VOICE_COUNT",
    ()=>VOICE_COUNT,
    "createVoiceProbe",
    ()=>createVoiceProbe,
    "voiceEnvelope",
    ()=>voiceEnvelope,
    "voicePitch",
    ()=>voicePitch,
    "voiceSample",
    ()=>voiceSample
]);
const VOICE_COUNT = 8;
const VOICE_BYTES = 8;
const FRAME_BYTES = VOICE_COUNT * VOICE_BYTES + 8;
const JOYPAD = {
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
    Y: 1 << 1
};
function voiceEnvelope(trace, frame, voice) {
    const offset = frame * FRAME_BYTES + voice * VOICE_BYTES;
    return trace[offset] | trace[offset + 1] << 8;
}
function voiceSample(trace, frame, voice) {
    return trace[frame * FRAME_BYTES + voice * VOICE_BYTES + 3];
}
function voicePitch(trace, frame, voice) {
    const offset = frame * FRAME_BYTES + voice * VOICE_BYTES + 4;
    return (trace[offset] | trace[offset + 1] << 8) & 0x3fff;
}
function createVoiceProbe(module, rom) {
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
        restore () {
            if (!module._probe_restore()) {
                throw new Error('Voice probe could not rewind');
            }
        },
        run (frames, joypad) {
            if (frames > capacity) {
                module._free(buffer);
                buffer = module._malloc(frames * FRAME_BYTES);
                capacity = frames;
            }
            module._probe_run(frames, joypad, buffer);
            // HEAPU8 is re-read every call: growing the wasm memory replaces the view.
            return module.HEAPU8.slice(buffer, buffer + frames * FRAME_BYTES);
        },
        save () {
            if (!module._probe_save()) {
                throw new Error('Voice probe could not snapshot');
            }
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_emulator_0myetcqml3wn7._.js.map