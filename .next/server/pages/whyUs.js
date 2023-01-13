"use strict";
(() => {
var exports = {};
exports.id = 6526;
exports.ids = [6526,541,2937,8612,9863,8197,7848,3315,217,5563,8513];
exports.modules = {

/***/ 9183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ whyUs),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Blog/LargeSubscriptionBanner/LargeSubscriptionBanner.js + 2 modules
var LargeSubscriptionBanner = __webpack_require__(6171);
;// CONCATENATED MODULE: ./public/JSON/whyUs/whyUs.js
const whyUsDemoData = {
  banner: {
    id: 1,
    title: "Why Us?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
    video: "https://www.youtube.com/embed/Jk-JwtScIlw"
  },
  bookingDemo: {
    id: 1,
    title: "Use our demo before buying",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aspernatur nostrum enim, cupiditate distinctio veniam.",
    image: "/bookingImage.png"
  },
  testimonialsList: {
    title: "What our clients say",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
    categories: [{
      id: 1,
      title: "Time Management"
    }, {
      id: 2,
      title: "Project Management"
    }, {
      id: 3,
      title: "Task Management"
    }, {
      id: 4,
      title: "Team Management"
    }, {
      id: 5,
      title: "Reporting"
    }, {
      id: 6,
      title: "Customization"
    }, {
      id: 7,
      title: "Integrations"
    }, {
      id: 8,
      title: "All Features"
    }],
    testimonials: [{
      id: 1,
      category: "Time Management",
      title: "loreum ipsum1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Lennon"
    }, {
      id: 2,
      category: "Project Management",
      title: "loreum ipsum2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Crise"
    }, {
      id: 3,
      category: "Team Management",
      title: "loreum ipsum3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }, {
      id: 4,
      title: "loreum ipsum4",
      category: "Project Management",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }, {
      id: 5,
      category: "Reporting",
      title: "loreum ipsum5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }, {
      id: 6,
      title: "loreum ipsum6",
      category: "Customization",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }, {
      id: 7,
      title: "loreum ipsum7",
      category: "Integrations",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }, {
      id: 8,
      title: "loreum ipsum8",
      category: "Task Management",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }, {
      id: 9,
      title: "loreum ipsum9",
      category: "Time Management",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga?",
      // image: '/testimonialImage.png',
      name: "John Doe"
    }]
  }
};
// EXTERNAL MODULE: ./pages/whyUs/components/BookingDemo/BookingDemo.js
var BookingDemo = __webpack_require__(6838);
// EXTERNAL MODULE: ./pages/whyUs/components/Testimonials/Testimonials.js
var Testimonials = __webpack_require__(40);
// EXTERNAL MODULE: ./pages/whyUs/components/WhyUsBanner/WhyUsBanner.js
var WhyUsBanner = __webpack_require__(4800);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/whyUs/index.js








const getStaticProps = async () => {
  return {
    props: {
      whyUsData: whyUsDemoData
    }
  };
};

const WhyUs = ({
  whyUsData
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    style: {
      backgroundImage: "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
      // fontFamily: "open sans",
      fontFamily: "Ubuntu"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(WhyUsBanner["default"], {
      whyUsData: whyUsData?.banner
    }), /*#__PURE__*/jsx_runtime_.jsx(BookingDemo["default"], {
      bookingDemoData: whyUsData?.bookingDemo
    }), /*#__PURE__*/jsx_runtime_.jsx(Testimonials["default"], {
      testimonialsData: whyUsData?.testimonialsList
    }), /*#__PURE__*/jsx_runtime_.jsx(LargeSubscriptionBanner/* default */.Z, {})]
  });
};

/* harmony default export */ const whyUs = (WhyUs);

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9253:
/***/ ((module) => {

module.exports = require("react-iframe");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3121,1563,5675,2383,1664,6171,5494,8076,9698,6838,4800,40], () => (__webpack_exec__(9183)));
module.exports = __webpack_exports__;

})();