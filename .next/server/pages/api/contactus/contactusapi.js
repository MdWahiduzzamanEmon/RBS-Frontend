"use strict";
(() => {
var exports = {};
exports.id = 6124;
exports.ids = [6124];
exports.modules = {

/***/ 9747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./public/JSON/contactus/contactus.js
const contactUsDemo = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    title: "Email Us",
    description: "If you have any queries please feel free to email us.",
    email: "info@example.com"
  }, // {
  //     "id": 2,
  //     "isShow": true,
  //     "title":"Office Address",
  //     "address":"If you have any queries please feel free to email us.",
  //     "startDate": "Monday – Friday : 6 am to 8 pm EST",
  //     "endDate": "Saturday : 6 am to 2 pm EST"
  // },
  {
    id: 3,
    isShow: true,
    title: "Get In Touch",
    description: "Have any questions? We'd love to hear from you.",
    supportEmail: "support@example.com",
    technicalEmail: "technical@example.com",
    salesEmail: "sales@example.com"
  }],
  contactSales: {
    id: 1,
    title: "Contact Sales",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam?"
  },
  training: {
    id: 1,
    title: "Product Training",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam?"
  },
  support: {
    id: 1,
    title: "Find the answers you need",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam?",
    usersList: {
      id: 1,
      title: "Who are you?",
      users: [{
        id: 1,
        title: "User 1"
      }, {
        id: 2,
        title: "User 2"
      }],
      questionsSection: [{
        id: 1,
        user: "User 1",
        questionsList: {
          id: 1,
          title: "General",
          questions: [{
            id: 1,
            title: "How will the vitlous process work for me?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }, {
            id: 2,
            title: "How do i create a new user?",
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          }]
        }
      }, {
        id: 2,
        user: "User 1",
        questionsList: {
          id: 1,
          title: "Technical help",
          questions: [{
            id: 1,
            title: "How will the vitlous process work for me?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }, {
            id: 2,
            title: "How do i create a new user?",
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          }]
        }
      }, {
        id: 3,
        user: "User 2",
        questionsList: {
          id: 1,
          title: "Users",
          questions: [{
            id: 1,
            title: "How will the vitlous process work for me?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }, {
            id: 2,
            title: "How do i create a new user?",
            ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          }]
        }
      }]
    } // questionsList:

  },
  contactSupport: {
    id: 1,
    title: "Contact Support",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam?"
  }
};
;// CONCATENATED MODULE: ./pages/api/contactus/contactusapi.js

function handler(req, res) {
  res.status(200).json(contactUsDemo);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9747));
module.exports = __webpack_exports__;

})();