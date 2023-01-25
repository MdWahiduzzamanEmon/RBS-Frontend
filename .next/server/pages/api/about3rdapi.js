"use strict";
(() => {
var exports = {};
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 9046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _public_JSON_about3rdJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(785);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_about3rdJson__WEBPACK_IMPORTED_MODULE_0__]);
_public_JSON_about3rdJson__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  res.status(200).json(_public_JSON_about3rdJson__WEBPACK_IMPORTED_MODULE_0__/* .about3rdJson */ .f);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ about3rdJson)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const about3rdJson = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    title: "Our Culture",
    titleDescription: "A great workplace brings together amazing individuals and difficult issues.",
    subTitle1: "Transparency and Trust",
    subTitleDescription1: "Data is vital to our identity as a company and as a team, and it is an essential component of our platform. Data access enables teams to collaborate even more effectively and perform at their peak. ",
    subTitle2: "Customer-Centricity",
    subTitleDescription2: "Everything we do is centered on ensuring the success and pleasure of our clients.",
    img: "/download (2).jpg",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle
  }]
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9046));
module.exports = __webpack_exports__;

})();