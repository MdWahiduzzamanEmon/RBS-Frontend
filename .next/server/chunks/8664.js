exports.id = 8664;
exports.ids = [8664];
exports.modules = {

/***/ 8664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home2nd_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8843);
/* harmony import */ var _Home2nd_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Home2nd_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__]);
swiper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Home2nd = ({
  home2ndData
}) => {
  // const [isSSR, setIsSSR] = React.useState(true);
  // SwiperCore.use([Autoplay]);
  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);
  // useEffect(() => {
  //   Aos.init({
  //     duration: 2000,
  //     easing: "ease-in-out-quart",
  //   });
  // }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    style: {
      backgroundImage: "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      padding: "50px 0"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container  mx-auto",
      style: {
        fontFamily: "Poppins",
        display: home2ndData?.isShow ? "block" : "none"
      },
      children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        style: {
          display: home2ndData?.titleData?.isShow ? "block" : "none"
        },
        className: `${(_Home2nd_module_css__WEBPACK_IMPORTED_MODULE_5___default().description)}`,
        children: home2ndData?.titleData?.titleItems?.map(data => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          "data-aos": "zoom-out-right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
            className: "fs-2 text-center fw-bold mb-3",
            children: [data.title, " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: "text-center fs-6 mb-5",
            children: [data.titleDescription, " "]
          })]
        }, data.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "row row-cols-2 row-cols-md-5 g-4 justify-content-center text-center",
        children: home2ndData?.cardItem?.items.map(card => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          "data-aos": "zoom-out-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Card, {
            className: " card shadow-lg rounded",
            style: {
              backgroundImage: `url(${card?.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backgroundBlendMode: "multiply",
              height: "80px",
              color: "white",
              fontSize: "15px"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: " m-auto",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
                className: "p-3 fs-6 ",
                children: card?.title
              })
            })
          })
        }, card.id))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home2nd);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8843:
/***/ ((module) => {

// Exports
module.exports = {
	"description": "Home2nd_description__an3uW",
	"btnColor": "Home2nd_btnColor__sss29",
	"link": "Home2nd_link__s8S0h"
};


/***/ })

};
;