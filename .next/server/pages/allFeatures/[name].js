(() => {
var exports = {};
exports.id = 3016;
exports.ids = [3016,541,8612,4740,2937,9863,7848,8197,5563,8513,3315];
exports.modules = {

/***/ 7846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5384);
/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Blog_LargeSubscriptionBanner_LargeSubscriptionBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6171);
/* harmony import */ var _public_JSON_allFeatures_allFeatures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8586);
/* harmony import */ var _components_ScrollFeatures_ScrollFeatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8986);
/* harmony import */ var _SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8577);
/* harmony import */ var _SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ScrollFeatures_ScrollFeatures__WEBPACK_IMPORTED_MODULE_6__]);
_components_ScrollFeatures_ScrollFeatures__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const getStaticPaths = async () => {
  const paths = _public_JSON_allFeatures_allFeatures__WEBPACK_IMPORTED_MODULE_5__/* .allFeaturesDemoData.map */ .X.map(feature => ({
    params: {
      name: feature.name.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const featuresData = _public_JSON_allFeatures_allFeatures__WEBPACK_IMPORTED_MODULE_5__/* .allFeaturesDemoData.filter */ .X.filter(feature => feature.name.toString() === params.name);
  return {
    props: {
      feature: featuresData
    }
  };
};

const SingleFeature = ({
  feature
}) => {
  const [stepId, setStepId] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("section", {
    className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().container)}` // style={{ fontFamily: "open sans" }}
    ,
    style: {
      backgroundImage: "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )" // backgroundImage:
      //   "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",

    },
    children: feature.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerContainer)} container-xl flex-md-column flex-sm-column flex-lg-row flex-column align-items-center justify-content-center`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerTop)} text-justify`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerPath)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link_js__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/allFeatures",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerPathLeft)}`,
                  children: "Features"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                style: {
                  color: "#888fb1"
                },
                children: " / "
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerPathRight)}`,
                children: item.banner.title
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerTitle)}`,
              children: item.banner.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerDetails)}`,
              children: item.banner.description
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerBottom)}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("video", {
              autoPlay: true,
              loop: true,
              muted: true,
              src: item?.banner?.video,
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().bannerInnerContainerVideo)}`
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeatures)} container-xl`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesTitleContainer)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesTitle)}`,
              children: item.details.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesInfos)}`,
              children: item.details.description
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesImage)}`,
            children: item.details.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              src: item?.details?.image,
              alt: "",
              width: 1200,
              height: 600
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesList)}`,
            children: item.details?.featuresDetails?.map(sFeature => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h5", {
                className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesListTitle)}`,
                children: sFeature.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().largeImageWithFeaturesListDetails)}`,
                children: sFeature.description
              })]
            }, sFeature.id))
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsContainer)} container-lg`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsContainerTitle)}`,
            children: item.tutorials.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsStepsContainer)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsStepsAccordionContainer)}`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
                defaultActiveKey: "1",
                flush: true,
                className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsStepsAccordion)}`,
                children: item.tutorials.steps.map(step => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Item, {
                  eventKey: `${step.id}`,
                  className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsStepsAccordionItem)}`,
                  onClick: () => setStepId(step.id),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Header, {
                    className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsStepsTitle)}`,
                    children: step.title
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Body, {
                    className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsStepsDescription)}`,
                    children: step.description
                  })]
                }, step.id))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsImageContainer)}`,
              children: [item.tutorials.steps[0].image && !stepId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: item.tutorials.steps[0].image,
                alt: "",
                width: 500,
                height: 500,
                className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsImage)}`
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                children: item.tutorials.steps.map(sImage => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
                  children: sImage.id === stepId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                    src: sImage.image,
                    alt: "",
                    width: 500,
                    height: 500,
                    className: `${(_SingleFeature_module_css__WEBPACK_IMPORTED_MODULE_8___default().tutorialsImage)}`
                  }, sImage.id)
                }))
              })]
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ScrollFeatures_ScrollFeatures__WEBPACK_IMPORTED_MODULE_6__["default"], {
        items: item
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_Blog_LargeSubscriptionBanner_LargeSubscriptionBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
    }, item.id))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleFeature);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8577:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SingleFeature_container__PEIH2",
	"title": "SingleFeature_title__OIyxE",
	"bannerContainer": "SingleFeature_bannerContainer__Xcr4o",
	"bannerInnerContainerTop": "SingleFeature_bannerInnerContainerTop__3NT5E",
	"bannerInnerContainerPath": "SingleFeature_bannerInnerContainerPath__65RI1",
	"bannerInnerContainerPathLeft": "SingleFeature_bannerInnerContainerPathLeft__AcHVw",
	"bannerInnerContainerPathRight": "SingleFeature_bannerInnerContainerPathRight__TFOmr",
	"bannerInnerContainerTitle": "SingleFeature_bannerInnerContainerTitle__0ZGEA",
	"bannerInnerContainerDetails": "SingleFeature_bannerInnerContainerDetails__gX7Py",
	"bannerInnerContainerBottom": "SingleFeature_bannerInnerContainerBottom__ECAaR",
	"bannerInnerContainerVideo": "SingleFeature_bannerInnerContainerVideo__7lEAu",
	"largeImageWithFeatures": "SingleFeature_largeImageWithFeatures__09D_l",
	"largeImageWithFeaturesTitleContainer": "SingleFeature_largeImageWithFeaturesTitleContainer__u2ZJq",
	"largeImageWithFeaturesTitle": "SingleFeature_largeImageWithFeaturesTitle__96Gjh",
	"largeImageWithFeaturesInfos": "SingleFeature_largeImageWithFeaturesInfos__K96UI",
	"largeImageWithFeaturesImage": "SingleFeature_largeImageWithFeaturesImage__niugH",
	"largeImageWithFeaturesList": "SingleFeature_largeImageWithFeaturesList__Dm7RO",
	"largeImageWithFeaturesListTitle": "SingleFeature_largeImageWithFeaturesListTitle__40AYs",
	"largeImageWithFeaturesListDetails": "SingleFeature_largeImageWithFeaturesListDetails__8WMik",
	"tutorialsContainer": "SingleFeature_tutorialsContainer__8GYB4",
	"tutorialsContainerTitle": "SingleFeature_tutorialsContainerTitle__o_blh",
	"tutorialsStepsContainer": "SingleFeature_tutorialsStepsContainer__mvD9I",
	"tutorialsStepsAccordionContainer": "SingleFeature_tutorialsStepsAccordionContainer___627i",
	"tutorialsStepsAccordion": "SingleFeature_tutorialsStepsAccordion__fhMFU",
	"tutorialsStepsTitle": "SingleFeature_tutorialsStepsTitle__Jyz74",
	"tutorialsStepsDescription": "SingleFeature_tutorialsStepsDescription__s6sig",
	"tutorialsImageContainer": "SingleFeature_tutorialsImageContainer__r6td0",
	"tutorialsImage": "SingleFeature_tutorialsImage__RrrKb"
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 5384:
/***/ ((module) => {

"use strict";
module.exports = require("next/link.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,1563,5675,2383,1664,6171,8586,8986], () => (__webpack_exec__(7846)));
module.exports = __webpack_exports__;

})();