'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getValidRomExtensions, isValidRomFile } from '@/lib/emulator/utils';
import {
    getRomNameFromSource,
    listStoredRoms,
    normalizeRemoteRomSource,
    type StoredRom,
    saveLocalRom,
} from '@/lib/storage/roms';

type TabType = 'upload' | 'url' | 'repo';

export default function Home() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabType>('upload');
    const [isDragging, setIsDragging] = useState(false);
    const [recentRoms, setRecentRoms] = useState<StoredRom[]>([]);

    useEffect(() => {
        let cancelled = false;
        listStoredRoms()
            .then((roms) => {
                if (!cancelled) {
                    setRecentRoms(roms);
                }
            })
            .catch((error) => console.warn('Failed to list cached ROMs:', error));
        return () => {
            cancelled = true;
        };
    }, []);

    const handleFileDrop = async (file: File) => {
        if (!isValidRomFile(file.name)) {
            alert(`Invalid file type. Please use a SNES ROM file (${getValidRomExtensions()})`);
            return;
        }

        try {
            const source = await saveLocalRom(file);
            router.push(`/play?source=${encodeURIComponent(source)}`);
        } catch (error) {
            console.error('Failed to cache local ROM:', error);
            alert(error instanceof Error ? error.message : 'Failed to cache local ROM');
        }
    };

    const handleUrlSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const url = formData.get('rom-url') as string;

        if (!url?.trim()) {
            alert('Please enter a URL');
            return;
        }

        try {
            const source = normalizeRemoteRomSource(url);
            getRomNameFromSource(source);
            form.reset();
            router.push(`/play?source=${encodeURIComponent(source)}`);
        } catch (error) {
            console.error('Failed to load ROM from URL:', error);
            alert(error instanceof Error ? error.message : 'Failed to download ROM');
        }
    };

    const handleRepoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const repoUrl = formData.get('repo-url') as string;
        if (repoUrl?.trim()) {
            router.push(`/list?url=${encodeURIComponent(repoUrl)}`);
        } else {
            alert('Please enter a GitHub repository URL');
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileDrop(files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileDrop(files[0]);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#070712]">
            {/* Scanline subtle overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.4) 1px, rgba(0,0,0,0.4) 2px)',
                    }}
                />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-white/10 border-b bg-[#090918]/80 backdrop-blur-md">
                <div className="flex w-full items-center justify-between px-4 py-3 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-amber-400 to-emerald-500 shadow-amber-500/10 shadow-md">
                            <span className="text-base">🎮</span>
                        </div>
                        <div>
                            <h1 className="flex items-center gap-2 font-bold text-lg text-white tracking-tight md:text-xl">
                                <span>Hurmuzi</span>
                                <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono font-semibold text-[10px] text-cyan-400">
                                    SNES
                                </span>
                            </h1>
                            <p className="text-[11px] text-zinc-400">Browser emulator with 8-channel sound mixer</p>
                        </div>
                    </div>

                    {recentRoms.length > 0 && (
                        <div className="hidden items-center gap-2 sm:flex">
                            <span className="font-mono text-xs text-zinc-400">Quick play:</span>
                            <select
                                defaultValue=""
                                onChange={(e) => {
                                    if (e.target.value) {
                                        router.push(`/play?source=${encodeURIComponent(e.target.value)}`);
                                    }
                                }}
                                className="max-w-[200px] truncate rounded-lg border border-white/10 bg-[#121226] px-2.5 py-1 text-xs text-zinc-200 transition-colors focus:border-cyan-400/50 focus:outline-none"
                            >
                                <option value="" disabled>
                                    Recent ROMs ({recentRoms.length})
                                </option>
                                {recentRoms.map((rom) => (
                                    <option key={rom.source} value={rom.source}>
                                        {rom.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content Area */}
            <main className="w-full flex-1 px-4 py-6 md:px-8">
                <div className="mx-auto w-full max-w-5xl">
                    {/* Compact Hero / Action Box */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f22]/90 shadow-2xl backdrop-blur-xl">
                        {/* Subtle top glow line */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-red-500/50 via-yellow-400/60 to-emerald-500/50" />

                        {/* Mode Switcher Tabs */}
                        <div className="flex border-white/10 border-b bg-[#0b0b18] p-1.5">
                            <button
                                type="button"
                                onClick={() => setActiveTab('upload')}
                                className={`group relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 font-medium text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${
                                    activeTab === 'upload'
                                        ? 'border border-purple-400/30 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 font-semibold text-white shadow-inner'
                                        : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
                                }`}
                            >
                                <span>📂</span>
                                <span>Drop / Browse File</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab('url')}
                                className={`group relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 font-medium text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${
                                    activeTab === 'url'
                                        ? 'border border-cyan-400/30 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 font-semibold text-white shadow-inner'
                                        : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
                                }`}
                            >
                                <span>🌐</span>
                                <span>Direct URL</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab('repo')}
                                className={`group relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 font-medium text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${
                                    activeTab === 'repo'
                                        ? 'border border-emerald-400/30 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 font-semibold text-white shadow-inner'
                                        : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'
                                }`}
                            >
                                <span>📚</span>
                                <span>GitHub Repository</span>
                            </button>
                        </div>

                        {/* Tab Contents */}
                        <div className="p-5 md:p-8">
                            {/* Upload Tab */}
                            {activeTab === 'upload' && (
                                <div>
                                    <label
                                        htmlFor="rom-file-input"
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 ${
                                            isDragging
                                                ? 'border-yellow-400 bg-yellow-500/10 shadow-[0_0_30px_rgba(250,204,21,0.2)]'
                                                : 'border-white/15 bg-[#121226]/50 hover:border-cyan-400/50 hover:bg-[#151530]'
                                        }`}
                                    >
                                        <input
                                            id="rom-file-input"
                                            type="file"
                                            accept=".smc,.sfc,.fig,.swc,.bs,.st"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />

                                        <div
                                            className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-3xl shadow-lg transition-transform duration-200 ${
                                                isDragging ? 'scale-110' : 'group-hover:scale-105'
                                            }`}
                                        >
                                            {isDragging ? '📥' : '👾'}
                                        </div>

                                        <h2 className="font-semibold text-base text-zinc-100 md:text-lg">
                                            {isDragging ? 'Release to launch game!' : 'Drag & drop your SNES ROM here'}
                                        </h2>

                                        <p className="mt-1 text-xs text-zinc-400">
                                            Supports{' '}
                                            <span className="font-medium font-mono text-cyan-300">
                                                .sfc, .smc, .fig, .swc, .bs
                                            </span>
                                        </p>

                                        <div className="mt-4">
                                            <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 active:scale-95 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                                                <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                <span>Choose ROM File</span>
                                            </span>
                                        </div>

                                        <span className="mt-4 font-mono text-[10px] text-zinc-500">
                                            🔒 Processed entirely in your browser — zero upload
                                        </span>
                                    </label>
                                </div>
                            )}

                            {/* Direct URL Tab */}
                            {activeTab === 'url' && (
                                <form onSubmit={handleUrlSubmit} className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="rom-url-input"
                                            className="mb-1.5 block font-medium text-xs text-zinc-300"
                                        >
                                            ROM URL (Direct or GitHub Raw Link)
                                        </label>
                                        <div className="flex flex-col gap-2.5 sm:flex-row">
                                            <input
                                                id="rom-url-input"
                                                name="rom-url"
                                                type="url"
                                                defaultValue={process.env.NEXT_PUBLIC_DEFAULT_ROM_URL}
                                                placeholder="https://raw.githubusercontent.com/.../game.sfc"
                                                className="flex-1 rounded-xl border border-white/10 bg-[#121228] px-4 py-2.5 font-mono text-xs text-zinc-200 placeholder-zinc-600 transition-colors focus:border-cyan-400/60 focus:bg-[#161632] focus:outline-none"
                                            />
                                            <button
                                                type="submit"
                                                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95"
                                            >
                                                <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                <span className="relative flex items-center justify-center gap-1.5">
                                                    <span>Load Game</span>
                                                    <span>→</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-mono text-[11px] text-zinc-500">
                                        💡 Works with direct HTTP/HTTPS links and GitHub raw URLs.
                                    </p>
                                </form>
                            )}

                            {/* GitHub Repo Tab */}
                            {activeTab === 'repo' && (
                                <form onSubmit={handleRepoSubmit} className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="repo-url-input"
                                            className="mb-1.5 block font-medium text-xs text-zinc-300"
                                        >
                                            GitHub Repository
                                        </label>
                                        <div className="flex flex-col gap-2.5 sm:flex-row">
                                            <input
                                                id="repo-url-input"
                                                name="repo-url"
                                                type="url"
                                                defaultValue={process.env.NEXT_PUBLIC_DEFAULT_REPO_URL}
                                                placeholder="https://github.com/user/snes-roms"
                                                className="flex-1 rounded-xl border border-white/10 bg-[#121228] px-4 py-2.5 font-mono text-xs text-zinc-200 placeholder-zinc-600 transition-colors focus:border-emerald-400/60 focus:bg-[#161632] focus:outline-none"
                                            />
                                            <button
                                                type="submit"
                                                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95"
                                            >
                                                <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                <span className="relative flex items-center justify-center gap-1.5">
                                                    <span>Browse Library</span>
                                                    <span>→</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-mono text-[11px] text-zinc-500">
                                        🗂️ Explore and filter through all compatible ROMs in any public GitHub
                                        repository.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Features row */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#0e0e20]/60 p-3.5 backdrop-blur-sm">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-base text-red-400">
                                🎵
                            </span>
                            <div>
                                <h3 className="font-semibold text-xs text-zinc-200">8-Channel Mixer</h3>
                                <p className="mt-0.5 text-[11px] text-zinc-500">
                                    Granular voice muting, soloing & music detection on SPC700.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#0e0e20]/60 p-3.5 backdrop-blur-sm">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 text-base">
                                ⚡
                            </span>
                            <div>
                                <h3 className="font-semibold text-xs text-zinc-200">State Persistence</h3>
                                <p className="mt-0.5 text-[11px] text-zinc-500">
                                    Audio preferences & game states automatically remembered.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#0e0e20]/60 p-3.5 backdrop-blur-sm">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-base text-emerald-400">
                                🔒
                            </span>
                            <div>
                                <h3 className="font-semibold text-xs text-zinc-200">100% Private</h3>
                                <p className="mt-0.5 text-[11px] text-zinc-500">
                                    Local execution with no external tracking or cloud storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
