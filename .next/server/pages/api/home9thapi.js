"use strict";
(() => {
var exports = {};
exports.id = 8024;
exports.ids = [8024];
exports.modules = {

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/home9th/home9th.js
const home9thDemoData = {
  id: 1,
  isShow: true,
  title: "What makes our software better than others?",
  items: [{
    id: 1,
    subTitle1: "Manage tasks, streamline operations, and scale up to enterprise-level programs all from a single platform.",
    subTitle2: "Companies of all sizes can use our software because of the flexibility it provides.",
    subTitle3: "Manage tasks for faster productivity and uses dynamic Kanban boards to track the progress."
  }],
  pics: [// {
  //   id: 1,
  //   img: "/todoBoard.png",
  // },
  // {
  //   id: 2,
  //   img: "/todoBoard1.png",
  // },
  // {
  //   id: 3,
  //   img: "/todoBoard2.png",
  // },
  // {
  //   id: 4,
  //   img: "/todoBoard3.png",
  // },
  // {
  //   id: 5,
  //   img: "/todoBoard4.png",
  // },
  {
    id: 5,
    img: "/video/corporateVideo.gif"
  }, {
    id: 6,
    // img: "/todoBoard6.png",
    img: "/video/corporateVideo2.gif"
  }]
};
;// CONCATENATED MODULE: ./pages/api/home9thapi.js

function handler(req, res) {
  res.status(200).json(home9thDemoData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(995));
module.exports = __webpack_exports__;

})();