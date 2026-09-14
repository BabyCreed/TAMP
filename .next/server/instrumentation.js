"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "(instrument)/./src/instrumentation.ts":
/*!********************************!*\
  !*** ./src/instrumentation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n// Next.js runs this once when the server process boots. We use it to start the\n// in-process background worker (match expiry, webhook delivery, GC).\n//\n// The `process.env.NEXT_RUNTIME` check MUST use dot access: webpack's\n// DefinePlugin inlines that exact form per target build, so the dynamic import\n// of the Node-only scheduler is tree-shaken out of the edge bundle. Bracket\n// access (process.env[\"NEXT_RUNTIME\"]) is NOT inlined, which would drag\n// node:crypto / node:fs into the edge compile and fail the build.\nasync function register() {\n    // @ts-expect-error tsconfig's noPropertyAccessFromIndexSignature vs. DefinePlugin\n    if (true) {\n        if (process.env[\"TAMP_DISABLE_SCHEDULER\"] === \"1\") return;\n        const { startScheduler } = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/@trpc\"), __webpack_require__.e(\"vendor-chunks/superjson\"), __webpack_require__.e(\"vendor-chunks/copy-anything\"), __webpack_require__.e(\"vendor-chunks/zod\"), __webpack_require__.e(\"_instrument_src_server_scheduler_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./server/scheduler */ \"(instrument)/./src/server/scheduler.ts\"));\n        startScheduler();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vc3JjL2luc3RydW1lbnRhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0VBQStFO0FBQy9FLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysc0VBQXNFO0FBQ3RFLCtFQUErRTtBQUMvRSw0RUFBNEU7QUFDNUUsd0VBQXdFO0FBQ3hFLGtFQUFrRTtBQUMzRCxlQUFlQTtJQUNwQixrRkFBa0Y7SUFDbEYsSUFBSUMsSUFBcUMsRUFBRTtRQUN6QyxJQUFJQSxRQUFRQyxHQUFHLENBQUMseUJBQXlCLEtBQUssS0FBSztRQUNuRCxNQUFNLEVBQUVFLGNBQWMsRUFBRSxHQUFHLE1BQU0sb1pBQTRCO1FBQzdEQTtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2dhdXNlc2hpYmUvRG9jdW1lbnRzL1dvcmtzcGFjZS9UQU1QL3NyYy9pbnN0cnVtZW50YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBydW5zIHRoaXMgb25jZSB3aGVuIHRoZSBzZXJ2ZXIgcHJvY2VzcyBib290cy4gV2UgdXNlIGl0IHRvIHN0YXJ0IHRoZVxuLy8gaW4tcHJvY2VzcyBiYWNrZ3JvdW5kIHdvcmtlciAobWF0Y2ggZXhwaXJ5LCB3ZWJob29rIGRlbGl2ZXJ5LCBHQykuXG4vL1xuLy8gVGhlIGBwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUVgIGNoZWNrIE1VU1QgdXNlIGRvdCBhY2Nlc3M6IHdlYnBhY2snc1xuLy8gRGVmaW5lUGx1Z2luIGlubGluZXMgdGhhdCBleGFjdCBmb3JtIHBlciB0YXJnZXQgYnVpbGQsIHNvIHRoZSBkeW5hbWljIGltcG9ydFxuLy8gb2YgdGhlIE5vZGUtb25seSBzY2hlZHVsZXIgaXMgdHJlZS1zaGFrZW4gb3V0IG9mIHRoZSBlZGdlIGJ1bmRsZS4gQnJhY2tldFxuLy8gYWNjZXNzIChwcm9jZXNzLmVudltcIk5FWFRfUlVOVElNRVwiXSkgaXMgTk9UIGlubGluZWQsIHdoaWNoIHdvdWxkIGRyYWdcbi8vIG5vZGU6Y3J5cHRvIC8gbm9kZTpmcyBpbnRvIHRoZSBlZGdlIGNvbXBpbGUgYW5kIGZhaWwgdGhlIGJ1aWxkLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIHRzY29uZmlnJ3Mgbm9Qcm9wZXJ0eUFjY2Vzc0Zyb21JbmRleFNpZ25hdHVyZSB2cy4gRGVmaW5lUGx1Z2luXG4gIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09IFwibm9kZWpzXCIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnZbXCJUQU1QX0RJU0FCTEVfU0NIRURVTEVSXCJdID09PSBcIjFcIikgcmV0dXJuO1xuICAgIGNvbnN0IHsgc3RhcnRTY2hlZHVsZXIgfSA9IGF3YWl0IGltcG9ydChcIi4vc2VydmVyL3NjaGVkdWxlclwiKTtcbiAgICBzdGFydFNjaGVkdWxlcigpO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9SVU5USU1FIiwic3RhcnRTY2hlZHVsZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./src/instrumentation.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./src/instrumentation.ts"));
module.exports = __webpack_exports__;

})();