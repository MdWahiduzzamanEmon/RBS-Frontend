"use strict";
(() => {
var exports = {};
exports.id = 7492;
exports.ids = [7492];
exports.modules = {

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 6029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _public_JSON_products_product2ndJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_products_product2ndJson__WEBPACK_IMPORTED_MODULE_0__]);
_public_JSON_products_product2ndJson__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  res.status(200).json(_public_JSON_products_product2ndJson__WEBPACK_IMPORTED_MODULE_0__/* .product2ndJson */ .Y);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ product2ndJson)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const product2ndJson = {
  "id": 1,
  "isShow": true,
  "items": [{
    "id": 1,
    "isShow": true,
    "title": "Most Advanced Technology Ever! Made For You.",
    "titleDescription1": "Built with latest technology",
    "titleDescription2": "Manage complex workflows",
    "titleDescription3": "Built with latest technology",
    "titleDescription4": "Manage complex workflows",
    "icon": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheck,
    "img": "/product22.jpg"
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
var __webpack_exports__ = (__webpack_exec__(6029));
module.exports = __webpack_exports__;

})();