"use strict";
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Home9thSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2301);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__, _Home9thSlider__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__, _Home9thSlider__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Home9th = ({
  home9thData
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    aos__WEBPACK_IMPORTED_MODULE_4___default().init({
      duration: 2000,
      easing: "ease-in-out-quart"
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    style: {
      // backgroundImage:
      //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      padding: "50px 0px 130px" // fontFamily: "open sans",

    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: " container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
          className: "text-center fw-bold  m-auto",
          style: {
            width: "80%"
          },
          "data-aos": "zoom-out",
          children: home9thData?.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "my-5 gap-5 pt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
            className: "d-flex justify-content-md-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
              xs: 12,
              md: 12,
              lg: 5,
              children: home9thData?.items?.map((data, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                  className: " shadow-lg rounded-3 me-md-5 ",
                  "data-aos": "zoom-in-up",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    className: "text-center pt-3 ps-3",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle,
                    size: "2x",
                    color: "#00D2D2"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    className: " fs-6 p-3 ",
                    children: data?.subTitle1
                  }), " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                  className: "shadow-lg rounded-3 mx-md-5",
                  style: {
                    backgroundColor: "#1D2333"
                  },
                  "data-aos": "zoom-in-up",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    className: "text-center pt-3 ps-3",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle,
                    size: "2x",
                    color: "#FF9900"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    className: " fs-6 p-3 text-white ",
                    children: data?.subTitle2
                  }), " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                  className: " shadow-lg rounded-3 me-md-5",
                  "data-aos": "zoom-in-up",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    className: "text-center pt-3 ps-3",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle,
                    size: "2x",
                    color: "#FF7575"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    className: " fs-6 p-3 ",
                    children: data?.subTitle3
                  }), " "]
                })]
              }, data.id))
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
              xs: 12,
              md: 12,
              lg: 7,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Home9thSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
                sliderData: home9thData?.pics
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home9th);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;