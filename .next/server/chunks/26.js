exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 26:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_gradient_image_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7721);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var _Home8th_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3294);
/* harmony import */ var _Home8th_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Home8th_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_image_online_communication_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7097);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Home8th = ({
  home8thData
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    aos__WEBPACK_IMPORTED_MODULE_5___default().init({
      duration: 1500,
      easing: "ease-in-out-quart"
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("section", {
    className: `${(_Home8th_module_css__WEBPACK_IMPORTED_MODULE_8___default().sectionStyles)}`,
    style: {
      backgroundImage: `url(${_public_gradient_image_1_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"].src */ .Z.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      display: home8thData?.isShow ? "block" : "none",
      padding: "50px 0 130px" // backgroundColor: "rgb(226, 246, 254)",
      // fontFamily: "open sans",

    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: " container-lg",
      children: home8thData?.items?.map((data, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        // className="row row-cols-1 row-cols-md-1 row-cols-lg-2 align-items-center "
        className: "d-flex flex-column flex-lg-row align-items-center  gap-5",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          "data-aos": "zoom-in-right",
          className: "w-100 w-lg-50",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
            src: _public_image_online_communication_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            alt: " ",
            objectFit: "contain",
            width: 500,
            height: 450,
            layout: "responsive",
            className: "rounded-5 "
          }, data?.id)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          "data-aos": "zoom-in-right",
          className: "w-100 w-lg-50",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h1", {
            className: "fw-bold mt-3 mb-3",
            children: data.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: "fs-6 mb-4",
            style: {
              textAlign: "justify"
            },
            children: data.titleDescription
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
              className: "fs-5 fw-bold d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: "me-2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleCheck,
                  color: "#00D2D2"
                })
              }), data.subTitle1]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "fs-6",
              style: {
                textAlign: "justify"
              },
              children: data.subTitleDescription1
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
              className: "fs-5 fw-bold d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: "me-2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleCheck,
                  color: "#FF9900"
                })
              }), data.subTitle2]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "fs-6",
              style: {
                textAlign: "justify"
              },
              children: data.subTitleDescription2
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
              className: "fs-5 fw-bold d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: "me-2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleCheck,
                  color: "#FF7575"
                })
              }), data.subTitle3]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: "fs-6",
              style: {
                textAlign: "justify"
              },
              children: data.subTitleDescription3
            })]
          })]
        })]
      }, index))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home8th);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3294:
/***/ ((module) => {

// Exports
module.exports = {
	"sectionStyle": "Home8th_sectionStyle__tZZLe",
	"buttonGradient": "Home8th_buttonGradient__vEXnj",
	"dotImage": "Home8th_dotImage__lZgED",
	"middleImage": "Home8th_middleImage__ikzDn",
	"topImage": "Home8th_topImage__pYTNw",
	"bottomImage": "Home8th_bottomImage__fI3VU",
	"checkImage": "Home8th_checkImage__n_mHE"
};


/***/ }),

/***/ 7721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/gradient-image-1.cadd4b40.png","height":1639,"width":2817,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUyNIQyNYS1RJQyAAAAAnRSTlMLAntpdd8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAbSURBVHicY2BkZGBgYASTYABngEUh4mAGkAUAAX4AEidovKgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 7097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/online-communication.b843e05d.png","height":1131,"width":1260,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAQlBMVEW5zuimvs+Asseitd7J2Oirx+a/zdqzyunB1Oqlv+PLvZWjwfSBkZDDwrqYpdjO0NOdra+zqnuhv7vqv37HuqeFldyUF33kAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOElEQVR4nAXBBwLAIAwDsQMCduhe//9qJTI9ttEKks/reQu4rnPegaOPo1SjRcoIgK40H6Jj2v4DNpMBkFDxh+gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});

/***/ })

};
;