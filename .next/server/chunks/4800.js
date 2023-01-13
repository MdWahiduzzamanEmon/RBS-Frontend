exports.id = 4800;
exports.ids = [4800];
exports.modules = {

/***/ 4800:
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
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9253);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8800);
/* harmony import */ var _WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const WhyUsBanner = ({
  whyUsData
}) => {
  const {
    title,
    description,
    video
  } = whyUsData;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().banner)}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerContainer)} container-xl`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerTitleContainer)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
            className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerTitle)}`,
            children: title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
            className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerDescription)}`,
            children: description
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerImageContainer)}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_iframe__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: video,
            alt: "video",
            width: "100%",
            height: "400px",
            objectFit: "contain",
            className: `${(_WhyUsBanner_module_css__WEBPACK_IMPORTED_MODULE_5___default().bannerImage)}`
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhyUsBanner);

/***/ }),

/***/ 8800:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "WhyUsBanner_banner__pom_S",
	"bannerContainer": "WhyUsBanner_bannerContainer__YNm2J",
	"bannerTitleContainer": "WhyUsBanner_bannerTitleContainer__821uL",
	"bannerTitle": "WhyUsBanner_bannerTitle__lQDLy",
	"bannerDescription": "WhyUsBanner_bannerDescription__9vwa6",
	"bannerButtonContainer": "WhyUsBanner_bannerButtonContainer___YGNd",
	"bannerButtonLeft": "WhyUsBanner_bannerButtonLeft__DyBaS",
	"bannerButtonRight": "WhyUsBanner_bannerButtonRight__dGayY",
	"bannerImageContainer": "WhyUsBanner_bannerImageContainer__4l5j_",
	"bannerImage": "WhyUsBanner_bannerImage__HIvw3"
};


/***/ })

};
;