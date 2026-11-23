(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/ChannelButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChannelButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
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
function ChannelButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "b3448db4c2a3fb8ae5fad6077920430c42f8f2129a732d353a76867fba8ca97d") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b3448db4c2a3fb8ae5fad6077920430c42f8f2129a732d353a76867fba8ca97d";
    }
    const { channel, isUIEnabled, isEffectivelyPlaying, role, needsReloadForThis, disabled, onToggle, onSolo } = t0;
    const isLive = isEffectivelyPlaying && !disabled;
    const isLikelyMusic = role === "music";
    const badge = role ? ROLE_BADGES[role] : undefined;
    const roleNote = badge ? ` (${badge.description})` : "";
    const toggleLabel = needsReloadForThis ? `${channel.name} - Pending reload to unmute` : isUIEnabled ? `Mute ${channel.name}${roleNote}` : `Unmute ${channel.name}${roleNote}`;
    const t1 = `relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border transition-all duration-150 active:scale-95 ${disabled ? "cursor-not-allowed border-white/5 bg-[#141424] opacity-50" : isUIEnabled ? needsReloadForThis ? "border-amber-500/40 bg-gradient-to-b from-amber-500/15 to-amber-900/20 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:border-amber-400/60" : isLikelyMusic ? "border-purple-500/50 bg-gradient-to-b from-purple-900/30 to-[#121224] shadow-[0_0_14px_rgba(168,85,247,0.2)] hover:border-purple-400" : "border-white/10 bg-gradient-to-b from-[#1e1e36] to-[#121224] shadow-md hover:border-cyan-400/40 hover:shadow-[0_0_14px_rgba(6,182,212,0.15)]" : "border-red-500/20 bg-[#0d0d1a] opacity-70 hover:border-red-500/40 hover:opacity-90"}`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const t3 = `absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full transition-all duration-300 ${isLive ? "scale-110" : ""}`;
    const t4 = isLive ? channel.color : needsReloadForThis ? "#f59e0b" : isUIEnabled ? "#3a3a5a" : "#ef4444";
    const t5 = isLive ? `0 0 8px ${channel.color}, 0 0 2px #fff` : needsReloadForThis ? "0 0 6px rgba(245,158,11,0.6)" : !isUIEnabled ? "0 0 4px rgba(239,68,68,0.5)" : "none";
    let t6;
    if ($[2] !== t4 || $[3] !== t5) {
        t6 = {
            backgroundColor: t4,
            boxShadow: t5
        };
        $[2] = t4;
        $[3] = t5;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== t3 || $[6] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            style: t6
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t6;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== disabled || $[9] !== needsReloadForThis) {
        t8 = needsReloadForThis && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1 left-1 font-mono text-[9px] text-amber-400 motion-safe:animate-pulse",
            children: "⏳"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 96,
            columnNumber: 45
        }, this);
        $[8] = disabled;
        $[9] = needsReloadForThis;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== badge) {
        t9 = badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `absolute bottom-1 left-1 rounded bg-black/60 px-1 font-mono text-[8px] font-semibold ${badge.className}`,
            children: badge.text
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 105,
            columnNumber: 19
        }, this);
        $[11] = badge;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== disabled || $[14] !== isUIEnabled) {
        t10 = !isUIEnabled && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold text-lg text-red-400/50",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 113,
                columnNumber: 107
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 113,
            columnNumber: 40
        }, this);
        $[13] = disabled;
        $[14] = isUIEnabled;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = `flex h-5 items-end gap-[2px] transition-opacity ${!isUIEnabled ? "opacity-15" : needsReloadForThis ? "opacity-40" : "opacity-90"}`;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = [
            0.35,
            0.7,
            1,
            0.55,
            0.85,
            0.45,
            0.75
        ];
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== channel.color || $[18] !== isLikelyMusic || $[19] !== isLive || $[20] !== isUIEnabled || $[21] !== needsReloadForThis) {
        t13 = t12.map({
            "ChannelButton[(anonymous)()]": (height, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-[2.5px] rounded-full transition-all ${isLive ? EQ_ANIMATIONS[idx % EQ_ANIMATIONS.length] : ""}`,
                    style: {
                        backgroundColor: isLive ? channel.color : needsReloadForThis ? "#f59e0b" : isUIEnabled ? isLikelyMusic ? "#a855f7" : "#555577" : "#33334d",
                        height: isLive ? undefined : `${height * 100}%`,
                        minHeight: "3px"
                    }
                }, height, false, {
                    fileName: "[project]/src/app/components/ChannelButton.tsx",
                    lineNumber: 131,
                    columnNumber: 56
                }, this)
        }["ChannelButton[(anonymous)()]"]);
        $[17] = channel.color;
        $[18] = isLikelyMusic;
        $[19] = isLive;
        $[20] = isUIEnabled;
        $[21] = needsReloadForThis;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t11 || $[24] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t13;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== disabled || $[27] !== onToggle || $[28] !== t1 || $[29] !== t10 || $[30] !== t14 || $[31] !== t7 || $[32] !== t8 || $[33] !== t9 || $[34] !== toggleLabel) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onToggle,
            disabled: disabled,
            "aria-label": toggleLabel,
            className: t1,
            title: toggleLabel,
            children: [
                t2,
                t7,
                t8,
                t9,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[26] = disabled;
        $[27] = onToggle;
        $[28] = t1;
        $[29] = t10;
        $[30] = t14;
        $[31] = t7;
        $[32] = t8;
        $[33] = t9;
        $[34] = toggleLabel;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const t16 = `font-medium font-mono text-[10px] tracking-tight transition-colors ${!isUIEnabled ? "text-red-400/60" : needsReloadForThis ? "text-amber-400" : isLikelyMusic ? "font-semibold text-purple-300" : "text-zinc-300 group-hover/channel:text-cyan-300"}`;
    let t17;
    if ($[36] !== channel.name || $[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: t16,
                children: channel.name
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 174,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[36] = channel.name;
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    const t18 = `rounded border px-1.5 py-0.5 font-mono font-semibold text-[8px] uppercase tracking-wider transition-all duration-150 active:scale-90 ${disabled ? "cursor-not-allowed border-transparent text-zinc-600" : "border-white/5 bg-[#121224] text-zinc-400 hover:border-amber-400/40 hover:bg-amber-500/10 hover:text-amber-300 hover:shadow-[0_0_8px_rgba(245,158,11,0.2)]"}`;
    const t19 = `Solo ${channel.name}`;
    let t20;
    if ($[39] !== disabled || $[40] !== onSolo || $[41] !== t18 || $[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onSolo,
            disabled: disabled,
            className: t18,
            title: t19,
            children: "SOLO"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[39] = disabled;
        $[40] = onSolo;
        $[41] = t18;
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t15 || $[45] !== t17 || $[46] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group/channel flex flex-col items-center gap-1",
            children: [
                t15,
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ChannelButton.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t17;
        $[46] = t20;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    return t21;
}
_c = ChannelButton;
var _c;
__turbopack_context__.k.register(_c, "ChannelButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/MusicScanPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MusicScanPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
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
function MusicScanPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "2378c31d6c9da85dd13fe9f555c34ab7821c569e08faa08c56270637ee83b76c") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2378c31d6c9da85dd13fe9f555c34ab7821c569e08faa08c56270637ee83b76c";
    }
    const { scan, channels, disabled, onMute } = t0;
    if (scan.status === "idle") {
        return null;
    }
    if (scan.status === "scanning") {
        let t1;
        if ($[1] !== scan.progress) {
            t1 = Math.round(scan.progress * 100);
            $[1] = scan.progress;
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        const percent = t1;
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block h-3 w-3 animate-spin rounded-full border-2 border-purple-300 border-t-transparent motion-reduce:animate-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                        lineNumber: 60,
                        columnNumber: 56
                    }, this),
                    "Finding music channels…"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 60,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        let t3;
        if ($[4] !== percent) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-xs font-semibold tracking-tight text-purple-200",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono tabular-nums",
                        children: [
                            percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                        lineNumber: 67,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 67,
                columnNumber: 12
            }, this);
            $[4] = percent;
            $[5] = t3;
        } else {
            t3 = $[5];
        }
        const t4 = `${percent}%`;
        let t5;
        if ($[6] !== t4) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 h-1 overflow-hidden rounded-full bg-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full bg-purple-400 transition-[width] duration-200",
                    style: {
                        width: t4
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 76,
                    columnNumber: 79
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 76,
                columnNumber: 12
            }, this);
            $[6] = t4;
            $[7] = t5;
        } else {
            t5 = $[7];
        }
        let t6;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 font-mono text-[9px] text-zinc-500",
                children: "A silent copy of the game is being played in the background"
            }, void 0, false, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 86,
                columnNumber: 12
            }, this);
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        let t7;
        if ($[9] !== t3 || $[10] !== t5) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: "mb-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5",
                children: [
                    t3,
                    t5,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 93,
                columnNumber: 12
            }, this);
            $[9] = t3;
            $[10] = t5;
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        return t7;
    }
    if (scan.status === "error") {
        let t1;
        if ($[12] !== scan.message) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mb-3 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-xs text-red-300",
                children: [
                    "Music scan failed: ",
                    scan.message
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 105,
                columnNumber: 12
            }, this);
            $[12] = scan.message;
            $[13] = t1;
        } else {
            t1 = $[13];
        }
        return t1;
    }
    if (!scan.result.heardAudio) {
        let t1;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-xs text-zinc-400",
                children: "The music scan heard no sound from this game."
            }, void 0, false, {
                fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                lineNumber: 116,
                columnNumber: 12
            }, this);
            $[14] = t1;
        } else {
            t1 = $[14];
        }
        return t1;
    }
    let musicIndexes;
    let t1;
    if ($[15] !== channels || $[16] !== scan.result.channels) {
        musicIndexes = scan.result.channels.filter(_MusicScanPanelScanResultChannelsFilter).map(_MusicScanPanelAnonymous);
        let t2;
        if ($[19] !== channels) {
            t2 = ({
                "MusicScanPanel[musicIndexes.filter()]": (index)=>channels[index]
            })["MusicScanPanel[musicIndexes.filter()]"];
            $[19] = channels;
            $[20] = t2;
        } else {
            t2 = $[20];
        }
        t1 = musicIndexes.filter(t2);
        $[15] = channels;
        $[16] = scan.result.channels;
        $[17] = musicIndexes;
        $[18] = t1;
    } else {
        musicIndexes = $[17];
        t1 = $[18];
    }
    const stillPlaying = t1;
    let t2;
    if ($[21] !== scan.result.channels) {
        t2 = ROLE_ROWS.map({
            "MusicScanPanel[ROLE_ROWS.map()]": (t3)=>{
                const { role, label, className } = t3;
                const found = scan.result.channels.filter({
                    "MusicScanPanel[ROLE_ROWS.map() > scan.result.channels.filter()]": (c_1)=>c_1.role === role
                }["MusicScanPanel[ROLE_ROWS.map() > scan.result.channels.filter()]"]);
                return found.length === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-baseline justify-between gap-2 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: `font-semibold tracking-tight ${className}`,
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                            lineNumber: 159,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "font-mono text-[10px] text-zinc-300",
                            children: [
                                "CH ",
                                found.map(_MusicScanPanelROLE_ROWSMapFoundMap).join(" ")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                            lineNumber: 159,
                            columnNumber: 194
                        }, this)
                    ]
                }, role, true, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 159,
                    columnNumber: 44
                }, this);
            }
        }["MusicScanPanel[ROLE_ROWS.map()]"]);
        $[21] = scan.result.channels;
        $[22] = t2;
    } else {
        t2 = $[22];
    }
    let t3;
    if ($[23] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
            className: "space-y-1",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[23] = t2;
        $[24] = t3;
    } else {
        t3 = $[24];
    }
    let t4;
    if ($[25] !== disabled || $[26] !== musicIndexes.length || $[27] !== onMute || $[28] !== stillPlaying) {
        t4 = musicIndexes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-[11px] text-zinc-400",
            children: "Music and effects share every channel in this game, so none can be muted without losing effects."
        }, void 0, false, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 177,
            columnNumber: 38
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: {
                "MusicScanPanel[<button>.onClick]": ()=>onMute(stillPlaying)
            }["MusicScanPanel[<button>.onClick]"],
            disabled: disabled || stillPlaying.length === 0,
            className: `group relative mt-2 w-full overflow-hidden rounded-xl border px-3 py-2 text-xs font-semibold tracking-tight transition-all duration-200 active:scale-[0.98] ${disabled || stillPlaying.length === 0 ? "cursor-not-allowed border-white/5 bg-[#18182e] text-zinc-500" : "border-purple-500/30 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-purple-600/30 text-purple-200 shadow-[0_0_12px_rgba(147,51,234,0.15)] hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:animate-none"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 179,
                    columnNumber: 594
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative",
                    children: stillPlaying.length === 0 ? "Music channels muted" : "Mute music channels"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MusicScanPanel.tsx",
                    lineNumber: 179,
                    columnNumber: 773
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 177,
            columnNumber: 187
        }, this);
        $[25] = disabled;
        $[26] = musicIndexes.length;
        $[27] = onMute;
        $[28] = stillPlaying;
        $[29] = t4;
    } else {
        t4 = $[29];
    }
    let t5;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1.5 text-center font-mono text-[9px] text-zinc-500",
            children: "Best guess from a scripted playthrough • saved per ROM"
        }, void 0, false, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        $[30] = t5;
    } else {
        t5 = $[30];
    }
    let t6;
    if ($[31] !== t3 || $[32] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/MusicScanPanel.tsx",
            lineNumber: 197,
            columnNumber: 10
        }, this);
        $[31] = t3;
        $[32] = t4;
        $[33] = t6;
    } else {
        t6 = $[33];
    }
    return t6;
}
_c = MusicScanPanel;
function _MusicScanPanelROLE_ROWSMapFoundMap(c_2) {
    return c_2.channel;
}
function _MusicScanPanelAnonymous(c_0) {
    return c_0.channel - 1;
}
function _MusicScanPanelScanResultChannelsFilter(c) {
    return c.role === "music";
}
var _c;
__turbopack_context__.k.register(_c, "MusicScanPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SoundChannelMixer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoundChannelMixer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChannelMixer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useChannelMixer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChannelButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ChannelButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MusicScanPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MusicScanPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SoundChannelMixer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "43dd3a3e1dbd4f96aadc3d1a6131e632cb7049f6d290a41dae8b7c7675846470") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "43dd3a3e1dbd4f96aadc3d1a6131e632cb7049f6d290a41dae8b7c7675846470";
    }
    const { musicScan: t1, onSetVariable, onReloadEmulator, onSaveStates, disabled: t2, coreOptions: t3, initialStates: t4, romName: t5 } = t0;
    let t6;
    if ($[1] !== t1) {
        t6 = t1 === undefined ? {
            status: "idle"
        } : t1;
        $[1] = t1;
        $[2] = t6;
    } else {
        t6 = $[2];
    }
    const musicScan = t6;
    const disabled = t2 === undefined ? false : t2;
    const coreOptions = t3 === undefined ? [] : t3;
    const initialStates = t4 === undefined ? null : t4;
    const romName = t5 === undefined ? "" : t5;
    const [showOptions, setShowOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { channels, effectiveAudioState, hasChannelSupport, needsReload, allEnabled, isApplying, handleToggle, handleToggleAll, handleMute, handleSolo, applyWithReload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChannelMixer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChannelMixer"])({
        coreOptions,
        initialStates,
        onReloadEmulator,
        onSaveStates,
        onSetVariable,
        romName
    });
    const audioOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioOptions"])(coreOptions);
    const controlsDisabled = disabled || isApplying;
    let t7;
    if ($[3] !== onSetVariable) {
        t7 = ({
            "SoundChannelMixer[handleAudioOptionChange]": (key, value)=>{
                onSetVariable(key, value);
            }
        })["SoundChannelMixer[handleAudioOptionChange]"];
        $[3] = onSetVariable;
        $[4] = t7;
    } else {
        t7 = $[4];
    }
    const handleAudioOptionChange = t7;
    const t8 = "relative overflow-hidden rounded-2xl border border-white/10 bg-[#101024]/90 p-4 shadow-xl backdrop-blur-md";
    let t9;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-400 text-xs",
                    children: "🎛️"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 94,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-sm text-zinc-200 tracking-tight",
                    children: "Audio Channels"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 94,
                    columnNumber: 168
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[5] = t9;
    } else {
        t9 = $[5];
    }
    const t10 = `relative overflow-hidden rounded-full px-3 py-1 font-medium text-xs tracking-tight transition-all duration-150 active:scale-95 ${controlsDisabled ? "cursor-not-allowed border border-white/5 bg-zinc-900 text-zinc-600" : allEnabled ? "border border-red-500/30 bg-red-500/15 text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.15)] hover:border-red-500/50 hover:bg-red-500/25" : "border border-emerald-500/30 bg-emerald-500/15 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 hover:bg-emerald-500/25"}`;
    const t11 = allEnabled ? "Mute All" : "Enable All";
    let t12;
    if ($[6] !== controlsDisabled || $[7] !== handleToggleAll || $[8] !== t10 || $[9] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center justify-between",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleToggleAll,
                    disabled: controlsDisabled,
                    className: t10,
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 103,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[6] = controlsDisabled;
        $[7] = handleToggleAll;
        $[8] = t10;
        $[9] = t11;
        $[10] = t12;
    } else {
        t12 = $[10];
    }
    let t13;
    if ($[11] !== disabled) {
        t13 = disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center text-xs text-zinc-500",
            children: "Start the game to enable controls"
        }, void 0, false, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 114,
            columnNumber: 23
        }, this);
        $[11] = disabled;
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    let t14;
    if ($[13] !== disabled || $[14] !== hasChannelSupport) {
        t14 = !disabled && hasChannelSupport === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-amber-400 text-xs",
                children: "⚠️ Sound channel options not found in this core."
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 122,
                columnNumber: 135
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 122,
            columnNumber: 55
        }, this);
        $[13] = disabled;
        $[14] = hasChannelSupport;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== channels || $[17] !== controlsDisabled || $[18] !== handleMute || $[19] !== hasChannelSupport || $[20] !== musicScan) {
        t15 = hasChannelSupport !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MusicScanPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            scan: musicScan,
            channels: channels,
            disabled: controlsDisabled,
            onMute: handleMute
        }, void 0, false, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 131,
            columnNumber: 42
        }, this);
        $[16] = channels;
        $[17] = controlsDisabled;
        $[18] = handleMute;
        $[19] = hasChannelSupport;
        $[20] = musicScan;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== channels || $[23] !== controlsDisabled || $[24] !== effectiveAudioState || $[25] !== handleSolo || $[26] !== handleToggle || $[27] !== musicScan) {
        t16 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].map({
            "SoundChannelMixer[SNES_CHANNELS.map()]": (channel, index)=>{
                const isUIEnabled = channels[index];
                const isEffectivelyPlaying = effectiveAudioState[index];
                const needsReloadForThis = isUIEnabled && !isEffectivelyPlaying;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChannelButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    channel: channel,
                    isUIEnabled: isUIEnabled,
                    isEffectivelyPlaying: isEffectivelyPlaying,
                    needsReloadForThis: needsReloadForThis,
                    role: musicScan.status === "done" ? musicScan.result.channels[index].role : undefined,
                    disabled: controlsDisabled,
                    onToggle: {
                        "SoundChannelMixer[SNES_CHANNELS.map() > <ChannelButton>.onToggle]": ()=>handleToggle(index)
                    }["SoundChannelMixer[SNES_CHANNELS.map() > <ChannelButton>.onToggle]"],
                    onSolo: {
                        "SoundChannelMixer[SNES_CHANNELS.map() > <ChannelButton>.onSolo]": ()=>handleSolo(index)
                    }["SoundChannelMixer[SNES_CHANNELS.map() > <ChannelButton>.onSolo]"]
                }, channel.id, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 148,
                    columnNumber: 16
                }, this);
            }
        }["SoundChannelMixer[SNES_CHANNELS.map()]"]);
        $[22] = channels;
        $[23] = controlsDisabled;
        $[24] = effectiveAudioState;
        $[25] = handleSolo;
        $[26] = handleToggle;
        $[27] = musicScan;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-4 gap-2",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== applyWithReload || $[32] !== disabled || $[33] !== isApplying || $[34] !== needsReload || $[35] !== onReloadEmulator) {
        t18 = !disabled && needsReload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 border-white/10 border-t pt-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: applyWithReload,
                    disabled: isApplying || !onReloadEmulator,
                    className: `group relative w-full overflow-hidden rounded-xl border px-4 py-2.5 font-bold text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${isApplying ? "cursor-wait border-cyan-500/20 bg-cyan-950/30 text-cyan-400" : "animate-pulse-glow border-cyan-400/60 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent motion-reduce:animate-none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                            lineNumber: 175,
                            columnNumber: 578
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative flex items-center justify-center gap-2",
                            children: isApplying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 839
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reloading Emulator..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 953
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 175,
                                columnNumber: 837
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🔊"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 995
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Apply Changes (Preserves Game State)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 1010
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 175,
                                columnNumber: 993
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                            lineNumber: 175,
                            columnNumber: 757
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 175,
                    columnNumber: 91
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1.5 text-center font-mono text-[9px] text-amber-400/80",
                    children: "Unmuting requires restarting audio engine. Game state will be restored."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 175,
                    columnNumber: 1079
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 175,
            columnNumber: 39
        }, this);
        $[31] = applyWithReload;
        $[32] = disabled;
        $[33] = isApplying;
        $[34] = needsReload;
        $[35] = onReloadEmulator;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    const t19 = !disabled && audioOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 border-white/5 border-t pt-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: {
                    "SoundChannelMixer[<button>.onClick]": ()=>setShowOptions(!showOptions)
                }["SoundChannelMixer[<button>.onClick]"],
                className: "flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 transition-colors hover:text-cyan-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px]",
                        children: showOptions ? "\u25BC" : "\u25B6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 187,
                        columnNumber: 159
                    }, this),
                    "Audio Options (",
                    audioOptions.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 185,
                columnNumber: 106
            }, this),
            showOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-2 rounded-xl border border-white/5 bg-[#141428] p-2.5",
                children: audioOptions.map({
                    "SoundChannelMixer[audioOptions.map()]": (opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: `audio-opt-${opt.key}`,
                                    className: "font-mono text-[10px] text-zinc-400",
                                    children: opt.displayName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 108
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: `audio-opt-${opt.key}`,
                                    value: opt.currentValue,
                                    onChange: {
                                        "SoundChannelMixer[audioOptions.map() > <select>.onChange]": (e)=>handleAudioOptionChange(opt.key, e.target.value)
                                    }["SoundChannelMixer[audioOptions.map() > <select>.onChange]"],
                                    className: "rounded-lg border border-white/10 bg-[#0d0d1b] px-2 py-1 font-mono text-base text-zinc-200 focus:border-cyan-400/50 focus:outline-none sm:text-[10px]",
                                    children: opt.values.map(_SoundChannelMixerAudioOptionsMapOptValuesMap)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 221
                                }, this)
                            ]
                        }, opt.key, true, {
                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                            lineNumber: 188,
                            columnNumber: 57
                        }, this)
                }["SoundChannelMixer[audioOptions.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 187,
                columnNumber: 292
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
        lineNumber: 185,
        columnNumber: 55
    }, this);
    let t20;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 border-white/5 border-t pt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-mono text-[9px] text-zinc-500",
                children: "SNES SPC700 Audio • Settings saved per ROM"
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 194,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== t12 || $[39] !== t13 || $[40] !== t14 || $[41] !== t15 || $[42] !== t17 || $[43] !== t18 || $[44] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t12,
                t13,
                t14,
                t15,
                t17,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[38] = t12;
        $[39] = t13;
        $[40] = t14;
        $[41] = t15;
        $[42] = t17;
        $[43] = t18;
        $[44] = t19;
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    return t21;
}
_s(SoundChannelMixer, "I50eaCuhJ4wUavO+DH/roeow3kU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChannelMixer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChannelMixer"]
    ];
});
_c = SoundChannelMixer;
function _SoundChannelMixerAudioOptionsMapOptValuesMap(val) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: val,
        children: val
    }, val, false, {
        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
        lineNumber: 216,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SoundChannelMixer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/play/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Play
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMusicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMusicScan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$channelStates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/channelStates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/roms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoundChannelMixer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SoundChannelMixer.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
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
const GameEmulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/components/GameEmulator.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/GameEmulator.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full min-h-[480px] w-full items-center justify-center bg-[#0c0c1e]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-cyan-400 text-xs tracking-wider",
                        children: "Initializing Core..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 14,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
_c = GameEmulator;
function PlayContent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "e66b9d86fddb59e7959ec3365abaa1c61e1337d5fe790273f8d0a6b5c3117e7b") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e66b9d86fddb59e7959ec3365abaa1c61e1337d5fe790273f8d0a6b5c3117e7b";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const emulatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [gameStarted, setGameStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [coreOptions, setCoreOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [savedChannelStates, setSavedChannelStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [romError, setRomError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [romLoading, setRomLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [romSource, setRomSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [romBlob, setRomBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [romName, setRomName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Unknown Game");
    let t1;
    if ($[2] !== searchParams) {
        t1 = searchParams.get("source");
        $[2] = searchParams;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const source = t1;
    const musicScan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMusicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMusicScan"])(romSource, romBlob);
    let t2;
    let t3;
    if ($[4] !== source) {
        t2 = ({
            "PlayContent[useEffect()]": ()=>{
                let cancelled = false;
                setGameStarted(false);
                setCoreOptions([]);
                setSavedChannelStates(null);
                setRomSource("");
                setRomBlob(null);
                setRomError(null);
                setRomLoading(Boolean(source));
                if (!source) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadRomSource"])(source).then({
                    "PlayContent[useEffect() > (anonymous)()]": (rom)=>{
                        if (cancelled) {
                            return;
                        }
                        setRomBlob(rom.blob);
                        setRomName(rom.name);
                        setRomSource(rom.source);
                        setSavedChannelStates((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$channelStates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedChannelStates"])(rom.source));
                    }
                }["PlayContent[useEffect() > (anonymous)()]"]).catch({
                    "PlayContent[useEffect() > (anonymous)()]": (error)=>{
                        if (!cancelled) {
                            console.error("Failed to load ROM:", error);
                            setRomError(error instanceof Error ? error.message : "Failed to load ROM");
                        }
                    }
                }["PlayContent[useEffect() > (anonymous)()]"]).finally({
                    "PlayContent[useEffect() > (anonymous)()]": ()=>{
                        if (!cancelled) {
                            setRomLoading(false);
                        }
                    }
                }["PlayContent[useEffect() > (anonymous)()]"]);
                return ()=>{
                    cancelled = true;
                };
            }
        })["PlayContent[useEffect()]"];
        t3 = [
            source
        ];
        $[4] = source;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "PlayContent[handleGameReady]": (options)=>{
                setGameStarted(true);
                setCoreOptions(options);
            }
        })["PlayContent[handleGameReady]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleGameReady = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "PlayContent[handleSetVariable]": (key, value)=>{
                if (emulatorRef.current) {
                    return emulatorRef.current.setVariable(key, value);
                }
                return false;
            }
        })["PlayContent[handleSetVariable]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleSetVariable = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "PlayContent[handleReloadEmulator]": async (pendingSettings)=>{
                if (emulatorRef.current) {
                    setGameStarted(false);
                    await emulatorRef.current.reloadEmulator(pendingSettings);
                }
            }
        })["PlayContent[handleReloadEmulator]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const handleReloadEmulator = t6;
    let t7;
    if ($[10] !== romSource) {
        t7 = ({
            "PlayContent[handleSaveChannelStates]": (states)=>{
                if (romSource) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$channelStates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveChannelStates"])(romSource, states);
                }
            }
        })["PlayContent[handleSaveChannelStates]"];
        $[10] = romSource;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const handleSaveChannelStates = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [];
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_PlayContentUseEffect, t8);
    if (!romBlob) {
        const t9 = romLoading ? "\u23F3" : "\u26A0\uFE0F";
        let t10;
        if ($[13] !== t9) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-4xl",
                children: t9
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this);
            $[13] = t9;
            $[14] = t10;
        } else {
            t10 = $[14];
        }
        const t11 = romLoading ? "Loading ROM\u2026" : romError || "No ROM loaded";
        let t12;
        if ($[15] !== t11) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-2 font-semibold text-lg text-zinc-100",
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, this);
            $[15] = t11;
            $[16] = t12;
        } else {
            t12 = $[16];
        }
        const t13 = romLoading ? "Retrieving and verifying game data..." : "Could not launch the requested game.";
        let t14;
        if ($[17] !== t13) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-xs text-zinc-400",
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, this);
            $[17] = t13;
            $[18] = t14;
        } else {
            t14 = $[18];
        }
        let t15;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "← Back to Home"
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 207,
                    columnNumber: 331
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 207,
                columnNumber: 13
            }, this);
            $[19] = t15;
        } else {
            t15 = $[19];
        }
        let t16;
        if ($[20] !== t10 || $[21] !== t12 || $[22] !== t14) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen items-center justify-center bg-[#070712] px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f24] p-8 text-center shadow-2xl",
                    children: [
                        t10,
                        t12,
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 214,
                    columnNumber: 94
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 214,
                columnNumber: 13
            }, this);
            $[20] = t10;
            $[21] = t12;
            $[22] = t14;
            $[23] = t16;
        } else {
            t16 = $[23];
        }
        return t16;
    }
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none fixed inset-0 z-50 opacity-[0.02]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full",
                style: {
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.4) 1px, rgba(0,0,0,0.4) 2px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 226,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 226,
            columnNumber: 10
        }, this);
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "group flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#121226] px-3 py-1.5 font-medium text-xs text-zinc-300 transition-all duration-150 hover:border-white/20 hover:bg-[#181832] hover:text-white active:scale-95",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "←"
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 235,
                    columnNumber: 265
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 235,
                    columnNumber: 279
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-base",
            children: "🎮"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] !== romName) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-w-0 items-center gap-3",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 truncate",
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "truncate font-semibold text-sm text-zinc-100 md:text-base",
                            children: romName
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 249,
                            columnNumber: 120
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 249,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[27] = romName;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    const t13 = `flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors ${gameStarted ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-300" : "border-amber-500/30 bg-amber-500/15 text-amber-300"}`;
    const t14 = `h-2 w-2 rounded-full ${gameStarted ? "animate-pulse bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-amber-400"}`;
    let t15;
    if ($[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t14
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    const t16 = gameStarted ? "Running" : "Loading";
    let t17;
    if ($[31] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-medium font-mono text-[10px] uppercase tracking-wider",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t13 || $[34] !== t15 || $[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex shrink-0 items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t13,
                children: [
                    t15,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 276,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[33] = t13;
        $[34] = t15;
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] !== t12 || $[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-40 w-full border-white/10 border-b bg-[#090918]/80 backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between px-4 py-2.5 md:px-8",
                children: [
                    t12,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 286,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, this);
        $[37] = t12;
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== romBlob || $[41] !== romSource) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 lg:col-span-8 xl:col-span-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game-container relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1a] shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[4/3] w-full bg-[#05050d]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameEmulator, {
                        ref: emulatorRef,
                        game: romBlob,
                        onReady: handleGameReady
                    }, romSource, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 295,
                        columnNumber: 258
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 295,
                    columnNumber: 199
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 295,
                columnNumber: 76
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[40] = romBlob;
        $[41] = romSource;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    const t21 = !gameStarted;
    let t22;
    if ($[43] !== coreOptions || $[44] !== handleSaveChannelStates || $[45] !== musicScan || $[46] !== romSource || $[47] !== savedChannelStates || $[48] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoundChannelMixer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            musicScan: musicScan,
            onSetVariable: handleSetVariable,
            onReloadEmulator: handleReloadEmulator,
            onSaveStates: handleSaveChannelStates,
            disabled: t21,
            coreOptions: coreOptions,
            initialStates: savedChannelStates,
            romName: romSource
        }, romSource, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[43] = coreOptions;
        $[44] = handleSaveChannelStates;
        $[45] = musicScan;
        $[46] = romSource;
        $[47] = savedChannelStates;
        $[48] = t21;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "flex items-center gap-2 font-semibold text-xs text-zinc-200 tracking-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "⌨️"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 318,
                            columnNumber: 158
                        }, this),
                        " Keyboard Controls"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 318,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[10px] text-zinc-500",
                    children: "Player 1"
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 318,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium font-mono text-[10px] text-cyan-400 uppercase tracking-wider",
            children: "Movement"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "D-Pad"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-zinc-400",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "↑"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 339,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "↓"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 339,
                            columnNumber: 228
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 339,
                            columnNumber: 346
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 339,
                            columnNumber: 464
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 339,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Start / Select"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[54] = t27;
    } else {
        t27 = $[54];
    }
    let t28;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5",
            children: [
                t24,
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-zinc-400",
                    children: [
                        t27,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                    children: "Enter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 204
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                    children: "Shift"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 326
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 353,
                            columnNumber: 175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 353,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    let t29;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium font-mono text-[10px] text-purple-400 uppercase tracking-wider",
            children: "Buttons"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[56] = t29;
    } else {
        t29 = $[56];
    }
    let t30;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "A / B"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[57] = t30;
    } else {
        t30 = $[57];
    }
    let t31;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-zinc-400",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "S"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 374,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "A"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 374,
                            columnNumber: 230
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 374,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    let t32;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "X / Y"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between text-zinc-400",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "W"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 388,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                            children: "Q"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 388,
                            columnNumber: 230
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 388,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    let t34;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "L / R"
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[61] = t34;
    } else {
        t34 = $[61];
    }
    let t35;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-2 text-xs",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5",
                    children: [
                        t29,
                        t31,
                        t33,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-zinc-400",
                            children: [
                                t34,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                            children: "Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 262
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                            children: "X"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 382
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 233
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 402,
                            columnNumber: 163
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 402,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[62] = t35;
    } else {
        t35 = $[62];
    }
    let t36;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "⚡ Fast-Forward:",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                    className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                    children: "Space"
                }, void 0, false, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 409,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    let t37;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 bg-[#101024]/80 p-4 shadow-xl backdrop-blur-md",
            children: [
                t23,
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2.5 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-[11px] text-zinc-400",
                    children: [
                        t36,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Fullscreen:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                    children: "F11"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 290
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 416,
                            columnNumber: 268
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 416,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] !== t22) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 lg:col-span-4 xl:col-span-4",
            children: [
                t22,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[65] = t22;
        $[66] = t38;
    } else {
        t38 = $[66];
    }
    let t39;
    if ($[67] !== t20 || $[68] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full flex-1 px-4 py-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
                children: [
                    t20,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 431,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[67] = t20;
        $[68] = t38;
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    let t40;
    if ($[70] !== t19 || $[71] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen flex-col bg-[#070712]",
            children: [
                t9,
                t19,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 440,
            columnNumber: 11
        }, this);
        $[70] = t19;
        $[71] = t39;
        $[72] = t40;
    } else {
        t40 = $[72];
    }
    return t40;
}
_s(PlayContent, "FGUbKVAxp9bEms4idyDxEdxNaAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMusicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMusicScan"]
    ];
});
_c1 = PlayContent;
function _PlayContentUseEffect() {
    const handleKeyDown = _PlayContentUseEffectHandleKeyDown;
    window.addEventListener("keydown", handleKeyDown, {
        capture: true
    });
    return ()=>{
        window.removeEventListener("keydown", handleKeyDown, {
            capture: true
        });
    };
}
function _PlayContentUseEffectHandleKeyDown(e) {
    const activeElement = document.activeElement;
    const isIframeFocused = activeElement?.tagName === "IFRAME";
    const gameContainer = document.querySelector(".game-container");
    const isGameAreaFocused = gameContainer?.contains(activeElement);
    if (isIframeFocused || isGameAreaFocused) {
        const gameKeys = [
            "ArrowUp",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            " ",
            "Space"
        ];
        if (gameKeys.includes(e.key) || gameKeys.includes(e.code)) {
            e.preventDefault();
        }
    }
}
function Play() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e66b9d86fddb59e7959ec3365abaa1c61e1337d5fe790273f8d0a6b5c3117e7b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e66b9d86fddb59e7959ec3365abaa1c61e1337d5fe790273f8d0a6b5c3117e7b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen items-center justify-center bg-[#070712]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 w-10 animate-spin rounded-full border-3 border-cyan-400 border-t-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 482,
                            columnNumber: 156
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-cyan-400 text-xs tracking-wider",
                            children: "Loading Game..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 482,
                            columnNumber: 257
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 482,
                    columnNumber: 106
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 482,
                columnNumber: 30
            }, this),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayContent, {}, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 482,
                columnNumber: 358
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 482,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = Play;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GameEmulator");
__turbopack_context__.k.register(_c1, "PlayContent");
__turbopack_context__.k.register(_c2, "Play");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useChannelMixer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChannelMixer",
    ()=>useChannelMixer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/channelState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useChannelMixer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "374927ed0e940784a142bcd1358f5d6722a86b1b9ffaf9833e9c09233edb36a8") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "374927ed0e940784a142bcd1358f5d6722a86b1b9ffaf9833e9c09233edb36a8";
    }
    const { coreOptions, initialStates, romName, onSetVariable, onReloadEmulator, onSaveStates } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Array(8).fill(true);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [channels, setChannels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [hasChannelSupport, setHasChannelSupport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isApplying, setIsApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = new Array(8).fill(true);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [effectiveAudioState, setEffectiveAudioState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const appliedInitialStatesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastRomNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const lastCoreStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    let t3;
    let t4;
    if ($[3] !== romName) {
        t3 = ({
            "useChannelMixer[useEffect()]": ()=>{
                if (romName !== lastRomNameRef.current) {
                    lastRomNameRef.current = romName;
                    initializedRef.current = false;
                    appliedInitialStatesRef.current = false;
                    lastCoreStateRef.current = "";
                    setChannels(new Array(8).fill(true));
                    setEffectiveAudioState(new Array(8).fill(true));
                    setHasChannelSupport(null);
                }
            }
        })["useChannelMixer[useEffect()]"];
        t4 = [
            romName
        ];
        $[3] = romName;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== coreOptions || $[7] !== initialStates || $[8] !== onSetVariable) {
        t5 = ({
            "useChannelMixer[useEffect()]": ()=>{
                if (coreOptions.length === 0) {
                    return;
                }
                const channelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSoundChannelOptions"])(coreOptions);
                if (channelOptions.length === 0) {
                    setHasChannelSupport(false);
                    return;
                }
                const coreStateFingerprint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoreStateFingerprint"])(channelOptions);
                if (!initializedRef.current || lastCoreStateRef.current !== coreStateFingerprint) {
                    setHasChannelSupport(true);
                    initializedRef.current = true;
                    lastCoreStateRef.current = coreStateFingerprint;
                    if (initialStates && !appliedInitialStatesRef.current) {
                        appliedInitialStatesRef.current = true;
                        console.log("\uD83D\uDCC2 Applying saved channel states:", initialStates);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach({
                            "useChannelMixer[useEffect() > SNES_CHANNELS.forEach()]": (ch, i)=>{
                                const value = initialStates[i] ? "enabled" : "disabled";
                                onSetVariable(ch.varKey, value);
                            }
                        }["useChannelMixer[useEffect() > SNES_CHANNELS.forEach()]"]);
                        setChannels([
                            ...initialStates
                        ]);
                        setEffectiveAudioState([
                            ...initialStates
                        ]);
                        const mutedCount = initialStates.filter(_useChannelMixerUseEffectInitialStatesFilter).length;
                        if (mutedCount > 0) {
                            console.log(`🔇 Restored ${mutedCount} muted channel(s) from saved preferences`);
                        }
                    } else {
                        const newChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeChannelStates"])(coreOptions);
                        setChannels(newChannels);
                        setEffectiveAudioState([
                            ...newChannels
                        ]);
                        console.log("Initialized channel states from core:", newChannels);
                    }
                }
            }
        })["useChannelMixer[useEffect()]"];
        t6 = [
            coreOptions,
            initialStates,
            onSetVariable
        ];
        $[6] = coreOptions;
        $[7] = initialStates;
        $[8] = onSetVariable;
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[11] !== channels || $[12] !== onSaveStates) {
        t7 = ({
            "useChannelMixer[useEffect()]": ()=>{
                if (!initializedRef.current || !onSaveStates) {
                    return;
                }
                const timeout = setTimeout({
                    "useChannelMixer[useEffect() > setTimeout()]": ()=>{
                        onSaveStates(channels);
                    }
                }["useChannelMixer[useEffect() > setTimeout()]"], 500);
                return ()=>clearTimeout(timeout);
            }
        })["useChannelMixer[useEffect()]"];
        t8 = [
            channels,
            onSaveStates
        ];
        $[11] = channels;
        $[12] = onSaveStates;
        $[13] = t7;
        $[14] = t8;
    } else {
        t7 = $[13];
        t8 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t9;
    if ($[15] !== channels || $[16] !== effectiveAudioState) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needsReload"])(channels, effectiveAudioState);
        $[15] = channels;
        $[16] = effectiveAudioState;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const needsReload = t9;
    let t10;
    if ($[18] !== channels) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areAllChannelsEnabled"])(channels);
        $[18] = channels;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const allEnabled = t10;
    let t11;
    if ($[20] !== coreOptions) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSoundChannelSupport"])(coreOptions);
        $[20] = coreOptions;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const hasSupport = t11;
    let t12;
    if ($[22] !== channels || $[23] !== onSetVariable) {
        t12 = ({
            "useChannelMixer[handleToggle]": (channelIndex)=>{
                const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"][channelIndex];
                const currentUIState = channels[channelIndex];
                const newUIState = !currentUIState;
                const newValue = newUIState ? "enabled" : "disabled";
                console.log(`Toggling ${channel.name}: ${currentUIState ? "enabled" : "disabled"} -> ${newValue}`);
                onSetVariable(channel.varKey, newValue);
                setChannels({
                    "useChannelMixer[handleToggle > setChannels()]": (prev)=>{
                        const updated = [
                            ...prev
                        ];
                        updated[channelIndex] = newUIState;
                        return updated;
                    }
                }["useChannelMixer[handleToggle > setChannels()]"]);
                if (!newUIState) {
                    setEffectiveAudioState({
                        "useChannelMixer[handleToggle > setEffectiveAudioState()]": (prev_0)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateEffectiveStateOnMute"])(prev_0, channelIndex, true)
                    }["useChannelMixer[handleToggle > setEffectiveAudioState()]"]);
                    console.log("  \u2713 Muting works immediately - effective state updated");
                } else {
                    console.log("  \u26A0\uFE0F Unmuting requires reload - effective state unchanged");
                }
            }
        })["useChannelMixer[handleToggle]"];
        $[22] = channels;
        $[23] = onSetVariable;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    const handleToggle = t12;
    let t13;
    if ($[25] !== allEnabled || $[26] !== onSetVariable) {
        t13 = ({
            "useChannelMixer[handleToggleAll]": ()=>{
                const newState = !allEnabled;
                const value_0 = newState ? "enabled" : "disabled";
                console.log(`Toggling all channels to: ${value_0}`);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach({
                    "useChannelMixer[handleToggleAll > SNES_CHANNELS.forEach()]": (channel_0)=>{
                        onSetVariable(channel_0.varKey, value_0);
                    }
                }["useChannelMixer[handleToggleAll > SNES_CHANNELS.forEach()]"]);
                const newChannels_0 = new Array(8).fill(newState);
                setChannels(newChannels_0);
                if (!newState) {
                    setEffectiveAudioState(new Array(8).fill(false));
                }
            }
        })["useChannelMixer[handleToggleAll]"];
        $[25] = allEnabled;
        $[26] = onSetVariable;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const handleToggleAll = t13;
    let t14;
    if ($[28] !== onSetVariable) {
        t14 = ({
            "useChannelMixer[handleSolo]": (channelIndex_0)=>{
                console.log(`Soloing channel ${channelIndex_0 + 1}`);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach({
                    "useChannelMixer[handleSolo > SNES_CHANNELS.forEach()]": (channel_1, i_0)=>{
                        const value_1 = i_0 === channelIndex_0 ? "enabled" : "disabled";
                        onSetVariable(channel_1.varKey, value_1);
                    }
                }["useChannelMixer[handleSolo > SNES_CHANNELS.forEach()]"]);
                const newChannels_1 = new Array(8).fill(false);
                newChannels_1[channelIndex_0] = true;
                setChannels(newChannels_1);
                setEffectiveAudioState({
                    "useChannelMixer[handleSolo > setEffectiveAudioState()]": (prev_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateEffectiveStateOnSolo"])(prev_1, channelIndex_0)
                }["useChannelMixer[handleSolo > setEffectiveAudioState()]"]);
            }
        })["useChannelMixer[handleSolo]"];
        $[28] = onSetVariable;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    const handleSolo = t14;
    let t15;
    if ($[30] !== onSetVariable) {
        t15 = ({
            "useChannelMixer[handleMute]": (channelIndexes)=>{
                for (const index of channelIndexes){
                    onSetVariable(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"][index].varKey, "disabled");
                }
                const mute = {
                    "useChannelMixer[handleMute > mute]": (states)=>states.map({
                            "useChannelMixer[handleMute > mute > states.map()]": (on, index_0)=>on && !channelIndexes.includes(index_0)
                        }["useChannelMixer[handleMute > mute > states.map()]"])
                }["useChannelMixer[handleMute > mute]"];
                setChannels(mute);
                setEffectiveAudioState(mute);
            }
        })["useChannelMixer[handleMute]"];
        $[30] = onSetVariable;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    const handleMute = t15;
    let t16;
    if ($[32] !== channels || $[33] !== onReloadEmulator) {
        t16 = ({
            "useChannelMixer[applyWithReload]": async ()=>{
                if (!onReloadEmulator) {
                    console.warn("No reload function provided");
                    return;
                }
                setIsApplying(true);
                console.log("\uD83D\uDD04 Full emulator reload to apply channel settings...");
                const pendingSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPendingSettings"])(channels);
                ;
                try {
                    await onReloadEmulator(pendingSettings);
                    setTimeout({
                        "useChannelMixer[applyWithReload > setTimeout()]": ()=>{
                            setEffectiveAudioState([
                                ...channels
                            ]);
                            console.log("\u2705 Effective state updated to match UI");
                            setIsApplying(false);
                        }
                    }["useChannelMixer[applyWithReload > setTimeout()]"], 2000);
                } catch (t17) {
                    const err = t17;
                    console.error("Reload failed:", err);
                    setIsApplying(false);
                }
            }
        })["useChannelMixer[applyWithReload]"];
        $[32] = channels;
        $[33] = onReloadEmulator;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    const applyWithReload = t16;
    let t17;
    if ($[35] !== allEnabled || $[36] !== applyWithReload || $[37] !== channels || $[38] !== effectiveAudioState || $[39] !== handleMute || $[40] !== handleSolo || $[41] !== handleToggle || $[42] !== handleToggleAll || $[43] !== hasChannelSupport || $[44] !== hasSupport || $[45] !== isApplying || $[46] !== needsReload) {
        t17 = {
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
        $[35] = allEnabled;
        $[36] = applyWithReload;
        $[37] = channels;
        $[38] = effectiveAudioState;
        $[39] = handleMute;
        $[40] = handleSolo;
        $[41] = handleToggle;
        $[42] = handleToggleAll;
        $[43] = hasChannelSupport;
        $[44] = hasSupport;
        $[45] = isApplying;
        $[46] = needsReload;
        $[47] = t17;
    } else {
        t17 = $[47];
    }
    return t17;
}
_s(useChannelMixer, "aQznyH+64tChpUoamHeHS3jRtrU=");
function _useChannelMixerUseEffectInitialStatesFilter(s) {
    return !s;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMusicScan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMusicScan",
    ()=>useMusicScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$musicScans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/musicScans.ts [app-client] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/hooks/useMusicScan.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: false
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
var _s = __turbopack_context__.k.signature();
;
;
;
function useMusicScan(romSource, rom) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "38cb0c4b8e45ba3bf277a923a30b291ab5c05696d178c64d4321aad2ab92219d") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "38cb0c4b8e45ba3bf277a923a30b291ab5c05696d178c64d4321aad2ab92219d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            status: "idle"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== rom || $[3] !== romSource) {
        t1 = ({
            "useMusicScan[useEffect()]": ()=>{
                if (!romSource || !rom) {
                    setState({
                        status: "idle"
                    });
                    return;
                }
                const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$musicScans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedMusicScan"])(romSource);
                if (saved) {
                    setState({
                        result: saved,
                        status: "done"
                    });
                    return;
                }
                setState({
                    progress: 0,
                    status: "scanning"
                });
                const worker = __turbopack_context__.r("[project]/src/lib/emulator/musicScanWorker.ts [app-client] (ecmascript, worker loader)")(Worker, {
                    type: "module"
                });
                worker.onmessage = (t3)=>{
                    const { data } = t3;
                    if (data.type === "progress") {
                        setState({
                            progress: data.fraction,
                            status: "scanning"
                        });
                    } else {
                        if (data.type === "result") {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$musicScans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMusicScan"])(romSource, data.result);
                            setState({
                                result: data.result,
                                status: "done"
                            });
                        } else {
                            setState({
                                message: data.message,
                                status: "error"
                            });
                        }
                    }
                };
                worker.onerror = (event)=>setState({
                        message: event.message || "Music scan failed",
                        status: "error"
                    });
                rom.arrayBuffer().then({
                    "useMusicScan[useEffect() > (anonymous)(arg0)]": (buffer)=>{
                        const request = {
                            probeUrl: new URL("/snes9x-probe/snes9x-probe.mjs", window.location.origin).href,
                            rom: buffer
                        };
                        worker.postMessage(request, [
                            buffer
                        ]);
                    }
                }["useMusicScan[useEffect() > (anonymous)(arg0)]"], {
                    "useMusicScan[useEffect() > (anonymous)(arg1)]": ()=>setState({
                            message: "Could not read the ROM for the music scan",
                            status: "error"
                        })
                }["useMusicScan[useEffect() > (anonymous)(arg1)]"]);
                return ()=>worker.terminate();
            }
        })["useMusicScan[useEffect()]"];
        t2 = [
            romSource,
            rom
        ];
        $[2] = rom;
        $[3] = romSource;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return state;
}
_s(useMusicScan, "JxtqLeQAOpJHyhwylfbSe2NhJoE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/channelState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
;
;
function needsReload(uiStates, effectiveStates) {
    return uiStates.some((uiState, i)=>uiState === true && effectiveStates[i] === false);
}
function areAllChannelsEnabled(states) {
    return states.every((ch)=>ch);
}
function initializeChannelStates(options) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].map((ch)=>{
        const opt = options.find((o)=>o.key === ch.varKey);
        return opt ? opt.currentValue === 'enabled' : true;
    });
}
function hasSoundChannelSupport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSoundChannelOptions"])(options).length > 0;
}
function createPendingSettings(channelStates) {
    const settings = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].forEach((channel, i)=>{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/musicScan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/voiceProbe.ts [app-client] (ecmascript)");
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
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].B,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].Y,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].A,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].X
];
const OTHER_BUTTONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].R,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].RIGHT,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].L,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].DOWN,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].LEFT,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].UP
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
    const frames = trace.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"];
    let active = 0;
    for(let frame = 0; frame < frames; frame++){
        active += Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceEnvelope"])(trace, frame, voice) > 0);
    }
    return active;
}
function hasSound(trace) {
    for(let voice = 0; voice < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]; voice++){
        if (activeFrames(trace, voice) > 0) {
            return true;
        }
    }
    return false;
}
/** True when what `voice` plays in `frame` of `trace` also occurs in `other` around the same time. */ function hasCounterpart(trace, other, frame, voice) {
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceEnvelope"])(trace, frame, voice) > 0;
    const sample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceSample"])(trace, frame, voice);
    const pitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voicePitch"])(trace, frame, voice);
    const first = Math.max(0, frame - TIMING_SLACK_FRAMES);
    const last = Math.min(other.length / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"] - 1, frame + TIMING_SLACK_FRAMES);
    for(let near = first; near <= last; near++){
        const otherActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceEnvelope"])(other, near, voice) > 0;
        if (!active && !otherActive) {
            return true;
        }
        if (active && otherActive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceSample"])(other, near, voice) === sample && Math.abs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voicePitch"])(other, near, voice) - pitch) <= pitch >> PITCH_SLACK_SHIFT) {
            return true;
        }
    }
    return false;
}
/** True when pressing the button made `voice` play something it does not play when left alone. */ function reactedToPress(leftAlone, pressed, voice) {
    const frames = Math.min(leftAlone.length, pressed.length) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"];
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
        length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]
    }, (_, voice)=>activeFrames(leftAlone, voice));
    const playing = active.filter((frames)=>frames > 0).length;
    const reacted = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]).fill(false);
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
    for(let voice = 0; voice < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]; voice++){
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
            length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_COUNT"]
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
        const pressed = new Uint8Array(WINDOW_FRAMES * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"]);
        pressed.set(run(PRESS_FRAMES, button));
        pressed.set(run(WINDOW_FRAMES - PRESS_FRAMES, 0), PRESS_FRAMES * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_BYTES"]);
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
            run(START_TAP_FRAMES, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$voiceProbe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JOYPAD"].START),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/musicScanWorker.ts (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/musicScanWorker.1h8pigyvone60.ts");}),
"[project]/src/lib/emulator/musicScanWorker.ts [app-client] (ecmascript, worker loader)", ((__turbopack_context__) => {

__turbopack_context__.v(__turbopack_context__.r("[turbopack-ecmascript]/worker/browser/createWorker.ts [app-client] (ecmascript)")["default"]("static/chunks/turbopack-worker-[client-fs]__next_static_chunks_1_hyozqcdxgqf._.js", ["static/chunks/src_lib_emulator_0myetcqml3wn7._.js","static/chunks/src_lib_emulator_musicScanWorker_ts_1gdnjqzqussv0._.js","static/chunks/turbopack-src_lib_emulator_musicScanWorker_ts_0so_xtqq21cqa._.js"]));
}),
"[project]/src/lib/emulator/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/emulator/voiceProbe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage/channelStates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage/musicScans.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSavedMusicScan",
    ()=>getSavedMusicScan,
    "saveMusicScan",
    ()=>saveMusicScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/musicScan.ts [app-client] (ecmascript)");
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
            if (parsed?.version === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicScan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MUSIC_SCAN_VERSION"] && Array.isArray(parsed.channels) && parsed.channels.length === 8) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/storage/roms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
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
    if (!filename || filename === '.' || filename === '..' || filename.includes('\\') || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRomFile"])(filename)) {
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
                    if (handle.kind !== 'file' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRomFile"])(handle.name)) {
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
            if (handle.kind === 'file' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRomFile"])(handle.name)) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack-ecmascript]/worker/browser/createWorker.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Embedded worker-runtime helper. This file is bundled as a regular module and
// `__turbopack_require__`d by the generated web-worker loader code.
//
// The chunk-URL builder, the chunk base path and the asset suffix are read from
// the shared `__turbopack_chunk_relative_url__` / `__turbopack_chunk_base_path__`
// / `__turbopack_chunk_asset_suffix__` runtime primitives. The worker base-path
// override and forwarded-global names are baked into this module at build time by
// `turbopack-ecmascript` replacing the `_TURBOPACK_WORKER_BASE_PATH_` /
// `_TURBOPACK_WORKER_FORWARDED_GLOBALS_` free variables, and the forwarded-global
// values are read from `globalThis`.
__turbopack_context__.s([
    "default",
    ()=>generateCreateWorker
]);
/**
 * Creates a web worker by instantiating the given WorkerConstructor with the
 * appropriate URL and options.
 *
 * The entrypoint is a pre-compiled worker runtime file. The params configure
 * which module chunks to load and which module to run as the entry point.
 *
 * The params are a JSON array of the following structure:
 * `[TURBOPACK_NEXT_CHUNK_URLS, ASSET_SUFFIX, WORKER_CHUNK_BASE_PATH, ...workerForwardedGlobals values]`
 *
 * @param WorkerConstructor The Worker or SharedWorker constructor
 * @param entrypoint path to the worker entrypoint chunk
 * @param moduleChunks list of module chunk paths to load
 * @param workerOptions options to pass to the Worker constructor (optional)
 */ function createWorker(WorkerConstructor, entrypoint, moduleChunks, workerOptions) {
    const isSharedWorker = WorkerConstructor.name === 'SharedWorker';
    // `WORKER_BASE_PATH` overrides `CHUNK_BASE_PATH` for the entrypoint and the
    // module chunks loaded inside the worker, keeping them same-origin to each
    // other when `CHUNK_BASE_PATH` (= `assetPrefix`) is a cross-origin CDN.
    // `null` falls back; an empty string is treated as a literal empty prefix.
    const workerBasePath = null ?? /*TURBOPACK member replacement*/ __turbopack_context__.b;
    const chunkUrls = moduleChunks.map((chunk)=>/*TURBOPACK member replacement*/ __turbopack_context__.h(typeof chunk === 'string' ? chunk : chunk.path, workerBasePath)).reverse();
    const params = [
        chunkUrls,
        /*TURBOPACK member replacement*/ __turbopack_context__.X,
        workerBasePath
    ];
    const globals = [
        "NEXT_DEPLOYMENT_ID",
        "NEXT_CLIENT_ASSET_SUFFIX"
    ];
    for(let i = 0; i < globals.length; i++){
        params.push(globalThis[globals[i]]);
    }
    const url = new URL(/*TURBOPACK member replacement*/ __turbopack_context__.h(entrypoint, workerBasePath), location.origin);
    const paramsJson = JSON.stringify(params);
    if (isSharedWorker) {
        url.searchParams.set('params', paramsJson);
    } else {
        url.hash = '#params=' + encodeURIComponent(paramsJson);
    }
    // Remove type: "module" from options since our worker entrypoint is not a module
    const options = workerOptions ? {
        ...workerOptions,
        type: undefined
    } : undefined;
    return new WorkerConstructor(url, options);
}
function generateCreateWorker(entrypoint, moduleChunks) {
    return (WorkerConstructor, workerOptions)=>createWorker(WorkerConstructor, entrypoint, moduleChunks, workerOptions);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0-_4lhbzg6-di._.js.map