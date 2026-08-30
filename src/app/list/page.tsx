'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { isValidRomFile } from '@/lib/emulator/utils';
import { normalizeRemoteRomSource } from '@/lib/storage/roms';

interface GitHubTreeItem {
    path: string;
    mode: string;
    type: string;
    sha: string;
    size?: number;
    url: string;
}

interface GitHubTreeResponse {
    sha: string;
    url: string;
    tree: GitHubTreeItem[];
    truncated?: boolean;
}

const ITEM_HEIGHT = 48; // Height of each ROM item in pixels
const VIEWPORT_BUFFER = 5; // Number of extra items to render above/below viewport

// Parse GitHub URL to extract owner and repo
const parseGitHubUrl = (githubUrl: string): { owner: string; repo: string } | null => {
    try {
        const urlObj = new URL(githubUrl);
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        if (pathParts.length >= 2) {
            return { owner: pathParts[0], repo: pathParts[1] };
        }
    } catch (e) {
        console.error('Failed to parse GitHub URL:', e);
    }
    return null;
};

function RomListContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const url = searchParams.get('url');

    const [roms, setRoms] = useState<GitHubTreeItem[]>([]);
    const [filteredRoms, setFilteredRoms] = useState<GitHubTreeItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filterQuery, setFilterQuery] = useState('');

    // Virtual scrolling state
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Fetch ROMs from GitHub API
    useEffect(() => {
        if (!url) {
            setError('No GitHub URL provided');
            setLoading(false);
            return;
        }

        const fetchRoms = async () => {
            setLoading(true);
            setError(null);

            const parsed = parseGitHubUrl(url);
            if (!parsed) {
                setError('Invalid GitHub URL format');
                setLoading(false);
                return;
            }

            const { owner, repo } = parsed;
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=1`;

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
                }

                const data: GitHubTreeResponse = await response.json();

                // Filter for compatible ROM files
                const compatibleRoms = data.tree.filter((item) => item.type === 'blob' && isValidRomFile(item.path));
                setRoms(compatibleRoms);
                setFilteredRoms(compatibleRoms);
            } catch (err) {
                console.error('Failed to fetch ROMs:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch ROMs');
            } finally {
                setLoading(false);
            }
        };

        fetchRoms();
    }, [url]);

    // Handle filter form submission
    const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = ((formData.get('filter') as string) || '').toLowerCase().trim();
        setFilterQuery(query);

        if (!query) {
            setFilteredRoms(roms);
            return;
        }

        const filtered = roms.filter((rom) => rom.path.toLowerCase().includes(query));
        setFilteredRoms(filtered);

        // Reset scroll to top when filtering
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    };

    // Handle ROM selection
    const handleRomSelect = (rom: GitHubTreeItem) => {
        try {
            const repository = url && parseGitHubUrl(url);
            if (!repository) {
                throw new Error('Invalid GitHub URL format');
            }
            const path = rom.path.split('/').map(encodeURIComponent).join('/');
            const source = normalizeRemoteRomSource(
                `https://raw.githubusercontent.com/${repository.owner}/${repository.repo}/master/${path}`,
            );
            router.push(`/play?source=${encodeURIComponent(source)}`);
        } catch (err) {
            console.error('Failed to open ROM:', err);
            alert(err instanceof Error ? err.message : 'Failed to open ROM');
        }
    };

    // Virtual scrolling calculations
    const visibleRange = useMemo(() => {
        const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - VIEWPORT_BUFFER);
        const endIndex = Math.min(
            filteredRoms.length - 1,
            Math.ceil((scrollTop + (containerRef.current?.clientHeight || 600)) / ITEM_HEIGHT) + VIEWPORT_BUFFER,
        );
        return { endIndex, startIndex };
    }, [scrollTop, filteredRoms.length]);

    const visibleRoms = useMemo(() => {
        return filteredRoms.slice(visibleRange.startIndex, visibleRange.endIndex + 1);
    }, [filteredRoms, visibleRange]);

    const totalHeight = filteredRoms.length * ITEM_HEIGHT;
    const offsetY = visibleRange.startIndex * ITEM_HEIGHT;

    // Handle scroll
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(e.currentTarget.scrollTop);
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#070712]">
            {/* Scanline overlay */}
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
                        <button
                            type="button"
                            onClick={() => router.push('/')}
                            className="group flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#121226] px-3 py-1.5 font-medium text-xs text-zinc-300 transition-all duration-150 hover:border-white/20 hover:bg-[#181832] hover:text-white active:scale-95"
                        >
                            <span>←</span>
                            <span>Back</span>
                        </button>
                        <h1 className="font-semibold text-base text-zinc-100 md:text-lg">ROM Library Browser</h1>
                    </div>

                    {!loading && !error && (
                        <div className="font-mono text-xs text-zinc-400">
                            <span className="font-semibold text-cyan-400">{filteredRoms.length}</span> ROMs
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content Area (Full-Width) */}
            <main className="w-full flex-1 px-4 py-4 md:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Search Bar */}
                    <div className="mb-3">
                        <form onSubmit={handleFilterSubmit}>
                            <div className="flex gap-2">
                                <input
                                    name="filter"
                                    type="text"
                                    placeholder="Search ROM name or path... (Press Enter)"
                                    defaultValue={filterQuery}
                                    className="flex-1 rounded-xl border border-white/10 bg-[#0f0f22] px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 transition-colors focus:border-cyan-400/50 focus:bg-[#13132c] focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95"
                                >
                                    <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    <span className="relative flex items-center gap-1.5">
                                        <span>🔍</span>
                                        <span>Filter</span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Status Display */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-24">
                            <div className="mb-3 h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent" />
                            <p className="font-mono text-xs text-zinc-400">Loading ROM collection from GitHub...</p>
                        </div>
                    )}

                    {error && (
                        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center">
                            <p className="font-medium text-red-300 text-sm">❌ {error}</p>
                        </div>
                    )}

                    {!loading && !error && (
                        <>
                            {/* ROM List with Virtual Scrolling */}
                            <div
                                ref={containerRef}
                                onScroll={handleScroll}
                                className="relative h-[calc(100vh-12rem)] min-h-[380px] overflow-y-auto rounded-2xl border border-white/10 bg-[#0c0c1e] shadow-inner"
                            >
                                <div style={{ height: totalHeight, position: 'relative' }}>
                                    <div style={{ transform: `translateY(${offsetY}px)` }}>
                                        {visibleRoms.map((rom) => {
                                            const fileName = rom.path.split('/').pop() || rom.path;
                                            const directory = rom.path.includes('/')
                                                ? rom.path.substring(0, rom.path.lastIndexOf('/'))
                                                : '';
                                            const extension = fileName.split('.').pop() || '';

                                            return (
                                                <button
                                                    type="button"
                                                    key={rom.sha}
                                                    onClick={() => handleRomSelect(rom)}
                                                    className="group flex w-full items-center justify-between border-white/5 border-b bg-[#0c0c1e] px-4 text-left transition-all duration-150 hover:border-cyan-500/20 hover:bg-[#151532] active:scale-[0.99]"
                                                    style={{ height: ITEM_HEIGHT }}
                                                >
                                                    <div className="flex min-w-0 flex-1 items-center gap-2.5">
                                                        <span className="text-zinc-500 transition-colors group-hover:text-cyan-400">
                                                            🎮
                                                        </span>
                                                        <div className="min-w-0 flex-1">
                                                            <div className="truncate font-medium text-xs text-zinc-200 transition-colors group-hover:text-cyan-300">
                                                                {fileName}
                                                            </div>
                                                            {directory && (
                                                                <div className="truncate font-mono text-[10px] text-zinc-500">
                                                                    📁 {directory}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <span className="rounded border border-white/5 bg-[#121226] px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 uppercase">
                                                            {extension}
                                                        </span>
                                                        {rom.size && (
                                                            <span className="whitespace-nowrap font-mono text-[10px] text-zinc-500">
                                                                {(rom.size / 1024).toFixed(0)} KB
                                                            </span>
                                                        )}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {filteredRoms.length === 0 && (
                                <div className="py-16 text-center text-xs text-zinc-500">
                                    No compatible ROMs found{filterQuery && ` matching "${filterQuery}"`}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default function ListPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center bg-[#070712]">
                    <div className="flex flex-col items-center gap-3">
                        <div className="h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent" />
                        <p className="font-mono text-xs text-zinc-400">Loading ROM Library...</p>
                    </div>
                </div>
            }
        >
            <RomListContent />
        </Suspense>
    );
}
