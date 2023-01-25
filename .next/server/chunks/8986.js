exports.id = 8986;
exports.ids = [8986];
exports.modules = {

/***/ 8986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3388);
/* harmony import */ var _ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // Import Swiper styles









const ScrollFeatures = ({
  items
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    style: {
      padding: "50px 0 130px" // backgroundImage:
      //   "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",

    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container-lg",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
          className: `${(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default().scrollFeaturesContainerTitle)}`,
          children: items?.scrollFeatures?.title
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
          slidesPerView: 4,
          spaceBetween: 10,
          pagination: true,
          modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination],
          className: "mySwiper",
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          },
          children: items?.scrollFeatures?.features?.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
              direction: "vertical",
              className: `${(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default().sFeatureContainer)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: item.image,
                alt: item.title,
                width: 200,
                height: 150,
                layout: "responsive",
                objectFit: "cover",
                className: `${(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default().sFeatureContainerImage)}`
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                className: `${(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default().sFeatureContainerTitle)}`,
                children: item.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                className: `${(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default().sFeatureContainerDescription)}`,
                children: item.description
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: `/allFeatures/${item.name}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                  className: `${(_ScrollFeatures_module_css__WEBPACK_IMPORTED_MODULE_6___default().sFeatureContainerButton)}`,
                  children: "Read More"
                })
              })]
            }, item.id)
          }, item.id))
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollFeatures);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3388:
/***/ ((module) => {

// Exports
module.exports = {
	"scrollFeaturesContainerTitle": "ScrollFeatures_scrollFeaturesContainerTitle__GmXFP",
	"sFeatureContainer": "ScrollFeatures_sFeatureContainer__bx8qA",
	"sFeatureContainerTitleAndButton": "ScrollFeatures_sFeatureContainerTitleAndButton__RZqrT",
	"sFeatureContainerTitle": "ScrollFeatures_sFeatureContainerTitle__VHVxS",
	"sFeatureContainerDescription": "ScrollFeatures_sFeatureContainerDescription___cOOR",
	"sFeatureContainerButton": "ScrollFeatures_sFeatureContainerButton__g7RiX"
};


/***/ })

};
;