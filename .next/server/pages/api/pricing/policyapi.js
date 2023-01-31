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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/JSON/Pricing/policy */ \"(api)/./public/JSON/Pricing/policy.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__]);\n_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n  res.status(200).json(_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__.policyDemoData);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJpY2luZy9wb2xpY3lhcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNDLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXNCQyxHQUF0QixFQUEwQjtFQUNyQ0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLHVFQUFyQjtBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYnMtZnJvbnRlbmQtbmV3Ly4vcGFnZXMvYXBpL3ByaWNpbmcvcG9saWN5YXBpLmpzPzA0N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9saWN5RGVtb0RhdGEgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL0pTT04vUHJpY2luZy9wb2xpY3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlciAocmVxLHJlcyl7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9saWN5RGVtb0RhdGEpXG59Il0sIm5hbWVzIjpbInBvbGljeURlbW9EYXRhIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/pricing/policyapi.js\n");

/***/ }),

/***/ "(api)/./public/JSON/Pricing/policy.js":
/*!***************************************!*\
  !*** ./public/JSON/Pricing/policy.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"policyDemoData\": () => (/* binding */ policyDemoData)\n/* harmony export */ });\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);\n_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst policyDemoData = {\n  \"id\": 1,\n  \"isShow\": true,\n  \"items\": [{\n    id: 1,\n    isShow: true,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCertificate,\n    title: 'Quality Assured',\n    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero.'\n  }, {\n    id: 2,\n    isShow: true,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faRightLeft,\n    title: 'Refund Policy',\n    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi.'\n  }, {\n    id: 3,\n    isShow: true,\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClipboard,\n    title: 'Buying Guide',\n    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi.'\n  }]\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wdWJsaWMvSlNPTi9QcmljaW5nL3BvbGljeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUcsY0FBYyxHQUFHO0VBQzFCLE1BQUssQ0FEcUI7RUFFMUIsVUFBVSxJQUZnQjtFQUcxQixTQUFRLENBQ0o7SUFDSUMsRUFBRSxFQUFDLENBRFA7SUFFSUMsTUFBTSxFQUFFLElBRlo7SUFHSUMsSUFBSSxFQUFFTiw0RUFIVjtJQUlJTyxLQUFLLEVBQUUsaUJBSlg7SUFLSUMsV0FBVyxFQUFFO0VBTGpCLENBREksRUFRSjtJQUNJSixFQUFFLEVBQUMsQ0FEUDtJQUVJQyxNQUFNLEVBQUUsSUFGWjtJQUdJQyxJQUFJLEVBQUVKLDBFQUhWO0lBSUlLLEtBQUssRUFBRSxlQUpYO0lBS0lDLFdBQVcsRUFBRTtFQUxqQixDQVJJLEVBZUo7SUFDSUosRUFBRSxFQUFDLENBRFA7SUFFSUMsTUFBTSxFQUFFLElBRlo7SUFHSUMsSUFBSSxFQUFFTCwwRUFIVjtJQUlJTSxLQUFLLEVBQUUsY0FKWDtJQUtJQyxXQUFXLEVBQUU7RUFMakIsQ0FmSTtBQUhrQixDQUF2QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmJzLWZyb250ZW5kLW5ldy8uL3B1YmxpYy9KU09OL1ByaWNpbmcvcG9saWN5LmpzPzc4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFDZXJ0aWZpY2F0ZSwgZmFDbGlwYm9hcmQsIGZhUmlnaHRMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5leHBvcnQgY29uc3QgcG9saWN5RGVtb0RhdGEgPSB7XG4gICAgXCJpZFwiOjEsXG4gICAgXCJpc1Nob3dcIjogdHJ1ZSxcbiAgICBcIml0ZW1zXCI6W1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDoxLFxuICAgICAgICAgICAgaXNTaG93OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogZmFDZXJ0aWZpY2F0ZSxcbiAgICAgICAgICAgIHRpdGxlOiAnUXVhbGl0eSBBc3N1cmVkJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZhY2VyZSwgdmVyby4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOjIsXG4gICAgICAgICAgICBpc1Nob3c6IHRydWUsXG4gICAgICAgICAgICBpY29uOiBmYVJpZ2h0TGVmdCxcbiAgICAgICAgICAgIHRpdGxlOiAnUmVmdW5kIFBvbGljeScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yZSwgc2VxdWkuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDozLFxuICAgICAgICAgICAgaXNTaG93OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogZmFDbGlwYm9hcmQsXG4gICAgICAgICAgICB0aXRsZTogJ0J1eWluZyBHdWlkZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yZSwgc2VxdWkuJ1xuICAgICAgICB9LFxuICAgICBdXG59Il0sIm5hbWVzIjpbImZhQ2VydGlmaWNhdGUiLCJmYUNsaXBib2FyZCIsImZhUmlnaHRMZWZ0IiwicG9saWN5RGVtb0RhdGEiLCJpZCIsImlzU2hvdyIsImljb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./public/JSON/Pricing/policy.js\n");

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