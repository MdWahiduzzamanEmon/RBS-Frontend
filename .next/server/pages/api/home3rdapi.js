"use strict";
(() => {
var exports = {};
exports.id = 2563;
exports.ids = [2563];
exports.modules = {

/***/ 9381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./public/image/customizable-task-board.png
var customizable_task_board = __webpack_require__(3501);
;// CONCATENATED MODULE: ./public/JSON/Home3rd/Home3rd.js

const home3rdInfos = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    title: "Customizable Task Board",
    description: "Dynamic dashboards enable teams to create unique workflows to fit their procedures. Use Kanban boards to track work progress, plan using project timelines, schedule with shared calendars, and share updates using tables.",
    subTitle1: "Assignees & Observers",
    subTitle1Description: "Assign tasks to the appropriate person and keep informed as a task observer - coordinating made simple!",
    subTitle2: "Due Dates",
    subTitle2Description: "Set due dates to keep your team updated on what is required and when. View project board overdue tasks!",
    image: "/project1.jpeg",
    subTitle3: "Time Tracking",
    subTitle3Description: "Set due dates to keep your team updated on what is required and when. View project board overdue tasks!",
    image: customizable_task_board/* default */.Z
  }]
};
;// CONCATENATED MODULE: ./pages/api/home3rdapi.js

function handler(req, res) {
  res.status(200).json(home3rdInfos);
}

/***/ }),

/***/ 3501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/customizable-task-board.511af3a7.png","height":1131,"width":1260,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAoklEQVR42gUASQ6CMLD/9wU+wSeoB+PF6EHc4lIE26ldoUhtoYZEwaAcuFOaC7kHQ3QhtHzXRddUCBPeGzNei/mZn1OyuBldOO9qdMQsCLUhNVhPn9r5GJtojUSMmxAaU752SUKlbT5d673kDF1IXlmbMXlPca6cqFqpSgBAsw2eJuDaOAzDrYijJT1gShlDk2U63RLnQ//7qiqsTo9LBtcc/ig3lPNe5knyAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9381));
module.exports = __webpack_exports__;

})();