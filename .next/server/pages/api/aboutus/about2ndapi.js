"use strict";
(() => {
var exports = {};
exports.id = 3792;
exports.ids = [3792];
exports.modules = {

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 7511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _public_JSON_Aboutus_about2nd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_public_JSON_Aboutus_about2nd__WEBPACK_IMPORTED_MODULE_0__]);
_public_JSON_Aboutus_about2nd__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  res.status(200).json(_public_JSON_Aboutus_about2nd__WEBPACK_IMPORTED_MODULE_0__/* .about2ndDemoData */ .i);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ about2ndDemoData)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const about2ndDemoData = {
  id: 1,
  isShow: true,
  titleData: [{
    id: 1,
    isShow: true,
    title: "We are Vitlous",
    description: "Vitlous is a software and IT solution provider based in Dhaka, Bangladesh. Our company is made up of well experienced employees. We have been in the IT sector for over 2 years. We design beautiful online productivity and creativity tools that users like to use."
  }],
  subSection: {
    id: 1,
    title: "We Simplify Development Process",
    items: [{
      id: 1,
      isShow: true,
      title: "Discover",
      img: "/aboutCard1.png",
      description: "We shape brands via research, challenging assumptions at every turn.",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCompass,
      color: "#FF9900"
    }, {
      id: 2,
      isShow: true,
      title: "Design",
      img: "/aboutCard2.png",
      description: "Our design concept is to keep things simple. We enjoy designing something unique that is simple for end consumers.",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPenRuler,
      color: "#00D2D2"
    }, {
      id: 3,
      isShow: true,
      title: "Build",
      img: "/aboutCard3.png",
      description: "We create with efficiency and competence using modern technologies, resulting in adaptable and scalable business-driven solutions.",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLaptopCode,
      color: "#F04095"
    }, {
      id: 4,
      isShow: true,
      title: "Deliver",
      img: "/aboutCard3.png",
      description: "We apply an iterative approach to both our work and our practice, continuously searching for ways to better what we do.",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faRocket,
      color: "#00C875"
    }]
  }
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
var __webpack_exports__ = (__webpack_exec__(7511));
module.exports = __webpack_exports__;

})();