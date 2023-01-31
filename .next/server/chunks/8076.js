exports.id = 8076;
exports.ids = [8076];
exports.modules = {

/***/ 8076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5494);
/* harmony import */ var _TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5614);
/* harmony import */ var _TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







const TestimonialsWrapper = ({
  testimonials,
  selectedCategory
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `${(_TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3___default().testimonialsWrapper)}` //   style={{ background: "#173465" }}
    ,
    children: [selectedCategory ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: testimonials?.filter(testimonial => testimonial.category === selectedCategory).map(testimonial => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__["default"], {
        testimonial: testimonial,
        className: `${(_TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3___default().testimonial)}`
      }, testimonial.id))
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: testimonials?.map(testimonial => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__["default"], {
        testimonial: testimonial,
        className: `${(_TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3___default().testimonial)}`
      }, testimonial.id))
    }), selectedCategory === "All Features" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: testimonials?.map(testimonial => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_1__["default"], {
        testimonial: testimonial,
        className: `${(_TestimonialsWrapper_module_css__WEBPACK_IMPORTED_MODULE_3___default().testimonial)}`
      }, testimonial.id))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialsWrapper);

/***/ }),

/***/ 5614:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialsWrapper": "TestimonialsWrapper_testimonialsWrapper__uGjui"
};


/***/ })

};
;