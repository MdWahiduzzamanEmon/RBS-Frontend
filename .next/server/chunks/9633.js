"use strict";
exports.id = 9633;
exports.ids = [9633];
exports.modules = {

/***/ 8225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeColorOfCircleCheck = keyPointId => {
  switch (keyPointId) {
    case 1:
      {
        return "#00D2D2";
      }

    case 2:
      {
        return "#FF9900";
      }

    case 3:
      {
        return "#FF7575";
      }

    case 4:
      {
        return "#3E6D9C";
      }

    case 5:
      {
        return "#557153";
      }

    default:
      {
        return "#D36B00";
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeColorOfCircleCheck);

/***/ }),

/***/ 9633:
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
/* harmony import */ var _components_utility_functions_changeColorOfCircleCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8225);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ProjectManagement = ({
  projectManagementData
}) => {
  const {
    id,
    title,
    description,
    keyPoints,
    image
  } = projectManagementData;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "",
    style: {
      // backgroundImage:
      //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      // background: "linear-gradient(55deg, #24c6dc 0%,#140c1f 100%)",
      padding: "50px 0 130px" // fontFamily: "Poppins",
      // fontFamily: "open sans",

    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "d-flex flex-column flex-lg-row align-items-center container-lg gap-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "w-100 w-lg-50",
        "data-aos": "zoom-in-down",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()) // key={data.id}
        , {
          src: image,
          alt: " ",
          objectFit: "cover",
          width: 500,
          height: 450,
          layout: "responsive",
          className: "rounded-5 p-2"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "w-100 w-lg-50",
        "data-aos": "zoom-in-down",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
            className: "fw-bold  mb-3",
            children: title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            className: "fs-6 mb-4",
            style: {
              // color: "rgb(75, 101, 126)",
              textAlign: "justify"
            },
            children: description
          }), keyPoints?.map((keyPoint, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
              className: "fs-5 fw-bold d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "me-2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheckCircle,
                  color: (0,_components_utility_functions_changeColorOfCircleCheck__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keyPoint.id)
                })
              }), keyPoint?.title]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
              className: "fs-6",
              style: {
                // color: "rgb(75, 101, 126)",
                textAlign: "justify"
              },
              children: keyPoint?.description
            })]
          }, keyPoint.id))]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManagement);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;