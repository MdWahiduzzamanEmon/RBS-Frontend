"use strict";
(() => {
var exports = {};
exports.id = 1459;
exports.ids = [1459];
exports.modules = {

/***/ 6989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/miniPricing/miniPricing.js
const miniPricingDemoData = {
  id: 1,
  title: "Which plan is right for you?",
  packages: [{
    id: 1,
    title: "Basic",
    details: "The Ultimate Package",
    price: "$5"
  }, {
    id: 2,
    title: "Standard",
    details: "The Ultimate Package",
    price: "$50"
  }, {
    id: 3,
    title: "Premium",
    details: "The Ultimate Package",
    price: "$100"
  }, {
    id: 4,
    title: "Enterprise",
    details: "The Ultimate Package",
    price: "$8"
  }]
};
;// CONCATENATED MODULE: ./pages/api/miniPricingapi.js

function handler(req, res) {
  res.status(200).json(miniPricingDemoData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6989));
module.exports = __webpack_exports__;

})();