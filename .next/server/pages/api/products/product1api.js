"use strict";
(() => {
var exports = {};
exports.id = 7428;
exports.ids = [7428];
exports.modules = {

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 2880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _public_JSON_products_product1Json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_products_product1Json__WEBPACK_IMPORTED_MODULE_0__]);
_public_JSON_products_product1Json__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  res.status(200).json(_public_JSON_products_product1Json__WEBPACK_IMPORTED_MODULE_0__/* .product1stJson */ .g);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ product1stJson)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const product1stJson = {
  "id": 1,
  "isShow": true,
  "items": [{
    "id": 1,
    "isShow": true,
    "title": "Most Advanced Technology Ever! Made For You.",
    "titleDescription": "On the other hand we denounce with righteous dislike men who are so beguiled.",
    "subTitle1": "Protect your Data and Privacy",
    "subTitleDescription1": "On the other hand we denounce with righteus indignation dislike men who are beguiled ",
    "subTitle2": "Free And Open Source Software",
    "subTitleDescription2": "On the other hand we denounce with righteus indignation dislike men who are beguiled",
    "img": "/product2.jpg",
    "icon": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle
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
var __webpack_exports__ = (__webpack_exec__(2880));
module.exports = __webpack_exports__;

})();