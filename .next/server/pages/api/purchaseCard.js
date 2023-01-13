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
exports.id = "pages/api/purchaseCard";
exports.ids = ["pages/api/purchaseCard"];
exports.modules = {

/***/ "(api)/./pages/api/purchaseCard.js":
/*!***********************************!*\
  !*** ./pages/api/purchaseCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _public_JSON_PurchaseCard_purchaseCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/JSON/PurchaseCard/purchaseCard */ \"(api)/./public/JSON/PurchaseCard/purchaseCard.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_public_JSON_PurchaseCard_purchaseCard__WEBPACK_IMPORTED_MODULE_0__.purchaseCardDemoData);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHVyY2hhc2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFxQkMsR0FBckIsRUFBeUI7RUFDcENBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTCx3RkFBckI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jicy1mcm9udGVuZC1uZXcvLi9wYWdlcy9hcGkvcHVyY2hhc2VDYXJkLmpzP2RhOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVyY2hhc2VDYXJkRGVtb0RhdGEgfSBmcm9tIFwiLi4vLi4vcHVibGljL0pTT04vUHVyY2hhc2VDYXJkL3B1cmNoYXNlQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHB1cmNoYXNlQ2FyZERlbW9EYXRhKVxufSJdLCJuYW1lcyI6WyJwdXJjaGFzZUNhcmREZW1vRGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/purchaseCard.js\n");

/***/ }),

/***/ "(api)/./public/JSON/PurchaseCard/purchaseCard.js":
/*!**************************************************!*\
  !*** ./public/JSON/PurchaseCard/purchaseCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"purchaseCardDemoData\": () => (/* binding */ purchaseCardDemoData)\n/* harmony export */ });\nconst purchaseCardDemoData = {\n  \"id\": 1,\n  \"isShow\": true,\n  \"items\": [{\n    \"id\": 1,\n    \"title\": \"Ready To Start Work?\",\n    \"subTitle\": \"Purchase Now!\"\n  }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wdWJsaWMvSlNPTi9QdXJjaGFzZUNhcmQvcHVyY2hhc2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBUSxNQUFNQSxvQkFBb0IsR0FBRztFQUNqQyxNQUFLLENBRDRCO0VBRWpDLFVBQVMsSUFGd0I7RUFHakMsU0FBUyxDQUNMO0lBQ0ksTUFBSyxDQURUO0lBRUksU0FBUSxzQkFGWjtJQUdJLFlBQVk7RUFIaEIsQ0FESztBQUh3QixDQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jicy1mcm9udGVuZC1uZXcvLi9wdWJsaWMvSlNPTi9QdXJjaGFzZUNhcmQvcHVyY2hhc2VDYXJkLmpzPzI0ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICBjb25zdCBwdXJjaGFzZUNhcmREZW1vRGF0YSA9IHtcbiAgICBcImlkXCI6MSxcbiAgICBcImlzU2hvd1wiOnRydWUsXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjoxLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOlwiUmVhZHkgVG8gU3RhcnQgV29yaz9cIixcbiAgICAgICAgICAgIFwic3ViVGl0bGVcIjogXCJQdXJjaGFzZSBOb3chXCJcbiAgICAgICAgfVxuICAgIF1cbn0iXSwibmFtZXMiOlsicHVyY2hhc2VDYXJkRGVtb0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./public/JSON/PurchaseCard/purchaseCard.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/purchaseCard.js"));
module.exports = __webpack_exports__;

})();