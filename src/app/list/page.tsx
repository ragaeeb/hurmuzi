'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { isValidRomFile } from '@/lib/emulator/utils';

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

const ITEM_HEIGHT = 60; // Height of each ROM item in pixels
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
                console.log('Fetching from GitHub API:', apiUrl);
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
                }

                const data: GitHubTreeResponse = await response.json();

                // Filter for compatible ROM files
                const compatibleRoms = data.tree.filter((item) => item.type === 'blob' && isValidRomFile(item.path));

                console.log(`Found ${compatibleRoms.length} compatible ROMs out of ${data.tree.length} items`);
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
    const handleRomSelect = async (rom: GitHubTreeItem) => {
        try {
            console.log('Downloading ROM:', rom.path);

            // Use the blob URL from GitHub API
            const response = await fetch(rom.url);
            if (!response.ok) {
                throw new Error(`Failed to fetch ROM: ${response.status}`);
            }

            const jsonData = await response.json();

            if (!jsonData.content || jsonData.encoding !== 'base64') {
                throw new Error('Unexpected GitHub API response format');
            }

            // Decode base64 to binary
            const base64Content = jsonData.content.replace(/\s/g, '');
            const binaryString = atob(base64Content);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }

            const blob = new Blob([bytes], { type: 'application/octet-stream' });

            console.log('✅ ROM downloaded:', rom.path, 'Size:', (blob.size / 1024 / 1024).toFixed(2), 'MB');

            // Convert to data URL and navigate
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target?.result as string;
                sessionStorage.setItem('romData', dataUrl);
                sessionStorage.setItem('romName', rom.path.split('/').pop() || 'game.sfc');
                router.push(`/play?name=${encodeURIComponent(rom.path.split('/').pop() || 'game.sfc')}`);
            };
            reader.readAsDataURL(blob);
        } catch (err) {
            console.error('Failed to download ROM:', err);
            alert(err instanceof Error ? err.message : 'Failed to download ROM');
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
        <div className="min-h-screen bg-[#0a0a1a] font-mono">
            {/* Scanline overlay */}
            <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
                    }}
                />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 border-[#2a2a4a] border-b bg-gradient-to-b from-[#1a1a3a] to-[#0f0f23]">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <div className="flex items-center justify-between gap-4">
                        <button
                            type="button"
                            onClick={() => router.push('/')}
                            className="text-[#6a6a9a] transition-colors hover:text-cyan-400"
                        >
                            ← Back
                        </button>
                        <h1 className="font-bold text-xl tracking-tight md:text-2xl">
                            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                ROM Library
                            </span>
                        </h1>
                        <div className="w-16" /> {/* Spacer for centering */}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-6xl px-4 py-6">
                {/* Search Bar */}
                <div className="mb-6">
                    <form onSubmit={handleFilterSubmit}>
                        <div className="flex gap-3">
                            <input
                                name="filter"
                                type="text"
                                placeholder="Search ROMs... (press Enter to search)"
                                defaultValue={filterQuery}
                                className="flex-1 rounded-lg border border-[#2a2a4a] bg-[#0f0f23] px-4 py-3 text-[#cacafa] placeholder-[#4a4a6a] focus:border-cyan-400/50 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:from-purple-500 hover:to-blue-500"
                            >
                                🔍 Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Status Display */}
                {loading && (
                    <div className="py-12 text-center">
                        <div className="mb-4 inline-block animate-spin text-4xl">⏳</div>
                        <p className="text-[#6a6a9a]">Loading ROMs from GitHub...</p>
                    </div>
                )}

                {error && (
                    <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-6 text-center">
                        <p className="text-red-400">❌ {error}</p>
                    </div>
                )}

                {!loading && !error && (
                    <>
                        {/* Results Count */}
                        <div className="mb-4 text-[#6a6a9a] text-sm">
                            Found <span className="font-bold text-cyan-400">{filteredRoms.length}</span> compatible ROM
                            {filteredRoms.length !== 1 ? 's' : ''}
                            {filterQuery && ` matching "${filterQuery}"`}
                        </div>

                        {/* ROM List with Virtual Scrolling */}
                        <div
                            ref={containerRef}
                            onScroll={handleScroll}
                            className="relative h-[600px] overflow-y-auto rounded-xl border border-[#2a2a4a] bg-[#0f0f23]"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            <div style={{ height: totalHeight, position: 'relative' }}>
                                <div style={{ transform: `translateY(${offsetY}px)` }}>
                                    {visibleRoms.map((rom) => {
                                        const fileName = rom.path.split('/').pop() || rom.path;
                                        const directory = rom.path.includes('/')
                                            ? rom.path.substring(0, rom.path.lastIndexOf('/'))
                                            : '';

                                        return (
                                            <button
                                                type="button"
                                                key={rom.sha}
                                                onClick={() => handleRomSelect(rom)}
                                                className="group w-full border-[#2a2a4a] border-b bg-[#0f0f23] px-6 py-4 text-left transition-all hover:border-cyan-400/50 hover:bg-[#1a1a3a]"
                                                style={{ height: ITEM_HEIGHT }}
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="min-w-0 flex-1">
                                                        <div className="truncate font-medium text-[#cacafa] transition-colors group-hover:text-cyan-400">
                                                            🎮 {fileName}
                                                        </div>
                                                        {directory && (
                                                            <div className="mt-1 truncate text-[#6a6a9a] text-xs">
                                                                📁 {directory}
                                                            </div>
                                                        )}
                                                    </div>
                                                    {rom.size && (
                                                        <div className="whitespace-nowrap text-[#6a6a9a] text-xs">
                                                            {(rom.size / 1024).toFixed(1)} KB
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {filteredRoms.length === 0 && !loading && (
                            <div className="py-12 text-center text-[#6a6a9a]">
                                No compatible ROMs found
                                {filterQuery && ' matching your search'}
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

export default function ListPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center bg-[#0a0a1a] font-mono">
                    <div className="text-center">
                        <div className="mb-4 inline-block animate-spin text-4xl">⏳</div>
                        <p className="text-[#6a6a9a]">Loading...</p>
                    </div>
                </div>
            }
        >
            <RomListContent />
        </Suspense>
    );
}
