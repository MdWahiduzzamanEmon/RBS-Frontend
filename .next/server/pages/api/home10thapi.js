"use strict";
(() => {
var exports = {};
exports.id = 8059;
exports.ids = [8059];
exports.modules = {

/***/ 3829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/home10thJson.js
const home10thJson = {
  "id": 1,
  "isShow": true,
  "titleData": {
    id: 1,
    isShow: true,
    titleItems: [{
      "id": 1,
      "isShow": true,
      "title": "Speed Up Your Workflow",
      "titleDescription": "Use Timeline to plan projects right the first time. See how the pieces you  can spot gap sand overlaps before you start."
    }]
  },
  "cardItem": {
    "id": 1,
    "isShow": true,
    "items": [{
      "id": 1,
      "isShow": true,
      "title": "Free And Open Source Software",
      "img": "/images.jpg",
      "description": "Use Timeline to plan projects right the time. how the pieces fit together."
    }, {
      "id": 2,
      "isShow": true,
      "title": "Free And Open Source Software",
      "img": "/image1.jpg",
      "description": "Use Timeline to plan projects right the time. how the pieces fit together."
    }, {
      "id": 3,
      "isShow": true,
      "title": "Free And Open Source Software",
      "img": "/image2.png",
      "description": "Use Timeline to plan projects right the time. how the pieces fit together."
    }, {
      "id": 4,
      "isShow": true,
      "title": "Free And Open Source Software",
      "img": "/image3.png",
      "description": "Use Timeline to plan projects right the time. how the pieces fit together."
    }]
  }
};
;// CONCATENATED MODULE: ./pages/api/home10thapi.js

function handler(req, res) {
  res.status(200).json(home10thJson);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3829));
module.exports = __webpack_exports__;

})();