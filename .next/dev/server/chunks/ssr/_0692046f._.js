module.exports = [
"[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/table.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "Table");
const TableBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableBody() from the server but TableBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableBody");
const TableCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCaption() from the server but TableCaption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableCaption");
const TableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCell() from the server but TableCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableCell");
const TableFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFooter() from the server but TableFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableFooter");
const TableHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHead() from the server but TableHead is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableHead");
const TableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHeader() from the server but TableHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableHeader");
const TableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableRow() from the server but TableRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx <module evaluation>", "TableRow");
}),
"[project]/src/components/ui/table.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "Table");
const TableBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableBody() from the server but TableBody is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableBody");
const TableCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCaption() from the server but TableCaption is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableCaption");
const TableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableCell() from the server but TableCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableCell");
const TableFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableFooter() from the server but TableFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableFooter");
const TableHead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHead() from the server but TableHead is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableHead");
const TableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableHeader() from the server but TableHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableHeader");
const TableRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableRow() from the server but TableRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/table.tsx", "TableRow");
}),
"[project]/src/components/ui/table.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/firebase/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "adminAuth",
    ()=>adminAuth,
    "adminDb",
    ()=>adminDb,
    "adminStorage",
    ()=>adminStorage,
    "getAdminApp",
    ()=>getAdminApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import, [project]/node_modules/firebase-admin)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
let cachedApp = null;
function getAdminAppOptions() {
    const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID ?? ("TURBOPACK compile-time value", "claude-code-task-managem-1bc2a");
    const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n');
    if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Missing Firebase Admin environment variables. Required: FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL, FIREBASE_ADMIN_PRIVATE_KEY');
    }
    return {
        credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["cert"])({
            projectId,
            clientEmail,
            privateKey
        }),
        projectId
    };
}
function getAdminApp() {
    if (cachedApp) {
        return cachedApp;
    }
    cachedApp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getApps"])().length > 0 ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["initializeApp"])(getAdminAppOptions());
    return cachedApp;
}
const adminAuth = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getAuth"])(getAdminApp());
const adminDb = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getFirestore"])(getAdminApp());
const adminStorage = ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["getStorage"])(getAdminApp());
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedMockDataCollections",
    ()=>seedMockDataCollections,
    "toFirestoreData",
    ()=>toFirestoreData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import, [project]/node_modules/firebase-admin)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/admin.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
function toFirestoreData(value) {
    if (value instanceof Date) {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map((item)=>toFirestoreData(item)).filter((item)=>item !== undefined);
    }
    if (isPlainObject(value)) {
        return Object.fromEntries(Object.entries(value).map(([key, item])=>[
                key,
                toFirestoreData(item)
            ]).filter(([, item])=>item !== undefined));
    }
    if (typeof value === "function" || typeof value === "symbol" || value === undefined) {
        return undefined;
    }
    return value;
}
async function seedMockDataCollections(feature, collections) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"])();
    const results = [];
    for (const seedCollection of collections){
        const batch = db.batch();
        const collectionRef = db.collection(seedCollection.collectionName);
        seedCollection.documents.forEach((document, index)=>{
            const sanitized = toFirestoreData(document);
            const documentId = seedCollection.getDocumentId?.(sanitized, index) ?? String(sanitized.id ?? `${seedCollection.collectionName}-${index + 1}`);
            batch.set(collectionRef.doc(documentId), {
                ...sanitized,
                seededAt: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["FieldValue"].serverTimestamp()
            }, {
                merge: true
            });
        });
        await batch.commit();
        results.push({
            collectionName: seedCollection.collectionName,
            count: seedCollection.documents.length
        });
    }
    return {
        feature,
        collections: results
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/calendar/services/data/events.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"title":"Team Standup","date":"11T09:00:00.000Z","time":"9:00 AM","duration":"30 min","type":"meeting","attendees":["JD","SM","AR"],"location":"Conference Room A","color":"bg-blue-500","description":"Daily team standup meeting to discuss progress and blockers"},{"id":2,"title":"Design Review","date":"11T14:00:00.000Z","time":"2:00 PM","duration":"1 hour","type":"meeting","attendees":["ER","LC"],"location":"Virtual","color":"bg-purple-500","description":"Review new UI designs and provide feedback"},{"id":3,"title":"Product Launch","date":"15T10:00:00.000Z","time":"10:00 AM","duration":"2 hours","type":"event","attendees":["TL","ST"],"location":"Main Hall","color":"bg-green-500","description":"Official product launch event with stakeholders"},{"id":4,"title":"Client Presentation","date":"18T15:00:00.000Z","time":"3:00 PM","duration":"1 hour","type":"meeting","attendees":["AT","SM"],"location":"Client Office","color":"bg-orange-500","description":"Present project progress to client stakeholders"},{"id":5,"title":"Birthday Party 🎉","date":"20T19:00:00.000Z","time":"7:00 PM","duration":"3 hours","type":"personal","attendees":["PB","VB"],"location":"Home","color":"bg-pink-500","description":"Birthday celebration with friends and family"}]);}),
"[project]/src/modules/calendar/services/data/event-dates.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"date":"11T00:00:00.000Z","count":2},{"date":"15T00:00:00.000Z","count":1},{"date":"18T00:00:00.000Z","count":1},{"date":"20T00:00:00.000Z","count":1},{"date":"22T00:00:00.000Z","count":1},{"date":"25T00:00:00.000Z","count":1},{"date":"27T00:00:00.000Z","count":1}]);}),
"[project]/src/modules/calendar/services/data/calendars.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"personal","name":"Personal","color":"bg-blue-500","visible":true,"type":"personal"},{"id":"work","name":"Work","color":"bg-green-500","visible":true,"type":"work"},{"id":"shared","name":"Team Calendar","color":"bg-purple-500","visible":true,"type":"shared"},{"id":"meetings","name":"Meetings","color":"bg-orange-500","visible":true,"type":"work"},{"id":"events","name":"Events","color":"bg-pink-500","visible":true,"type":"shared"}]);}),
"[project]/src/modules/calendar/services/calendar-mock-data.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calendars",
    ()=>calendars,
    "eventDates",
    ()=>eventDates,
    "events",
    ()=>events
]);
// Import JSON data
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$data$2f$events$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/calendar/services/data/events.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$data$2f$event$2d$dates$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/calendar/services/data/event-dates.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$data$2f$calendars$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/calendar/services/data/calendars.json (json)");
;
;
;
const events = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$data$2f$events$2e$json__$28$json$29$__["default"].map((event)=>{
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() // 0-based month
    ;
    // Parse the day from the date string (format: "11T09:00:00.000Z")
    const dayAndTime = event.date.split('T');
    const day = parseInt(dayAndTime[0]);
    const timeStr = dayAndTime[1] // "09:00:00.000Z"
    ;
    // Parse hours and minutes from time string
    const timeParts = timeStr.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    // Create date with current year/month but original day and time
    const eventDate = new Date(currentYear, currentMonth, day, hours, minutes);
    return {
        ...event,
        date: eventDate,
        type: event.type
    };
});
const eventDates = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$data$2f$event$2d$dates$2e$json__$28$json$29$__["default"].map((item)=>{
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    // Parse day from date string
    const day = parseInt(item.date.split('T')[0]);
    const eventDate = new Date(currentYear, currentMonth, day);
    return {
        date: eventDate,
        count: item.count
    };
});
const calendars = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$data$2f$calendars$2e$json__$28$json$29$__["default"];
;
}),
"[project]/src/modules/calendar/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedCalendarMockData",
    ()=>seedCalendarMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$calendar$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/modules/calendar/services/calendar-mock-data.ts [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedCalendarMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("calendar", [
        {
            collectionName: "events",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$calendar$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["events"]
        },
        {
            collectionName: "eventDates",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$calendar$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["eventDates"],
            getDocumentId: (_, index)=>`event-date-${index + 1}`
        },
        {
            collectionName: "calendars",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$calendar$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calendars"]
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/chat/services/data/friends.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"user-2","name":"Sarah Mitchell","avatar":"https://notion-avatars.netlify.app/api/avatar/?preset=female-7","status":"online","lastMessage":{"text":"Thanks for the quick update! The dashboard looks amazing","updated":"2025-08-11T15:30:00Z"},"unreadCount":2},{"id":"user-3","name":"Emily Rodriguez","avatar":"https://notion-avatars.netlify.app/api/avatar/?preset=female-2","status":"online","lastMessage":{"text":"Let's review the wireframes together tomorrow","updated":"2025-08-10T16:30:00Z"},"unreadCount":1},{"id":"user-4","name":"David Kim","avatar":"https://notion-avatars.netlify.app/api/avatar/?preset=male-5","status":"offline","lastMessage":{"text":"Marketing campaign is scheduled for next week","updated":"2025-08-11T08:15:00Z"},"unreadCount":0},{"id":"user-5","name":"Lisa Chen","avatar":"https://notion-avatars.netlify.app/api/avatar/?preset=female-4","status":"online","lastMessage":{"text":"Found a few edge cases in the new feature","updated":"2025-08-06T14:20:00Z"},"unreadCount":0},{"id":"user-6","name":"Alex Thompson","avatar":"https://notion-avatars.netlify.app/api/avatar/?preset=male-1","status":"offline","lastMessage":{"text":"Code review completed, looks good to merge!","updated":"2025-01-15T17:45:00Z"},"unreadCount":0}]);}),
"[project]/src/modules/chat/services/data/messages.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"user-2":[{"id":"msg-2-1","text":"Hey! How's the new dashboard coming along?","from":"user-2","to":"user-1","updated":"2025-08-11T10:15:00Z"},{"id":"msg-2-2","text":"It's going great! We've implemented the new design system and it looks fantastic.","from":"user-1","to":"user-2","updated":"2025-08-11T10:17:00Z"},{"id":"msg-2-3","text":"That's awesome! Can you share a preview?","from":"user-2","to":"user-1","updated":"2025-08-11T10:18:00Z"},{"id":"msg-2-4","text":"Thanks for the quick update! The dashboard looks amazing","from":"user-2","to":"user-1","updated":"2025-08-11T15:30:00Z"}],"user-3":[{"id":"msg-3-1","text":"Hi! I've been working on the wireframes for the new feature","from":"user-3","to":"user-1","updated":"2025-08-10T14:15:00Z"},{"id":"msg-3-2","text":"That's great! I'd love to take a look at them","from":"user-1","to":"user-3","updated":"2025-08-10T14:18:00Z"},{"id":"msg-3-3","text":"Let's review the wireframes together tomorrow","from":"user-3","to":"user-1","updated":"2025-08-10T16:30:00Z"}],"user-4":[{"id":"msg-4-1","text":"Hey team! The component library update is ready","from":"user-4","to":"user-1","updated":"2025-08-11T09:00:00Z"},{"id":"msg-4-2","text":"Awesome work David!","from":"user-1","to":"user-4","updated":"2025-08-11T09:05:00Z"},{"id":"msg-4-3","text":"Marketing campaign is scheduled for next week","from":"user-4","to":"user-1","updated":"2025-08-11T08:15:00Z"}],"user-5":[{"id":"msg-5-1","text":"I've been testing the new feature and it looks good overall","from":"user-5","to":"user-1","updated":"2025-08-06T13:45:00Z"},{"id":"msg-5-2","text":"Thanks for testing it! Any issues you found?","from":"user-1","to":"user-5","updated":"2025-08-06T14:10:00Z"},{"id":"msg-5-3","text":"Found a few edge cases in the new feature","from":"user-5","to":"user-1","updated":"2025-08-06T14:20:00Z"}],"user-6":[{"id":"msg-6-1","text":"Hey! I've finished the code review for the latest PR","from":"user-6","to":"user-1","updated":"2025-01-15T16:30:00Z"},{"id":"msg-6-2","text":"Thanks for the quick review! Any feedback?","from":"user-1","to":"user-6","updated":"2025-01-15T17:15:00Z"},{"id":"msg-6-3","text":"Code review completed, looks good to merge!","from":"user-6","to":"user-1","updated":"2025-01-15T17:45:00Z"}]});}),
"[project]/src/modules/chat/services/chat-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "friendMockData",
    ()=>friendMockData,
    "messageMockData",
    ()=>messageMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$data$2f$friends$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/data/friends.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$data$2f$messages$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/data/messages.json (json)");
;
;
const friendMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$data$2f$friends$2e$json__$28$json$29$__["default"];
const messageMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$data$2f$messages$2e$json__$28$json$29$__["default"];
}),
"[project]/src/modules/chat/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedChatMockData",
    ()=>seedChatMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$chat$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/chat-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const CURRENT_USER = "user-1";
const messageDocuments = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$chat$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["messageMockData"]).flatMap(([friendId, messages])=>messages.map((message)=>{
        const conversationId = [
            CURRENT_USER,
            friendId
        ].sort().join("--");
        return {
            ...message,
            friendId,
            conversationId
        };
    }));
function seedChatMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("chat", [
        {
            collectionName: "friends",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$chat$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["friendMockData"]
        },
        {
            collectionName: "messages",
            documents: messageDocuments,
            getDocumentId: (document)=>document.id
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/customer-care/services/types/customer-care-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customerCareSchema",
    ()=>customerCareSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const customerCareSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    customerName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    customerPhone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    customerEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    careType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    assignedTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    resolvedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[project]/src/modules/customer-care/services/data/customer-care.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"CC-0001","customerName":"Nguyễn Văn Minh","customerPhone":"0901234567","customerEmail":"minh.nguyen@gmail.com","careType":"consultation","status":"resolved","priority":"normal","assignedTo":"Trần Thu Hà","notes":"Tư vấn gói dịch vụ Premium. Khách hàng đồng ý đăng ký 1 năm.","createdAt":"2026-04-10T08:30:00Z","updatedAt":"2026-04-11T14:20:00Z","resolvedAt":"2026-04-11T14:20:00Z"},{"id":"CC-0002","customerName":"Lê Thị Mai","customerPhone":"0912345678","customerEmail":"mai.le@yahoo.com","careType":"callback","status":"in_progress","priority":"high","assignedTo":"Phạm Đức Anh","notes":"Yêu cầu gọi lại sau 17h. Khách cần hỗ trợ về hóa đơn tháng 3.","createdAt":"2026-04-12T10:15:00Z","updatedAt":"2026-04-12T10:15:00Z"},{"id":"CC-0003","customerName":"Hoàng Quốc Bảo","customerPhone":"0934567890","customerEmail":"bao.hoang@company.vn","careType":"complaint","status":"new","priority":"urgent","assignedTo":"Trần Thu Hà","notes":"Khiếu nại về chất lượng dịch vụ. Phản hồi trong 24h.","createdAt":"2026-04-13T09:00:00Z","updatedAt":"2026-04-13T09:00:00Z"},{"id":"CC-0004","customerName":"Phạm Thị Lan","customerPhone":"0945678901","customerEmail":"lan.pham@gmail.com","careType":"follow_up","status":"resolved","priority":"normal","assignedTo":"Nguyễn Thanh Sơn","notes":"Theo dõi sau 1 tuần sử dụng dịch vụ. Khách hài lòng.","createdAt":"2026-04-08T11:30:00Z","updatedAt":"2026-04-15T16:00:00Z","resolvedAt":"2026-04-15T16:00:00Z"},{"id":"CC-0005","customerName":"Đặng Văn Cường","customerPhone":"0956789012","customerEmail":"cuong.dang@outlook.com","careType":"support","status":"in_progress","priority":"high","assignedTo":"Phạm Đức Anh","notes":"Hỗ trợ kỹ thuật cấu hình API. Đang chờ phản hồi từ đội ngũ dev.","createdAt":"2026-04-14T13:45:00Z","updatedAt":"2026-04-14T15:30:00Z"},{"id":"CC-0006","customerName":"Vũ Thị Hương","customerPhone":"0967890123","customerEmail":"huong.vu@gmail.com","careType":"consultation","status":"closed","priority":"low","assignedTo":"Trần Thu Hà","notes":"Tư vấn gói cơ bản. Khách chưa quyết định, theo dõi sau.","createdAt":"2026-04-05T09:20:00Z","updatedAt":"2026-04-06T10:00:00Z","resolvedAt":"2026-04-06T10:00:00Z"},{"id":"CC-0007","customerName":"Bùi Minh Tuấn","customerPhone":"0978901234","customerEmail":"tuan.bui@enterprise.com","careType":"callback","status":"new","priority":"normal","assignedTo":"Nguyễn Thanh Sơn","notes":"Yêu cầu gọi lại để tư vấn gói doanh nghiệp.","createdAt":"2026-04-13T14:00:00Z","updatedAt":"2026-04-13T14:00:00Z"},{"id":"CC-0008","customerName":"Trần Đình Phong","customerPhone":"0989012345","customerEmail":"phong.tran@gmail.com","careType":"complaint","status":"in_progress","priority":"urgent","assignedTo":"Phạm Đức Anh","notes":"Khiếu nại về sự cố gián đoạn dịch vụ. Đang xử lý bồi thường.","createdAt":"2026-04-13T16:30:00Z","updatedAt":"2026-04-14T09:00:00Z"},{"id":"CC-0009","customerName":"Ngô Thị Ngọc","customerPhone":"0990123456","customerEmail":"ngoc.ngo@gmail.com","careType":"follow_up","status":"resolved","priority":"low","assignedTo":"Trần Thu Hà","notes":"Theo dõi sau 2 tuần dùng thử. Khách muốn gia hạn thêm 3 tháng.","createdAt":"2026-04-01T10:00:00Z","updatedAt":"2026-04-16T11:00:00Z","resolvedAt":"2026-04-16T11:00:00Z"},{"id":"CC-0010","customerName":"Lý Đức Long","customerPhone":"0909876543","customerEmail":"long.ly@techcorp.vn","careType":"support","status":"new","priority":"high","assignedTo":"Nguyễn Thanh Sơn","notes":"Yêu cầu hỗ trợ tích hợp SSO cho hệ thống nội bộ.","createdAt":"2026-04-14T08:00:00Z","updatedAt":"2026-04-14T08:00:00Z"},{"id":"CC-0011","customerName":"Đào Minh Khoa","customerPhone":"0918765432","customerEmail":"khoa.dao@gmail.com","careType":"consultation","status":"resolved","priority":"normal","assignedTo":"Phạm Đức Anh","notes":"Tư vấn giải pháp cloud storage cho doanh nghiệp vừa.","createdAt":"2026-04-11T15:30:00Z","updatedAt":"2026-04-12T11:00:00Z","resolvedAt":"2026-04-12T11:00:00Z"},{"id":"CC-0012","customerName":"Chu Thị Bích","customerPhone":"0927654321","customerEmail":"bich.chu@business.com","careType":"callback","status":"in_progress","priority":"normal","assignedTo":"Trần Thu Hà","notes":"Gọi lại xác nhận thông tin hợp đồng và lịch triển khai.","createdAt":"2026-04-15T09:30:00Z","updatedAt":"2026-04-15T09:30:00Z"}]);}),
"[project]/src/modules/customer-care/services/customer-care-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignedStaff",
    ()=>assignedStaff,
    "carePriorities",
    ()=>carePriorities,
    "careStatuses",
    ()=>careStatuses,
    "careTypes",
    ()=>careTypes,
    "customerCareMockData",
    ()=>customerCareMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-rsc] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-rsc] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-rsc] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadphonesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-rsc] (ecmascript) <export default as HeadphonesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-rsc] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-rsc] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-rsc] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$types$2f$customer$2d$care$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/customer-care/services/types/customer-care-types.ts [app-rsc] (ecmascript)");
