(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-progress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProgress",
    ()=>useProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const PROGRESS_KEY = 'eduplay-adventures-progress';
const initialProgress = {
    completedLessons: [],
    gameScores: {}
};
function useProgress() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProgress);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProgress.useEffect": ()=>{
            try {
                const savedProgress = window.localStorage.getItem(PROGRESS_KEY);
                if (savedProgress) {
                    setProgress(JSON.parse(savedProgress));
                }
            } catch (error) {
                console.error('Failed to load progress from localStorage', error);
            } finally{
                setIsLoaded(true);
            }
        }
    }["useProgress.useEffect"], []);
    const updateProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[updateProgress]": (newProgress)=>{
            setProgress({
                "useProgress.useCallback[updateProgress]": (prevProgress)=>{
                    const updated = {
                        ...prevProgress,
                        ...newProgress
                    };
                    try {
                        window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
                    } catch (error) {
                        console.error('Failed to save progress to localStorage', error);
                    }
                    return updated;
                }
            }["useProgress.useCallback[updateProgress]"]);
        }
    }["useProgress.useCallback[updateProgress]"], []);
    const clearProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[clearProgress]": ()=>{
            try {
                window.localStorage.removeItem(PROGRESS_KEY);
                setProgress(initialProgress);
            } catch (error) {
                console.error('Failed to clear progress from localStorage', error);
            }
        }
    }["useProgress.useCallback[clearProgress]"], []);
    const trackLessonCompletion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[trackLessonCompletion]": (lessonId)=>{
            if (progress.completedLessons.includes(lessonId)) return;
            updateProgress({
                completedLessons: [
                    ...progress.completedLessons,
                    lessonId
                ]
            });
        }
    }["useProgress.useCallback[trackLessonCompletion]"], [
        progress.completedLessons,
        updateProgress
    ]);
    const updateGameScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProgress.useCallback[updateGameScore]": (gameId, score)=>{
            const currentScores = progress.gameScores;
            if ((currentScores[gameId] || 0) < score) {
                updateProgress({
                    gameScores: {
                        ...currentScores,
                        [gameId]: score
                    }
                });
            }
        }
    }["useProgress.useCallback[updateGameScore]"], [
        progress.gameScores,
        updateProgress
    ]);
    return {
        progress,
        isLoaded,
        updateProgress,
        clearProgress,
        trackLessonCompletion,
        updateGameScore
    };
}
_s(useProgress, "RxOjAep/3pYzoLMKSEQlJJ9CH0o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-speech.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeech",
    ()=>useSpeech
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useSpeech() {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSupported, setIsSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const utteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const populateVoiceList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[populateVoiceList]": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis) {
                try {
                    const newVoices = window.speechSynthesis.getVoices();
                    if (newVoices.length > 0) {
                        setVoices(newVoices);
                    }
                } catch (error) {
                    console.error("Error loading speech synthesis voices:", error);
                }
            }
        }
    }["useSpeech.useCallback[populateVoiceList]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSpeech.useEffect": ()=>{
            // --- Speech Recognition Setup ---
            if ("TURBOPACK compile-time truthy", 1) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (SpeechRecognition) {
                    setIsSupported(true);
                    const recognition = new SpeechRecognition();
                    recognition.continuous = false;
                    recognition.lang = 'en-US';
                    recognition.interimResults = false;
                    recognition.onresult = ({
                        "useSpeech.useEffect": (event)=>{
                            const currentTranscript = event.results[0][0].transcript;
                            setTranscript(currentTranscript);
                            setIsListening(false);
                        }
                    })["useSpeech.useEffect"];
                    recognition.onerror = ({
                        "useSpeech.useEffect": (event)=>{
                            console.error('Speech recognition error', event.error);
                            setIsListening(false);
                        }
                    })["useSpeech.useEffect"];
                    recognition.onend = ({
                        "useSpeech.useEffect": ()=>{
                            setIsListening(false);
                        }
                    })["useSpeech.useEffect"];
                    recognitionRef.current = recognition;
                } else {
                    setIsSupported(false);
                }
            }
            // --- Speech Synthesis Setup ---
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis) {
                populateVoiceList();
                if (window.speechSynthesis.onvoiceschanged !== undefined) {
                    window.speechSynthesis.onvoiceschanged = populateVoiceList;
                }
            }
            // --- Audio Player and Synthesis Cleanup ---
            const cleanup = {
                "useSpeech.useEffect.cleanup": ()=>{
                    try {
                        if (audioRef.current) {
                            audioRef.current.pause();
                            audioRef.current.src = "";
                        }
                        if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis) {
                            window.speechSynthesis.cancel();
                        }
                    } catch (error) {
                        console.error("Error during cleanup:", error);
                    }
                }
            }["useSpeech.useEffect.cleanup"];
            return cleanup;
        }
    }["useSpeech.useEffect"], [
        populateVoiceList
    ]);
    const stopSpeaking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[stopSpeaking]": ()=>{
            try {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                    audioRef.current.src = "";
                }
                if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis) {
                    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
                        window.speechSynthesis.cancel();
                    }
                }
            } catch (error) {
                console.error("Error stopping speech:", error);
            } finally{
                setIsSpeaking(false);
            }
        }
    }["useSpeech.useCallback[stopSpeaking]"], []);
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[speak]": (text, audioDataUri, forceBrowserVoice = false)=>{
            if (!text || text.trim() === '') {
                return;
            }
            // Chrome: Initialize audio context on first user interaction
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis && !isInitializedRef.current) {
                try {
                    const unlockUtterance = new SpeechSynthesisUtterance('');
                    unlockUtterance.volume = 0;
                    window.speechSynthesis.speak(unlockUtterance);
                    window.speechSynthesis.cancel();
                    isInitializedRef.current = true;
                } catch (error) {
                    console.warn("Could not initialize audio context:", error);
                }
            }
            // Stop any audio playback first
            try {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                    audioRef.current.src = "";
                }
            } catch (error) {
                console.error("Error stopping audio:", error);
            }
            const speakBrowser = {
                "useSpeech.useCallback[speak].speakBrowser": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis && text) {
                        // Cancel any ongoing speech
                        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
                            window.speechSynthesis.cancel();
                        }
                        // Wait and create new utterance
                        setTimeout({
                            "useSpeech.useCallback[speak].speakBrowser": ()=>{
                                try {
                                    const utterance = new SpeechSynthesisUtterance(text);
                                    // Select a clear female voice
                                    let selectedVoice = voices.find({
                                        "useSpeech.useCallback[speak].speakBrowser.selectedVoice": (voice)=>(voice.name === 'Samantha' || voice.name === 'Karen') && voice.lang === 'en-US'
                                    }["useSpeech.useCallback[speak].speakBrowser.selectedVoice"]);
                                    // Fallback: Any female-sounding en-US local voice
                                    if (!selectedVoice) {
                                        selectedVoice = voices.find({
                                            "useSpeech.useCallback[speak].speakBrowser": (voice)=>voice.lang === 'en-US' && voice.localService && (voice.name.includes('female') || voice.name === 'Victoria' || voice.name === 'Allison')
                                        }["useSpeech.useCallback[speak].speakBrowser"]);
                                    }
                                    // Fallback: Any en-US local voice
                                    if (!selectedVoice) {
                                        selectedVoice = voices.find({
                                            "useSpeech.useCallback[speak].speakBrowser": (voice)=>voice.lang === 'en-US' && voice.localService
                                        }["useSpeech.useCallback[speak].speakBrowser"]);
                                    }
                                    // Fallback: Google voice
                                    if (!selectedVoice) {
                                        selectedVoice = voices.find({
                                            "useSpeech.useCallback[speak].speakBrowser": (voice)=>voice.name === 'Google US English'
                                        }["useSpeech.useCallback[speak].speakBrowser"]);
                                    }
                                    // Fallback: Any en-US voice
                                    if (!selectedVoice) {
                                        selectedVoice = voices.find({
                                            "useSpeech.useCallback[speak].speakBrowser": (voice)=>voice.lang === 'en-US'
                                        }["useSpeech.useCallback[speak].speakBrowser"]);
                                    }
                                    if (!selectedVoice && voices.length === 0) {
                                        setTimeout({
                                            "useSpeech.useCallback[speak].speakBrowser": ()=>speak(text, audioDataUri, forceBrowserVoice)
                                        }["useSpeech.useCallback[speak].speakBrowser"], 250);
                                        return;
                                    }
                                    utterance.voice = selectedVoice || null;
                                    utterance.lang = 'en-US';
                                    utterance.rate = 0.9;
                                    utterance.pitch = 1.0;
                                    utterance.volume = 1.0;
                                    utterance.onstart = ({
                                        "useSpeech.useCallback[speak].speakBrowser": ()=>{
                                            setIsSpeaking(true);
                                        }
                                    })["useSpeech.useCallback[speak].speakBrowser"];
                                    utterance.onend = ({
                                        "useSpeech.useCallback[speak].speakBrowser": ()=>{
                                            setIsSpeaking(false);
                                        }
                                    })["useSpeech.useCallback[speak].speakBrowser"];
                                    utterance.onerror = ({
                                        "useSpeech.useCallback[speak].speakBrowser": (e)=>{
                                            if (e.error === 'canceled' || e.error === 'interrupted') {
                                                setIsSpeaking(false);
                                                return;
                                            }
                                            console.error("Speech synthesis error:", e.error);
                                            setIsSpeaking(false);
                                            if (e.error === 'network' || e.error === 'synthesis-failed') {
                                                setTimeout({
                                                    "useSpeech.useCallback[speak].speakBrowser": ()=>{
                                                        try {
                                                            if (window.speechSynthesis) {
                                                                window.speechSynthesis.speak(utterance);
                                                            }
                                                        } catch (retryError) {
                                                            console.error("Retry failed:", retryError);
                                                        }
                                                    }
                                                }["useSpeech.useCallback[speak].speakBrowser"], 500);
                                            }
                                        }
                                    })["useSpeech.useCallback[speak].speakBrowser"];
                                    utteranceRef.current = utterance;
                                    // Chrome: Resume before speaking
                                    if (window.speechSynthesis.paused) {
                                        window.speechSynthesis.resume();
                                    }
                                    window.speechSynthesis.speak(utterance);
                                } catch (error) {
                                    console.error("Speech synthesis error:", error);
                                    setIsSpeaking(false);
                                }
                            }
                        }["useSpeech.useCallback[speak].speakBrowser"], 150);
                    } else {
                        setIsSpeaking(false);
                    }
                }
            }["useSpeech.useCallback[speak].speakBrowser"];
            // Execute
            try {
                if (forceBrowserVoice || !audioDataUri && text) {
                    speakBrowser();
                } else if (audioDataUri) {
                    if (!audioRef.current) {
                        audioRef.current = new Audio();
                    }
                    const audio = audioRef.current;
                    const onPlaying = {
                        "useSpeech.useCallback[speak].onPlaying": ()=>setIsSpeaking(true)
                    }["useSpeech.useCallback[speak].onPlaying"];
                    const onEnded = {
                        "useSpeech.useCallback[speak].onEnded": ()=>{
                            setIsSpeaking(false);
                            audio.removeEventListener('playing', onPlaying);
                            audio.removeEventListener('ended', onEnded);
                            audio.removeEventListener('pause', onEnded);
                            audio.removeEventListener('error', onError);
                        }
                    }["useSpeech.useCallback[speak].onEnded"];
                    const onError = {
                        "useSpeech.useCallback[speak].onError": ()=>{
                            console.error("Audio playback error, falling back to browser TTS.");
                            onEnded();
                            speakBrowser();
                        }
                    }["useSpeech.useCallback[speak].onError"];
                    audio.addEventListener('playing', onPlaying);
                    audio.addEventListener('ended', onEnded);
                    audio.addEventListener('pause', onEnded);
                    audio.addEventListener('error', onError);
                    try {
                        audio.src = audioDataUri;
                        audio.play().catch({
                            "useSpeech.useCallback[speak]": (error)=>{
                                console.error("Failed to play AI audio, falling back to browser TTS.", error);
                                onEnded();
                                speakBrowser();
                            }
                        }["useSpeech.useCallback[speak]"]);
                    } catch (error) {
                        console.error("Error setting audio source, falling back to browser TTS.", error);
                        onEnded();
                        speakBrowser();
                    }
                } else {
                    setIsSpeaking(false);
                }
            } catch (error) {
                console.error("Error in speak function:", error);
                setIsSpeaking(false);
            }
        }
    }["useSpeech.useCallback[speak]"], [
        voices
    ]);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[startListening]": ()=>{
            if (recognitionRef.current && !isListening) {
                setTranscript('');
                recognitionRef.current.start();
                setIsListening(true);
            }
        }
    }["useSpeech.useCallback[startListening]"], [
        isListening
    ]);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSpeech.useCallback[stopListening]": ()=>{
            if (recognitionRef.current && isListening) {
                recognitionRef.current.stop();
                setIsListening(false);
            }
        }
    }["useSpeech.useCallback[stopListening]"], [
        isListening
    ]);
    return {
        speak,
        startListening,
        stopListening,
        isListening,
        transcript,
        isSupported,
        setTranscript,
        isSpeaking,
        stopSpeaking
    };
}
_s(useSpeech, "Gu/v6a8FhZ5g0bid8ht2CDwEtHs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/level-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file defines the layout for the Alphabet Runner game level.
__turbopack_context__.s([
    "levelData",
    ()=>levelData
]);
const levelData = {
    // Platforms: id, x position, y position, width, height
    platforms: [
        // Ground
        {
            id: 1,
            x: 0,
            y: 560,
            width: 5000,
            height: 40
        },
        // First set of platforms
        {
            id: 2,
            x: 300,
            y: 450,
            width: 200,
            height: 20
        },
        {
            id: 3,
            x: 600,
            y: 380,
            width: 250,
            height: 20
        },
        {
            id: 4,
            x: 950,
            y: 300,
            width: 180,
            height: 20
        },
        // Second set
        {
            id: 5,
            x: 1200,
            y: 420,
            width: 200,
            height: 20
        },
        {
            id: 6,
            x: 1500,
            y: 350,
            width: 150,
            height: 20
        },
        {
            id: 7,
            x: 1750,
            y: 280,
            width: 250,
            height: 20
        },
        // Third Set
        {
            id: 8,
            x: 2100,
            y: 450,
            width: 300,
            height: 20
        },
        {
            id: 9,
            x: 2300,
            y: 350,
            width: 100,
            height: 20
        },
        {
            id: 10,
            x: 2500,
            y: 250,
            width: 200,
            height: 20
        },
        // Moving platform example (functionality not yet implemented in game loop)
        // { id: 11, x: 2800, y: 400, width: 150, height: 20, type: 'moving', range: 200 },
        {
            id: 11,
            x: 2800,
            y: 400,
            width: 150,
            height: 20
        },
        {
            id: 12,
            x: 3100,
            y: 320,
            width: 200,
            height: 20
        },
        {
            id: 13,
            x: 3400,
            y: 450,
            width: 150,
            height: 20
        },
        {
            id: 14,
            x: 3650,
            y: 380,
            width: 200,
            height: 20
        },
        {
            id: 15,
            x: 3950,
            y: 300,
            width: 250,
            height: 20
        },
        {
            id: 16,
            x: 4300,
            y: 420,
            width: 180,
            height: 20
        },
        {
            id: 17,
            x: 4600,
            y: 350,
            width: 200,
            height: 20
        }
    ],
    // Letters: id, character, x position, y position
    letters: [
        {
            id: 'L1',
            char: 'A',
            x: 350,
            y: 400
        },
        {
            id: 'L2',
            char: 'B',
            x: 650,
            y: 330
        },
        {
            id: 'L3',
            char: 'C',
            x: 1000,
            y: 250
        },
        {
            id: 'L4',
            char: 'D',
            x: 1250,
            y: 370
        },
        {
            id: 'L5',
            char: 'E',
            x: 1550,
            y: 300
        },
        {
            id: 'L6',
            char: 'F',
            x: 1800,
            y: 230
        },
        {
            id: 'L7',
            char: 'G',
            x: 2150,
            y: 400
        },
        {
            id: 'L8',
            char: 'H',
            x: 2325,
            y: 300
        },
        {
            id: 'L9',
            char: 'I',
            x: 2550,
            y: 200
        },
        {
            id: 'L10',
            char: 'J',
            x: 2850,
            y: 350
        },
        {
            id: 'L11',
            char: 'K',
            x: 3150,
            y: 270
        },
        {
            id: 'L12',
            char: 'L',
            x: 3450,
            y: 400
        },
        {
            id: 'L13',
            char: 'M',
            x: 3700,
            y: 330
        },
        {
            id: 'L14',
            char: 'N',
            x: 4000,
            y: 250
        },
        {
            id: 'L15',
            char: 'O',
            x: 4350,
            y: 370
        },
        {
            id: 'L16',
            char: 'P',
            x: 4650,
            y: 300
        },
        {
            id: 'L17',
            char: 'Q',
            x: 750,
            y: 500
        },
        {
            id: 'L18',
            char: 'R',
            x: 1300,
            y: 500
        },
        {
            id: 'L19',
            char: 'S',
            x: 1900,
            y: 500
        },
        {
            id: 'L20',
            char: 'T',
            x: 2600,
            y: 500
        },
        {
            id: 'L21',
            char: 'U',
            x: 3000,
            y: 500
        },
        {
            id: 'L22',
            char: 'V',
            x: 3500,
            y: 500
        },
        {
            id: 'L23',
            char: 'W',
            x: 3850,
            y: 500
        },
        {
            id: 'L24',
            char: 'X',
            x: 4200,
            y: 500
        },
        {
            id: 'L25',
            char: 'Y',
            x: 4500,
            y: 500
        },
        {
            id: 'L26',
            char: 'Z',
            x: 4800,
            y: 500
        }
    ],
    // Bombs: id, x position, y position
    bombs: [
        {
            id: 'B1',
            x: 500,
            y: 520
        },
        {
            id: 'B2',
            x: 1100,
            y: 520
        },
        {
            id: 'B3',
            x: 1650,
            y: 310
        },
        {
            id: 'B4',
            x: 2200,
            y: 410
        },
        {
            id: 'B5',
            x: 2900,
            y: 520
        },
        {
            id: 'B6',
            x: 3200,
            y: 280
        },
        {
            id: 'B7',
            x: 4100,
            y: 520
        },
        {
            id: 'B8',
            x: 4700,
            y: 310
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/games/alphabet-catcher/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlphabetRunnerGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-speech.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/school.js [app-client] (ecmascript) <export default as School>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bomb.js [app-client] (ecmascript) <export default as Bomb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/level-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$confetti$2f$dist$2f$react$2d$confetti$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-confetti/dist/react-confetti.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const GAME_ID = 'alphabet-runner';
// --- World & Camera ---
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const WORLD_WIDTH = 5000;
const CAMERA_LERP_FACTOR = 0.1;
// --- Player Physics ---
const GRAVITY = 0.8;
const JUMP_FORCE = -20;
const MAX_SPEED = 8;
const ACCELERATION = 0.8;
const FRICTION = 0.9;
const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 50;
const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
function AlphabetRunnerGame() {
    _s();
    const [player, setPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 200,
        y: SCREEN_HEIGHT - 100,
        vx: 0,
        vy: 0,
        onGround: false
    });
    const [cameraX, setCameraX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [collectedLetters, setCollectedLetters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [activeBombs, setActiveBombs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AlphabetRunnerGame.useState": ()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].bombs.map({
                "AlphabetRunnerGame.useState": (b)=>b.id
            }["AlphabetRunnerGame.useState"]))
    }["AlphabetRunnerGame.useState"]);
    const [hearts, setHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('start');
    const [justCollected, setJustCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const gameLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const keysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const { updateGameScore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"])();
    const { speak } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeech"])();
    const initializeGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AlphabetRunnerGame.useCallback[initializeGame]": ()=>{
            setPlayer({
                x: 200,
                y: SCREEN_HEIGHT - 100,
                vx: 0,
                vy: 0,
                onGround: false
            });
            setCameraX(0);
            setCollectedLetters(new Set());
            setActiveBombs(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].bombs.map({
                "AlphabetRunnerGame.useCallback[initializeGame]": (b)=>b.id
            }["AlphabetRunnerGame.useCallback[initializeGame]"])));
            setHearts(3);
            setGameState('playing');
            speak("Get ready to run and jump for letters!");
        }
    }["AlphabetRunnerGame.useCallback[initializeGame]"], [
        speak
    ]);
    const gameLoop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AlphabetRunnerGame.useCallback[gameLoop]": ()=>{
            setPlayer({
                "AlphabetRunnerGame.useCallback[gameLoop]": (p)=>{
                    let newVx = p.vx;
                    if (keysRef.current['ArrowLeft']) newVx -= ACCELERATION;
                    if (keysRef.current['ArrowRight']) newVx += ACCELERATION;
                    newVx *= FRICTION;
                    if (Math.abs(newVx) > MAX_SPEED) newVx = Math.sign(newVx) * MAX_SPEED;
                    let newVy = p.vy + GRAVITY;
                    let newX = p.x + newVx;
                    let newY = p.y + newVy;
                    let newOnGround = false;
                    // World boundaries
                    if (newX < 0) newX = 0;
                    if (newX + PLAYER_WIDTH > WORLD_WIDTH) newX = WORLD_WIDTH - PLAYER_WIDTH;
                    // Platform collision
                    for (const platform of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].platforms){
                        if (newX + PLAYER_WIDTH > platform.x && newX < platform.x + platform.width && p.y + PLAYER_HEIGHT <= platform.y && newY + PLAYER_HEIGHT >= platform.y) {
                            newVy = 0;
                            newY = platform.y - PLAYER_HEIGHT;
                            newOnGround = true;
                            break;
                        }
                    }
                    return {
                        x: newX,
                        y: newY,
                        vx: newVx,
                        vy: newVy,
                        onGround: newOnGround
                    };
                }
            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
            // Update Camera
            setCameraX({
                "AlphabetRunnerGame.useCallback[gameLoop]": (prevCamX)=>{
                    const targetCamX = player.x - SCREEN_WIDTH / 2;
                    const newCamX = prevCamX + (targetCamX - prevCamX) * CAMERA_LERP_FACTOR;
                    return Math.max(0, Math.min(WORLD_WIDTH - SCREEN_WIDTH, newCamX));
                }
            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
            // Collision with letters
            const playerRect = {
                x: player.x,
                y: player.y,
                width: PLAYER_WIDTH,
                height: PLAYER_HEIGHT
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].letters.forEach({
                "AlphabetRunnerGame.useCallback[gameLoop]": (letter)=>{
                    if (!collectedLetters.has(letter.char)) {
                        const letterRect = {
                            x: letter.x,
                            y: letter.y,
                            width: 40,
                            height: 40
                        };
                        if (playerRect.x < letterRect.x + letterRect.width && playerRect.x + playerRect.width > letterRect.x && playerRect.y < letterRect.y + letterRect.height && playerRect.y + playerRect.height > letterRect.y) {
                            setCollectedLetters({
                                "AlphabetRunnerGame.useCallback[gameLoop]": (prevSet)=>new Set(prevSet).add(letter.char)
                            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
                            setJustCollected(letter.char);
                            setTimeout({
                                "AlphabetRunnerGame.useCallback[gameLoop]": ()=>setJustCollected(null)
                            }["AlphabetRunnerGame.useCallback[gameLoop]"], 500);
                            speak(letter.char);
                        }
                    }
                }
            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
            // Collision with bombs
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].bombs.forEach({
                "AlphabetRunnerGame.useCallback[gameLoop]": (bomb)=>{
                    if (activeBombs.has(bomb.id)) {
                        const bombRect = {
                            x: bomb.x,
                            y: bomb.y,
                            width: 30,
                            height: 30
                        };
                        if (playerRect.x < bombRect.x + bombRect.width && playerRect.x + playerRect.width > bombRect.x && playerRect.y < bombRect.y + bombRect.height && playerRect.y + playerRect.height > bombRect.y) {
                            setActiveBombs({
                                "AlphabetRunnerGame.useCallback[gameLoop]": (prev)=>{
                                    const newSet = new Set(prev);
                                    newSet.delete(bomb.id);
                                    return newSet;
                                }
                            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
                            setHearts({
                                "AlphabetRunnerGame.useCallback[gameLoop]": (h)=>Math.max(0, h - 1)
                            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
                            speak("Ouch");
                        }
                    }
                }
            }["AlphabetRunnerGame.useCallback[gameLoop]"]);
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        }
    }["AlphabetRunnerGame.useCallback[gameLoop]"], [
        player.x,
        player.y,
        collectedLetters,
        activeBombs,
        speak
    ]);
    const jump = ()=>{
        if (gameState === 'playing' && player.onGround) {
            setPlayer((p)=>({
                    ...p,
                    vy: JUMP_FORCE,
                    onGround: false
                }));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlphabetRunnerGame.useEffect": ()=>{
            const handleKeyDown = {
                "AlphabetRunnerGame.useEffect.handleKeyDown": (e)=>{
                    keysRef.current[e.key] = true;
                    if (e.key === 'ArrowUp' || e.key === ' ') {
                        e.preventDefault();
                        jump();
                    }
                }
            }["AlphabetRunnerGame.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "AlphabetRunnerGame.useEffect.handleKeyUp": (e)=>{
                    keysRef.current[e.key] = false;
                }
            }["AlphabetRunnerGame.useEffect.handleKeyUp"];
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return ({
                "AlphabetRunnerGame.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('keyup', handleKeyUp);
                }
            })["AlphabetRunnerGame.useEffect"];
        }
    }["AlphabetRunnerGame.useEffect"], [
        gameState,
        player.onGround
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlphabetRunnerGame.useEffect": ()=>{
            if (gameState === 'playing') {
                gameLoopRef.current = requestAnimationFrame(gameLoop);
                return ({
                    "AlphabetRunnerGame.useEffect": ()=>{
                        if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
                    }
                })["AlphabetRunnerGame.useEffect"];
            }
        }
    }["AlphabetRunnerGame.useEffect"], [
        gameState,
        gameLoop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlphabetRunnerGame.useEffect": ()=>{
            if (collectedLetters.size === allLetters.length) {
                setGameState('won');
            }
            if (hearts === 0) {
                setGameState('over');
            }
        }
    }["AlphabetRunnerGame.useEffect"], [
        collectedLetters,
        hearts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlphabetRunnerGame.useEffect": ()=>{
            if (gameState === 'over' || gameState === 'won') {
                if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
                const score = collectedLetters.size * 10;
                updateGameScore(GAME_ID, score);
                if (gameState === 'won') {
                    speak(`You collected all the letters! Amazing! Your score is ${score}`);
                } else {
                    speak(`Game over! Try again! Your score is ${score}`);
                }
            }
        }
    }["AlphabetRunnerGame.useEffect"], [
        gameState,
        collectedLetters.size,
        updateGameScore,
        speak
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center flex-grow p-4",
        children: [
            gameState === 'won' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$confetti$2f$dist$2f$react$2d$confetti$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                recycle: false,
                numberOfPieces: 200
            }, void 0, false, {
                fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                lineNumber: 217,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-4xl p-4 shadow-2xl bg-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-4xl font-bold font-headline text-primary",
                            children: "Alphabet Runner"
                        }, void 0, false, {
                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                            lineNumber: 220,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-slate-200 rounded-md p-2 flex flex-wrap gap-x-1.5 gap-y-1 justify-center",
                            children: allLetters.map((l)=>{
                                const isCollected = collectedLetters.has(l);
                                const isJustCollected = justCollected === l;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-bold text-slate-400 transition-all duration-300", isCollected && "text-yellow-500 font-extrabold"),
                                    animate: isJustCollected ? {
                                        scale: [
                                            1,
                                            1.5,
                                            1
                                        ],
                                        y: [
                                            0,
                                            -5,
                                            0
                                        ]
                                    } : {},
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: l
                                }, l, false, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 25
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-between items-center text-lg font-bold px-2 mt-2 text-slate-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: Array.from({
                                        length: 3
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", i < hearts ? 'text-red-500 fill-current' : 'text-slate-300')
                                        }, i, false, {
                                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Collected: ",
                                        collectedLetters.size,
                                        " / ",
                                        allLetters.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                            lineNumber: 241,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden w-full rounded-lg bg-gradient-to-b from-blue-300 to-blue-500",
                            style: {
                                width: SCREEN_WIDTH,
                                height: SCREEN_HEIGHT
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: [
                                        gameState === 'start' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            className: "absolute inset-0 bg-black/70 z-20 flex flex-col items-center justify-center gap-4 text-center p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-5xl font-bold text-white font-headline",
                                                    children: "Alphabet Runner"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-xl",
                                                    children: "Use Left/Right arrow keys to run and Up arrow to jump."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-yellow-300",
                                                    children: "Collect all 26 letters!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: initializeGame,
                                                    size: "lg",
                                                    className: "mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold",
                                                    children: "Start Game"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 21
                                        }, this),
                                        (gameState === 'over' || gameState === 'won') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            className: "absolute inset-0 bg-black/70 z-20 flex flex-col items-center justify-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-24 h-24", gameState === 'won' ? "text-yellow-400" : "text-gray-500"),
                                                    fill: gameState === 'won' ? 'currentColor' : 'none'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-5xl font-bold text-white font-headline",
                                                    children: gameState === 'won' ? "You Won!" : "Game Over!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-3xl text-white",
                                                    children: [
                                                        "You collected ",
                                                        collectedLetters.size,
                                                        " letters!"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: initializeGame,
                                                    className: "mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold",
                                                    children: "Play Again"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute top-0 left-0",
                                    animate: {
                                        x: -cameraX
                                    },
                                    transition: {
                                        type: 'tween',
                                        ease: 'linear',
                                        duration: 0.1
                                    },
                                    style: {
                                        width: WORLD_WIDTH,
                                        height: SCREEN_HEIGHT
                                    },
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].platforms.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bg-green-600 border-b-8 border-green-800 rounded",
                                                style: {
                                                    left: p.x,
                                                    top: p.y,
                                                    width: p.width,
                                                    height: p.height
                                                }
                                            }, p.id, false, {
                                                fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 21
                                            }, this)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].letters.map((obj)=>!collectedLetters.has(obj.char) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute text-4xl font-bold flex items-center justify-center text-yellow-300 drop-shadow-md",
                                                style: {
                                                    x: obj.x,
                                                    y: obj.y,
                                                    width: 40,
                                                    height: 40
                                                },
                                                initial: {
                                                    scale: 1
                                                },
                                                animate: {
                                                    y: [
                                                        obj.y,
                                                        obj.y - 10,
                                                        obj.y
                                                    ],
                                                    transition: {
                                                        repeat: Infinity,
                                                        duration: 1.5
                                                    }
                                                },
                                                children: [
                                                    obj.char,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "absolute w-12 h-12 text-yellow-200/50 -z-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, obj.id, true, {
                                                fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 21
                                            }, this)),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$level$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelData"].bombs.map((bomb)=>activeBombs.has(bomb.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute",
                                                style: {
                                                    left: bomb.x,
                                                    top: bomb.y
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__["Bomb"], {
                                                    className: "w-8 h-8 text-slate-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 25
                                                }, this)
                                            }, bomb.id, false, {
                                                fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this)),
                                        gameState === 'playing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute",
                                            style: {
                                                width: PLAYER_WIDTH,
                                                height: PLAYER_HEIGHT,
                                                left: player.x,
                                                top: player.y
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
                                                className: "w-full h-full text-yellow-400 drop-shadow-lg",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        gameState === 'playing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-between items-center mt-4 px-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onMouseDown: ()=>keysRef.current['ArrowLeft'] = true,
                                    onMouseUp: ()=>keysRef.current['ArrowLeft'] = false,
                                    onMouseLeave: ()=>keysRef.current['ArrowLeft'] = false,
                                    size: "lg",
                                    className: "w-32 h-16 text-2xl font-bold",
                                    children: '⬅️'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: jump,
                                    size: "lg",
                                    className: "w-32 h-16 text-2xl font-bold",
                                    children: '⬆️'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onMouseDown: ()=>keysRef.current['ArrowRight'] = true,
                                    onMouseUp: ()=>keysRef.current['ArrowRight'] = false,
                                    onMouseLeave: ()=>keysRef.current['ArrowRight'] = false,
                                    size: "lg",
                                    className: "w-32 h-16 text-2xl font-bold",
                                    children: '➡️'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/games/alphabet-catcher/page.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s(AlphabetRunnerGame, "xd29O4jNeRONBxVtq3/znzk1V1Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProgress"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$speech$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpeech"]
    ];
});
_c = AlphabetRunnerGame;
var _c;
__turbopack_context__.k.register(_c, "AlphabetRunnerGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_98faa84e._.js.map