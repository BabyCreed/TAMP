// runtime can't be in strict mode because a global variable is assign and maybe created.
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["instrumentation"],{

/***/ "(instrument)/./src/instrumentation.ts":
/*!********************************!*\
  !*** ./src/instrumentation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n// Next.js runs this once when the server process boots. We use it to start the\n// in-process background worker (match expiry, webhook delivery, GC).\n//\n// The `process.env.NEXT_RUNTIME` check MUST use dot access: webpack's\n// DefinePlugin inlines that exact form per target build, so the dynamic import\n// of the Node-only scheduler is tree-shaken out of the edge bundle. Bracket\n// access (process.env[\"NEXT_RUNTIME\"]) is NOT inlined, which would drag\n// node:crypto / node:fs into the edge compile and fail the build.\nasync function register() {\n    // @ts-expect-error tsconfig's noPropertyAccessFromIndexSignature vs. DefinePlugin\n    if (false) {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vc3JjL2luc3RydW1lbnRhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0VBQStFO0FBQy9FLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysc0VBQXNFO0FBQ3RFLCtFQUErRTtBQUMvRSw0RUFBNEU7QUFDNUUsd0VBQXdFO0FBQ3hFLGtFQUFrRTtBQUMzRCxlQUFlQTtJQUNwQixrRkFBa0Y7SUFDbEYsSUFBSUMsS0FBcUMsRUFBRSxFQUkxQztBQUNIIiwic291cmNlcyI6WyIvVXNlcnMvbW9nYXVzZXNoaWJlL0RvY3VtZW50cy9Xb3Jrc3BhY2UvVEFNUC9zcmMvaW5zdHJ1bWVudGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgcnVucyB0aGlzIG9uY2Ugd2hlbiB0aGUgc2VydmVyIHByb2Nlc3MgYm9vdHMuIFdlIHVzZSBpdCB0byBzdGFydCB0aGVcbi8vIGluLXByb2Nlc3MgYmFja2dyb3VuZCB3b3JrZXIgKG1hdGNoIGV4cGlyeSwgd2ViaG9vayBkZWxpdmVyeSwgR0MpLlxuLy9cbi8vIFRoZSBgcHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FYCBjaGVjayBNVVNUIHVzZSBkb3QgYWNjZXNzOiB3ZWJwYWNrJ3Ncbi8vIERlZmluZVBsdWdpbiBpbmxpbmVzIHRoYXQgZXhhY3QgZm9ybSBwZXIgdGFyZ2V0IGJ1aWxkLCBzbyB0aGUgZHluYW1pYyBpbXBvcnRcbi8vIG9mIHRoZSBOb2RlLW9ubHkgc2NoZWR1bGVyIGlzIHRyZWUtc2hha2VuIG91dCBvZiB0aGUgZWRnZSBidW5kbGUuIEJyYWNrZXRcbi8vIGFjY2VzcyAocHJvY2Vzcy5lbnZbXCJORVhUX1JVTlRJTUVcIl0pIGlzIE5PVCBpbmxpbmVkLCB3aGljaCB3b3VsZCBkcmFnXG4vLyBub2RlOmNyeXB0byAvIG5vZGU6ZnMgaW50byB0aGUgZWRnZSBjb21waWxlIGFuZCBmYWlsIHRoZSBidWlsZC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciB0c2NvbmZpZydzIG5vUHJvcGVydHlBY2Nlc3NGcm9tSW5kZXhTaWduYXR1cmUgdnMuIERlZmluZVBsdWdpblxuICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FID09PSBcIm5vZGVqc1wiKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52W1wiVEFNUF9ESVNBQkxFX1NDSEVEVUxFUlwiXSA9PT0gXCIxXCIpIHJldHVybjtcbiAgICBjb25zdCB7IHN0YXJ0U2NoZWR1bGVyIH0gPSBhd2FpdCBpbXBvcnQoXCIuL3NlcnZlci9zY2hlZHVsZXJcIik7XG4gICAgc3RhcnRTY2hlZHVsZXIoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUlVOVElNRSIsInN0YXJ0U2NoZWR1bGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./src/instrumentation.ts\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("(instrument)/./src/instrumentation.ts"));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_instrumentation = __webpack_exports__;
/******/ }
]);