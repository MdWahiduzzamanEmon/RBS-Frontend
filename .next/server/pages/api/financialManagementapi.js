"use strict";
(() => {
var exports = {};
exports.id = 7258;
exports.ids = [7258];
exports.modules = {

/***/ 7211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/financialManagement/financialManagement.js
const financialManagementDemoData = {
  id: 1,
  title: "Financial Management",
  description: "Manage your finances with ease. Track income and expenses. Create invoices and send them to your clients.",
  image: "/financialManagement.png",
  keyPoints: [{
    id: 1,
    title: "Income",
    description: "Income feature allows you to track your income and expenses. You can also create invoices and send them to your clients."
  }, {
    id: 2,
    title: "Expense",
    description: "Keep track of your expenses and budget."
  }, {
    id: 3,
    title: "Budget",
    description: "Budget can be created for each project. You can also create a budget for your company."
  }]
};
;// CONCATENATED MODULE: ./pages/api/financialManagementapi.js

function handler(req, res) {
  res.status(200).json(financialManagementDemoData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7211));
module.exports = __webpack_exports__;

})();