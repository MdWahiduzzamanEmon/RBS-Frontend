"use strict";
(() => {
var exports = {};
exports.id = 7674;
exports.ids = [7674];
exports.modules = {

/***/ 1157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/Home5th/Home5th.js
const home5thDemoData = {
  id: 1,
  isShow: true,
  titleData: [{
    id: 1,
    isShow: true,
    title: "Please watch our how-to videos",
    description: "Explore tutorials on how to use our Software and teach your team."
  }],
  videos: [{
    id: 1,
    isShow: true,
    video: "https://www.youtube.com/embed/Jk-JwtScIlw"
  }]
};
;// CONCATENATED MODULE: ./pages/api/home5thapi.js

function handler(req, res) {
  res.status(200).json(home5thDemoData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1157));
module.exports = __webpack_exports__;

})();