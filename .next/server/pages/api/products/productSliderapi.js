"use strict";
(() => {
var exports = {};
exports.id = 6698;
exports.ids = [6698];
exports.modules = {

/***/ 7905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/products/productSlider.js
const productSliderDemo = {
  "id": 1,
  "isShow": true,
  "title": "More Related Products",
  "items": [{
    "id": 1,
    "isShow": true,
    "title": "Card title",
    "description": " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "image": "/cardProduct1.jpg"
  }, {
    "id": 2,
    "isShow": true,
    "title": "Card title",
    "description": " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "image": "/cardProduct1.jpg"
  }, {
    "id": 3,
    "isShow": true,
    "title": "Card title",
    "description": " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "image": "/cardProduct1.jpg"
  }, {
    "id": 4,
    "isShow": true,
    "title": "Card title",
    "description": " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "image": "/cardProduct1.jpg"
  }, {
    "id": 5,
    "isShow": true,
    "title": "Card title",
    "description": " This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    "image": "/cardProduct1.jpg"
  }]
};
;// CONCATENATED MODULE: ./pages/api/products/productSliderapi.js

function handler(req, res) {
  res.status(200).json(productSliderDemo);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7905));
module.exports = __webpack_exports__;

})();