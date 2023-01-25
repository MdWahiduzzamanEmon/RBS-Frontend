"use strict";
(() => {
var exports = {};
exports.id = 2158;
exports.ids = [2158];
exports.modules = {

/***/ 3093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/Footer/footer.js
const footerDemoData = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    logo: "/logoVitlous.png" // description:
    //   "On the other handed denounce with who are so beg demoralized.",
    // link:

  }, {
    id: 2,
    isShow: true,
    title: "Company",
    lists: [{
      url: "/aboutUs",
      item: "About us"
    }, {
      url: "/contactUs",
      item: "Contact us"
    }, {
      url: "/contactUs",
      item: "24/7 Customer Support"
    }, {
      url: "/",
      item: "Brand"
    }, {
      url: "/",
      item: "Careers"
    }, {
      url: "/developersProfile",
      item: "Developers"
    }, {
      url: "/",
      item: "Security"
    }, {
      url: "/pricing",
      item: "Pricing"
    }, {
      url: "/paymentTerms&Conditions",
      item: "Payment Terms & Conditions"
    }, {
      url: "/termsAndConditions",
      item: "Terms and Conditions"
    }, {
      url: "/privacyPolicy",
      item: "Privacy Policy"
    }]
  }, {
    id: 3,
    isShow: true,
    title: "Resources",
    lists: [{
      url: "/",
      item: "Free classes"
    }, {
      url: "/",
      item: "Tutorial videos"
    }, {
      url: "/",
      item: "Blog"
    }, {
      url: "/",
      item: "Tutorial"
    }, {
      url: "/",
      item: "Social community"
    }, {
      url: "/",
      item: "Success stories"
    }]
  }, {
    id: 4,
    isShow: true,
    title: "Popular Features",
    lists: [{
      item: "Intuitive Dashboard",
      name: "Dashboard"
    }, {
      item: "Kanban Board",
      name: "Kanban-Board"
    }, {
      item: "Gantt Chart",
      name: "Gantt-Chart"
    }, {
      item: "Calendar view ",
      name: "Calendar-View"
    }, {
      item: "Project Management",
      name: "Project-Management"
    }, {
      item: "Task  Management",
      name: "Task-Management"
    }, {
      item: "Document Management",
      name: "Document-Management"
    }, {
      item: "Budget Management ",
      name: "Budget-Management"
    }, {
      item: "Project & Task Discussion",
      name: "Project-Task-Discussion"
    }, {
      item: "Live Communication",
      name: "Live-Chat-Communication"
    } // {
    //   url: "/",
    //   item: "Issue Tracking",
    //   url: "/features#issueTracking",
    // },
    // {
    //   url: "/",
    //   item: "Time Tracking",
    //   url: "/features#timeTracking",
    // },
    // {
    //   url: "/",
    //   item: "Resource management",
    //   url: "/features#resourceManagement",
    // },
    // {
    //   url: "/",
    //   item: "Requisition, Invoice, Income, Expense, VAT-TAX Management",
    //   url: "/features#requisitionInvoiceIncomeExpenseVatTaxManagement",
    // },
    ]
  }]
};
;// CONCATENATED MODULE: ./pages/api/footerapi.js

function handler(req, res) {
  res.status(200).json(footerDemoData);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3093));
module.exports = __webpack_exports__;

})();