import type { MusicDetectionResult } from './types';

const BLOCK_HEADER_SIZE = 11;
const DSP_REGISTERS_OFFSET = 65700;
const DSP_REGISTER_COUNT = 128;
const SAMPLE_INTERVAL_MS = 200;
const VOICE_REGISTER_STRIDE = 16;

interface VoiceActivity {
    active: boolean;
    level: number;
}

function unwrapRetroArchState(state: Uint8Array): Uint8Array {
    if (String.fromCharCode(...state.subarray(0, 7)) !== 'RASTATE') {
        return state;
    }

    let offset = 8;
    while (offset + 8 <= state.length) {
        const name = String.fromCharCode(...state.subarray(offset, offset + 4));
        const size = new DataView(state.buffer, state.byteOffset + offset + 4, 4).getUint32(0, true);
        const start = offset + 8;
        const end = start + size;
        if (end > state.length) {
            throw new Error('Truncated RetroArch state block');
        }
        if (name === 'MEM ') {
            return state.subarray(start, end);
        }
        offset = end;
    }

    throw new Error('RetroArch state is missing its emulator payload');
}

function readBlockSize(state: Uint8Array, offset: number): number {
    if (state[offset + 4] === 45 && state[offset + 5] === 45) {
        return (
            ((state[offset + 6] << 24) | (state[offset + 7] << 16) | (state[offset + 8] << 8) | state[offset + 9]) >>> 0
        );
    }

    const value = String.fromCharCode(...state.subarray(offset + 4, offset + 10));
    if (!/^\d{6}$/.test(value)) {
        throw new Error('Invalid Snes9x snapshot block size');
    }
    return Number(value);
}

function findSoundBlock(state: Uint8Array): Uint8Array {
    const snapshot = unwrapRetroArchState(state);
    const newline = snapshot.indexOf(10);
    if (newline < 0 || String.fromCharCode(...snapshot.subarray(0, 8)) !== '#!s9xsnp') {
        throw new Error('Unsupported Snes9x snapshot format');
    }

    let offset = newline + 1;
    while (offset + BLOCK_HEADER_SIZE <= snapshot.length) {
        if (snapshot[offset + 3] !== 58 || snapshot[offset + 10] !== 58) {
            throw new Error('Invalid Snes9x snapshot block');
        }

        const name = String.fromCharCode(...snapshot.subarray(offset, offset + 3));
        const size = readBlockSize(snapshot, offset);
        const start = offset + BLOCK_HEADER_SIZE;
        const end = start + size;
        if (end > snapshot.length) {
            throw new Error('Truncated Snes9x snapshot block');
        }
        if (name === 'SND') {
            return snapshot.subarray(start, end);
        }
        offset = end;
    }

    throw new Error('Snes9x sound state is unavailable');
}

export function readCurrentVoiceActivity(state: Uint8Array): VoiceActivity[] {
    const sound = findSoundBlock(state);
    if (sound.length < DSP_REGISTERS_OFFSET + DSP_REGISTER_COUNT) {
        throw new Error('Unsupported Snes9x sound state');
    }

    const registers = sound.subarray(DSP_REGISTERS_OFFSET, DSP_REGISTERS_OFFSET + DSP_REGISTER_COUNT);
    return Array.from({ length: 8 }, (_, channel) => {
        const envelope = registers[channel * VOICE_REGISTER_STRIDE + 8];
        const rawOutput = registers[channel * VOICE_REGISTER_STRIDE + 9];
        const output = Math.abs(rawOutput > 127 ? rawOutput - 256 : rawOutput);
        return { active: envelope > 1 && output > 1, level: (envelope / 127) * (output / 128) };
    });
}

export async function measureCurrentChannelActivity(
    getState: () => Uint8Array | null,
    durationMs: number,
    onProgress: (percent: number) => void,
): Promise<MusicDetectionResult[]> {
    const activeSamples = new Array(8).fill(0);
    const levelTotals = new Array(8).fill(0);
    const maxLevels = new Array(8).fill(0);
    const start = performance.now();
    let samples = 0;

    // ponytail: Snes9x snapshot v12+ layout; replace with a core export if EmulatorJS changes it.
    while (performance.now() - start < durationMs) {
        const state = getState();
        if (!state) {
            throw new Error('Unable to read the current game state');
        }

        const activity = readCurrentVoiceActivity(state);
        activity.forEach((voice, channel) => {
            activeSamples[channel] += Number(voice.active);
            levelTotals[channel] += voice.level;
            maxLevels[channel] = Math.max(maxLevels[channel], voice.level);
        });
        samples++;
        onProgress(Math.min(100, Math.round(((performance.now() - start) / durationMs) * 100)));
        await new Promise((resolve) => setTimeout(resolve, SAMPLE_INTERVAL_MS));
    }

    onProgress(100);
    return activeSamples.map((active, index) => ({
        activeRatio: active / samples,
        averageLevel: levelTotals[index] / samples,
        channel: index + 1,
        maxLevel: maxLevels[index],
        samples,
    }));
}
