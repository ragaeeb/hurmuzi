/// <reference lib="webworker" />
import { type MusicScanResult, scanForMusic } from './musicScan';
import { createVoiceProbe, type ProbeModule } from './voiceProbe';

export interface MusicScanRequest {
    rom: ArrayBuffer;
    /** Absolute URL of public/snes9x-probe/snes9x-probe.mjs. */
    probeUrl: string;
}

export type MusicScanMessage =
    | { type: 'progress'; fraction: number }
    | { type: 'result'; result: MusicScanResult }
    | { type: 'error'; message: string };

const post = (message: MusicScanMessage) => self.postMessage(message);

self.onmessage = async ({ data }: MessageEvent<MusicScanRequest>) => {
    try {
        // The probe is a prebuilt Emscripten module served from /public, not part of the bundle.
        const { default: createModule } = await import(
            /* webpackIgnore: true */ /* turbopackIgnore: true */ data.probeUrl
        );
        const module: ProbeModule = await createModule({ print: () => {}, printErr: () => {} });
        const probe = createVoiceProbe(module, new Uint8Array(data.rom));
        post({ result: scanForMusic(probe, (fraction) => post({ fraction, type: 'progress' })), type: 'result' });
    } catch (error) {
        post({ message: error instanceof Error ? error.message : 'Music scan failed', type: 'error' });
    }
};