;
;
const customerCareData = __turbopack_context__.r("[project]/src/modules/customer-care/services/data/customer-care.json (json)");
const customerCareMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$types$2f$customer$2d$care$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customerCareSchema"].array().parse(customerCareData);
const careTypes = [
    {
        value: "consultation",
        label: "Tư vấn",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    },
    {
        value: "callback",
        label: "Gọi lại",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    },
    {
        value: "complaint",
        label: "Khiếu nại",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"]
    },
    {
        value: "follow_up",
        label: "Theo dõi",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
    },
    {
        value: "support",
        label: "Hỗ trợ",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadphonesIcon$3e$__["HeadphonesIcon"]
    }
];
const careStatuses = [
    {
        value: "new",
        label: "Mới",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]
    },
    {
        value: "in_progress",
        label: "Đang xử lý",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    {
        value: "resolved",
        label: "Đã giải quyết",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        value: "closed",
        label: "Đóng",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"]
    }
];
const carePriorities = [
    {
        value: "low",
        label: "Thấp"
    },
    {
        value: "normal",
        label: "Bình thường"
    },
    {
        value: "high",
        label: "Cao"
    },
    {
        value: "urgent",
        label: "Khẩn cấp"
    }
];
const assignedStaff = [
    "Trần Thu Hà",
    "Phạm Đức Anh",
    "Nguyễn Thanh Sơn"
];
}),
"[project]/src/modules/customer-care/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedCustomerCareMockData",
    ()=>seedCustomerCareMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$customer$2d$care$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/customer-care/services/customer-care-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function seedCustomerCareMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("customer_cares", [
        {
            collectionName: "customer_cares",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$customer$2d$care$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customerCareMockData"]
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/dashboard/services/data/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"header":"Cover page","type":"Cover page","status":"In Process","target":"18","limit":"5","reviewer":"Eddie Lake"},{"id":2,"header":"Table of contents","type":"Table of contents","status":"Done","target":"29","limit":"24","reviewer":"Eddie Lake"},{"id":3,"header":"Executive summary","type":"Narrative","status":"Done","target":"10","limit":"13","reviewer":"Eddie Lake"},{"id":4,"header":"Technical approach","type":"Narrative","status":"Done","target":"27","limit":"23","reviewer":"Jamik Tashpulatov"},{"id":5,"header":"Design","type":"Narrative","status":"In Process","target":"2","limit":"16","reviewer":"Jamik Tashpulatov"},{"id":6,"header":"Capabilities","type":"Narrative","status":"In Process","target":"20","limit":"8","reviewer":"Jamik Tashpulatov"},{"id":7,"header":"Integration with existing systems","type":"Narrative","status":"In Process","target":"19","limit":"21","reviewer":"Jamik Tashpulatov"},{"id":8,"header":"Innovation and Advantages","type":"Narrative","status":"Done","target":"25","limit":"26","reviewer":"Assign reviewer"},{"id":9,"header":"Overview of EMR's Innovative Solutions","type":"Technical content","status":"Done","target":"7","limit":"23","reviewer":"Assign reviewer"},{"id":10,"header":"Advanced Algorithms and Machine Learning","type":"Narrative","status":"Done","target":"30","limit":"28","reviewer":"Assign reviewer"},{"id":11,"header":"Adaptive Communication Protocols","type":"Narrative","status":"Done","target":"9","limit":"31","reviewer":"Assign reviewer"},{"id":12,"header":"Advantages Over Current Technologies","type":"Narrative","status":"Done","target":"12","limit":"0","reviewer":"Assign reviewer"},{"id":13,"header":"Past Performance","type":"Narrative","status":"Done","target":"22","limit":"33","reviewer":"Assign reviewer"},{"id":14,"header":"Customer Feedback and Satisfaction Levels","type":"Narrative","status":"Done","target":"15","limit":"34","reviewer":"Assign reviewer"},{"id":15,"header":"Implementation Challenges and Solutions","type":"Narrative","status":"Done","target":"3","limit":"35","reviewer":"Assign reviewer"},{"id":16,"header":"Security Measures and Data Protection Policies","type":"Narrative","status":"In Process","target":"6","limit":"36","reviewer":"Assign reviewer"},{"id":17,"header":"Scalability and Future Proofing","type":"Narrative","status":"Done","target":"4","limit":"37","reviewer":"Assign reviewer"},{"id":18,"header":"Cost-Benefit Analysis","type":"Plain language","status":"Done","target":"14","limit":"38","reviewer":"Assign reviewer"},{"id":19,"header":"User Training and Onboarding Experience","type":"Narrative","status":"Done","target":"17","limit":"39","reviewer":"Assign reviewer"},{"id":20,"header":"Future Development Roadmap","type":"Narrative","status":"Done","target":"11","limit":"40","reviewer":"Assign reviewer"},{"id":21,"header":"System Architecture Overview","type":"Technical content","status":"In Process","target":"24","limit":"18","reviewer":"Maya Johnson"},{"id":22,"header":"Risk Management Plan","type":"Narrative","status":"Done","target":"15","limit":"22","reviewer":"Carlos Rodriguez"},{"id":23,"header":"Compliance Documentation","type":"Legal","status":"In Process","target":"31","limit":"27","reviewer":"Sarah Chen"},{"id":24,"header":"API Documentation","type":"Technical content","status":"Done","target":"8","limit":"12","reviewer":"Raj Patel"},{"id":25,"header":"User Interface Mockups","type":"Visual","status":"In Process","target":"19","limit":"25","reviewer":"Leila Ahmadi"},{"id":26,"header":"Database Schema","type":"Technical content","status":"Done","target":"22","limit":"20","reviewer":"Thomas Wilson"},{"id":27,"header":"Testing Methodology","type":"Technical content","status":"In Process","target":"17","limit":"14","reviewer":"Assign reviewer"},{"id":28,"header":"Deployment Strategy","type":"Narrative","status":"Done","target":"26","limit":"30","reviewer":"Eddie Lake"},{"id":29,"header":"Budget Breakdown","type":"Financial","status":"In Process","target":"13","limit":"16","reviewer":"Jamik Tashpulatov"},{"id":30,"header":"Market Analysis","type":"Research","status":"Done","target":"29","limit":"32","reviewer":"Sophia Martinez"},{"id":31,"header":"Competitor Comparison","type":"Research","status":"In Process","target":"21","limit":"19","reviewer":"Assign reviewer"},{"id":32,"header":"Maintenance Plan","type":"Technical content","status":"Done","target":"16","limit":"23","reviewer":"Alex Thompson"},{"id":33,"header":"User Personas","type":"Research","status":"In Process","target":"27","limit":"24","reviewer":"Nina Patel"},{"id":34,"header":"Accessibility Compliance","type":"Legal","status":"Done","target":"18","limit":"21","reviewer":"Assign reviewer"},{"id":35,"header":"Performance Metrics","type":"Technical content","status":"In Process","target":"23","limit":"26","reviewer":"David Kim"},{"id":36,"header":"Disaster Recovery Plan","type":"Technical content","status":"Done","target":"14","limit":"17","reviewer":"Jamik Tashpulatov"},{"id":37,"header":"Third-party Integrations","type":"Technical content","status":"In Process","target":"25","limit":"28","reviewer":"Eddie Lake"},{"id":38,"header":"User Feedback Summary","type":"Research","status":"Done","target":"20","limit":"15","reviewer":"Assign reviewer"},{"id":39,"header":"Localization Strategy","type":"Narrative","status":"In Process","target":"12","limit":"19","reviewer":"Maria Garcia"},{"id":40,"header":"Mobile Compatibility","type":"Technical content","status":"Done","target":"28","limit":"31","reviewer":"James Wilson"},{"id":41,"header":"Data Migration Plan","type":"Technical content","status":"In Process","target":"19","limit":"22","reviewer":"Assign reviewer"},{"id":42,"header":"Quality Assurance Protocols","type":"Technical content","status":"Done","target":"30","limit":"33","reviewer":"Priya Singh"},{"id":43,"header":"Stakeholder Analysis","type":"Research","status":"In Process","target":"11","limit":"14","reviewer":"Eddie Lake"},{"id":44,"header":"Environmental Impact Assessment","type":"Research","status":"Done","target":"24","limit":"27","reviewer":"Assign reviewer"},{"id":45,"header":"Intellectual Property Rights","type":"Legal","status":"In Process","target":"17","limit":"20","reviewer":"Sarah Johnson"},{"id":46,"header":"Customer Support Framework","type":"Narrative","status":"Done","target":"22","limit":"25","reviewer":"Jamik Tashpulatov"},{"id":47,"header":"Version Control Strategy","type":"Technical content","status":"In Process","target":"15","limit":"18","reviewer":"Assign reviewer"},{"id":48,"header":"Continuous Integration Pipeline","type":"Technical content","status":"Done","target":"26","limit":"29","reviewer":"Michael Chen"},{"id":49,"header":"Regulatory Compliance","type":"Legal","status":"In Process","target":"13","limit":"16","reviewer":"Assign reviewer"},{"id":50,"header":"User Authentication System","type":"Technical content","status":"Done","target":"28","limit":"31","reviewer":"Eddie Lake"},{"id":51,"header":"Data Analytics Framework","type":"Technical content","status":"In Process","target":"21","limit":"24","reviewer":"Jamik Tashpulatov"},{"id":52,"header":"Cloud Infrastructure","type":"Technical content","status":"Done","target":"16","limit":"19","reviewer":"Assign reviewer"},{"id":53,"header":"Network Security Measures","type":"Technical content","status":"In Process","target":"29","limit":"32","reviewer":"Lisa Wong"},{"id":54,"header":"Project Timeline","type":"Planning","status":"Done","target":"14","limit":"17","reviewer":"Eddie Lake"},{"id":55,"header":"Resource Allocation","type":"Planning","status":"In Process","target":"27","limit":"30","reviewer":"Assign reviewer"},{"id":56,"header":"Team Structure and Roles","type":"Planning","status":"Done","target":"20","limit":"23","reviewer":"Jamik Tashpulatov"},{"id":57,"header":"Communication Protocols","type":"Planning","status":"In Process","target":"15","limit":"18","reviewer":"Assign reviewer"},{"id":58,"header":"Success Metrics","type":"Planning","status":"Done","target":"30","limit":"33","reviewer":"Eddie Lake"},{"id":59,"header":"Internationalization Support","type":"Technical content","status":"In Process","target":"23","limit":"26","reviewer":"Jamik Tashpulatov"},{"id":60,"header":"Backup and Recovery Procedures","type":"Technical content","status":"Done","target":"18","limit":"21","reviewer":"Assign reviewer"},{"id":61,"header":"Monitoring and Alerting System","type":"Technical content","status":"In Process","target":"25","limit":"28","reviewer":"Daniel Park"},{"id":62,"header":"Code Review Guidelines","type":"Technical content","status":"Done","target":"12","limit":"15","reviewer":"Eddie Lake"},{"id":63,"header":"Documentation Standards","type":"Technical content","status":"In Process","target":"27","limit":"30","reviewer":"Jamik Tashpulatov"},{"id":64,"header":"Release Management Process","type":"Planning","status":"Done","target":"22","limit":"25","reviewer":"Assign reviewer"},{"id":65,"header":"Feature Prioritization Matrix","type":"Planning","status":"In Process","target":"19","limit":"22","reviewer":"Emma Davis"},{"id":66,"header":"Technical Debt Assessment","type":"Technical content","status":"Done","target":"24","limit":"27","reviewer":"Eddie Lake"},{"id":67,"header":"Capacity Planning","type":"Planning","status":"In Process","target":"21","limit":"24","reviewer":"Jamik Tashpulatov"},{"id":68,"header":"Service Level Agreements","type":"Legal","status":"Done","target":"26","limit":"29","reviewer":"Assign reviewer"}]);}),
"[project]/src/modules/dashboard/services/data/focus-documents-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"header":"Technical Specifications Document v2.1","type":"Technical Document","status":"Final","target":"100%","limit":"100%","reviewer":"Eddie Lake"},{"id":2,"header":"Security Compliance Report Q4 2024","type":"Compliance Document","status":"Under Review","target":"95%","limit":"100%","reviewer":"Jamik Tashpulatov"},{"id":3,"header":"Project Management Plan v3.0","type":"Management Document","status":"Final","target":"100%","limit":"100%","reviewer":"Emily Whalen"},{"id":4,"header":"Risk Assessment Matrix 2025","type":"Risk Document","status":"Draft","target":"80%","limit":"90%","reviewer":"Eddie Lake"},{"id":5,"header":"Quality Assurance Protocol v1.5","type":"QA Document","status":"Final","target":"100%","limit":"100%","reviewer":"Jamik Tashpulatov"}]);}),
"[project]/src/modules/dashboard/services/data/key-personnel-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"header":"Dr. Sarah Mitchell","type":"Project Manager","status":"Active","target":"15 years","limit":"20 years","reviewer":"Eddie Lake"},{"id":2,"header":"James Thompson","type":"Lead Engineer","status":"Active","target":"12 years","limit":"15 years","reviewer":"Jamik Tashpulatov"},{"id":3,"header":"Maria Rodriguez","type":"Security Specialist","status":"Active","target":"8 years","limit":"10 years","reviewer":"Emily Whalen"},{"id":4,"header":"David Chen","type":"Systems Architect","status":"Active","target":"10 years","limit":"12 years","reviewer":"Eddie Lake"},{"id":5,"header":"Lisa Johnson","type":"Quality Assurance Lead","status":"Active","target":"6 years","limit":"8 years","reviewer":"Jamik Tashpulatov"}]);}),
"[project]/src/modules/dashboard/services/data/past-performance-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"header":"Federal Communications Commission - Network Infrastructure Modernization","type":"Government Contract","status":"Completed","target":"95%","limit":"100%","reviewer":"Eddie Lake"},{"id":2,"header":"Department of Defense - Cybersecurity Enhancement Program","type":"Defense Contract","status":"Completed","target":"98%","limit":"100%","reviewer":"Jamik Tashpulatov"},{"id":3,"header":"NASA - Satellite Communication System Upgrade","type":"Space Technology","status":"Completed","target":"92%","limit":"95%","reviewer":"Emily Whalen"},{"id":4,"header":"Department of Homeland Security - Border Security Tech","type":"Security Contract","status":"In Progress","target":"85%","limit":"90%","reviewer":"Eddie Lake"},{"id":5,"header":"GSA - Cloud Infrastructure Migration","type":"IT Services","status":"Completed","target":"96%","limit":"98%","reviewer":"Jamik Tashpulatov"}]);}),
"[project]/src/modules/dashboard/services/dashboard-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardMockData",
    ()=>dashboardMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/data/data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$focus$2d$documents$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/data/focus-documents-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$key$2d$personnel$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/data/key-personnel-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$past$2d$performance$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/data/past-performance-data.json (json)");
;
;
;
;
const dashboardMockData = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$data$2e$json__$28$json$29$__["default"],
    focusDocumentsData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$focus$2d$documents$2d$data$2e$json__$28$json$29$__["default"],
    keyPersonnelData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$key$2d$personnel$2d$data$2e$json__$28$json$29$__["default"],
    pastPerformanceData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$past$2d$performance$2d$data$2e$json__$28$json$29$__["default"]
};
}),
"[project]/src/modules/dashboard/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedDashboardMockData",
    ()=>seedDashboardMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$dashboard$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/dashboard-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedDashboardMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("dashboard", [
        {
            collectionName: "dashboardRows",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$dashboard$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dashboardMockData"].data
        },
        {
            collectionName: "pastPerformances",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$dashboard$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dashboardMockData"].pastPerformanceData
        },
        {
            collectionName: "keyPersonnel",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$dashboard$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dashboardMockData"].keyPersonnelData
        },
        {
            collectionName: "focusDocuments",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$dashboard$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dashboardMockData"].focusDocumentsData
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/dashboard/services/data/revenue-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"REV-2025-01","month":1,"revenue":85000000,"year":2025},{"id":"REV-2025-02","month":2,"revenue":92000000,"year":2025},{"id":"REV-2025-03","month":3,"revenue":105000000,"year":2025},{"id":"REV-2025-04","month":4,"revenue":98000000,"year":2025},{"id":"REV-2025-05","month":5,"revenue":115000000,"year":2025}]);}),
"[project]/src/modules/dashboard/services/types/revenue-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revenueSchema",
    ()=>revenueSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const revenueSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    month: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(12),
    revenue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(2025)
});
}),
"[project]/src/modules/dashboard/services/revenue-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revenueMockData",
    ()=>revenueMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$revenue$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/data/revenue-data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$types$2f$revenue$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/types/revenue-types.ts [app-rsc] (ecmascript)");
;
;
const revenueMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$types$2f$revenue$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revenueSchema"].array().parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$data$2f$revenue$2d$data$2e$json__$28$json$29$__["default"]);
}),
"[project]/src/modules/dashboard/services/revenue-mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedRevenuesMockData",
    ()=>seedRevenuesMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/revenue-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function seedRevenuesMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("revenues", [
        {
            collectionName: "revenues",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revenueMockData"],
            getDocumentId: (_, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revenueMockData"][index]?.id ?? `REV-${index + 1}`
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/dashboard-2/services/data/dashboard-data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"totalRevenue":54231.89,"revenueChange":12.5,"activeCustomers":2350,"customerChange":5.2,"totalOrders":1247,"orderChange":-2.1,"conversionRate":3.24,"conversionChange":8.3,"salesData":[{"month":"Jan","sales":12500,"target":15000},{"month":"Feb","sales":18200,"target":15000},{"month":"Mar","sales":16800,"target":15000},{"month":"Apr","sales":22400,"target":20000},{"month":"May","sales":24600,"target":20000},{"month":"Jun","sales":28200,"target":25000},{"month":"Jul","sales":31500,"target":25000},{"month":"Aug","sales":29800,"target":25000},{"month":"Sep","sales":33200,"target":30000},{"month":"Oct","sales":35100,"target":30000},{"month":"Nov","sales":38900,"target":35000},{"month":"Dec","sales":42300,"target":35000}],"revenueBreakdown":[{"name":"Subscriptions","value":45,"amount":24500,"color":"hsl(210, 100%, 50%)"},{"name":"One-time Sales","value":30,"amount":16300,"color":"hsl(280, 100%, 70%)"},{"name":"Services","value":15,"amount":8150,"color":"hsl(120, 100%, 40%)"},{"name":"Partnerships","value":10,"amount":5430,"color":"hsl(30, 100%, 50%)"}],"customerGrowth":[{"month":"Jan","new":245,"returning":890,"churn":45},{"month":"Feb","new":312,"returning":934,"churn":52},{"month":"Mar","new":289,"returning":1023,"churn":38},{"month":"Apr","new":456,"returning":1156,"churn":61},{"month":"May","new":523,"returning":1298,"churn":47},{"month":"Jun","new":634,"returning":1445,"churn":55}],"lastUpdated":"2025-08-12T15:30:00Z"});}),
"[project]/src/modules/dashboard-2/services/dashboard-2-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboard2MockData",
    ()=>dashboard2MockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$data$2f$dashboard$2d$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard-2/services/data/dashboard-data.json (json)");
;
const dashboard2MockData = {
    dashboardData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$data$2f$dashboard$2d$data$2e$json__$28$json$29$__["default"]
};
}),
"[project]/src/modules/dashboard-2/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedDashboard2MockData",
    ()=>seedDashboard2MockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$dashboard$2d$2$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard-2/services/dashboard-2-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedDashboard2MockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("dashboard-2", [
        {
            collectionName: "businessDashboards",
            documents: [
                {
                    id: "default",
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$dashboard$2d$2$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dashboard2MockData"].dashboardData
                }
            ]
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/dashboard-3/services/dashboard-3-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activityFeed",
    ()=>activityFeed,
    "audienceChartConfig",
    ()=>audienceChartConfig,
    "audienceData",
    ()=>audienceData,
    "campaigns",
    ()=>campaigns,
    "channelChartConfig",
    ()=>channelChartConfig,
    "channelData",
    ()=>channelData,
    "contentPipeline",
    ()=>contentPipeline,
    "metrics",
    ()=>metrics,
    "socialMixConfig",
    ()=>socialMixConfig,
    "socialMixData",
    ()=>socialMixData,
    "topPosts",
    ()=>topPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-rsc] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-rsc] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-rsc] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-rsc] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
