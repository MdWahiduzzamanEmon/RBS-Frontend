"use strict";
(() => {
var exports = {};
exports.id = 4352;
exports.ids = [4352];
exports.modules = {

/***/ 4796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/teamJson.js
const teamJson = {
  "id": 1,
  "isShow": true,
  "titleData": {
    id: 1,
    isShow: true,
    titleItems: [{
      "id": 1,
      "isShow": true,
      "title": "Our Team Members",
      "titleDescription": "Use Timeline to plan projects right the first time. See how the pieces you  can spot gap sand overlaps before you start."
    }]
  },
  "cardItem": {
    "id": 1,
    "isShow": true,
    "items": [{
      id: 1,
      name: "Hanri Louice",
      img: "/team1.jpg",
      designation: "Sr. Web UI/UX Designer"
    }, {
      id: 2,
      name: "Danver Hamind",
      img: "/team2.webp",
      designation: "Sr. Web Developer"
    }, {
      id: 3,
      name: "Theodore Lifaz",
      img: "/team3.jpg",
      designation: "Front-end Developer"
    }]
  }
};
;// CONCATENATED MODULE: ./pages/api/teamapi.js

function handler(req, res) {
  res.status(200).json(teamJson);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4796));
module.exports = __webpack_exports__;

})();