"use strict";
exports.id = 1100;
exports.ids = [1100];
exports.modules = {

/***/ 1100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_image_customizable_task_board_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4888);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Home3rd = ({
  home3rdData
}) => {
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    aos__WEBPACK_IMPORTED_MODULE_4___default().init({
      duration: 1500,
      easing: "ease-in-out-quart"
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    style: {
      // fontFamily: "open sans",
      // background: "#50577A",
      // background: "#41475E",
      // background: "#2A2B36",
      // background: "linear-gradient(55deg, #47E2D0 0%,#47BDE2 100%)",
      // color: "#50577A",
      // background: "#E7F8FD",
      padding: "130px 0"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "d-flex flex-column-reverse flex-lg-row align-items-center container-lg gap-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: " w-100 w-lg-50",
        "data-aos": "zoom-in-down",
        children: home3rdData?.items?.map((data, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
            className: " fw-bold mb-3",
            children: data?.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: "fs-6 mb-4",
            style: {
              // color: "rgba(255, 255, 255, 0.8)",
              // color: "rgb(75, 101, 126)",
              textAlign: "justify"
            },
            children: data?.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
            className: "fs-5 fw-bold d-flex align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "me-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheckCircle,
                color: "#00D2D2"
              })
            }), data?.subTitle1]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: "fs-6",
            style: {
              // color: "rgb(75, 101, 126)",
              // color: "#000",
              textAlign: "justify"
            },
            children: data?.subTitle1Description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
            className: "fs-5 fw-bold d-flex align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "me-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheckCircle,
                color: "#FF9900"
              })
            }), data?.subTitle2]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: "fs-6",
            style: {
              // color: "rgb(75, 101, 126)",
              // color: "#000",
              textAlign: "justify"
            },
            children: data?.subTitle2Description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
            className: "fs-5 fw-bold d-flex align-items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "me-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheckCircle,
                color: "#FF7575"
              })
            }), data?.subTitle3]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: "fs-6 ",
            style: {
              // color: "rgb(75, 101, 126)",
              textAlign: "justify"
            },
            children: data?.subTitle3Description
          })]
        }, data?.id))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: " w-100 w-lg-50",
        "data-aos": "zoom-in-down",
        children: home3rdData?.items?.map((data, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
          src: data.image,
          alt: " ",
          objectFit: "contain",
          width: 500,
          height: 450,
          layout: "responsive",
          className: "rounded-5 p-2"
        }, data?.id))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home3rd);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4888:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/customizable-task-board.511af3a7.png","height":1131,"width":1260,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAoklEQVR42gUASQ6CMLD/9wU+wSeoB+PF6EHc4lIE26ldoUhtoYZEwaAcuFOaC7kHQ3QhtHzXRddUCBPeGzNei/mZn1OyuBldOO9qdMQsCLUhNVhPn9r5GJtojUSMmxAaU752SUKlbT5d673kDF1IXlmbMXlPca6cqFqpSgBAsw2eJuDaOAzDrYijJT1gShlDk2U63RLnQ//7qiqsTo9LBtcc/ig3lPNe5knyAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});

/***/ })

};
;