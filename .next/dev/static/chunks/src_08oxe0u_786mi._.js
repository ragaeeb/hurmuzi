(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/GameEmulator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEmulatorSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useEmulatorSetup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const GameEmulator = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function GameEmulator({ game, core = 'snes9x', onReady }, ref) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const emulatorReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const coreOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pendingStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingSettingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingReloadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [iframeKey, setIframeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gameUrl, setGameUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "GameEmulator.GameEmulator.useState": ()=>URL.createObjectURL(game)
    }["GameEmulator.GameEmulator.useState"]);
    const gameUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(gameUrl);
    const onReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onReady);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameEmulator.GameEmulator.useEffect": ()=>{
            onReadyRef.current = onReady;
        }
    }["GameEmulator.GameEmulator.useEffect"], [
        onReady
    ]);
    const handleGameStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[handleGameStart]": ()=>{
            emulatorReady.current = true;
        }
    }["GameEmulator.GameEmulator.useCallback[handleGameStart]"], []);
    const handleReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[handleReady]": (options)=>{
            coreOptionsRef.current = options;
            onReadyRef.current?.(options);
            const pendingReload = pendingReloadRef.current;
            if (pendingReload) {
                clearTimeout(pendingReload.timeout);
                pendingReloadRef.current = null;
                pendingReload.resolve();
            }
        }
    }["GameEmulator.GameEmulator.useCallback[handleReady]"], []);
    const { setupIframe, getEmulator: getEmulatorFromHook } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEmulatorSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmulatorSetup"])({
        core,
        gameUrl,
        iframeKey,
        onGameStart: handleGameStart,
        onReady: handleReady,
        pendingSettings: pendingSettingsRef.current,
        pendingState: pendingStateRef.current
    });
    const getEmulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[getEmulator]": ()=>{
            if (!iframeRef.current) {
                return null;
            }
            return getEmulatorFromHook(iframeRef.current);
        }
    }["GameEmulator.GameEmulator.useCallback[getEmulator]"], [
        getEmulatorFromHook
    ]);
    const getCoreOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[getCoreOptions]": ()=>{
            const emulator = getEmulator();
            if (!emulator?.gameManager?.getCoreOptions) {
                return coreOptionsRef.current;
            }
            try {
                const optionsString = emulator.gameManager.getCoreOptions();
                const options_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCoreOptions"])(optionsString);
                coreOptionsRef.current = options_0;
                return options_0;
            } catch (err) {
                console.warn('Failed to get core options:', err);
                return coreOptionsRef.current;
            }
        }
    }["GameEmulator.GameEmulator.useCallback[getCoreOptions]"], [
        getEmulator
    ]);
    const refreshCoreOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[refreshCoreOptions]": ()=>{
            return getCoreOptions();
        }
    }["GameEmulator.GameEmulator.useCallback[refreshCoreOptions]"], [
        getCoreOptions
    ]);
    const setVariable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[setVariable]": (option, value)=>{
            const emulator_0 = getEmulator();
            if (!emulator_0) {
                console.warn('Emulator not ready');
                return false;
            }
            try {
                if (emulator_0.menuOptionChanged) {
                    emulator_0.menuOptionChanged(option, value);
                    console.log(`✓ Set via menuOptionChanged: ${option} = ${value}`);
                } else if (emulator_0.gameManager?.setVariable) {
                    emulator_0.gameManager.setVariable(option, value);
                    console.log(`✓ Set via gameManager.setVariable: ${option} = ${value}`);
                } else {
                    console.warn('No method available to set variable');
                    return false;
                }
                setTimeout({
                    "GameEmulator.GameEmulator.useCallback[setVariable]": ()=>{
                        const options_1 = getCoreOptions();
                        const opt = options_1.find({
                            "GameEmulator.GameEmulator.useCallback[setVariable].opt": (o)=>o.key === option
                        }["GameEmulator.GameEmulator.useCallback[setVariable].opt"]);
                        if (opt) {
                            const match = opt.currentValue === value;
                            console.log(`📋 Verify: ${option} = ${opt.currentValue} ${match ? '✓' : '⚠️ MISMATCH'}`);
                        }
                    }
                }["GameEmulator.GameEmulator.useCallback[setVariable]"], 100);
                return true;
            } catch (err_0) {
                console.warn('Failed to set variable:', err_0);
                return false;
            }
        }
    }["GameEmulator.GameEmulator.useCallback[setVariable]"], [
        getEmulator,
        getCoreOptions
    ]);
    const getState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[getState]": ()=>{
            const emulator_1 = getEmulator();
            if (emulator_1?.gameManager?.getState) {
                return emulator_1.gameManager.getState();
            }
            return null;
        }
    }["GameEmulator.GameEmulator.useCallback[getState]"], [
        getEmulator
    ]);
    const loadState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[loadState]": (state)=>{
            const emulator_2 = getEmulator();
            if (emulator_2?.gameManager?.loadState) {
                emulator_2.gameManager.loadState(state);
            }
        }
    }["GameEmulator.GameEmulator.useCallback[loadState]"], [
        getEmulator
    ]);
    const isReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[isReady]": ()=>emulatorReady.current
    }["GameEmulator.GameEmulator.useCallback[isReady]"], []);
    const reloadEmulator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameEmulator.GameEmulator.useCallback[reloadEmulator]": async (pendingSettings)=>{
            const previousReload = pendingReloadRef.current;
            if (previousReload) {
                clearTimeout(previousReload.timeout);
                pendingReloadRef.current = null;
                previousReload.reject(new Error('Emulator reload superseded by a newer reload'));
            }
            console.log('%c🔄 FULL EMULATOR RELOAD (iframe method)', 'color: #00ffff; font-weight: bold; font-size: 14px');
            console.log('📝 Pending settings:', pendingSettings);
            // Save current game state
            const emulator_3 = getEmulator();
            const savedState = emulator_3?.gameManager?.getState?.();
            pendingStateRef.current = savedState ? new Uint8Array(savedState) : null;
            if (savedState) {
                console.log('💾 State captured:', savedState?.length, 'bytes');
            }
            // Store settings to apply after reload
            pendingSettingsRef.current = pendingSettings;
            // Mark as not ready
            emulatorReady.current = false;
            // Destroy and recreate iframe
            console.log('🗑️ Destroying iframe...');
            await new Promise({
                "GameEmulator.GameEmulator.useCallback[reloadEmulator]": (resolve, reject)=>{
                    const timeout = setTimeout({
                        "GameEmulator.GameEmulator.useCallback[reloadEmulator].timeout": ()=>{
                            if (pendingReloadRef.current?.timeout === timeout) {
                                pendingReloadRef.current = null;
                            }
                            reject(new Error('Emulator reload timed out'));
                        }
                    }["GameEmulator.GameEmulator.useCallback[reloadEmulator].timeout"], 30000);
                    pendingReloadRef.current = {
                        reject,
                        resolve,
                        timeout
                    };
                    URL.revokeObjectURL(gameUrlRef.current);
                    const nextGameUrl = URL.createObjectURL(game);
                    gameUrlRef.current = nextGameUrl;
                    setGameUrl(nextGameUrl);
                    setIframeKey({
                        "GameEmulator.GameEmulator.useCallback[reloadEmulator]": (k)=>k + 1
                    }["GameEmulator.GameEmulator.useCallback[reloadEmulator]"]);
                }
            }["GameEmulator.GameEmulator.useCallback[reloadEmulator]"]);
        }
    }["GameEmulator.GameEmulator.useCallback[reloadEmulator]"], [
        game,
        getEmulator
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "GameEmulator.GameEmulator.useImperativeHandle": ()=>({
                getCoreOptions,
                getEmulator,
                getState,
                isReady,
                loadState,
                refreshCoreOptions,
                reloadEmulator,
                setVariable
            })
    }["GameEmulator.GameEmulator.useImperativeHandle"], [
        setVariable,
        getCoreOptions,
        refreshCoreOptions,
        isReady,
        getEmulator,
        reloadEmulator,
        getState,
        loadState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameEmulator.GameEmulator.useEffect": ()=>({
                "GameEmulator.GameEmulator.useEffect": ()=>{
                    const pendingReload_0 = pendingReloadRef.current;
                    if (pendingReload_0) {
                        clearTimeout(pendingReload_0.timeout);
                        pendingReload_0.reject(new Error('Emulator was removed during reload'));
                    }
                    URL.revokeObjectURL(gameUrlRef.current);
                }
            })["GameEmulator.GameEmulator.useEffect"]
    }["GameEmulator.GameEmulator.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameEmulator.GameEmulator.useEffect": ()=>{
            const iframe = iframeRef.current;
            if (!iframe) {
                return;
            }
            // Setup immediately if document ready
            if (iframe.contentDocument?.readyState === 'complete') {
                setupIframe(iframe);
            }
            // Also setup on load event
            const handleLoad = {
                "GameEmulator.GameEmulator.useEffect.handleLoad": ()=>{
                    setupIframe(iframe);
                }
            }["GameEmulator.GameEmulator.useEffect.handleLoad"];
            iframe.addEventListener('load', handleLoad);
            return ({
                "GameEmulator.GameEmulator.useEffect": ()=>{
                    iframe.removeEventListener('load', handleLoad);
                }
            })["GameEmulator.GameEmulator.useEffect"];
        }
    }["GameEmulator.GameEmulator.useEffect"], [
        setupIframe
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "h-full w-full",
        style: {
            minHeight: '480px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            ref: iframeRef,
            title: "Hurmuzi",
            className: "h-full w-full border-0",
            style: {
                minHeight: '480px'
            },
            sandbox: "allow-scripts allow-same-origin allow-pointer-lock"
        }, iframeKey, false, {
            fileName: "[project]/src/app/components/GameEmulator.tsx",
            lineNumber: 225,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/GameEmulator.tsx",
        lineNumber: 222,
        columnNumber: 10
    }, this);
}, "aX7tSbMyZYivTjIhp60Bxo373ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEmulatorSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmulatorSetup"]
    ];
})), "aX7tSbMyZYivTjIhp60Bxo373ko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEmulatorSetup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmulatorSetup"]
    ];
});
_c1 = GameEmulator;
const __TURBOPACK__default__export__ = GameEmulator;
var _c, _c1;
__turbopack_context__.k.register(_c, "GameEmulator$forwardRef");
__turbopack_context__.k.register(_c1, "GameEmulator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/GameEmulator.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/GameEmulator.tsx [app-client] (ecmascript)"));
}),
"[project]/src/hooks/useEmulatorSetup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEmulatorSetup",
    ()=>useEmulatorSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
