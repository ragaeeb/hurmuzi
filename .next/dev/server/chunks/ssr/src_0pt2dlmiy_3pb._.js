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
const EQ_ANIMATIONS = [
    'animate-eq-1',
    'animate-eq-2',
    'animate-eq-3',
    'animate-eq-4',
    'animate-eq-2',
    'animate-eq-1',
    'animate-eq-3'
];
function ChannelButton({ activityPercent, channel, isUIEnabled, isEffectivelyPlaying, isLikelyMusic = false, needsReloadForThis, disabled, onToggle, onSolo }) {
    const isLive = isEffectivelyPlaying && !disabled;
    const toggleLabel = needsReloadForThis ? `${channel.name} - Pending reload to unmute` : isUIEnabled ? `Mute ${channel.name}${activityPercent !== undefined ? ` (${activityPercent}% active)` : ''}` : `Unmute ${channel.name}`;
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
                        lineNumber: 67,
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
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    needsReloadForThis && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1 left-1 font-mono text-[9px] text-amber-400 motion-safe:animate-pulse",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this),
                    isLikelyMusic && isUIEnabled && !needsReloadForThis && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1 left-1 text-[8px] text-purple-300",
                        children: "🎵"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this),
                    activityPercent !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1 left-1 rounded bg-black/60 px-1 font-mono text-[8px] text-white",
                        children: [
                            activityPercent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this),
                    !isUIEnabled && !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-lg text-red-400/50",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ChannelButton.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 112,
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
                                lineNumber: 124,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ChannelButton.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-medium font-mono text-[10px] tracking-tight transition-colors ${!isUIEnabled ? 'text-red-400/60' : needsReloadForThis ? 'text-amber-400' : isLikelyMusic ? 'font-semibold text-purple-300' : 'text-zinc-300 group-hover/channel:text-cyan-300'}`,
                    children: channel.name
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ChannelButton.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/ChannelButton.tsx",
                lineNumber: 148,
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
                lineNumber: 165,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ChannelButton.tsx",
        lineNumber: 46,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/channelState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChannelButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ChannelButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function SoundChannelMixer({ onDetectMusic, onSetVariable, onReloadEmulator, onSaveStates, disabled = false, coreOptions = [], initialStates = null, romName = '' }) {
    const [showOptions, setShowOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDetectingMusic, setIsDetectingMusic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detectionProgress, setDetectionProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [detectionResults, setDetectionResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [detectionError, setDetectionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sampleDurationMs, setSampleDurationMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3000);
    const { channels, effectiveAudioState, hasChannelSupport, needsReload, allEnabled, isApplying, handleToggle, handleToggleAll, handleSolo, applyWithReload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useChannelMixer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChannelMixer"])({
        coreOptions,
        initialStates,
        onReloadEmulator,
        onSaveStates,
        onSetVariable,
        romName
    });
    const audioOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAudioOptions"])(coreOptions);
    const likelyMusicChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$channelState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findLikelyMusicChannels"])(detectionResults);
    const controlsDisabled = disabled || isApplying || isDetectingMusic;
    const handleAudioOptionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, value)=>{
        onSetVariable(key, value);
    }, [
        onSetVariable
    ]);
    const handleDetectMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!onDetectMusic) {
            return;
        }
        setIsDetectingMusic(true);
        setDetectionProgress(0);
        setDetectionResults([]);
        setDetectionError('');
        try {
            setDetectionResults(await onDetectMusic(sampleDurationMs, setDetectionProgress));
        } catch (error) {
            setDetectionError(error instanceof Error ? error.message : 'Music detection failed');
        } finally{
            setIsDetectingMusic(false);
            setDetectionProgress(0);
        }
    }, [
        onDetectMusic,
        sampleDurationMs
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
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm text-zinc-200 tracking-tight",
                                children: "Audio Channels"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 87,
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
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 rounded-lg border border-white/5 bg-white/[0.02] p-2 text-center text-xs text-zinc-500",
                children: isDetectingMusic ? 'Music detection in progress…' : 'Start the game to enable controls'
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, this),
            !disabled && hasChannelSupport === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-amber-400 text-xs",
                    children: "⚠️ Sound channel options not found in this core."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 118,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 117,
                columnNumber: 17
            }, this),
            (!disabled || isDetectingMusic) && hasChannelSupport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleDetectMusic,
                                disabled: isApplying || isDetectingMusic || !onDetectMusic,
                                className: `group relative flex-1 overflow-hidden rounded-xl border px-3 py-2 font-semibold text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${isDetectingMusic ? 'cursor-wait border-purple-500/50 bg-purple-500/20 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : isApplying || !onDetectMusic ? 'cursor-not-allowed border-white/5 bg-[#18182e] text-zinc-600' : 'border-purple-500/30 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-purple-600/30 text-purple-200 shadow-[0_0_12px_rgba(147,51,234,0.15)] hover:border-purple-400/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:animate-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 139,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex items-center justify-center gap-1.5",
                                        children: isDetectingMusic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block h-3 w-3 animate-spin rounded-full border-2 border-purple-300 border-t-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Sampling voices… ",
                                                        detectionProgress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-purple-400",
                                                    children: "✨"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Detect Music Channels"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 147,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "sr-only",
                                htmlFor: "music-sample-duration",
                                children: "Music sampling time"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 155,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "music-sample-duration",
                                value: sampleDurationMs,
                                onChange: (event)=>setSampleDurationMs(Number(event.target.value)),
                                disabled: isDetectingMusic,
                                className: "rounded-xl border border-white/10 bg-[#16162c] px-2.5 font-mono text-base text-zinc-300 transition-colors focus:border-purple-400/50 focus:outline-none sm:text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 2000,
                                        children: "2s"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 3000,
                                        children: "3s"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 5000,
                                        children: "5s"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 10000,
                                        children: "10s"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 168,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center font-mono text-[9px] text-zinc-500",
                        children: "Live snapshot of SPC700 voices • 0 reload"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 124,
                columnNumber: 17
            }, this),
            detectionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mb-3 rounded-xl border border-red-500/30 bg-red-500/10 p-2.5 text-red-300 text-xs",
                children: detectionError
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 179,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4 gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SNES_CHANNELS"].map((channel, index)=>{
                    const isUIEnabled = channels[index];
                    const isEffectivelyPlaying = effectiveAudioState[index];
                    const needsReloadForThis = isUIEnabled && !isEffectivelyPlaying;
                    const detectionResult = detectionResults[index];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChannelButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        channel: channel,
                        isUIEnabled: isUIEnabled,
                        isEffectivelyPlaying: isEffectivelyPlaying,
                        needsReloadForThis: needsReloadForThis,
                        activityPercent: detectionResult ? Math.round(detectionResult.activeRatio * 100) : undefined,
                        isLikelyMusic: likelyMusicChannels.includes(channel.id),
                        disabled: controlsDisabled,
                        onToggle: ()=>handleToggle(index),
                        onSolo: ()=>handleSolo(index)
                    }, channel.id, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 196,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            !disabled && needsReload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-white/10 border-t pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: applyWithReload,
                        disabled: isApplying || isDetectingMusic || !onReloadEmulator,
                        className: `group relative w-full overflow-hidden rounded-xl border px-4 py-2.5 font-bold text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${isApplying ? 'cursor-wait border-cyan-500/20 bg-cyan-950/30 text-cyan-400' : 'animate-pulse-glow border-cyan-400/60 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent motion-reduce:animate-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 227,
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
                                            lineNumber: 231,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Reloading Emulator..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 232,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                    lineNumber: 230,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔊"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 236,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Apply Changes (Preserves Game State)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                            lineNumber: 237,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                    lineNumber: 235,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 217,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-center font-mono text-[9px] text-amber-400/80",
                        children: "Unmuting requires restarting audio engine. Game state will be restored."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 242,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 216,
                columnNumber: 17
            }, this),
            !disabled && audioOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-white/5 border-t pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowOptions(!showOptions),
                        disabled: isDetectingMusic,
                        className: "flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 transition-colors hover:text-cyan-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px]",
                                children: showOptions ? '▼' : '▶'
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 257,
                                columnNumber: 25
                            }, this),
                            "Audio Options (",
                            audioOptions.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 251,
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
                                        lineNumber: 265,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: `audio-opt-${opt.key}`,
                                        value: opt.currentValue,
                                        onChange: (e)=>handleAudioOptionChange(opt.key, e.target.value),
                                        disabled: isDetectingMusic,
                                        className: "rounded-lg border border-white/10 bg-[#0d0d1b] px-2 py-1 font-mono text-base text-zinc-200 focus:border-cyan-400/50 focus:outline-none sm:text-[10px]",
                                        children: opt.values.map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: val,
                                                children: val
                                            }, val, false, {
                                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                                lineNumber: 279,
                                                columnNumber: 45
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                        lineNumber: 271,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, opt.key, true, {
                                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                                lineNumber: 264,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                        lineNumber: 262,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 250,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-white/5 border-t pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center font-mono text-[9px] text-zinc-500",
                    children: "SNES SPC700 Audio • Settings saved per ROM"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                    lineNumber: 293,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
                lineNumber: 292,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SoundChannelMixer.tsx",
        lineNumber: 84,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicDetection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/musicDetection.ts [app-ssr] (ecmascript)");
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
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-cyan-400 text-xs tracking-wider",
                        children: "Initializing Core..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 16,
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
    const handleDetectMusic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (durationMs, onProgress)=>{
        const emulator = emulatorRef.current;
        if (!emulator) {
            throw new Error('The emulator is not ready');
        }
        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$musicDetection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["measureCurrentChannelActivity"])(()=>emulator.getState(), durationMs, onProgress);
        if (results.every((result)=>result.maxLevel === 0)) {
            throw new Error('No audio detected. Try again while music is playing and the emulator is unmuted.');
        }
        return results;
    }, []);
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
                        lineNumber: 151,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-2 font-semibold text-lg text-zinc-100",
                        children: romLoading ? 'Loading ROM…' : romError || 'No ROM loaded'
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 152,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 text-xs text-zinc-400",
                        children: romLoading ? 'Retrieving and verifying game data...' : 'Could not launch the requested game.'
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] active:scale-95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "← Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 162,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 150,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 149,
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
                    lineNumber: 173,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 172,
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
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 186,
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
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "truncate font-semibold text-sm text-zinc-100 md:text-base",
                                            children: romName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 185,
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
                                        lineNumber: 208,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium font-mono text-[10px] uppercase tracking-wider",
                                        children: gameStarted ? 'Running' : 'Loading'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/play/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/play/page.tsx",
                                lineNumber: 201,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 183,
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
                                        lineNumber: 231,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/play/page.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 227,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 lg:col-span-4 xl:col-span-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SoundChannelMixer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onDetectMusic: handleDetectMusic,
                                    onSetVariable: handleSetVariable,
                                    onReloadEmulator: handleReloadEmulator,
                                    onSaveStates: handleSaveChannelStates,
                                    disabled: !gameStarted,
                                    coreOptions: coreOptions,
                                    initialStates: savedChannelStates,
                                    romName: romSource
                                }, romSource, false, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 243,
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
                                                            lineNumber: 259,
                                                            columnNumber: 37
                                                        }, this),
                                                        " Keyboard Controls"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[10px] text-zinc-500",
                                                    children: "Player 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 257,
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
                                                            lineNumber: 266,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "D-Pad"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 270,
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
                                                                            lineNumber: 272,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "↓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "←"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Start / Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 287,
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
                                                                            lineNumber: 289,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "Shift"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 265,
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
                                                            lineNumber: 300,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "A / B"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 304,
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
                                                                            lineNumber: 306,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 309,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "X / Y"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 315,
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
                                                                            lineNumber: 317,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "Q"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-zinc-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "L / R"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 326,
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
                                                                            lineNumber: 328,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                                            className: "rounded border border-white/10 bg-zinc-800/80 px-1.5 py-0.5 font-mono text-[10px] text-zinc-200",
                                                                            children: "X"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/play/page.tsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/play/page.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/play/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 264,
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
                                                            lineNumber: 342,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 340,
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
                                                            lineNumber: 348,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/play/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/play/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/play/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/play/page.tsx",
                            lineNumber: 242,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/play/page.tsx",
                    lineNumber: 225,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/play/page.tsx",
        lineNumber: 170,
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
                        lineNumber: 367,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-cyan-400 text-xs tracking-wider",
                        children: "Loading Game..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/play/page.tsx",
                        lineNumber: 368,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/play/page.tsx",
                lineNumber: 366,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 365,
            columnNumber: 17
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayContent, {}, void 0, false, {
            fileName: "[project]/src/app/play/page.tsx",
            lineNumber: 373,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/play/page.tsx",
        lineNumber: 363,
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
"[project]/src/lib/emulator/channelState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areAllChannelsEnabled",
    ()=>areAllChannelsEnabled,
    "createPendingSettings",
    ()=>createPendingSettings,
    "findLikelyMusicChannels",
    ()=>findLikelyMusicChannels,
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
function findLikelyMusicChannels(results) {
    return results.filter((result)=>result.activeRatio > 0.5).map((result)=>result.channel);
}
}),
"[project]/src/lib/emulator/musicDetection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "measureCurrentChannelActivity",
    ()=>measureCurrentChannelActivity,
    "readCurrentVoiceActivity",
    ()=>readCurrentVoiceActivity
]);
const BLOCK_HEADER_SIZE = 11;
const DSP_REGISTERS_OFFSET = 65700;
const DSP_REGISTER_COUNT = 128;
const SAMPLE_INTERVAL_MS = 200;
const VOICE_REGISTER_STRIDE = 16;
function unwrapRetroArchState(state) {
    if (String.fromCharCode(...state.subarray(0, 7)) !== 'RASTATE') {
        return state;
    }
    let offset = 8;
    while(offset + 8 <= state.length){
        const name = String.fromCharCode(...state.subarray(offset, offset + 4));
        const size = new DataView(state.buffer, state.byteOffset + offset + 4, 4).getUint32(0, true);
        const start = offset + 8;
        const end = start + size;
        if (end > state.length) {
            throw new Error('Truncated RetroArch state block');
        }
        if (name === 'MEM ') {
            return state.subarray(start, end);
        }
        offset = end;
    }
    throw new Error('RetroArch state is missing its emulator payload');
}
function readBlockSize(state, offset) {
    if (state[offset + 4] === 45 && state[offset + 5] === 45) {
        return (state[offset + 6] << 24 | state[offset + 7] << 16 | state[offset + 8] << 8 | state[offset + 9]) >>> 0;
    }
    const value = String.fromCharCode(...state.subarray(offset + 4, offset + 10));
    if (!/^\d{6}$/.test(value)) {
        throw new Error('Invalid Snes9x snapshot block size');
    }
    return Number(value);
}
function findSoundBlock(state) {
    const snapshot = unwrapRetroArchState(state);
    const newline = snapshot.indexOf(10);
    if (newline < 0 || String.fromCharCode(...snapshot.subarray(0, 8)) !== '#!s9xsnp') {
        throw new Error('Unsupported Snes9x snapshot format');
    }
    let offset = newline + 1;
    while(offset + BLOCK_HEADER_SIZE <= snapshot.length){
        if (snapshot[offset + 3] !== 58 || snapshot[offset + 10] !== 58) {
            throw new Error('Invalid Snes9x snapshot block');
        }
        const name = String.fromCharCode(...snapshot.subarray(offset, offset + 3));
        const size = readBlockSize(snapshot, offset);
        const start = offset + BLOCK_HEADER_SIZE;
        const end = start + size;
        if (end > snapshot.length) {
            throw new Error('Truncated Snes9x snapshot block');
        }
        if (name === 'SND') {
            return snapshot.subarray(start, end);
        }
        offset = end;
    }
    throw new Error('Snes9x sound state is unavailable');
}
function readCurrentVoiceActivity(state) {
    const sound = findSoundBlock(state);
    if (sound.length < DSP_REGISTERS_OFFSET + DSP_REGISTER_COUNT) {
        throw new Error('Unsupported Snes9x sound state');
    }
    const registers = sound.subarray(DSP_REGISTERS_OFFSET, DSP_REGISTERS_OFFSET + DSP_REGISTER_COUNT);
    return Array.from({
        length: 8
    }, (_, channel)=>{
        const envelope = registers[channel * VOICE_REGISTER_STRIDE + 8];
        const rawOutput = registers[channel * VOICE_REGISTER_STRIDE + 9];
        const output = Math.abs(rawOutput > 127 ? rawOutput - 256 : rawOutput);
        return {
            active: envelope > 1 && output > 1,
            level: envelope / 127 * (output / 128)
        };
    });
}
async function measureCurrentChannelActivity(getState, durationMs, onProgress) {
    const activeSamples = new Array(8).fill(0);
    const levelTotals = new Array(8).fill(0);
    const maxLevels = new Array(8).fill(0);
    const start = performance.now();
    let samples = 0;
    // ponytail: Snes9x snapshot v12+ layout; replace with a core export if EmulatorJS changes it.
    while(performance.now() - start < durationMs){
        const state = getState();
        if (!state) {
            throw new Error('Unable to read the current game state');
        }
        const activity = readCurrentVoiceActivity(state);
        activity.forEach((voice, channel)=>{
            activeSamples[channel] += Number(voice.active);
            levelTotals[channel] += voice.level;
            maxLevels[channel] = Math.max(maxLevels[channel], voice.level);
        });
        samples++;
        onProgress(Math.min(100, Math.round((performance.now() - start) / durationMs * 100)));
        await new Promise((resolve)=>setTimeout(resolve, SAMPLE_INTERVAL_MS));
    }
    onProgress(100);
    return activeSamples.map((active, index)=>({
            activeRatio: active / samples,
            averageLevel: levelTotals[index] / samples,
            channel: index + 1,
            maxLevel: maxLevels[index],
            samples
        }));
}
}),
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

//# sourceMappingURL=src_0pt2dlmiy_3pb._.js.map