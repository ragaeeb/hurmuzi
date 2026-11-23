module.exports = [
"[project]/src/app/components/ChannelButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChannelButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const ROLE_BADGES = {
    effects: {
        className: 'text-emerald-300',
        description: 'sound effects',
        text: 'FX'
    },
    music: {
        className: 'text-purple-300',
        description: 'music',
        text: '♪'
    },
    shared: {
        className: 'text-sky-300',
        description: 'music and sound effects',
        text: '♪+FX'
    }
};
const EQ_ANIMATIONS = [
    'animate-eq-1',
    'animate-eq-2',
    'animate-eq-3',
    'animate-eq-4',
    'animate-eq-2',
    'animate-eq-1',
    'animate-eq-3'
];
function ChannelButton({ channel, isUIEnabled, isEffectivelyPlaying, role, needsReloadForThis, disabled, onToggle, onSolo }) {
    const isLive = isEffectivelyPlaying && !disabled;
    const isLikelyMusic = role === 'music';
    const badge = role ? ROLE_BADGES[role] : undefined;
    const roleNote = badge ? ` (${badge.description})` : '';
    const toggleLabel = needsReloadForThis ? `${channel.name} - Pending reload to unmute` : isUIEnabled ? `Mute ${channel.name}${roleNote}` : `Unmute ${channel.name}${roleNote}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group/channel flex flex-col items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                disabled: disabled,
                "aria-label": toggleLabel,
                className: `relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border transition-all duration-150 active:scale-95 ${disabled ? 'cursor-not-allowed border-white/5 bg-[#141424] opacity-50' : isUIEnabled ? needsReloadForThis ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-amber-900/20 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:border-amber-400/60' : isLikelyMusic ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-[#121224] shadow-[0_0_14px_rgba(168,85,247,0.2)] hover:border-purple-400' : 'border-white/10 bg-gradient-to-b from-[#1e1e36] to-[#121224] shadow-md hover:border-cyan-400/40 hover:shadow-[0_0_14px_rgba(6,182,212,0.15)]' : 'border-red-500/20 bg-[#0d0d1a] opacity-70 hover:border-red-500/40 hover:opacity-90'}`,
                title: toggleLabel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full transition-all duration-300 ${isLive ? 'scale-110' : ''}`,
                        style: {
                            backgroundColor: isLive ? channel.color : needsReloadForThis ? '#f59e0b' : isUIEnabled ? '#3a3a5a' : '#ef4444',
                            boxShadow: isLive ? `0 0 8px ${channel.color}, 0 0 2px #fff` : needsReloadForThis ? '0 0 6px rgba(245,158,11,0.6)' : !isUIEnabled ? '0 0 4px rgba(239,68,68,0.5)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    needsReloadForThis && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1 left-1 font-mono text-[9px] text-amber-400 motion-safe:animate-pulse",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-1 left-1 rounded bg-black/60 px-1 font-mono text-[8px] font-semibold ${badge.className}`,
                        children: badge.text
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, this),
                    !isUIEnabled && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-lg text-red-400/50",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChannelButton.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex h-5 items-end gap-[2px] transition-opacity ${!isUIEnabled ? 'opacity-15' : needsReloadForThis ? 'opacity-40' : 'opacity-90'}`,
                        children: [
                            0.35,
                            0.7,
                            1,
                            0.55,
                            0.85,
                            0.45,
                            0.75
                        ].map((height, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-[2.5px] rounded-full transition-all ${isLive ? EQ_ANIMATIONS[idx % EQ_ANIMATIONS.length] : ''}`,
                                style: {
                                    backgroundColor: isLive ? channel.color : needsReloadForThis ? '#f59e0b' : isUIEnabled ? isLikelyMusic ? '#a855f7' : '#555577' : '#33334d',
                                    height: isLive ? undefined : `${height * 100}%`,
                                    minHeight: '3px'
                                }
                            }, height, false, {
                                fileName: "[project]/src/app/components/ChannelButton.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-medium font-mono text-[10px] tracking-tight transition-colors ${!isUIEnabled ? 'text-red-400/60' : needsReloadForThis ? 'text-amber-400' : isLikelyMusic ? 'font-semibold text-purple-300' : 'text-zinc-300 group-hover/channel:text-cyan-300'}`,
                    children: channel.name
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ChannelButton.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onSolo,
                disabled: disabled,
                className: `rounded border px-1.5 py-0.5 font-mono font-semibold text-[8px] uppercase tracking-wider transition-all duration-150 active:scale-90 ${disabled ? 'cursor-not-allowed border-transparent text-zinc-600' : 'border-white/5 bg-[#121224] text-zinc-400 hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-300 hover:shadow-[0_0_8px_rgba(245,158,11,0.2)]'}`,
                title: `Solo ${channel.name}`,
                children: "SOLO"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ChannelButton.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/MusicScanPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicScanPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const ROLE_ROWS = [
    {
        className: 'text-purple-300',
        label: 'Music',
        role: 'music'
    },
    {
        className: 'text-sky-300',
        label: 'Music + effects',
        role: 'shared'
    },
    {
        className: 'text-emerald-300',
        label: 'Effects',
        role: 'effects'
    }
];
function MusicScanPanel({ scan, channels, disabled, onMute }) {
    if (scan.status === 'idle') {
        return null;
    }
    if (scan.status === 'scanning') {
        const percent = Math.round(scan.progress * 100);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "status",
            className: "mb-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-xs font-semibold tracking-tight text-purple-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block h-3 w-3 animate-spin rounded-full border-2 border-purple-300 border-t-transparent motion-reduce:animate-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this),
                                "Finding music channels…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono tabular-nums",
                            children: [
                                percent,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 h-1 overflow-hidden rounded-full bg-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full rounded-full bg-purple-400 transition-[width] duration-200",
                        style: {
                            width: `${percent}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1.5 font-mono text-[9px] text-zinc-500",
                    children: "A silent copy of the game is being played in the background"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this);
    }
    if (scan.status === 'error') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            role: "alert",
            className: "mb-3 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-xs text-red-300",
            children: [
                "Music scan failed: ",
                scan.message
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, this);
    }
    if (!scan.result.heardAudio) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-xs text-zinc-400",
            children: "The music scan heard no sound from this game."
        }, void 0, false, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this);
    }
    const musicIndexes = scan.result.channels.filter((c)=>c.role === 'music').map((c)=>c.channel - 1);
    const stillPlaying = musicIndexes.filter((index)=>channels[index]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "space-y-1",
                children: ROLE_ROWS.map(({ role, label, className })=>{
                    const found = scan.result.channels.filter((c)=>c.role === role);
                    return found.length === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                className: `font-semibold tracking-tight ${className}`,
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                className: "font-mono text-[10px] text-zinc-300",
                                children: [
                                    "CH ",
                                    found.map((c)=>c.channel).join(' ')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                                lineNumber: 80,
                                columnNumber: 29
                            }, this)
                        ]
                    }, role, true, {
                        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                        lineNumber: 78,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            musicIndexes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[11px] text-zinc-400",
                children: "Music and effects share every channel in this game, so none can be muted without losing effects."
            }, void 0, false, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onMute(stillPlaying),
                disabled: disabled || stillPlaying.length === 0,
                className: `group relative mt-2 w-full overflow-hidden rounded-xl border px-3 py-2 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] ${disabled || stillPlaying.length === 0 ? 'cursor-not-allowed border-white/5 bg-[#18182e] text-zinc-500' : 'border-purple-500/30 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-purple-600/30 text-purple-200 shadow-[0_0_12px_rgba(147,51,234,0.15)] hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:animate-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative",
                        children: stillPlaying.length === 0 ? 'Music channels muted' : 'Mute music channels'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-center font-mono text-[9px] text-zinc-500",
                children: "Best guess from a scripted playthrough • saved per ROM"
            }, void 0, false, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/components/SoundChannelMixer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoundChannelMixer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChannelMixer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChannelMixer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChannelButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ChannelButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MusicScanPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MusicScanPanel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function SoundChannelMixer({ musicScan = {
    status: 'idle'
}, onSetVariable, onReloadEmulator, onSaveStates, disabled = false, coreOptions = [], initialStates = null, romName = '' }) {
    const [showOptions, setShowOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { channels, effectiveAudioState, hasChannelSupport, needsReload, allEnabled, isApplying, handleToggle, handleToggleAll, handleMute, handleSolo, applyWithReload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChannelMixer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChannelMixer"])({
        coreOptions,
        initialStates,
        onReloadEmulator,
        onSaveStates,
        onSetVariable,
        romName
    });
    const audioOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAudioOptions"])(coreOptions);
    const controlsDisabled = disabled || isApplying;
    const handleAudioOptionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, value)=>{
        onSetVariable(key, value);
    }, [
        onSetVariable
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-2xl border border-white/10 bg-[#101024]/90 p-4 shadow-xl backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 text-xs",
                                children: "🎛️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm text-zinc-200 tracking-tight",
                                children: "Audio Channels"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleToggleAll,
                        disabled: controlsDisabled,
                        className: `relative overflow-hidden rounded-full px-3 py-1 font-medium text-xs tracking-tight transition-all duration-150 active:scale-95 ${controlsDisabled ? 'cursor-not-allowed border border-white/5 bg-zinc-900 text-zinc-600' : allEnabled ? 'border border-red-500/30 bg-red-500/15 text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.15)] hover:border-red-500/50 hover:bg-red-500/25' : 'border border-emerald-500/30 bg-emerald-500/15 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 hover:bg-emerald-500/25'}`,
                        children: allEnabled ? 'Mute All' : 'Enable All'
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center text-xs text-zinc-500",
                children: "Start the game to enable controls"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this),
            !disabled && hasChannelSupport === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-amber-400 text-xs",
                    children: "⚠️ Sound channel options not found in this core."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 94,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this),
            hasChannelSupport !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MusicScanPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                scan: musicScan,
                channels: channels,
                disabled: controlsDisabled,
                onMute: handleMute
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 99,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].map((channel, index)=>{
                    const isUIEnabled = channels[index];
                    const isEffectivelyPlaying = effectiveAudioState[index];
                    const needsReloadForThis = isUIEnabled && !isEffectivelyPlaying;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChannelButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        channel: channel,
                        isUIEnabled: isUIEnabled,
                        isEffectivelyPlaying: isEffectivelyPlaying,
                        needsReloadForThis: needsReloadForThis,
                        role: musicScan.status === 'done' ? musicScan.result.channels[index].role : undefined,
                        disabled: controlsDisabled,
                        onToggle: ()=>handleToggle(index),
                        onSolo: ()=>handleSolo(index)
                    }, channel.id, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 110,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            !disabled && needsReload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-white/10 border-t pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: applyWithReload,
                        disabled: isApplying || !onReloadEmulator,
                        className: `group relative w-full overflow-hidden rounded-xl border px-4 py-2.5 font-bold text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${isApplying ? 'cursor-wait border-cyan-500/20 bg-cyan-950/30 text-cyan-400' : 'animate-pulse-glow border-cyan-400/60 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent motion-reduce:animate-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex items-center justify-center gap-2",
                                children: isApplying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Reloading Emulator..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 143,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                    lineNumber: 141,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔊"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 147,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Apply Changes (Preserves Game State)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 148,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                    lineNumber: 146,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-center font-mono text-[9px] text-amber-400/80",
                        children: "Unmuting requires restarting audio engine. Game state will be restored."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 153,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 127,
                columnNumber: 17
            }, this),
            !disabled && audioOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-white/5 border-t pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowOptions(!showOptions),
                        className: "flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 transition-colors hover:text-cyan-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px]",
                                children: showOptions ? '▼' : '▶'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this),
                            "Audio Options (",
                            audioOptions.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, this),
                    showOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-2 rounded-xl border border-white/5 bg-[#141428] p-2.5",
                        children: audioOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: `audio-opt-${opt.key}`,
                                        className: "font-mono text-[10px] text-zinc-400",
                                        children: opt.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: `audio-opt-${opt.key}`,
                                        value: opt.currentValue,
                                        onChange: (e)=>handleAudioOptionChange(opt.key, e.target.value),
                                        className: "rounded-lg border border-white/10 bg-[#0d0d1b] px-2 py-1 font-mono text-base text-zinc-200 focus:border-cyan-400/50 focus:outline-none sm:text-[10px]",
                                        children: opt.values.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: val,
                                                children: val
                                            }, val, false, {
                                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                                lineNumber: 188,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 181,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, opt.key, true, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 174,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 172,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 161,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-white/5 border-t pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center font-mono text-[9px] text-zinc-500",
                    children: "SNES SPC700 Audio • Settings saved per ROM"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 202,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 201,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/play/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Play
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMusicScan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMusicScan.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$channelStates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/channelStates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/roms.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoundChannelMixer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SoundChannelMixer.tsx [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
;
;
;
;
const GameEmulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/GameEmulator.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full min-h-[480px] w-full items-center justify-center bg-[#0c0c1e]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-cyan-400 text-xs tracking-wider",
                        children: "Initializing Core..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
function PlayContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const emulatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coreOptions, setCoreOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [savedChannelStates, setSavedChannelStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [romError, setRomError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [romLoading, setRomLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [romSource, setRomSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [romBlob, setRomBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [romName, setRomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Unknown Game');
    const source = searchParams.get('source');
    const musicScan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMusicScan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMusicScan"])(romSource, romBlob);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        setGameStarted(false);
        setCoreOptions([]);
        setSavedChannelStates(null);
        setRomSource('');
        setRomBlob(null);
        setRomError(null);
        setRomLoading(Boolean(source));
        if (!source) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRomSource"])(source).then((rom)=>{
            if (cancelled) {
                return;
            }
            setRomBlob(rom.blob);
            setRomName(rom.name);
            setRomSource(rom.source);
            setSavedChannelStates((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$channelStates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSavedChannelStates"])(rom.source));
        }).catch((error)=>{
            if (!cancelled) {
                console.error('Failed to load ROM:', error);
                setRomError(error instanceof Error ? error.message : 'Failed to load ROM');
            }
        }).finally(()=>{
            if (!cancelled) {
                setRomLoading(false);
            }
        });
        return ()=>{
            cancelled = true;
        };
    }, [
        source
    ]);
    const handleGameReady = (options)=>{
        setGameStarted(true);
        setCoreOptions(options);
    };
    const handleSetVariable = (key, value)=>{
        if (emulatorRef.current) {
            return emulatorRef.current.setVariable(key, value);
        }
        return false;
    };
    const handleReloadEmulator = async (pendingSettings)=>{
        if (emulatorRef.current) {
            setGameStarted(false);
            await emulatorRef.current.reloadEmulator(pendingSettings);
        }
    };
    const handleSaveChannelStates = (states)=>{
        if (romSource) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$channelStates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChannelStates"])(romSource, states);
        }
    };
    // Prevent arrow keys from scrolling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            const activeElement = document.activeElement;
            const isIframeFocused = activeElement?.tagName === 'IFRAME';
            const gameContainer = document.querySelector('.game-container');
            const isGameAreaFocused = gameContainer?.contains(activeElement);
            if (isIframeFocused || isGameAreaFocused) {
                const gameKeys = [
                    'ArrowUp',
                    'ArrowDown',
                    'ArrowLeft',
                    'ArrowRight',
                    ' ',
                    'Space'
                ];
                if (gameKeys.includes(e.key) || gameKeys.includes(e.code)) {
                    e.preventDefault();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown, {
            capture: true
        });
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown, {
                capture: true
            });
        };
    }, []);
    if (!romBlob) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#070712] px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f24] p-8 text-center shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 text-4xl",
                        children: romLoading ? '⏳' : '⚠️'
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-2 font-semibold text-lg text-zinc-100",
                        children: romLoading ? 'Loading ROM…' : romError || 'No ROM loaded'
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 text-xs text-zinc-400",
                        children: romLoading ? 'Retrieving and verifying game data...' : 'Could not launch the requested game.'
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "← Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 144,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 140,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 132,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 131,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-[#070712]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-50 opacity-[0.02]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full",
                    style: {
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.4) 1px, rgba(0,0,0,0.4) 2px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 w-full border-white/10 border-b bg-[#090918]/80 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full items-center justify-between px-4 py-2.5 md:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "group flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#121226] px-3 py-1.5 font-medium text-xs text-zinc-300 transition-all duration-150 hover:border-white/20 hover:bg-[#181832] hover:text-white active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 truncate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base",
                                            children: "🎮"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "truncate font-semibold text-sm text-zinc-100 md:text-base",
                                            children: romName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors ${gameStarted ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300' : 'border-amber-500/30 bg-amber-500/15 text-amber-300'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `h-2 w-2 rounded-full ${gameStarted ? 'animate-pulse bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/play/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium font-mono text-[10px] uppercase tracking-wider",
                                        children: gameStarted ? 'Running' : 'Loading'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/play/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/play/page.tsx",
                                lineNumber: 183,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 166,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full flex-1 px-4 py-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 lg:col-span-8 xl:col-span-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "game-container relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1a] shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[4/3] w-full bg-[#05050d]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GameEmulator, {
                                        ref: emulatorRef,
                                        game: romBlob,
                                        onReady: handleGameReady
                                    }, romSource, false, {
                                        fileName: "[project]/src/app/play/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/play/page.tsx",
                                lineNumber: 210,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 209,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 lg:col-span-4 xl:col-span-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoundChannelMixer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    musicScan: musicScan,
                                    onSetVariable: handleSetVariable,
                                    onReloadEmulator: handleReloadEmulator,
                                    onSaveStates: handleSaveChannelStates,
                                    disabled: !gameStarted,
                                    coreOptions: coreOptions,
                                    initialStates: savedChannelStates,
                                    romName: romSource
                                }, romSource, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-white/10 bg-[#101024]/80 p-4 shadow-xl backdrop-blur-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "flex items-center gap-2 font-semibold text-xs text-zinc-200 tracking-tight",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⌨️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 37
                                                        }, this),
                                                        " Keyboard Controls"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] text-zinc-500",
                                                    children: "Player 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium font-mono text-[10px] text-cyan-400 uppercase tracking-wider",
                                                            children: "Movement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "D-Pad"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "↑"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "↓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "←"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Start / Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "Enter"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "Shift"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium font-mono text-[10px] text-purple-400 uppercase tracking-wider",
                                                            children: "Buttons"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "A / B"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "S"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "X / Y"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "W"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "Q"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "L / R"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 310,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "X"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-[11px] text-zinc-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "⚡ Fast-Forward:",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                            children: "Space"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Fullscreen:",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                            children: "F11"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 224,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 207,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 206,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/play/page.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
function Play() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-[#070712]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 349,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-cyan-400 text-xs tracking-wider",
                        children: "Loading Game..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 350,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 348,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 347,
            columnNumber: 17
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayContent, {}, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 355,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/play/page.tsx",
        lineNumber: 345,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/hooks/useChannelMixer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChannelMixer",
    ()=>useChannelMixer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/channelState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function useChannelMixer({ coreOptions, initialStates, romName, onSetVariable, onReloadEmulator, onSaveStates }) {
    const [channels, setChannels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(8).fill(true));
    const [hasChannelSupport, setHasChannelSupport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isApplying, setIsApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [effectiveAudioState, setEffectiveAudioState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(8).fill(true));
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const appliedInitialStatesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastRomNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const lastCoreStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    // Reset when ROM changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (romName !== lastRomNameRef.current) {
            lastRomNameRef.current = romName;
            initializedRef.current = false;
            appliedInitialStatesRef.current = false;
            lastCoreStateRef.current = '';
            setChannels(new Array(8).fill(true));
            setEffectiveAudioState(new Array(8).fill(true));
            setHasChannelSupport(null);
        }
    }, [
        romName
    ]);
    // Initialize from core options
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (coreOptions.length === 0) {
            return;
        }
        const channelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSoundChannelOptions"])(coreOptions);
        if (channelOptions.length === 0) {
            setHasChannelSupport(false);
            return;
        }
        const coreStateFingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCoreStateFingerprint"])(channelOptions);
        if (!initializedRef.current || lastCoreStateRef.current !== coreStateFingerprint) {
            setHasChannelSupport(true);
            initializedRef.current = true;
            lastCoreStateRef.current = coreStateFingerprint;
            if (initialStates && !appliedInitialStatesRef.current) {
                appliedInitialStatesRef.current = true;
                console.log('📂 Applying saved channel states:', initialStates);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach((ch, i)=>{
                    const value = initialStates[i] ? 'enabled' : 'disabled';
                    onSetVariable(ch.varKey, value);
                });
                setChannels([
                    ...initialStates
                ]);
                setEffectiveAudioState([
                    ...initialStates
                ]);
                const mutedCount = initialStates.filter((s)=>!s).length;
                if (mutedCount > 0) {
                    console.log(`🔇 Restored ${mutedCount} muted channel(s) from saved preferences`);
                }
            } else {
                const newChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeChannelStates"])(coreOptions);
                setChannels(newChannels);
                setEffectiveAudioState([
                    ...newChannels
                ]);
                console.log('Initialized channel states from core:', newChannels);
            }
        }
    }, [
        coreOptions,
        initialStates,
        onSetVariable
    ]);
    // Save states to localStorage (debounced)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!initializedRef.current || !onSaveStates) {
            return;
        }
        const timeout = setTimeout(()=>{
            onSaveStates(channels);
        }, 500);
        return ()=>clearTimeout(timeout);
    }, [
        channels,
        onSaveStates
    ]);
    const needsReload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["needsReload"])(channels, effectiveAudioState);
    const allEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areAllChannelsEnabled"])(channels);
    const hasSupport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasSoundChannelSupport"])(coreOptions);
    const handleToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((channelIndex)=>{
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"][channelIndex];
        const currentUIState = channels[channelIndex];
        const newUIState = !currentUIState;
        const newValue = newUIState ? 'enabled' : 'disabled';
        console.log(`Toggling ${channel.name}: ${currentUIState ? 'enabled' : 'disabled'} -> ${newValue}`);
        onSetVariable(channel.varKey, newValue);
        setChannels((prev)=>{
            const updated = [
                ...prev
            ];
            updated[channelIndex] = newUIState;
            return updated;
        });
        if (!newUIState) {
            setEffectiveAudioState((prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateEffectiveStateOnMute"])(prev, channelIndex, true));
            console.log(`  ✓ Muting works immediately - effective state updated`);
        } else {
            console.log(`  ⚠️ Unmuting requires reload - effective state unchanged`);
        }
    }, [
        channels,
        onSetVariable
    ]);
    const handleToggleAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const newState = !allEnabled;
        const value = newState ? 'enabled' : 'disabled';
        console.log(`Toggling all channels to: ${value}`);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach((channel)=>{
            onSetVariable(channel.varKey, value);
        });
        const newChannels = new Array(8).fill(newState);
        setChannels(newChannels);
        if (!newState) {
            setEffectiveAudioState(new Array(8).fill(false));
        }
    }, [
        allEnabled,
        onSetVariable
    ]);
    const handleSolo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((channelIndex)=>{
        console.log(`Soloing channel ${channelIndex + 1}`);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach((channel, i)=>{
            const value = i === channelIndex ? 'enabled' : 'disabled';
            onSetVariable(channel.varKey, value);
        });
        const newChannels = new Array(8).fill(false);
        newChannels[channelIndex] = true;
        setChannels(newChannels);
        setEffectiveAudioState((prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateEffectiveStateOnSolo"])(prev, channelIndex));
    }, [
        onSetVariable
    ]);
    const handleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((channelIndexes)=>{
        for (const index of channelIndexes){
            onSetVariable(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"][index].varKey, 'disabled');
        }
        // Muting takes effect immediately, so both the UI and the effective state follow.
        const mute = (states)=>states.map((on, index)=>on && !channelIndexes.includes(index));
        setChannels(mute);
        setEffectiveAudioState(mute);
    }, [
        onSetVariable
    ]);
    const applyWithReload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!onReloadEmulator) {
            console.warn('No reload function provided');
            return;
        }
        setIsApplying(true);
        console.log('🔄 Full emulator reload to apply channel settings...');
        const pendingSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPendingSettings"])(channels);
        try {
            await onReloadEmulator(pendingSettings);
            setTimeout(()=>{
                setEffectiveAudioState([
                    ...channels
                ]);
                console.log('✅ Effective state updated to match UI');
                setIsApplying(false);
            }, 2000);
        } catch (err) {
            console.error('Reload failed:', err);
            setIsApplying(false);
        }
    }, [
        channels,
        onReloadEmulator
    ]);
    return {
        allEnabled,
        applyWithReload,
        channels,
        effectiveAudioState,
        handleMute,
        handleSolo,
        handleToggle,
        handleToggleAll,
        hasChannelSupport,
        hasSupport,
        isApplying,
        needsReload
    };
}
}),
"[project]/src/hooks/useMusicScan.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMusicScan",
    ()=>useMusicScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$musicScans$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/musicScans.ts [app-ssr] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/hooks/useMusicScan.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: true
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
function useMusicScan(romSource, rom) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!romSource || !rom) {
            setState({
                status: 'idle'
            });
            return;
        }
        const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$musicScans$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSavedMusicScan"])(romSource);
        if (saved) {
            setState({
                result: saved,
                status: 'done'
            });
            return;
        }
        setState({
            progress: 0,
            status: 'scanning'
        });
        const worker = new Worker(new __turbopack_context__.U(__turbopack_context__.r("[project]/src/lib/emulator/musicScanWorker.ts (static in ecmascript, tag client)")), {
            type: 'module'
        });
        worker.onmessage = ({ data })=>{
            if (data.type === 'progress') {
                setState({
                    progress: data.fraction,
                    status: 'scanning'
                });
            } else if (data.type === 'result') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$musicScans$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMusicScan"])(romSource, data.result);
                setState({
                    result: data.result,
                    status: 'done'
                });
            } else {
                setState({
                    message: data.message,
                    status: 'error'
                });
            }
        };
        worker.onerror = (event)=>setState({
                message: event.message || 'Music scan failed',
                status: 'error'
            });
        rom.arrayBuffer().then((buffer)=>{
            const request = {
                probeUrl: new URL('/snes9x-probe/snes9x-probe.mjs', window.location.origin).href,
                rom: buffer
            };
            worker.postMessage(request, [
                buffer
            ]);
        }, ()=>setState({
                message: 'Could not read the ROM for the music scan',
                status: 'error'
            }));
        return ()=>worker.terminate();
    }, [
        romSource,
        rom
    ]);
    return state;
}
}),
"[project]/src/lib/emulator/channelState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areAllChannelsEnabled",
    ()=>areAllChannelsEnabled,
    "createPendingSettings",
    ()=>createPendingSettings,
    "hasSoundChannelSupport",
    ()=>hasSoundChannelSupport,
    "initializeChannelStates",
    ()=>initializeChannelStates,
    "needsReload",
    ()=>needsReload,
    "updateEffectiveStateOnMute",
    ()=>updateEffectiveStateOnMute,
    "updateEffectiveStateOnSolo",
    ()=>updateEffectiveStateOnSolo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-ssr] (ecmascript)");
