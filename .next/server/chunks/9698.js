exports.id = 9698;
exports.ids = [9698];
exports.modules = {

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TCategories_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3402);
/* harmony import */ var _TCategories_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TCategories_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TCategory_TCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9974);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const TCategories = ({
  categoriesData,
  setSelectedCategory
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: `${(_TCategories_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoriesWrapper)}`,
    children: categoriesData?.map(category => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_TCategory_TCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
      category: category,
      setSelectedCategory: setSelectedCategory
    }, category.id))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TCategories);

/***/ }),

/***/ 9974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TCategory_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5907);
/* harmony import */ var _TCategory_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TCategory_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const TCategory = ({
  category,
  setSelectedCategory
}) => {
  const {
    title
  } = category;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: `${(_TCategory_module_css__WEBPACK_IMPORTED_MODULE_2___default().categoryWrapper)}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: `${(_TCategory_module_css__WEBPACK_IMPORTED_MODULE_2___default().categoryTitle)}`,
      onClick: e => setSelectedCategory(e.target.innerText),
      children: title
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TCategory);

/***/ }),

/***/ 3402:
/***/ ((module) => {

// Exports
module.exports = {
	"categoriesWrapper": "TCategories_categoriesWrapper__k12Bp"
};


/***/ }),

/***/ 5907:
/***/ ((module) => {

// Exports
module.exports = {
	"categoryWrapper": "TCategory_categoryWrapper__uPx__",
	"categoryTitle": "TCategory_categoryTitle__nfsqC"
};


/***/ })

};
;