exports.id = 8336;
exports.ids = [8336];
exports.modules = {

/***/ 2383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeatureCard_FeatureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5605);
/* harmony import */ var _StickyCategoriesMenu_StickyCategoriesMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5920);
/* harmony import */ var _FeatureCategories_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7589);
/* harmony import */ var _FeatureCategories_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FeatureCategories_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const FeatureCategories = ({
  categoriesData
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    style: {
      backgroundImage: "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container-xl",
      style: {
        position: "relative"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        style: {
          position: "sticky",
          top: "20px",
          zIndex: "50"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StickyCategoriesMenu_StickyCategoriesMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), categoriesData?.map(feature => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `${(_FeatureCategories_module_css__WEBPACK_IMPORTED_MODULE_4___default().categoriesContainer)}`,
        id: feature.title,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          className: `${(_FeatureCategories_module_css__WEBPACK_IMPORTED_MODULE_4___default().categoriesContainerTitle)}`,
          children: feature.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: `${(_FeatureCategories_module_css__WEBPACK_IMPORTED_MODULE_4___default().featureCardsContainer)}`,
          children: feature.features.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_FeatureCard_FeatureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            featureCardData: item
          }, item.id))
        })]
      }, feature.id))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureCategories);

/***/ }),

/***/ 7589:
/***/ ((module) => {

// Exports
module.exports = {
	"categoriesContainer": "FeatureCategories_categoriesContainer__51mHP",
	"featureCardsContainer": "FeatureCategories_featureCardsContainer__O2RAI",
	"categoriesContainerTitle": "FeatureCategories_categoriesContainerTitle__1j1kl"
};


/***/ })

};
;