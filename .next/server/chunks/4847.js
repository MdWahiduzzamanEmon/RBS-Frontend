exports.id = 4847;
exports.ids = [4847];
exports.modules = {

/***/ 4847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Banner_Banner)
});

// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/SmallBanner/SmallBanner.js






const SmallBanner = () => {
  return /*#__PURE__*/_jsx("section", {
    children: /*#__PURE__*/_jsx("div", {
      className: `${styles.smallBannerContainer} container-xl`,
      children: /*#__PURE__*/_jsxs("div", {
        className: `${styles.textContainer}`,
        children: [/*#__PURE__*/_jsxs("div", {
          className: `${styles.smallBannerText}`,
          children: [/*#__PURE__*/_jsx("span", {
            className: `${styles.smallBannerSubText1}`,
            children: "Replace Your Expensive Project Management Software:"
          }), /*#__PURE__*/_jsx("div", {
            style: {
              margin: "2px"
            }
          }), /*#__PURE__*/_jsxs("span", {
            children: ["One", /*#__PURE__*/_jsx("span", {
              className: `${styles.smallBannerSubText2}`,
              children: "Software"
            }), ", ", /*#__PURE__*/_jsx("br", {}), "one", /*#__PURE__*/_jsx("span", {
              className: `${styles.smallBannerSubText3}`,
              children: "Company"
            }), ",", /*#__PURE__*/_jsx("span", {
              className: `${styles.smallBannerSubText4}`,
              children: "unlimited"
            }), "users,", /*#__PURE__*/_jsx("span", {
              className: `${styles.smallBannerSubText5}`,
              children: "unlimited"
            }), "features ", /*#__PURE__*/_jsx("br", {}), "and", /*#__PURE__*/_jsx("span", {
              className: `${styles.smallBannerSubText3}`,
              children: "unlimited"
            }), "opportunities."]
          })]
        }), /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx(Link, {
            href: "/pricing",
            children: /*#__PURE__*/_jsx("button", {
              className: `${styles.smallBannerButton}`,
              children: "Get Started"
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ const SmallBanner_SmallBanner = ((/* unused pure expression or super */ null && (SmallBanner)));
;// CONCATENATED MODULE: ./public/JSON/banner.js
const banner = {
  id: 1,
  isShow: true,
  items: [{
    id: 1,
    isShow: true,
    title: "<span>Control Your</span> <span style='color:#0F0'>TIME</span> And <span style='color: #0f0'>FINANCE<span/>",
    // ,Be the best project manager!
    // title1: "Control Your ",
    // blueText1: "TIME",
    // title2: "And <span>FINANCE/span>",
    title2: "Be the <span style='color: #0f0'>best</span> project manager!",
    blueText2: "best",
    title4: "project manager!",
    primaryDescription: "Nothing will be happened without your approval, everything is in your hand.",
    secondaryDescription: "Control your resource, control your cost, control your project & make your profit maximum.",
    tertiaryDescription: "Yes, You are the BOSS."
  }]
}; // export const banner = {
//   id: 1,
//   isShow: true,
//   items: [
//     {
//       id: 1,
//       isShow: true,
//       title: "Be the best project manager!",
//       primaryDescription:
//         "# Nothing will be happened without your approval, everything is in your hand.",
//       secondaryDescription:
//         "# Control your resource, control your cost, control your project & make your profit maximum.",
//       tertiaryDescription: "# Yes, You are the BOSS.",
//     },
//   ],
// };
// EXTERNAL MODULE: ./styles/Banner.module.css
var Banner_module = __webpack_require__(1917);
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);
;// CONCATENATED MODULE: ./svgComponents/ApprovalIcon.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ApprovalIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"
  })
}));

/* harmony default export */ const svgComponents_ApprovalIcon = (ApprovalIcon);
;// CONCATENATED MODULE: ./svgComponents/BossIcon.jsx
function BossIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function BossIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? BossIcon_ownKeys(Object(source), !0).forEach(function (key) { BossIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : BossIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function BossIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const BossIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", BossIcon_objectSpread(BossIcon_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0zm-14.9 359.2-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2h39.5c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z"
  })
}));

/* harmony default export */ const svgComponents_BossIcon = (BossIcon);
;// CONCATENATED MODULE: ./svgComponents/SettingIcon.jsx
function SettingIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SettingIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SettingIcon_ownKeys(Object(source), !0).forEach(function (key) { SettingIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SettingIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SettingIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SettingIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", SettingIcon_objectSpread(SettingIcon_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M78.6 5c-9.5-7.4-23-6.5-31.6 2L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4H158l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3L192 158v-54c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1 0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l117.8-117.8c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16v-57.5c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0c-79.5 0-144 64.5-144 144v.8l85.3 85.3c36-9.1 75.8.5 104 28.7l15.7 15.7c49-23 83-72.8 83-130.5zM104 432c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z"
  })
}));