;
;
function useEmulatorSetup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "ba98a7df364fc43de9ed34e3d9a32a3d326a5b7d3ec3a4d102970807552989af") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba98a7df364fc43de9ed34e3d9a32a3d326a5b7d3ec3a4d102970807552989af";
    }
    const { core, gameUrl, iframeKey, onReady, onGameStart, pendingSettings, pendingState } = t0;
    const getIframeWindow = _useEmulatorSetupGetIframeWindow;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "useEmulatorSetup[getEmulator]": (iframe_0)=>{
                const iframeWin = getIframeWindow(iframe_0);
                return iframeWin?.EJS_emulator || null;
            }
        })["useEmulatorSetup[getEmulator]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const getEmulator = t1;
    let t2;
    if ($[2] !== core || $[3] !== gameUrl || $[4] !== iframeKey || $[5] !== onGameStart || $[6] !== onReady || $[7] !== pendingSettings || $[8] !== pendingState) {
        t2 = ({
            "useEmulatorSetup[setupIframe]": (iframe_1)=>{
                const iframeWin_0 = getIframeWindow(iframe_1);
                if (!iframeWin_0 || iframeWin_0.__setupComplete) {
                    return;
                }
                const isReload = pendingSettings !== null;
                console.log(`%c🎮 Setting up emulator iframe (key: ${iframeKey}, reload: ${isReload})`, "color: #00ff00; font-weight: bold");
                iframeWin_0.__setupComplete = true;
                const iframeDoc = iframe_1.contentDocument;
                if (!iframeDoc) {
                    return;
                }
                iframeDoc.open();
                iframeDoc.write("\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <style>\n            * { margin: 0; padding: 0; box-sizing: border-box; }\n            html, body { width: 100%; height: 100%; overflow: hidden; background: #0f0f23; }\n            #game { width: 100%; height: 100%; }\n          </style>\n        </head>\n        <body>\n          <div id=\"game\"></div>\n        </body>\n        </html>\n      ");
                iframeDoc.close();
                iframeWin_0.EJS_player = "#game";
                iframeWin_0.EJS_core = core;
                iframeWin_0.EJS_gameUrl = gameUrl;
                iframeWin_0.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
                iframeWin_0.EJS_color = "#1a1a2e";
                const isSafari = /^((?!chrome|chromium|crios|fxios|edg|android).)*safari/i.test(navigator.userAgent);
                iframeWin_0.EJS_startOnLoaded = !isSafari;
                const currentPendingSettings = pendingSettings;
                const currentPendingState = pendingState;
                iframeWin_0.EJS_onGameStart = ()=>{
                    console.log("%c\uD83C\uDFAE Game started in iframe!", "color: #00ff00; font-weight: bold");
                    onGameStart?.();
                    if (currentPendingSettings && Object.keys(currentPendingSettings).length > 0) {
                        console.log("\uD83D\uDCDD Applying pending settings...");
                        setTimeout({
                            "useEmulatorSetup[setupIframe > <anonymous> > setTimeout()]": ()=>{
                                const emulator = iframeWin_0.EJS_emulator;
                                if (emulator?.menuOptionChanged) {
                                    for (const [key, value] of Object.entries(currentPendingSettings)){
                                        emulator.menuOptionChanged(key, value);
                                        console.log(`  ✓ Applied: ${key} = ${value}`);
                                    }
                                }
                                if (currentPendingState) {
                                    console.log("\uD83D\uDCC2 Loading saved state...");
                                    setTimeout({
                                        "useEmulatorSetup[setupIframe > <anonymous> > setTimeout() > setTimeout()]": ()=>{
                                            if (iframeWin_0.EJS_emulator?.gameManager?.loadState) {
                                                iframeWin_0.EJS_emulator.gameManager.loadState(currentPendingState);
                                                console.log("\u2705 State restored!");
                                            }
                                        }
                                    }["useEmulatorSetup[setupIframe > <anonymous> > setTimeout() > setTimeout()]"], 500);
                                }
                            }
                        }["useEmulatorSetup[setupIframe > <anonymous> > setTimeout()]"], 300);
                    }
                    setTimeout({
                        "useEmulatorSetup[setupIframe > <anonymous> > setTimeout()]": ()=>{
                            const emulator_0 = iframeWin_0.EJS_emulator;
                            if (!emulator_0?.gameManager?.getCoreOptions) {
                                return;
                            }
                            const optionsString = emulator_0.gameManager.getCoreOptions();
                            const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCoreOptions"])(optionsString);
                            console.log("%c\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550", "color: #00ff00");
                            console.log(`%c  SNES9X CORE OPTIONS (Total: ${options.length})`, "color: #00ff00; font-weight: bold; font-size: 14px");
                            console.log("%c\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n", "color: #00ff00");
                            onReady?.(options);
                        }
                    }["useEmulatorSetup[setupIframe > <anonymous> > setTimeout()]"], 500);
                };
                const script = iframeDoc.createElement("script");
                script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
                script.async = true;
                iframeDoc.body.appendChild(script);
            }
        })["useEmulatorSetup[setupIframe]"];
        $[2] = core;
        $[3] = gameUrl;
        $[4] = iframeKey;
        $[5] = onGameStart;
        $[6] = onReady;
        $[7] = pendingSettings;
        $[8] = pendingState;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    const setupIframe = t2;
    let t3;
    if ($[10] !== setupIframe) {
        t3 = {
            getEmulator,
            getIframeWindow,
            setupIframe
        };
        $[10] = setupIframe;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    return t3;
}
function _useEmulatorSetupGetIframeWindow(iframe) {
    return iframe.contentWindow || null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_08oxe0u_786mi._.js.map