;
;
function needsReload(uiStates, effectiveStates) {
    return uiStates.some((uiState, i)=>uiState === true && effectiveStates[i] === false);
}
function areAllChannelsEnabled(states) {
    return states.every((ch)=>ch);
}
function initializeChannelStates(options) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].map((ch)=>{
        const opt = options.find((o)=>o.key === ch.varKey);
        return opt ? opt.currentValue === 'enabled' : true;
    });
}
function hasSoundChannelSupport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSoundChannelOptions"])(options).length > 0;
}
function createPendingSettings(channelStates) {
    const settings = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach((channel, i)=>{
        settings[channel.varKey] = channelStates[i] ? 'enabled' : 'disabled';
    });
    return settings;
}
function updateEffectiveStateOnMute(currentEffective, channelIndex, isMuting) {
    if (!isMuting) {
        return currentEffective;
    }
    const updated = [
        ...currentEffective
    ];
    updated[channelIndex] = false;
    return updated;
}
function updateEffectiveStateOnSolo(currentEffective, soloedIndex) {
    const updated = new Array(8).fill(false);
    updated[soloedIndex] = currentEffective[soloedIndex];
    return updated;
}
}),
"[project]/src/lib/emulator/musicScan.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MUSIC_SCAN_VERSION",
    ()=>MUSIC_SCAN_VERSION,
    "classifyChannels",
    ()=>classifyChannels,
    "collectScanEvidence",
    ()=>collectScanEvidence,
    "recordWindow",
    ()=>recordWindow,
    "scanForMusic",
    ()=>scanForMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/voiceProbe.ts [app-ssr] (ecmascript)");
