import { useEffect, useState } from 'react';
import type { MusicScanResult } from '@/lib/emulator/musicScan';
import type { MusicScanMessage, MusicScanRequest } from '@/lib/emulator/musicScanWorker';
import { getSavedMusicScan, saveMusicScan } from '@/lib/storage/musicScans';

export type MusicScanState =
    | { status: 'idle' }
    | { status: 'scanning'; progress: number }
    | { status: 'done'; result: MusicScanResult }
    | { status: 'error'; message: string };

/**
 * Finds the music channels of a ROM in a background worker. The scan never touches the emulator
 * the user is playing, and its result is remembered per ROM.
 */
export function useMusicScan(romSource: string, rom: Blob | null): MusicScanState {
    const [state, setState] = useState<MusicScanState>({ status: 'idle' });

    useEffect(() => {
        if (!romSource || !rom) {
            setState({ status: 'idle' });
            return;
        }

        const saved = getSavedMusicScan(romSource);
        if (saved) {
            setState({ result: saved, status: 'done' });
            return;
        }

        setState({ progress: 0, status: 'scanning' });
        const worker = new Worker(new URL('../lib/emulator/musicScanWorker.ts', import.meta.url), { type: 'module' });
        worker.onmessage = ({ data }: MessageEvent<MusicScanMessage>) => {
            if (data.type === 'progress') {
                setState({ progress: data.fraction, status: 'scanning' });
            } else if (data.type === 'result') {
                saveMusicScan(romSource, data.result);
                setState({ result: data.result, status: 'done' });
            } else {
                setState({ message: data.message, status: 'error' });
            }
        };
        worker.onerror = (event) => setState({ message: event.message || 'Music scan failed', status: 'error' });

        rom.arrayBuffer().then(
            (buffer) => {
                const request: MusicScanRequest = {
                    probeUrl: new URL('/snes9x-probe/snes9x-probe.mjs', window.location.origin).href,
                    rom: buffer,
                };
                worker.postMessage(request, [buffer]);
            },
            () => setState({ message: 'Could not read the ROM for the music scan', status: 'error' }),
        );

        return () => worker.terminate();
    }, [romSource, rom]);

    return state;
}
