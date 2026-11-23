import type { MusicScanState } from '@/hooks/useMusicScan';
import type { ChannelRole } from '@/lib/emulator/musicScan';

interface MusicScanPanelProps {
    scan: MusicScanState;
    /** Which of the eight channels are currently switched on in the mixer. */
    channels: boolean[];
    disabled: boolean;
    /** Mutes the given channels (zero-based). */
    onMute: (channelIndexes: number[]) => void;
}

const ROLE_ROWS: { role: ChannelRole; label: string; className: string }[] = [
    { className: 'text-purple-300', label: 'Music', role: 'music' },
    { className: 'text-sky-300', label: 'Music + effects', role: 'shared' },
    { className: 'text-emerald-300', label: 'Effects', role: 'effects' },
];

export default function MusicScanPanel({ scan, channels, disabled, onMute }: MusicScanPanelProps) {
    if (scan.status === 'idle') {
        return null;
    }

    if (scan.status === 'scanning') {
        const percent = Math.round(scan.progress * 100);
        return (
            <div role="status" className="mb-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5">
                <div className="flex items-center justify-between text-xs font-semibold tracking-tight text-purple-200">
                    <span className="flex items-center gap-1.5">
                        <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-purple-300 border-t-transparent motion-reduce:animate-none" />
                        Finding music channels…
                    </span>
                    <span className="font-mono tabular-nums">{percent}%</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full rounded-full bg-purple-400 transition-[width] duration-200"
                        style={{ width: `${percent}%` }}
                    />
                </div>
                <p className="mt-1.5 font-mono text-[9px] text-zinc-500">
                    A silent copy of the game is being played in the background
                </p>
            </div>
        );
    }

    if (scan.status === 'error') {
        return (
            <p
                role="alert"
                className="mb-3 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-xs text-red-300"
            >
                Music scan failed: {scan.message}
            </p>
        );
    }

    if (!scan.result.heardAudio) {
        return (
            <p className="mb-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-xs text-zinc-400">
                The music scan heard no sound from this game.
            </p>
        );
    }

    const musicIndexes = scan.result.channels.filter((c) => c.role === 'music').map((c) => c.channel - 1);
    const stillPlaying = musicIndexes.filter((index) => channels[index]);

    return (
        <div className="mb-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5">
            <dl className="space-y-1">
                {ROLE_ROWS.map(({ role, label, className }) => {
                    const found = scan.result.channels.filter((c) => c.role === role);
                    return found.length === 0 ? null : (
                        <div key={role} className="flex items-baseline justify-between gap-2 text-xs">
                            <dt className={`font-semibold tracking-tight ${className}`}>{label}</dt>
                            <dd className="font-mono text-[10px] text-zinc-300">
                                CH {found.map((c) => c.channel).join(' ')}
                            </dd>
                        </div>
                    );
                })}
            </dl>

            {musicIndexes.length === 0 ? (
                <p className="mt-2 text-[11px] text-zinc-400">
                    Music and effects share every channel in this game, so none can be muted without losing effects.
                </p>
            ) : (
                <button
                    type="button"
                    onClick={() => onMute(stillPlaying)}
                    disabled={disabled || stillPlaying.length === 0}
                    className={`group relative mt-2 w-full overflow-hidden rounded-xl border px-3 py-2 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] ${
                        disabled || stillPlaying.length === 0
                            ? 'cursor-not-allowed border-white/5 bg-[#18182e] text-zinc-500'
                            : 'border-purple-500/30 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-purple-600/30 text-purple-200 shadow-[0_0_12px_rgba(147,51,234,0.15)] hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]'
                    }`}
                >
                    <div className="animate-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:animate-none" />
                    <span className="relative">
                        {stillPlaying.length === 0 ? 'Music channels muted' : 'Mute music channels'}
                    </span>
                </button>
            )}

            <p className="mt-1.5 text-center font-mono text-[9px] text-zinc-500">
                Best guess from a scripted playthrough • saved per ROM
            </p>
        </div>
    );
}