;
const MUSIC_SCAN_VERSION = 1;
/** One step of the script: a window that is replayed with buttons, then an optional Start tap. */ const PERIOD_FRAMES = 120;
const WINDOW_FRAMES = 60;
const START_TAP_FRAMES = 6;
const PRESS_FRAMES = 8;
/** Give up waiting for sound after this long and start tapping Start anyway. */ const MAX_SILENT_INTRO_PERIODS = 10;
/** Listen to the title screen for a moment before leaving it. */ const TITLE_PERIODS = 3;
const START_TAP_PERIODS = 15;
const PLAY_PERIODS = 40;
/**
 * While playing, Start is tapped this often. In a game it pauses and unpauses, so either way half of
 * the play time is spent unpaused; on a menu or cutscene it keeps things moving.
 */ const PLAY_START_EVERY_PERIODS = 5;
/** Each window is replayed with the next two action buttons and the next one of the others. */ const ACTION_BUTTONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].B,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].Y,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].A,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].X
];
const OTHER_BUTTONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].R,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].RIGHT,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].L,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].DOWN,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].LEFT,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].UP
];
/**
 * Starting a sound effect keeps the sound driver busy for a moment, which can shift the notes of the
 * music by a frame or two. Two traces count as the same sound when every note has a counterpart
 * within this many frames…
 */ const TIMING_SLACK_FRAMES = 2;