;
const metrics = [
    {
        title: "Total Reach",
        value: "8.7M",
        description: "Across paid and organic channels",
        change: "+18.4%",
        trend: "up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        footer: "Audience expansion is accelerating",
        subfooter: "Best lift from short-form video"
    },
    {
        title: "Engagement Rate",
        value: "6.82%",
        description: "Weighted by impressions",
        change: "+2.1%",
        trend: "up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        footer: "Above quarterly benchmark",
        subfooter: "Comments and shares are leading"
    },
    {
        title: "New Followers",
        value: "124.8K",
        description: "Net growth this month",
        change: "+11.6%",
        trend: "up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        footer: "Community growth remains healthy",
        subfooter: "Creator collaborations outperforming"
    },
    {
        title: "Cost Per Lead",
        value: "$18.42",
        description: "Blended acquisition cost",
        change: "-7.3%",
        trend: "down",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        footer: "Efficiency improved this week",
        subfooter: "Retargeting audiences lowered CPL"
    }
];
const audienceData = [
    {
        date: "Apr 01",
        followers: 842,
        impressions: 2100,
        engagement: 118
    },
    {
        date: "Apr 04",
        followers: 891,
        impressions: 2380,
        engagement: 146
    },
    {
        date: "Apr 07",
        followers: 944,
        impressions: 2610,
        engagement: 173
    },
    {
        date: "Apr 10",
        followers: 1012,
        impressions: 3120,
        engagement: 209
    },
    {
        date: "Apr 13",
        followers: 1075,
        impressions: 3350,
        engagement: 241
    },
    {
        date: "Apr 16",
        followers: 1168,
        impressions: 3980,
        engagement: 298
    },
    {
        date: "Apr 19",
        followers: 1215,
        impressions: 4260,
        engagement: 322
    },
    {
        date: "Apr 22",
        followers: 1318,
        impressions: 4890,
        engagement: 386
    }
];
const audienceChartConfig = {
    followers: {
        label: "Followers",
        color: "var(--chart-1)"
    },
    impressions: {
        label: "Impressions",
        color: "var(--chart-2)"
    },
    engagement: {
        label: "Engagement",
        color: "var(--chart-3)"
    }
};
const channelData = [
    {
        channel: "Instagram",
        reach: 3200,
        engagement: 2480
    },
    {
        channel: "TikTok",
        reach: 4100,
        engagement: 3180
    },
    {
        channel: "LinkedIn",
        reach: 1900,
        engagement: 980
    },
    {
        channel: "YouTube",
        reach: 2600,
        engagement: 1420
    },
    {
        channel: "X",
        reach: 1500,
        engagement: 760
    }
];
const channelChartConfig = {
    reach: {
        label: "Reach",
        color: "var(--chart-1)"
    },
    engagement: {
        label: "Engagement",
        color: "var(--chart-4)"
    }
};
const socialMixData = [
    {
        name: "Paid Social",
        value: 38,
        color: "var(--chart-1)"
    },
    {
        name: "Organic",
        value: 27,
        color: "var(--chart-2)"
    },
    {
        name: "Creators",
        value: 22,
        color: "var(--chart-3)"
    },
    {
        name: "Community",
        value: 13,
        color: "var(--chart-4)"
    }
];
const socialMixConfig = {
    paid: {
        label: "Paid Social",
        color: "var(--chart-1)"
    },
    organic: {
        label: "Organic",
        color: "var(--chart-2)"
    },
    creators: {
        label: "Creators",
        color: "var(--chart-3)"
    },
    community: {
        label: "Community",
        color: "var(--chart-4)"
    }
};
const campaigns = [
    {
        name: "Spring Product Launch",
        channel: "TikTok + Instagram",
        owner: "Lena",
        budget: "$42,000",
        roi: "4.8x",
        status: "Live"
    },
    {
        name: "Founder Thought Leadership",
        channel: "LinkedIn",
        owner: "Marcus",
        budget: "$8,500",
        roi: "3.1x",
        status: "Optimizing"
    },
    {
        name: "Creator Spark Program",
        channel: "Creators",
        owner: "Nora",
        budget: "$28,400",
        roi: "5.6x",
        status: "Live"
    },
    {
        name: "Retargeting Warm Leads",
        channel: "Paid Social",
        owner: "Quinn",
        budget: "$18,200",
        roi: "6.2x",
        status: "Review"
    }
];
const contentPipeline = [
    {
        stage: "Ideas",
        value: 28,
        total: 40,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        stage: "Scripting",
        value: 17,
        total: 24,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
    },
    {
        stage: "Production",
        value: 12,
        total: 18,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
    },
    {
        stage: "Scheduled",
        value: 31,
        total: 36,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    }
];
const topPosts = [
    {
        title: "Behind the launch week workflow",
        network: "TikTok",
        metric: "1.8M views",
        delta: "+24%"
    },
    {
        title: "Customer story carousel",
        network: "Instagram",
        metric: "84K saves",
        delta: "+17%"
    },
    {
        title: "Market insight thread",
        network: "LinkedIn",
        metric: "19K clicks",
        delta: "+9%"
    }
];
const activityFeed = [
    {
        user: "LN",
        title: "Lena approved three creator drafts",
        description: "Ready for publishing on Friday",
        time: "12 min ago"
    },
    {
        user: "MQ",
        title: "Marcus paused a low-CTR ad set",
        description: "Budget shifted to retargeting",
        time: "34 min ago"
    },
    {
        user: "NS",
        title: "Nora added 14 UGC clips",
        description: "Queued for product launch edits",
        time: "1 hr ago"
    }
];
}),
"[project]/src/modules/dashboard-3/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedDashboard3MockData",
    ()=>seedDashboard3MockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard-3/services/dashboard-3-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedDashboard3MockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("dashboard-3", [
        {
            collectionName: "marketingMetrics",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metrics"],
            getDocumentId: (document)=>String(document.title)
        },
        {
            collectionName: "audiencePoints",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["audienceData"],
            getDocumentId: (document)=>String(document.date)
        },
        {
            collectionName: "channelPerformances",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["channelData"],
            getDocumentId: (document)=>String(document.channel)
        },
        {
            collectionName: "socialMixes",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["socialMixData"],
            getDocumentId: (document)=>String(document.name)
        },
        {
            collectionName: "campaigns",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["campaigns"],
            getDocumentId: (document)=>String(document.name)
        },
        {
            collectionName: "contentPipelines",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentPipeline"],
            getDocumentId: (document)=>String(document.stage)
        },
        {
            collectionName: "topPosts",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["topPosts"],
            getDocumentId: (document)=>String(document.title)
        },
        {
            collectionName: "activityFeeds",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$dashboard$2d$3$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["activityFeed"],
            getDocumentId: (document)=>String(document.title)
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/faqs/services/data/categories.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"name":"All","count":46},{"name":"General","count":8},{"name":"Account","count":6},{"name":"Billing","count":8},{"name":"Technical","count":9},{"name":"Privacy","count":5},{"name":"Security","count":4},{"name":"Support","count":6}]);}),
"[project]/src/modules/faqs/services/data/faqs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"question\":\"What is Claude Code Admin?\",\"answer\":\"Claude Code Admin is a comprehensive admin dashboard template built with React, TypeScript, and shadcn/ui components. It provides a complete solution for managing your e-commerce store or business operations.\",\"category\":\"General\"},{\"id\":2,\"question\":\"How do I get started?\",\"answer\":\"You can get started by signing up for an account, choosing a plan that fits your needs, and following our quick setup guide to configure your dashboard.\",\"category\":\"General\"},{\"id\":3,\"question\":\"Do you offer a free trial?\",\"answer\":\"Yes, we offer a 14-day free trial for all new users. No credit card is required to start the trial, and you can explore all features during this period.\",\"category\":\"General\"},{\"id\":4,\"question\":\"What browsers are supported?\",\"answer\":\"We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your preferred browser.\",\"category\":\"General\"},{\"id\":5,\"question\":\"How do I contact support?\",\"answer\":\"You can contact our support team through the support page, by email at support@shadcnstore.com, or through the live chat feature available 24/7.\",\"category\":\"General\"},{\"id\":6,\"question\":\"Is there a mobile app available?\",\"answer\":\"Currently, we offer a responsive web application that works great on mobile devices. A dedicated mobile app is planned for future release.\",\"category\":\"General\"},{\"id\":7,\"question\":\"Can I customize the dashboard?\",\"answer\":\"Yes, the dashboard is highly customizable. You can modify themes, layouts, add custom components, and configure various settings to match your brand.\",\"category\":\"General\"},{\"id\":8,\"question\":\"What integrations are available?\",\"answer\":\"We offer integrations with popular services like Stripe, PayPal, Shopify, WooCommerce, Google Analytics, and many more through our API.\",\"category\":\"General\"},{\"id\":9,\"question\":\"How do I reset my password?\",\"answer\":\"You can reset your password by clicking on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password.\",\"category\":\"Account\"},{\"id\":10,\"question\":\"How do I change my email address?\",\"answer\":\"You can change your email address in your account settings under the 'User Settings' section. You'll need to verify the new email address before the change takes effect.\",\"category\":\"Account\"},{\"id\":11,\"question\":\"Can I have multiple team members?\",\"answer\":\"Yes, depending on your plan, you can invite team members and assign different roles and permissions to manage your store collaboratively.\",\"category\":\"Account\"},{\"id\":12,\"question\":\"How do I delete my account?\",\"answer\":\"To delete your account, go to your account settings and select 'Delete Account'. Please note that this action is irreversible and all data will be permanently removed.\",\"category\":\"Account\"},{\"id\":13,\"question\":\"Can I change my username?\",\"answer\":\"Yes, you can change your username in the account settings. Keep in mind that some features might reference your old username temporarily.\",\"category\":\"Account\"},{\"id\":14,\"question\":\"How do I enable two-factor authentication?\",\"answer\":\"You can enable two-factor authentication in your account security settings. We support both SMS and authenticator app methods for added security.\",\"category\":\"Account\"},{\"id\":15,\"question\":\"What payment methods do you accept?\",\"answer\":\"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely.\",\"category\":\"Billing\"},{\"id\":16,\"question\":\"How can I upgrade my plan?\",\"answer\":\"You can upgrade your plan at any time from your account settings. Go to 'Plans & Billing' and select the plan that best fits your needs. Changes take effect immediately.\",\"category\":\"Billing\"},{\"id\":17,\"question\":\"Can I downgrade my plan?\",\"answer\":\"Yes, you can downgrade your plan at any time. The change will take effect at the start of your next billing cycle to ensure you don't lose access to premium features.\",\"category\":\"Billing\"},{\"id\":18,\"question\":\"Do you offer refunds?\",\"answer\":\"We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact our support team for a full refund within 30 days of purchase.\",\"category\":\"Billing\"},{\"id\":19,\"question\":\"How does billing work?\",\"answer\":\"Billing is processed monthly or annually depending on your chosen plan. You'll receive an invoice before each billing cycle, and payment is automatically charged to your selected method.\",\"category\":\"Billing\"},{\"id\":20,\"question\":\"Can I change my billing cycle?\",\"answer\":\"Yes, you can switch between monthly and annual billing at any time. Annual billing offers significant savings compared to monthly billing.\",\"category\":\"Billing\"},{\"id\":21,\"question\":\"What happens if payment fails?\",\"answer\":\"If a payment fails, we'll attempt to charge your card again after 3 days. You'll receive email notifications, and your account will remain active during this grace period.\",\"category\":\"Billing\"},{\"id\":22,\"question\":\"How do I view my billing history?\",\"answer\":\"You can view your complete billing history in the 'Plans & Billing' section of your account settings. All invoices and receipts are available for download.\",\"category\":\"Billing\"},{\"id\":23,\"question\":\"Can I export my data?\",\"answer\":\"Yes, you can export your data at any time from your account settings. We provide exports in multiple formats including CSV, JSON, and PDF for different data types.\",\"category\":\"Technical\"},{\"id\":24,\"question\":\"What APIs do you provide?\",\"answer\":\"We provide comprehensive REST APIs for all major features including product management, order processing, customer data, and analytics. Full documentation is available.\",\"category\":\"Technical\"},{\"id\":25,\"question\":\"How do I backup my data?\",\"answer\":\"We automatically backup all your data daily. You can also create manual backups anytime from your settings, and restore from any backup point within the last 30 days.\",\"category\":\"Technical\"},{\"id\":26,\"question\":\"Is there a rate limit on API calls?\",\"answer\":\"Yes, API rate limits vary by plan. Basic plans have 1000 calls/hour, Professional plans have 10,000 calls/hour, and Enterprise plans have unlimited calls.\",\"category\":\"Technical\"},{\"id\":27,\"question\":\"How do I set up webhooks?\",\"answer\":\"Webhooks can be configured in the 'Connections' section of your settings. You can set up webhooks for various events like new orders, payment confirmations, and inventory updates.\",\"category\":\"Technical\"},{\"id\":28,\"question\":\"What about system maintenance?\",\"answer\":\"We perform maintenance during low-traffic hours (typically Sunday 2-4 AM UTC). You'll be notified at least 48 hours in advance of any scheduled maintenance.\",\"category\":\"Technical\"},{\"id\":29,\"question\":\"How do I troubleshoot connection issues?\",\"answer\":\"First, check your internet connection and try refreshing the page. If issues persist, check our status page or contact support with specific error messages.\",\"category\":\"Technical\"},{\"id\":30,\"question\":\"Can I use custom domains?\",\"answer\":\"Yes, Professional and Enterprise plans support custom domains. You can configure your custom domain in the 'Connections' section of your account settings.\",\"category\":\"Technical\"},{\"id\":31,\"question\":\"What databases do you support?\",\"answer\":\"We support integration with MySQL, PostgreSQL, MongoDB, and other popular databases through our Database Sync feature available in higher-tier plans.\",\"category\":\"Technical\"},{\"id\":32,\"question\":\"How do you handle my personal data?\",\"answer\":\"We follow strict data protection policies and comply with GDPR, CCPA, and other privacy regulations. Your personal data is never shared with third parties without your consent.\",\"category\":\"Privacy\"},{\"id\":33,\"question\":\"Can I request my data?\",\"answer\":\"Yes, you can request a complete copy of your personal data at any time. We'll provide it in a machine-readable format within 30 days of your request.\",\"category\":\"Privacy\"},{\"id\":34,\"question\":\"How long do you retain data?\",\"answer\":\"We retain your data as long as your account is active. After account deletion, personal data is removed within 30 days, though some anonymized analytics may be retained.\",\"category\":\"Privacy\"},{\"id\":35,\"question\":\"Do you use cookies?\",\"answer\":\"Yes, we use essential cookies for functionality and optional cookies for analytics and personalization. You can manage your cookie preferences in your account settings.\",\"category\":\"Privacy\"},{\"id\":36,\"question\":\"Is my data encrypted?\",\"answer\":\"Yes, all data is encrypted both in transit (using TLS 1.3) and at rest (using AES-256 encryption). We use industry-standard security practices to protect your information.\",\"category\":\"Privacy\"},{\"id\":37,\"question\":\"How secure is my data?\",\"answer\":\"We implement bank-level security with end-to-end encryption, regular security audits, and compliance with SOC 2 Type II standards. Your data security is our top priority.\",\"category\":\"Security\"},{\"id\":38,\"question\":\"Do you support SSO?\",\"answer\":\"Yes, Enterprise plans include Single Sign-On (SSO) support with popular providers like Google, Microsoft Azure AD, and Okta for seamless team access.\",\"category\":\"Security\"},{\"id\":39,\"question\":\"What about password requirements?\",\"answer\":\"We require strong passwords with at least 8 characters, including uppercase, lowercase, numbers, and special characters. We also highly recommend enabling two-factor authentication.\",\"category\":\"Security\"},{\"id\":40,\"question\":\"How do you handle security incidents?\",\"answer\":\"We have a comprehensive incident response plan. In case of any security issues, we immediately investigate, contain the issue, and notify affected users within 24 hours.\",\"category\":\"Security\"},{\"id\":41,\"question\":\"What support channels are available?\",\"answer\":\"We offer email support, live chat, and phone support (for Enterprise customers). Our knowledge base and community forums are also available 24/7.\",\"category\":\"Support\"},{\"id\":42,\"question\":\"What are your support hours?\",\"answer\":\"Email and chat support are available 24/7. Phone support for Enterprise customers is available Monday-Friday, 9 AM-6 PM in your local timezone.\",\"category\":\"Support\"},{\"id\":43,\"question\":\"How quickly will I get a response?\",\"answer\":\"Response times vary by plan: Basic (24 hours), Professional (12 hours), Enterprise (2 hours). Critical issues are prioritized and responded to immediately.\",\"category\":\"Support\"},{\"id\":44,\"question\":\"Do you offer training?\",\"answer\":\"Yes, we provide comprehensive onboarding for all plans, video tutorials, documentation, and personalized training sessions for Enterprise customers.\",\"category\":\"Support\"},{\"id\":45,\"question\":\"Can you help with custom implementations?\",\"answer\":\"Enterprise customers get access to our professional services team for custom implementations, integrations, and consulting services.\",\"category\":\"Support\"},{\"id\":46,\"question\":\"Is there a community forum?\",\"answer\":\"Yes, we have an active community forum where users share tips, ask questions, and get help from both our team and other community members.\",\"category\":\"Support\"}]"));}),
"[project]/src/modules/faqs/services/data/features.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"title":"Premium Quality","description":"Handcrafted with premium materials and meticulous attention to detail.","icon":"Sparkles"},{"id":2,"title":"Secure Shopping","description":"100% secure payment processing with end-to-end encryption.","icon":"Shield"},{"id":3,"title":"Fast Delivery","description":"Free worldwide shipping and hassle-free returns within 30 days.","icon":"Truck"},{"id":4,"title":"24/7 Support","description":"Round-the-clock customer support to assist you anytime.","icon":"Clock"}]);}),
"[project]/src/modules/faqs/services/faqs-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqsMockData",
    ()=>faqsMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$data$2f$categories$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/faqs/services/data/categories.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$data$2f$faqs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/faqs/services/data/faqs.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$data$2f$features$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/faqs/services/data/features.json (json)");
