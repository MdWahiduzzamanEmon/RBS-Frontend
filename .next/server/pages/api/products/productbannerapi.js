"use strict";
(() => {
var exports = {};
exports.id = 2509;
exports.ids = [2509];
exports.modules = {

/***/ 4833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/products/productsBannerJson.js
const productBannerJson = {
  "id": 1,
  "isShow": true,
  "items": [{
    "id": 1,
    "isShow": true,
    "title": "We build Project Management Software for your company",
    "img": "/projectBanner1.png"
  }]
};
;// CONCATENATED MODULE: ./pages/api/products/productbannerapi.js

function handler(req, res) {
  res.status(200).json(productBannerJson);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4833));
module.exports = __webpack_exports__;

})();