/** …at (nearly) the same pitch: vibrato sampled a frame apart is still the same note. */ const PITCH_SLACK_SHIFT = 5;
/** A voice reacted to a press only if it sounded different for longer than timing slack explains. */ const MIN_REACTION_FRAMES = TIMING_SLACK_FRAMES + 2;
/**
 * A press that changes this share of the playing voices at once did not trigger a sound effect; it
 * changed the scene (new song, pause, fade-out). Such a replay says nothing about single channels.
 */ const SCENE_CHANGE_SHARE = 0.5;
const SCENE_CHANGE_MIN_VOICES = 2;
/** A voice must react to presses in this many windows before it counts as an effects channel. */ const MIN_EFFECT_RESPONSES = 2;
/** Share of listened-to windows a voice must sound in, unprompted, to count as music. */ const MUSIC_PRESENCE = 0.25;
/** Below this share of windows a voice is treated as never used. */ const USED_PRESENCE = 0.02;
function activeFrames(trace, voice) {
    const frames = trace.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FRAME_BYTES"];
    let active = 0;
    for(let frame = 0; frame < frames; frame++){
        active += Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voiceEnvelope"])(trace, frame, voice) > 0);
    }
    return active;
}
function hasSound(trace) {
    for(let voice = 0; voice < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOICE_COUNT"]; voice++){
        if (activeFrames(trace, voice) > 0) {
            return true;
        }
    }
    return false;
}
/** True when what `voice` plays in `frame` of `trace` also occurs in `other` around the same time. */ function hasCounterpart(trace, other, frame, voice) {
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voiceEnvelope"])(trace, frame, voice) > 0;
    const sample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voiceSample"])(trace, frame, voice);
    const pitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voicePitch"])(trace, frame, voice);
    const first = Math.max(0, frame - TIMING_SLACK_FRAMES);
    const last = Math.min(other.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FRAME_BYTES"] - 1, frame + TIMING_SLACK_FRAMES);
    for(let near = first; near <= last; near++){
        const otherActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voiceEnvelope"])(other, near, voice) > 0;
        if (!active && !otherActive) {
            return true;
        }
        if (active && otherActive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voiceSample"])(other, near, voice) === sample && Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voicePitch"])(other, near, voice) - pitch) <= pitch >> PITCH_SLACK_SHIFT) {
            return true;
        }
    }
    return false;
}
/** True when pressing the button made `voice` play something it does not play when left alone. */ function reactedToPress(leftAlone, pressed, voice) {
    const frames = Math.min(leftAlone.length, pressed.length) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FRAME_BYTES"];
    let different = 0;
    for(let frame = 0; frame < frames; frame++){
        if (!hasCounterpart(pressed, leftAlone, frame, voice) || !hasCounterpart(leftAlone, pressed, frame, voice)) {
            different++;
        }
    }
    return different >= MIN_REACTION_FRAMES;
}
function recordWindow(evidence, leftAlone, replays) {
    const active = Array.from({
        length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOICE_COUNT"]
    }, (_, voice)=>activeFrames(leftAlone, voice));
    const playing = active.filter((frames)=>frames > 0).length;
    const reacted = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOICE_COUNT"]).fill(false);
    let usableReplays = 0;
    let anyReaction = false;
    for (const pressed of replays){
        const changes = active.map((_, voice)=>reactedToPress(leftAlone, pressed, voice));
        anyReaction ||= changes.some(Boolean);
        const changedPlaying = changes.filter((changed, voice)=>changed && active[voice] > 0).length;
        if (changedPlaying >= Math.max(SCENE_CHANGE_MIN_VOICES, playing * SCENE_CHANGE_SHARE)) {
            continue;
        }
        usableReplays++;
        changes.forEach((changed, voice)=>{
            reacted[voice] ||= changed;
        });
    }
    if (playing === 0 && !anyReaction) {
        return {
            active,
            outcome: 'silent',
            reacted
        };
    }
    if (usableReplays === 0) {
        evidence.sceneChanges++;
        return {
            active,
            outcome: 'scene-change',
            reacted
        };
    }
    evidence.windows++;
    for(let voice = 0; voice < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOICE_COUNT"]; voice++){
        const channel = evidence.channels[voice];
        if (!reacted[voice]) {
            channel.steadyFrames += active[voice];
            channel.steadyWindows += Number(active[voice] > 0);
        } else if (active[voice] > 0) {
            channel.changedResponses++;
        } else {
            channel.addedResponses++;
        }
    }
    return {
        active,
        outcome: 'counted',
        reacted
    };
}
/** The script moves on once a phase has run its course; the intro ends as soon as there is sound. */ function nextPhase(phase, periodsInPhase, heardSound) {
    if (phase === 'intro') {
        if (heardSound) {
            return 'title';
        }
        return periodsInPhase >= MAX_SILENT_INTRO_PERIODS ? 'start' : 'intro';
    }
    if (phase === 'title' && periodsInPhase >= TITLE_PERIODS) {
        return 'start';
    }
    if (phase === 'start' && periodsInPhase >= START_TAP_PERIODS) {
        return 'play';
    }
    return phase;
}
function collectScanEvidence(probe, observer = {}) {
    const evidence = {
        channels: Array.from({
            length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOICE_COUNT"]
        }, ()=>({
                addedResponses: 0,
                changedResponses: 0,
                steadyFrames: 0,
                steadyWindows: 0
            })),
        framesEmulated: 0,
        sceneChanges: 0,
        windows: 0
    };
    const run = (frames, joypad)=>{
        evidence.framesEmulated += frames;
        return probe.run(frames, joypad);
    };
    const replayPressing = (button)=>{
        probe.restore();
        const pressed = new Uint8Array(WINDOW_FRAMES * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FRAME_BYTES"]);
        pressed.set(run(PRESS_FRAMES, button));
        pressed.set(run(WINDOW_FRAMES - PRESS_FRAMES, 0), PRESS_FRAMES * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FRAME_BYTES"]);
        return pressed;
    };
    /** Plays the coming window once per button, then rewinds so it can be played left alone. */ const replayWindow = (windowIndex)=>{
        probe.save();
        const replays = [
            ACTION_BUTTONS[windowIndex * 2 % ACTION_BUTTONS.length],
            ACTION_BUTTONS[(windowIndex * 2 + 1) % ACTION_BUTTONS.length],
            OTHER_BUTTONS[windowIndex % OTHER_BUTTONS.length]
        ].map(replayPressing);
        probe.restore();
        return replays;
    };
    const maxPeriods = MAX_SILENT_INTRO_PERIODS + TITLE_PERIODS + START_TAP_PERIODS + PLAY_PERIODS;
    let phase = 'intro';
    let periodsInPhase = 0;
    let windows = 0;
    let periods = 0;
    while(phase !== 'play' || periodsInPhase < PLAY_PERIODS){
        const listening = phase !== 'intro';
        const tapStart = phase === 'start' || phase === 'play' && periodsInPhase % PLAY_START_EVERY_PERIODS === 0;
        const replays = listening ? replayWindow(windows++) : [];
        const leftAlone = run(WINDOW_FRAMES, 0);
        // Start goes after the window, so a pause jingle has faded before the next window listens.
        const rest = tapStart ? [
            run(START_TAP_FRAMES, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOYPAD"].START),
            run(PERIOD_FRAMES - WINDOW_FRAMES - START_TAP_FRAMES, 0)
        ] : [
            run(PERIOD_FRAMES - WINDOW_FRAMES, 0)
        ];
        if (listening) {
            const report = recordWindow(evidence, leftAlone, replays);
            observer.onWindow?.({
                ...report,
                phase,
                tappedStart: tapStart
            });
        }
        const next = nextPhase(phase, periodsInPhase + 1, hasSound(leftAlone) || rest.some(hasSound));
        periodsInPhase = next === phase ? periodsInPhase + 1 : 0;
        phase = next;
        observer.onProgress?.(Math.min(1, ++periods / maxPeriods));
    }
    return evidence;
}
function classifyChannels(evidence) {
    return evidence.channels.map((channel, index)=>{
        const presence = evidence.windows ? channel.steadyWindows / evidence.windows : 0;
        const activeRatio = evidence.windows ? channel.steadyFrames / (evidence.windows * WINDOW_FRAMES) : 0;
        const effectResponses = channel.addedResponses + channel.changedResponses;
        const playsMusic = presence >= MUSIC_PRESENCE;
        const playsEffects = effectResponses >= MIN_EFFECT_RESPONSES;
        let role = 'unused';
        if (playsMusic && playsEffects) {
            role = 'shared';
        } else if (playsMusic) {
            role = 'music';
        } else if (playsEffects || presence >= USED_PRESENCE) {
            // Sounds now and then without being a steady part of the mix: effects.
            role = 'effects';
        }
        return {
            activeRatio,
            channel: index + 1,
            effectResponses,
            presence,
            role
        };
    });
}
function scanForMusic(probe, onProgress) {
    const evidence = collectScanEvidence(probe, {
        onProgress
    });
    return {
        channels: classifyChannels(evidence),
        framesEmulated: evidence.framesEmulated,
        heardAudio: evidence.windows + evidence.sceneChanges > 0,
        version: MUSIC_SCAN_VERSION
    };
}
}),
"[project]/src/lib/emulator/musicScanWorker.ts (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/musicScanWorker.1h8pigyvone60.ts" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/lib/emulator/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Emulator core types
__turbopack_context__.s([
    "SNES_CHANNELS",
    ()=>SNES_CHANNELS
]);
const SNES_CHANNELS = [
    {
        color: '#ef4444',
        id: 1,
        name: 'CH 1',
        varKey: 'snes9x_sndchan_1'
    },
    {
        color: '#f97316',
        id: 2,
        name: 'CH 2',
        varKey: 'snes9x_sndchan_2'
    },
    {
        color: '#eab308',
        id: 3,
        name: 'CH 3',
        varKey: 'snes9x_sndchan_3'
    },
    {
        color: '#22c55e',
        id: 4,
        name: 'CH 4',
        varKey: 'snes9x_sndchan_4'
    },
    {
        color: '#06b6d4',
        id: 5,
        name: 'CH 5',
        varKey: 'snes9x_sndchan_5'
    },
    {
        color: '#3b82f6',
        id: 6,
        name: 'CH 6',
        varKey: 'snes9x_sndchan_6'
    },
    {
        color: '#8b5cf6',
        id: 7,
        name: 'CH 7',
        varKey: 'snes9x_sndchan_7'
    },
    {
        color: '#ec4899',
        id: 8,
        name: 'CH 8',
        varKey: 'snes9x_sndchan_8'
    }
];
}),
"[project]/src/lib/emulator/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCoreStateFingerprint",
    ()=>createCoreStateFingerprint,
    "getAudioOptions",
    ()=>getAudioOptions,
    "getSoundChannelOptions",
    ()=>getSoundChannelOptions,
    "getValidRomExtensions",
    ()=>getValidRomExtensions,
    "isValidRomFile",
    ()=>isValidRomFile,
    "parseCoreOptions",
    ()=>parseCoreOptions
]);
function parseCoreOptions(optionsString) {
    if (!optionsString) {
        return [];
    }
    const options = [];
    const lines = optionsString.split('\n').filter((line)=>line.trim());
    for (const line of lines){
        const [keyPart, valuesPart] = line.split('; ');
        if (!keyPart || !valuesPart) {
            continue;
        }
        const [key, currentValue] = keyPart.split('|');
        const values = valuesPart.split('|');
        const displayName = key.replace(/^snes9x[-_]/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
        options.push({
            currentValue: currentValue?.trim() || values[0]?.replace('(Default) ', '').trim(),
            displayName,
            key: key.trim(),
            values: values.map((v)=>v.replace('(Default) ', '').trim())
        });
    }
    return options;
}
function getSoundChannelOptions(options) {
    return options.filter((opt)=>opt.key.match(/snes9x_sndchan_\d/));
}
function getAudioOptions(options) {
    return options.filter((opt)=>(opt.key.toLowerCase().includes('audio') || opt.key.toLowerCase().includes('interpolation') || opt.key.toLowerCase().includes('echo')) && !opt.key.match(/snes9x_sndchan_\d/));
}
function createCoreStateFingerprint(options) {
    return options.map((o)=>`${o.key}:${o.currentValue}`).join(',');
}
function isValidRomFile(filename) {
    const validExtensions = [
        '.smc',
        '.sfc',
        '.fig',
        '.swc',
        '.bs',
        '.st'
    ];
    const ext = filename.toLowerCase().slice(filename.lastIndexOf('.'));
    return validExtensions.includes(ext);
}
function getValidRomExtensions() {
    return '.smc, .sfc, .fig, .swc, .bs, .st';
}
}),
"[project]/src/lib/emulator/voiceProbe.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Headless Snes9x voice probe (core/snes9x-probe). It runs a ROM without video or audio output
 * and reports the state of the eight S-DSP voices once per emulated frame.
 */ __turbopack_context__.s([
    "FRAME_BYTES",
    ()=>FRAME_BYTES,
    "JOYPAD",
    ()=>JOYPAD,
    "VOICE_BYTES",
    ()=>VOICE_BYTES,
    "VOICE_COUNT",
    ()=>VOICE_COUNT,
    "createVoiceProbe",
    ()=>createVoiceProbe,
    "voiceEnvelope",
    ()=>voiceEnvelope,
    "voicePitch",
    ()=>voicePitch,
    "voiceSample",
    ()=>voiceSample
]);
const VOICE_COUNT = 8;
const VOICE_BYTES = 8;
const FRAME_BYTES = VOICE_COUNT * VOICE_BYTES + 8;
const JOYPAD = {
    A: 1 << 8,
    B: 1 << 0,
    DOWN: 1 << 5,
    L: 1 << 10,
    LEFT: 1 << 6,
    R: 1 << 11,
    RIGHT: 1 << 7,
    START: 1 << 3,
    UP: 1 << 4,
    X: 1 << 9,
    Y: 1 << 1
};
function voiceEnvelope(trace, frame, voice) {
    const offset = frame * FRAME_BYTES + voice * VOICE_BYTES;
    return trace[offset] | trace[offset + 1] << 8;
}
function voiceSample(trace, frame, voice) {
    return trace[frame * FRAME_BYTES + voice * VOICE_BYTES + 3];
}
function voicePitch(trace, frame, voice) {
    const offset = frame * FRAME_BYTES + voice * VOICE_BYTES + 4;
    return (trace[offset] | trace[offset + 1] << 8) & 0x3fff;
}
function createVoiceProbe(module, rom) {
    if (module._probe_frame_bytes() !== FRAME_BYTES) {
        throw new Error('Voice probe build does not match this version of Hurmuzi');
    }
    const romPointer = module._malloc(rom.length);
    module.HEAPU8.set(rom, romPointer);
    const loaded = module._probe_load(romPointer, rom.length);
    module._free(romPointer);
    if (!loaded) {
        throw new Error('Snes9x could not load this ROM');
    }
    let buffer = 0;
    let capacity = 0;
    return {
        restore () {
            if (!module._probe_restore()) {
                throw new Error('Voice probe could not rewind');
            }
        },
        run (frames, joypad) {
            if (frames > capacity) {
                module._free(buffer);
                buffer = module._malloc(frames * FRAME_BYTES);
                capacity = frames;
            }
            module._probe_run(frames, joypad, buffer);
            // HEAPU8 is re-read every call: growing the wasm memory replaces the view.
            return module.HEAPU8.slice(buffer, buffer + frames * FRAME_BYTES);
        },
        save () {
            if (!module._probe_save()) {
                throw new Error('Voice probe could not snapshot');
            }
        }
    };
}
}),
"[project]/src/lib/storage/channelStates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearChannelStates",
    ()=>clearChannelStates,
    "getSavedChannelStates",
    ()=>getSavedChannelStates,
    "saveChannelStates",
    ()=>saveChannelStates
]);
/**
 * Storage utilities for channel states persistence
 */ const STORAGE_PREFIX = 'snes-channels-';
