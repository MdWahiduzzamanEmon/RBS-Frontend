"use strict";
(() => {
var exports = {};
exports.id = 4246;
exports.ids = [4246];
exports.modules = {

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 3850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__]);
_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  res.status(200).json(_public_JSON_Pricing_policy__WEBPACK_IMPORTED_MODULE_0__/* .policyDemoData */ .w);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ policyDemoData)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const policyDemoData = {
  "id": 1,
  "isShow": true,
  "items": [{
    id: 1,
    isShow: true,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCertificate,
    title: 'Quality Assured',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, vero.'
  }, {
    id: 2,
    isShow: true,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faRightLeft,
    title: 'Refund Policy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi.'
  }, {
    id: 3,
    isShow: true,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClipboard,
    title: 'Buying Guide',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi.'
  }]
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3850));
module.exports = __webpack_exports__;

})();