import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { classifyChannels, collectScanEvidence, type WindowReport } from '../src/lib/emulator/musicScan';
import { createVoiceProbe, type ProbeModule, type VoiceProbe } from '../src/lib/emulator/voiceProbe';

// Harness for the music-channel scan: prints the evidence behind each verdict and then measures,
// on the game's real audio output, what muting the suggested channels does.
// usage: bun scripts/scan-rom.ts [--timeline] [--mute=1,2,3] [--screens=<dir>] <rom> [<rom> ...]
//   --timeline  prints every window: how busy each voice was (0-9), + / ~ where a press added or
//               changed its sound.
//   --mute      overrides the channels muted for the measurement (default: every `music` channel).
//   --screens   writes <dir>/<rom>.bmp, one thumbnail per window in timeline order, to see how far
//               the input script got into the game.

interface HarnessModule extends ProbeModule {
    HEAPU16: Uint16Array;
    _probe_audio_energy(): number;
    _probe_mute(voices: number): void;
    _probe_screen(): number;
    _probe_screen_height(): number;
    _probe_screen_width(): number;
    _probe_video(enable: number): void;
}

/** One screenshot per window, as RGB565 pixels. */
interface Screen {
    pixels: Uint16Array;
    width: number;
    height: number;
}

interface WindowEnergy {
    leftAlone: number;
    pressed: number[];
}

const root = `${import.meta.dir}/../public/snes9x-probe/`;
const { default: createModule } = await import(`${root}snes9x-probe.mjs`);
const wasmBinary = readFileSync(`${root}snes9x-probe.wasm`);
const args = process.argv.slice(2);
const timeline = args.includes('--timeline');
const screensDirectory = args.find((arg) => arg.startsWith('--screens='))?.slice(10);
const muteOverride = args
    .find((arg) => arg.startsWith('--mute='))
    ?.slice(7)
    .split(',')
    .map(Number);

/**
 * Wraps a probe so the audio energy of every scan window is recorded. It relies on the order the
 * scan uses: save, then (restore, pressed run, quiet run) per button, then restore and the window
 * left alone.
 */
function meterAudio(module: HarnessModule, probe: VoiceProbe, windows: WindowEnergy[], screens?: Screen[]): VoiceProbe {
    let current: WindowEnergy | null = null;
    let afterRestore = false;
    let pressedTail = false;

    /** Runs the window with the picture switched on for its last frame only (rendering is slow). */
    const runWithScreenshot = (frames: number, joypad: number, into: Screen[]) => {
        const head = probe.run(frames - 1, joypad);
        module._probe_video(1);
        const last = probe.run(1, joypad);
        module._probe_video(0);
        const width = module._probe_screen_width();
        const height = module._probe_screen_height();
        const start = module._probe_screen() >> 1;
        into.push({ height, pixels: module.HEAPU16.slice(start, start + width * height), width });
        const trace = new Uint8Array(head.length + last.length);
        trace.set(head);
        trace.set(last, head.length);
        return trace;
    };

    return {
        restore() {
            probe.restore();
            module._probe_audio_energy();
            afterRestore = true;
        },
        run(frames, joypad) {
            const isWindowLeftAlone = current && afterRestore && joypad === 0 && !pressedTail;
            const trace =
                screens && isWindowLeftAlone ? runWithScreenshot(frames, joypad, screens) : probe.run(frames, joypad);
            const energy = module._probe_audio_energy();
            if (current && afterRestore && joypad !== 0) {
                current.pressed.push(energy);
                pressedTail = true;
            } else if (current && pressedTail) {
                current.pressed[current.pressed.length - 1] += energy;
                pressedTail = false;
            } else if (current && afterRestore) {
                current.leftAlone = energy;
                windows.push(current);
                current = null;
            }
            afterRestore = false;
            return trace;
        },
        save() {
            probe.save();
            current = { leftAlone: 0, pressed: [] };
        },
    };
}

