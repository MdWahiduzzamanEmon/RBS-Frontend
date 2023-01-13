exports.id = 6838;
exports.ids = [6838];
exports.modules = {

/***/ 6838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8246);
/* harmony import */ var _BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const BookingDemo = ({
  bookingDemoData
}) => {
  const {
    title,
    description,
    image
  } = bookingDemoData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper)}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper)}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: image,
        alt: "person image",
        width: 300,
        height: 400,
        layout: "intrinsic",
        className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().bookingImage)}`
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().blankWrapper1)}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().blankWrapper2)}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().textWrapper)}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().textWrapperInner)}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().textWrapperTitle)}`,
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().textWrapperDescription)}`,
          children: description
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/pricing",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            className: `${(_BookingDemo_module_css__WEBPACK_IMPORTED_MODULE_4___default().cardButton)}`,
            children: "Book Demo"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingDemo);

/***/ }),

/***/ 8246:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "BookingDemo_wrapper__griGi",
	"imageWrapper": "BookingDemo_imageWrapper__yFsiL",
	"blankWrapper1": "BookingDemo_blankWrapper1__0DzDL",
	"blankWrapper2": "BookingDemo_blankWrapper2__vhYcD",
	"textWrapper": "BookingDemo_textWrapper__u4P9b",
	"textWrapperInner": "BookingDemo_textWrapperInner__FOGgt",
	"textWrapperTitle": "BookingDemo_textWrapperTitle__ohQ41",
	"textWrapperDescription": "BookingDemo_textWrapperDescription__1VZF3",
	"cardButton": "BookingDemo_cardButton__SBJKu"
};


/***/ })

};
;