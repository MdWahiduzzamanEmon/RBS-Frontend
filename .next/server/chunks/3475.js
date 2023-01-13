exports.id = 3475;
exports.ids = [3475];
exports.modules = {

/***/ 3475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9253);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home5th_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4778);
/* harmony import */ var _Home5th_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home5th_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Home5th = ({
  home5thData
}) => {
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    aos__WEBPACK_IMPORTED_MODULE_0___default().init({
      duration: 1400,
      easing: "ease-in-out-quart"
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: {
      // fontFamily: "open sans",
      display: home5thData?.isShow ? "block" : "none",
      // backgroundImage:
      //   "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
      padding: "50px 0 130px"
    },
    className: "",
    children: [home5thData?.titleData?.map((data, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      "data-aos": "fade-down",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        className: "text-center fw-bold mb-4",
        children: data?.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: `${(_Home5th_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingDescription)} text-center mb-5 px-2`,
        children: data?.description
      })]
    }, data?.id)), home5thData?.videos?.map((data, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      style: {
        display: data?.isShow ? "block" : "none"
      },
      "data-aos": "fade-up",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "d-flex d-items-center container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((react_iframe__WEBPACK_IMPORTED_MODULE_2___default()), {
          url: data?.video,
          width: "100%",
          height: "450px",
          id: "myId",
          className: "myClassname",
          display: "initial",
          position: "relative"
        })
      })
    }, data?.id))]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home5th);

/***/ }),

/***/ 4778:
/***/ ((module) => {

// Exports
module.exports = {
	"headingDescription": "Home5th_headingDescription__RTuck"
};


/***/ })

};
;