/** Writes the screenshots as one 24-bit BMP grid of half-size thumbnails. */
function writeContactSheet(path: string, screens: Screen[]) {
    const columns = 8;
    const tileWidth = 128;
    const tileHeight = 112;
    const width = columns * tileWidth;
    const height = Math.ceil(screens.length / columns) * tileHeight;
    const rowBytes = width * 3;
    const bmp = new Uint8Array(54 + rowBytes * height);
    const header = new DataView(bmp.buffer);
    bmp.set([66, 77]);
    header.setUint32(2, bmp.length, true);
    header.setUint32(10, 54, true);
    header.setUint32(14, 40, true);
    header.setInt32(18, width, true);
    header.setInt32(22, -height, true); // negative height: rows are stored top-down
    header.setUint16(26, 1, true);
    header.setUint16(28, 24, true);

    screens.forEach((screen, index) => {
        const left = (index % columns) * tileWidth;
        const top = Math.floor(index / columns) * tileHeight;
        for (let y = 0; y < tileHeight; y++) {
            const sourceY = Math.floor((y * 224) / tileHeight);
            for (let x = 0; x < tileWidth; x++) {
                const sourceX = Math.floor((x * screen.width) / tileWidth);
                const pixel = sourceY < screen.height ? screen.pixels[sourceY * screen.width + sourceX] : 0;
                const offset = 54 + (top + y) * rowBytes + (left + x) * 3;
                bmp[offset] = (pixel & 31) << 3;
                bmp[offset + 1] = ((pixel >> 5) & 63) << 2;
                bmp[offset + 2] = (pixel >> 11) << 3;
            }
        }
    });
    writeFileSync(path, bmp);
}

async function scan(path: string, mutedVoices: number, screens?: Screen[]) {
    const module: HarnessModule = await createModule({ print: () => {}, printErr: () => {}, wasmBinary });
    const probe = createVoiceProbe(module, readFileSync(path));
    module._probe_mute(mutedVoices);
    const energy: WindowEnergy[] = [];
    const reports: (WindowReport & { phase: string; tappedStart: boolean })[] = [];
    const evidence = collectScanEvidence(meterAudio(module, probe, energy, screens), {
        onWindow: (report) => reports.push(report),
    });
    return { energy, evidence, reports };
}

const percent = (value: number) => `${(value * 100).toFixed(0).padStart(3)}%`;

for (const path of args.filter((arg) => !arg.startsWith('--'))) {
    const started = performance.now();
    const screens: Screen[] = [];
    const { energy, evidence, reports } = await scan(path, 0, screensDirectory ? screens : undefined);
    const seconds = (performance.now() - started) / 1000;
    const verdicts = classifyChannels(evidence);

    console.log(
        `\n${basename(path)}: ${(evidence.framesEmulated / 60).toFixed(0)}s of game time in ${seconds.toFixed(1)}s, ` +
            `${evidence.windows} windows, ${evidence.sceneChanges} scene changes`,
    );
    if (screensDirectory) {
        mkdirSync(screensDirectory, { recursive: true });
        const sheet = join(screensDirectory, `${basename(path)}.bmp`);
        writeContactSheet(sheet, screens);
        console.log(`  screenshots: ${sheet}`);
    }
    if (timeline) {
        reports.forEach((report, index) => {
            const voices = report.active
                .map((frames, voice) => {
                    const level = frames === 0 ? '.' : String(Math.min(9, Math.floor(frames / 6)));
                    return report.reacted[voice] ? (frames ? '~' : '+') : level;
                })
                .join('');
            console.log(
                `    ${String(index).padStart(3)} ${report.phase.padEnd(5)} ${report.tappedStart ? 'S' : ' '} ${voices} ${report.outcome}`,
            );
        });
    }
    for (const verdict of verdicts) {
        const raw = evidence.channels[verdict.channel - 1];
        console.log(
            `  CH${verdict.channel} ${verdict.role.padEnd(8)} present ${percent(verdict.presence)}` +
                `  active ${percent(verdict.activeRatio)}  responses +${raw.addedResponses} ~${raw.changedResponses}`,
        );
    }

    // Same script again with the suggested channels gated out of the mix. Muting does not change
    // the emulation, so the windows line up one to one.
    const mutedChannels = muteOverride ?? verdicts.filter((v) => v.role === 'music').map((v) => v.channel);
    const muted = await scan(
        path,
        mutedChannels.reduce((mask, channel) => mask | (1 << (channel - 1)), 0),
    );
    let unprompted = 0;
    let unpromptedMuted = 0;
    let effects = 0;
    let effectsMuted = 0;
    reports.forEach((report, index) => {
        if (report.outcome !== 'counted') {
            return;
        }
        unprompted += energy[index].leftAlone;
        unpromptedMuted += muted.energy[index].leftAlone;
        energy[index].pressed.forEach((pressed, replay) => {
            // What a press adds on top of the same second left alone is the sound effect.
            effects += Math.max(0, pressed - energy[index].leftAlone);
            effectsMuted += Math.max(0, muted.energy[index].pressed[replay] - muted.energy[index].leftAlone);
        });
    });
    console.log(
        `  muting CH ${mutedChannels.join(' ') || '(none)'}: ${percent(1 - unpromptedMuted / unprompted)} of unprompted sound removed, ` +
            `${percent(effectsMuted / effects)} of button-press sound kept`,
    );
}
