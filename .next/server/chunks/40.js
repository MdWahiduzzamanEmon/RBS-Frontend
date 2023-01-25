exports.id = 40;
exports.ids = [40];
exports.modules = {

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TCategories_TCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9698);
/* harmony import */ var _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7604);
/* harmony import */ var _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TestimonialsWrapper_TestimonialsWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Testimonials = ({
  testimonialsData
}) => {
  const [selectedCategory, setSelectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `${(_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_4___default().testimonialsWrapper)} container-xl`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        className: `${(_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_4___default().testimonialsWrapperTitle)}`,
        children: testimonialsData.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: `${(_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_4___default().testimonialsWrapperDescription)}`,
        children: testimonialsData.description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_TCategories_TCategories__WEBPACK_IMPORTED_MODULE_1__["default"], {
        categoriesData: testimonialsData?.categories,
        setSelectedCategory: setSelectedCategory
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_TestimonialsWrapper_TestimonialsWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        testimonials: testimonialsData?.testimonials,
        selectedCategory: selectedCategory
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

/***/ }),

/***/ 7604:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialsWrapper": "Testimonials_testimonialsWrapper__ZZmiJ",
	"testimonialsWrapperTitle": "Testimonials_testimonialsWrapperTitle__IdpaE",
	"testimonialsWrapperDescription": "Testimonials_testimonialsWrapperDescription__seSpI"
};


/***/ })

};
;