exports.id = 5494;
exports.ids = [5494];
exports.modules = {

/***/ 5494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1168);
/* harmony import */ var _Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const Testimonial = ({
  testimonial
}) => {
  const {
    name,
    title,
    text,
    category
  } = testimonial;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `${(_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2___default().testimonialWrapper)}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: `${(_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2___default().blankWrapper)}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `${(_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2___default().text)}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
        className: `${(_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2___default().textCategory)}`,
        children: category
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
        className: `${(_Testimonial_module_css__WEBPACK_IMPORTED_MODULE_2___default().textTitle)}`,
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
        children: text
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["- ", name]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);

/***/ }),

/***/ 1168:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialWrapper": "Testimonial_testimonialWrapper__6NTHs",
	"blankWrapper": "Testimonial_blankWrapper__FQZUB",
	"text": "Testimonial_text__M01BT",
	"textCategory": "Testimonial_textCategory__eMpeL",
	"description": "Testimonial_description__eZSHC"
};


/***/ })

};
;