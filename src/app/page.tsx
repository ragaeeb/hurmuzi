'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getValidRomExtensions, isValidRomFile } from '@/lib/emulator/utils';

export default function Home() {
    const router = useRouter();
    const [isDragging, setIsDragging] = useState(false);

    const handleFileDrop = async (file: File) => {
        if (!isValidRomFile(file.name)) {
            alert(`Invalid file type. Please use a SNES ROM file (${getValidRomExtensions()})`);
            return;
        }

        // Convert to data URL and store in sessionStorage
        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target?.result as string;
            // Store ROM data in sessionStorage (no URL length limits)
            sessionStorage.setItem('romData', dataUrl);
            sessionStorage.setItem('romName', file.name);
            // Navigate with just the name in URL
            router.push(`/play?name=${encodeURIComponent(file.name)}`);
        };
        reader.readAsDataURL(file);
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
            let downloadUrl: string;
            let filename: string;
            let isGitHubApiBlob = false;

            // Check if it's a GitHub API blob URL
            if (url.includes('api.github.com/repos/') && url.includes('/git/blobs/')) {
                // GitHub API blob URL - need to fetch JSON first
                isGitHubApiBlob = true;
                downloadUrl = url;
                // We'll get the filename from user or default to game.sfc
                filename = 'game.sfc'; // Default, will be updated if we can infer
            } else if (url.includes('raw.githubusercontent.com')) {
                // Direct raw URL
                downloadUrl = url;
                const urlPath = new URL(url).pathname;
                filename = decodeURIComponent(urlPath.split('/').pop() || 'game.sfc');
            } else if (url.includes('github.com') && url.includes('/blob/')) {
                // Convert github.com/user/repo/blob/branch/path to raw URL
                const parts = url.split('/blob/');
                if (parts.length === 2) {
                    const [base, pathPart] = parts;
                    downloadUrl = `${base.replace('github.com', 'raw.githubusercontent.com')}/${pathPart}`;
                    filename = decodeURIComponent(pathPart.split('/').pop() || 'game.sfc');
                } else {
                    throw new Error('Invalid GitHub URL format');
                }
            } else {
                // Assume it's a direct download URL
                downloadUrl = url;
                const urlPath = new URL(url).pathname;
                filename = decodeURIComponent(urlPath.split('/').pop() || 'game.sfc');
            }

            console.log('📥 Downloading ROM from:', downloadUrl);

            let blob: Blob;

            if (isGitHubApiBlob) {
                // Fetch the GitHub API blob response
                const response = await fetch(downloadUrl);
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                }

                const jsonData = await response.json();

                // GitHub API returns base64 encoded content
                if (!jsonData.content || jsonData.encoding !== 'base64') {
                    throw new Error('Unexpected GitHub API response format');
                }

                // Decode base64 to binary
                const base64Content = jsonData.content.replace(/\s/g, ''); // Remove whitespace
                const binaryString = atob(base64Content);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }

                blob = new Blob([bytes], { type: 'application/octet-stream' });

                // Prompt user for filename since API doesn't provide it
                const userFilename = prompt('Enter ROM filename (e.g., game.sfc):', 'game.sfc');
                if (!userFilename) {
                    throw new Error('Filename required');
                }
                filename = userFilename;
            } else {
                // Direct download
                const response = await fetch(downloadUrl);
                if (!response.ok) {
                    throw new Error(`Failed to download: ${response.status} ${response.statusText}`);
                }
                blob = await response.blob();
            }

            // Validate filename
            if (!isValidRomFile(filename)) {
                throw new Error(`Invalid file type. Must be: ${getValidRomExtensions()}`);
            }

            console.log('✅ ROM downloaded:', filename, 'Size:', (blob.size / 1024 / 1024).toFixed(2), 'MB');

            // Clear form before async operation
            form.reset();

            // Convert to data URL and navigate
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target?.result as string;
                // Store in sessionStorage
                sessionStorage.setItem('romData', dataUrl);
                sessionStorage.setItem('romName', filename);
                router.push(`/play?name=${encodeURIComponent(filename)}`);
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            console.error('Failed to load ROM from URL:', error);
            alert(error instanceof Error ? error.message : 'Failed to download ROM');
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
            <header className="relative border-[#2a2a4a] border-b bg-gradient-to-b from-[#1a1a3a] to-[#0f0f23]">
                <div className="mx-auto max-w-6xl px-6 py-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">🎮</span>
                            <h1 className="font-bold text-2xl tracking-tight md:text-4xl">
                                <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                                    Hurmuzi
                                </span>
                            </h1>
                            <span className="text-3xl">🕹️</span>
                        </div>
                        <p className="text-[#6a6a9a] text-sm uppercase tracking-widest">
                            Play SNES games in your browser
                        </p>
                    </div>
                </div>

                {/* Decorative pixels */}
                <div className="absolute top-4 left-4 flex gap-1 opacity-50">
                    <div className="h-2 w-2 bg-red-500" />
                    <div className="h-2 w-2 bg-yellow-400" />
                    <div className="h-2 w-2 bg-green-500" />
                </div>
                <div className="absolute top-4 right-4 flex gap-1 opacity-50">
                    <div className="h-2 w-2 bg-green-500" />
                    <div className="h-2 w-2 bg-yellow-400" />
                    <div className="h-2 w-2 bg-red-500" />
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-4xl px-4 py-12">
                <div className="relative">
                    {/* Glow effect */}
                    <div className="-inset-4 absolute rounded-3xl bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 blur-xl" />

                    {/* Selection Card */}
                    <div className="relative rounded-2xl border border-[#3a3a5a] bg-gradient-to-b from-[#2a2a4a] to-[#1a1a3a] p-6 shadow-2xl">
                        <div className="overflow-hidden rounded-xl bg-[#0f0f23] shadow-inner">
                            {/* URL Input Section */}
                            <div className="border-[#2a2a4a] border-b bg-[#0a0a1a] p-6">
                                <form onSubmit={handleUrlSubmit}>
                                    <label
                                        htmlFor="rom-url-input"
                                        className="mb-3 block font-bold text-cyan-400 text-lg"
                                    >
                                        🌐 Load ROM from URL
                                    </label>
                                    <div className="flex gap-3">
                                        <input
                                            id="rom-url-input"
                                            name="rom-url"
                                            type="url"
                                            defaultValue={process.env.NEXT_PUBLIC_DEFAULT_ROM_URL}
                                            placeholder="https://raw.githubusercontent.com/..."
                                            className="flex-1 rounded-lg border border-[#2a2a4a] bg-[#0f0f23] px-4 py-3 text-[#cacafa] placeholder-[#4a4a6a] focus:border-cyan-400/50 focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:from-purple-500 hover:to-blue-500"
                                        >
                                            Load
                                        </button>
                                    </div>
                                    <p className="mt-3 text-[#6a6a8a] text-sm">
                                        💡 Paste a GitHub raw URL or direct ROM link
                                    </p>
                                </form>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-4 px-6 py-4">
                                <div className="h-px flex-1 bg-[#2a2a4a]" />
                                <span className="text-[#4a4a6a] text-sm">OR</span>
                                <div className="h-px flex-1 bg-[#2a2a4a]" />
                            </div>

                            {/* GitHub Repository Browser */}
                            <div className="border-[#2a2a4a] border-b bg-[#0a0a1a] p-6">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.currentTarget);
                                        const repoUrl = formData.get('repo-url') as string;
                                        if (repoUrl?.trim()) {
                                            router.push(`/list?url=${encodeURIComponent(repoUrl)}`);
                                        } else {
                                            alert('Please enter a GitHub repository URL');
                                        }
                                    }}
                                >
                                    <label
                                        htmlFor="repo-url-input"
                                        className="mb-3 block font-bold text-green-400 text-lg"
                                    >
                                        📚 Browse GitHub ROM Repository
                                    </label>
                                    <div className="flex gap-3">
                                        <input
                                            id="repo-url-input"
                                            name="repo-url"
                                            type="url"
                                            defaultValue={process.env.NEXT_PUBLIC_DEFAULT_REPO_URL}
                                            placeholder="https://github.com/user/rom-collection"
                                            className="flex-1 rounded-lg border border-[#2a2a4a] bg-[#0f0f23] px-4 py-3 text-[#cacafa] placeholder-[#4a4a6a] focus:border-green-400/50 focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 font-bold text-white transition-all hover:from-green-500 hover:to-emerald-500"
                                        >
                                            Browse
                                        </button>
                                    </div>
                                    <p className="mt-3 text-[#6a6a8a] text-sm">
                                        🗂️ View and search all compatible ROMs in a repository
                                    </p>
                                </form>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-4 px-6 py-4">
                                <div className="h-px flex-1 bg-[#2a2a4a]" />
                                <span className="text-[#4a4a6a] text-sm">OR</span>
                                <div className="h-px flex-1 bg-[#2a2a4a]" />
                            </div>

                            {/* Drag & Drop Section */}
                            <label
                                htmlFor="rom-file-input"
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                className={`block cursor-pointer p-12 transition-all duration-300 ${
                                    isDragging
                                        ? 'border-2 border-yellow-400 border-dashed bg-yellow-500/10'
                                        : 'bg-[#0f0f23] hover:bg-[#151530]'
                                }`}
                            >
                                <input
                                    id="rom-file-input"
                                    type="file"
                                    accept=".smc,.sfc,.fig,.swc,.bs,.st"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />
                                <div className="pointer-events-none flex flex-col items-center gap-4 text-center">
                                    <div
                                        className={`text-6xl transition-transform duration-300 ${isDragging ? 'scale-125' : ''}`}
                                    >
                                        {isDragging ? '📥' : '📂'}
                                    </div>
                                    <h2 className="font-bold text-2xl text-[#cacafa]">
                                        {isDragging ? 'Drop ROM here!' : 'Drag & Drop ROM File'}
                                    </h2>
                                    <p className="text-[#6a6a9a]">
                                        Supported formats: <span className="text-cyan-400">.smc, .sfc, .fig, .swc</span>
                                    </p>
                                    <span className="pointer-events-auto inline-block rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:from-purple-500 hover:to-blue-500">
                                        Or Click to Browse
                                    </span>
                                    <p className="text-[#4a4a6a] text-sm">
                                        🔒 Your files are processed locally - never uploaded
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-[#2a2a4a] bg-[#1a1a3a]/50 p-5">
                        <h3 className="mb-3 flex items-center gap-2 font-bold text-yellow-400">
                            <span>⚡</span> Features
                        </h3>
                        <ul className="space-y-2 text-[#8a8aba] text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                Full SNES emulation in browser
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                8-channel audio mixer
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                Save/load game states
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                No installation required
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-xl border border-[#2a2a4a] bg-[#1a1a3a]/50 p-5">
                        <h3 className="mb-3 flex items-center gap-2 font-bold text-cyan-400">
                            <span>🔗</span> GitHub ROM URLs
                        </h3>
                        <p className="mb-2 text-[#8a8aba] text-sm">Use raw.githubusercontent.com URLs:</p>
                        <code className="block rounded bg-[#0a0a1a] p-2 text-[#6a6a8a] text-[10px]">
                            https://raw.githubusercontent.com/
                            <br />
                            owner/repo/branch/path/game.sfc
                        </code>
                    </div>
                </div>
            </main>
        </div>
    );
}
