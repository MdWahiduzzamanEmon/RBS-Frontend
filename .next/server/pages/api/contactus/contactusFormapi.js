"use strict";
(() => {
var exports = {};
exports.id = 5391;
exports.ids = [5391];
exports.modules = {

/***/ 7155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/contactus/contactForm.js
const contactFormData = {
  "id": 1,
  "isShow": true,
  "title": "Send Us Message"
};
;// CONCATENATED MODULE: ./pages/api/contactus/contactusFormapi.js

function handler(req, res) {
  res.status(200).json(contactFormData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7155));
module.exports = __webpack_exports__;

})();