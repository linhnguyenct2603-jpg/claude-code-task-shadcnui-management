(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/navigation-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationMenu",
    ()=>NavigationMenu,
    "NavigationMenuContent",
    ()=>NavigationMenuContent,
    "NavigationMenuIndicator",
    ()=>NavigationMenuIndicator,
    "NavigationMenuItem",
    ()=>NavigationMenuItem,
    "NavigationMenuLink",
    ()=>NavigationMenuLink,
    "NavigationMenuList",
    ()=>NavigationMenuList,
    "NavigationMenuTrigger",
    ()=>NavigationMenuTrigger,
    "NavigationMenuViewport",
    ()=>NavigationMenuViewport,
    "navigationMenuTriggerStyle",
    ()=>navigationMenuTriggerStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
function NavigationMenu({ className, children, viewport = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "navigation-menu",
        "data-viewport": viewport,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
        ...props,
        children: [
            children,
            viewport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuViewport, {}, void 0, false, {
                fileName: "[project]/src/components/ui/navigation-menu.tsx",
                lineNumber: 27,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = NavigationMenu;
function NavigationMenuList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "navigation-menu-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-1 list-none items-center justify-center gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = NavigationMenuList;
function NavigationMenuItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "navigation-menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c2 = NavigationMenuItem;
const navigationMenuTriggerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function NavigationMenuTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "navigation-menu-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(navigationMenuTriggerStyle(), "group", className),
        ...props,
        children: [
            children,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/navigation-menu.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c3 = NavigationMenuTrigger;
function NavigationMenuContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "navigation-menu-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c4 = NavigationMenuContent;
function NavigationMenuViewport({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-full left-0 isolate z-50 flex justify-center"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
            "data-slot": "navigation-menu-viewport",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/navigation-menu.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c5 = NavigationMenuViewport;
function NavigationMenuLink({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
        "data-slot": "navigation-menu-link",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c6 = NavigationMenuLink;
function NavigationMenuIndicator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
        "data-slot": "navigation-menu-indicator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/navigation-menu.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/navigation-menu.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c7 = NavigationMenuIndicator;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "NavigationMenu");
__turbopack_context__.k.register(_c1, "NavigationMenuList");
__turbopack_context__.k.register(_c2, "NavigationMenuItem");
__turbopack_context__.k.register(_c3, "NavigationMenuTrigger");
__turbopack_context__.k.register(_c4, "NavigationMenuContent");
__turbopack_context__.k.register(_c5, "NavigationMenuViewport");
__turbopack_context__.k.register(_c6, "NavigationMenuLink");
__turbopack_context__.k.register(_c7, "NavigationMenuIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/collapsible.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)");
;
;
function Collapsible({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "collapsible",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/collapsible.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Collapsible;
function CollapsibleTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
        "data-slot": "collapsible-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/collapsible.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c1 = CollapsibleTrigger;
function CollapsibleContent({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
        "data-slot": "collapsible-content",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/collapsible.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c2 = CollapsibleContent;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Collapsible");
__turbopack_context__.k.register(_c1, "CollapsibleTrigger");
__turbopack_context__.k.register(_c2, "CollapsibleContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Logo({ size = 24, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26 24.75C26.4142 24.75 26.75 24.4142 26.75 24C26.75 23.5858 26.4142 23.25 26 23.25V24.75ZM26 23.25H11V24.75H26V23.25ZM8.75 21V15H7.25V21H8.75ZM11 23.25C9.75736 23.25 8.75 22.2426 8.75 21H7.25C7.25 23.0711 8.92893 24.75 11 24.75V23.25Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4C0.75 4.41421 1.08579 4.75 1.5 4.75V3.25ZM1.5 4.75H6V3.25H1.5V4.75ZM7.25 6V21H8.75V6H7.25ZM6 4.75C6.69036 4.75 7.25 5.30964 7.25 6H8.75C8.75 4.48122 7.51878 3.25 6 3.25V4.75Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 21.75C22.4142 21.75 22.75 21.4142 22.75 21C22.75 20.5858 22.4142 20.25 22 20.25V21.75ZM22 20.25H11V21.75H22V20.25ZM8.75 18V12H7.25V18H8.75ZM11 20.25C9.75736 20.25 8.75 19.2426 8.75 18H7.25C7.25 20.0711 8.92893 21.75 11 21.75V20.25Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M27.2057 19.754C27.0654 20.1438 26.6357 20.346 26.246 20.2057C25.8562 20.0654 25.654 19.6357 25.7943 19.246L27.2057 19.754ZM30.0361 9.67744L29.3305 9.4234L29.3305 9.4234L30.0361 9.67744ZM25.7943 19.246L29.3305 9.4234L30.7418 9.93148L27.2057 19.754L25.7943 19.246ZM28.1543 7.75L8 7.75V6.25L28.1543 6.25V7.75ZM29.3305 9.4234C29.6237 8.60882 29.0201 7.75 28.1543 7.75V6.25C30.059 6.25 31.3869 8.13941 30.7418 9.93148L29.3305 9.4234Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.5 21.75C13.0858 21.75 12.75 21.4142 12.75 21C12.75 20.5858 13.0858 20.25 13.5 20.25V21.75ZM26.7111 19.009L27.4174 19.2613L27.4174 19.2613L26.7111 19.009ZM13.5 20.25H23.8858V21.75H13.5V20.25ZM26.0048 18.7568L27.7937 13.7477L29.2063 14.2523L27.4174 19.2613L26.0048 18.7568ZM23.8858 20.25C24.8367 20.25 25.6849 19.6522 26.0048 18.7568L27.4174 19.2613C26.8843 20.7537 25.4706 21.75 23.8858 21.75V20.25Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.1694 10.5806L14.5651 17.1849",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.1694 14.5806L18.5632 18.1868",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13.1",
                cy: "26.1",
                r: "1.7",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "22.1",
                cy: "26.1",
                r: "1.7",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/logo.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/logo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/landing/mega-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegaMenu",
    ()=>MegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
"use client";
;
;
const menuSections = [
    {
        title: 'Browse Products',
        items: [
            {
                title: 'Free Blocks',
                description: 'Essential UI components and sections',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                href: '#free-blocks'
            },
            {
                title: 'Premium Templates',
                description: 'Complete page templates and layouts',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
                href: '#premium-templates'
            },
            {
                title: 'Admin Dashboards',
                description: 'Full-featured dashboard solutions',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                href: '#admin-dashboards'
            },
            {
                title: 'Landing Pages',
                description: 'Marketing and product landing templates',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"],
                href: '#landing-pages'
            }
        ]
    },
    {
        title: 'Categories',
        items: [
            {
                title: 'E-commerce',
                description: 'Online store admin panels and components',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                href: '#ecommerce'
            },
            {
                title: 'SaaS Dashboards',
                description: 'Application admin interfaces',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
                href: '#saas-dashboards'
            },
            {
                title: 'Analytics',
                description: 'Data visualization and reporting templates',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                href: '#analytics'
            },
            {
                title: 'Authentication',
                description: 'Login, signup, and user management pages',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                href: '#authentication'
            }
        ]
    },
    {
        title: 'Resources',
        items: [
            {
                title: 'Documentation',
                description: 'Integration guides and setup instructions',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
                href: '#docs'
            },
            {
                title: 'Component Showcase',
                description: 'Interactive preview of all components',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
                href: '#showcase'
            },
            {
                title: 'GitHub Repository',
                description: 'Open source foundation and community',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                href: '#github'
            },
            {
                title: 'Design System',
                description: 'shadcn/ui standards and customization',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                href: '#design-system'
            }
        ]
    }
];
function MegaMenu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[700px] max-w-[95vw] p-4 sm:p-6 lg:p-8 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12",
            children: menuSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 lg:space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-muted-foreground uppercase tracking-wide",
                            children: section.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/mega-menu.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 lg:space-y-4",
                            children: section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "group block space-y-1 lg:space-y-2 hover:bg-accent rounded-md p-2 lg:p-3 -mx-2 lg:-mx-3 transition-colors my-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 lg:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/mega-menu.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/landing/mega-menu.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/landing/mega-menu.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground leading-relaxed ml-6 lg:ml-7",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/landing/mega-menu.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.title, true, {
                                    fileName: "[project]/src/components/landing/mega-menu.tsx",
                                    lineNumber: 121,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/mega-menu.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    ]
                }, section.title, true, {
                    fileName: "[project]/src/components/landing/mega-menu.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/landing/mega-menu.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/landing/mega-menu.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c = MegaMenu;
var _c;
__turbopack_context__.k.register(_c, "MegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$theme$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/theme-context.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTheme = ()=>{
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$theme$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProviderContext"]);
    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-circular-transition.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCircularTransition",
    ()=>useCircularTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useCircularTransition() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isTransitioningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCircularTransition.useCallback[startTransition]": (coords, callback)=>{
            if (isTransitioningRef.current) return;
            isTransitioningRef.current = true;
            // Set CSS variables for the circular reveal animation - exactly like tweakcn
            const x = coords.x / window.innerWidth * 100;
            const y = coords.y / window.innerHeight * 100;
            // Set the CSS variables on document element
            document.documentElement.style.setProperty('--x', `${x}%`);
            document.documentElement.style.setProperty('--y', `${y}%`);
            // Check if View Transitions API is supported
            if ('startViewTransition' in document) {
                const transition = document.startViewTransition({
                    "useCircularTransition.useCallback[startTransition].transition": ()=>{
                        callback();
                    }
                }["useCircularTransition.useCallback[startTransition].transition"]);
                transition.finished.finally({
                    "useCircularTransition.useCallback[startTransition]": ()=>{
                        isTransitioningRef.current = false;
                    }
                }["useCircularTransition.useCallback[startTransition]"]);
            } else {
                // Fallback for browsers without View Transitions API
                callback();
                setTimeout({
                    "useCircularTransition.useCallback[startTransition]": ()=>{
                        isTransitioningRef.current = false;
                    }
                }["useCircularTransition.useCallback[startTransition]"], 400);
            }
        }
    }["useCircularTransition.useCallback[startTransition]"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCircularTransition.useCallback[toggleTheme]": (event)=>{
            // Get precise click coordinates - use clientX/clientY directly like tweakcn
            const coords = {
                x: event.clientX,
                y: event.clientY
            };
            startTransition(coords, {
                "useCircularTransition.useCallback[toggleTheme]": ()=>{
                    setTheme(theme === "dark" ? "light" : "dark");
                }
            }["useCircularTransition.useCallback[toggleTheme]"]);
        }
    }["useCircularTransition.useCallback[toggleTheme]"], [
        theme,
        setTheme,
        startTransition
    ]);
    const isTransitioning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCircularTransition.useCallback[isTransitioning]": ()=>{
            return isTransitioningRef.current;
        }
    }["useCircularTransition.useCallback[isTransitioning]"], []);
    return {
        startTransition,
        toggleTheme,
        isTransitioning
    };
}
_s(useCircularTransition, "F2hH7a1guUmL2sDE7Jr8lWz6GNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/mode-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeToggle",
    ()=>ModeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$circular$2d$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-circular-transition.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ModeToggle({ variant = "outline" }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$circular$2d$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCircularTransition"])();
    // Simple, reliable dark mode detection with re-sync
    const [isDarkMode, setIsDarkMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ModeToggle.useEffect": ()=>{
            const updateMode = {
                "ModeToggle.useEffect.updateMode": ()=>{
                    if (theme === "dark") {
                        setIsDarkMode(true);
                    } else if (theme === "light") {
                        setIsDarkMode(false);
                    } else {
                        setIsDarkMode(("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
                    }
                }
            }["ModeToggle.useEffect.updateMode"];
            updateMode();
            // Listen for system theme changes
            const mediaQuery = ("TURBOPACK compile-time truthy", 1) ? window.matchMedia("(prefers-color-scheme: dark)") : "TURBOPACK unreachable";
            if (mediaQuery) {
                mediaQuery.addEventListener("change", updateMode);
            }
            return ({
                "ModeToggle.useEffect": ()=>{
                    if (mediaQuery) {
                        mediaQuery.removeEventListener("change", updateMode);
                    }
                }
            })["ModeToggle.useEffect"];
        }
    }["ModeToggle.useEffect"], [
        theme
    ]);
    const handleToggle = (event)=>{
        toggleTheme(event);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: variant,
        size: "icon",
        onClick: handleToggle,
        className: "cursor-pointer mode-toggle-button relative overflow-hidden",
        children: [
            isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100"
            }, void 0, false, {
                fileName: "[project]/src/components/mode-toggle.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100"
            }, void 0, false, {
                fileName: "[project]/src/components/mode-toggle.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: [
                    "Switch to ",
                    isDarkMode ? "light" : "dark",
                    " mode"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mode-toggle.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mode-toggle.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ModeToggle, "x73PALRAi3ogixr7TdtjeF1Ry4s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$circular$2d$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCircularTransition"]
    ];
});
_c = ModeToggle;
var _c;
__turbopack_context__.k.register(_c, "ModeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingNavbar",
    ()=>LandingNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/navigation-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/collapsible.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2f$mega$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/landing/mega-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mode-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme.ts [app-client] (ecmascript)");
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
;
const navigationItems = [
    {
        name: "Home",
        href: "#hero"
    },
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "Solutions",
        href: "#features",
        hasMegaMenu: true
    },
    {
        name: "Team",
        href: "#team"
    },
    {
        name: "Pricing",
        href: "#pricing"
    },
    {
        name: "FAQ",
        href: "#faq"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
// Solutions menu items for mobile
const solutionsItems = [
    {
        title: "Browse Products"
    },
    {
        name: "Free Blocks",
        href: "#free-blocks"
    },
    {
        name: "Premium Templates",
        href: "#premium-templates"
    },
    {
        name: "Admin Dashboards",
        href: "#admin-dashboards"
    },
    {
        name: "Landing Pages",
        href: "#landing-pages"
    },
    {
        title: "Categories"
    },
    {
        name: "E-commerce",
        href: "#ecommerce"
    },
    {
        name: "SaaS Dashboards",
        href: "#saas-dashboards"
    },
    {
        name: "Analytics",
        href: "#analytics"
    },
    {
        name: "Authentication",
        href: "#authentication"
    },
    {
        title: "Resources"
    },
    {
        name: "Documentation",
        href: "#docs"
    },
    {
        name: "Component Showcase",
        href: "#showcase"
    },
    {
        name: "GitHub Repository",
        href: "#github"
    },
    {
        name: "Design System",
        href: "#design-system"
    }
];
// Smooth scroll function
const smoothScrollTo = (targetId)=>{
    if (targetId.startsWith("#")) {
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
};
function LandingNavbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solutionsOpen, setSolutionsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setTheme, theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://ngothanhtung.com",
                        className: "flex items-center space-x-2 cursor-pointer",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Claude Code"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenu"], {
                    className: "hidden xl:flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuList"], {
                        children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
                                children: item.hasMegaMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuTrigger"], {
                                            className: "bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary cursor-pointer",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$landing$2f$mega$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MegaMenu"], {}, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                lineNumber: 114,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$navigation$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationMenuLink"], {
                                    className: "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none cursor-pointer",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        if (item.href.startsWith("#")) {
                                            smoothScrollTo(item.href);
                                        } else {
                                            window.location.href = item.href;
                                        }
                                    },
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 19
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden xl:flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeToggle"], {
                            variant: "ghost"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            asChild: true,
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "GitHub Repository",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            asChild: true,
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    "Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            asChild: true,
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/sign-in",
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            asChild: true,
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/sign-up",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                    open: isOpen,
                    onOpenChange: setIsOpen,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                            asChild: true,
                            className: "xl:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Toggle menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                            side: "right",
                            className: "w-full sm:w-[400px] p-0 gap-0 [&>button]:hidden overflow-hidden flex flex-col",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                        className: "space-y-0 p-4 pb-2 border-b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-primary/10 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                    className: "text-lg font-semibold",
                                                    children: "Claude Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-auto flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                                                            className: "cursor-pointer h-8 w-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                                    className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                                    className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            asChild: true,
                                                            className: "cursor-pointer h-8 w-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                "aria-label": "GitHub Repository",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: ()=>setIsOpen(false),
                                                            className: "cursor-pointer h-8 w-8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "p-6 space-y-1",
                                            children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: item.hasMegaMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
                                                        open: solutionsOpen,
                                                        onOpenChange: setSolutionsOpen,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                                                                className: "flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
                                                                children: [
                                                                    item.name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        className: `h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                                                                className: "pl-4 space-y-1",
                                                                children: solutionsItems.map((solution, index)=>solution.title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-4 mt-5 py-2 text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider",
                                                                        children: solution.title
                                                                    }, `title-${index}`, false, {
                                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 33
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: solution.href,
                                                                        className: "flex items-center px-4 py-2 text-sm rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
                                                                        onClick: (e)=>{
                                                                            setIsOpen(false);
                                                                            if (solution.href?.startsWith("#")) {
                                                                                e.preventDefault();
                                                                                setTimeout(()=>smoothScrollTo(solution.href), 100);
                                                                            }
                                                                        },
                                                                        children: solution.name
                                                                    }, solution.name, false, {
                                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: item.href,
                                                        className: "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
                                                        onClick: (e)=>{
                                                            setIsOpen(false);
                                                            if (item.href.startsWith("#")) {
                                                                e.preventDefault();
                                                                setTimeout(()=>smoothScrollTo(item.href), 100);
                                                            }
                                                        },
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 25
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t p-6 space-y-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "lg",
                                                    asChild: true,
                                                    className: "w-full cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                                className: "size-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Dashboard"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "lg",
                                                            asChild: true,
                                                            className: "cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/sign-in",
                                                                children: "Sign In"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            asChild: true,
                                                            size: "lg",
                                                            className: "cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/sign-up",
                                                                children: "Get Started"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/navbar.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/navbar.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/navbar.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/navbar.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/navbar.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/navbar.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(LandingNavbar, "SRx9kJcuHlLmY4FNNrndvFSIyL8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = LandingNavbar;
var _c;
__turbopack_context__.k.register(_c, "LandingNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dot-pattern.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotPattern",
    ()=>DotPattern,
    "DotPatternDark",
    ()=>DotPatternDark,
    "DotPatternLight",
    ()=>DotPatternLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function DotPattern({ className, size = "md", opacity = "medium", fadeStyle = "ellipse" }) {
    // Use predefined Tailwind classes instead of template literals for Next.js compatibility
    const sizeMap = {
        sm: "[background-size:12px_12px]",
        md: "[background-size:16px_16px]",
        lg: "[background-size:20px_20px]"
    };
    const opacityMap = {
        low: "opacity-30",
        medium: "opacity-50",
        high: "opacity-70"
    };
    const fadeMap = {
        ellipse: "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]",
        circle: "[mask-image:radial-gradient(circle_at_50%_50%,#000_70%,transparent_100%)]",
        none: ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]", sizeMap[size], fadeMap[fadeStyle], opacityMap[opacity], className)
    }, void 0, false, {
        fileName: "[project]/src/components/dot-pattern.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = DotPattern;
function DotPatternLight({ className, size = "md", opacity = "medium", fadeStyle = "ellipse" }) {
    // Use predefined Tailwind classes instead of template literals for Next.js compatibility
    const sizeMap = {
        sm: "[background-size:12px_12px]",
        md: "[background-size:16px_16px]",
        lg: "[background-size:20px_20px]"
    };
    const opacityMap = {
        low: "opacity-20",
        medium: "opacity-40",
        high: "opacity-60"
    };
    const fadeMap = {
        ellipse: "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]",
        circle: "[mask-image:radial-gradient(circle_at_50%_50%,#000_70%,transparent_100%)]",
        none: ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)]", sizeMap[size], fadeMap[fadeStyle], opacityMap[opacity], className)
    }, void 0, false, {
        fileName: "[project]/src/components/dot-pattern.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c1 = DotPatternLight;
function DotPatternDark({ className, size = "md", opacity = "medium", fadeStyle = "ellipse" }) {
    // Use predefined Tailwind classes instead of template literals for Next.js compatibility
    const sizeMap = {
        sm: "[background-size:12px_12px]",
        md: "[background-size:16px_16px]",
        lg: "[background-size:20px_20px]"
    };
    const opacityMap = {
        low: "opacity-30",
        medium: "opacity-50",
        high: "opacity-70"
    };
    const fadeMap = {
        ellipse: "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]",
        circle: "[mask-image:radial-gradient(circle_at_50%_50%,#000_70%,transparent_100%)]",
        none: ""
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)]", sizeMap[size], fadeMap[fadeStyle], opacityMap[opacity], className)
    }, void 0, false, {
        fileName: "[project]/src/components/dot-pattern.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c2 = DotPatternDark;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DotPattern");
__turbopack_context__.k.register(_c1, "DotPatternLight");
__turbopack_context__.k.register(_c2, "DotPatternDark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dot-pattern.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotPattern"], {
                    className: "opacity-100",
                    size: "md",
                    fadeStyle: "ellipse"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-4xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    className: "px-4 py-2 border-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-3 h-3 mr-2 fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        "New: Premium Template Collection",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3 h-3 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
                                children: [
                                    "Build Better",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
                                        children: [
                                            " ",
                                            "Web Applications",
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    "with Ready-Made Components"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl",
                                children: "Accelerate your development with our curated collection of blocks, templates, landing pages, and admin dashboards. From free components to complete solutions, built with shadcn/ui."
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 sm:flex-row sm:justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "text-base cursor-pointer",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sign-up",
                                            children: [
                                                "Get Started Free",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "lg",
                                        className: "text-base cursor-pointer",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "mr-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                "Watch Demo"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/hero-section.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-20 max-w-6xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-xl border bg-card shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/dashboard-light.png",
                                            alt: "Dashboard Preview - Light Mode",
                                            width: 1200,
                                            height: 800,
                                            className: "w-full rounded-xl object-cover block dark:hidden",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/dashboard-dark.png",
                                            alt: "Dashboard Preview - Dark Mode",
                                            width: 1200,
                                            height: 800,
                                            className: "w-full rounded-xl object-cover hidden dark:block",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 w-full h-32 md:h-40 lg:h-48 bg-gradient-to-b from-background/0 via-background/70 to-background rounded-b-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                className: "rounded-full h-16 w-16 p-0 cursor-pointer hover:scale-105 transition-transform",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    "aria-label": "Watch demo video",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "h-6 w-6 fill-current"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/hero-section.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/hero-section.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/hero-section.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/components/hero-section.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/landing/components/hero-section.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/logo-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoCarousel",
    ()=>LogoCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
// Simple icon component for company logos
const SimpleIcon = ({ iconSlug, size = 24 })=>{
    const iconMap = {
        shopify: 'M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z',
        netflix: 'm5.398 0 8.348 23.602c2.346.059 4.856.398 4.856.398L10.113 0H5.398zm8.489 0v9.172l4.715 13.33V0h-4.715zM5.398 1.5V24c1.873-.225 2.81-.312 4.715-.398V14.83L5.398 1.5z',
        spotify: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
        airbnb: 'M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z',
        dropbox: 'M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z',
        stripe: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z',
        google: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
        apple: 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
        meta: 'M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z',
        tesla: 'M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z',
        salesforce: 'M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8',
        github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
    };
    const iconPath = iconMap[iconSlug];
    if (!iconPath) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-muted animate-pulse rounded-sm",
            style: {
                width: size,
                height: size
            }
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        role: "img",
        viewBox: "0 0 24 24",
        className: "fill-black dark:fill-white",
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: iconPath
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SimpleIcon;
// Tech companies data
const techCompanies = [
    {
        name: 'Shopify',
        id: 'shopify'
    },
    {
        name: 'Netflix',
        id: 'netflix'
    },
    {
        name: 'Spotify',
        id: 'spotify'
    },
    {
        name: 'Airbnb',
        id: 'airbnb'
    },
    {
        name: 'Dropbox',
        id: 'dropbox'
    },
    {
        name: 'Stripe',
        id: 'stripe'
    },
    {
        name: 'Google',
        id: 'google'
    },
    {
        name: 'Apple',
        id: 'apple'
    },
    {
        name: 'Meta',
        id: 'meta'
    },
    {
        name: 'Tesla',
        id: 'tesla'
    },
    {
        name: 'Salesforce',
        id: 'salesforce'
    },
    {
        name: 'GitHub',
        id: 'github'
    }
];
function LogoCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pb-12 sm:pb-16 lg:pb-20 pt-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-muted-foreground mb-8",
                        children: "Trusted by leading companies worldwide"
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex animate-logo-scroll space-x-8 sm:space-x-12",
                                    children: [
                                        techCompanies.map((company, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "flex-shrink-0 flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleIcon, {
                                                            iconSlug: company.id,
                                                            size: 28
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground text-lg font-semibold whitespace-nowrap",
                                                            children: company.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this)
                                            }, `first-${index}`, false, {
                                                fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)),
                                        techCompanies.map((company, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "flex-shrink-0 flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleIcon, {
                                                            iconSlug: company.id,
                                                            size: 28
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-foreground text-lg font-semibold whitespace-nowrap",
                                                            children: company.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this)
                                            }, `second-${index}`, false, {
                                                fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/logo-carousel.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c1 = LogoCarousel;
var _c, _c1;
__turbopack_context__.k.register(_c, "SimpleIcon");
__turbopack_context__.k.register(_c1, "LogoCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/stats-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSection",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dot-pattern.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const stats = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        value: '500+',
        label: 'Components',
        description: 'Ready-to-use blocks'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"],
        value: '25K+',
        label: 'Downloads',
        description: 'Trusted worldwide'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        value: '10K+',
        label: 'Developers',
        description: 'Active community'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        value: '4.9',
        label: 'Rating',
        description: 'User satisfaction'
    }
];
function StatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 sm:py-16 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-secondary/20"
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dot$2d$pattern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotPattern"], {
                className: "opacity-75",
                size: "md",
                fadeStyle: "circle"
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
                    children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "text-center bg-background/60 backdrop-blur-sm border-border/50 py-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-primary/10 rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl sm:text-3xl font-bold text-foreground",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-foreground",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: stat.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/landing/components/stats-section.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/stats-section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/stats-section.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/landing/components/stats-section.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/image-3d.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image3D",
    ()=>Image3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Image3D({ lightSrc, darkSrc, alt, className, direction = "left" }) {
    const isRight = direction === "right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative aspect-[4/3] w-full", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "perspective-distant transform-3d",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute sm:-inset-8 rounded-3xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-2xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/image-3d.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative size-full transform-3d group-hover:rotate-x-8 group-hover:rotate-y-12 group-hover:translate-z-16 transition-all duration-700 ease-out",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 translate-y-4 translate-x-2 -translate-z-8 rounded-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-full rounded-2xl bg-gradient-to-br from-primary/10 via-background/40 to-secondary/10 shadow-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/image-3d.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/image-3d.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 size-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ease-out pointer-events-none", isRight ? "translate-x-full group-hover:-translate-x-full" : "-translate-x-full group-hover:translate-x-full")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/image-3d.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-15 pointer-events-none", isRight ? "bg-linear-to-l from-background from-0% via-background/85 via-15% to-transparent to-40%" : "bg-linear-to-r from-background from-0% via-background/85 via-15% to-transparent to-40%")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/image-3d.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: lightSrc,
                                    alt: `${alt} - Light Mode`,
                                    width: 800,
                                    height: 600,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block size-full object-cover dark:hidden transition-transform duration-700 group-hover:scale-105", isRight ? "object-center" : "object-left"),
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/image-3d.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: darkSrc,
                                    alt: `${alt} - Dark Mode`,
                                    width: 800,
                                    height: 600,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden dark:block size-full object-cover transition-transform duration-700 group-hover:scale-105", isRight ? "object-center" : "object-left"),
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/image-3d.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-2xl ring-1 ring-white/20 dark:ring-white/10 group-hover:ring-primary/40 transition-all duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/image-3d.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/image-3d.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/image-3d.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/image-3d.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/image-3d.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Image3D;
var _c;
__turbopack_context__.k.register(_c, "Image3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/features-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesSection",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/image-3d.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const mainFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        title: "Curated Component Library",
        description: "Hand-picked blocks and templates for quality and reliability."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
        title: "Free & Premium Options",
        description: "Start free, upgrade to premium collections when you need more."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"],
        title: "Ready-to-Use Templates",
        description: "Copy-paste components that just work out of the box."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Regular Updates",
        description: "New blocks and templates added weekly to keep you current."
    }
];
const secondaryFeatures = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: "Multiple Frameworks",
        description: "React, Next.js, and Vite compatibility for flexible development."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "Modern Tech Stack",
        description: "Built with shadcn/ui, Tailwind CSS, and TypeScript."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Responsive Design",
        description: "Mobile-first components for all screen sizes and devices."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: "Developer-Friendly",
        description: "Clean code, well-documented, easy integration and customization."
    }
];
function FeaturesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "py-24 sm:py-32 bg-muted/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "Marketplace Features"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                            children: "Everything you need to build amazing web applications"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Our marketplace provides curated blocks, templates, landing pages, and admin dashboards to help you build professional applications faster than ever."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image3D"], {
                            lightSrc: "/feature-1-light.png",
                            darkSrc: "/feature-1-dark.png",
                            alt: "Analytics dashboard",
                            direction: "left"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
                                            children: "Components that accelerate development"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-base text-pretty",
                                            children: "Our curated marketplace offers premium blocks and templates designed to save time and ensure consistency across your admin projects."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: mainFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex shrink-0 items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                        className: "size-5 text-primary",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-foreground font-medium",
                                                            children: feature.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground mt-1 text-sm",
                                                            children: feature.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 pe-4 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://ngothanhtung.com/templates",
                                                className: "flex items-center",
                                                children: [
                                                    "Browse Templates",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ms-2 size-4",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "outline",
                                            className: "cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://ngothanhtung.com/blocks",
                                                children: "View Components"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
                                            children: "Built for modern development workflows"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-base text-pretty",
                                            children: "Every component follows best practices with TypeScript, responsive design, and clean code architecture that integrates seamlessly into your projects."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: secondaryFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-0.5 flex shrink-0 items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                        className: "size-5 text-primary",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-foreground font-medium",
                                                            children: feature.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground mt-1 text-sm",
                                                            children: feature.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 pe-4 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "flex items-center",
                                                children: [
                                                    "View Documentation",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "ms-2 size-4",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "outline",
                                            className: "cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "GitHub Repository"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/features-section.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$image$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image3D"], {
                            lightSrc: "/feature-2-light.png",
                            darkSrc: "/feature-2-dark.png",
                            alt: "Performance dashboard",
                            direction: "right",
                            className: "order-1 lg:order-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/features-section.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/features-section.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/features-section.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/features-section.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = FeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card-decorator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardDecorator",
    ()=>CardDecorator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const CardDecorator = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto h-36 w-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 bg-[radial-gradient(circle,var(--color-foreground)_1px,transparent_1px)] bg-[length:16px_16px] opacity-30"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card-decorator.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "to-card absolute inset-0 bg-radial from-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card-decorator.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-background absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-md border shadow-xs",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/card-decorator.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/card-decorator.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CardDecorator;
var _c;
__turbopack_context__.k.register(_c, "CardDecorator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/team-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamSection",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2d$decorator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card-decorator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
"use client";
;
;
;
;
;
;
;
const team = [
    {
        id: 1,
        name: 'Alexandra Chen',
        role: 'Founder & CEO',
        description: 'Former co-founder of TechFlow. Early staff at Microsoft and Google.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=60&w=150&auto=format&fit=crop',
        fallback: 'AC',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 2,
        name: 'Marcus Rodriguez',
        role: 'Engineering Manager',
        description: 'Lead engineering teams at Stripe, Discord, and Meta Labs.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=150&auto=format&fit=crop',
        fallback: 'MR',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 3,
        name: 'Sophie Laurent',
        role: 'Product Manager',
        description: 'Former PM for Linear, Lambda School, and On Deck.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=150&auto=format&fit=crop',
        fallback: 'SL',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Frontend Developer',
        description: 'Former frontend dev for Linear, Coinbase, and PostScript.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=150&auto=format&fit=crop',
        fallback: 'DK',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 5,
        name: 'Emma Thompson',
        role: 'Backend Developer',
        description: 'Lead backend dev at Clearbit. Former Clearbit and Loom.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=60&w=150&auto=format&fit=crop',
        fallback: 'ET',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 6,
        name: 'Ryan Mitchell',
        role: 'Product Designer',
        description: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=60&w=150&auto=format&fit=crop',
        fallback: 'RM',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 7,
        name: 'James Anderson',
        role: 'UX Researcher',
        description: 'Lead user research for Slack. Contractor for Netflix and Udacity.',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?q=60&w=150&auto=format&fit=crop',
        fallback: 'JA',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    },
    {
        id: 8,
        name: 'Isabella Garcia',
        role: 'Customer Success',
        description: 'Lead CX at Wealthsimple. Former PagerDuty and Squreen.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=60&w=150&auto=format&fit=crop',
        fallback: 'IG',
        social: {
            linkedin: '#',
            github: '#',
            website: '#'
        }
    }
];
function TeamSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        className: "py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "Our Team"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-6",
                            children: "Meet our team"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground mb-8",
                            children: "We are a passionate team of innovators, builders, and problem-solvers dedicated to creating exceptional digital experiences that make a difference."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4",
                    children: team.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "shadow-xs py-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2d$decorator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDecorator"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                    className: "h-24 w-24 border shadow-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                            src: member.image,
                                                            alt: member.name,
                                                            className: "object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                            className: "text-lg font-semibold",
                                                            children: member.fallback
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-foreground mb-1",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-primary mb-3",
                                            children: member.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground mb-4 leading-relaxed",
                                            children: member.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8 cursor-pointer hover:text-primary",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: member.social.linkedin,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        "aria-label": `${member.name} LinkedIn`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8 cursor-pointer hover:text-primary",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: member.social.github,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        "aria-label": `${member.name} GitHub`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8 cursor-pointer hover:text-primary",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: member.social.website,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        "aria-label": `${member.name} Website`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/team-section.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        }, member.id, false, {
                            fileName: "[project]/src/app/landing/components/team-section.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/team-section.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/team-section.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/team-section.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/testimonials-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const testimonials = [
    {
        name: 'Alexandra Mitchell',
        role: 'Senior Frontend Developer',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
        quote: 'This platform has completely transformed our development workflow. The component system is so well-architected that even complex applications feel simple to build.'
    },
    {
        name: 'James Thompson',
        role: 'Technical Lead',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
        quote: 'After trying countless frameworks, this is the one that finally clicked. The documentation is exceptional.'
    },
    {
        name: 'Priya Sharma',
        role: 'Product Designer',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
        quote: 'The design system is beautiful and consistent. I can prototype ideas quickly and hand them off to developers with confidence that the implementation will match perfectly.'
    },
    {
        name: 'Robert Kim',
        role: 'Engineering Manager',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
        quote: 'We migrated our entire application to this platform in just two weeks. The performance improvements were immediate.'
    },
    {
        name: 'Maria Santos',
        role: 'Full Stack Engineer',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
        quote: 'The accessibility features are top-notch. Building inclusive applications has never been easier. Every component follows best practices out of the box, and the automated testing suite ensures we maintain high accessibility standards throughout our development process.'
    },
    {
        name: 'Thomas Anderson',
        role: 'Solutions Architect',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
        quote: 'Scalability was our biggest concern, but this platform handles enterprise-level complexity with ease.'
    },
    {
        name: 'Lisa Chang',
        role: 'UX Researcher',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
        quote: 'User testing results have been consistently positive since we adopted this platform. The user experience is intuitive and the performance is stellar. Our user satisfaction scores have increased by 40% since the migration.'
    },
    {
        name: 'Michael Foster',
        role: 'DevOps Engineer',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
        quote: 'Deployment and maintenance are a breeze. The platform integrates seamlessly with our CI/CD pipeline.'
    },
    {
        name: 'Sophie Laurent',
        role: 'Creative Director',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5',
        quote: 'The creative possibilities are endless. We can bring any design concept to life without compromising on technical quality or user experience.'
    },
    {
        name: 'Daniel Wilson',
        role: 'Backend Developer',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5',
        quote: 'The API design is exceptional. Clean, intuitive, and well-documented.'
    },
    {
        name: 'Natasha Petrov',
        role: 'Mobile App Developer',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6',
        quote: 'Cross-platform development has never been this efficient. One codebase, multiple platforms, consistent user experience. This is the future. The responsive design system ensures our apps look perfect on every device.'
    },
    {
        name: 'Carlos Rivera',
        role: 'Startup Founder',
        image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6',
        quote: 'As a non-technical founder, this platform gave me the confidence to build our MVP quickly.'
    }
];
function TestimonialsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        className: "py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-8 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                            children: "Empowering Innovation Worldwide"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Join thousands of developers and teams who trust our platform to build exceptional digital experiences."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4",
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "mb-6 break-inside-avoid shadow-none lg:mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "bg-muted size-12 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        alt: testimonial.name,
                                                        src: testimonial.image,
                                                        loading: "lazy",
                                                        width: "120",
                                                        height: "120"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: testimonial.name.split(' ').map((n)=>n[0]).join('')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        onClick: (e)=>e.preventDefault(),
                                                        className: "cursor-pointer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium hover:text-primary transition-colors",
                                                            children: testimonial.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground block text-sm tracking-wide",
                                                        children: testimonial.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-balance",
                                            children: testimonial.quote
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/testimonials-section.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/blog-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogSection",
    ()=>BlogSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const blogs = [
    {
        id: 1,
        image: 'https://ui.shadcn.com/placeholder.svg',
        category: 'Technology',
        title: 'AI Development Catalysts',
        description: 'Exploring how AI-driven tools are transforming software development workflows and accelerating innovation.'
    },
    {
        id: 2,
        image: 'https://ui.shadcn.com/placeholder.svg',
        category: 'Lifestyle',
        title: 'Minimalist Living Guide',
        description: 'Minimalist living approaches that can help reduce stress and create more meaningful daily experiences.'
    },
    {
        id: 3,
        image: 'https://ui.shadcn.com/placeholder.svg',
        category: 'Design',
        title: 'Accessible UI Trends',
        description: 'How modern UI trends are embracing accessibility while maintaining sleek, intuitive user experiences.'
    }
];
function BlogSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "blog",
        className: "py-24 sm:py-32 bg-muted/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "Latest Insights"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/blog-section.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                            children: "From our blog"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/blog-section.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Stay updated with the latest trends, best practices, and insights from our team of experts."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/blog-section.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/blog-section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                    children: blogs.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "overflow-hidden py-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "px-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-video",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: blog.image,
                                            alt: blog.title,
                                            width: 400,
                                            height: 225,
                                            className: "size-full object-cover dark:invert dark:brightness-[0.95]",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-xs tracking-widest uppercase",
                                                children: blog.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                onClick: (e)=>e.preventDefault(),
                                                className: "cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold hover:text-primary transition-colors",
                                                    children: blog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: blog.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                onClick: (e)=>e.preventDefault(),
                                                className: "inline-flex items-center gap-2 text-primary hover:underline cursor-pointer",
                                                children: [
                                                    "Learn More",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/blog-section.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, blog.id, false, {
                            fileName: "[project]/src/app/landing/components/blog-section.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/blog-section.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/blog-section.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/blog-section.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = BlogSection;
var _c;
__turbopack_context__.k.register(_c, "BlogSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toggle/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
        },
        size: {
            default: "h-9 px-2 min-w-9",
            sm: "h-8 px-1.5 min-w-8",
            lg: "h-10 px-2.5 min-w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Toggle({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toggle.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Toggle;
;
var _c;
__turbopack_context__.k.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toggle-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleGroup",
    ()=>ToggleGroup,
    "ToggleGroupItem",
    ()=>ToggleGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toggle-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ToggleGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    size: "default",
    variant: "default"
});
function ToggleGroup({ className, variant, size, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "toggle-group",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupContext.Provider, {
            value: {
                variant,
                size
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toggle-group.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toggle-group.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = ToggleGroup;
function ToggleGroupItem({ className, children, variant, size, ...props }) {
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToggleGroupContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "toggle-group-item",
        "data-variant": context.variant || variant,
        "data-size": context.size || size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleVariants"])({
            variant: context.variant || variant,
            size: context.size || size
        }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toggle-group.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ToggleGroupItem, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c1 = ToggleGroupItem;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToggleGroup");
__turbopack_context__.k.register(_c1, "ToggleGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/pricing-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const plans = [
    {
        name: 'Free',
        description: 'Perfect for getting started with essential components',
        monthlyPrice: 0,
        yearlyPrice: 0,
        features: [
            'Access to 50+ free components',
            'Basic dashboard templates',
            'Community support',
            'GitHub repository access',
            'Documentation and guides'
        ],
        cta: 'Get Started',
        popular: false
    },
    {
        name: 'Pro',
        description: 'For developers who need premium templates and components',
        monthlyPrice: 19,
        yearlyPrice: 15,
        features: [
            'Premium template collection',
            'Advanced dashboard layouts',
            'Priority support',
            'Commercial use license',
            'Early access to new releases',
            'Figma design files',
            'Custom component requests',
            'Direct developer access',
            'Exclusive design resources'
        ],
        cta: 'Get Started',
        popular: true,
        includesPrevious: 'All Free features, plus'
    },
    {
        name: 'Lifetime',
        description: 'One-time payment for lifetime access to everything',
        monthlyPrice: 299,
        yearlyPrice: 299,
        features: [
            'Lifetime updates and support',
            'Private Discord channel',
            'No recurring fees ever',
            'Future template access',
            'VIP support priority',
            'Exclusive beta features'
        ],
        cta: 'Get Started',
        popular: false,
        includesPrevious: 'All Pro features, plus'
    }
];
function PricingSection() {
    _s();
    const [isYearly, setIsYearly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pricing",
        className: "py-24 sm:py-32 bg-muted/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "Pricing Plans"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                            children: "Choose your plan"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground mb-8",
                            children: "Start building with our free components or upgrade to Pro for access to premium templates and advanced features."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                                type: "single",
                                value: isYearly ? "yearly" : "monthly",
                                onValueChange: (value)=>setIsYearly(value === "yearly"),
                                className: "bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                        value: "monthly",
                                        className: "data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors",
                                        children: "Monthly"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                                        value: "yearly",
                                        className: "data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors",
                                        children: "Annually"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-semibold",
                                    children: "Save 20%"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                " On Annual Billing"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-3",
                            children: plans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-8 grid grid-rows-subgrid row-span-4 gap-6 ${plan.popular ? 'my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-medium tracking-tight mb-2",
                                                    children: plan.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-balance text-sm",
                                                    children: plan.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl font-bold mb-1",
                                                    children: plan.name === 'Lifetime' ? `$${plan.monthlyPrice}` : plan.name === 'Free' ? '$0' : `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground text-sm",
                                                    children: plan.name === 'Lifetime' ? 'One-time payment' : 'Per month'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: `w-full cursor-pointer my-2 ${plan.popular ? 'shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90' : 'shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50'}`,
                                                variant: plan.popular ? 'default' : 'secondary',
                                                children: plan.cta
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                role: "list",
                                                className: "space-y-3 text-sm",
                                                children: [
                                                    plan.includesPrevious && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-center gap-3 font-medium",
                                                        children: [
                                                            plan.includesPrevious,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 25
                                                    }, this),
                                                    plan.features.map((feature, featureIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "text-muted-foreground size-4 flex-shrink-0",
                                                                    strokeWidth: 2.5
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, featureIndex, true, {
                                                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: [
                            "Need custom components or have questions? ",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "p-0 h-auto cursor-pointer",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    children: "Contact our team"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing-section.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/pricing-section.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/pricing-section.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(PricingSection, "1aFueaGQAX8MFcR5An0BTMzYScY=");
_c = PricingSection;
var _c;
__turbopack_context__.k.register(_c, "PricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/cta-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function CTASection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 lg:py-24 bg-muted/80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "size-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 18,
                                                columnNumber: 19
                                            }, this),
                                            "Productivity Suite"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 17,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-muted-foreground flex items-center gap-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "size-2 rounded-full bg-green-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 21
                                                    }, this),
                                                    "150+ Blocks"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 23,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                                orientation: "vertical",
                                                className: "!h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "25K+ Downloads"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                                orientation: "vertical",
                                                className: "!h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "4.9★ Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl",
                                        children: [
                                            "Supercharge your team's",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex sm:inline-flex justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative mx-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                                                                children: "performance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                                lineNumber: 40,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute start-0 -bottom-2 h-1 w-full bg-gradient-to-r from-primary/30 to-secondary/30"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 21
                                                    }, this),
                                                    "today"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mx-auto max-w-2xl text-balance lg:text-xl",
                                        children: "Stop building from scratch. Get production-ready components, templates and dashboards that integrate seamlessly with your shadcn/ui projects."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-center gap-4 sm:flex-row sm:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "cursor-pointer px-8 py-6 text-lg font-medium",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://ngothanhtung.com/blocks",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    className: "me-2 size-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                "Browse Components"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "lg",
                                        className: "cursor-pointer px-8 py-6 text-lg font-medium group",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                    className: "me-2 size-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, this),
                                                "View on GitHub",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ms-2 size-4 transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "size-2 rounded-full bg-green-600 dark:bg-green-400 me-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Free components available"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "size-2 rounded-full bg-blue-600 dark:bg-blue-400 me-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Commercial license included"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "size-2 rounded-full bg-purple-600 dark:bg-purple-400 me-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Regular updates & support"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/cta-section.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/cta-section.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/cta-section.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/cta-section.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/cta-section.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const formState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"])({
        name: fieldContext.name
    });
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "uYMhrJS1fbT4Yzmfu2feET1emX0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"]
    ];
});
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
function FormItem({ className, ...props }) {
    _s1();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "form-item",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/form.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s1(FormItem, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c1 = FormItem;
function FormLabel({ className, ...props }) {
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "form-label",
        "data-error": !!error,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[error=true]:text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s2(FormLabel, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c2 = FormLabel;
function FormControl({ ...props }) {
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        "data-slot": "form-control",
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s3(FormControl, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c3 = FormControl;
function FormDescription({ className, ...props }) {
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "form-description",
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s4(FormDescription, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormDescription;
function FormMessage({ className, ...props }) {
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : props.children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-slot": "form-message",
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-destructive text-sm", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/src/components/ui/form.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s5(FormMessage, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c5 = FormMessage;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormItem");
__turbopack_context__.k.register(_c2, "FormLabel");
__turbopack_context__.k.register(_c3, "FormControl");
__turbopack_context__.k.register(_c4, "FormDescription");
__turbopack_context__.k.register(_c5, "FormMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/contact-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
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
const contactFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, {
        message: "First name must be at least 2 characters."
    }),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, {
        message: "Last name must be at least 2 characters."
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email({
        message: "Please enter a valid email address."
    }),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, {
        message: "Subject must be at least 5 characters."
    }),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, {
        message: "Message must be at least 10 characters."
    })
});
function ContactSection() {
    _s();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: ""
        }
    });
    function onSubmit(values) {
        // Here you would typically send the form data to your backend
        console.log(values);
        // You could also show a success message or redirect
        form.reset();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                            children: "Need help or have questions?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Our team is here to help you get the most out of Claude Code Dashboard. Choose the best way to reach out to us."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "hover:shadow-md transition-shadow cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Discord Community"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-3",
                                                    children: "Join our active community for quick help and discussions with other developers."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "cursor-pointer",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://discord.com/invite/XEQhPc9a6p",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: "Join Discord"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "hover:shadow-md transition-shadow cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    "GitHub Issues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-3",
                                                    children: "Report bugs, request features, or contribute to our open source repository."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "cursor-pointer",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard/issues",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: "View on GitHub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "hover:shadow-md transition-shadow cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Documentation"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-3",
                                                    children: "Browse our comprehensive guides, tutorials, and component documentation."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "cursor-pointer",
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        children: "View Docs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 order-1 lg:order-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                "Send us a message"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                                            ...form,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: form.handleSubmit(onSubmit),
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid gap-4 sm:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "firstName",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: "First name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                lineNumber: 180,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    placeholder: "John",
                                                                                    ...field
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                    lineNumber: 182,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                lineNumber: 181,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                lineNumber: 184,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                                control: form.control,
                                                                name: "lastName",
                                                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                                children: "Last name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                lineNumber: 193,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                    placeholder: "Doe",
                                                                                    ...field
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                    lineNumber: 195,
                                                                                    columnNumber: 31
                                                                                }, void 0)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                lineNumber: 194,
                                                                                columnNumber: 29
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                                lineNumber: 197,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                        control: form.control,
                                                        name: "email",
                                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            type: "email",
                                                                            placeholder: "john@example.com",
                                                                            ...field
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 29
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 25
                                                            }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                        control: form.control,
                                                        name: "subject",
                                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                        children: "Subject"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            placeholder: "Component request, bug report, general inquiry...",
                                                                            ...field
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 29
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 25
                                                            }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                                        control: form.control,
                                                        name: "message",
                                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                                        children: "Message"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                            placeholder: "Tell us how we can help you with Claude Code components...",
                                                                            rows: 10,
                                                                            className: "min-h-50",
                                                                            ...field
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 29
                                                                        }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 25
                                                            }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        type: "submit",
                                                        className: "w-full cursor-pointer",
                                                        children: "Send Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/contact-section.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/contact-section.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/contact-section.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/contact-section.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/contact-section.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/faq-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqSection",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as CircleHelp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const faqItems = [
    {
        value: "item-1",
        question: "How do I integrate Claude Code components into my project?",
        answer: "Integration is simple! All our components are built with shadcn/ui and work with React, Next.js, and Vite. Just copy the component code, install any required dependencies, and paste it into your project. Each component comes with detailed installation instructions and examples."
    },
    {
        value: "item-2",
        question: "What's the difference between free and premium components?",
        answer: "Free components include essential UI elements like buttons, forms, and basic layouts. Premium components offer advanced features like complex data tables, analytics dashboards, authentication flows, and complete admin templates. Premium also includes Figma files, priority support, and commercial licenses."
    },
    {
        value: "item-3",
        question: "Can I use these components in commercial projects?",
        answer: "Yes! Free components come with an MIT license for unlimited use. Premium components include a commercial license that allows usage in client projects, SaaS applications, and commercial products without attribution requirements."
    },
    {
        value: "item-4",
        question: "Do you provide support and updates?",
        answer: "Absolutely! We provide community support for free components through our Discord server and GitHub issues. Premium subscribers get priority email support, regular component updates, and early access to new releases. We also maintain compatibility with the latest shadcn/ui versions."
    },
    {
        value: "item-5",
        question: "What frameworks and tools do you support?",
        answer: "Our components work with React 18+, Next.js 13+, and Vite. We use TypeScript, Tailwind CSS, and follow shadcn/ui conventions. Components are tested with popular tools like React Hook Form, TanStack Query, and Zustand for state management."
    },
    {
        value: "item-6",
        question: "How often do you release new components?",
        answer: "We release new components and templates weekly. Premium subscribers get early access to new releases, while free components are updated regularly based on community feedback. You can track our roadmap and request specific components through our GitHub repository."
    }
];
const FaqSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-2xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/faq-section.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-4",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/faq-section.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Everything you need to know about Claude Code components, licensing, and integration. Still have questions? We're here to help!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/faq-section.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                    type: "single",
                                    collapsible: true,
                                    className: "space-y-5",
                                    children: faqItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                            value: item.value,
                                            className: "rounded-md !border bg-transparent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                    className: "cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"], {
                                                                    className: "size-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-start font-semibold",
                                                                children: item.question
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                    className: "p-4 bg-transparent",
                                                    children: item.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item.value, true, {
                                            fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/faq-section.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-4",
                                    children: "Still have questions? We're here to help."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "cursor-pointer",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        children: "Contact Support"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/faq-section.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/faq-section.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/faq-section.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/faq-section.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FaqSection;
;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingFooter",
    ()=>LandingFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
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
const newsletterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email({
        message: "Please enter a valid email address."
    })
});
const footerLinks = {
    product: [
        {
            name: "Features",
            href: "#features"
        },
        {
            name: "Pricing",
            href: "#pricing"
        },
        {
            name: "API",
            href: "#api"
        },
        {
            name: "Documentation",
            href: "#docs"
        }
    ],
    company: [
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Blog",
            href: "#blog"
        },
        {
            name: "Careers",
            href: "#careers"
        },
        {
            name: "Press",
            href: "#press"
        }
    ],
    resources: [
        {
            name: "Help Center",
            href: "#help"
        },
        {
            name: "Community",
            href: "#community"
        },
        {
            name: "Guides",
            href: "#guides"
        },
        {
            name: "Webinars",
            href: "#webinars"
        }
    ],
    legal: [
        {
            name: "Privacy",
            href: "#privacy"
        },
        {
            name: "Terms",
            href: "#terms"
        },
        {
            name: "Security",
            href: "#security"
        },
        {
            name: "Status",
            href: "#status"
        }
    ]
};
const socialLinks = [
    {
        name: "Twitter",
        href: "#",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
    },
    {
        name: "GitHub",
        href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"]
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"]
    },
    {
        name: "YouTube",
        href: "#",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"]
    }
];
function LandingFooter() {
    _s();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(newsletterSchema),
        defaultValues: {
            email: ""
        }
    });
    function onSubmit(values) {
        // Here you would typically send the email to your newsletter service
        console.log(values);
        // Show success message and reset form
        form.reset();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                children: "Stay updated"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: "Get the latest updates, articles, and resources sent to your inbox weekly."
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                                ...form,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: form.handleSubmit(onSubmit),
                                    className: "flex flex-col gap-2 max-w-md mx-auto sm:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                                            control: form.control,
                                            name: "email",
                                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "email",
                                                                placeholder: "Enter your email",
                                                                ...field
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 23
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            className: "cursor-pointer",
                                            children: "Subscribe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/footer.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/footer.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 grid-cols-4 lg:grid-cols-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-4 lg:col-span-2 max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2 mb-4 max-lg:justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://ngothanhtung.com",
                                        target: "_blank",
                                        className: "flex items-center space-x-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-xl",
                                                children: "Claude Code"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/footer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-6 max-lg:text-center max-lg:flex max-lg:justify-center",
                                    children: "Accelerating web development with curated blocks, templates, landing pages, and admin dashboards designed for modern developers."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4 max-lg:justify-center",
                                    children: socialLinks.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                "aria-label": social.name,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        }, social.name, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-md:col-span-2 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.product.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.href,
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        }, link.name, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-md:col-span-2 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.company.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.href,
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        }, link.name, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-md:col-span-2 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.resources.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.href,
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, link.name, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-md:col-span-2 lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: footerLinks.legal.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.href,
                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/footer.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        }, link.name, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/footer.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                    className: "my-8"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/footer.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Made with"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "h-4 w-4 text-red-500 fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "by"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://ngothanhtung.com",
                                            target: "_blank",
                                            className: "font-semibold text-foreground hover:text-primary transition-colors cursor-pointer",
                                            children: "Claude Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/footer.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " for the developer community"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4 text-sm text-muted-foreground mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#privacy",
                                    className: "hover:text-foreground transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#terms",
                                    className: "hover:text-foreground transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#cookies",
                                    className: "hover:text-foreground transition-colors",
                                    children: "Cookie Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/footer.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/footer.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/footer.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/footer.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/footer.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(LandingFooter, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = LandingFooter;
