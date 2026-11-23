(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emulator/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage/roms.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "bd2664c07fe453b74792b288675a6361014ff4882d8bd75c793477045d8ee89c") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd2664c07fe453b74792b288675a6361014ff4882d8bd75c793477045d8ee89c";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("upload");
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [recentRoms, setRecentRoms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[useEffect()]": ()=>{
                let cancelled = false;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listStoredRoms"])().then({
                    "Home[useEffect() > (anonymous)()]": (roms)=>{
                        if (!cancelled) {
                            setRecentRoms(roms);
                        }
                    }
                }["Home[useEffect() > (anonymous)()]"]).catch(_HomeUseEffectAnonymous);
                return ()=>{
                    cancelled = true;
                };
            }
        })["Home[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== router) {
        t3 = ({
            "Home[handleFileDrop]": async (file)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRomFile"])(file.name)) {
                    alert(`Invalid file type. Please use a SNES ROM file (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidRomExtensions"])()})`);
                    return;
                }
                ;
                try {
                    const source = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalRom"])(file);
                    router.push(`/play?source=${encodeURIComponent(source)}`);
                } catch (t4) {
                    const error_0 = t4;
                    console.error("Failed to cache local ROM:", error_0);
                    alert(error_0 instanceof Error ? error_0.message : "Failed to cache local ROM");
                }
            }
        })["Home[handleFileDrop]"];
        $[4] = router;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleFileDrop = t3;
    let t4;
    if ($[6] !== router) {
        t4 = ({
            "Home[handleUrlSubmit]": async (e)=>{
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const url = formData.get("rom-url");
                if (!url?.trim()) {
                    alert("Please enter a URL");
                    return;
                }
                ;
                try {
                    const source_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRemoteRomSource"])(url);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2f$roms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRomNameFromSource"])(source_0);
                    form.reset();
                    router.push(`/play?source=${encodeURIComponent(source_0)}`);
                } catch (t5) {
                    const error_1 = t5;
                    console.error("Failed to load ROM from URL:", error_1);
                    alert(error_1 instanceof Error ? error_1.message : "Failed to download ROM");
                }
            }
        })["Home[handleUrlSubmit]"];
        $[6] = router;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleUrlSubmit = t4;
    let t5;
    if ($[8] !== router) {
        t5 = ({
            "Home[handleRepoSubmit]": (e_0)=>{
                e_0.preventDefault();
                const formData_0 = new FormData(e_0.currentTarget);
                const repoUrl = formData_0.get("repo-url");
                if (repoUrl?.trim()) {
                    router.push(`/list?url=${encodeURIComponent(repoUrl)}`);
                } else {
                    alert("Please enter a GitHub repository URL");
                }
            }
        })["Home[handleRepoSubmit]"];
        $[8] = router;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleRepoSubmit = t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Home[handleDragOver]": (e_1)=>{
                e_1.preventDefault();
                e_1.stopPropagation();
                setIsDragging(true);
            }
        })["Home[handleDragOver]"];
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleDragOver = t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Home[handleDragLeave]": (e_2)=>{
                e_2.preventDefault();
                e_2.stopPropagation();
                setIsDragging(false);
            }
        })["Home[handleDragLeave]"];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const handleDragLeave = t7;
    let t8;
    if ($[12] !== handleFileDrop) {
        t8 = ({
            "Home[handleDrop]": (e_3)=>{
                e_3.preventDefault();
                e_3.stopPropagation();
                setIsDragging(false);
                const files = e_3.dataTransfer.files;
                if (files.length > 0) {
                    handleFileDrop(files[0]);
                }
            }
        })["Home[handleDrop]"];
        $[12] = handleFileDrop;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const handleDrop = t8;
    let t9;
    if ($[14] !== handleFileDrop) {
        t9 = ({
            "Home[handleFileSelect]": (e_4)=>{
                const files_0 = e_4.target.files;
                if (files_0 && files_0.length > 0) {
                    handleFileDrop(files_0[0]);
                }
            }
        })["Home[handleFileSelect]"];
        $[14] = handleFileDrop;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const handleFileSelect = t9;
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none fixed inset-0 z-50 opacity-[0.02]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full",
                style: {
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.4) 1px, rgba(0,0,0,0.4) 2px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 195,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-amber-400 to-emerald-500 shadow-amber-500/10 shadow-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base",
                children: "🎮"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 204,
                columnNumber: 170
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "flex items-center gap-2 font-bold text-lg text-white tracking-tight md:text-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Hurmuzi"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 157
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-md border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono font-semibold text-[10px] text-cyan-400",
                                    children: "SNES"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 177
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 211,
                            columnNumber: 62
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-zinc-400",
                            children: "Browser emulator with 8-channel sound mixer"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 211,
                            columnNumber: 327
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 211,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== recentRoms || $[20] !== router) {
        t13 = recentRoms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden items-center gap-2 sm:flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-xs text-zinc-400",
                    children: "Quick play:"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 218,
                    columnNumber: 87
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    "aria-label": "Quick play a recent ROM",
                    defaultValue: "",
                    onChange: {
                        "Home[<select>.onChange]": (e_5)=>{
                            if (e_5.target.value) {
                                router.push(`/play?source=${encodeURIComponent(e_5.target.value)}`);
                            }
                        }
                    }["Home[<select>.onChange]"],
                    className: "max-w-[200px] truncate rounded-lg border border-white/10 bg-[#121226] px-2.5 py-1 text-xs text-zinc-200 transition-colors focus:border-cyan-400/50 focus:outline-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            disabled: true,
                            children: [
                                "Recent ROMs (",
                                recentRoms.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 224,
                            columnNumber: 215
                        }, this),
                        recentRoms.map(_HomeRecentRomsMap)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 218,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 218,
            columnNumber: 36
        }, this);
        $[19] = recentRoms;
        $[20] = router;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-40 w-full border-white/10 border-b bg-[#090918]/80 backdrop-blur-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between px-4 py-3 md:px-8",
                children: [
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 233,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-red-500/50 via-yellow-400/60 to-emerald-500/50"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "Home[<button>.onClick]": ()=>setActiveTab("upload")
        })["Home[<button>.onClick]"];
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    const t17 = `group relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 font-medium text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${activeTab === "upload" ? "border border-purple-400/30 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 font-semibold text-white shadow-inner" : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"}`;
    let t18;
    let t19;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "📂"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Drop / Browse File"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[26] = t18;
        $[27] = t19;
    } else {
        t18 = $[26];
        t19 = $[27];
    }
    let t20;
    if ($[28] !== t17) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t16,
            className: t17,
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[28] = t17;
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "Home[<button>.onClick]": ()=>setActiveTab("url")
        })["Home[<button>.onClick]"];
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    const t22 = `group relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 font-medium text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${activeTab === "url" ? "border border-cyan-400/30 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 font-semibold text-white shadow-inner" : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"}`;
    let t23;
    let t24;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "🌐"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Direct URL"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[31] = t23;
        $[32] = t24;
    } else {
        t23 = $[31];
        t24 = $[32];
    }
    let t25;
    if ($[33] !== t22) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t21,
            className: t22,
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[33] = t22;
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    let t26;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "Home[<button>.onClick]": ()=>setActiveTab("repo")
        })["Home[<button>.onClick]"];
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    const t27 = `group relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 font-medium text-xs tracking-tight transition-all duration-200 active:scale-[0.98] ${activeTab === "repo" ? "border border-emerald-400/30 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 font-semibold text-white shadow-inner" : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200"}`;
    let t28;
    let t29;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "📚"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "GitHub Repository"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[36] = t28;
        $[37] = t29;
    } else {
        t28 = $[36];
        t29 = $[37];
    }
    let t30;
    if ($[38] !== t27) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t26,
            className: t27,
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[38] = t27;
        $[39] = t30;
    } else {
        t30 = $[39];
    }
    let t31;
    if ($[40] !== t20 || $[41] !== t25 || $[42] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex border-white/10 border-b bg-[#0b0b18] p-1.5",
            children: [
                t20,
                t25,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[40] = t20;
        $[41] = t25;
        $[42] = t30;
        $[43] = t31;
    } else {
        t31 = $[43];
    }
    let t32;
    if ($[44] !== activeTab || $[45] !== handleDrop || $[46] !== handleFileSelect || $[47] !== isDragging) {
        t32 = activeTab === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "rom-file-input",
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                className: `group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 ${isDragging ? "border-yellow-400 bg-yellow-500/10 shadow-[0_0_30px_rgba(250,204,21,0.2)]" : "border-white/15 bg-[#121226]/50 hover:border-cyan-400/50 hover:bg-[#151530]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "rom-file-input",
                        type: "file",
                        accept: ".smc,.sfc,.fig,.swc,.bs,.st",
                        onChange: handleFileSelect,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 489
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-3xl shadow-lg transition-transform duration-200 ${isDragging ? "scale-110" : "group-hover:scale-105"}`,
                        children: isDragging ? "\uD83D\uDCE5" : "\uD83D\uDC7E"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 614
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-semibold text-base text-zinc-100 md:text-lg",
                        children: isDragging ? "Release to launch game!" : "Drag & drop your SNES ROM here"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 906
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-zinc-400",
                        children: [
                            "Supports",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium font-mono text-cyan-300",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emulator$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidRomExtensions"])()
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 345,
                                columnNumber: 1106
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 1051
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-200 active:scale-95 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 1542
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Choose ROM File"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 345,
                                    columnNumber: 1694
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 345,
                            columnNumber: 1218
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 1196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-4 font-mono text-[10px] text-zinc-500",
                        children: "🔒 Processed entirely in your browser — zero upload"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 1735
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 345,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 345,
            columnNumber: 37
        }, this);
        $[44] = activeTab;
        $[45] = handleDrop;
        $[46] = handleFileSelect;
        $[47] = isDragging;
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    let t33;
    if ($[49] !== activeTab || $[50] !== handleUrlSubmit) {
        t33 = activeTab === "url" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleUrlSubmit,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "rom-url-input",
                            className: "mb-1.5 block font-medium text-xs text-zinc-300",
                            children: "ROM URL (Direct or GitHub Raw Link)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 356,
                            columnNumber: 94
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2.5 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "rom-url-input",
                                    name: "rom-url",
                                    type: "url",
                                    defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEFAULT_ROM_URL,
                                    placeholder: "https://raw.githubusercontent.com/.../game.sfc",
                                    className: "flex-1 rounded-xl border border-white/10 bg-[#121228] px-4 py-2.5 font-mono text-xs text-zinc-200 placeholder-zinc-600 transition-colors focus:border-cyan-400/60 focus:bg-[#161632] focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 278
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 950
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Load Game"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 1170
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 1192
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 1102
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 660
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 356,
                            columnNumber: 227
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 356,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-[11px] text-zinc-500",
                    children: "💡 Works with direct HTTP/HTTPS links and GitHub raw URLs."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 356,
                    columnNumber: 1234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 356,
            columnNumber: 34
        }, this);
        $[49] = activeTab;
        $[50] = handleUrlSubmit;
        $[51] = t33;
    } else {
        t33 = $[51];
    }
    let t34;
    if ($[52] !== activeTab || $[53] !== handleRepoSubmit) {
        t34 = activeTab === "repo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleRepoSubmit,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "repo-url-input",
                            className: "mb-1.5 block font-medium text-xs text-zinc-300",
                            children: "GitHub Repository"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 365,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2.5 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "repo-url-input",
                                    name: "repo-url",
                                    type: "url",
                                    defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEFAULT_REPO_URL,
                                    placeholder: "https://github.com/user/snes-roms",
                                    className: "flex-1 rounded-xl border border-white/10 bg-[#121228] px-4 py-2.5 font-mono text-xs text-zinc-200 placeholder-zinc-600 transition-colors focus:border-emerald-400/60 focus:bg-[#161632] focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 263
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 font-semibold text-white text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-200 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 933
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Browse Library"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 1153
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 1180
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 1085
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 638
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 365,
                            columnNumber: 212
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 365,
                    columnNumber: 91
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-[11px] text-zinc-500",
                    children: "🗂️ Explore and filter through all compatible ROMs in any public GitHub repository."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 365,
                    columnNumber: 1222
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 365,
            columnNumber: 35
        }, this);
        $[52] = activeTab;
        $[53] = handleRepoSubmit;
        $[54] = t34;
    } else {
        t34 = $[54];
    }
    let t35;
    if ($[55] !== t32 || $[56] !== t33 || $[57] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 md:p-8",
            children: [
                t32,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[55] = t32;
        $[56] = t33;
        $[57] = t34;
        $[58] = t35;
    } else {
        t35 = $[58];
    }
    let t36;
    if ($[59] !== t31 || $[60] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f22]/90 shadow-2xl backdrop-blur-xl",
            children: [
                t15,
                t31,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, this);
        $[59] = t31;
        $[60] = t35;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    let t37;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3 rounded-xl border border-white/5 bg-[#0e0e20]/60 p-3.5 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-base text-red-400",
                    children: "🎵"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 393,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-xs text-zinc-200",
                            children: "8-Channel Mixer"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 393,
                            columnNumber: 253
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-[11px] text-zinc-500",
                            children: "Granular voice muting, soloing & music detection on SPC700."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 393,
                            columnNumber: 325
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 393,
                    columnNumber: 248
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[62] = t37;
    } else {
        t37 = $[62];
    }
    let t38;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3 rounded-xl border border-white/5 bg-[#0e0e20]/60 p-3.5 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 text-base",
                    children: "⚡"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 400,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-xs text-zinc-200",
                            children: "State Persistence"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 400,
                            columnNumber: 256
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-[11px] text-zinc-500",
                            children: "Audio preferences & game states automatically remembered."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 400,
                            columnNumber: 330
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 400,
                    columnNumber: 251
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[63] = t38;
    } else {
        t38 = $[63];
    }
    let t39;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
            children: [
                t37,
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3 rounded-xl border border-white/5 bg-[#0e0e20]/60 p-3.5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-base text-emerald-400",
                            children: "🔒"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 407,
                            columnNumber: 188
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-xs text-zinc-200",
                                    children: "100% Private"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 326
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-0.5 text-[11px] text-zinc-500",
                                    children: "Local execution with no external tracking or cloud storage."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 395
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 407,
                            columnNumber: 321
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 407,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[64] = t39;
    } else {
        t39 = $[64];
    }
    let t40;
    if ($[65] !== t36) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full flex-1 px-4 py-6 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-5xl",
                children: [
                    t36,
                    t39
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 414,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[65] = t36;
        $[66] = t40;
    } else {
        t40 = $[66];
    }
    let t41;
    if ($[67] !== t14 || $[68] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen flex-col bg-[#070712]",
            children: [
                t10,
                t14,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[67] = t14;
        $[68] = t40;
        $[69] = t41;
    } else {
        t41 = $[69];
    }
    return t41;
}
_s(Home, "6B5d4R27KFqyTwGkCmepbhU+fEM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
function _HomeRecentRomsMap(rom) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: rom.source,
        children: rom.name
    }, rom.source, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 432,
        columnNumber: 10
    }, this);
}
function _HomeUseEffectAnonymous(error) {
    return console.warn("Failed to list cached ROMs:", error);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
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
]);

//# sourceMappingURL=_1m127c2qn084_._.js.map