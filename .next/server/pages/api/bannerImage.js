"use strict";
(() => {
var exports = {};
exports.id = 9939;
exports.ids = [9939];
exports.modules = {

/***/ 9251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/bannerImage.js
const bannerImages = {
  id: 1,
  isShow: true,
  images: [{
    id: "1",
    isShow: true,
    img: "/banner/project-manager1.svg"
  } // {
  //   id: "2",
  //   isShow: true,
  //   img: "/bannerslide2.png",
  // },
  // {
  //   id: "3",
  //   isShow: true,
  //   img: "/bannerslide1.png",
  // },
  ]
};
;// CONCATENATED MODULE: ./pages/api/bannerImage.js

function handler(req, res) {
  res.status(200).json(bannerImages);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9251));
module.exports = __webpack_exports__;

})();