var _c;
__turbopack_context__.k.register(_c, "LandingFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/theme-customizer-constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseColors",
    ()=>baseColors,
    "radiusOptions",
    ()=>radiusOptions,
    "sidebarCollapsibleOptions",
    ()=>sidebarCollapsibleOptions,
    "sidebarSideOptions",
    ()=>sidebarSideOptions,
    "sidebarVariants",
    ()=>sidebarVariants
]);
const radiusOptions = [
    {
        name: "0",
        value: "0rem"
    },
    {
        name: "0.3",
        value: "0.3rem"
    },
    {
        name: "0.5",
        value: "0.5rem"
    },
    {
        name: "0.75",
        value: "0.75rem"
    },
    {
        name: "1.0",
        value: "1rem"
    }
];
const sidebarVariants = [
    {
        name: "Default",
        value: "sidebar",
        description: "Standard sidebar layout"
    },
    {
        name: "Floating",
        value: "floating",
        description: "Floating sidebar with border"
    },
    {
        name: "Inset",
        value: "inset",
        description: "Inset sidebar with rounded corners"
    }
];
const sidebarCollapsibleOptions = [
    {
        name: "Off Canvas",
        value: "offcanvas",
        description: "Slides out of view"
    },
    {
        name: "Icon",
        value: "icon",
        description: "Collapses to icon only"
    },
    {
        name: "None",
        value: "none",
        description: "Always visible"
    }
];
const sidebarSideOptions = [
    {
        name: "Left",
        value: "left"
    },
    {
        name: "Right",
        value: "right"
    }
];
const baseColors = [
    {
        name: "Primary",
        cssVar: "--primary"
    },
    {
        name: "Primary Foreground",
        cssVar: "--primary-foreground"
    },
    {
        name: "Secondary",
        cssVar: "--secondary"
    },
    {
        name: "Secondary Foreground",
        cssVar: "--secondary-foreground"
    },
    {
        name: "Accent",
        cssVar: "--accent"
    },
    {
        name: "Accent Foreground",
        cssVar: "--accent-foreground"
    },
    {
        name: "Muted",
        cssVar: "--muted"
    },
    {
        name: "Muted Foreground",
        cssVar: "--muted-foreground"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/shadcn-ui-theme-presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shadcnThemePresets",
    ()=>shadcnThemePresets
]);
const shadcnThemePresets = {
    "default": {
        label: "Default",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "oklch(0.205 0 0)",
                "primary-foreground": "oklch(0.985 0 0)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "oklch(0.708 0 0)",
                "chart-1": "oklch(0.646 0.222 41.116)",
                "chart-2": "oklch(0.6 0.118 184.704)",
                "chart-3": "oklch(0.398 0.07 227.392)",
                "chart-4": "oklch(0.828 0.189 84.429)",
                "chart-5": "oklch(0.769 0.188 70.08)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "oklch(0.922 0 0)",
                "primary-foreground": "oklch(0.205 0 0)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "oklch(0.556 0 0)",
                "chart-1": "oklch(0.488 0.243 264.376)",
                "chart-2": "oklch(0.696 0.17 162.48)",
                "chart-3": "oklch(0.769 0.188 70.08)",
                "chart-4": "oklch(0.627 0.265 303.9)",
                "chart-5": "oklch(0.645 0.246 16.439)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "blue": {
        label: "Blue",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-blue-600)",
                "primary-foreground": "var(--color-blue-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-blue-400)",
                "chart-1": "var(--color-blue-500)",
                "chart-2": "var(--color-blue-600)",
                "chart-3": "var(--color-blue-700)",
                "chart-4": "var(--color-blue-800)",
                "chart-5": "var(--color-blue-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-blue-500)",
                "primary-foreground": "var(--color-blue-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-blue-900)",
                "chart-1": "var(--color-blue-400)",
                "chart-2": "var(--color-blue-500)",
                "chart-3": "var(--color-blue-600)",
                "chart-4": "var(--color-blue-700)",
                "chart-5": "var(--color-blue-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "green": {
        label: "Green",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-lime-600)",
                "primary-foreground": "var(--color-lime-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-lime-400)",
                "chart-1": "var(--color-lime-500)",
                "chart-2": "var(--color-lime-600)",
                "chart-3": "var(--color-lime-700)",
                "chart-4": "var(--color-lime-800)",
                "chart-5": "var(--color-lime-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-lime-500)",
                "primary-foreground": "var(--color-lime-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-lime-900)",
                "chart-1": "var(--color-lime-400)",
                "chart-2": "var(--color-lime-500)",
                "chart-3": "var(--color-lime-600)",
                "chart-4": "var(--color-lime-700)",
                "chart-5": "var(--color-lime-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "red": {
        label: "Red",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-red-600)",
                "primary-foreground": "var(--color-red-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-red-400)",
                "chart-1": "var(--color-red-500)",
                "chart-2": "var(--color-red-600)",
                "chart-3": "var(--color-red-700)",
                "chart-4": "var(--color-red-800)",
                "chart-5": "var(--color-red-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-red-500)",
                "primary-foreground": "var(--color-red-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-red-900)",
                "chart-1": "var(--color-red-400)",
                "chart-2": "var(--color-red-500)",
                "chart-3": "var(--color-red-600)",
                "chart-4": "var(--color-red-700)",
                "chart-5": "var(--color-red-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "rose": {
        label: "Rose",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-rose-600)",
                "primary-foreground": "var(--color-rose-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-rose-400)",
                "chart-1": "var(--color-rose-500)",
                "chart-2": "var(--color-rose-600)",
                "chart-3": "var(--color-rose-700)",
                "chart-4": "var(--color-rose-800)",
                "chart-5": "var(--color-rose-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-rose-500)",
                "primary-foreground": "var(--color-rose-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-rose-900)",
                "chart-1": "var(--color-rose-400)",
                "chart-2": "var(--color-rose-500)",
                "chart-3": "var(--color-rose-600)",
                "chart-4": "var(--color-rose-700)",
                "chart-5": "var(--color-rose-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "orange": {
        label: "Orange",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-orange-600)",
                "primary-foreground": "var(--color-orange-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-orange-400)",
                "chart-1": "var(--color-orange-500)",
                "chart-2": "var(--color-orange-600)",
                "chart-3": "var(--color-orange-700)",
                "chart-4": "var(--color-orange-800)",
                "chart-5": "var(--color-orange-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-orange-500)",
                "primary-foreground": "var(--color-orange-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-orange-900)",
                "chart-1": "var(--color-orange-400)",
                "chart-2": "var(--color-orange-500)",
                "chart-3": "var(--color-orange-600)",
                "chart-4": "var(--color-orange-700)",
                "chart-5": "var(--color-orange-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "yellow": {
        label: "Yellow",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-yellow-400)",
                "primary-foreground": "var(--color-yellow-900)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-yellow-400)",
                "chart-1": "var(--color-yellow-500)",
                "chart-2": "var(--color-yellow-600)",
                "chart-3": "var(--color-yellow-700)",
                "chart-4": "var(--color-yellow-800)",
                "chart-5": "var(--color-yellow-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-yellow-500)",
                "primary-foreground": "var(--color-yellow-900)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-yellow-900)",
                "chart-1": "var(--color-yellow-400)",
                "chart-2": "var(--color-yellow-500)",
                "chart-3": "var(--color-yellow-600)",
                "chart-4": "var(--color-yellow-700)",
                "chart-5": "var(--color-yellow-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "violet": {
        label: "Violet",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-violet-600)",
                "primary-foreground": "var(--color-violet-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-violet-400)",
                "chart-1": "var(--color-violet-500)",
                "chart-2": "var(--color-violet-600)",
                "chart-3": "var(--color-violet-700)",
                "chart-4": "var(--color-violet-800)",
                "chart-5": "var(--color-violet-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-violet-500)",
                "primary-foreground": "var(--color-violet-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-violet-900)",
                "chart-1": "var(--color-violet-400)",
                "chart-2": "var(--color-violet-500)",
                "chart-3": "var(--color-violet-600)",
                "chart-4": "var(--color-violet-700)",
                "chart-5": "var(--color-violet-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "amber": {
        label: "Amber",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-amber-600)",
                "primary-foreground": "var(--color-amber-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-amber-400)",
                "chart-1": "var(--color-amber-500)",
                "chart-2": "var(--color-amber-600)",
                "chart-3": "var(--color-amber-700)",
                "chart-4": "var(--color-amber-800)",
                "chart-5": "var(--color-amber-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-amber-500)",
                "primary-foreground": "var(--color-amber-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-amber-900)",
                "chart-1": "var(--color-amber-400)",
                "chart-2": "var(--color-amber-500)",
                "chart-3": "var(--color-amber-600)",
                "chart-4": "var(--color-amber-700)",
                "chart-5": "var(--color-amber-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "purple": {
        label: "Purple",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-purple-600)",
                "primary-foreground": "var(--color-purple-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-purple-400)",
                "chart-1": "var(--color-purple-500)",
                "chart-2": "var(--color-purple-600)",
                "chart-3": "var(--color-purple-700)",
                "chart-4": "var(--color-purple-800)",
                "chart-5": "var(--color-purple-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-purple-500)",
                "primary-foreground": "var(--color-purple-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-purple-900)",
                "chart-1": "var(--color-purple-400)",
                "chart-2": "var(--color-purple-500)",
                "chart-3": "var(--color-purple-600)",
                "chart-4": "var(--color-purple-700)",
                "chart-5": "var(--color-purple-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    },
    "teal": {
        label: "Teal",
        styles: {
            light: {
                background: "oklch(1 0 0)",
                foreground: "oklch(0.145 0 0)",
                card: "oklch(1 0 0)",
                "card-foreground": "oklch(0.145 0 0)",
                popover: "oklch(1 0 0)",
                "popover-foreground": "oklch(0.145 0 0)",
                primary: "var(--color-teal-600)",
                "primary-foreground": "var(--color-teal-50)",
                secondary: "oklch(0.97 0 0)",
                "secondary-foreground": "oklch(0.205 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.556 0 0)",
                accent: "oklch(0.97 0 0)",
                "accent-foreground": "oklch(0.205 0 0)",
                destructive: "oklch(0.577 0.245 27.325)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(0.922 0 0)",
                input: "oklch(0.922 0 0)",
                ring: "var(--color-teal-400)",
                "chart-1": "var(--color-teal-500)",
                "chart-2": "var(--color-teal-600)",
                "chart-3": "var(--color-teal-700)",
                "chart-4": "var(--color-teal-800)",
                "chart-5": "var(--color-teal-900)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            },
            dark: {
                background: "oklch(0.145 0 0)",
                foreground: "oklch(0.985 0 0)",
                card: "oklch(0.205 0 0)",
                "card-foreground": "oklch(0.985 0 0)",
                popover: "oklch(0.269 0 0)",
                "popover-foreground": "oklch(0.985 0 0)",
                primary: "var(--color-teal-500)",
                "primary-foreground": "var(--color-teal-50)",
                secondary: "oklch(0.269 0 0)",
                "secondary-foreground": "oklch(0.985 0 0)",
                muted: "oklch(0.269 0 0)",
                "muted-foreground": "oklch(0.708 0 0)",
                accent: "oklch(0.371 0 0)",
                "accent-foreground": "oklch(0.985 0 0)",
                destructive: "oklch(0.704 0.191 22.216)",
                "destructive-foreground": "oklch(0.98 0 0)",
                border: "oklch(1 0 0 / 10%)",
                input: "oklch(1 0 0 / 15%)",
                ring: "var(--color-teal-900)",
                "chart-1": "var(--color-teal-400)",
                "chart-2": "var(--color-teal-500)",
                "chart-3": "var(--color-teal-600)",
                "chart-4": "var(--color-teal-700)",
                "chart-5": "var(--color-teal-800)",
                radius: "0.625rem",
                "font-sans": "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                "font-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/tweakcn-theme-presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tweakcnPresets",
    ()=>tweakcnPresets
]);
const tweakcnPresets = {
    "modern-minimal": {
        label: "Modern Minimal",
        styles: {
            light: {
                background: "#ffffff",
                foreground: "#333333",
                card: "#ffffff",
                "card-foreground": "#333333",
                popover: "#ffffff",
                "popover-foreground": "#333333",
                primary: "#3b82f6",
                "primary-foreground": "#ffffff",
                secondary: "#f3f4f6",
                "secondary-foreground": "#4b5563",
                muted: "#f9fafb",
                "muted-foreground": "#6b7280",
                accent: "#e0f2fe",
                "accent-foreground": "#1e3a8a",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#e5e7eb",
                input: "#e5e7eb",
                ring: "#3b82f6",
                "chart-1": "#3b82f6",
                "chart-2": "#2563eb",
                "chart-3": "#1d4ed8",
                "chart-4": "#1e40af",
                "chart-5": "#1e3a8a",
                radius: "0.375rem",
                sidebar: "#f9fafb",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#3b82f6",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#e0f2fe",
                "sidebar-accent-foreground": "#1e3a8a",
                "sidebar-border": "#e5e7eb",
                "sidebar-ring": "#3b82f6",
                "font-sans": "Inter, sans-serif",
                "font-serif": "Source Serif 4, serif",
                "font-mono": "JetBrains Mono, monospace"
            },
            dark: {
                background: "#171717",
                foreground: "#e5e5e5",
                card: "#262626",
                "card-foreground": "#e5e5e5",
                popover: "#262626",
                "popover-foreground": "#e5e5e5",
                primary: "#3b82f6",
                "primary-foreground": "#ffffff",
                secondary: "#262626",
                "secondary-foreground": "#e5e5e5",
                muted: "#262626",
                "muted-foreground": "#a3a3a3",
                accent: "#1e3a8a",
                "accent-foreground": "#bfdbfe",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#404040",
                input: "#404040",
                ring: "#3b82f6",
                "chart-1": "#60a5fa",
                "chart-2": "#3b82f6",
                "chart-3": "#2563eb",
                "chart-4": "#1d4ed8",
                "chart-5": "#1e40af",
                radius: "0.375rem",
                sidebar: "#171717",
                "sidebar-foreground": "#e5e5e5",
                "sidebar-primary": "#3b82f6",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#1e3a8a",
                "sidebar-accent-foreground": "#bfdbfe",
                "sidebar-border": "#404040",
                "sidebar-ring": "#3b82f6"
            }
        }
    },
    "violet-bloom": {
        label: "Violet Bloom",
        createdAt: "2025-06-26",
        styles: {
            light: {
                background: "#fdfdfd",
                foreground: "#000000",
                card: "#fdfdfd",
                "card-foreground": "#000000",
                popover: "#fcfcfc",
                "popover-foreground": "#000000",
                primary: "#7033ff",
                "primary-foreground": "#ffffff",
                secondary: "#edf0f4",
                "secondary-foreground": "#080808",
                muted: "#f5f5f5",
                "muted-foreground": "#525252",
                accent: "#e2ebff",
                "accent-foreground": "#1e69dc",
                destructive: "#e54b4f",
                "destructive-foreground": "#ffffff",
                border: "#e7e7ee",
                input: "#ebebeb",
                ring: "#000000",
                "chart-1": "#4ac885",
                "chart-2": "#7033ff",
                "chart-3": "#fd822b",
                "chart-4": "#3276e4",
                "chart-5": "#747474",
                sidebar: "#f5f8fb",
                "sidebar-foreground": "#000000",
                "sidebar-primary": "#000000",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#ebebeb",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#ebebeb",
                "sidebar-ring": "#000000",
                "font-sans": "Plus Jakarta Sans, sans-serif",
                "font-serif": "Lora, serif",
                "font-mono": "IBM Plex Mono, monospace",
                radius: "1.4rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.16",
                "shadow-blur": "3px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px",
                "letter-spacing": "-0.025em",
                spacing: "0.27rem"
            },
            dark: {
                background: "#1a1b1e",
                foreground: "#f0f0f0",
                card: "#222327",
                "card-foreground": "#f0f0f0",
                popover: "#222327",
                "popover-foreground": "#f0f0f0",
                primary: "#8c5cff",
                "primary-foreground": "#ffffff",
                secondary: "#2a2c33",
                "secondary-foreground": "#f0f0f0",
                muted: "#2a2c33",
                "muted-foreground": "#a0a0a0",
                accent: "#1e293b",
                "accent-foreground": "#79c0ff",
                destructive: "#f87171",
                "destructive-foreground": "#ffffff",
                border: "#33353a",
                input: "#33353a",
                ring: "#8c5cff",
                "chart-1": "#4ade80",
                "chart-2": "#8c5cff",
                "chart-3": "#fca5a5",
                "chart-4": "#5993f4",
                "chart-5": "#a0a0a0",
                sidebar: "#161618",
                "sidebar-foreground": "#f0f0f0",
                "sidebar-primary": "#8c5cff",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#2a2c33",
                "sidebar-accent-foreground": "#8c5cff",
                "sidebar-border": "#33353a",
                "sidebar-ring": "#8c5cff",
                "font-sans": "Plus Jakarta Sans, sans-serif",
                "font-serif": "Lora, serif",
                "font-mono": "IBM Plex Mono, monospace",
                radius: "1.4rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.16",
                "shadow-blur": "3px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px",
                "letter-spacing": "-0.025em",
                spacing: "0.27rem"
            }
        }
    },
    "t3-chat": {
        label: "T3 Chat",
        createdAt: "2025-04-19",
        styles: {
            light: {
                background: "#faf5fa",
                foreground: "#501854",
                card: "#faf5fa",
                "card-foreground": "#501854",
                popover: "#ffffff",
                "popover-foreground": "#501854",
                primary: "#a84370",
                "primary-foreground": "#ffffff",
                secondary: "#f1c4e6",
                "secondary-foreground": "#77347c",
                muted: "#f6e5f3",
                "muted-foreground": "#834588",
                accent: "#f1c4e6",
                "accent-foreground": "#77347c",
                destructive: "#ab4347",
                "destructive-foreground": "#ffffff",
                border: "#efbdeb",
                input: "#e7c1dc",
                ring: "#db2777",
                "chart-1": "#d926a2",
                "chart-2": "#6c12b9",
                "chart-3": "#274754",
                "chart-4": "#e8c468",
                "chart-5": "#f4a462",
                sidebar: "#f3e4f6",
                "sidebar-foreground": "#ac1668",
                "sidebar-primary": "#454554",
                "sidebar-primary-foreground": "#faf1f7",
                "sidebar-accent": "#f8f8f7",
                "sidebar-accent-foreground": "#454554",
                "sidebar-border": "#eceae9",
                "sidebar-ring": "#db2777",
                radius: "0.5rem"
            },
            dark: {
                background: "#221d27",
                foreground: "#d2c4de",
                card: "#2c2632",
                "card-foreground": "#dbc5d2",
                popover: "#100a0e",
                "popover-foreground": "#f8f1f5",
                primary: "#a3004c",
                "primary-foreground": "#efc0d8",
                secondary: "#362d3d",
                "secondary-foreground": "#d4c7e1",
                muted: "#28222d",
                "muted-foreground": "#c2b6cf",
                accent: "#463753",
                "accent-foreground": "#f8f1f5",
                destructive: "#301015",
                "destructive-foreground": "#ffffff",
                border: "#3b3237",
                input: "#3e343c",
                ring: "#db2777",
                "chart-1": "#a84370",
                "chart-2": "#934dcb",
                "chart-3": "#e88c30",
                "chart-4": "#af57db",
                "chart-5": "#e23670",
                sidebar: "#181117",
                "sidebar-foreground": "#e0cad6",
                "sidebar-primary": "#1d4ed8",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#261922",
                "sidebar-accent-foreground": "#f4f4f5",
                "sidebar-border": "#000000",
                "sidebar-ring": "#db2777"
            }
        }
    },
    twitter: {
        label: "Twitter",
        createdAt: "2025-04-24",
        styles: {
            light: {
                background: "#ffffff",
                foreground: "#0f1419",
                card: "#f7f8f8",
                "card-foreground": "#0f1419",
                popover: "#ffffff",
                "popover-foreground": "#0f1419",
                primary: "#1e9df1",
                "primary-foreground": "#ffffff",
                secondary: "#0f1419",
                "secondary-foreground": "#ffffff",
                muted: "#E5E5E6",
                "muted-foreground": "#0f1419",
                accent: "#E3ECF6",
                "accent-foreground": "#1e9df1",
                destructive: "#f4212e",
                "destructive-foreground": "#ffffff",
                border: "#e1eaef",
                input: "#f7f9fa",
                ring: "#1da1f2",
                "chart-1": "#1e9df1",
                "chart-2": "#00b87a",
                "chart-3": "#f7b928",
                "chart-4": "#17bf63",
                "chart-5": "#e0245e",
                sidebar: "#f7f8f8",
                "sidebar-foreground": "#0f1419",
                "sidebar-primary": "#1e9df1",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#E3ECF6",
                "sidebar-accent-foreground": "#1e9df1",
                "sidebar-border": "#e1e8ed",
                "sidebar-ring": "#1da1f2",
                "font-sans": "Open Sans, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Menlo, monospace",
                radius: "1.3rem",
                "shadow-color": "rgba(29,161,242,0.15)",
                "shadow-opacity": "0",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#000000",
                foreground: "#e7e9ea",
                card: "#17181c",
                "card-foreground": "#d9d9d9",
                popover: "#000000",
                "popover-foreground": "#e7e9ea",
                primary: "#1c9cf0",
                "primary-foreground": "#ffffff",
                secondary: "#f0f3f4",
                "secondary-foreground": "#0f1419",
                muted: "#181818",
                "muted-foreground": "#72767a",
                accent: "#061622",
                "accent-foreground": "#1c9cf0",
                destructive: "#f4212e",
                "destructive-foreground": "#ffffff",
                border: "#242628",
                input: "#22303c",
                ring: "#1da1f2",
                "chart-1": "#1e9df1",
                "chart-2": "#00b87a",
                "chart-3": "#f7b928",
                "chart-4": "#17bf63",
                "chart-5": "#e0245e",
                sidebar: "#17181c",
                "sidebar-foreground": "#d9d9d9",
                "sidebar-primary": "#1da1f2",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#061622",
                "sidebar-accent-foreground": "#1c9cf0",
                "sidebar-border": "#38444d",
                "sidebar-ring": "#1da1f2",
                "shadow-color": "rgba(29,161,242,0.25)"
            }
        }
    },
    "mocha-mousse": {
        label: "Mocha Mousse",
        createdAt: "2025-04-24",
        styles: {
            light: {
                background: "#F1F0E5",
                foreground: "#56453F",
                card: "#F1F0E5",
                "card-foreground": "#56453F",
                popover: "#FFFFFF",
                "popover-foreground": "#56453F",
                primary: "#A37764",
                "primary-foreground": "#FFFFFF",
                secondary: "#BAAB92",
                "secondary-foreground": "#ffffff",
                muted: "#E4C7B8",
                "muted-foreground": "#8A655A",
                accent: "#E4C7B8",
                "accent-foreground": "#56453F",
                destructive: "#1f1a17",
                "destructive-foreground": "#FFFFFF",
                border: "#BAAB92",
                input: "#BAAB92",
                ring: "#A37764",
                "chart-1": "#A37764",
                "chart-2": "#8A655A",
                "chart-3": "#C39E88",
                "chart-4": "#BAAB92",
                "chart-5": "#A28777",
                sidebar: "#ebd6cb",
                "sidebar-foreground": "#56453F",
                "sidebar-primary": "#A37764",
                "sidebar-primary-foreground": "#FFFFFF",
                "sidebar-accent": "#C39E88",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#A28777",
                "sidebar-ring": "#A37764",
                "font-sans": "DM Sans, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Menlo, monospace",
                radius: "0.5rem",
                "shadow-color": "hsl(20 18% 51% / 0.4)",
                "shadow-opacity": "0.11",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "2px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#2d2521",
                foreground: "#F1F0E5",
                card: "#3c332e",
                "card-foreground": "#F1F0E5",
                popover: "#3c332e",
                "popover-foreground": "#F1F0E5",
                primary: "#C39E88",
                "primary-foreground": "#2d2521",
                secondary: "#8A655A",
                "secondary-foreground": "#F1F0E5",
                muted: "#56453F",
                "muted-foreground": "#c5aa9b",
                accent: "#BAAB92",
                "accent-foreground": "#2d2521",
                destructive: "#E57373",
                "destructive-foreground": "#2d2521",
                border: "#56453F",
                input: "#56453F",
                ring: "#C39E88",
                "chart-1": "#C39E88",
                "chart-2": "#BAAB92",
                "chart-3": "#A37764",
                "chart-4": "#8A655A",
                "chart-5": "#A28777",
                sidebar: "#1f1a17",
                "sidebar-foreground": "#F1F0E5",
                "sidebar-primary": "#C39E88",
                "sidebar-primary-foreground": "#1f1a17",
                "sidebar-accent": "#BAAB92",
                "sidebar-accent-foreground": "#1f1a17",
                "sidebar-border": "#56453F",
                "sidebar-ring": "#C39E88",
                "shadow-color": "hsl(20 18% 30% / 0.5)"
            }
        }
    },
    bubblegum: {
        label: "Bubblegum",
        createdAt: "2025-04-18",
        styles: {
            light: {
                background: "#f6e6ee",
                foreground: "#5b5b5b",
                card: "#fdedc9",
                "card-foreground": "#5b5b5b",
                popover: "#ffffff",
                "popover-foreground": "#5b5b5b",
                primary: "#d04f99",
                "primary-foreground": "#ffffff",
                secondary: "#8acfd1",
                "secondary-foreground": "#333333",
                muted: "#b2e1eb",
                "muted-foreground": "#7a7a7a",
                accent: "#fbe2a7",
                "accent-foreground": "#333333",
                destructive: "#f96f70",
                "destructive-foreground": "#ffffff",
                border: "#d04f99",
                input: "#e4e4e4",
                ring: "#e670ab",
                "chart-1": "#e670ab",
                "chart-2": "#84d2e2",
                "chart-3": "#fbe2a7",
                "chart-4": "#f3a0ca",
                "chart-5": "#d7488e",
                sidebar: "#f8d8ea",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#ec4899",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#f9a8d4",
                "sidebar-accent-foreground": "#333333",
                "sidebar-border": "#f3e8ff",
                "sidebar-ring": "#ec4899",
                "font-sans": "Poppins, sans-serif",
                "font-serif": "Lora, serif",
                "font-mono": "Fira Code, monospace",
                radius: "0.4rem",
                "shadow-color": "hsl(325.78 58.18% 56.86% / 0.5)",
                "shadow-opacity": "1.0",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "3px",
                "shadow-offset-y": "3px"
            },
            dark: {
                background: "#12242e",
                foreground: "#f3e3ea",
                card: "#1c2e38",
                "card-foreground": "#f3e3ea",
                popover: "#1c2e38",
                "popover-foreground": "#f3e3ea",
                primary: "#fbe2a7",
                "primary-foreground": "#12242e",
                secondary: "#e4a2b1",
                "secondary-foreground": "#12242e",
                muted: "#24272b",
                "muted-foreground": "#e4a2b1",
                accent: "#c67b96",
                "accent-foreground": "#f3e3ea",
                destructive: "#e35ea4",
                "destructive-foreground": "#12242e",
                border: "#324859",
                input: "#20333d",
                ring: "#50afb6",
                "chart-1": "#50afb6",
                "chart-2": "#e4a2b1",
                "chart-3": "#c67b96",
                "chart-4": "#175c6c",
                "chart-5": "#24272b",
                sidebar: "#101f28",
                "sidebar-foreground": "#f3f4f6",
                "sidebar-primary": "#ec4899",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#f9a8d4",
                "sidebar-accent-foreground": "#1f2937",
                "sidebar-border": "#374151",
                "sidebar-ring": "#ec4899",
                "font-sans": "Poppins, sans-serif",
                "font-serif": "Lora, serif",
                "font-mono": "Fira Code, monospace",
                "shadow-color": "#324859"
            }
        }
    },
    "amethyst-haze": {
        label: "Amethyst Haze",
        createdAt: "2025-05-08",
        styles: {
            light: {
                background: "#f8f7fa",
                foreground: "#3d3c4f",
                card: "#ffffff",
                "card-foreground": "#3d3c4f",
                popover: "#ffffff",
                "popover-foreground": "#3d3c4f",
                primary: "#8a79ab",
                "primary-foreground": "#f8f7fa",
                secondary: "#dfd9ec",
                "secondary-foreground": "#3d3c4f",
                muted: "#dcd9e3",
                "muted-foreground": "#6b6880",
                accent: "#e6a5b8",
                "accent-foreground": "#4b2e36",
                destructive: "#d95c5c",
                "destructive-foreground": "#f8f7fa",
                border: "#cec9d9",
                input: "#eae7f0",
                ring: "#8a79ab",
                "chart-1": "#8a79ab",
                "chart-2": "#e6a5b8",
                "chart-3": "#77b8a1",
                "chart-4": "#f0c88d",
                "chart-5": "#a0bbe3",
                sidebar: "#f1eff5",
                "sidebar-foreground": "#3d3c4f",
                "sidebar-primary": "#8a79ab",
                "sidebar-primary-foreground": "#f8f7fa",
                "sidebar-accent": "#e6a5b8",
                "sidebar-accent-foreground": "#4b2e36",
                "sidebar-border": "#d7d2e0",
                "sidebar-ring": "#8a79ab",
                "font-sans": "Geist, sans-serif",
                "font-serif": '"Lora", Georgia, serif',
                "font-mono": '"Fira Code", "Courier New", monospace',
                radius: "0.5rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.06",
                "shadow-blur": "5px",
                "shadow-spread": "1px",
                "shadow-offset-x": "1px",
                "shadow-offset-y": "2px",
                "letter-spacing": "0em",
                spacing: "0.25rem"
            },
            dark: {
                background: "#1a1823",
                foreground: "#e0ddef",
                card: "#232030",
                "card-foreground": "#e0ddef",
                popover: "#232030",
                "popover-foreground": "#e0ddef",
                primary: "#a995c9",
                "primary-foreground": "#1a1823",
                secondary: "#5a5370",
                "secondary-foreground": "#e0ddef",
                muted: "#242031",
                "muted-foreground": "#a09aad",
                accent: "#372e3f",
                "accent-foreground": "#f2b8c6",
                destructive: "#e57373",
                "destructive-foreground": "#1a1823",
                border: "#302c40",
                input: "#2a273a",
                ring: "#a995c9",
                "chart-1": "#a995c9",
                "chart-2": "#f2b8c6",
                "chart-3": "#77b8a1",
                "chart-4": "#f0c88d",
                "chart-5": "#a0bbe3",
                sidebar: "#16141e",
                "sidebar-foreground": "#e0ddef",
                "sidebar-primary": "#a995c9",
                "sidebar-primary-foreground": "#1a1823",
                "sidebar-accent": "#372e3f",
                "sidebar-accent-foreground": "#f2b8c6",
                "sidebar-border": "#2a273a",
                "sidebar-ring": "#a995c9"
            }
        }
    },
    notebook: {
        label: "Notebook",
        createdAt: "2025-05-10",
        styles: {
            light: {
                background: "#f9f9f9",
                foreground: "#3a3a3a",
                card: "#ffffff",
                "card-foreground": "#3a3a3a",
                popover: "#ffffff",
                "popover-foreground": "#3a3a3a",
                primary: "#606060",
                "primary-foreground": "#f0f0f0",
                secondary: "#dedede",
                "secondary-foreground": "#3a3a3a",
                muted: "#e3e3e3",
                "muted-foreground": "#505050",
                accent: "#f3eac8",
                "accent-foreground": "#5d4037",
                destructive: "#c87a7a",
                "destructive-foreground": "#ffffff",
                border: "#747272",
                input: "#ffffff",
                ring: "#a0a0a0",
                "chart-1": "#333333",
                "chart-2": "#555555",
                "chart-3": "#777777",
                "chart-4": "#999999",
                "chart-5": "#bbbbbb",
                sidebar: "#f0f0f0",
                "sidebar-foreground": "#3a3a3a",
                "sidebar-primary": "#606060",
                "sidebar-primary-foreground": "#f0f0f0",
                "sidebar-accent": "#f3eac8",
                "sidebar-accent-foreground": "#5d4037",
                "sidebar-border": "#c0c0c0",
                "sidebar-ring": "#a0a0a0",
                "font-sans": "Architects Daughter, sans-serif",
                "font-serif": '"Times New Roman", Times, serif',
                "font-mono": '"Courier New", Courier, monospace',
                radius: "0.625rem",
                "shadow-color": "#000000",
                "shadow-opacity": "0.03",
                "shadow-blur": "5px",
                "shadow-spread": "0px",
                "shadow-offset-x": "1px",
                "shadow-offset-y": "4px",
                "letter-spacing": "0.5px",
                spacing: "0.25rem"
            },
            dark: {
                background: "#2b2b2b",
                foreground: "#dcdcdc",
                card: "#333333",
                "card-foreground": "#dcdcdc",
                popover: "#333333",
                "popover-foreground": "#dcdcdc",
                primary: "#b0b0b0",
                "primary-foreground": "#2b2b2b",
                secondary: "#5a5a5a",
                "secondary-foreground": "#c0c0c0",
                muted: "#454545",
                "muted-foreground": "#a0a0a0",
                accent: "#e0e0e0",
                "accent-foreground": "#333333",
                destructive: "#d9afaf",
                "destructive-foreground": "#2b2b2b",
                border: "#4f4f4f",
                input: "#333333",
                ring: "#c0c0c0",
                "chart-1": "#efefef",
                "chart-2": "#d0d0d0",
                "chart-3": "#b0b0b0",
                "chart-4": "#909090",
                "chart-5": "#707070",
                sidebar: "#212121",
                "sidebar-foreground": "#dcdcdc",
                "sidebar-primary": "#b0b0b0",
                "sidebar-primary-foreground": "#212121",
                "sidebar-accent": "#e0e0e0",
                "sidebar-accent-foreground": "#333333",
                "sidebar-border": "#4f4f4f",
                "sidebar-ring": "#c0c0c0",
                "font-sans": "Architects Daughter, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": '"Fira Code", "Courier New", monospace',
                radius: "0.625rem",
                "shadow-color": "#000000",
                "shadow-opacity": "0.03",
                "shadow-blur": "5px",
                "shadow-spread": "0px",
                "shadow-offset-x": "1px",
                "shadow-offset-y": "4px",
                "letter-spacing": "0.5px",
                spacing: "0.25rem"
            }
        }
    },
    "doom-64": {
        label: "Doom 64",
        createdAt: "2025-04-28",
        styles: {
            light: {
                background: "#cccccc",
                foreground: "#1f1f1f",
                card: "#b0b0b0",
                "card-foreground": "#1f1f1f",
                popover: "#b0b0b0",
                "popover-foreground": "#1f1f1f",
                primary: "#b71c1c",
                "primary-foreground": "#ffffff",
                secondary: "#556b2f",
                "secondary-foreground": "#ffffff",
                muted: "#b8b8b8",
                "muted-foreground": "#4a4a4a",
                accent: "#4682b4",
                "accent-foreground": "#ffffff",
                destructive: "#ff6f00",
                "destructive-foreground": "#000000",
                border: "#505050",
                input: "#505050",
                ring: "#b71c1c",
                "chart-1": "#b71c1c",
                "chart-2": "#556b2f",
                "chart-3": "#4682b4",
                "chart-4": "#ff6f00",
                "chart-5": "#8d6e63",
                sidebar: "#b0b0b0",
                "sidebar-foreground": "#1f1f1f",
                "sidebar-primary": "#b71c1c",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#4682b4",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#505050",
                "sidebar-ring": "#b71c1c",
                "font-sans": '"Oxanium", sans-serif',
                "font-serif": 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                "font-mono": '"Source Code Pro", monospace',
                radius: "0px",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.4",
                "shadow-blur": "4px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px",
                "letter-spacing": "0em",
                spacing: "0.25rem"
            },
            dark: {
                background: "#1a1a1a",
                foreground: "#e0e0e0",
                card: "#2a2a2a",
                "card-foreground": "#e0e0e0",
                popover: "#2a2a2a",
                "popover-foreground": "#e0e0e0",
                primary: "#e53935",
                "primary-foreground": "#ffffff",
                secondary: "#689f38",
                "secondary-foreground": "#000000",
                muted: "#252525",
                "muted-foreground": "#a0a0a0",
                accent: "#64b5f6",
                "accent-foreground": "#000000",
                destructive: "#ffa000",
                "destructive-foreground": "#000000",
                border: "#4a4a4a",
                input: "#4a4a4a",
                ring: "#e53935",
                "chart-1": "#e53935",
                "chart-2": "#689f38",
                "chart-3": "#64b5f6",
                "chart-4": "#ffa000",
                "chart-5": "#a1887f",
                sidebar: "#141414",
                "sidebar-foreground": "#e0e0e0",
                "sidebar-primary": "#e53935",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#64b5f6",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#4a4a4a",
                "sidebar-ring": "#e53935",
                "font-sans": '"Oxanium", sans-serif',
                "font-serif": 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                "font-mono": '"Source Code Pro", monospace',
                radius: "0px",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.6",
                "shadow-blur": "5px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px",
                "letter-spacing": "0em",
                spacing: "0.25rem"
            }
        }
    },
    catppuccin: {
        label: "Catppuccin",
        createdAt: "2025-04-18",
        styles: {
            light: {
                background: "#eff1f5",
                foreground: "#4c4f69",
                card: "#ffffff",
                "card-foreground": "#4c4f69",
                popover: "#ccd0da",
                "popover-foreground": "#4c4f69",
                primary: "#8839ef",
                "primary-foreground": "#ffffff",
                secondary: "#ccd0da",
                "secondary-foreground": "#4c4f69",
                muted: "#dce0e8",
                "muted-foreground": "#6c6f85",
                accent: "#04a5e5",
                "accent-foreground": "#ffffff",
                destructive: "#d20f39",
                "destructive-foreground": "#ffffff",
                border: "#bcc0cc",
                input: "#ccd0da",
                ring: "#8839ef",
                "chart-1": "#8839ef",
                "chart-2": "#04a5e5",
                "chart-3": "#40a02b",
                "chart-4": "#fe640b",
                "chart-5": "#dc8a78",
                sidebar: "#e6e9ef",
                "sidebar-foreground": "#4c4f69",
                "sidebar-primary": "#8839ef",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#04a5e5",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#bcc0cc",
                "sidebar-ring": "#8839ef",
                "font-sans": "Montserrat, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Fira Code, monospace",
                radius: "0.35rem",
                "shadow-color": "hsl(240 30% 25%)",
                "shadow-opacity": "0.12",
                "shadow-blur": "6px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "4px"
            },
            dark: {
                background: "#181825",
                foreground: "#cdd6f4",
                card: "#1e1e2e",
                "card-foreground": "#cdd6f4",
                popover: "#45475a",
                "popover-foreground": "#cdd6f4",
                primary: "#cba6f7",
                "primary-foreground": "#1e1e2e",
                secondary: "#585b70",
                "secondary-foreground": "#cdd6f4",
                muted: "#292c3c",
                "muted-foreground": "#a6adc8",
                accent: "#89dceb",
                "accent-foreground": "#1e1e2e",
                destructive: "#f38ba8",
                "destructive-foreground": "#1e1e2e",
                border: "#313244",
                input: "#313244",
                ring: "#cba6f7",
                "chart-1": "#cba6f7",
                "chart-2": "#89dceb",
                "chart-3": "#a6e3a1",
                "chart-4": "#fab387",
                "chart-5": "#f5e0dc",
                sidebar: "#11111b",
                "sidebar-foreground": "#cdd6f4",
                "sidebar-primary": "#cba6f7",
                "sidebar-primary-foreground": "#1e1e2e",
                "sidebar-accent": "#89dceb",
                "sidebar-accent-foreground": "#1e1e2e",
                "sidebar-border": "#45475a",
                "sidebar-ring": "#cba6f7"
            }
        }
    },
    graphite: {
        label: "Graphite",
        createdAt: "2025-04-17",
        styles: {
            light: {
                background: "#f0f0f0",
                foreground: "#333333",
                card: "#f5f5f5",
                "card-foreground": "#333333",
                popover: "#f5f5f5",
                "popover-foreground": "#333333",
                primary: "#606060",
                "primary-foreground": "#ffffff",
                secondary: "#e0e0e0",
                "secondary-foreground": "#333333",
                muted: "#d9d9d9",
                "muted-foreground": "#666666",
                accent: "#c0c0c0",
                "accent-foreground": "#333333",
                destructive: "#cc3333",
                "destructive-foreground": "#ffffff",
                border: "#d0d0d0",
                input: "#e0e0e0",
                ring: "#606060",
                "chart-1": "#606060",
                "chart-2": "#476666",
                "chart-3": "#909090",
                "chart-4": "#a8a8a8",
                "chart-5": "#c0c0c0",
                sidebar: "#eaeaea",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#606060",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#c0c0c0",
                "sidebar-accent-foreground": "#333333",
                "sidebar-border": "#d0d0d0",
                "sidebar-ring": "#606060",
                "font-sans": "Montserrat, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Fira Code, monospace",
                radius: "0.35rem",
                "shadow-color": "hsl(0 0% 20% / 0.1)",
                "shadow-opacity": "0.15",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#1a1a1a",
                foreground: "#d9d9d9",
                card: "#202020",
                "card-foreground": "#d9d9d9",
                popover: "#202020",
                "popover-foreground": "#d9d9d9",
                primary: "#a0a0a0",
                "primary-foreground": "#1a1a1a",
                secondary: "#303030",
                "secondary-foreground": "#d9d9d9",
                muted: "#2a2a2a",
                "muted-foreground": "#808080",
                accent: "#404040",
                "accent-foreground": "#d9d9d9",
                destructive: "#e06666",
                "destructive-foreground": "#ffffff",
                border: "#353535",
                input: "#303030",
                ring: "#a0a0a0",
                "chart-1": "#a0a0a0",
                "chart-2": "#7e9ca0",
                "chart-3": "#707070",
                "chart-4": "#585858",
                "chart-5": "#404040",
                sidebar: "#1f1f1f",
                "sidebar-foreground": "#d9d9d9",
                "sidebar-primary": "#a0a0a0",
                "sidebar-primary-foreground": "#1a1a1a",
                "sidebar-accent": "#404040",
                "sidebar-accent-foreground": "#d9d9d9",
                "sidebar-border": "#353535",
                "sidebar-ring": "#a0a0a0",
                "font-sans": "Inter, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Fira Code, monospace"
            }
        }
    },
    perpetuity: {
        label: "Perpetuity",
        createdAt: "2025-04-01",
        styles: {
            light: {
                background: "#e8f0f0",
                foreground: "#0a4a55",
                card: "#f2f7f7",
                "card-foreground": "#0a4a55",
                popover: "#f2f7f7",
                "popover-foreground": "#0a4a55",
                primary: "#06858e",
                "primary-foreground": "#ffffff",
                secondary: "#d9eaea",
                "secondary-foreground": "#0a4a55",
                muted: "#e0eaea",
                "muted-foreground": "#427a7e",
                accent: "#c9e5e7",
                "accent-foreground": "#0a4a55",
                destructive: "#d13838",
                "destructive-foreground": "#ffffff",
                border: "#cde0e2",
                input: "#d9eaea",
                ring: "#06858e",
                "chart-1": "#06858e",
                "chart-2": "#1e9ea6",
                "chart-3": "#37b6be",
                "chart-4": "#5dc7ce",
                "chart-5": "#8ad8dd",
                sidebar: "#daebed",
                "sidebar-foreground": "#0a4a55",
                "sidebar-primary": "#06858e",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#c9e5e7",
                "sidebar-accent-foreground": "#0a4a55",
                "sidebar-border": "#cde0e2",
                "sidebar-ring": "#06858e",
                "font-sans": "Courier New, monospace",
                "font-serif": "Courier New, monospace",
                "font-mono": "Courier New, monospace",
                radius: "0.125rem",
                "shadow-color": "hsl(185 70% 30% / 0.15)",
                "shadow-opacity": "0.15",
                "shadow-blur": "2px",
                "shadow-spread": "0px",
                "shadow-offset-x": "1px",
                "shadow-offset-y": "1px"
            },
            dark: {
                background: "#0a1a20",
                foreground: "#4de8e8",
                card: "#0c2025",
                "card-foreground": "#4de8e8",
                popover: "#0c2025",
                "popover-foreground": "#4de8e8",
                primary: "#4de8e8",
                "primary-foreground": "#0a1a20",
                secondary: "#164955",
                "secondary-foreground": "#4de8e8",
                muted: "#0f3039",
                "muted-foreground": "#36a5a5",
                accent: "#164955",
                "accent-foreground": "#4de8e8",
                destructive: "#e83c3c",
                "destructive-foreground": "#f2f2f2",
                border: "#164955",
                input: "#164955",
                ring: "#4de8e8",
                "chart-1": "#4de8e8",
                "chart-2": "#36a5a5",
                "chart-3": "#2d8a8a",
                "chart-4": "#19595e",
                "chart-5": "#0e383c",
                sidebar: "#0a1a20",
                "sidebar-foreground": "#4de8e8",
                "sidebar-primary": "#4de8e8",
                "sidebar-primary-foreground": "#0a1a20",
                "sidebar-accent": "#164955",
                "sidebar-accent-foreground": "#4de8e8",
                "sidebar-border": "#164955",
                "sidebar-ring": "#4de8e8",
                "font-sans": "Source Code Pro, monospace",
                "font-serif": "Source Code Pro, monospace",
                "font-mono": "Source Code Pro, monospace",
                radius: "0.125rem",
                "shadow-color": "hsl(180 70% 60% / 0.2)",
                "shadow-opacity": "0.2",
                "shadow-blur": "2px",
                "shadow-spread": "0px",
                "shadow-offset-x": "1px",
                "shadow-offset-y": "1px"
            }
        }
    },
    "kodama-grove": {
        label: "Kodama Grove",
        styles: {
            light: {
                background: "#e4d7b0",
                foreground: "#5c4b3e",
                card: "#e7dbbf",
                "card-foreground": "#5c4b3e",
                popover: "#f3ead2",
                "popover-foreground": "#5c4b3e",
                primary: "#8d9d4f",
                "primary-foreground": "#fdfbf6",
                secondary: "#decea0",
                "secondary-foreground": "#5c4b3e",
                muted: "#decea0",
                "muted-foreground": "#85766a",
                accent: "#dbc894",
                "accent-foreground": "#5c4b3e",
                destructive: "#d98b7e",
                "destructive-foreground": "#faf8f2",
                border: "#b19681",
                input: "#dbc894",
                ring: "#9db18c",
                "chart-1": "#9db18c",
                "chart-2": "#8a9f7b",
                "chart-3": "#bac9b4",
                "chart-4": "#71856a",
                "chart-5": "#5e6e58",
                sidebar: "#e2d1a2",
                "sidebar-foreground": "#5c4b3e",
                "sidebar-primary": "#9db18c",
                "sidebar-primary-foreground": "#fdfbf6",
                "sidebar-accent": "#eae5d9",
                "sidebar-accent-foreground": "#5c4b3e",
                "sidebar-border": "#e5e0d4",
                "sidebar-ring": "#9db18c",
                "font-sans": "Merriweather, serif",
                "font-serif": "Source Serif 4, serif",
                "font-mono": "JetBrains Mono, monospace",
                radius: "0.425rem",
                "shadow-color": "hsl(88 22% 35% / 0.15)",
                "shadow-opacity": "0.15",
                "shadow-blur": "2px",
                "shadow-spread": "0px",
                "shadow-offset-x": "3px",
                "shadow-offset-y": "3px"
            },
            dark: {
                background: "#3a3529",
                foreground: "#ede4d4",
                card: "#413c33",
                "card-foreground": "#ede4d4",
                popover: "#413c33",
                "popover-foreground": "#ede4d4",
                primary: "#8a9f7b",
                "primary-foreground": "#2a2521",
                secondary: "#5a5345",
                "secondary-foreground": "#ede4d4",
                muted: "#4a4439",
                "muted-foreground": "#a8a096",
                accent: "#a18f5c",
                "accent-foreground": "#2a2521",
                destructive: "#b5766a",
                "destructive-foreground": "#f0e9db",
                border: "#5a5345",
                input: "#5a5345",
                ring: "#8a9f7b",
                "chart-1": "#8a9f7b",
                "chart-2": "#9db18c",
                "chart-3": "#71856a",
                "chart-4": "#a18f5c",
                "chart-5": "#5e6e58",
                sidebar: "#3a3529",
                "sidebar-foreground": "#ede4d4",
                "sidebar-primary": "#8a9f7b",
                "sidebar-primary-foreground": "#2a2521",
                "sidebar-accent": "#a18f5c",
                "sidebar-accent-foreground": "#2a2521",
                "sidebar-border": "#5a5345",
                "sidebar-ring": "#8a9f7b"
            }
        }
    },
    "cosmic-night": {
        label: "Cosmic Night",
        createdAt: "2025-04-04",
        styles: {
            light: {
                background: "#f5f5ff",
                foreground: "#2a2a4a",
                card: "#ffffff",
                "card-foreground": "#2a2a4a",
                popover: "#ffffff",
                "popover-foreground": "#2a2a4a",
                primary: "#6e56cf",
                "primary-foreground": "#ffffff",
                secondary: "#e4dfff",
                "secondary-foreground": "#4a4080",
                muted: "#f0f0fa",
                "muted-foreground": "#6c6c8a",
                accent: "#d8e6ff",
                "accent-foreground": "#2a2a4a",
                destructive: "#ff5470",
                "destructive-foreground": "#ffffff",
                border: "#e0e0f0",
                input: "#e0e0f0",
                ring: "#6e56cf",
                "chart-1": "#6e56cf",
                "chart-2": "#9e8cfc",
                "chart-3": "#5d5fef",
                "chart-4": "#7c75fa",
                "chart-5": "#4740b3",
                radius: "0.5rem",
                sidebar: "#f0f0fa",
                "sidebar-foreground": "#2a2a4a",
                "sidebar-primary": "#6e56cf",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#d8e6ff",
                "sidebar-accent-foreground": "#2a2a4a",
                "sidebar-border": "#e0e0f0",
                "sidebar-ring": "#6e56cf",
                "font-sans": "Inter, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "JetBrains Mono, monospace",
                "shadow-color": "hsl(240 30% 25%)",
                "shadow-opacity": "0.12",
                "shadow-blur": "10px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "4px"
            },
            dark: {
                background: "#0f0f1a",
                foreground: "#e2e2f5",
                card: "#1a1a2e",
                "card-foreground": "#e2e2f5",
                popover: "#1a1a2e",
                "popover-foreground": "#e2e2f5",
                primary: "#a48fff",
                "primary-foreground": "#0f0f1a",
                secondary: "#2d2b55",
                "secondary-foreground": "#c4c2ff",
                muted: "#222244",
                "muted-foreground": "#a0a0c0",
                accent: "#303060",
                "accent-foreground": "#e2e2f5",
                destructive: "#ff5470",
                "destructive-foreground": "#ffffff",
                border: "#303052",
                input: "#303052",
                ring: "#a48fff",
                "chart-1": "#a48fff",
                "chart-2": "#7986cb",
                "chart-3": "#64b5f6",
                "chart-4": "#4db6ac",
                "chart-5": "#ff79c6",
                radius: "0.5rem",
                sidebar: "#1a1a2e",
                "sidebar-foreground": "#e2e2f5",
                "sidebar-primary": "#a48fff",
                "sidebar-primary-foreground": "#0f0f1a",
                "sidebar-accent": "#303060",
                "sidebar-accent-foreground": "#e2e2f5",
                "sidebar-border": "#303052",
                "sidebar-ring": "#a48fff"
            }
        }
    },
    tangerine: {
        label: "Tangerine",
        createdAt: "2025-04-09",
        styles: {
            light: {
                background: "#e8ebed",
                foreground: "#333333",
                card: "#ffffff",
                "card-foreground": "#333333",
                popover: "#ffffff",
                "popover-foreground": "#333333",
                primary: "#e05d38",
                "primary-foreground": "#ffffff",
                secondary: "#f3f4f6",
                "secondary-foreground": "#4b5563",
                muted: "#f9fafb",
                "muted-foreground": "#6b7280",
                accent: "#d6e4f0",
                "accent-foreground": "#1e3a8a",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#dcdfe2",
                input: "#f4f5f7",
                ring: "#e05d38",
                "chart-1": "#86a7c8",
                "chart-2": "#eea591",
                "chart-3": "#5a7ca6",
                "chart-4": "#466494",
                "chart-5": "#334c82",
                sidebar: "#dddfe2",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#e05d38",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#d6e4f0",
                "sidebar-accent-foreground": "#1e3a8a",
                "sidebar-border": "#e5e7eb",
                "sidebar-ring": "#e05d38",
                "font-sans": "Inter, sans-serif",
                "font-serif": "Source Serif 4, serif",
                "font-mono": "JetBrains Mono, monospace",
                radius: "0.75rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.1",
                "shadow-blur": "3px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "1px"
            },
            dark: {
                background: "#1c2433",
                foreground: "#e5e5e5",
                card: "#2a3040",
                "card-foreground": "#e5e5e5",
                popover: "#262b38",
                "popover-foreground": "#e5e5e5",
                primary: "#e05d38",
                "primary-foreground": "#ffffff",
                secondary: "#2a303e",
                "secondary-foreground": "#e5e5e5",
                muted: "#2a303e",
                "muted-foreground": "#a3a3a3",
                accent: "#2a3656",
                "accent-foreground": "#bfdbfe",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#3d4354",
                input: "#3d4354",
                ring: "#e05d38",
                "chart-1": "#86a7c8",
                "chart-2": "#e6a08f",
                "chart-3": "#5a7ca6",
                "chart-4": "#466494",
                "chart-5": "#334c82",
                sidebar: "#2a303f",
                "sidebar-foreground": "#e5e5e5",
                "sidebar-primary": "#e05d38",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#2a3656",
                "sidebar-accent-foreground": "#bfdbfe",
                "sidebar-border": "#3d4354",
                "sidebar-ring": "#e05d38"
            }
        }
    },
    "quantum-rose": {
        label: "Quantum Rose",
        createdAt: "2025-04-03",
        styles: {
            light: {
                background: "#fff0f8",
                foreground: "#91185c",
                card: "#fff7fc",
                "card-foreground": "#91185c",
                popover: "#fff7fc",
                "popover-foreground": "#91185c",
                primary: "#e6067a",
                "primary-foreground": "#ffffff",
                secondary: "#ffd6ff",
                "secondary-foreground": "#91185c",
                muted: "#ffe3f2",
                "muted-foreground": "#c04283",
                accent: "#ffc1e3",
                "accent-foreground": "#91185c",
                destructive: "#d13869",
                "destructive-foreground": "#ffffff",
                border: "#ffc7e6",
                input: "#ffd6ff",
                ring: "#e6067a",
                "chart-1": "#e6067a",
                "chart-2": "#c44b97",
                "chart-3": "#9969b6",
                "chart-4": "#7371bf",
                "chart-5": "#5e84ff",
                sidebar: "#ffedf6",
                "sidebar-foreground": "#91185c",
                "sidebar-primary": "#e6067a",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#ffc1e3",
                "sidebar-accent-foreground": "#91185c",
                "sidebar-border": "#ffddf0",
                "sidebar-ring": "#e6067a",
                "font-sans": "Poppins, sans-serif",
                "font-serif": "Playfair Display, serif",
                "font-mono": "Space Mono, monospace",
                radius: "0.5rem",
                "shadow-color": "hsl(330 70% 30% / 0.12)",
                "shadow-opacity": "0.18",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "3px"
            },
            dark: {
                background: "#1a0922",
                foreground: "#ffb3ff",
                card: "#2a1435",
                "card-foreground": "#ffb3ff",
                popover: "#2a1435",
                "popover-foreground": "#ffb3ff",
                primary: "#ff6bef",
                "primary-foreground": "#180518",
                secondary: "#46204f",
                "secondary-foreground": "#ffb3ff",
                muted: "#331941",
                "muted-foreground": "#d67ad6",
                accent: "#5a1f5d",
                "accent-foreground": "#ffb3ff",
                destructive: "#ff2876",
                "destructive-foreground": "#f9f9f9",
                border: "#4a1b5f",
                input: "#46204f",
                ring: "#ff6bef",
                "chart-1": "#ff6bef",
                "chart-2": "#c359e3",
                "chart-3": "#9161ff",
                "chart-4": "#6f73e2",
                "chart-5": "#547aff",
                sidebar: "#1c0d25",
                "sidebar-foreground": "#ffb3ff",
                "sidebar-primary": "#ff6bef",
                "sidebar-primary-foreground": "#180518",
                "sidebar-accent": "#5a1f5d",
                "sidebar-accent-foreground": "#ffb3ff",
                "sidebar-border": "#4a1b5f",
                "sidebar-ring": "#ff6bef",
                "font-sans": "Quicksand, sans-serif",
                "font-serif": "Playfair Display, serif",
                "font-mono": "Space Mono, monospace",
                "shadow-color": "hsl(300 80% 50% / 0.25)"
            }
        }
    },
    nature: {
        label: "Nature",
        styles: {
            light: {
                background: "#f8f5f0",
                foreground: "#3e2723",
                card: "#f8f5f0",
                "card-foreground": "#3e2723",
                popover: "#f8f5f0",
                "popover-foreground": "#3e2723",
                primary: "#2e7d32",
                "primary-foreground": "#ffffff",
                secondary: "#e8f5e9",
                "secondary-foreground": "#1b5e20",
                muted: "#f0e9e0",
                "muted-foreground": "#6d4c41",
                accent: "#c8e6c9",
                "accent-foreground": "#1b5e20",
                destructive: "#c62828",
                "destructive-foreground": "#ffffff",
                border: "#e0d6c9",
                input: "#e0d6c9",
                ring: "#2e7d32",
                "chart-1": "#4caf50",
                "chart-2": "#388e3c",
                "chart-3": "#2e7d32",
                "chart-4": "#1b5e20",
                "chart-5": "#0a1f0c",
                radius: "0.5rem",
                sidebar: "#f0e9e0",
                "sidebar-foreground": "#3e2723",
                "sidebar-primary": "#2e7d32",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#c8e6c9",
                "sidebar-accent-foreground": "#1b5e20",
                "sidebar-border": "#e0d6c9",
                "sidebar-ring": "#2e7d32",
                "font-sans": "Montserrat, sans-serif",
                "font-serif": "Merriweather, serif",
                "font-mono": "Source Code Pro, monospace"
            },
            dark: {
                background: "#1c2a1f",
                foreground: "#f0ebe5",
                card: "#2d3a2e",
                "card-foreground": "#f0ebe5",
                popover: "#2d3a2e",
                "popover-foreground": "#f0ebe5",
                primary: "#4caf50",
                "primary-foreground": "#0a1f0c",
                secondary: "#3e4a3d",
                "secondary-foreground": "#d7e0d6",
                muted: "#2d3a2e",
                "muted-foreground": "#d7cfc4",
                accent: "#388e3c",
                "accent-foreground": "#f0ebe5",
                destructive: "#c62828",
                "destructive-foreground": "#f0ebe5",
                border: "#3e4a3d",
                input: "#3e4a3d",
                ring: "#4caf50",
                "chart-1": "#81c784",
                "chart-2": "#66bb6a",
                "chart-3": "#4caf50",
                "chart-4": "#43a047",
                "chart-5": "#388e3c",
                radius: "0.5rem",
                sidebar: "#1c2a1f",
                "sidebar-foreground": "#f0ebe5",
                "sidebar-primary": "#4caf50",
                "sidebar-primary-foreground": "#0a1f0c",
                "sidebar-accent": "#388e3c",
                "sidebar-accent-foreground": "#f0ebe5",
                "sidebar-border": "#3e4a3d",
                "sidebar-ring": "#4caf50"
            }
        }
    },
    "bold-tech": {
        label: "Bold Tech",
        styles: {
            light: {
                background: "#ffffff",
                foreground: "#312e81",
                card: "#ffffff",
                "card-foreground": "#312e81",
                popover: "#ffffff",
                "popover-foreground": "#312e81",
                primary: "#8b5cf6",
                "primary-foreground": "#ffffff",
                secondary: "#f3f0ff",
                "secondary-foreground": "#4338ca",
                muted: "#f5f3ff",
                "muted-foreground": "#7c3aed",
                accent: "#dbeafe",
                "accent-foreground": "#1e40af",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#e0e7ff",
                input: "#e0e7ff",
                ring: "#8b5cf6",
                "chart-1": "#8b5cf6",
                "chart-2": "#7c3aed",
                "chart-3": "#6d28d9",
                "chart-4": "#5b21b6",
                "chart-5": "#4c1d95",
                radius: "0.625rem",
                sidebar: "#f5f3ff",
                "sidebar-foreground": "#312e81",
                "sidebar-primary": "#8b5cf6",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#dbeafe",
                "sidebar-accent-foreground": "#1e40af",
                "sidebar-border": "#e0e7ff",
                "sidebar-ring": "#8b5cf6",
                "font-sans": "Roboto, sans-serif",
                "font-serif": "Playfair Display, serif",
                "font-mono": "Fira Code, monospace",
                "shadow-color": "hsl(255 86% 66%)",
                "shadow-opacity": "0.2",
                "shadow-blur": "4px",
                "shadow-spread": "0px",
                "shadow-offset-x": "2px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#0f172a",
                foreground: "#e0e7ff",
                card: "#1e1b4b",
                "card-foreground": "#e0e7ff",
                popover: "#1e1b4b",
                "popover-foreground": "#e0e7ff",
                primary: "#8b5cf6",
                "primary-foreground": "#ffffff",
                secondary: "#1e1b4b",
                "secondary-foreground": "#e0e7ff",
                muted: "#1e1b4b",
                "muted-foreground": "#c4b5fd",
                accent: "#4338ca",
                "accent-foreground": "#e0e7ff",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#2e1065",
                input: "#2e1065",
                ring: "#8b5cf6",
                "chart-1": "#a78bfa",
                "chart-2": "#8b5cf6",
                "chart-3": "#7c3aed",
                "chart-4": "#6d28d9",
                "chart-5": "#5b21b6",
                radius: "0.625rem",
                sidebar: "#0f172a",
                "sidebar-foreground": "#e0e7ff",
                "sidebar-primary": "#8b5cf6",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#4338ca",
                "sidebar-accent-foreground": "#e0e7ff",
                "sidebar-border": "#2e1065",
                "sidebar-ring": "#8b5cf6"
            }
        }
    },
    "elegant-luxury": {
        label: "Elegant Luxury",
        styles: {
            light: {
                background: "#faf7f5",
                foreground: "#1a1a1a",
                card: "#faf7f5",
                "card-foreground": "#1a1a1a",
                popover: "#faf7f5",
                "popover-foreground": "#1a1a1a",
                primary: "#9b2c2c",
                "primary-foreground": "#ffffff",
                secondary: "#fdf2d6",
                "secondary-foreground": "#805500",
                muted: "#f0ebe8",
                "muted-foreground": "#57534e",
                accent: "#fef3c7",
                "accent-foreground": "#7f1d1d",
                destructive: "#991b1b",
                "destructive-foreground": "#ffffff",
                border: "#f5e8d2",
                input: "#f5e8d2",
                ring: "#9b2c2c",
                "chart-1": "#b91c1c",
                "chart-2": "#9b2c2c",
                "chart-3": "#7f1d1d",
                "chart-4": "#b45309",
                "chart-5": "#92400e",
                radius: "0.375rem",
                sidebar: "#f0ebe8",
                "sidebar-foreground": "#1a1a1a",
                "sidebar-primary": "#9b2c2c",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#fef3c7",
                "sidebar-accent-foreground": "#7f1d1d",
                "sidebar-border": "#f5e8d2",
                "sidebar-ring": "#9b2c2c",
                "font-sans": "Poppins, sans-serif",
                "font-serif": "Libre Baskerville, serif",
                "font-mono": "IBM Plex Mono, monospace",
                "shadow-color": "hsl(0 63% 18%)",
                "shadow-opacity": "0.12",
                "shadow-blur": "16px",
                "shadow-spread": "-2px",
                "shadow-offset-x": "1px",
                "shadow-offset-y": "1px"
            },
            dark: {
                background: "#1c1917",
                foreground: "#f5f5f4",
                card: "#292524",
                "card-foreground": "#f5f5f4",
                popover: "#292524",
                "popover-foreground": "#f5f5f4",
                primary: "#b91c1c",
                "primary-foreground": "#faf7f5",
                secondary: "#92400e",
                "secondary-foreground": "#fef3c7",
                muted: "#292524",
                "muted-foreground": "#d6d3d1",
                accent: "#b45309",
                "accent-foreground": "#fef3c7",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#44403c",
                input: "#44403c",
                ring: "#b91c1c",
                "chart-1": "#f87171",
                "chart-2": "#ef4444",
                "chart-3": "#dc2626",
                "chart-4": "#fbbf24",
                "chart-5": "#f59e0b",
                radius: "0.375rem",
                sidebar: "#1c1917",
                "sidebar-foreground": "#f5f5f4",
                "sidebar-primary": "#b91c1c",
                "sidebar-primary-foreground": "#faf7f5",
                "sidebar-accent": "#b45309",
                "sidebar-accent-foreground": "#fef3c7",
                "sidebar-border": "#44403c",
                "sidebar-ring": "#b91c1c"
            }
        }
    },
    "amber-minimal": {
        label: "Amber Minimal",
        createdAt: "2025-04-27",
        styles: {
            light: {
                background: "#ffffff",
                foreground: "#262626",
                card: "#ffffff",
                "card-foreground": "#262626",
                popover: "#ffffff",
                "popover-foreground": "#262626",
                primary: "#f59e0b",
                "primary-foreground": "#000000",
                secondary: "#f3f4f6",
                "secondary-foreground": "#4b5563",
                muted: "#f9fafb",
                "muted-foreground": "#6b7280",
                accent: "#fffbeb",
                "accent-foreground": "#92400e",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#e5e7eb",
                input: "#e5e7eb",
                ring: "#f59e0b",
                "chart-1": "#f59e0b",
                "chart-2": "#d97706",
                "chart-3": "#b45309",
                "chart-4": "#92400e",
                "chart-5": "#78350f",
                sidebar: "#f9fafb",
                "sidebar-foreground": "#262626",
                "sidebar-primary": "#f59e0b",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#fffbeb",
                "sidebar-accent-foreground": "#92400e",
                "sidebar-border": "#e5e7eb",
                "sidebar-ring": "#f59e0b",
                "font-sans": "Inter, sans-serif",
                "font-serif": "Source Serif 4, serif",
                "font-mono": "JetBrains Mono, monospace",
                radius: "0.375rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.1",
                "shadow-blur": "8px",
                "shadow-spread": "-1px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "4px",
                "letter-spacing": "0em",
                spacing: "0.25rem"
            },
            dark: {
                background: "#171717",
                foreground: "#e5e5e5",
                card: "#262626",
                "card-foreground": "#e5e5e5",
                popover: "#262626",
                "popover-foreground": "#e5e5e5",
                primary: "#f59e0b",
                "primary-foreground": "#000000",
                secondary: "#262626",
                "secondary-foreground": "#e5e5e5",
                muted: "#262626",
                "muted-foreground": "#a3a3a3",
                accent: "#92400e",
                "accent-foreground": "#fde68a",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#404040",
                input: "#404040",
                ring: "#f59e0b",
                "chart-1": "#fbbf24",
                "chart-2": "#d97706",
                "chart-3": "#92400e",
                "chart-4": "#b45309",
                "chart-5": "#92400e",
                sidebar: "#0f0f0f",
                "sidebar-foreground": "#e5e5e5",
                "sidebar-primary": "#f59e0b",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#92400e",
                "sidebar-accent-foreground": "#fde68a",
                "sidebar-border": "#404040",
                "sidebar-ring": "#f59e0b"
            }
        }
    },
    supabase: {
        label: "Supabase",
        createdAt: "2025-04-27",
        styles: {
            light: {
                background: "#fcfcfc",
                foreground: "#171717",
                card: "#fcfcfc",
                "card-foreground": "#171717",
                popover: "#fcfcfc",
                "popover-foreground": "#525252",
                primary: "#72e3ad",
                "primary-foreground": "#1e2723",
                secondary: "#fdfdfd",
                "secondary-foreground": "#171717",
                muted: "#ededed",
                "muted-foreground": "#202020",
                accent: "#ededed",
                "accent-foreground": "#202020",
                destructive: "#ca3214",
                "destructive-foreground": "#fffcfc",
                border: "#dfdfdf",
                input: "#f6f6f6",
                ring: "#72e3ad",
                "chart-1": "#72e3ad",
                "chart-2": "#3b82f6",
                "chart-3": "#8b5cf6",
                "chart-4": "#f59e0b",
                "chart-5": "#10b981",
                sidebar: "#fcfcfc",
                "sidebar-foreground": "#707070",
                "sidebar-primary": "#72e3ad",
                "sidebar-primary-foreground": "#1e2723",
                "sidebar-accent": "#ededed",
                "sidebar-accent-foreground": "#202020",
                "sidebar-border": "#dfdfdf",
                "sidebar-ring": "#72e3ad",
                "font-sans": "Outfit, sans-serif",
                "font-serif": 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                "font-mono": "monospace",
                radius: "0.5rem",
                "shadow-color": "#000000",
                "shadow-opacity": "0.17",
                "shadow-blur": "3px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "1px",
                "letter-spacing": "0.025em"
            },
            dark: {
                background: "#121212",
                foreground: "#e2e8f0",
                card: "#171717",
                "card-foreground": "#e2e8f0",
                popover: "#242424",
                "popover-foreground": "#a9a9a9",
                primary: "#006239",
                "primary-foreground": "#dde8e3",
                secondary: "#242424",
                "secondary-foreground": "#fafafa",
                muted: "#1f1f1f",
                "muted-foreground": "#a2a2a2",
                accent: "#313131",
                "accent-foreground": "#fafafa",
                destructive: "#541c15",
                "destructive-foreground": "#ede9e8",
                border: "#292929",
                input: "#242424",
                ring: "#4ade80",
                "chart-1": "#4ade80",
                "chart-2": "#60a5fa",
                "chart-3": "#a78bfa",
                "chart-4": "#fbbf24",
                "chart-5": "#2dd4bf",
                sidebar: "#121212",
                "sidebar-foreground": "#898989",
                "sidebar-primary": "#006239",
                "sidebar-primary-foreground": "#dde8e3",
                "sidebar-accent": "#313131",
                "sidebar-accent-foreground": "#fafafa",
                "sidebar-border": "#292929",
                "sidebar-ring": "#4ade80"
            }
        }
    },
    "neo-brutalism": {
        label: "Neo Brutalism",
        styles: {
            light: {
                background: "#ffffff",
                foreground: "#000000",
                card: "#ffffff",
                "card-foreground": "#000000",
                popover: "#ffffff",
                "popover-foreground": "#000000",
                primary: "#ff3333",
                "primary-foreground": "#ffffff",
                secondary: "#ffff00",
                "secondary-foreground": "#000000",
                muted: "#f0f0f0",
                "muted-foreground": "#333333",
                accent: "#0066ff",
                "accent-foreground": "#ffffff",
                destructive: "#000000",
                "destructive-foreground": "#ffffff",
                border: "#000000",
                input: "#000000",
                ring: "#ff3333",
                "chart-1": "#ff3333",
                "chart-2": "#ffff00",
                "chart-3": "#0066ff",
                "chart-4": "#00cc00",
                "chart-5": "#cc00cc",
                radius: "0px",
                sidebar: "#f0f0f0",
                "sidebar-foreground": "#000000",
                "sidebar-primary": "#ff3333",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#0066ff",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#000000",
                "sidebar-ring": "#ff3333",
                "font-sans": "DM Sans, sans-serif",
                "font-mono": "Space Mono, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "1",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "4px",
                "shadow-offset-y": "4px"
            },
            dark: {
                background: "#000000",
                foreground: "#ffffff",
                card: "#333333",
                "card-foreground": "#ffffff",
                popover: "#333333",
                "popover-foreground": "#ffffff",
                primary: "#ff6666",
                "primary-foreground": "#000000",
                secondary: "#ffff33",
                "secondary-foreground": "#000000",
                muted: "#333333",
                "muted-foreground": "#cccccc",
                accent: "#3399ff",
                "accent-foreground": "#000000",
                destructive: "#ffffff",
                "destructive-foreground": "#000000",
                border: "#ffffff",
                input: "#ffffff",
                ring: "#ff6666",
                "chart-1": "#ff6666",
                "chart-2": "#ffff33",
                "chart-3": "#3399ff",
                "chart-4": "#33cc33",
                "chart-5": "#cc33cc",
                radius: "0px",
                sidebar: "#000000",
                "sidebar-foreground": "#ffffff",
                "sidebar-primary": "#ff6666",
                "sidebar-primary-foreground": "#000000",
                "sidebar-accent": "#3399ff",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#ffffff",
                "sidebar-ring": "#ff6666"
            }
        }
    },
    "solar-dusk": {
        label: "Solar Dusk",
        createdAt: "2025-04-12",
        styles: {
            light: {
                background: "#FDFBF7",
                foreground: "#4A3B33",
                card: "#F8F4EE",
                "card-foreground": "#4A3B33",
                popover: "#F8F4EE",
                "popover-foreground": "#4A3B33",
                primary: "#B45309",
                "primary-foreground": "#FFFFFF",
                secondary: "#E4C090",
                "secondary-foreground": "#57534E",
                muted: "#F1E9DA",
                "muted-foreground": "#78716C",
                accent: "#f2daba",
                "accent-foreground": "#57534E",
                destructive: "#991B1B",
                "destructive-foreground": "#FFFFFF",
                border: "#E4D9BC",
                input: "#E4D9BC",
                ring: "#B45309",
                "chart-1": "#B45309",
                "chart-2": "#78716C",
                "chart-3": "#A16207",
                "chart-4": "#78716C",
                "chart-5": "#CA8A04",
                radius: "0.3rem",
                sidebar: "#F1E9DA",
                "sidebar-foreground": "#4A3B33",
                "sidebar-primary": "#B45309",
                "sidebar-primary-foreground": "#FFFFFF",
                "sidebar-accent": "#A16207",
                "sidebar-accent-foreground": "#FFFFFF",
                "sidebar-border": "#E4D9BC",
                "sidebar-ring": "#B45309",
                "font-sans": "Oxanium, sans-serif",
                "font-serif": "Merriweather, serif",
                "font-mono": "Fira Code, monospace",
                "shadow-color": "hsl(28 18% 25%)",
                "shadow-opacity": "0.18",
                "shadow-blur": "3px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#1C1917",
                foreground: "#F5F5F4",
                card: "#292524",
                "card-foreground": "#F5F5F4",
                popover: "#292524",
                "popover-foreground": "#F5F5F4",
                primary: "#F97316",
                "primary-foreground": "#FFFFFF",
                secondary: "#57534E",
                "secondary-foreground": "#E7E5E4",
                muted: "#292524",
                "muted-foreground": "#A8A29E",
                accent: "#1e4252",
                "accent-foreground": "#E7E5E4",
                destructive: "#DC2626",
                "destructive-foreground": "#FFFFFF",
                border: "#44403C",
                input: "#44403C",
                ring: "#F97316",
                "chart-1": "#F97316",
                "chart-2": "#0EA5E9",
                "chart-3": "#EAB308",
                "chart-4": "#A8A29E",
                "chart-5": "#78716C",
                radius: "0.3rem",
                sidebar: "#292524",
                "sidebar-foreground": "#F5F5F4",
                "sidebar-primary": "#F97316",
                "sidebar-primary-foreground": "#FFFFFF",
                "sidebar-accent": "#0EA5E9",
                "sidebar-accent-foreground": "#0C2A4D",
                "sidebar-border": "#44403C",
                "sidebar-ring": "#F97316",
                "shadow-color": "hsl(0 0% 5%)"
            }
        }
    },
    claymorphism: {
        label: "Claymorphism",
        styles: {
            light: {
                background: "#e7e5e4",
                foreground: "#1e293b",
                card: "#f5f5f4",
                "card-foreground": "#1e293b",
                popover: "#f5f5f4",
                "popover-foreground": "#1e293b",
                primary: "#6366f1",
                "primary-foreground": "#ffffff",
                secondary: "#d6d3d1",
                "secondary-foreground": "#4b5563",
                muted: "#e7e5e4",
                "muted-foreground": "#6b7280",
                accent: "#f3e5f5",
                "accent-foreground": "#374151",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#d6d3d1",
                input: "#d6d3d1",
                ring: "#6366f1",
                "chart-1": "#6366f1",
                "chart-2": "#4f46e5",
                "chart-3": "#4338ca",
                "chart-4": "#3730a3",
                "chart-5": "#312e81",
                radius: "1.25rem",
                sidebar: "#d6d3d1",
                "sidebar-foreground": "#1e293b",
                "sidebar-primary": "#6366f1",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#f3e5f5",
                "sidebar-accent-foreground": "#374151",
                "sidebar-border": "#d6d3d1",
                "sidebar-ring": "#6366f1",
                "font-sans": "Plus Jakarta Sans, sans-serif",
                "font-serif": "Lora, serif",
                "font-mono": "Roboto Mono, monospace",
                "shadow-color": "hsl(240 4% 60%)",
                "shadow-opacity": "0.18",
                "shadow-blur": "10px",
                "shadow-spread": "4px",
                "shadow-offset-x": "2px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#1e1b18",
                foreground: "#e2e8f0",
                card: "#2c2825",
                "card-foreground": "#e2e8f0",
                popover: "#2c2825",
                "popover-foreground": "#e2e8f0",
                primary: "#818cf8",
                "primary-foreground": "#1e1b18",
                secondary: "#3a3633",
                "secondary-foreground": "#d1d5db",
                muted: "#2c2825",
                "muted-foreground": "#9ca3af",
                accent: "#484441",
                "accent-foreground": "#d1d5db",
                destructive: "#ef4444",
                "destructive-foreground": "#1e1b18",
                border: "#3a3633",
                input: "#3a3633",
                ring: "#818cf8",
                "chart-1": "#818cf8",
                "chart-2": "#6366f1",
                "chart-3": "#4f46e5",
                "chart-4": "#4338ca",
                "chart-5": "#3730a3",
                radius: "1.25rem",
                sidebar: "#3a3633",
                "sidebar-foreground": "#e2e8f0",
                "sidebar-primary": "#818cf8",
                "sidebar-primary-foreground": "#1e1b18",
                "sidebar-accent": "#484441",
                "sidebar-accent-foreground": "#d1d5db",
                "sidebar-border": "#3a3633",
                "sidebar-ring": "#818cf8",
                "shadow-color": "hsl(0 0% 0%)"
            }
        }
    },
    cyberpunk: {
        label: "Cyberpunk",
        styles: {
            light: {
                background: "#f8f9fa",
                foreground: "#0c0c1d",
                card: "#ffffff",
                "card-foreground": "#0c0c1d",
                popover: "#ffffff",
                "popover-foreground": "#0c0c1d",
                primary: "#ff00c8",
                "primary-foreground": "#ffffff",
                secondary: "#f0f0ff",
                "secondary-foreground": "#0c0c1d",
                muted: "#f0f0ff",
                "muted-foreground": "#0c0c1d",
                accent: "#00ffcc",
                "accent-foreground": "#0c0c1d",
                destructive: "#ff3d00",
                "destructive-foreground": "#ffffff",
                border: "#dfe6e9",
                input: "#dfe6e9",
                ring: "#ff00c8",
                "chart-1": "#ff00c8",
                "chart-2": "#9000ff",
                "chart-3": "#00e5ff",
                "chart-4": "#00ffcc",
                "chart-5": "#ffe600",
                radius: "0.5rem",
                sidebar: "#f0f0ff",
                "sidebar-foreground": "#0c0c1d",
                "sidebar-primary": "#ff00c8",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#00ffcc",
                "sidebar-accent-foreground": "#0c0c1d",
                "sidebar-border": "#dfe6e9",
                "sidebar-ring": "#ff00c8",
                "font-sans": "Outfit, sans-serif",
                "font-mono": "Fira Code, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.1",
                "shadow-blur": "8px",
                "shadow-spread": "-2px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "4px"
            },
            dark: {
                background: "#0c0c1d",
                foreground: "#eceff4",
                card: "#1e1e3f",
                "card-foreground": "#eceff4",
                popover: "#1e1e3f",
                "popover-foreground": "#eceff4",
                primary: "#ff00c8",
                "primary-foreground": "#ffffff",
                secondary: "#1e1e3f",
                "secondary-foreground": "#eceff4",
                muted: "#1e1e3f",
                "muted-foreground": "#8085a6",
                accent: "#00ffcc",
                "accent-foreground": "#0c0c1d",
                destructive: "#ff3d00",
                "destructive-foreground": "#ffffff",
                border: "#2e2e5e",
                input: "#2e2e5e",
                ring: "#ff00c8",
                "chart-1": "#ff00c8",
                "chart-2": "#9000ff",
                "chart-3": "#00e5ff",
                "chart-4": "#00ffcc",
                "chart-5": "#ffe600",
                radius: "0.5rem",
                sidebar: "#0c0c1d",
                "sidebar-foreground": "#eceff4",
                "sidebar-primary": "#ff00c8",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#00ffcc",
                "sidebar-accent-foreground": "#0c0c1d",
                "sidebar-border": "#2e2e5e",
                "sidebar-ring": "#ff00c8"
            }
        }
    },
    "pastel-dreams": {
        label: "Pastel Dreams",
        styles: {
            light: {
                background: "#f7f3f9",
                foreground: "#374151",
                card: "#ffffff",
                "card-foreground": "#374151",
                popover: "#ffffff",
                "popover-foreground": "#374151",
                primary: "#a78bfa",
                "primary-foreground": "#ffffff",
                secondary: "#e9d8fd",
                "secondary-foreground": "#4b5563",
                muted: "#f3e8ff",
                "muted-foreground": "#6b7280",
                accent: "#f3e5f5",
                "accent-foreground": "#374151",
                destructive: "#fca5a5",
                "destructive-foreground": "#ffffff",
                border: "#e9d8fd",
                input: "#e9d8fd",
                ring: "#a78bfa",
                "chart-1": "#a78bfa",
                "chart-2": "#8b5cf6",
                "chart-3": "#7c3aed",
                "chart-4": "#6d28d9",
                "chart-5": "#5b21b6",
                radius: "1.5rem",
                sidebar: "#e9d8fd",
                "sidebar-foreground": "#374151",
                "sidebar-primary": "#a78bfa",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#f3e5f5",
                "sidebar-accent-foreground": "#374151",
                "sidebar-border": "#e9d8fd",
                "sidebar-ring": "#a78bfa",
                "font-sans": "Open Sans, sans-serif",
                "font-serif": "Source Serif 4, serif",
                "font-mono": "IBM Plex Mono, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.08",
                "shadow-blur": "16px",
                "shadow-spread": "-4px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "8px"
            },
            dark: {
                background: "#1c1917",
                foreground: "#e0e7ff",
                card: "#2d2535",
                "card-foreground": "#e0e7ff",
                popover: "#2d2535",
                "popover-foreground": "#e0e7ff",
                primary: "#c0aafd",
                "primary-foreground": "#1c1917",
                secondary: "#3f324a",
                "secondary-foreground": "#d1d5db",
                muted: "#2d2535",
                "muted-foreground": "#9ca3af",
                accent: "#4a3d5a",
                "accent-foreground": "#d1d5db",
                destructive: "#fca5a5",
                "destructive-foreground": "#1c1917",
                border: "#3f324a",
                input: "#3f324a",
                ring: "#c0aafd",
                "chart-1": "#c0aafd",
                "chart-2": "#a78bfa",
                "chart-3": "#8b5cf6",
                "chart-4": "#7c3aed",
                "chart-5": "#6d28d9",
                radius: "1.5rem",
                sidebar: "#3f324a",
                "sidebar-foreground": "#e0e7ff",
                "sidebar-primary": "#c0aafd",
                "sidebar-primary-foreground": "#1c1917",
                "sidebar-accent": "#4a3d5a",
                "sidebar-accent-foreground": "#d1d5db",
                "sidebar-border": "#3f324a",
                "sidebar-ring": "#c0aafd"
            }
        }
    },
    "clean-slate": {
        label: "Clean Slate",
        styles: {
            light: {
                background: "#f8fafc",
                foreground: "#1e293b",
                card: "#ffffff",
                "card-foreground": "#1e293b",
                popover: "#ffffff",
                "popover-foreground": "#1e293b",
                primary: "#6366f1",
                "primary-foreground": "#ffffff",
                secondary: "#e5e7eb",
                "secondary-foreground": "#374151",
                muted: "#f3f4f6",
                "muted-foreground": "#6b7280",
                accent: "#e0e7ff",
                "accent-foreground": "#374151",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#d1d5db",
                input: "#d1d5db",
                ring: "#6366f1",
                "chart-1": "#6366f1",
                "chart-2": "#4f46e5",
                "chart-3": "#4338ca",
                "chart-4": "#3730a3",
                "chart-5": "#312e81",
                radius: "0.5rem",
                sidebar: "#f3f4f6",
                "sidebar-foreground": "#1e293b",
                "sidebar-primary": "#6366f1",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#e0e7ff",
                "sidebar-accent-foreground": "#374151",
                "sidebar-border": "#d1d5db",
                "sidebar-ring": "#6366f1",
                "font-sans": "Inter, sans-serif",
                "font-serif": "Merriweather, serif",
                "font-mono": "JetBrains Mono, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.1",
                "shadow-blur": "8px",
                "shadow-spread": "-1px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "4px"
            },
            dark: {
                background: "#0f172a",
                foreground: "#e2e8f0",
                card: "#1e293b",
                "card-foreground": "#e2e8f0",
                popover: "#1e293b",
                "popover-foreground": "#e2e8f0",
                primary: "#818cf8",
                "primary-foreground": "#0f172a",
                secondary: "#2d3748",
                "secondary-foreground": "#d1d5db",
                muted: "#1e293b",
                "muted-foreground": "#9ca3af",
                accent: "#374151",
                "accent-foreground": "#d1d5db",
                destructive: "#ef4444",
                "destructive-foreground": "#0f172a",
                border: "#4b5563",
                input: "#4b5563",
                ring: "#818cf8",
                "chart-1": "#818cf8",
                "chart-2": "#6366f1",
                "chart-3": "#4f46e5",
                "chart-4": "#4338ca",
                "chart-5": "#3730a3",
                radius: "0.5rem",
                sidebar: "#1e293b",
                "sidebar-foreground": "#e2e8f0",
                "sidebar-primary": "#818cf8",
                "sidebar-primary-foreground": "#0f172a",
                "sidebar-accent": "#374151",
                "sidebar-accent-foreground": "#d1d5db",
                "sidebar-border": "#4b5563",
                "sidebar-ring": "#818cf8"
            }
        }
    },
    caffeine: {
        label: "Caffeine",
        styles: {
            light: {
                background: "#f9f9f9",
                foreground: "#202020",
                card: "#fcfcfc",
                "card-foreground": "#202020",
                popover: "#fcfcfc",
                "popover-foreground": "#202020",
                primary: "#644a40",
                "primary-foreground": "#ffffff",
                secondary: "#ffdfb5",
                "secondary-foreground": "#582d1d",
                muted: "#efefef",
                "muted-foreground": "#646464",
                accent: "#e8e8e8",
                "accent-foreground": "#202020",
                destructive: "#e54d2e",
                "destructive-foreground": "#ffffff",
                border: "#d8d8d8",
                input: "#d8d8d8",
                ring: "#644a40",
                "chart-1": "#644a40",
                "chart-2": "#ffdfb5",
                "chart-3": "#e8e8e8",
                "chart-4": "#ffe6c4",
                "chart-5": "#66493e",
                sidebar: "#fbfbfb",
                "sidebar-foreground": "#252525",
                "sidebar-primary": "#343434",
                "sidebar-primary-foreground": "#fbfbfb",
                "sidebar-accent": "#f7f7f7",
                "sidebar-accent-foreground": "#343434",
                "sidebar-border": "#ebebeb",
                "sidebar-ring": "#b5b5b5",
                radius: "0.5rem"
            },
            dark: {
                background: "#111111",
                foreground: "#eeeeee",
                card: "#191919",
                "card-foreground": "#eeeeee",
                popover: "#191919",
                "popover-foreground": "#eeeeee",
                primary: "#ffe0c2",
                "primary-foreground": "#081a1b",
                secondary: "#393028",
                "secondary-foreground": "#ffe0c2",
                muted: "#222222",
                "muted-foreground": "#b4b4b4",
                accent: "#2a2a2a",
                "accent-foreground": "#eeeeee",
                destructive: "#e54d2e",
                "destructive-foreground": "#ffffff",
                border: "#201e18",
                input: "#484848",
                ring: "#ffe0c2",
                "chart-1": "#ffe0c2",
                "chart-2": "#393028",
                "chart-3": "#2a2a2a",
                "chart-4": "#42382e",
                "chart-5": "#ffe0c1",
                sidebar: "#18181b",
                "sidebar-foreground": "#f4f4f5",
                "sidebar-primary": "#1d4ed8",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#27272a",
                "sidebar-accent-foreground": "#f4f4f5",
                "sidebar-border": "#27272a",
                "sidebar-ring": "#d4d4d8",
                radius: "0.5rem"
            }
        }
    },
    "ocean-breeze": {
        label: "Ocean Breeze",
        styles: {
            light: {
                background: "#f0f8ff",
                foreground: "#374151",
                card: "#ffffff",
                "card-foreground": "#374151",
                popover: "#ffffff",
                "popover-foreground": "#374151",
                primary: "#22c55e",
                "primary-foreground": "#ffffff",
                secondary: "#e0f2fe",
                "secondary-foreground": "#4b5563",
                muted: "#f3f4f6",
                "muted-foreground": "#6b7280",
                accent: "#d1fae5",
                "accent-foreground": "#374151",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#e5e7eb",
                input: "#e5e7eb",
                ring: "#22c55e",
                "chart-1": "#22c55e",
                "chart-2": "#10b981",
                "chart-3": "#059669",
                "chart-4": "#047857",
                "chart-5": "#065f46",
                radius: "0.5rem",
                sidebar: "#e0f2fe",
                "sidebar-foreground": "#374151",
                "sidebar-primary": "#22c55e",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#d1fae5",
                "sidebar-accent-foreground": "#374151",
                "sidebar-border": "#e5e7eb",
                "sidebar-ring": "#22c55e",
                "font-sans": "DM Sans, sans-serif",
                "font-serif": "Lora, serif",
                "font-mono": "IBM Plex Mono, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.1",
                "shadow-blur": "8px",
                "shadow-spread": "-1px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "4px"
            },
            dark: {
                background: "#0f172a",
                foreground: "#d1d5db",
                card: "#1e293b",
                "card-foreground": "#d1d5db",
                popover: "#1e293b",
                "popover-foreground": "#d1d5db",
                primary: "#34d399",
                "primary-foreground": "#0f172a",
                secondary: "#2d3748",
                "secondary-foreground": "#a1a1aa",
                muted: "#1e293b",
                "muted-foreground": "#6b7280",
                accent: "#374151",
                "accent-foreground": "#a1a1aa",
                destructive: "#ef4444",
                "destructive-foreground": "#0f172a",
                border: "#4b5563",
                input: "#4b5563",
                ring: "#34d399",
                "chart-1": "#34d399",
                "chart-2": "#2dd4bf",
                "chart-3": "#22c55e",
                "chart-4": "#10b981",
                "chart-5": "#059669",
                radius: "0.5rem",
                sidebar: "#1e293b",
                "sidebar-foreground": "#d1d5db",
                "sidebar-primary": "#34d399",
                "sidebar-primary-foreground": "#0f172a",
                "sidebar-accent": "#374151",
                "sidebar-accent-foreground": "#a1a1aa",
                "sidebar-border": "#4b5563",
                "sidebar-ring": "#34d399"
            }
        }
    },
    "retro-arcade": {
        label: "Retro Arcade",
        styles: {
            light: {
                background: "#fdf6e3",
                foreground: "#073642",
                card: "#eee8d5",
                "card-foreground": "#073642",
                popover: "#eee8d5",
                "popover-foreground": "#073642",
                primary: "#d33682",
                "primary-foreground": "#ffffff",
                secondary: "#2aa198",
                "secondary-foreground": "#ffffff",
                muted: "#93a1a1",
                "muted-foreground": "#073642",
                accent: "#cb4b16",
                "accent-foreground": "#ffffff",
                destructive: "#dc322f",
                "destructive-foreground": "#ffffff",
                border: "#839496",
                input: "#839496",
                ring: "#d33682",
                "chart-1": "#268bd2",
                "chart-2": "#2aa198",
                "chart-3": "#d33682",
                "chart-4": "#cb4b16",
                "chart-5": "#dc322f",
                radius: "0.25rem",
                sidebar: "#fdf6e3",
                "sidebar-foreground": "#073642",
                "sidebar-primary": "#d33682",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#2aa198",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#839496",
                "sidebar-ring": "#d33682",
                "font-sans": "Outfit, sans-serif",
                "font-mono": "Space Mono, monospace",
                "shadow-color": "hsl(196 83% 10%)",
                "shadow-opacity": "0.15",
                "shadow-blur": "4px",
                "shadow-spread": "0px",
                "shadow-offset-x": "2px",
                "shadow-offset-y": "2px"
            },
            dark: {
                background: "#002b36",
                foreground: "#93a1a1",
                card: "#073642",
                "card-foreground": "#93a1a1",
                popover: "#073642",
                "popover-foreground": "#93a1a1",
                primary: "#d33682",
                "primary-foreground": "#ffffff",
                secondary: "#2aa198",
                "secondary-foreground": "#ffffff",
                muted: "#586e75",
                "muted-foreground": "#93a1a1",
                accent: "#cb4b16",
                "accent-foreground": "#ffffff",
                destructive: "#dc322f",
                "destructive-foreground": "#ffffff",
                border: "#586e75",
                input: "#586e75",
                ring: "#d33682",
                "chart-1": "#268bd2",
                "chart-2": "#2aa198",
                "chart-3": "#d33682",
                "chart-4": "#cb4b16",
                "chart-5": "#dc322f",
                radius: "0.25rem",
                sidebar: "#002b36",
                "sidebar-foreground": "#93a1a1",
                "sidebar-primary": "#d33682",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#2aa198",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#586e75",
                "sidebar-ring": "#d33682"
            }
        }
    },
    "midnight-bloom": {
        label: "Midnight Bloom",
        styles: {
            light: {
                background: "#f9f9f9",
                foreground: "#333333",
                card: "#ffffff",
                "card-foreground": "#333333",
                popover: "#ffffff",
                "popover-foreground": "#333333",
                primary: "#6c5ce7",
                "primary-foreground": "#ffffff",
                secondary: "#a1c9f2",
                "secondary-foreground": "#333333",
                muted: "#c9c4b5",
                "muted-foreground": "#6e6e6e",
                accent: "#8b9467",
                "accent-foreground": "#ffffff",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#d4d4d4",
                input: "#d4d4d4",
                ring: "#6c5ce7",
                "chart-1": "#6c5ce7",
                "chart-2": "#8e44ad",
                "chart-3": "#4b0082",
                "chart-4": "#6495ed",
                "chart-5": "#4682b4",
                radius: "0.5rem",
                sidebar: "#f9f9f9",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#6c5ce7",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#8b9467",
                "sidebar-accent-foreground": "#ffffff",
                "sidebar-border": "#d4d4d4",
                "sidebar-ring": "#6c5ce7",
                "font-sans": "Montserrat, sans-serif",
                "font-serif": "Playfair Display, serif",
                "font-mono": "Source Code Pro, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.1",
                "shadow-blur": "10px",
                "shadow-spread": "-2px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "5px"
            },
            dark: {
                background: "#1a1d23",
                foreground: "#e5e5e5",
                card: "#2f3436",
                "card-foreground": "#e5e5e5",
                popover: "#2f3436",
                "popover-foreground": "#e5e5e5",
                primary: "#6c5ce7",
                "primary-foreground": "#ffffff",
                secondary: "#4b0082",
                "secondary-foreground": "#e5e5e5",
                muted: "#444444",
                "muted-foreground": "#a3a3a3",
                accent: "#6495ed",
                "accent-foreground": "#e5e5e5",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#444444",
                input: "#444444",
                ring: "#6c5ce7",
                "chart-1": "#6c5ce7",
                "chart-2": "#8e44ad",
                "chart-3": "#4b0082",
                "chart-4": "#6495ed",
                "chart-5": "#4682b4",
                radius: "0.5rem",
                sidebar: "#1a1d23",
                "sidebar-foreground": "#e5e5e5",
                "sidebar-primary": "#6c5ce7",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#6495ed",
                "sidebar-accent-foreground": "#e5e5e5",
                "sidebar-border": "#444444",
                "sidebar-ring": "#6c5ce7"
            }
        }
    },
    candyland: {
        label: "Candyland",
        styles: {
            light: {
                background: "#f7f9fa",
                foreground: "#333333",
                card: "#ffffff",
                "card-foreground": "#333333",
                popover: "#ffffff",
                "popover-foreground": "#333333",
                primary: "#ffc0cb",
                "primary-foreground": "#000000",
                secondary: "#87ceeb",
                "secondary-foreground": "#000000",
                muted: "#ddd9c4",
                "muted-foreground": "#6e6e6e",
                accent: "#ffff00",
                "accent-foreground": "#000000",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#d4d4d4",
                input: "#d4d4d4",
                ring: "#ffc0cb",
                "chart-1": "#ffc0cb",
                "chart-2": "#87ceeb",
                "chart-3": "#ffff00",
                "chart-4": "#ff99cc",
                "chart-5": "#33cc33",
                radius: "0.5rem",
                sidebar: "#f7f9fa",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#ffc0cb",
                "sidebar-primary-foreground": "#000000",
                "sidebar-accent": "#ffff00",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#d4d4d4",
                "sidebar-ring": "#ffc0cb",
                "font-sans": "Poppins, sans-serif",
                "font-mono": "Roboto Mono, monospace"
            },
            dark: {
                background: "#1a1d23",
                foreground: "#e5e5e5",
                card: "#2f3436",
                "card-foreground": "#e5e5e5",
                popover: "#2f3436",
                "popover-foreground": "#e5e5e5",
                primary: "#ff99cc",
                "primary-foreground": "#000000",
                secondary: "#33cc33",
                "secondary-foreground": "#000000",
                muted: "#444444",
                "muted-foreground": "#a3a3a3",
                accent: "#87ceeb",
                "accent-foreground": "#000000",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#444444",
                input: "#444444",
                ring: "#ff99cc",
                "chart-1": "#ff99cc",
                "chart-2": "#33cc33",
                "chart-3": "#87ceeb",
                "chart-4": "#ffff00",
                "chart-5": "#ffcc00",
                radius: "0.5rem",
                sidebar: "#1a1d23",
                "sidebar-foreground": "#e5e5e5",
                "sidebar-primary": "#ff99cc",
                "sidebar-primary-foreground": "#000000",
                "sidebar-accent": "#87ceeb",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#444444",
                "sidebar-ring": "#ff99cc"
            }
        }
    },
    "northern-lights": {
        label: "Northern Lights",
        styles: {
            light: {
                background: "#f9f9fa",
                foreground: "#333333",
                card: "#ffffff",
                "card-foreground": "#333333",
                popover: "#ffffff",
                "popover-foreground": "#333333",
                primary: "#34a85a",
                "primary-foreground": "#ffffff",
                secondary: "#6495ed",
                "secondary-foreground": "#ffffff",
                muted: "#ddd9c4",
                "muted-foreground": "#6e6e6e",
                accent: "#66d9ef",
                "accent-foreground": "#333333",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#d4d4d4",
                input: "#d4d4d4",
                ring: "#34a85a",
                "chart-1": "#34a85a",
                "chart-2": "#6495ed",
                "chart-3": "#66d9ef",
                "chart-4": "#4682b4",
                "chart-5": "#1a9641",
                radius: "0.5rem",
                sidebar: "#f9f9fa",
                "sidebar-foreground": "#333333",
                "sidebar-primary": "#34a85a",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#66d9ef",
                "sidebar-accent-foreground": "#333333",
                "sidebar-border": "#d4d4d4",
                "sidebar-ring": "#34a85a",
                "font-sans": "Plus Jakarta Sans, sans-serif",
                "font-serif": "Source Serif 4, serif",
                "font-mono": "JetBrains Mono, monospace"
            },
            dark: {
                background: "#1a1d23",
                foreground: "#e5e5e5",
                card: "#2f3436",
                "card-foreground": "#e5e5e5",
                popover: "#2f3436",
                "popover-foreground": "#e5e5e5",
                primary: "#34a85a",
                "primary-foreground": "#ffffff",
                secondary: "#4682b4",
                "secondary-foreground": "#e5e5e5",
                muted: "#444444",
                "muted-foreground": "#a3a3a3",
                accent: "#6495ed",
                "accent-foreground": "#e5e5e5",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#444444",
                input: "#444444",
                ring: "#34a85a",
                "chart-1": "#34a85a",
                "chart-2": "#4682b4",
                "chart-3": "#6495ed",
                "chart-4": "#66d9ef",
                "chart-5": "#1a9641",
                radius: "0.5rem",
                sidebar: "#1a1d23",
                "sidebar-foreground": "#e5e5e5",
                "sidebar-primary": "#34a85a",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#6495ed",
                "sidebar-accent-foreground": "#e5e5e5",
                "sidebar-border": "#444444",
                "sidebar-ring": "#34a85a"
            }
        }
    },
    "vintage-paper": {
        label: "Vintage Paper",
        styles: {
            light: {
                background: "#f5f1e6",
                foreground: "#4a3f35",
                card: "#fffcf5",
                "card-foreground": "#4a3f35",
                popover: "#fffcf5",
                "popover-foreground": "#4a3f35",
                primary: "#a67c52",
                "primary-foreground": "#ffffff",
                secondary: "#e2d8c3",
                "secondary-foreground": "#5c4d3f",
                muted: "#ece5d8",
                "muted-foreground": "#7d6b56",
                accent: "#d4c8aa",
                "accent-foreground": "#4a3f35",
                destructive: "#b54a35",
                "destructive-foreground": "#ffffff",
                border: "#dbd0ba",
                input: "#dbd0ba",
                ring: "#a67c52",
                "chart-1": "#a67c52",
                "chart-2": "#8d6e4c",
                "chart-3": "#735a3a",
                "chart-4": "#b3906f",
                "chart-5": "#c0a080",
                radius: "0.25rem",
                sidebar: "#ece5d8",
                "sidebar-foreground": "#4a3f35",
                "sidebar-primary": "#a67c52",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#d4c8aa",
                "sidebar-accent-foreground": "#4a3f35",
                "sidebar-border": "#dbd0ba",
                "sidebar-ring": "#a67c52",
                "font-sans": "Libre Baskerville, serif",
                "font-serif": "Lora, serif",
                "font-mono": "IBM Plex Mono, monospace",
                "shadow-color": "hsl(28 13% 20%)",
                "shadow-opacity": "0.12",
                "shadow-blur": "5px",
                "shadow-spread": "0px",
                "shadow-offset-x": "2px",
                "shadow-offset-y": "3px"
            },
            dark: {
                background: "#2d2621",
                foreground: "#ece5d8",
                card: "#3a322c",
                "card-foreground": "#ece5d8",
                popover: "#3a322c",
                "popover-foreground": "#ece5d8",
                primary: "#c0a080",
                "primary-foreground": "#2d2621",
                secondary: "#4a4039",
                "secondary-foreground": "#ece5d8",
                muted: "#3a322c",
                "muted-foreground": "#c5bcac",
                accent: "#59493e",
                "accent-foreground": "#ece5d8",
                destructive: "#b54a35",
                "destructive-foreground": "#ffffff",
                border: "#4a4039",
                input: "#4a4039",
                ring: "#c0a080",
                "chart-1": "#c0a080",
                "chart-2": "#b3906f",
                "chart-3": "#a67c52",
                "chart-4": "#8d6e4c",
                "chart-5": "#735a3a",
                radius: "0.25rem",
                sidebar: "#2d2621",
                "sidebar-foreground": "#ece5d8",
                "sidebar-primary": "#c0a080",
                "sidebar-primary-foreground": "#2d2621",
                "sidebar-accent": "#59493e",
                "sidebar-accent-foreground": "#ece5d8",
                "sidebar-border": "#4a4039",
                "sidebar-ring": "#c0a080"
            }
        }
    },
    "sunset-horizon": {
        label: "Sunset Horizon",
        styles: {
            light: {
                background: "#fff9f5",
                foreground: "#3d3436",
                card: "#ffffff",
                "card-foreground": "#3d3436",
                popover: "#ffffff",
                "popover-foreground": "#3d3436",
                primary: "#ff7e5f",
                "primary-foreground": "#ffffff",
                secondary: "#ffedea",
                "secondary-foreground": "#b35340",
                muted: "#fff0eb",
                "muted-foreground": "#78716C",
                accent: "#feb47b",
                "accent-foreground": "#3d3436",
                destructive: "#e63946",
                "destructive-foreground": "#ffffff",
                border: "#ffe0d6",
                input: "#ffe0d6",
                ring: "#ff7e5f",
                "chart-1": "#ff7e5f",
                "chart-2": "#feb47b",
                "chart-3": "#ffcaa7",
                "chart-4": "#ffad8f",
                "chart-5": "#ce6a57",
                radius: "0.625rem",
                sidebar: "#fff0eb",
                "sidebar-foreground": "#3d3436",
                "sidebar-primary": "#ff7e5f",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#feb47b",
                "sidebar-accent-foreground": "#3d3436",
                "sidebar-border": "#ffe0d6",
                "sidebar-ring": "#ff7e5f",
                "font-sans": "Montserrat, sans-serif",
                "font-serif": "Merriweather, serif",
                "font-mono": "Ubuntu Mono, monospace",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.09",
                "shadow-blur": "12px",
                "shadow-spread": "-3px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "6px"
            },
            dark: {
                background: "#2a2024",
                foreground: "#f2e9e4",
                card: "#392f35",
                "card-foreground": "#f2e9e4",
                popover: "#392f35",
                "popover-foreground": "#f2e9e4",
                primary: "#ff7e5f",
                "primary-foreground": "#ffffff",
                secondary: "#463a41",
                "secondary-foreground": "#f2e9e4",
                muted: "#392f35",
                "muted-foreground": "#d7c6bc",
                accent: "#feb47b",
                "accent-foreground": "#2a2024",
                destructive: "#e63946",
                "destructive-foreground": "#ffffff",
                border: "#463a41",
                input: "#463a41",
                ring: "#ff7e5f",
                "chart-1": "#ff7e5f",
                "chart-2": "#feb47b",
                "chart-3": "#ffcaa7",
                "chart-4": "#ffad8f",
                "chart-5": "#ce6a57",
                radius: "0.625rem",
                sidebar: "#2a2024",
                "sidebar-foreground": "#f2e9e4",
                "sidebar-primary": "#ff7e5f",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#feb47b",
                "sidebar-accent-foreground": "#2a2024",
                "sidebar-border": "#463a41",
                "sidebar-ring": "#ff7e5f"
            }
        }
    },
    "starry-night": {
        label: "Starry Night",
        createdAt: "2025-04-16",
        styles: {
            light: {
                background: "#f5f7fa",
                foreground: "#1a2238",
                card: "#e3eaf2",
                "card-foreground": "#1a2238",
                popover: "#fffbe6",
                "popover-foreground": "#1a2238",
                primary: "#3a5ba0",
                "primary-foreground": "#fffbe6",
                secondary: "#f7c873",
                "secondary-foreground": "#1a2238",
                muted: "#e5e5df",
                "muted-foreground": "#3a5ba0",
                accent: "#6ea3c1",
                "accent-foreground": "#fffbe6",
                destructive: "#2d1e2f",
                "destructive-foreground": "#fffbe6",
                border: "#b0b8c1",
                input: "#6ea3c1",
                ring: "#f7c873",
                "chart-1": "#3a5ba0",
                "chart-2": "#f7c873",
                "chart-3": "#6ea3c1",
                "chart-4": "#b0b8c1",
                "chart-5": "#2d1e2f",
                sidebar: "#e3eaf2",
                "sidebar-foreground": "#1a2238",
                "sidebar-primary": "#3a5ba0",
                "sidebar-primary-foreground": "#fffbe6",
                "sidebar-accent": "#f7c873",
                "sidebar-accent-foreground": "#1a2238",
                "sidebar-border": "#b0b8c1",
                "sidebar-ring": "#f7c873",
                "font-sans": "Libre Baskerville, serif",
                radius: "0.5rem"
            },
            dark: {
                background: "#181a24",
                foreground: "#e6eaf3",
                card: "#23243a",
                "card-foreground": "#e6eaf3",
                popover: "#23243a",
                "popover-foreground": "#ffe066",
                primary: "#3a5ba0",
                "primary-foreground": "#ffe066",
                secondary: "#ffe066",
                "secondary-foreground": "#23243a",
                muted: "#23243a",
                "muted-foreground": "#7a88a1",
                accent: "#bccdf0",
                "accent-foreground": "#181a24",
                destructive: "#a04a6c",
                "destructive-foreground": "#ffe066",
                border: "#2d2e3e",
                input: "#3a5ba0",
                ring: "#ffe066",
                "chart-1": "#3a5ba0",
                "chart-2": "#ffe066",
                "chart-3": "#6ea3c1",
                "chart-4": "#7a88a1",
                "chart-5": "#a04a6c",
                sidebar: "#23243a",
                "sidebar-foreground": "#e6eaf3",
                "sidebar-primary": "#3a5ba0",
                "sidebar-primary-foreground": "#ffe066",
                "sidebar-accent": "#ffe066",
                "sidebar-accent-foreground": "#23243a",
                "sidebar-border": "#2d2e3e",
                "sidebar-ring": "#ffe066",
                radius: "0.5rem"
            }
        }
    },
    claude: {
        label: "Claude",
        styles: {
            light: {
                background: "#faf9f5",
                foreground: "#3d3929",
                card: "#faf9f5",
                "card-foreground": "#141413",
                popover: "#ffffff",
                "popover-foreground": "#28261b",
                primary: "#c96442",
                "primary-foreground": "#ffffff",
                secondary: "#e9e6dc",
                "secondary-foreground": "#535146",
                muted: "#ede9de",
                "muted-foreground": "#83827d",
                accent: "#e9e6dc",
                "accent-foreground": "#28261b",
                destructive: "#141413",
                "destructive-foreground": "#ffffff",
                border: "#dad9d4",
                input: "#b4b2a7",
                ring: "#c96442",
                "chart-1": "#b05730",
                "chart-2": "#9c87f5",
                "chart-3": "#ded8c4",
                "chart-4": "#dbd3f0",
                "chart-5": "#b4552d",
                sidebar: "#f5f4ee",
                "sidebar-foreground": "#3d3d3a",
                "sidebar-primary": "#c96442",
                "sidebar-primary-foreground": "#fbfbfb",
                "sidebar-accent": "#e9e6dc",
                "sidebar-accent-foreground": "#343434",
                "sidebar-border": "#ebebeb",
                "sidebar-ring": "#b5b5b5",
                radius: "0.5rem"
            },
            dark: {
                background: "#262624",
                foreground: "#c3c0b6",
                card: "#262624",
                "card-foreground": "#faf9f5",
                popover: "#30302e",
                "popover-foreground": "#e5e5e2",
                primary: "#d97757",
                "primary-foreground": "#ffffff",
                secondary: "#faf9f5",
                "secondary-foreground": "#30302e",
                muted: "#1b1b19",
                "muted-foreground": "#b7b5a9",
                accent: "#1a1915",
                "accent-foreground": "#f5f4ee",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#3e3e38",
                input: "#52514a",
                ring: "#d97757",
                "chart-1": "#b05730",
                "chart-2": "#9c87f5",
                "chart-3": "#1a1915",
                "chart-4": "#2f2b48",
                "chart-5": "#b4552d",
                sidebar: "#1f1e1d",
                "sidebar-foreground": "#c3c0b6",
                "sidebar-primary": "#343434",
                "sidebar-primary-foreground": "#fbfbfb",
                "sidebar-accent": "#0f0f0e",
                "sidebar-accent-foreground": "#c3c0b6",
                "sidebar-border": "#ebebeb",
                "sidebar-ring": "#b5b5b5"
            }
        }
    },
    vercel: {
        label: "Vercel",
        createdAt: "2025-04-13",
        styles: {
            light: {
                background: "oklch(0.99 0 0)",
                foreground: "oklch(0 0 0)",
                card: "oklch(1.00 0 0)",
                "card-foreground": "oklch(0 0 0)",
                popover: "oklch(0.99 0 0)",
                "popover-foreground": "oklch(0 0 0)",
                primary: "oklch(0 0 0)",
                "primary-foreground": "oklch(1.00 0 0)",
                secondary: "oklch(0.94 0 0)",
                "secondary-foreground": "oklch(0 0 0)",
                muted: "oklch(0.97 0 0)",
                "muted-foreground": "oklch(0.44 0 0)",
                accent: "oklch(0.94 0 0)",
                "accent-foreground": "oklch(0 0 0)",
                destructive: "oklch(0.63 0.19 23.03)",
                "destructive-foreground": "oklch(1.00 0 0)",
                border: "oklch(0.92 0 0)",
                input: "oklch(0.94 0 0)",
                ring: "oklch(0 0 0)",
                "chart-1": "oklch(0.81 0.17 75.35)",
                "chart-2": "oklch(0.55 0.22 264.53)",
                "chart-3": "oklch(0.72 0 0)",
                "chart-4": "oklch(0.92 0 0)",
                "chart-5": "oklch(0.56 0 0)",
                sidebar: "oklch(0.99 0 0)",
                "sidebar-foreground": "oklch(0 0 0)",
                "sidebar-primary": "oklch(0 0 0)",
                "sidebar-primary-foreground": "oklch(1.00 0 0)",
                "sidebar-accent": "oklch(0.94 0 0)",
                "sidebar-accent-foreground": "oklch(0 0 0)",
                "sidebar-border": "oklch(0.94 0 0)",
                "sidebar-ring": "oklch(0 0 0)",
                "font-sans": "Geist, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Geist Mono, monospace",
                radius: "0.5rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0.18",
                "shadow-blur": "2px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "1px"
            },
            dark: {
                background: "oklch(0 0 0)",
                foreground: "oklch(1.00 0 0)",
                card: "oklch(0.14 0 0)",
                "card-foreground": "oklch(1.00 0 0)",
                popover: "oklch(0.18 0 0)",
                "popover-foreground": "oklch(1.00 0 0)",
                primary: "oklch(1.00 0 0)",
                "primary-foreground": "oklch(0 0 0)",
                secondary: "oklch(0.25 0 0)",
                "secondary-foreground": "oklch(1.00 0 0)",
                muted: "oklch(0.23 0 0)",
                "muted-foreground": "oklch(0.72 0 0)",
                accent: "oklch(0.32 0 0)",
                "accent-foreground": "oklch(1.00 0 0)",
                destructive: "oklch(0.69 0.20 23.91)",
                "destructive-foreground": "oklch(0 0 0)",
                border: "oklch(0.26 0 0)",
                input: "oklch(0.32 0 0)",
                ring: "oklch(0.72 0 0)",
                "chart-1": "oklch(0.81 0.17 75.35)",
                "chart-2": "oklch(0.58 0.21 260.84)",
                "chart-3": "oklch(0.56 0 0)",
                "chart-4": "oklch(0.44 0 0)",
                "chart-5": "oklch(0.92 0 0)",
                sidebar: "oklch(0.18 0 0)",
                "sidebar-foreground": "oklch(1.00 0 0)",
                "sidebar-primary": "oklch(1.00 0 0)",
                "sidebar-primary-foreground": "oklch(0 0 0)",
                "sidebar-accent": "oklch(0.32 0 0)",
                "sidebar-accent-foreground": "oklch(1.00 0 0)",
                "sidebar-border": "oklch(0.32 0 0)",
                "sidebar-ring": "oklch(0.72 0 0)",
                "font-sans": "Geist, sans-serif",
                "font-serif": "Georgia, serif",
                "font-mono": "Geist Mono, monospace"
            }
        }
    },
    mono: {
        label: "Mono",
        createdAt: "2025-04-20",
        styles: {
            light: {
                background: "#ffffff",
                foreground: "#0a0a0a",
                card: "#ffffff",
                "card-foreground": "#0a0a0a",
                popover: "#ffffff",
                "popover-foreground": "#0a0a0a",
                primary: "#737373",
                "primary-foreground": "#fafafa",
                secondary: "#f5f5f5",
                "secondary-foreground": "#171717",
                muted: "#f5f5f5",
                "muted-foreground": "#717171",
                accent: "#f5f5f5",
                "accent-foreground": "#171717",
                destructive: "#e7000b",
                "destructive-foreground": "#f5f5f5",
                border: "#e5e5e5",
                input: "#e5e5e5",
                ring: "#a1a1a1",
                "chart-1": "#737373",
                "chart-2": "#737373",
                "chart-3": "#737373",
                "chart-4": "#737373",
                "chart-5": "#737373",
                sidebar: "#fafafa",
                "sidebar-foreground": "#0a0a0a",
                "sidebar-primary": "#171717",
                "sidebar-primary-foreground": "#fafafa",
                "sidebar-accent": "#f5f5f5",
                "sidebar-accent-foreground": "#171717",
                "sidebar-border": "#e5e5e5",
                "sidebar-ring": "#a1a1a1",
                "font-sans": "Geist Mono, monospace",
                "font-serif": "Geist Mono, monospace",
                "font-mono": "Geist Mono, monospace",
                radius: "0rem",
                "shadow-color": "hsl(0 0% 0%)",
                "shadow-opacity": "0",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "1px"
            },
            dark: {
                background: "#0a0a0a",
                foreground: "#fafafa",
                card: "#191919",
                "card-foreground": "#fafafa",
                popover: "#262626",
                "popover-foreground": "#fafafa",
                primary: "#737373",
                "primary-foreground": "#fafafa",
                secondary: "#262626",
                "secondary-foreground": "#fafafa",
                muted: "#262626",
                "muted-foreground": "#a1a1a1",
                accent: "#404040",
                "accent-foreground": "#fafafa",
                destructive: "#ff6467",
                "destructive-foreground": "#262626",
                border: "#383838",
                input: "#525252",
                ring: "#737373",
                "chart-1": "#737373",
                "chart-2": "#737373",
                "chart-3": "#737373",
                "chart-4": "#737373",
                "chart-5": "#737373",
                sidebar: "#171717",
                "sidebar-foreground": "#fafafa",
                "sidebar-primary": "#fafafa",
                "sidebar-primary-foreground": "#171717",
                "sidebar-accent": "#262626",
                "sidebar-accent-foreground": "#fafafa",
                "sidebar-border": "#ffffff",
                "sidebar-ring": "#525252"
            }
        }
    },
    "soft-pop": {
        label: "Soft Pop",
        createdAt: "2025-07-08",
        styles: {
            light: {
                background: "#f7f9f3",
                foreground: "#000000",
                card: "#ffffff",
                "card-foreground": "#000000",
                popover: "#ffffff",
                "popover-foreground": "#000000",
                primary: "#4f46e5",
                "primary-foreground": "#ffffff",
                secondary: "#14b8a6",
                "secondary-foreground": "#ffffff",
                muted: "#f0f0f0",
                "muted-foreground": "#333333",
                accent: "#f59e0b",
                "accent-foreground": "#000000",
                destructive: "#ef4444",
                "destructive-foreground": "#ffffff",
                border: "#000000",
                input: "#737373",
                ring: "#a5b4fc",
                "chart-1": "#4f46e5",
                "chart-2": "#14b8a6",
                "chart-3": "#f59e0b",
                "chart-4": "#ec4899",
                "chart-5": "#22c55e",
                sidebar: "#f7f9f3",
                "sidebar-foreground": "#000000",
                "sidebar-primary": "#4f46e5",
                "sidebar-primary-foreground": "#ffffff",
                "sidebar-accent": "#f59e0b",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#000000",
                "sidebar-ring": "#a5b4fc",
                "font-sans": "DM Sans, sans-serif",
                "font-serif": "DM Sans, sans-serif",
                "font-mono": "Space Mono, monospace",
                radius: "1rem",
                "shadow-color": "#1a1a1a",
                "shadow-opacity": "0.05",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "0px",
                "letter-spacing": "normal",
                spacing: "0.25rem"
            },
            dark: {
                background: "#000000",
                foreground: "#ffffff",
                card: "#1a212b",
                "card-foreground": "#ffffff",
                popover: "#1a212b",
                "popover-foreground": "#ffffff",
                primary: "#818cf8",
                "primary-foreground": "#000000",
                secondary: "#2dd4bf",
                "secondary-foreground": "#000000",
                muted: "#333333",
                "muted-foreground": "#cccccc",
                accent: "#fcd34d",
                "accent-foreground": "#000000",
                destructive: "#f87171",
                "destructive-foreground": "#000000",
                border: "#545454",
                input: "#ffffff",
                ring: "#818cf8",
                "chart-1": "#818cf8",
                "chart-2": "#2dd4bf",
                "chart-3": "#fcd34d",
                "chart-4": "#f472b6",
                "chart-5": "#4ade80",
                sidebar: "#000000",
                "sidebar-foreground": "#ffffff",
                "sidebar-primary": "#818cf8",
                "sidebar-primary-foreground": "#000000",
                "sidebar-accent": "#fcd34d",
                "sidebar-accent-foreground": "#000000",
                "sidebar-border": "#ffffff",
                "sidebar-ring": "#818cf8",
                "font-sans": "DM Sans, sans-serif",
                "font-serif": "DM Sans, sans-serif",
                "font-mono": "Space Mono, monospace",
                radius: "1rem",
                "shadow-color": "#1a1a1a",
                "shadow-opacity": "0.05",
                "shadow-blur": "0px",
                "shadow-spread": "0px",
                "shadow-offset-x": "0px",
                "shadow-offset-y": "0px",
                "letter-spacing": "normal",
                spacing: "0.25rem"
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/theme-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorThemes",
    ()=>colorThemes,
    "tweakcnThemes",
    ()=>tweakcnThemes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shadcn$2d$ui$2d$theme$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/shadcn-ui-theme-presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tweakcn$2d$theme$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/tweakcn-theme-presets.ts [app-client] (ecmascript)");
;
;
const tweakcnThemes = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$tweakcn$2d$theme$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweakcnPresets"]).map(([key, preset])=>({
        name: preset.label || key,
        value: key,
        preset: preset
    }));
const colorThemes = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$shadcn$2d$ui$2d$theme$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadcnThemePresets"]).map(([key, preset])=>({
        name: preset.label || key,
        value: key,
        preset: preset
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-theme-manager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeManager",
    ()=>useThemeManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$customizer$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/theme-customizer-constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/theme-data.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useThemeManager() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [brandColorsValues, setBrandColorsValues] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({});
    // Simple, reliable theme detection - just follow the theme provider
    const isDarkMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useThemeManager.useMemo[isDarkMode]": ()=>{
            if (theme === "dark") return true;
            if (theme === "light") return false;
            return ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
    }["useThemeManager.useMemo[isDarkMode]"], [
        theme
    ]);
    const resetTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useThemeManager.useCallback[resetTheme]": ()=>{
            // Comprehensive reset of ALL possible CSS variables that could be set by themes
            const root = document.documentElement;
            const allPossibleVars = [
                // Standard shadcn/ui variables
                'background',
                'foreground',
                'card',
                'card-foreground',
                'popover',
                'popover-foreground',
                'primary',
                'primary-foreground',
                'secondary',
                'secondary-foreground',
                'muted',
                'muted-foreground',
                'accent',
                'accent-foreground',
                'destructive',
                'destructive-foreground',
                'border',
                'input',
                'ring',
                'radius',
                // Chart variables
                'chart-1',
                'chart-2',
                'chart-3',
                'chart-4',
                'chart-5',
                // Sidebar variables
                'sidebar',
                'sidebar-background',
                'sidebar-foreground',
                'sidebar-primary',
                'sidebar-primary-foreground',
                'sidebar-accent',
                'sidebar-accent-foreground',
                'sidebar-border',
                'sidebar-ring',
                // Font variables that might be in imported themes
                'font-sans',
                'font-serif',
                'font-mono',
                // Shadow variables from imported themes
                'shadow-2xs',
                'shadow-xs',
                'shadow-sm',
                'shadow',
                'shadow-md',
                'shadow-lg',
                'shadow-xl',
                'shadow-2xl',
                // Spacing variables
                'spacing',
                'tracking-normal',
                // Additional variables that might be set by advanced themes
                'card-header',
                'card-content',
                'card-footer',
                'muted-background',
                'accent-background',
                'destructive-background',
                'warning',
                'warning-foreground',
                'success',
                'success-foreground',
                'info',
                'info-foreground'
            ];
            // Remove all possible CSS variables
            allPossibleVars.forEach({
                "useThemeManager.useCallback[resetTheme]": (varName)=>{
                    root.style.removeProperty(`--${varName}`);
                }
            }["useThemeManager.useCallback[resetTheme]"]);
            // Also remove any inline styles that might have been set (comprehensive cleanup)
            const inlineStyles = root.style;
            for(let i = inlineStyles.length - 1; i >= 0; i--){
                const property = inlineStyles[i];
                if (property.startsWith('--')) {
                    root.style.removeProperty(property);
                }
            }
        }
    }["useThemeManager.useCallback[resetTheme]"], []);
    const updateBrandColorsFromTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useThemeManager.useCallback[updateBrandColorsFromTheme]": (styles)=>{
            const newValues = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$customizer$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseColors"].forEach({
                "useThemeManager.useCallback[updateBrandColorsFromTheme]": (color)=>{
                    const cssVar = color.cssVar.replace('--', '');
                    if (styles[cssVar]) {
                        newValues[color.cssVar] = styles[cssVar];
                    }
                }
            }["useThemeManager.useCallback[updateBrandColorsFromTheme]"]);
            setBrandColorsValues(newValues);
        }
    }["useThemeManager.useCallback[updateBrandColorsFromTheme]"], []);
    const applyTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useThemeManager.useCallback[applyTheme]": (themeValue, darkMode)=>{
            const theme = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorThemes"].find({
                "useThemeManager.useCallback[applyTheme].theme": (t)=>t.value === themeValue
            }["useThemeManager.useCallback[applyTheme].theme"]);
            if (!theme) return;
            // Reset and apply theme variables
            resetTheme();
            const styles = darkMode ? theme.preset.styles.dark : theme.preset.styles.light;
            const root = document.documentElement;
            Object.entries(styles).forEach({
                "useThemeManager.useCallback[applyTheme]": ([key, value])=>{
                    root.style.setProperty(`--${key}`, value);
                }
            }["useThemeManager.useCallback[applyTheme]"]);
            // Update brand colors values when theme changes
            updateBrandColorsFromTheme(styles);
        }
    }["useThemeManager.useCallback[applyTheme]"], [
        resetTheme,
        updateBrandColorsFromTheme
    ]);
    const applyTweakcnTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useThemeManager.useCallback[applyTweakcnTheme]": (themePreset, darkMode)=>{
            // Reset and apply theme variables
            resetTheme();
            const styles = darkMode ? themePreset.styles.dark : themePreset.styles.light;
            const root = document.documentElement;
            Object.entries(styles).forEach({
                "useThemeManager.useCallback[applyTweakcnTheme]": ([key, value])=>{
                    root.style.setProperty(`--${key}`, value);
                }
            }["useThemeManager.useCallback[applyTweakcnTheme]"]);
            // Update brand colors values when theme changes
            updateBrandColorsFromTheme(styles);
        }
    }["useThemeManager.useCallback[applyTweakcnTheme]"], [
        resetTheme,
        updateBrandColorsFromTheme
    ]);
    const applyImportedTheme = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useThemeManager.useCallback[applyImportedTheme]": (themeData, darkMode)=>{
            const root = document.documentElement;
            const themeVars = darkMode ? themeData.dark : themeData.light;
            // Apply all variables from the theme
            Object.entries(themeVars).forEach({
                "useThemeManager.useCallback[applyImportedTheme]": ([variable, value])=>{
                    root.style.setProperty(`--${variable}`, value);
                }
            }["useThemeManager.useCallback[applyImportedTheme]"]);
            // Update brand colors values for the customizer UI
            const newBrandColors = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$customizer$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseColors"].forEach({
                "useThemeManager.useCallback[applyImportedTheme]": (color)=>{
                    const varName = color.cssVar.replace('--', '');
                    if (themeVars[varName]) {
                        newBrandColors[color.cssVar] = themeVars[varName];
                    }
                }
            }["useThemeManager.useCallback[applyImportedTheme]"]);
            setBrandColorsValues(newBrandColors);
        }
    }["useThemeManager.useCallback[applyImportedTheme]"], []);
    const applyRadius = (radius)=>{
        document.documentElement.style.setProperty('--radius', radius);
    };
    const handleColorChange = (cssVar, value)=>{
        document.documentElement.style.setProperty(cssVar, value);
    };
    return {
        theme,
        setTheme,
        isDarkMode,
        brandColorsValues,
        setBrandColorsValues,
        resetTheme,
        applyTheme,
        applyTweakcnTheme,
        applyImportedTheme,
        applyRadius,
        handleColorChange,
        updateBrandColorsFromTheme
    };
}
_s(useThemeManager, "FhJAl/zr2yXIJRVgK8x9mBLcOig=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/color-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorPicker",
    ()=>ColorPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ColorPicker({ label, cssVar, value, onChange }) {
    _s();
    const [localValue, setLocalValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](value);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ColorPicker.useEffect": ()=>{
            setLocalValue(value);
        }
    }["ColorPicker.useEffect"], [
        value
    ]);
    const handleColorChange = (e)=>{
        const newColor = e.target.value;
        setLocalValue(newColor);
        onChange(cssVar, newColor);
    };
    const handleTextChange = (e)=>{
        const newValue = e.target.value;
        setLocalValue(newValue);
        onChange(cssVar, newValue);
    };
    // Get current computed color for display
    const displayColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ColorPicker.useMemo[displayColor]": ()=>{
            if (localValue && localValue.startsWith('#')) {
                return localValue;
            }
            // Try to get computed value from CSS
            const computed = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
            if (computed && computed.startsWith('#')) {
                return computed;
            }
            return '#000000';
        }
    }["ColorPicker.useMemo[displayColor]"], [
        localValue,
        cssVar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: `color-${cssVar}`,
                className: "text-xs font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/color-picker.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            className: "h-8 w-8 p-0 overflow-hidden cursor-pointer",
                            style: {
                                backgroundColor: displayColor
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                id: `color-${cssVar}`,
                                value: displayColor,
                                onChange: handleColorChange,
                                className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/color-picker.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/color-picker.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/color-picker.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "text",
                        placeholder: `${cssVar} value`,
                        value: localValue,
                        onChange: handleTextChange,
                        className: "h-8 text-xs flex-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/color-picker.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/color-picker.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/color-picker.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ColorPicker, "sh50FNGqnoOMafhNencP/H/XplA=");
_c = ColorPicker;
var _c;
__turbopack_context__.k.register(_c, "ColorPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/theme-customizer/import-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImportModal",
    ()=>ImportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImportModal({ open, onOpenChange, onImport }) {
    _s();
    const [importText, setImportText] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const processImport = ()=>{
        try {
            if (!importText.trim()) {
                console.error("No CSS content provided");
                return;
            }
            // Parse CSS content into light and dark theme variables
            const lightTheme = {};
            const darkTheme = {};
            // Split CSS into sections
            const cssText = importText.replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
            ;
            // Extract :root section (light theme)
            const rootMatch = cssText.match(/:root\s*\{([^}]+)\}/);
            if (rootMatch) {
                const rootContent = rootMatch[1];
                const variableMatches = rootContent.matchAll(/--([^:]+):\s*([^;]+);/g);
                for (const match of variableMatches){
                    const [, variable, value] = match;
                    lightTheme[variable.trim()] = value.trim();
                }
            }
            // Extract .dark section (dark theme)
            const darkMatch = cssText.match(/\.dark\s*\{([^}]+)\}/);
            if (darkMatch) {
                const darkContent = darkMatch[1];
                const variableMatches = darkContent.matchAll(/--([^:]+):\s*([^;]+);/g);
                for (const match of variableMatches){
                    const [, variable, value] = match;
                    darkTheme[variable.trim()] = value.trim();
                }
            }
            // Store the imported theme
            const importedThemeData = {
                light: lightTheme,
                dark: darkTheme
            };
            onImport(importedThemeData);
            onOpenChange(false);
            setImportText("");
        } catch (error) {
            console.error("Error importing theme:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        modal: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-4xl w-[90vw]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Import Custom CSS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                "Paste your CSS theme below. Include both ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: ":root"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 54
                                }, this),
                                " (light mode) and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: ".dark"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 90
                                }, this),
                                " (dark mode) sections with CSS variables like ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: "--primary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 154
                                }, this),
                                ", ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: "--background"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 178
                                }, this),
                                ", etc. The theme will automatically switch between light and dark modes."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                id: "theme-css",
                                className: "flex w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm max-h-[400px] min-h-[300px] font-mono text-sm text-foreground overflow-y-auto resize-none",
                                placeholder: `:root {
  --background: 0 0% 100%;
  --foreground: oklch(0.52 0.13 144.17);
  --primary: #3e2723;
  /* And more */
}
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: hsl(37.50 36.36% 95.69%);
  --primary: rgb(46, 125, 50);
  /* And more */
}`,
                                value: importText,
                                onChange: (e)=>setImportText(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>onOpenChange(false),
                                    className: "cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: processImport,
                                    disabled: !importText.trim(),
                                    className: "cursor-pointer",
                                    children: "Import Theme"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/theme-customizer/import-modal.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(ImportModal, "MopYmqIni3fr82PLaa3T8fsisiE=");
_c = ImportModal;
var _c;
__turbopack_context__.k.register(_c, "ImportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/landing-theme-customizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingThemeCustomizer",
    ()=>LandingThemeCustomizer,
    "LandingThemeCustomizerTrigger",
    ()=>LandingThemeCustomizerTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dices.js [app-client] (ecmascript) <export default as Dices>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-theme-manager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$circular$2d$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-circular-transition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/theme-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$customizer$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/theme-customizer-constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$color$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/color-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$customizer$2f$import$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-customizer/import-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
function LandingThemeCustomizer({ open, onOpenChange }) {
    _s();
    const { applyImportedTheme, isDarkMode, resetTheme, applyRadius, setBrandColorsValues, applyTheme, applyTweakcnTheme, brandColorsValues, handleColorChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeManager"])();
    const { toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$circular$2d$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCircularTransition"])();
    const [selectedTheme, setSelectedTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("default");
    const [selectedTweakcnTheme, setSelectedTweakcnTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [selectedRadius, setSelectedRadius] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("0.5rem");
    const [importModalOpen, setImportModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [importedTheme, setImportedTheme] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const handleReset = ()=>{
        // Reset all state variables to initial values
        setSelectedTheme("");
        setSelectedTweakcnTheme("");
        setSelectedRadius("0.5rem");
        setImportedTheme(null);
        setBrandColorsValues({});
        // Reset theme and radius to defaults
        resetTheme();
        applyRadius("0.5rem");
    };
    const handleImport = (themeData)=>{
        setImportedTheme(themeData);
        // Clear other selections to indicate custom import is active
        setSelectedTheme("");
        setSelectedTweakcnTheme("");
        // Apply the imported theme
        applyImportedTheme(themeData, isDarkMode);
    };
    const handleImportClick = ()=>{
        setImportModalOpen(true);
    };
    const handleRandomShadcn = ()=>{
        // Apply a random shadcn theme
        const randomTheme = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorThemes"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorThemes"].length)];
        setSelectedTheme(randomTheme.value);
        setSelectedTweakcnTheme("");
        setBrandColorsValues({});
        setImportedTheme(null);
        applyTheme(randomTheme.value, isDarkMode);
    };
    const handleRandomTweakcn = ()=>{
        // Apply a random tweakcn theme
        const randomTheme = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweakcnThemes"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweakcnThemes"].length)];
        setSelectedTweakcnTheme(randomTheme.value);
        setSelectedTheme("");
        setBrandColorsValues({});
        setImportedTheme(null);
        applyTweakcnTheme(randomTheme.preset, isDarkMode);
    };
    const handleRadiusSelect = (radius)=>{
        setSelectedRadius(radius);
        applyRadius(radius);
    };
    const handleLightMode = (event)=>{
        if (isDarkMode === false) return;
        toggleTheme(event);
    };
    const handleDarkMode = (event)=>{
        if (isDarkMode === true) return;
        toggleTheme(event);
    };
    // Re-apply themes when theme mode changes
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LandingThemeCustomizer.useEffect": ()=>{
            if (importedTheme) {
                applyImportedTheme(importedTheme, isDarkMode);
            } else if (selectedTheme) {
                applyTheme(selectedTheme, isDarkMode);
            } else if (selectedTweakcnTheme) {
                const selectedPreset = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweakcnThemes"].find({
                    "LandingThemeCustomizer.useEffect": (t)=>t.value === selectedTweakcnTheme
                }["LandingThemeCustomizer.useEffect"])?.preset;
                if (selectedPreset) {
                    applyTweakcnTheme(selectedPreset, isDarkMode);
                }
            }
        }
    }["LandingThemeCustomizer.useEffect"], [
        isDarkMode,
        importedTheme,
        selectedTheme,
        selectedTweakcnTheme,
        applyImportedTheme,
        applyTheme,
        applyTweakcnTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                open: open,
                onOpenChange: onOpenChange,
                modal: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                    side: "right",
                    className: "w-[400px] p-0 gap-0 pointer-events-auto [&>button]:hidden overflow-hidden flex flex-col",
                    onInteractOutside: (e)=>{
                        // Prevent the sheet from closing when dialog is open
                        if (importModalOpen) {
                            e.preventDefault();
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                            className: "space-y-0 p-4 pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-primary/10 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                            className: "text-lg font-semibold",
                                            children: "Theme Customizer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-auto flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: handleReset,
                                                    className: "cursor-pointer h-8 w-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: ()=>onOpenChange(false),
                                                    className: "cursor-pointer h-8 w-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                    className: "text-sm text-muted-foreground",
                                    children: "Customize the theme and colors of your landing page."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-sm font-medium",
                                            children: "Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: !isDarkMode ? "secondary" : "outline",
                                                    size: "sm",
                                                    onClick: handleLightMode,
                                                    className: "cursor-pointer mode-toggle-button relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                            className: "h-4 w-4 mr-1 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Light"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: isDarkMode ? "secondary" : "outline",
                                                    size: "sm",
                                                    onClick: handleDarkMode,
                                                    className: "cursor-pointer mode-toggle-button relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                            className: "h-4 w-4 mr-1 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Dark"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-sm font-medium",
                                                    children: "Shadcn UI Theme Presets"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleRandomShadcn,
                                                    className: "cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                                            className: "h-3.5 w-3.5 mr-1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Random"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: selectedTheme,
                                            onValueChange: (value)=>{
                                                setSelectedTheme(value);
                                                setSelectedTweakcnTheme("");
                                                setBrandColorsValues({});
                                                setImportedTheme(null);
                                                applyTheme(value, isDarkMode);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "w-full cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "Choose Shadcn Theme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    className: "max-h-60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorThemes"].map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: theme.value,
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.primary
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 210,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.secondary
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 214,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.accent
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 218,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.muted
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 222,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: theme.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, theme.value, false, {
                                                                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-sm font-medium",
                                                    children: "Tweakcn Theme Presets"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleRandomTweakcn,
                                                    className: "cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dices$3e$__["Dices"], {
                                                            className: "h-3.5 w-3.5 mr-1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Random"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: selectedTweakcnTheme,
                                            onValueChange: (value)=>{
                                                setSelectedTweakcnTheme(value);
                                                setSelectedTheme("");
                                                setBrandColorsValues({});
                                                setImportedTheme(null);
                                                const selectedPreset = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweakcnThemes"].find((t)=>t.value === value)?.preset;
                                                if (selectedPreset) {
                                                    applyTweakcnTheme(selectedPreset, isDarkMode);
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "w-full cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "Choose Tweakcn Theme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    className: "max-h-60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tweakcnThemes"].map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: theme.value,
                                                                className: "cursor-pointer",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.primary
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 267,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.secondary
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 271,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.accent
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 275,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full border border-border/20",
                                                                                    style: {
                                                                                        backgroundColor: theme.preset.styles.light.muted
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                                    lineNumber: 279,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: theme.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                            lineNumber: 284,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, theme.value, false, {
                                                                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-sm font-medium",
                                            children: "Radius"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-5 gap-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$customizer$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radiusOptions"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative cursor-pointer rounded-md p-3 border transition-colors ${selectedRadius === option.value ? "border-primary" : "border-border hover:border-border/60"}`,
                                                    onClick: ()=>handleRadiusSelect(option.value),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-medium",
                                                            children: option.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this)
                                                }, option.value, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "lg",
                                        onClick: handleImportClick,
                                        className: "w-full cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "h-3.5 w-3.5 mr-1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this),
                                            "Import Theme"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                    type: "single",
                                    collapsible: true,
                                    className: "w-full border-b rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "brand-colors",
                                        className: "border border-border rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                className: "px-4 py-3 hover:no-underline hover:bg-muted/50 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-sm font-medium cursor-pointer",
                                                    children: "Brand Colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                className: "px-4 pb-4 pt-2 space-y-3 border-t border-border bg-muted/20",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$theme$2d$customizer$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseColors"].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$color$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorPicker"], {
                                                            label: color.name,
                                                            cssVar: color.cssVar,
                                                            value: brandColorsValues[color.cssVar] || "",
                                                            onChange: handleColorChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, color.cssVar, false, {
                                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-muted rounded-lg space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: "Advanced Customization"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "For advanced theme customization with real-time preview, visual color picker, and hundreds of prebuilt themes, visit",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://tweakcn.com/editor/theme",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-primary hover:underline font-medium cursor-pointer",
                                                    children: "tweakcn.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full cursor-pointer",
                                            onClick: ()=>window.open('https://tweakcn.com/editor/theme', '_blank'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "h-3.5 w-3.5 mr-1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this),
                                                "Open Tweakcn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$customizer$2f$import$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImportModal"], {
                open: importModalOpen,
                onOpenChange: setImportModalOpen,
                onImport: handleImport
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LandingThemeCustomizer, "EwhePzNd9jTcYj+tF2Fc3R6Ov1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$theme$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeManager"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$circular$2d$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCircularTransition"]
    ];
});
_c = LandingThemeCustomizer;
function LandingThemeCustomizerTrigger({ onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: onClick,
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer right-4"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
            lineNumber: 403,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/landing-theme-customizer.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_c1 = LandingThemeCustomizerTrigger;
var _c, _c1;
__turbopack_context__.k.register(_c, "LandingThemeCustomizer");
__turbopack_context__.k.register(_c1, "LandingThemeCustomizerTrigger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/about-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2d$decorator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card-decorator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
"use client";
;
;
;
;
;
;
const values = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        title: "Developer First",
        description: "Every component is built with the developer experience in mind, ensuring clean code and easy integration."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "Design Excellence",
        description: "We maintain the highest design standards, following shadcn/ui principles and modern UI patterns."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"],
        title: "Production Ready",
        description: "Battle-tested components used in real applications with proven performance and reliability across different environments."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
        title: "Premium Quality",
        description: "Hand-crafted with attention to detail and performance optimization, ensuring exceptional user experience and accessibility."
    }
];
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            className: "mb-4",
                            children: "About Claude Code"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight sm:text-4xl mb-6",
                            children: "Built for developers, by developers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground mb-8",
                            children: "We're passionate about creating the best marketplace for shadcn/ui components and templates. Our mission is to accelerate development and help developers build beautiful admin interfaces faster."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/about-section.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12",
                    children: values.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "group shadow-xs py-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2d$decorator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDecorator"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(value.icon, {
                                                className: "h-6 w-6",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/about-section.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-6 font-medium text-balance",
                                            children: value.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mt-3 text-sm",
                                            children: value.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/landing/components/about-section.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/about-section.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/about-section.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "❤️ Made with love for the developer community"
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/about-section.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "cursor-pointer",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/ngothanhtung/claude-code-shadcn-dashboard",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/landing/components/about-section.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            "Star on GitHub"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/landing/components/about-section.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/about-section.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    className: "cursor-pointer",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://discord.com/invite/XEQhPc9a6p",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Join Discord Community"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/about-section.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/about-section.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/about-section.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/about-section.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/about-section.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/about-section.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/landing-page-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPageContent",
    ()=>LandingPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$logo$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/logo-carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$stats$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/stats-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$features$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/features-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$team$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/team-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/testimonials-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$blog$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/blog-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/pricing-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/cta-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$contact$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/contact-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/faq-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$landing$2d$theme$2d$customizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/landing-theme-customizer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/about-section.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
function LandingPageContent() {
    _s();
    const [themeCustomizerOpen, setThemeCustomizerOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingNavbar"], {}, void 0, false, {
                fileName: "[project]/src/app/landing/landing-page-content.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$logo$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoCarousel"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$stats$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$features$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturesSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$team$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PricingSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialsSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$blog$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTASection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$contact$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                        fileName: "[project]/src/app/landing/landing-page-content.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/landing-page-content.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingFooter"], {}, void 0, false, {
                fileName: "[project]/src/app/landing/landing-page-content.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$landing$2d$theme$2d$customizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingThemeCustomizerTrigger"], {
                onClick: ()=>setThemeCustomizerOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/app/landing/landing-page-content.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$landing$2d$theme$2d$customizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingThemeCustomizer"], {
                open: themeCustomizerOpen,
                onOpenChange: setThemeCustomizerOpen
            }, void 0, false, {
                fileName: "[project]/src/app/landing/landing-page-content.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/landing/landing-page-content.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(LandingPageContent, "yX3sfy5IQI4BpjDn5lLxtRn7Fno=");
_c = LandingPageContent;
var _c;
__turbopack_context__.k.register(_c, "LandingPageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b9f3bd09._.js.map