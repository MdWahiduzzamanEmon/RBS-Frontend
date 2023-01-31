exports.id = 6171;
exports.ids = [6171];
exports.modules = {

/***/ 6171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LargeSubscriptionBanner_LargeSubscriptionBanner)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Blog/LargeSubscriptionBanner/LargeSubscriptionBanner.module.css
var LargeSubscriptionBanner_module = __webpack_require__(9722);
var LargeSubscriptionBanner_module_default = /*#__PURE__*/__webpack_require__.n(LargeSubscriptionBanner_module);
;// CONCATENATED MODULE: ./public/largeSubscriptionBanner.png
/* harmony default export */ const largeSubscriptionBanner = ({"src":"/_next/static/media/largeSubscriptionBanner.d2eb7c28.png","height":970,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAbFBMVEXqqGHT3uvT79zc8vGM0v+WxPPKzumGxvGgt86Y4/2mxuqb0/+HyfuRq9f/x1+HufOtvbO/6/+vsMHZ4sKzoLa4ytGQzfyo2OuY7raNp999qrlvyK7o+PjhyaHb4u2Wx/+7z85+lMK6r552nZxytgkCAAAAHHRSTlMC/vb9K/v9Svwe3+Sd9q3riuDP7/vbFcb26/ecQb6FFAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUeJwFwQcCQDAQAMFFKqJ3l2j//6MZ8MrWFliqMrjYgJqzlMfBs76mkOnp2T4jct0j57Fr3bruB0JwAvN3kcvtAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./svgComponents/largeSubscriptionSvg.js
const _excluded = (/* unused pure expression or super */ null && (["fill", "stroke"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LargeSubscriptionSvg = _ref => {
  let {
    fill,
    stroke
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("svg", _objectSpread(_objectSpread({
    width: "100%",
    height: 700,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/_jsxs("g", {
      fill: "#4FACF7",
      children: [/*#__PURE__*/_jsx("circle", {
        r: 199,
        cx: 310,
        cy: 258
      }), /*#__PURE__*/_jsx("circle", {
        r: 87,
        cx: 861,
        cy: 8
      }), /*#__PURE__*/_jsx("circle", {
        r: 138,
        cx: 797,
        cy: 429
      })]
    })
  }));
};

/* harmony default export */ const largeSubscriptionSvg = ((/* unused pure expression or super */ null && (LargeSubscriptionSvg)));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Blog/LargeSubscriptionBanner/LargeSubscriptionBanner.js









const LargeSubscriptionBanner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(LargeSubscriptionBanner_module_default()).subscriptionContainer}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(LargeSubscriptionBanner_module_default()).subscriptionInnerContainer} container-lg`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(LargeSubscriptionBanner_module_default()).subscriptionImageContainer}`,
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: largeSubscriptionBanner,
            alt: "image",
            width: 550,
            height: 450,
            layout: "responsive",
            objectFit: "contain",
            className: `${(LargeSubscriptionBanner_module_default()).subscriptionImage}`
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${(LargeSubscriptionBanner_module_default()).subscriptionTextContainer}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
            className: `${(LargeSubscriptionBanner_module_default()).subscriptionTitle}`,
            children: ["Get Started ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " With", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: `${(LargeSubscriptionBanner_module_default()).subscriptionTitleSpan}`,
              children: "Vitlous"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${(LargeSubscriptionBanner_module_default()).subscriptionDescription}`,
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, praesentium placeat rerum odio quibusdam perferendis."
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/pricing",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: `${(LargeSubscriptionBanner_module_default()).subscriptionButton}`,
              children: "Get started free"
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const LargeSubscriptionBanner_LargeSubscriptionBanner = (LargeSubscriptionBanner);

/***/ }),

/***/ 9722:
/***/ ((module) => {

// Exports
module.exports = {
	"subscriptionContainer": "LargeSubscriptionBanner_subscriptionContainer__ZlFtf",
	"subscriptionInnerContainer": "LargeSubscriptionBanner_subscriptionInnerContainer__uEyli",
	"subscriptionImageContainer": "LargeSubscriptionBanner_subscriptionImageContainer__4zAtK",
	"subscriptionTextContainer": "LargeSubscriptionBanner_subscriptionTextContainer__i9o_X",
	"subscriptionTitle": "LargeSubscriptionBanner_subscriptionTitle__TYUaG",
	"subscriptionTitleSpan": "LargeSubscriptionBanner_subscriptionTitleSpan__eKBqT",
	"subscriptionContainerSVG": "LargeSubscriptionBanner_subscriptionContainerSVG__uGvEl",
	"subscriptionButton": "LargeSubscriptionBanner_subscriptionButton__JhOBe"
};


/***/ })

};
;