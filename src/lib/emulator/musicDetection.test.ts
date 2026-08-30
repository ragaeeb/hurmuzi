import { describe, expect, it } from 'bun:test';
import { readCurrentVoiceActivity } from './musicDetection';

describe('readCurrentVoiceActivity', () => {
    it('should read current voice envelope and output from a Snes9x snapshot', () => {
        const sound = new Uint8Array(65700 + 128);
        sound[65700 + 8] = 64;
        sound[65700 + 9] = 32;

        const snapshotHeader = new TextEncoder().encode(`#!s9xsnp:0014\nSND:${String(sound.length).padStart(6, '0')}:`);
        const snapshot = new Uint8Array(snapshotHeader.length + sound.length);
        snapshot.set(snapshotHeader);
        snapshot.set(sound, snapshotHeader.length);

        const state = new Uint8Array(16 + snapshot.length);
        state.set(new TextEncoder().encode('RASTATE\x01MEM '));
        new DataView(state.buffer).setUint32(12, snapshot.length, true);
        state.set(snapshot, 16);

        const activity = readCurrentVoiceActivity(state);
        expect(activity[0]).toEqual({ active: true, level: (64 / 127) * (32 / 128) });
        expect(activity.slice(1).every((voice) => !voice.active)).toBe(true);
    });
});