;
;
;
const faqsMockData = {
    categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$data$2f$categories$2e$json__$28$json$29$__["default"],
    faqs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$data$2f$faqs$2e$json__$28$json$29$__["default"],
    features: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$data$2f$features$2e$json__$28$json$29$__["default"]
};
}),
"[project]/src/modules/faqs/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedFaqsMockData",
    ()=>seedFaqsMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$faqs$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/faqs/services/faqs-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedFaqsMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("faqs", [
        {
            collectionName: "faqs",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$faqs$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqsMockData"].faqs
        },
        {
            collectionName: "faqCategories",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$faqs$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqsMockData"].categories,
            getDocumentId: (document)=>String(document.name)
        },
        {
            collectionName: "faqFeatures",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$faqs$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["faqsMockData"].features
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/mail/services/mail-mock-data.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "accounts",
    ()=>accounts,
    "contacts",
    ()=>contacts,
    "mails",
    ()=>mails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const mails = [
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
        date: "2023-10-22T09:00:00",
        read: true,
        labels: [
            "meeting",
            "work",
            "important"
        ]
    },
    {
        id: "110e8400-e29b-11d4-a716-446655440000",
        name: "Alice Smith",
        email: "alicesmith@example.com",
        subject: "Re: Project Update",
        text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
        date: "2023-10-22T10:30:00",
        read: true,
        labels: [
            "work",
            "important"
        ]
    },
    {
        id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        subject: "Weekend Plans",
        text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
        date: "2023-04-10T11:45:00",
        read: true,
        labels: [
            "personal"
        ]
    },
    {
        id: "61c35085-72d7-42b4-8d62-738f700d4b92",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Re: Question about Budget",
        text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
        date: "2023-03-25T13:15:00",
        read: false,
        labels: [
            "work",
            "budget"
        ]
    },
    {
        id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
        name: "Michael Wilson",
        email: "michaelwilson@example.com",
        subject: "Important Announcement",
        text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
        date: "2023-03-10T15:00:00",
        read: false,
        labels: [
            "meeting",
            "work",
            "important"
        ]
    },
    {
        id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
        name: "Sarah Brown",
        email: "sarahbrown@example.com",
        subject: "Re: Feedback on Proposal",
        text: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
        date: "2023-02-15T16:30:00",
        read: true,
        labels: [
            "work"
        ]
    },
    {
        id: "17c0a96d-4415-42b1-8b4f-764efab57f66",
        name: "David Lee",
        email: "davidlee@example.com",
        subject: "New Project Idea",
        text: "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
        date: "2023-01-28T17:45:00",
        read: false,
        labels: [
            "meeting",
            "work",
            "important"
        ]
    },
    {
        id: "2f0130cb-39fc-44c4-bb3c-0a4337edaaab",
        name: "Olivia Wilson",
        email: "oliviawilson@example.com",
        subject: "Vacation Plans",
        text: "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
        date: "2022-12-20T18:30:00",
        read: true,
        labels: [
            "personal"
        ]
    },
    {
        id: "de305d54-75b4-431b-adb2-eb6b9e546014",
        name: "James Martin",
        email: "jamesmartin@example.com",
        subject: "Re: Conference Registration",
        text: "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
        date: "2022-11-30T19:15:00",
        read: true,
        labels: [
            "work",
            "conference"
        ]
    },
    {
        id: "7dd90c63-00f6-40f3-bd87-5060a24e8ee7",
        name: "Sophia White",
        email: "sophiawhite@example.com",
        subject: "Team Dinner",
        text: "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!\n\nBest, Sophia",
        date: "2022-11-05T20:30:00",
        read: false,
        labels: [
            "meeting",
            "work"
        ]
    },
    {
        id: "99a88f78-3eb4-4d87-87b7-7b15a49a0a05",
        name: "Daniel Johnson",
        email: "danieljohnson@example.com",
        subject: "Feedback Request",
        text: "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.\n\nYour feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.\n\nRegards, Daniel",
        date: "2022-10-22T09:30:00",
        read: false,
        labels: [
            "work"
        ]
    },
    {
        id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        name: "Ava Taylor",
        email: "avataylor@example.com",
        subject: "Re: Meeting Agenda",
        text: "Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.\n\nIf you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.\n\nIt's essential that our meeting is productive and addresses all relevant matters.\n\nLooking forward to our meeting! Ava",
        date: "2022-10-10T10:45:00",
        read: true,
        labels: [
            "meeting",
            "work"
        ]
    },
    {
        id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
        name: "William Anderson",
        email: "williamanderson@example.com",
        subject: "Product Launch Update",
        text: "The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.\n\nI'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.\n\nLet's make this product launch a resounding success!\n\nBest regards, William",
        date: "2022-09-20T12:00:00",
        read: false,
        labels: [
            "meeting",
            "work",
            "important"
        ]
    },
    {
        id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
        name: "Mia Harris",
        email: "miaharris@example.com",
        subject: "Re: Travel Itinerary",
        text: "I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.\n\nIf there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.\n\nExcited for the trip! Mia",
        date: "2022-09-10T13:15:00",
        read: true,
        labels: [
            "personal",
            "travel"
        ]
    },
    {
        id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
        name: "Ethan Clark",
        email: "ethanclark@example.com",
        subject: "Team Building Event",
        text: "Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.\n\nPlease let me know your thoughts and availability. We want this event to be both enjoyable and productive.\n\nTogether, we'll strengthen our team and boost our performance.\n\nRegards, Ethan",
        date: "2022-08-25T15:30:00",
        read: false,
        labels: [
            "meeting",
            "work"
        ]
    },
    {
        id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
        name: "Chloe Hall",
        email: "chloehall@example.com",
        subject: "Re: Budget Approval",
        text: "The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.\n\nI've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.\n\nIt's an exciting time for us! Chloe",
        date: "2022-08-10T16:45:00",
        read: true,
        labels: [
            "work",
            "budget"
        ]
    },
    {
        id: "6c9a7f94-8329-4d70-95d3-51f68c186ae1",
        name: "Samuel Turner",
        email: "samuelturner@example.com",
        subject: "Weekend Hike",
        text: "Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.\n\nI've done some research and have a few routes in mind.\n\nLet me know if you're interested, and we can plan the details.\n\nIt's sure to be a memorable experience! Samuel",
        date: "2022-07-28T17:30:00",
        read: false,
        labels: [
            "personal"
        ]
    }
];
const accounts = [
    {
        label: "Alicia Koch",
        email: "alicia@example.com",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Gmail"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Alicia Koch",
        email: "alicia2@example.com",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Vercel"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24 22.525H0l12-21.05 12 21.05z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Alicia Koch",
        email: "alicia3@example.com",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "iCloud"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/mail/services/mail-mock-data.tsx",
            lineNumber: 204,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const contacts = [
    {
        name: "Emma Johnson",
        email: "emma.johnson@example.com"
    },
    {
        name: "Liam Wilson",
        email: "liam.wilson@example.com"
    },
    {
        name: "Olivia Davis",
        email: "olivia.davis@example.com"
    },
    {
        name: "Noah Martinez",
        email: "noah.martinez@example.com"
    },
    {
        name: "Ava Taylor",
        email: "ava.taylor@example.com"
    },
    {
        name: "Lucas Brown",
        email: "lucas.brown@example.com"
    },
    {
        name: "Sophia Smith",
        email: "sophia.smith@example.com"
    },
    {
        name: "Ethan Wilson",
        email: "ethan.wilson@example.com"
    },
    {
        name: "Isabella Jackson",
        email: "isabella.jackson@example.com"
    },
    {
        name: "Mia Clark",
        email: "mia.clark@example.com"
    },
    {
        name: "Mason Lee",
        email: "mason.lee@example.com"
    },
    {
        name: "Layla Harris",
        email: "layla.harris@example.com"
    },
    {
        name: "William Anderson",
        email: "william.anderson@example.com"
    },
    {
        name: "Ella White",
        email: "ella.white@example.com"
    },
    {
        name: "James Thomas",
        email: "james.thomas@example.com"
    },
    {
        name: "Harper Lewis",
        email: "harper.lewis@example.com"
    },
    {
        name: "Benjamin Moore",
        email: "benjamin.moore@example.com"
    },
    {
        name: "Aria Hall",
        email: "aria.hall@example.com"
    },
    {
        name: "Henry Turner",
        email: "henry.turner@example.com"
    },
    {
        name: "Scarlett Adams",
        email: "scarlett.adams@example.com"
    }
];
}),
"[project]/src/modules/mail/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedMailMockData",
    ()=>seedMailMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mail$2d$mock$2d$data$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/services/mail-mock-data.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const accountDocuments = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mail$2d$mock$2d$data$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["accounts"].map(({ label, email })=>({
        label,
        email
    }));
function seedMailMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("mail", [
        {
            collectionName: "mails",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mail$2d$mock$2d$data$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mails"]
        },
        {
            collectionName: "mailAccounts",
            documents: accountDocuments,
            getDocumentId: (document)=>String(document.email)
        },
        {
            collectionName: "contacts",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mail$2d$mock$2d$data$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contacts"],
            getDocumentId: (document)=>String(document.email)
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/pricing/services/data/faqs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"question":"Can I change my plan anytime?","answer":"Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and you'll be charged or credited accordingly."},{"id":2,"question":"Is there a free trial available?","answer":"Yes, all plans come with a 14-day free trial. No credit card is required to start your trial, and you can explore all features during this period."},{"id":3,"question":"What payment methods do you accept?","answer":"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely."},{"id":4,"question":"Do you offer discounts for annual plans?","answer":"Yes, save 20% when you choose annual billing on any plan. You can switch to annual billing from your account settings at any time."},{"id":5,"question":"What happens if I exceed my plan limits?","answer":"If you exceed your plan limits, we'll notify you in advance. You can either upgrade your plan or purchase additional resources as needed."},{"id":6,"question":"Can I cancel my subscription anytime?","answer":"Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to all features until the end of your current billing period."}]);}),
"[project]/src/modules/pricing/services/data/features.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"name":"Fast Performance","description":"Lightning-fast response times and optimized performance for all your business needs.","icon":"Rocket"},{"id":2,"name":"Enterprise Security","description":"Bank-level security with end-to-end encryption and advanced threat protection.","icon":"Shield"},{"id":3,"name":"Instant Setup","description":"Get up and running in minutes with our streamlined onboarding process.","icon":"Zap"},{"id":4,"name":"Team Collaboration","description":"Seamless collaboration tools to keep your team connected and productive.","icon":"Users"},{"id":5,"name":"24/7 Support","description":"Round-the-clock expert support whenever you need help or have questions.","icon":"Headphones"},{"id":6,"name":"Real-time Analytics","description":"Monitor your business performance with real-time insights and detailed analytics.","icon":"Clock"}]);}),
"[project]/src/modules/pricing/services/pricing-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pricingMockData",
    ()=>pricingMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$data$2f$faqs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/pricing/services/data/faqs.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$data$2f$features$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/pricing/services/data/features.json (json)");
