"use strict";
(() => {
var exports = {};
exports.id = 6466;
exports.ids = [6466];
exports.modules = {

/***/ 4080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/home6thJson.js
const home6thJson = {
  id: 1,
  isShow: true,
  column1Title: "1000+",
  column1SubTitle: "Happy Customers",
  // column1Description:
  //   "Use Timeline to plan  projects right the first time. See how the pieces fit together.",
  column2Text: " This software has been vital to my team's and my success in project planning and communication for over a year now.",
  column2Name: "-by Hanri Thomas Doe",
  column3Title: "Trusted By 1000+ Customers Using Our Software!",
  column3Description: "Use Timeline to plan  projects right the first time.See how the pieces fit together.",
  reviewLists: [{
    id: 1,
    img: "/image/avatar1.jpg",
    name: "Hanri Thomas Doe",
    designation: "CEO, Maxisoft Inc.",
    review: "This software has been vital to my team's and my success in project planning and communication for over a year now."
  }, {
    id: 2,
    img: "/image/avatar2.jpg",
    name: "Stacey Alexander",
    designation: "Marketing Executive, Sams Pvt. Ltd.",
    review: "This software has been vital to my team's and my success in project planning and communication for over a year now."
  }, {
    id: 3,
    img: "/image/avatar3.jpg",
    name: "Adrian Warren",
    designation: "HR Executive, Addison Group",
    review: "This software has been vital to my team's and my success in project planning and communication for over a year now."
  }],
  backgroundImage: "/home6thbackground.svg" // slider: [
  //   { id: 1, isShow: true, client: "AIRTEL" },
  //   { id: 2, isShow: false, client: "TELETALK" },
  //   { id: 3, isShow: true, client: "RBS TECH" },
  // ],

};
;// CONCATENATED MODULE: ./pages/api/home6thapi.js

function handler(req, res) {
  res.status(200).json(home6thJson);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4080));
module.exports = __webpack_exports__;

})();