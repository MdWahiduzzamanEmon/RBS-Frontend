"use strict";
(() => {
var exports = {};
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 6540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/banner.js
const banner = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    title: "<span>Control Your</span> <span style='color:#0F0'>TIME</span> And <span style='color: #0f0'>FINANCE<span/>",
    // ,Be the best project manager!
    // title1: "Control Your ",
    // blueText1: "TIME",
    // title2: "And <span>FINANCE/span>",
    title2: "Be the <span style='color: #0f0'>best</span> project manager!",
    blueText2: "best",
    title4: "project manager!",
    primaryDescription: "Nothing will be happened without your approval, everything is in your hand.",
    secondaryDescription: "Control your resource, control your cost, control your project & make your profit maximum.",
    tertiaryDescription: "Yes, You are the BOSS."
  }]
}; // export const banner = {
//   id: 1,
//   isShow: true,
//   items: [
//     {
//       id: 1,
//       isShow: true,
//       title: "Be the best project manager!",
//       primaryDescription:
//         "# Nothing will be happened without your approval, everything is in your hand.",
//       secondaryDescription:
//         "# Control your resource, control your cost, control your project & make your profit maximum.",
//       tertiaryDescription: "# Yes, You are the BOSS.",
//     },
//   ],
// };
;// CONCATENATED MODULE: ./pages/api/banner.js

function handler(req, res) {
  res.status(200).json(banner);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6540));
module.exports = __webpack_exports__;

})();