;
;
const pricingMockData = {
    faqs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$data$2f$faqs$2e$json__$28$json$29$__["default"],
    features: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$data$2f$features$2e$json__$28$json$29$__["default"]
};
}),
"[project]/src/modules/pricing/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedPricingMockData",
    ()=>seedPricingMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$pricing$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pricing/services/pricing-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedPricingMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("pricing", [
        {
            collectionName: "pricingFeatures",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$pricing$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pricingMockData"].features
        },
        {
            collectionName: "pricingFaqs",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$pricing$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pricingMockData"].faqs
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/quiz/services/types/quiz-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questionSchema",
    ()=>questionSchema,
    "quizResultSchema",
    ()=>quizResultSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const questionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    option1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    option2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    option3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    option4: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    correctOption: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    topic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("Animals")
});
const quizResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    questionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    questionContent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    selectedOption: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    correctOption: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isCorrect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    answeredAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    topic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[project]/src/modules/quiz/services/data/questions.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"Q001","content":"What is the largest mammal on Earth?","option1":"Elephant","option2":"Blue Whale","option3":"Giraffe","option4":"Hippopotamus","correctOption":"Blue Whale","topic":"Animals"},{"id":"Q002","content":"Which animal is known as the 'King of the Jungle'?","option1":"Tiger","option2":"Lion","option3":"Leopard","option4":"Cheetah","correctOption":"Lion","topic":"Animals"},{"id":"Q003","content":"How many legs does a spider have?","option1":"6","option2":"8","option3":"10","option4":"4","correctOption":"8","topic":"Animals"},{"id":"Q004","content":"What is the fastest land animal?","option1":"Lion","option2":"Cheetah","option3":"Horse","option4":"Greyhound","correctOption":"Cheetah","topic":"Animals"},{"id":"Q005","content":"Which bird is known for its ability to mimic human speech?","option1":"Crow","option2":"Sparrow","option3":"Parrot","option4":"Pigeon","correctOption":"Parrot","topic":"Animals"},{"id":"Q006","content":"What animal has a long trunk and large ears?","option1":"Rhinoceros","option2":"Hippopotamus","option3":"Elephant","option4":"Wild Boar","correctOption":"Elephant","topic":"Animals"},{"id":"Q007","content":"Which sea creature has eight arms called tentacles?","option1":"Jellyfish","option2":"Starfish","option3":"Squid","option4":"Octopus","correctOption":"Octopus","topic":"Animals"},{"id":"Q008","content":"What is the tallest living animal on land?","option1":"Elephant","option2":"Camel","option3":"Giraffe","option4":"Ostrich","correctOption":"Giraffe","topic":"Animals"},{"id":"Q009","content":"Which animal sleeps standing up and can run shortly after birth?","option1":"Cow","option2":"Sheep","option3":"Horse","option4":"Donkey","correctOption":"Horse","topic":"Animals"},{"id":"Q010","content":"What is a baby dog called?","option1":"Cub","option2":"Pup","option3":"Calf","option4":"Foal","correctOption":"Pup","topic":"Animals"}]);}),
"[project]/src/modules/quiz/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedQuizMockData",
    ()=>seedQuizMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$types$2f$quiz$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/quiz/services/types/quiz-types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$data$2f$questions$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/quiz/services/data/questions.json (json)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const questionMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$types$2f$quiz$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["questionSchema"].array().parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$data$2f$questions$2e$json__$28$json$29$__["default"]);
function seedQuizMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("quiz", [
        {
            collectionName: "questions",
            documents: questionMockData,
            getDocumentId: (_, index)=>questionMockData[index]?.id ?? `Q${String(index + 1).padStart(3, "0")}`
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/projects/services/types/project-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeProject",
    ()=>normalizeProject,
    "priorities",
    ()=>priorities,
    "projectSchema",
    ()=>projectSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const priorities = [
    {
        label: "Low",
        value: "low"
    },
    {
        label: "Medium",
        value: "medium"
    },
    {
        label: "High",
        value: "high"
    },
    {
        label: "Critical",
        value: "critical"
    }
];
const projectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Title is required").max(100, "Title must be at most 100 characters"),
    priority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "low",
        "medium",
        "high",
        "critical"
    ]).default("medium"),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function normalizeProject(project) {
    return projectSchema.parse({
        ...project,
        priority: project.priority ?? "medium"
    });
}
}),
"[project]/src/modules/projects/services/data/projects.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"PROJ-1001","title":"Xây dựng hệ thống quản lý nhân sự","priority":"high","startDate":"2026-01-15","dueDate":"2026-06-30"},{"id":"PROJ-1002","title":"Phát triển ứng dụng thương mại điện tử","priority":"critical","startDate":"2026-02-01","dueDate":"2026-08-15"},{"id":"PROJ-1003","title":"Triển khai hạ tầng cloud infrastructure","priority":"medium","startDate":"2026-03-10","dueDate":"2026-05-20"},{"id":"PROJ-1004","title":"Thiết kế giao diện người dùng dashboard","priority":"low","startDate":"2026-04-01","dueDate":"2026-04-30"},{"id":"PROJ-1005","title":"Tích hợp hệ thống thanh toán trực tuyến","priority":"high","startDate":"2026-05-01","dueDate":"2026-07-15"}]);}),
"[project]/src/modules/projects/services/project-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectMockData",
    ()=>projectMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$types$2f$project$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/projects/services/types/project-types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$data$2f$projects$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/projects/services/data/projects.json (json)");
;
;
const projectMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$types$2f$project$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectSchema"].array().parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$data$2f$projects$2e$json__$28$json$29$__["default"]);
}),
"[project]/src/modules/projects/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedProjectsMockData",
    ()=>seedProjectsMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$project$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/projects/services/project-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedProjectsMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("projects", [
        {
            collectionName: "projects",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$project$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectMockData"]
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/settings/services/data/billing/billing-history.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"month":"December 2024","plan":"Professional Plan","amount":"$79.00","status":"Paid"},{"id":2,"month":"November 2024","plan":"Professional Plan","amount":"$79.00","status":"Paid"},{"id":3,"month":"October 2024","plan":"Professional Plan","amount":"$79.00","status":"Paid"}]);}),
"[project]/src/modules/settings/services/data/billing/current-plan.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"planName":"Professional Plan","price":"$79/month","nextBilling":"Aug 15, 2025","status":"Current","daysUsed":18,"totalDays":30,"progressPercentage":60,"remainingDays":12,"needsAttention":true,"attentionMessage":"Your plan requires update"});}),
"[project]/src/modules/settings/services/settings-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "settingsMockData",
    ()=>settingsMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$data$2f$billing$2f$billing$2d$history$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/settings/services/data/billing/billing-history.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$data$2f$billing$2f$current$2d$plan$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/settings/services/data/billing/current-plan.json (json)");
