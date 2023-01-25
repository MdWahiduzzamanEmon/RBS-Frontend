(() => {
var exports = {};
exports.id = 2176;
exports.ids = [2176,8197,5563,8513,3315];
exports.modules = {

/***/ 2696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _public_JSON_contactus_contactus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1874);
/* harmony import */ var _svgComponents_wavesSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2303);
/* harmony import */ var _ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2084);
/* harmony import */ var _ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const getStaticProps = async () => {
  return {
    props: {
      contactSupportData: _public_JSON_contactus_contactus__WEBPACK_IMPORTED_MODULE_2__/* .contactUsDemo */ .p
    }
  };
};

const ContactSupport = ({
  contactSupportData
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();

  const onSubmit = data => console.log(data);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    style: {
      paddingTop: "70px"
    },
    className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper)}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().svgWrapper)}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_svgComponents_wavesSvg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().textWrapper)}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
        className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().textWrapperTitle)}`,
        children: contactSupportData?.contactSupport?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().textWrapperDescription)}`,
        children: contactSupportData?.training?.description
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().contactWrapper)}  container-xl`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formWrapper)}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
          onSubmit: handleSubmit(onSubmit),
          className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().form)}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentsTop)}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentTop1)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
                children: "Full Name"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({}, register("fullName")), {}, {
                placeholder: "Please enter your full name"
              }))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentTop2)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
                children: "Email"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({
                type: "email"
              }, register("email")), {}, {
                placeholder: "Enter your company's email"
              }))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentTop3)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
                children: "Phone Number"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread(_objectSpread({}, register("phoneNumber")), {}, {
                placeholder: "Enter your phone number"
              }))]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentsMiddle)}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentMiddle1)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
                children: "How can we help you?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", _objectSpread(_objectSpread({}, register("helpYou")), {}, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "Need assistance with technical issue",
                  children: "Need assistance with technical issue"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "Questions about data privacy",
                  children: "Questions about data privacy"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "Require more information about the process",
                  children: "Require more information about the process"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "other",
                  children: "Other"
                })]
              }))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().formContentMiddle2)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
                children: "Tell us about you"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", _objectSpread(_objectSpread({}, register("teamSize")), {}, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "1",
                  children: `I'm user 1`
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "2-5",
                  children: `I'm user 2`
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "5-10",
                  children: `I'm user 3`
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("option", {
                  value: "10-50",
                  children: `I'm user 4`
                })]
              }))]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().textArea)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
              children: "Description"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("textarea", _objectSpread(_objectSpread({}, register("help")), {}, {
              placeholder: "Let us know some more details"
            }))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkboxWrapper)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "checkbox"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
              children: "I have read and agree to Vitlous Terms of service and Privacy policy."
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().requestWrapper)}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
              type: "submit",
              className: `${(_ContactSupport_module_css__WEBPACK_IMPORTED_MODULE_5___default().request)}`,
              children: "Submit"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactSupport);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2084:
/***/ ((module) => {

// Exports
module.exports = {
	"svgWrapper": "ContactSupport_svgWrapper__MdkTD",
	"textWrapper": "ContactSupport_textWrapper__C4TbS",
	"textWrapperTitle": "ContactSupport_textWrapperTitle__z6zbg",
	"textWrapperDescription": "ContactSupport_textWrapperDescription__sonhH",
	"contactWrapper": "ContactSupport_contactWrapper__dSasg",
	"formWrapper": "ContactSupport_formWrapper__Gw2gl",
	"form": "ContactSupport_form__Zl6k1",
	"formContentsTop": "ContactSupport_formContentsTop__TwCdV",
	"formContentTop1": "ContactSupport_formContentTop1__kSLVK",
	"formContentTop2": "ContactSupport_formContentTop2__CBQYf",
	"formContentTop3": "ContactSupport_formContentTop3__f1d5c",
	"formContentsMiddle": "ContactSupport_formContentsMiddle__uW8Z0",
	"formContentMiddle1": "ContactSupport_formContentMiddle1__JZaX2",
	"formContentMiddle2": "ContactSupport_formContentMiddle2__oYPkT",
	"textArea": "ContactSupport_textArea__fJzME",
	"checkboxWrapper": "ContactSupport_checkboxWrapper__QZpaj",
	"submitWrapper": "ContactSupport_submitWrapper__sPqRF",
	"submit": "ContactSupport_submit__9Pb9v",
	"requestWrapper": "ContactSupport_requestWrapper__8AKqe",
	"request": "ContactSupport_request__Ueuav",
	"wrapper": "ContactSupport_wrapper__hKqFr"
};


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5769,2303], () => (__webpack_exec__(2696)));
module.exports = __webpack_exports__;

})();