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
exports.id = "pages/api/pricing/policyapi";
exports.ids = ["pages/api/pricing/policyapi"];
exports.modules = {

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "(api)/./pages/api/pricing/policyapi.js":
/*!****************************************!*\
  !*** ./pages/api/pricing/policyapi.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/JSON/Pricing/policy */ \"(api)/./public/JSON/Pricing/policy.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__]);\n_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n  res.status(200).json(_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__.policyDemoData);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJpY2luZy9wb2xpY3lhcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNDLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXNCQyxHQUF0QixFQUEwQjtFQUNyQ0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLHVFQUFyQjtBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYnMtZnJvbnRlbmQtbmV3Ly4vcGFnZXMvYXBpL3ByaWNpbmcvcG9saWN5YXBpLmpzPzA0N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9saWN5RGVtb0RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL0pTT04vUHJpY2luZy9wb2xpY3lcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIgKHJlcSxyZXMpe1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9saWN5RGVtb0RhdGEpXHJcbn0iXSwibmFtZXMiOlsicG9saWN5RGVtb0RhdGEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pricing/policyapi.js\n");

/***/ }),

/***/ "(api)/./public/JSON/Pricing/policy.js":
/*!***************************************!*\
  !*** ./public/JSON/Pricing/policy.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"policyDemoData\": () => (/* binding */ policyDemoData)\n/* harmony export */ });\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);\n_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst policyDemoData = {\n  \"id\": 1,\n  \"isShow\": true,\n  \"items\": [{\n    id: 1,\n    isShow: true,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCertificate,\n    title: 'Quality Assured',\n    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero.'\n  }, {\n    id: 2,\n    isShow: true,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faRightLeft,\n    title: 'Refund Policy',\n    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi.'\n  }, {\n    id: 3,\n    isShow: true,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClipboard,\n    title: 'Buying Guide',\n    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi.'\n  }]\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wdWJsaWMvSlNPTi9QcmljaW5nL3BvbGljeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUcsY0FBYyxHQUFHO0VBQzFCLE1BQUssQ0FEcUI7RUFFMUIsVUFBVSxJQUZnQjtFQUcxQixTQUFRLENBQ0o7SUFDSUMsRUFBRSxFQUFDLENBRFA7SUFFSUMsTUFBTSxFQUFFLElBRlo7SUFHSUMsSUFBSSxFQUFFTiw0RUFIVjtJQUlJTyxLQUFLLEVBQUUsaUJBSlg7SUFLSUMsV0FBVyxFQUFFO0VBTGpCLENBREksRUFRSjtJQUNJSixFQUFFLEVBQUMsQ0FEUDtJQUVJQyxNQUFNLEVBQUUsSUFGWjtJQUdJQyxJQUFJLEVBQUVKLDBFQUhWO0lBSUlLLEtBQUssRUFBRSxlQUpYO0lBS0lDLFdBQVcsRUFBRTtFQUxqQixDQVJJLEVBZUo7SUFDSUosRUFBRSxFQUFDLENBRFA7SUFFSUMsTUFBTSxFQUFFLElBRlo7SUFHSUMsSUFBSSxFQUFFTCwwRUFIVjtJQUlJTSxLQUFLLEVBQUUsY0FKWDtJQUtJQyxXQUFXLEVBQUU7RUFMakIsQ0FmSTtBQUhrQixDQUF2QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmJzLWZyb250ZW5kLW5ldy8uL3B1YmxpYy9KU09OL1ByaWNpbmcvcG9saWN5LmpzPzc4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFDZXJ0aWZpY2F0ZSwgZmFDbGlwYm9hcmQsIGZhUmlnaHRMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvbGljeURlbW9EYXRhID0ge1xyXG4gICAgXCJpZFwiOjEsXHJcbiAgICBcImlzU2hvd1wiOiB0cnVlLFxyXG4gICAgXCJpdGVtc1wiOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIGlzU2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgaWNvbjogZmFDZXJ0aWZpY2F0ZSxcclxuICAgICAgICAgICAgdGl0bGU6ICdRdWFsaXR5IEFzc3VyZWQnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGYWNlcmUsIHZlcm8uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDoyLFxyXG4gICAgICAgICAgICBpc1Nob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGljb246IGZhUmlnaHRMZWZ0LFxyXG4gICAgICAgICAgICB0aXRsZTogJ1JlZnVuZCBQb2xpY3knLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yZSwgc2VxdWkuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgICAgICBpc1Nob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGljb246IGZhQ2xpcGJvYXJkLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0J1eWluZyBHdWlkZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTGFib3JlLCBzZXF1aS4nXHJcbiAgICAgICAgfSxcclxuICAgICBdXHJcbn0iXSwibmFtZXMiOlsiZmFDZXJ0aWZpY2F0ZSIsImZhQ2xpcGJvYXJkIiwiZmFSaWdodExlZnQiLCJwb2xpY3lEZW1vRGF0YSIsImlkIiwiaXNTaG93IiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./public/JSON/Pricing/policy.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pricing/policyapi.js"));
module.exports = __webpack_exports__;

})();