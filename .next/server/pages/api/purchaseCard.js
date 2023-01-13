"use strict";
(() => {
var exports = {};
exports.id = 8804;
exports.ids = [8804];
exports.modules = {

/***/ 9538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/PurchaseCard/purchaseCard.js
const purchaseCardDemoData = {
  "id": 1,
  "isShow": true,
  "items": [{
    "id": 1,
    "title": "Ready To Start Work?",
    "subTitle": "Purchase Now!"
  }]
};
;// CONCATENATED MODULE: ./pages/api/purchaseCard.js

function handler(req, res) {
  res.status(200).json(purchaseCardDemoData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9538));
module.exports = __webpack_exports__;

})();