;
;
const settingsMockData = {
    currentPlan: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$data$2f$billing$2f$current$2d$plan$2e$json__$28$json$29$__["default"],
    billingHistory: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$data$2f$billing$2f$billing$2d$history$2e$json__$28$json$29$__["default"]
};
}),
"[project]/src/modules/settings/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedSettingsMockData",
    ()=>seedSettingsMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$settings$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/settings/services/settings-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedSettingsMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("settings", [
        {
            collectionName: "currentPlans",
            documents: [
                {
                    id: "professional",
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$settings$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["settingsMockData"].currentPlan
                }
            ]
        },
        {
            collectionName: "billingHistories",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$settings$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["settingsMockData"].billingHistory
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/tasks/services/data/tasks.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"TASK-1001\",\"title\":\"Implement user authentication with OAuth 2.0 providers\",\"priority\":\"high\",\"status\":\"done\",\"assignee\":\"user-001\",\"dueDate\":\"2026-06-01\",\"description\":\"Integrate OAuth 2.0 authentication with Google, GitHub, and Microsoft providers\",\"tags\":[\"backend\",\"security\"],\"createdAt\":\"2026-04-01T08:00:00Z\",\"updatedAt\":\"2026-05-10T14:30:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1002\",\"title\":\"Fix memory leak in dashboard component causing browser slowdown\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-20\",\"description\":\"Investigate and fix memory leak in dashboard components\",\"tags\":[\"Bug\"],\"createdAt\":\"2026-04-15T09:00:00Z\",\"updatedAt\":\"2026-05-14T11:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1003\",\"title\":\"Update API documentation for v2 endpoints\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-003\",\"dueDate\":\"2026-06-15\",\"description\":\"Document all v2 API endpoints with request/response examples\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-04-20T10:00:00Z\",\"updatedAt\":\"2026-04-20T10:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1004\",\"title\":\"Add dark mode support for all UI components\",\"priority\":\"high\",\"status\":\"done\",\"assignee\":\"user-001\",\"dueDate\":\"2026-05-01\",\"description\":\"Implement dark mode toggle with system preference detection\",\"tags\":[\"ui\",\"Feature\"],\"createdAt\":\"2026-03-10T08:30:00Z\",\"updatedAt\":\"2026-04-30T16:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1005\",\"title\":\"Resolve login page not redirecting after successful authentication\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-18\",\"description\":\"Fix redirect logic after successful OAuth and email/password login\",\"tags\":[\"Bug\",\"backend\"],\"createdAt\":\"2026-05-05T11:00:00Z\",\"updatedAt\":\"2026-05-13T09:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1006\",\"title\":\"Create onboarding tutorial for new users\",\"priority\":\"low\",\"status\":\"todo\",\"assignee\":\"user-004\",\"dueDate\":\"2026-07-01\",\"description\":\"Design and implement interactive onboarding flow for new users\",\"tags\":[\"Feature\",\"ui\"],\"createdAt\":\"2026-04-25T14:00:00Z\",\"updatedAt\":\"2026-04-25T14:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1007\",\"title\":\"Optimize database queries for user dashboard\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-10\",\"description\":\"Profile and optimize slow queries on the dashboard page\",\"tags\":[\"performance\",\"backend\"],\"createdAt\":\"2026-04-28T09:30:00Z\",\"updatedAt\":\"2026-04-28T09:30:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1008\",\"title\":\"Refactor notification service for better maintainability\",\"priority\":\"low\",\"status\":\"todo\",\"assignee\":\"user-001\",\"dueDate\":\"2026-07-15\",\"description\":\"Clean up notification service architecture and add unit tests\",\"tags\":[\"refactor\"],\"createdAt\":\"2026-05-01T10:00:00Z\",\"updatedAt\":\"2026-05-01T10:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1009\",\"title\":\"Fix broken image upload on mobile devices\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-22\",\"description\":\"Image upload fails on iOS Safari and Android Chrome browsers\",\"tags\":[\"Bug\",\"ui\"],\"createdAt\":\"2026-05-08T13:00:00Z\",\"updatedAt\":\"2026-05-12T15:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1010\",\"title\":\"Implement real-time notifications using WebSockets\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-20\",\"description\":\"Replace polling with WebSocket-based real-time notifications\",\"tags\":[\"Feature\",\"backend\",\"performance\"],\"createdAt\":\"2026-05-03T09:00:00Z\",\"updatedAt\":\"2026-05-03T09:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1011\",\"title\":\"Write unit tests for payment processing module\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-003\",\"dueDate\":\"2026-06-05\",\"description\":\"Cover all payment processing scenarios with unit and integration tests\",\"tags\":[\"testing\",\"security\"],\"createdAt\":\"2026-05-06T11:30:00Z\",\"updatedAt\":\"2026-05-06T11:30:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1012\",\"title\":\"Update README with installation instructions\",\"priority\":\"low\",\"status\":\"done\",\"assignee\":\"user-004\",\"dueDate\":\"2026-04-20\",\"description\":\"Add step-by-step installation and setup instructions to README\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-04-01T10:00:00Z\",\"updatedAt\":\"2026-04-18T14:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1013\",\"title\":\"Design and implement user profile settings page\",\"priority\":\"medium\",\"status\":\"in_progress\",\"assignee\":\"user-004\",\"dueDate\":\"2026-05-28\",\"description\":\"Create profile settings page with avatar, name, email, and preferences\",\"tags\":[\"Feature\",\"ui\"],\"createdAt\":\"2026-05-02T09:00:00Z\",\"updatedAt\":\"2026-05-14T10:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1014\",\"title\":\"Fix timezone conversion issues in calendar view\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-05-25\",\"description\":\"Events display in wrong timezone when user is in different timezones\",\"tags\":[\"Bug\",\"backend\"],\"createdAt\":\"2026-05-07T14:00:00Z\",\"updatedAt\":\"2026-05-07T14:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1015\",\"title\":\"Refactor legacy authentication code to use new security standards\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-001\",\"dueDate\":\"2026-06-30\",\"description\":\"Migrate legacy auth code to comply with latest OWASP recommendations\",\"tags\":[\"refactor\",\"security\"],\"createdAt\":\"2026-05-10T08:00:00Z\",\"updatedAt\":\"2026-05-10T08:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1016\",\"title\":\"Add export functionality for analytics reports\",\"priority\":\"medium\",\"status\":\"done\",\"assignee\":\"user-003\",\"dueDate\":\"2026-04-30\",\"description\":\"Export analytics reports to CSV and PDF formats\",\"tags\":[\"Feature\"],\"createdAt\":\"2026-04-05T11:00:00Z\",\"updatedAt\":\"2026-04-28T16:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1017\",\"title\":\"Create API rate limiting documentation\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-003\",\"dueDate\":\"2026-06-12\",\"description\":\"Document rate limiting rules, limits, and error responses\",\"tags\":[\"documentation\",\"backend\"],\"createdAt\":\"2026-05-09T10:30:00Z\",\"updatedAt\":\"2026-05-09T10:30:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1018\",\"title\":\"Resolve CSS styling conflicts in sidebar navigation\",\"priority\":\"low\",\"status\":\"done\",\"assignee\":\"user-004\",\"dueDate\":\"2026-04-15\",\"description\":\"Fix sidebar menu items being overridden by global styles\",\"tags\":[\"Bug\",\"ui\"],\"createdAt\":\"2026-04-10T09:00:00Z\",\"updatedAt\":\"2026-04-14T11:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1019\",\"title\":\"Implement lazy loading for dashboard widgets\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-005\",\"dueDate\":\"2026-05-30\",\"description\":\"Lazy load non-critical dashboard widgets to improve initial page load\",\"tags\":[\"performance\",\"ui\"],\"createdAt\":\"2026-05-04T09:00:00Z\",\"updatedAt\":\"2026-05-13T14:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1020\",\"title\":\"Add multi-language support for user interface\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-004\",\"dueDate\":\"2026-07-10\",\"description\":\"Implement i18n support with Vietnamese and English translations\",\"tags\":[\"Feature\",\"ui\"],\"createdAt\":\"2026-05-11T10:00:00Z\",\"updatedAt\":\"2026-05-11T10:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1021\",\"title\":\"Fix form validation errors not displaying correctly\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-21\",\"description\":\"Validation error messages disappear or overlap with input fields\",\"tags\":[\"Bug\",\"ui\"],\"createdAt\":\"2026-05-08T15:00:00Z\",\"updatedAt\":\"2026-05-08T15:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1022\",\"title\":\"Write migration guide from v1 to v2\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-003\",\"dueDate\":\"2026-06-08\",\"description\":\"Create comprehensive migration guide for existing v1 users\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-05-05T10:00:00Z\",\"updatedAt\":\"2026-05-05T10:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1023\",\"title\":\"Refactor data fetching hooks for better reusability\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-25\",\"description\":\"Extract common data fetching logic into reusable custom hooks\",\"tags\":[\"refactor\"],\"createdAt\":\"2026-05-12T09:00:00Z\",\"updatedAt\":\"2026-05-12T09:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1024\",\"title\":\"Implement file drag and drop upload feature\",\"priority\":\"medium\",\"status\":\"done\",\"assignee\":\"user-001\",\"dueDate\":\"2026-04-25\",\"description\":\"Add drag and drop file upload with progress indicator\",\"tags\":[\"Feature\",\"ui\"],\"createdAt\":\"2026-04-01T10:00:00Z\",\"updatedAt\":\"2026-04-24T15:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1025\",\"title\":\"Fix search functionality returning incorrect results\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-17\",\"description\":\"Search queries return incomplete or irrelevant results\",\"tags\":[\"Bug\",\"backend\"],\"createdAt\":\"2026-05-06T14:00:00Z\",\"updatedAt\":\"2026-05-14T09:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1026\",\"title\":\"Improve error handling across all API endpoints\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-18\",\"description\":\"Standardize error responses and add proper error logging\",\"tags\":[\"improvement\",\"backend\"],\"createdAt\":\"2026-05-10T11:00:00Z\",\"updatedAt\":\"2026-05-10T11:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1027\",\"title\":\"Add keyboard shortcuts documentation\",\"priority\":\"low\",\"status\":\"done\",\"assignee\":\"user-003\",\"dueDate\":\"2026-04-10\",\"description\":\"Document all available keyboard shortcuts in the application\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-04-01T10:00:00Z\",\"updatedAt\":\"2026-04-09T14:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1028\",\"title\":\"Implement two-factor authentication option\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-001\",\"dueDate\":\"2026-07-05\",\"description\":\"Add 2FA with TOTP authenticator apps and SMS backup\",\"tags\":[\"Feature\",\"security\"],\"createdAt\":\"2026-05-13T09:00:00Z\",\"updatedAt\":\"2026-05-13T09:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1029\",\"title\":\"Resolve session timeout not working properly\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-23\",\"description\":\"Sessions do not expire after the configured timeout period\",\"tags\":[\"Bug\",\"security\"],\"createdAt\":\"2026-05-09T13:00:00Z\",\"updatedAt\":\"2026-05-09T13:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1030\",\"title\":\"Refactor component library for better tree shaking\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-28\",\"description\":\"Enable tree shaking for component library to reduce bundle size\",\"tags\":[\"refactor\",\"performance\"],\"createdAt\":\"2026-05-11T10:00:00Z\",\"updatedAt\":\"2026-05-11T10:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1031\",\"title\":\"Add accessibility improvements for screen readers\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-004\",\"dueDate\":\"2026-06-03\",\"description\":\"Improve ARIA labels and keyboard navigation across the app\",\"tags\":[\"improvement\",\"ui\"],\"createdAt\":\"2026-04-20T09:00:00Z\",\"updatedAt\":\"2026-05-12T11:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1032\",\"title\":\"Create troubleshooting guide for common issues\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-003\",\"dueDate\":\"2026-06-22\",\"description\":\"Compile FAQ and troubleshooting steps for frequently reported issues\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-05-12T14:00:00Z\",\"updatedAt\":\"2026-05-12T14:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1033\",\"title\":\"Implement bulk action operations for data tables\",\"priority\":\"medium\",\"status\":\"done\",\"assignee\":\"user-001\",\"dueDate\":\"2026-04-28\",\"description\":\"Add bulk edit, delete, and status update for table rows\",\"tags\":[\"Feature\"],\"createdAt\":\"2026-04-05T10:00:00Z\",\"updatedAt\":\"2026-04-27T16:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1034\",\"title\":\"Fix notification badge count not updating in real-time\",\"priority\":\"medium\",\"status\":\"in_progress\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-24\",\"description\":\"Notification count badge stale after receiving new notifications\",\"tags\":[\"Bug\"],\"createdAt\":\"2026-05-07T10:00:00Z\",\"updatedAt\":\"2026-05-13T15:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1035\",\"title\":\"Optimize image compression for faster page loads\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-14\",\"description\":\"Implement responsive image sizes and WebP format support\",\"tags\":[\"performance\"],\"createdAt\":\"2026-05-10T09:00:00Z\",\"updatedAt\":\"2026-05-10T09:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1036\",\"title\":\"Add SSO integration for enterprise customers\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-001\",\"dueDate\":\"2026-07-20\",\"description\":\"Integrate SAML-based SSO for enterprise clients\",\"tags\":[\"Feature\",\"security\",\"backend\"],\"createdAt\":\"2026-05-14T10:00:00Z\",\"updatedAt\":\"2026-05-14T10:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1037\",\"title\":\"Document component props and usage examples\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-004\",\"dueDate\":\"2026-05-26\",\"description\":\"Write Storybook stories and JSDoc comments for all UI components\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-05-05T09:00:00Z\",\"updatedAt\":\"2026-05-13T10:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1038\",\"title\":\"Fix data export generating corrupted files\",\"priority\":\"high\",\"status\":\"done\",\"assignee\":\"user-002\",\"dueDate\":\"2026-04-18\",\"description\":\"CSV and PDF exports contain garbled characters and missing data\",\"tags\":[\"Bug\"],\"createdAt\":\"2026-04-12T11:00:00Z\",\"updatedAt\":\"2026-04-17T14:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1039\",\"title\":\"Refactor state management to use Zustand\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-07\",\"description\":\"Migrate from Context API to Zustand for global state management\",\"tags\":[\"refactor\",\"performance\"],\"createdAt\":\"2026-05-08T09:00:00Z\",\"updatedAt\":\"2026-05-08T09:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1040\",\"title\":\"Implement custom dashboard layout builder\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-004\",\"dueDate\":\"2026-07-01\",\"description\":\"Allow users to drag and drop widgets to customize dashboard\",\"tags\":[\"Feature\",\"ui\"],\"createdAt\":\"2026-05-11T11:00:00Z\",\"updatedAt\":\"2026-05-11T11:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1041\",\"title\":\"Add performance monitoring and alerting\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-16\",\"description\":\"Integrate performance monitoring tools and set up alerts for slow requests\",\"tags\":[\"performance\",\"improvement\"],\"createdAt\":\"2026-05-12T09:00:00Z\",\"updatedAt\":\"2026-05-12T09:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1042\",\"title\":\"Fix dropdown menu not closing on outside click\",\"priority\":\"low\",\"status\":\"done\",\"assignee\":\"user-002\",\"dueDate\":\"2026-04-05\",\"description\":\"Dropdown menus remain open after clicking outside\",\"tags\":[\"Bug\",\"ui\"],\"createdAt\":\"2026-04-01T10:00:00Z\",\"updatedAt\":\"2026-04-04T11:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1043\",\"title\":\"Create video tutorials for key features\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-004\",\"dueDate\":\"2026-07-08\",\"description\":\"Produce and embed video tutorials for onboarding and key features\",\"tags\":[\"documentation\"],\"createdAt\":\"2026-05-13T10:00:00Z\",\"updatedAt\":\"2026-05-13T10:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1044\",\"title\":\"Implement advanced search filters\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-003\",\"dueDate\":\"2026-05-29\",\"description\":\"Add multi-field filtering, date ranges, and saved filter presets\",\"tags\":[\"Feature\",\"backend\"],\"createdAt\":\"2026-05-03T10:00:00Z\",\"updatedAt\":\"2026-05-14T11:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1045\",\"title\":\"Refactor API client for better error recovery\",\"priority\":\"medium\",\"status\":\"todo\",\"assignee\":\"user-005\",\"dueDate\":\"2026-06-21\",\"description\":\"Implement retry logic, circuit breaker, and graceful degradation\",\"tags\":[\"refactor\",\"backend\"],\"createdAt\":\"2026-05-12T10:00:00Z\",\"updatedAt\":\"2026-05-12T10:00:00Z\",\"createdBy\":\"user-005\",\"reporter\":\"user-005\"},{\"id\":\"TASK-1046\",\"title\":\"Fix chart rendering issues on Safari browser\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-19\",\"description\":\"Charts fail to render or display incorrect data on Safari\",\"tags\":[\"Bug\",\"ui\"],\"createdAt\":\"2026-05-06T13:00:00Z\",\"updatedAt\":\"2026-05-06T13:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-001\"},{\"id\":\"TASK-1047\",\"title\":\"Add automated backup functionality\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-001\",\"dueDate\":\"2026-07-12\",\"description\":\"Schedule automatic daily backups of Firestore and user uploads\",\"tags\":[\"Feature\",\"security\"],\"createdAt\":\"2026-05-14T09:00:00Z\",\"updatedAt\":\"2026-05-14T09:00:00Z\",\"createdBy\":\"user-001\",\"reporter\":\"user-002\"},{\"id\":\"TASK-1048\",\"title\":\"Improve loading states across the application\",\"priority\":\"medium\",\"status\":\"done\",\"assignee\":\"user-004\",\"dueDate\":\"2026-04-22\",\"description\":\"Add skeleton loaders and progress indicators for async operations\",\"tags\":[\"improvement\",\"ui\"],\"createdAt\":\"2026-04-08T10:00:00Z\",\"updatedAt\":\"2026-04-21T15:00:00Z\",\"createdBy\":\"user-004\",\"reporter\":\"user-003\"},{\"id\":\"TASK-1049\",\"title\":\"Write integration tests for checkout flow\",\"priority\":\"high\",\"status\":\"in_progress\",\"assignee\":\"user-003\",\"dueDate\":\"2026-06-02\",\"description\":\"End-to-end integration tests for complete checkout process\",\"tags\":[\"testing\",\"security\"],\"createdAt\":\"2026-05-07T09:00:00Z\",\"updatedAt\":\"2026-05-14T10:00:00Z\",\"createdBy\":\"user-003\",\"reporter\":\"user-004\"},{\"id\":\"TASK-1050\",\"title\":\"Fix email notifications being marked as spam\",\"priority\":\"high\",\"status\":\"todo\",\"assignee\":\"user-002\",\"dueDate\":\"2026-05-27\",\"description\":\"Configure SPF, DKIM, and DMARC records to improve email deliverability\",\"tags\":[\"Bug\",\"backend\"],\"createdAt\":\"2026-05-09T10:00:00Z\",\"updatedAt\":\"2026-05-09T10:00:00Z\",\"createdBy\":\"user-002\",\"reporter\":\"user-005\"}]"));}),
"[project]/src/modules/tasks/services/types/task-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachmentSchema",
    ()=>attachmentSchema,
    "priorityEnum",
    ()=>priorityEnum,
    "statusEnum",
    ()=>statusEnum,
    "tagEnum",
    ()=>tagEnum,
    "taskSchema",
    ()=>taskSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const priorityEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "low",
    "medium",
    "high"
]);
const statusEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "todo",
    "in_progress",
    "done"
]);
const tagEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "Bug",
    "Feature",
    "improvement",
    "ui",
    "documentation",
    "backend",
    "testing",
    "refactor",
    "performance",
    "security"
]);
const taskSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200, "Tiêu đề tối đa 200 ký tự"),
    priority: priorityEnum,
    status: statusEnum,
    assignee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    dueDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(tagEnum).optional(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    createdBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    reporter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const attachmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    fileUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    fileType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    uploadedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    uploadedBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[project]/src/modules/tasks/services/task-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "priorities",
    ()=>priorities,
    "statuses",
    ()=>statuses,
    "tags",
    ()=>tags,
    "taskMockData",
    ()=>taskMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-rsc] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-rsc] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-rsc] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$data$2f$tasks$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/tasks/services/data/tasks.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$types$2f$task$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/tasks/services/types/task-types.ts [app-rsc] (ecmascript)");
