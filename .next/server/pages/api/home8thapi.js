"use strict";
(() => {
var exports = {};
exports.id = 4693;
exports.ids = [4693];
exports.modules = {

/***/ 244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/home8thJson.js
const home8thJson = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    title: "Features for Communication",
    titleDescription: "Real-time chat channels help to streamline team collaboration. To keep your team moving on action items, use @mentions to add anybody to work chats and assign comments.",
    subTitle1: "Notifications",
    subTitleDescription1: "Receive real-time notifications about significant task updates through the web.",
    subTitle2: "Chat",
    subTitleDescription2: "With Chat view, you can quickly post updates, link resources, and centralize team conversation all in one spot.",
    subTitle3: "Task Discussion",
    subTitleDescription3: "Create discussions about your tasks and projects to improve team collaboration.",
    image1: "/image1.jpg",
    image2: "/image2.png",
    image3: "/image3.png",
    image4: "/image4.png",
    image5: "/dot-image.png"
  }]
};
;// CONCATENATED MODULE: ./pages/api/home8thapi.js

function handler(req, res) {
  res.status(200).json(home8thJson);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(244));
module.exports = __webpack_exports__;

})();