/* harmony default export */ const svgComponents_SettingIcon = (SettingIcon);
;// CONCATENATED MODULE: ./public/video/corporateVideo.gif
/* harmony default export */ const corporateVideo = ({"src":"/_next/static/media/corporateVideo.38b49354.gif","height":411,"width":516});
;// CONCATENATED MODULE: ./pages/Home/Banner/Banner.js
// import bannerImage from "../../../public/banner/cover2.jpg";
// import bannerImageVector from "../../../public/banner/backgroundVector.png";













const Banner = ({
  bannerImagesData
}) => {
  const bannerData = banner;
  external_react_default().useEffect(() => {
    external_aos_default().init({
      duration: 1000,
      easing: "ease-in-out-quart"
    });
  }, []); //get banner detail api

  const marqueeTextDemo = [{
    id: 1,
    text: "It's not a project management tool, It's completely  a project management software"
  }];

  function createMarkup(c) {
    // let formattedText = c.replace({ divStyle }, { divStyle });
    return {
      __html: c
    };
  }

  const divStyle = {
    color: "blue" // backgroundImage: 'url(' + imgUrl + ')',

  };
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    style: {
      backgroundImage: "linear-gradient(to right, #24c6dc, #514a9d)"
    } // style={{
    //   backgroundImage:
    //     "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
    // }}
    // className="container"
    ,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(Banner_module_default()).bannerWidth}  `,
      style: {
        // backgroundImage: "linear-gradient(to right, #140C1F, #140C1F)",
        // `url(${bannerImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "35% 18%" // clipPath: "polygon(0 0, 100% 0, 100% 100%, 81% 90%, 0 100%, 0% 50%)",

      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(Banner_module_default()).overlay}`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          paddingTop: "70px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("video", {
          src: "/video/backgroundAdVideo4.mp4",
          autoPlay: true,
          loop: true,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          } // controls
          ,
          muted: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          color: "#fff"
        },
        className: "container"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(Banner_module_default()).bannerContent} container `,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: bannerData?.items?.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: `${(Banner_module_default()).secondaryHeading}`,
                style: {
                  // fontSize: "44px",
                  // fontFamily: "Work Sans",
                  textAlign: "center" // fontWeight: 200,

                },
                "data-aos": "fade-down",
                dangerouslySetInnerHTML: createMarkup(item?.title)
              }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                // className="fw-bold mb-5 "
                style: {
                  // fontSize: "70px",
                  //  color: "#000000",
                  // fontFamily: "Work Sans",
                  textAlign: "center"
                },
                className: `${(Banner_module_default()).primaryHeading}`,
                dangerouslySetInnerHTML: createMarkup(item?.title2),
                "data-aos": "fade-down"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                style: {
                  fontSize: "16px"
                },
                className: `${(Banner_module_default()).row} g-4`,
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                  sm: 12,
                  md: 12,
                  lg: 4,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    style: {
                      border: "1px solid #0f0"
                    },
                    className: `${(Banner_module_default()).rowColumn}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(svgComponents_ApprovalIcon, {
                        fill: "#0f0",
                        height: "20px",
                        width: "20px"
                      })
                    }), item?.primaryDescription]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                  sm: 12,
                  md: 12,
                  lg: 4,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    style: {
                      border: "1px solid #f0f"
                    },
                    className: `${(Banner_module_default()).rowColumn}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(svgComponents_SettingIcon, {
                        fill: "#f0f",
                        height: "20px",
                        width: "20px"
                      })
                    }), item?.secondaryDescription]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                  sm: 12,
                  md: 12,
                  lg: 4,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    style: {
                      border: "1px solid #0ff"
                    },
                    className: `${(Banner_module_default()).rowColumn}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(svgComponents_BossIcon, {
                        fill: "#0ff",
                        height: "20px",
                        width: "20px"
                      })
                    }), item?.tertiaryDescription]
                  })
                })]
              })]
            }, item?.id))
          })
        })
      })]
    })
  });
};

/* harmony default export */ const Banner_Banner = (Banner);

/***/ }),

/***/ 1917:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerWidth": "Banner_bannerWidth__eweq6",
	"overlay": "Banner_overlay__fijIs",
	"primaryHeading": "Banner_primaryHeading__vqx0j",
	"secondaryHeading": "Banner_secondaryHeading__GwuVc",
	"bannerContent": "Banner_bannerContent__5PVxp",
	"row": "Banner_row__3G8IR",
	"rowColumn": "Banner_rowColumn__IGOdb",
	"slideImg": "Banner_slideImg__4iOBZ",
	"buttonGradientOutline": "Banner_buttonGradientOutline__cRiyn"
};


/***/ })

};
;