;
;
;
const priorities = [
    {
        label: "Thấp",
        value: "low",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"]
    },
    {
        label: "Trung bình",
        value: "medium",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"]
    },
    {
        label: "Cao",
        value: "high",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"]
    }
];
const statuses = [
    {
        value: "todo",
        label: "To Do",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    },
    {
        value: "in_progress",
        label: "In Progress",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"]
    },
    {
        value: "done",
        label: "Done",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"]
    }
];
const tags = [
    {
        value: "Bug",
        label: "Bug"
    },
    {
        value: "Feature",
        label: "Feature"
    },
    {
        value: "improvement",
        label: "Improvement"
    },
    {
        value: "ui",
        label: "UI"
    },
    {
        value: "documentation",
        label: "Documentation"
    },
    {
        value: "backend",
        label: "Backend"
    },
    {
        value: "testing",
        label: "Testing"
    },
    {
        value: "refactor",
        label: "Refactor"
    },
    {
        value: "performance",
        label: "Performance"
    },
    {
        value: "security",
        label: "Security"
    }
];
const taskMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$types$2f$task$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taskSchema"].array().parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$data$2f$tasks$2e$json__$28$json$29$__["default"]);
}),
"[project]/src/modules/tasks/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedTasksMockData",
    ()=>seedTasksMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$task$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/tasks/services/task-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedTasksMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("tasks", [
        {
            collectionName: "tasks",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$task$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["taskMockData"]
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/users/services/data/users.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"name":"Sarah Johnson","email":"sarah.johnson@example.com","avatar":"SJ","role":"Admin","plan":"Enterprise","billing":"UPI","status":"Active","joinedDate":"2024-01-15","lastLogin":"2024-08-12"},{"id":2,"name":"Michael Chen","email":"michael.chen@example.com","avatar":"MC","role":"Editor","plan":"Professional","billing":"Auto Debit","status":"Active","joinedDate":"2024-02-20","lastLogin":"2024-08-13"},{"id":3,"name":"Emily Rodriguez","email":"emily.rodriguez@example.com","avatar":"ER","role":"Author","plan":"Basic","billing":"Paypal","status":"Pending","joinedDate":"2024-03-10","lastLogin":"2024-08-10"},{"id":4,"name":"David Thompson","email":"david.thompson@example.com","avatar":"DT","role":"Maintainer","plan":"Enterprise","billing":"Auto Debit","status":"Active","joinedDate":"2024-01-25","lastLogin":"2024-08-13"},{"id":5,"name":"Jessica Parker","email":"jessica.parker@example.com","avatar":"JP","role":"Subscriber","plan":"Basic","billing":"UPI","status":"Inactive","joinedDate":"2024-04-05","lastLogin":"2024-07-20"},{"id":6,"name":"Robert Wilson","email":"robert.wilson@example.com","avatar":"RW","role":"Admin","plan":"Professional","billing":"Auto Debit","status":"Active","joinedDate":"2024-02-14","lastLogin":"2024-08-12"},{"id":7,"name":"Amanda Foster","email":"amanda.foster@example.com","avatar":"AF","role":"Author","plan":"Professional","billing":"Paypal","status":"Error","joinedDate":"2024-03-22","lastLogin":"2024-08-08"},{"id":8,"name":"Christopher Lee","email":"christopher.lee@example.com","avatar":"CL","role":"Editor","plan":"Enterprise","billing":"Auto Debit","status":"Active","joinedDate":"2024-01-30","lastLogin":"2024-08-13"},{"id":9,"name":"Lisa Martinez","email":"lisa.martinez@example.com","avatar":"LM","role":"Maintainer","plan":"Basic","billing":"UPI","status":"Pending","joinedDate":"2024-04-18","lastLogin":"2024-08-11"},{"id":10,"name":"James Anderson","email":"james.anderson@example.com","avatar":"JA","role":"Subscriber","plan":"Professional","billing":"Auto Debit","status":"Active","joinedDate":"2024-02-28","lastLogin":"2024-08-12"},{"id":11,"name":"Maria Garcia","email":"maria.garcia@example.com","avatar":"MG","role":"Editor","plan":"Enterprise","billing":"Paypal","status":"Active","joinedDate":"2024-03-15","lastLogin":"2024-08-13"},{"id":12,"name":"Kevin Taylor","email":"kevin.taylor@example.com","avatar":"KT","role":"Author","plan":"Basic","billing":"Auto Debit","status":"Inactive","joinedDate":"2024-04-12","lastLogin":"2024-07-25"},{"id":13,"name":"Rachel Brown","email":"rachel.brown@example.com","avatar":"RB","role":"Admin","plan":"Enterprise","billing":"UPI","status":"Active","joinedDate":"2024-01-08","lastLogin":"2024-08-13"},{"id":14,"name":"Daniel Kim","email":"daniel.kim@example.com","avatar":"DK","role":"Maintainer","plan":"Professional","billing":"Auto Debit","status":"Pending","joinedDate":"2024-03-28","lastLogin":"2024-08-09"},{"id":15,"name":"Ashley White","email":"ashley.white@example.com","avatar":"AW","role":"Subscriber","plan":"Basic","billing":"Paypal","status":"Error","joinedDate":"2024-04-22","lastLogin":"2024-08-05"}]);}),
"[project]/src/modules/users/services/user-mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userMockData",
    ()=>userMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$data$2f$users$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/modules/users/services/data/users.json (json)");
;
const userMockData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$data$2f$users$2e$json__$28$json$29$__["default"];
}),
"[project]/src/modules/users/services/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedUsersMockData",
    ()=>seedUsersMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/mock-data-seeder.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$user$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/users/services/user-mock-data.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function seedUsersMockData() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$mock$2d$data$2d$seeder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMockDataCollections"])("users", [
        {
            collectionName: "users",
            documents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$user$2d$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userMockData"]
        }
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/modules/mock-data-services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "mockDataFeatures",
    ()=>mockDataFeatures,
    "seedFeatureMockData",
    ()=>seedFeatureMockData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/calendar/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/customer-care/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard/services/revenue-mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard-2/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/dashboard-3/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/faqs/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/pricing/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/quiz/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/projects/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/settings/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/tasks/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/users/services/mock-data-services.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const mockDataFeatures = [
    {
        id: "tasks",
        label: "Tasks",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$tasks$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedTasksMockData"]
    },
    {
        id: "users",
        label: "Users",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$users$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedUsersMockData"]
    },
    {
        id: "chat",
        label: "Chat",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedChatMockData"]
    },
    {
        id: "calendar",
        label: "Calendar",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$calendar$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedCalendarMockData"]
    },
    {
        id: "customer-care",
        label: "Customer Care",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$customer$2d$care$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedCustomerCareMockData"]
    },
    {
        id: "mail",
        label: "Mail",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedMailMockData"]
    },
    {
        id: "dashboard",
        label: "Dashboard",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedDashboardMockData"]
    },
    {
        id: "revenues",
        label: "Revenues",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2f$services$2f$revenue$2d$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedRevenuesMockData"]
    },
    {
        id: "dashboard-2",
        label: "Dashboard 2",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$2$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedDashboard2MockData"]
    },
    {
        id: "dashboard-3",
        label: "Dashboard 3",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$dashboard$2d$3$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedDashboard3MockData"]
    },
    {
        id: "faqs",
        label: "FAQs",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$faqs$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFaqsMockData"]
    },
    {
        id: "pricing",
        label: "Pricing",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$pricing$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedPricingMockData"]
    },
    {
        id: "quiz",
        label: "Quiz",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$quiz$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedQuizMockData"]
    },
    {
        id: "settings",
        label: "Settings",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$settings$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedSettingsMockData"]
    },
    {
        id: "projects",
        label: "Projects",
        seed: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$projects$2f$services$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedProjectsMockData"]
    }
];
async function seedFeatureMockData(featureId) {
    if (featureId === "all") {
        return Promise.all(mockDataFeatures.map((feature)=>feature.seed()));
    }
    const feature = mockDataFeatures.find((item)=>item.id === featureId);
    if (!feature) {
        throw new Error(`Unknown mock data feature: ${featureId}`);
    }
    return [
        await feature.seed()
    ];
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(dashboard)/mock-data/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "default",
    ()=>MockDataPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4072b1f1b2b367314f1296f6ce8da040264f5fc3a5":"$$RSC_SERVER_ACTION_0"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-rsc] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-rsc] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mock-data-services.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const $$RSC_SERVER_ACTION_0 = async function seedMockDataAction(formData) {
    const feature = String(formData.get("feature") ?? "");
    let redirectTo = "/mock-data";
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFeatureMockData"])(feature);
        redirectTo = `/mock-data?seeded=${encodeURIComponent(feature)}`;
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown seed error";
        redirectTo = `/mock-data?error=${encodeURIComponent(message)}`;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(redirectTo);
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "4072b1f1b2b367314f1296f6ce8da040264f5fc3a5", null);
var seedMockDataAction = $$RSC_SERVER_ACTION_0;
async function MockDataPage({ searchParams }) {
    const params = await searchParams;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 px-4 lg:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight",
                                children: "Mock Data"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Seed local module mock data to Firestore collections."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: seedMockDataAction,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "feature",
                                value: "all"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                className: "cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    "Seed All"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            params.seeded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "text-sm text-green-700 dark:text-green-300",
                    children: [
                        "Seed completed for ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: params.seeded
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                            lineNumber: 71,
                            columnNumber: 32
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            params.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "text-sm text-red-700 dark:text-red-300",
                    children: params.error
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Feature Seeders"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: [
                                    "Collection names use plural nouns, for example ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 60
                                    }, this),
                                    " and",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: "users"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Feature"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                children: "Service"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "text-right",
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mock$2d$data$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockDataFeatures"].map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                                className: "h-4 w-4 text-muted-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: feature.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        children: "mock-data-services.ts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        action: seedMockDataAction,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                name: "feature",
                                                                value: feature.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                size: "sm",
                                                                className: "cursor-pointer",
                                                                children: "Seed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, feature.id, true, {
                                            fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/mock-data/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(dashboard)/mock-data/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(dashboard)/mock-data/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/mock-data/page.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(dashboard)/mock-data/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(dashboard)/mock-data/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "4072b1f1b2b367314f1296f6ce8da040264f5fc3a5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(dashboard)/mock-data/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(dashboard)/mock-data/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(dashboard)/mock-data/page.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$dashboard$292f$mock$2d$data$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_0692046f._.js.map