function getSavedChannelStates(romName) {
    if (!romName) {
        return null;
    }
    try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}${romName}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length === 8) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Failed to load saved channel states:', e);
    }
    return null;
}
function saveChannelStates(romName, states) {
    if (!romName || states.length !== 8) {
        return false;
    }
    try {
        localStorage.setItem(`${STORAGE_PREFIX}${romName}`, JSON.stringify(states));
        console.log(`💾 Saved channel states for "${romName}"`);
        return true;
    } catch (e) {
        console.warn('Failed to save channel states:', e);
        return false;
    }
}
function clearChannelStates(romName) {
    if (!romName) {
        return false;
    }
    try {
        localStorage.removeItem(`${STORAGE_PREFIX}${romName}`);
        return true;
    } catch (e) {
        console.warn('Failed to clear channel states:', e);
        return false;
    }
}
}),
"[project]/src/lib/storage/musicScans.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSavedMusicScan",
    ()=>getSavedMusicScan,
    "saveMusicScan",
    ()=>saveMusicScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicScan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/musicScan.ts [app-ssr] (ecmascript)");
;
const STORAGE_PREFIX = 'snes-music-scan-';
function getSavedMusicScan(romSource) {
    if (!romSource) {
        return null;
    }
    try {
        const saved = localStorage.getItem(`${STORAGE_PREFIX}${romSource}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed?.version === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicScan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MUSIC_SCAN_VERSION"] && Array.isArray(parsed.channels) && parsed.channels.length === 8) {
                return parsed;
            }
        }
    } catch (error) {
        console.warn('Failed to load the saved music scan:', error);
    }
    return null;
}
function saveMusicScan(romSource, result) {
    if (!romSource) {
        return false;
    }
    try {
        localStorage.setItem(`${STORAGE_PREFIX}${romSource}`, JSON.stringify(result));
        return true;
    } catch (error) {
        console.warn('Failed to save the music scan:', error);
        return false;
    }
}
}),
"[project]/src/lib/storage/roms.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRomNameFromSource",
    ()=>getRomNameFromSource,
    "listStoredRoms",
    ()=>listStoredRoms,
    "loadRomSource",
    ()=>loadRomSource,
    "normalizeRemoteRomSource",
    ()=>normalizeRemoteRomSource,
    "saveLocalRom",
    ()=>saveLocalRom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-ssr] (ecmascript)");
;
const ROMS_DIRECTORY = 'roms';
const LOCAL_DIRECTORY = 'local';
const REMOTE_DIRECTORY = 'remote';
const MAX_ROM_SIZE_BYTES = 16 * 1024 * 1024;
const MAX_GITHUB_RESPONSE_SIZE_BYTES = 23 * 1024 * 1024;
const ROM_DOWNLOAD_TIMEOUT_MS = 30000;
function getStorageManager() {
    const storage = navigator.storage;
    if (!storage?.getDirectory) {
        throw new Error('This browser does not support Origin Private File System storage');
    }
    return storage;
}
async function getDirectory(path, create) {
    let directory = await getStorageManager().getDirectory();
    for (const name of path){
        directory = await directory.getDirectoryHandle(name, {
            create
        });
    }
    return directory;
}
async function writeFile(directory, name, blob) {
    const handle = await directory.getFileHandle(name, {
        create: true
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
}
async function sha256(value) {
    const digest = await crypto.subtle.digest('SHA-256', value);
    return Array.from(new Uint8Array(digest), (byte)=>byte.toString(16).padStart(2, '0')).join('');
}
async function sourceHash(source) {
    return sha256(new TextEncoder().encode(source));
}
function assertRomSize(size) {
    if (size > MAX_ROM_SIZE_BYTES) {
        throw new Error('ROM download exceeds the 16 MB size limit');
    }
}
function safeFilename(name) {
    const filename = name.split('/').pop() || '';
    if (!filename || filename === '.' || filename === '..' || filename.includes('\\') || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidRomFile"])(filename)) {
        throw new Error('ROM source must end with a supported SNES file extension');
    }
    return filename;
}
function normalizeRemoteRomSource(value) {
    const url = new URL(value.trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new Error('ROM source must use HTTP or HTTPS');
    }
    if (url.hostname === 'github.com' && url.pathname.includes('/blob/')) {
        const [repositoryPath, filePath] = url.pathname.split('/blob/');
        if (!repositoryPath || !filePath) {
            throw new Error('Invalid GitHub ROM URL');
        }
        url.hostname = 'raw.githubusercontent.com';
        url.pathname = `${repositoryPath}/${filePath}`;
    }
    url.hash = '';
    return url.toString();
}
function getRomNameFromSource(source) {
    const url = new URL(source);
    if (url.protocol === 'opfs:') {
        return safeFilename(decodeURIComponent(url.pathname.split('/').pop() || ''));
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new Error('Unsupported ROM source');
    }
    if (url.hostname === 'api.github.com' && url.pathname.includes('/git/blobs/')) {
        return 'game.sfc';
    }
    return safeFilename(decodeURIComponent(url.pathname.split('/').pop() || ''));
}
async function saveLocalRom(file) {
    const name = safeFilename(file.name);
    const id = await sha256(await file.arrayBuffer());
    const directory = await getDirectory([
        ROMS_DIRECTORY,
        LOCAL_DIRECTORY,
        id
    ], true);
    await writeFile(directory, name, file);
    return `opfs:/${ROMS_DIRECTORY}/${LOCAL_DIRECTORY}/${id}/${encodeURIComponent(name)}`;
}
async function loadStoredRom(source) {
    const url = new URL(source);
    const parts = url.pathname.split('/').filter(Boolean).map(decodeURIComponent);
    if (parts.length !== 4 || parts[0] !== ROMS_DIRECTORY || parts[1] !== LOCAL_DIRECTORY && parts[1] !== REMOTE_DIRECTORY) {
        throw new Error('Invalid OPFS ROM source');
    }
    const name = safeFilename(parts[3]);
    const directory = await getDirectory(parts.slice(0, -1), false);
    const file = await (await directory.getFileHandle(name)).getFile();
    return {
        blob: file,
        cacheHit: true,
        name,
        source
    };
}
async function listStoredRoms(limit = 8) {
    const roms = [];
    for (const category of [
        LOCAL_DIRECTORY,
        REMOTE_DIRECTORY
    ]){
        try {
            const directory = await getDirectory([
                ROMS_DIRECTORY,
                category
            ], false);
            for await (const entry of directory.values()){
                if (entry.kind !== 'directory') {
                    continue;
                }
                for await (const handle of entry.values()){
                    if (handle.kind !== 'file' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidRomFile"])(handle.name)) {
                        continue;
                    }
                    const file = await handle.getFile();
                    roms.push({
                        lastModified: file.lastModified,
                        name: file.name,
                        source: `opfs:/${ROMS_DIRECTORY}/${category}/${entry.name}/${encodeURIComponent(file.name)}`
                    });
                }
            }
        } catch (error) {
            if (!(error instanceof DOMException) || error.name !== 'NotFoundError') {
                throw error;
            }
        }
    }
    // ponytail: Filename is the recent-list identity; use content hashes if same-name variants must coexist.
    const unique = new Map();
    for (const rom of roms.sort((a, b)=>b.lastModified - a.lastModified)){
        if (!unique.has(rom.name.toLowerCase())) {
            unique.set(rom.name.toLowerCase(), rom);
        }
    }
    return Array.from(unique.values()).slice(0, limit);
}
async function loadRemoteCache(source) {
    try {
        const directory = await getDirectory([
            ROMS_DIRECTORY,
            REMOTE_DIRECTORY,
            await sourceHash(source)
        ], false);
        for await (const handle of directory.values()){
            if (handle.kind === 'file' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidRomFile"])(handle.name)) {
                return await handle.getFile();
            }
        }
    } catch (error) {
        if (!(error instanceof DOMException) || error.name !== 'NotFoundError') {
            throw error;
        }
    }
    return null;
}
async function cacheRemoteRom(source, name, blob) {
    const directory = await getDirectory([
        ROMS_DIRECTORY,
        REMOTE_DIRECTORY,
        await sourceHash(source)
    ], true);
    await writeFile(directory, name, blob);
}
async function downloadRemoteRom(source) {
    const url = new URL(source);
    const isGitHubApiBlob = url.hostname === 'api.github.com' && url.pathname.includes('/git/blobs/');
    const response = await fetch(source, {
        signal: AbortSignal.timeout(ROM_DOWNLOAD_TIMEOUT_MS)
    });
    if (!response.ok) {
        throw new Error(`Failed to download ROM: ${response.status} ${response.statusText}`);
    }
    const contentLength = Number(response.headers.get('content-length') || 0);
    const maxResponseSize = isGitHubApiBlob ? MAX_GITHUB_RESPONSE_SIZE_BYTES : MAX_ROM_SIZE_BYTES;
    if (contentLength > maxResponseSize) {
        throw new Error('ROM download exceeds the 16 MB size limit');
    }
    if (isGitHubApiBlob) {
        const data = await response.json();
        if (!data.content || data.encoding !== 'base64') {
            throw new Error('Unexpected GitHub API response format');
        }
        const binary = atob(data.content.replace(/\s/g, ''));
        const bytes = Uint8Array.from(binary, (character)=>character.charCodeAt(0));
        assertRomSize(bytes.byteLength);
        return {
            blob: new Blob([
                bytes
            ], {
                type: 'application/octet-stream'
            }),
            name: 'game.sfc'
        };
    }
    const blob = await response.blob();
    assertRomSize(blob.size);
    return {
        blob,
        name: getRomNameFromSource(source)
    };
}
async function loadRomSource(value) {
    if (value.startsWith('opfs:')) {
        return loadStoredRom(value);
    }
    const source = normalizeRemoteRomSource(value);
    try {
        const cached = await loadRemoteCache(source);
        if (cached) {
            return {
                blob: cached,
                cacheHit: true,
                name: cached.name,
                source
            };
        }
    } catch (error) {
        console.warn('Failed to read the OPFS ROM cache:', error);
    }
    const downloaded = await downloadRemoteRom(source);
    try {
        await cacheRemoteRom(source, downloaded.name, downloaded.blob);
    } catch (error) {
        console.warn('Failed to cache the ROM in OPFS:', error);
    }
    return {
        ...downloaded,
        cacheHit: false,
        source
    };
}
}),
];

//# sourceMappingURL=src_08zty7wj5pe02._.js.map