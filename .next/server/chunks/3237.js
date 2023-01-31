exports.id = 3237;
exports.ids = [3237];
exports.modules = {

/***/ 5338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_functions_changeColorOfCircleCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8225);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const FinancialManagement = ({
  financialManagementData
}) => {
  const {
    id,
    title,
    description,
    keyPoints,
    image
  } = financialManagementData;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "",
    style: {
      // backgroundImage:
      //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      padding: "50px 0 130px" // fontFamily: "open sans",

    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "d-flex flex-column flex-lg-row-reverse align-items-center container-lg gap-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "w-100 w-lg-50",
        "data-aos": "zoom-in-down",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()) // key={data.id}
        , {
          src: image,
          alt: " ",
          objectFit: "cover",
          width: 500,
          height: 450,
          layout: "responsive",
          className: "rounded-5 p-2"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "w-100 w-lg-50",
        "data-aos": "zoom-in-down",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
            className: "fw-bold mb-3",
            children: title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
            className: "fs-6 mb-4",
            style: {
              // color: "rgb(75, 101, 126)",
              textAlign: "justify"
            },
            children: description
          }), keyPoints?.map((keyPoint, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
              className: "fs-5 fw-bold d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "me-2",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheckCircle,
                  color: (0,_utility_functions_changeColorOfCircleCheck__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(keyPoint.id)
                })
              }), keyPoint?.title]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinancialManagement);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ManagePlatform_js_ManagePlatform)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./pages/Home/Home7th/Home7th.js
var Home7th = __webpack_require__(7603);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ManagePlatform.js/mpComponents/EngineeringTeam.js



const EngineeringTeam = () => {
  return /*#__PURE__*/_jsx("div", {});
};

/* harmony default export */ const mpComponents_EngineeringTeam = ((/* unused pure expression or super */ null && (EngineeringTeam)));
;// CONCATENATED MODULE: ./reducers/managePlatformReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const managePlatformReducer_initialStateMp = {
  firstSubmenuOpen: false,
  secondSubmenuOpen: false
};
const managePlatformReducer_managePlatformReducer = (state = managePlatformReducer_initialStateMp, action) => {
  switch (action.type) {
    case "OPEN_FIRST_SUBMENU":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          firstSubmenuOpen: action.payload.firstSubmenuOpen,
          secondSubmenuOpen: action.payload.secondSubmenuOpen
        });
      }

    case "OPEN_SECOND_SUBMENU":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          firstSubmenuOpen: action.payload.firstSubmenuOpen,
          secondSubmenuOpen: action.payload.secondSubmenuOpen
        });
      }

    default:
      {
        return state;
      }
  }
};
;// CONCATENATED MODULE: ./components/ManagePlatform.js/CVerticalTab/CVerticalTab.js









const CVerticalTab = ({
  cVerticalTabData
}) => {
  console.log(cVerticalTabData);
  const [state, dispatch] = React.useReducer(managePlatformReducer, initialStateMp);
  console.log(state); // const [fistSubmenuOpen, setFirstSubmenuOpen] = React.useState(false);
  //************* For showing submenu details************* */

  const handleOpenSubmenu = eventKey => {
    if (eventKey === "first") {
      dispatch({
        type: "OPEN_FIRST_SUBMENU",
        payload: {
          firstSubmenuOpen: true,
          secondSubmenuOpen: false
        }
      });
    } else if (eventKey === "second") {
      dispatch({
        type: "OPEN_SECOND_SUBMENU",
        payload: {
          firstSubmenuOpen: false,
          secondSubmenuOpen: true
        }
      });
    }
  }; //******************************************** */


  const changeBackgroundColor = eventKey => {
    if (eventKey === "first") {
      return `${styles.submenuDetailsContainer}`;
    } else if (eventKey === "second") {
      return `${styles.submenuDetailsContainer2}`;
    }
  };

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("style", {
      children: `
           .tab-content>.active  {height:550px; padding-left: 0px; padding-right: 20px;   
          }

           .nav-pills .nav-link.active {
            color: #2a75d1;
            background-color: rgb(249, 236, 248);
            transition: all.5s ease-in;
           }

           .nav-pills .nav-item  {
                position: relative;
           }
            
    
           .nav-pills .nav-item .nav-link::before {
                content: "";
                position: absolute;
                left:0;
                top: 46px;
                height: 2px;
                width: 0%;
                background-color: #2a75d1;
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: transform 0.5s ease-in-out;
            }

            .nav-pills .nav-item .nav-link:not(.active):hover::before {
                content: "";
                position: absolute;
                left:0;
                top: 46px;
                height: 2px;
                width: 100%;
                background-color: #2a75d1;
                transform: scaleX(1);
                transform-origin: bottom left;
                transition: transform 0.5s ease-in-out;
            }

            @media (max-width: 600px){
              .tab-content>.active {

                height: 320px;
                margin: 0 auto;
              }


            }

           
        `
    }), /*#__PURE__*/_jsx(Tab.Container, {
      id: "left-tabs-example",
      defaultActiveKey: "first",
      children: /*#__PURE__*/_jsxs(Row, {
        style: {
          gap: "0px"
        },
        children: [/*#__PURE__*/_jsx(Col, {
          sm: 12,
          md: 9,
          children: /*#__PURE__*/_jsx(Tab.Content, {
            children: cVerticalTabData?.submenus?.map(data => /*#__PURE__*/_jsx(Tab.Pane, {
              eventKey: data.eventKey,
              style: {
                backgroundColor: "#fff",
                padding: "30px" // height: "550px",

              },
              children: /*#__PURE__*/_jsxs(_Fragment, {
                children: [data.eventKey === "first" && /*#__PURE__*/_jsx(Image, {
                  src: data?.images?.src,
                  height: 250 // width={300}
                  ,
                  alt: "tabImage" // height={300}
                  ,
                  width: 500,
                  layout: "responsive",
                  objectFit: "cover"
                }), data.eventKey === "second" && /*#__PURE__*/_jsx(Image, {
                  src: data?.images?.src,
                  height: 250 // width={300}
                  ,
                  alt: "tabImage" // height={300}
                  ,
                  width: 500,
                  layout: "responsive",
                  objectFit: "cover"
                })]
              })
            }, data.id))
          })
        }), /*#__PURE__*/_jsx(Col, {
          sm: 12,
          md: 3,
          children: cVerticalTabData?.submenus?.map(data => /*#__PURE__*/_jsx(Nav, {
            variant: "pills",
            className: "flex-column",
            style: {
              marginTop: "30px"
            },
            children: /*#__PURE__*/_jsx("div", {
              children: /*#__PURE__*/_jsx(Nav.Item, {
                onClick: () => {
                  handleOpenSubmenu(data.eventKey);
                  console.log(data.eventKey);
                },
                style: {
                  display: "inline-block"
                },
                children: /*#__PURE__*/_jsx(Nav.Link, {
                  eventKey: data.eventKey,
                  children: /*#__PURE__*/_jsxs("div", {
                    onClick: e => console.log(e.target.innerText),
                    children: [/*#__PURE__*/_jsx("h6", {
                      children: data.title
                    }), data.eventKey === "first" && !state?.secondSubmenuOpen && /*#__PURE__*/_jsx("div", {
                      style: {
                        color: "#000"
                      },
                      children: /*#__PURE__*/_jsx("p", {
                        children: data.description
                      })
                    }), state?.secondSubmenuOpen && data.eventKey === "second" && /*#__PURE__*/_jsx("div", {
                      style: {
                        color: "#000"
                      },
                      children: /*#__PURE__*/_jsx("p", {
                        children: data.description
                      })
                    })]
                  })
                })
              })
            })
          }, data.id))
        })]
      })
    })]
  });
};

/* harmony default export */ const CVerticalTab_CVerticalTab = ((/* unused pure expression or super */ null && (CVerticalTab)));
// EXTERNAL MODULE: ./components/ManagePlatform.js/ManagePlatform.module.css
var ManagePlatform_module = __webpack_require__(9563);
var ManagePlatform_module_default = /*#__PURE__*/__webpack_require__.n(ManagePlatform_module);
;// CONCATENATED MODULE: ./public/image/todoBoard5.png
/* harmony default export */ const todoBoard5 = ({"src":"/_next/static/media/todoBoard5.a997f903.png","height":510,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEX///8JDAzIycrg3+C2t7gaFhXBw8T3+PjP0NLX1dfq6+05Oz74+fpOTlBbWlqWlpbgvKlTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMUlEQVR4nB3JyQ0AIAwEsdmQhBv67xaJnyWzvbdebHIawBDTqYsilB+B7Fega5nm8QAabwDgTEViAQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./components/ManagePlatform.js/managePlatformDetailInformation/ManagePlatformDetailInformation.module.css
var ManagePlatformDetailInformation_module = __webpack_require__(9570);
var ManagePlatformDetailInformation_module_default = /*#__PURE__*/__webpack_require__.n(ManagePlatformDetailInformation_module);
;// CONCATENATED MODULE: ./public/image/construction2.png
/* harmony default export */ const construction2 = ({"src":"/_next/static/media/construction2.5b54e993.png","height":720,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEXv7erR1dfLwKrm28bm6+rs5djm49319vf19PPz8e7EzdHovp261tfS3+LczdC809+6srrs3cvz8+Hy5rDvmYvhzaPs04rTx8Hd4+LH5e2qyMXy3tjkzLukpbflzsfIwcOLXYU9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBBwKAIAwEsAMKbdnurf//pQlYVERYEMDjtDjBAE6rszuCx1yP1mAstjM+BUpEuX8KH/P1UrrhTQG01x9ecALGhPH7jQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/ManagePlatform.js/managePlatformDetailInformation/ManagePlatformDetailInformation.js







const ManagePlatformDetailInformation = ({
  platformInformation
}) => {
  const {
    pics
  } = platformInformation;
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(ManagePlatformDetailInformation_module_default()).container}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(ManagePlatformDetailInformation_module_default()).imageContainer}`,
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: pics,
          alt: "",
          width: 500,
          height: 300,
          layout: "responsive",
          objectFit: "cover"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(ManagePlatformDetailInformation_module_default()).dataContainer}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: `${(ManagePlatformDetailInformation_module_default()).description}`,
          children: platformInformation?.description?.title
        }), platformInformation?.description?.items?.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "ps-5",
          children: ["- ", item.title]
        }, item.id))]
      })]
    })
  });
};

/* harmony default export */ const managePlatformDetailInformation_ManagePlatformDetailInformation = (ManagePlatformDetailInformation);
;// CONCATENATED MODULE: ./components/ManagePlatform.js/ManagePlatform.js













const ManagePlatform = ({
  managePlatformData
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      style: {// background: "linear-gradient(55deg, #24c6dc 0%,#140c1f 100%)",
        // background: "rgb(226, 246, 254)",
        // fontFamily: "open sans",
        // marginBottom: "200px",
      },
      className: `${(ManagePlatform_module_default()).managePlatformContainer}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          "data-aos": "zoom-in-down",
          children: [managePlatformData?.titleData?.map((data, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-center fw-bold my-3",
              children: data?.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-center mb-5",
              style: {
                fontSize: "20px"
              },
              children: data?.description
            })]
          }, data?.id)), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tabs, {
            defaultActiveKey: "engineering-team",
            id: "fill-tab-example",
            fill: true // style={{ color: "#2a75d1" }}
            ,
            className: `${(ManagePlatform_module_default()).managePlatformTabs}` // style={{}}
            // data-aos="zoom-out-down"
            ,
            children: managePlatformData?.items?.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Tab, {
              eventKey: data.eventKey,
              title: data.title,
              className: `${(ManagePlatform_module_default()).managePlatformTab}`,
              children: /*#__PURE__*/jsx_runtime_.jsx(managePlatformDetailInformation_ManagePlatformDetailInformation, {
                platformInformation: data
              })
            }, data.id))
          })]
        })
      })
    })
  });
};

/* harmony default export */ const ManagePlatform_js_ManagePlatform = (ManagePlatform);

/***/ }),

/***/ 427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OneSoftware_OneSoftware)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/OneSoftware/OneSoftware.module.css
var OneSoftware_module = __webpack_require__(317);
var OneSoftware_module_default = /*#__PURE__*/__webpack_require__.n(OneSoftware_module);
;// CONCATENATED MODULE: ./public/oneSoftwareImage.png
/* harmony default export */ const oneSoftwareImage = ({"src":"/_next/static/media/oneSoftwareImage.3bc3e9fa.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEXY1tWijIafoaH9/f6RjYrv6ujDw8a1tLbl6evDvLqfl5MJDhCpqa2ktLl2bGdvZ2WvkodQNCq7pJrp8/YiIiHa2drpDPhVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMElEQVR4nAXBhwEAIAgDsCog4J7/v2oCLoU9VUbM2aCeYAI7LSo0uGD3gfuIZK7wARq1AUtCprDqAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/OneSoftware/OneSoftware.js







const OneSoftware = () => {
  const [email, setEmail] = external_react_default().useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setEmail("");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${(OneSoftware_module_default()).container}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(OneSoftware_module_default()).imageContainer}`,
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: oneSoftwareImage,
        alt: "one software image",
        width: 400,
        height: 300,
        layout: "fill"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(OneSoftware_module_default()).overlay}`
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(OneSoftware_module_default()).textContainer}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: `${(OneSoftware_module_default()).title}`,
        children: "Replace Your Expensive Project Management Software:"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: `${(OneSoftware_module_default()).highlightedTitle}`,
        children: ["One", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `${(OneSoftware_module_default()).highlightedTitleColored1}`,
          children: "Software"
        }), ",", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " one", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `${(OneSoftware_module_default()).highlightedTitleColored2}`,
          children: "Company"
        }), ",", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `${(OneSoftware_module_default()).highlightedTitleColored3}`,
          children: "Unlimited"
        }), "users,", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `${(OneSoftware_module_default()).highlightedTitleColored4}`,
          children: "Unlimited"
        }), "features ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " and", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `${(OneSoftware_module_default()).highlightedTitleColored5}`,
          children: "Unlimited"
        }), "opportunities."]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: `${(OneSoftware_module_default()).submitContainer}`,
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: `${(OneSoftware_module_default()).emailField}`,
          value: email,
          placeholder: "Enter your email",
          onChange: e => setEmail(e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: `${(OneSoftware_module_default()).smallBannerButton}`,
          type: "submit",
          children: "Submit Now"
        })]
      })]
    })]
  });
};

/* harmony default export */ const OneSoftware_OneSoftware = (OneSoftware);

/***/ }),

/***/ 9655:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4563);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_footer_image1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2053);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const PurchaseCard = ({
  purchaseCardData
}) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1400,
      easing: "ease-in-out-quart"
    });
  }, []);
  return /*#__PURE__*/_jsx("section", {
    style: {
      backgroundImage: "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      padding: "50px 0"
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        display: purchaseCardData?.isShow ? "block" : "none"
      },
      children: purchaseCardData?.items?.map((data, index) => /*#__PURE__*/_jsx(Card, {
        className: `${purchaseStyles.gradientBackground}  container-lg px-5 py-5 overflow-hidden border-0`,
        // data-aos="fade-down-left"
        "data-aos": "fade-down" // data-aos-duration="1000"
        ,
        children: /*#__PURE__*/_jsxs("div", {
          className: "position-relative ",
          children: [/*#__PURE__*/_jsx("div", {
            className: "overflow-hidden",
            children: /*#__PURE__*/_jsx("div", {
              className: `${purchaseStyles.imagePosition} position-absolute d-none d-lg-block`,
              children: /*#__PURE__*/_jsx(Image, {
                src: hoverImage,
                alt: "",
                className: "img-fluid"
              })
            })
          }), /*#__PURE__*/_jsx("p", {
            className: "fs-3 fw-bold text-white",
            children: data?.title
          }), /*#__PURE__*/_jsx("p", {
            className: "fs-3 fw-bold text-white",
            children: data?.subTitle
          }), /*#__PURE__*/_jsx(Link, {
            href: "/pricing",
            children: /*#__PURE__*/_jsxs("button", {
              className: ` ${purchaseStyles.footerButton} border-0 px-3 py-2 rounded-1`,
              children: ["To know more ", /*#__PURE__*/_jsx(FontAwesomeIcon, {
                icon: faArrowRight
              })]
            })
          })]
        })
      }, data?.id))
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PurchaseCard)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8284:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const CircularMotion = () => {
  return /*#__PURE__*/_jsx("section", {
    className: `${styles.body}`,
    children: /*#__PURE__*/_jsxs("div", {
      className: `${styles.primaryCircle}`,
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          className: `${styles.pCircle1} d-flex align-items-center justify-content-center `,
          children: "Approachable"
        }), /*#__PURE__*/_jsx("div", {
          className: `${styles.pCircle2} d-flex align-items-center justify-content-center `,
          children: "Caring"
        }), /*#__PURE__*/_jsx("div", {
          className: `${styles.pCircle3} d-flex align-items-center justify-content-center `,
          children: "Transparent"
        }), /*#__PURE__*/_jsx("div", {
          className: `${styles.pCircle4} d-flex align-items-center justify-content-center `,
          children: "Leader"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: `${styles.secondaryCircle}`,
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("div", {
            className: `${styles.sCircle1} d-flex align-items-center justify-content-center `,
            children: "Passionate"
          }), /*#__PURE__*/_jsx("div", {
            className: `${styles.sCircle2} d-flex align-items-center justify-content-center `,
            children: "Motivating"
          }), /*#__PURE__*/_jsx("div", {
            className: `${styles.sCircle3} d-flex align-items-center justify-content-center `,
            children: "Authentic"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: `${styles.tertiaryCircle}`,
          children: /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("div", {
              className: `${styles.tCircle1} d-flex align-items-center justify-content-center `,
              children: "Coach"
            }), /*#__PURE__*/_jsx("div", {
              className: `${styles.tCircle2} d-flex align-items-center justify-content-center `,
              children: "Mentor"
            })]
          })
        })]
      })]
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CircularMotion)));

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ featuresBoard_FeaturesBoard)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/JSON/home2ndJson.js
const home2ndJson = {
  id: 1,
  isShow: true,
  titleData: {
    id: 1,
    isShow: true,
    titleItems: [{
      id: 1,
      isShow: true,
      title: "Speed Up Your Workflow",
      titleDescription: "Boost your team's performance, accelerate growth, and enhance customer experience with our software's rich and comprehensive features."
    }]
  },
  cardItem: {
    id: 1,
    isShow: true,
    items: [{
      id: 1,
      isShow: true,
      title: "Agile Methodology",
      img: __webpack_require__(6468),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 2,
      isShow: true,
      title: "Project Management",
      img: __webpack_require__(8057),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 3,
      isShow: true,
      title: "Collaboration",
      img: __webpack_require__(1362),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 4,
      isShow: true,
      title: "Resource Management",
      img: __webpack_require__(1754),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 5,
      isShow: true,
      title: "Time Management",
      img: __webpack_require__(7451),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 6,
      isShow: true,
      title: "Plan View",
      img: __webpack_require__(5990),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 7,
      isShow: true,
      title: "Document Management",
      img: __webpack_require__(4961),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 8,
      isShow: true,
      title: "Issue Tracking",
      img: __webpack_require__(985),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 9,
      isShow: true,
      title: "Budget Management",
      img: __webpack_require__(3552),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 10,
      isShow: true,
      title: "Financial Management",
      img: __webpack_require__(4053),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 11,
      isShow: true,
      title: "Chat Communication",
      img: __webpack_require__(5854),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 12,
      isShow: true,
      title: "informative Dashboard",
      // title: "Very informative Dashboard",
      img: __webpack_require__(8174),
      description: "This is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow)."
    }, {
      id: 13,
      isShow: true,
      title: "Kanban Board",
      img: __webpack_require__(1684),
      description: "Offers a simple, manageable approach to access management that is less prone to error than assigning permissions to users individually."
    }, {
      id: 14,
      isShow: true,
      title: "Gantt Chart",
      img: __webpack_require__(4131),
      description: "A Gantt chart is a type of bar chart that illustrates a project schedule, Gantt charts also show the dependency relationships between activities and the current schedule status."
    }, {
      id: 15,
      isShow: true,
      title: "Calendar view",
      img: __webpack_require__(7991),
      description: "It lets a user view and interact with a calendar that they can navigate by month, year, or decade."
    }, {
      id: 16,
      isShow: true,
      title: "Vendor/Contractor Control Panel",
      img: __webpack_require__(1465),
      description: "Organizations use to manage vendors and monitor projects which are developing by them."
    }, {
      id: 17,
      isShow: true,
      title: "In depth Program Management System",
      img: __webpack_require__(8057),
      description: "That shows the detail overview of the project, tasks, expense, income, budget, loss-profit briefly."
    }, {
      id: 18,
      isShow: true,
      title: "In depth Task  Management System",
      img: __webpack_require__(2355),
      description: "That shows the detail overview of the project, tasks, expense, income, budget, loss-profit briefly."
    }, // {
    //   id: 19,
    //   isShow: true,
    //   title: "Document Management System",
    //   img: require("../image/workflowImages/DocumentManagement.png"),
    //   description:
    //     "That helps to store, manage, and track electronic documents and electronic images of paper-based information captured.",
    // },
    {
      id: 19,
      isShow: true,
      title: "User Role Based Permission ",
      img: __webpack_require__(309),
      description: "Shows actionable and useful information at a glance of complex data and helps stakeholders understand, analyze, and present key insights."
    }, {
      id: 20,
      isShow: true,
      title: "Client Control Panel",
      img: __webpack_require__(3940),
      description: "Our client control panel enables our customers to login to their account 24 hours a day, 7 days a week to monitor the project in detail."
    }, {
      id: 21,
      isShow: true,
      title: "Approval Management System",
      img: __webpack_require__(2),
      description: "That helps organizations reduce operational costs and improve employee satisfaction by approval workflow automation, and process visibility."
    }, {
      id: 22,
      isShow: true,
      title: "Project Budget Management System",
      img: __webpack_require__(3552),
      description: "A project without a budget is like a car without fuel. creating a project budget and helping those wheels spin will most likely be your full responsibility."
    }, {
      id: 23,
      isShow: true,
      title: "Budget & Cost Comparison",
      img: __webpack_require__(9535),
      description: "It will help you to monitor your expense in regard to budget that will make direct impact to make maximum profit."
    }, {
      id: 24,
      isShow: true,
      title: "Project-Discussion",
      img: __webpack_require__(3592),
      description: "An effective discussion informs members what can be done in next which contains the results and outcomes of the project."
    }, {
      id: 25,
      isShow: true,
      title: "Task-Discussion",
      img: __webpack_require__(694),
      description: "Create discussions about your tasks and projects to improve team collaboration for the ongoing & next tasks."
    }, {
      id: 26,
      isShow: true,
      title: "Task-Budget Management System",
      img: __webpack_require__(1147),
      description: "View your task's budget in hours or money. Keep track of your progress as you work and ensure your finances don't take you by surprise."
    }, // {
    //   id: 27,
    //   isShow: true,
    //   title: "Issue Tracking Management System",
    //   img: require("../image/workflowImages/IssueTrackingManagementSystem.png"),
    //   description:
    //     "That allows users to record and follow the progress of every “ticket” or 'issue' until the problem is resolved.",
    // },
    {
      id: 27,
      isShow: true,
      title: "One 2 One & One 2 Many Chat",
      img: __webpack_require__(5854),
      description: "This is easier when working together in the same physical office space or communicating remotely or working with freelancers around the world?"
    }, // {
    //   id: 28,
    //   isShow: true,
    //   title: "Resource management System",
    //   img: require("../image/workflowImages/ResourceManagementSystem.png"),
    //   description:
    //     "This is the well practice of planning, scheduling, and allocating people, money, and technology to a project or program.",
    // },
    {
      id: 28,
      isShow: true,
      title: "Work Board Check List",
      img: __webpack_require__(1501),
      description: "The Checklist Item of Kanban Board enables you to visualize all of your Checklist Items based on their current ‘Status’."
    }, {
      id: 29,
      isShow: true,
      title: "Time Tracking Management System",
      img: __webpack_require__(7451),
      description: "It helps to track a time that will save you and your company precious time - and money."
    }, {
      id: 30,
      isShow: true,
      title: "Requisition Management System",
      img: __webpack_require__(2722),
      description: "It helps the process of creating, processing, authorizing, and tracking purchase requests within an organization."
    }, {
      id: 31,
      isShow: true,
      title: "Expense Management System",
      img: __webpack_require__(4631),
      description: "It helps the systems deployed by a business to process, pay, and audit employee-initiated expenses."
    }, {
      id: 32,
      isShow: true,
      title: "Income Management System",
      img: __webpack_require__(4053),
      description: "Effectively manage your income stream with our all-in-one financial management solution."
    }, {
      id: 33,
      isShow: true,
      title: "Invoice Management System",
      img: __webpack_require__(982),
      description: "It has been designed to automate your accounts receivable process. Connect and sync invoices and start chasing down unpaid bills."
    }, {
      id: 34,
      isShow: true,
      title: "VAT -TAX Management System",
      img: __webpack_require__(5642),
      description: "The Tax Management module provides organizations with centralized tax configuration, management, and reporting."
    }, {
      id: 35,
      isShow: true,
      title: "LOS-Profit Management System",
      img: __webpack_require__(8638),
      description: "It helps to manage income and expenses to ensure that a business earns a net operating profit."
    }, {
      id: 36,
      isShow: true,
      title: "All types of Approval",
      img: __webpack_require__(6879),
      description: "It provides a system to manage approval workflow transparently, effectively, and accurately."
    }]
  }
};
// EXTERNAL MODULE: ./components/featuresBoard/FeaturesBoard.module.css
var FeaturesBoard_module = __webpack_require__(9358);
var FeaturesBoard_module_default = /*#__PURE__*/__webpack_require__.n(FeaturesBoard_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/featuresBoard/FeaturesBoard.js







const featuresData = home2ndJson;

const FeaturesBoard = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    style: {
      fontFamily: "Ubuntu",
      // fontFamily: "open sans",
      padding: "130px 0",
      // backgroundImage:
      //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      // backgroundImage: "linear-gradient(45deg, #0192bc 0%, #44f3c9 100%)",
      // backgroundImage: "linear-gradient(to right, #24c6dc, #514a9d)",
      background: "linear-gradient(55deg, #24c6dc 0%,#140c1f 100%)"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(FeaturesBoard_module_default()).description} container-lg`,
      children: featuresData?.titleData?.titleItems?.map(data => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        "data-aos": "zoom-out-right",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "mb-3 text-center" //className="fs-3 text-center fw-bold mb-3 "
          ,
          style: {
            // fontSize: "35px",
            // fontFamily: "Fjalla One",
            color: "#fff" // color: "#140C1F",

          },
          children: [data.title, " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-center fs-6 mb-5 text-white  ",
          style: {
            // color: "#e5e5e5",
            ///color: "#140C1F",
            opacity: "0.8"
          },
          children: [data.titleDescription, " "]
        })]
      }, data.id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center text-center" // data-layout="masonry"
        // style="overflow: visible"
        ,
        children: featuresData?.cardItem?.items.slice(0, 12).map(card => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4 col-lg-3 mb-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              minHeight: "100px"
            } //  className={`${styles.card}`}
            ,
            children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: card.img,
              alt: "Picture of the author",
              width: 60,
              height: 60,
              style: {
                borderRadius: "50%"
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "fs-6 fw-bold mt-3 text-capitalize  ",
              style: {
                // color: "#140C1F",
                color: "#fff" // fontFamily: "open sans",

              },
              children: card.title
            })]
          })
        }, Math.random()))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(FeaturesBoard_module_default()).featureButtonWrapper}`,
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/allFeatures",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: `${(FeaturesBoard_module_default()).featureBoardButton}`,
            children: "View All"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const featuresBoard_FeaturesBoard = (FeaturesBoard);

/***/ }),

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2516);
/* harmony import */ var _MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_buttons_CButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(693);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const MiniPricing = ({
  miniPricingData
}) => {
  const changePriceColor = itemName => {
    if (itemName === "Basic") {
      return `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().rateContainerItemPurple)}`;
    } else if (itemName === "Standard") {
      return ` ${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().rateContainerItemBlue)}`;
    } else if (itemName === "Premium") {
      return ` ${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().rateContainerItemGreen)}`;
    } else if (itemName === "Enterprise") {
      return ` ${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().rateContainerItemBlack)}`;
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
    style: {
      // backgroundImage:
      //   "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
      padding: "50px 0 130px"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().miniPricingContainer)} container`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
        className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().miniPricingTitle)} mb-5`,
        "data-aos": "fade-down-right",
        children: miniPricingData.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().planContainer)}`,
        "data-aos": "fade-up-right",
        children: miniPricingData?.packages?.map(plan => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().singlePlan)}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              height: "150px"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
              children: plan.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              style: {
                fontSize: "15px"
              },
              children: plan.details
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().rateContainerMiniPricing)}`,
              children: [plan.title !== "Enterprise" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                className: changePriceColor(plan.title),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("small", {
                  children: plan.price
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().rateContainerRight)}`,
                children: [plan.title === "Basic" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: "mb-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("small", {
                    children: "person/"
                  })
                }), plan.title !== "Basic" && plan.title !== "Enterprise" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: "mb-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("small", {
                    children: "company/"
                  })
                }), plan.title !== "Enterprise" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: "",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("small", {
                    children: "month"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
              className: `${(_MiniPricing_module_css__WEBPACK_IMPORTED_MODULE_6___default().featuresList)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Unlimited User"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Whit Label Branding"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Kanban Board"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Gantt Chart"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Resource Management"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Time Tracking"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Document Management"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                children: "Issue Tracking"
              })]
            })]
          }), plan.title !== "Enterprise" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/pricing",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_utility_buttons_CButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z // className={`${styles.primaryButton} mb-2`}
            , {
              children: "Try for free"
            })
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/contactUs/contactSales",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_utility_buttons_CButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
              children: " Contact us"
            })
          })]
        }, plan.id))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniPricing);

/***/ }),

/***/ 3237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4847);
/* harmony import */ var _Home2nd_Home2nd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8664);
/* harmony import */ var _Home6th_Home6th__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7245);
/* harmony import */ var _Home7th_Home7th__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7603);
/* harmony import */ var _Home3rd_Home3rd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1100);
/* harmony import */ var _Home10th_Home10th__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9601);
/* harmony import */ var _Home9th_Home9th__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(753);
/* harmony import */ var _Home8th_Home8th__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _components_PurchaseCard_PurchaseCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9655);
/* harmony import */ var _Home5th_Home5th__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3475);
/* harmony import */ var _components_ManagePlatform_js_ManagePlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(224);
/* harmony import */ var _components_circularMotion_CircularMotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8284);
/* harmony import */ var _components_miniPricing_MiniPricing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(653);
/* harmony import */ var _components_featuresBoard_FeaturesBoard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(168);
/* harmony import */ var _components_compareBoard_js_CompareBoard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6703);
/* harmony import */ var _ProjectManagement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9633);
/* harmony import */ var _components_FinancialManagement_FinancialManagement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5338);
/* harmony import */ var _components_Blog_LargeSubscriptionBanner_LargeSubscriptionBanner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6171);
/* harmony import */ var _components_OneSoftware_OneSoftware__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(427);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home2nd_Home2nd__WEBPACK_IMPORTED_MODULE_1__, _Home6th_Home6th__WEBPACK_IMPORTED_MODULE_2__, _Home3rd_Home3rd__WEBPACK_IMPORTED_MODULE_4__, _Home10th_Home10th__WEBPACK_IMPORTED_MODULE_5__, _Home9th_Home9th__WEBPACK_IMPORTED_MODULE_6__, _Home8th_Home8th__WEBPACK_IMPORTED_MODULE_7__, _components_PurchaseCard_PurchaseCard__WEBPACK_IMPORTED_MODULE_8__, _ProjectManagement__WEBPACK_IMPORTED_MODULE_15__, _components_FinancialManagement_FinancialManagement__WEBPACK_IMPORTED_MODULE_16__]);
([_Home2nd_Home2nd__WEBPACK_IMPORTED_MODULE_1__, _Home6th_Home6th__WEBPACK_IMPORTED_MODULE_2__, _Home3rd_Home3rd__WEBPACK_IMPORTED_MODULE_4__, _Home10th_Home10th__WEBPACK_IMPORTED_MODULE_5__, _Home9th_Home9th__WEBPACK_IMPORTED_MODULE_6__, _Home8th_Home8th__WEBPACK_IMPORTED_MODULE_7__, _components_PurchaseCard_PurchaseCard__WEBPACK_IMPORTED_MODULE_8__, _ProjectManagement__WEBPACK_IMPORTED_MODULE_15__, _components_FinancialManagement_FinancialManagement__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
 // import Home3rd from "./Home3rd";






















const HomePage = ({
  bannerData,
  bannerImagesData,
  home2ndData,
  home3rdData,
  home5thData,
  projectManagementData,
  home7thData,
  managePlatformData,
  home6thData,
  home8thData,
  home9thData,
  home10thData,
  purchaseCardData,
  miniPricingData,
  featuresData,
  financialManagementData
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Banner_Banner__WEBPACK_IMPORTED_MODULE_0__["default"], {
        bannerData: bannerData,
        bannerImagesData: bannerImagesData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_OneSoftware_OneSoftware__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_featuresBoard_FeaturesBoard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        featuresData: featuresData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Home3rd_Home3rd__WEBPACK_IMPORTED_MODULE_4__["default"], {
        home3rdData: home3rdData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_ProjectManagement__WEBPACK_IMPORTED_MODULE_15__["default"], {
        projectManagementData: projectManagementData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_FinancialManagement_FinancialManagement__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        financialManagementData: financialManagementData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Home8th_Home8th__WEBPACK_IMPORTED_MODULE_7__["default"], {
        home8thData: home8thData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_ManagePlatform_js_ManagePlatform__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        managePlatformData: managePlatformData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Home5th_Home5th__WEBPACK_IMPORTED_MODULE_9__["default"], {
        home5thData: home5thData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_miniPricing_MiniPricing__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        miniPricingData: miniPricingData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_Home9th_Home9th__WEBPACK_IMPORTED_MODULE_6__["default"], {
        home9thData: home9thData
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(_components_Blog_LargeSubscriptionBanner_LargeSubscriptionBanner__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9563:
/***/ ((module) => {

// Exports
module.exports = {
	"managePlatformContainer": "ManagePlatform_managePlatformContainer__d5201",
	"managePlatformTabs": "ManagePlatform_managePlatformTabs__U7h_D"
};


/***/ }),

/***/ 9570:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ManagePlatformDetailInformation_container__Z8F9W",
	"imageContainer": "ManagePlatformDetailInformation_imageContainer___hdsu",
	"dataContainer": "ManagePlatformDetailInformation_dataContainer___B8uA"
};


/***/ }),

/***/ 317:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "OneSoftware_container__r_oMX",
	"imageContainer": "OneSoftware_imageContainer__YpK0k",
	"overlay": "OneSoftware_overlay__HfSFc",
	"textContainer": "OneSoftware_textContainer__yVnm0",
	"title": "OneSoftware_title__kquGb",
	"highlightedTitle": "OneSoftware_highlightedTitle__KeSOV",
	"highlightedTitleColored1": "OneSoftware_highlightedTitleColored1__mcT4O",
	"highlightedTitleColored2": "OneSoftware_highlightedTitleColored2__3hajM",
	"highlightedTitleColored3": "OneSoftware_highlightedTitleColored3___9mfk",
	"highlightedTitleColored4": "OneSoftware_highlightedTitleColored4__c6te4",
	"highlightedTitleColored5": "OneSoftware_highlightedTitleColored5__4ct3d",
	"submitContainer": "OneSoftware_submitContainer__4YCZ_",
	"emailField": "OneSoftware_emailField__J8GAd",
	"smallBannerButton": "OneSoftware_smallBannerButton__0OgIY"
};


/***/ }),

/***/ 9358:
/***/ ((module) => {

// Exports
module.exports = {
	"description": "FeaturesBoard_description__EU_KO",
	"card": "FeaturesBoard_card__Wg5ux",
	"featureButtonWrapper": "FeaturesBoard_featureButtonWrapper__GpPeA",
	"featureBoardButton": "FeaturesBoard_featureBoardButton__aTz5k"
};


/***/ }),

/***/ 2516:
/***/ ((module) => {

// Exports
module.exports = {
	"miniPricingContainer": "MiniPricing_miniPricingContainer__QZlOC",
	"miniPricingTitle": "MiniPricing_miniPricingTitle__Wyby5",
	"planContainer": "MiniPricing_planContainer__gMMZw",
	"singlePlan": "MiniPricing_singlePlan__L8WcK",
	"rateContainerMiniPricing": "MiniPricing_rateContainerMiniPricing__Xx8_c",
	"rateContainerItemBlack": "MiniPricing_rateContainerItemBlack__G7Yf8",
	"rateContainerItemPurple": "MiniPricing_rateContainerItemPurple__aTdlI",
	"rateContainerItemBlue": "MiniPricing_rateContainerItemBlue__OLM0u",
	"rateContainerItemGreen": "MiniPricing_rateContainerItemGreen__VTPdz",
	"rateContainerRight": "MiniPricing_rateContainerRight__dFfnp",
	"primaryButton": "MiniPricing_primaryButton__KNbSE",
	"mPricingLink": "MiniPricing_mPricingLink__ZCMOU",
	"featuresList": "MiniPricing_featuresList__K2oSp"
};


/***/ }),

/***/ 2053:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footer-image1.bdde1b26.png","height":591,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXGjntLl5/j0+v/e3vTo5fTm5vW0sNXm6fXq7/jw8Prq8ffb3vLl6vbi6Pfd3/Li0fHb3O/U1/Dt8Pngwufnud/v6vbbzvKqp9Pl7P3z6fZs6aAkAAAAGXRSTlMAHkn8z5bUBI1o0iA4obmj9mFe7MrYduMRVfLxlAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwVxUcSgCAQAMEhLEuSYCz8/0Mt+9JAkjtXoDwjvBG2o3sJHVKI42qrUnz3Z1s7ak1yYhTAuvynaJzKB1ZOAiB9fTyAAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/AllTypesOfApproval.f3a26e7a.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXDMKHETqrKM6jCN6Lp8vDIM6fw/PXGLaTJK6ZMaXHKM6rY2t1tzzjJxMvOtdKTtHWd0YPH5MXFbLLSpcqNel7Eg7iuVou8Xqi8YKoHV8NHAAAAEnRSTlP6+Cz0/fT8uC8AsP77+P7+/v5YQBVJAAAACXBIWXMAACxLAAAsSwGlPZapAAAAQklEQVR4nA3LRwKAIAwEwCWkUWwBxf+/VOc+KG6AeYGvMcadCRbKuqECwY13CBDaziMJLPjq/amg9K45M6G4ifz9A1RsAmI5RrmUAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ApprovalManagementSystem.255b3fd1.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVQ+MA/6KxQ+r1O9Lg9Xn5N7KtB6a5MaXFP87NP77OYfE1M26WNoa3Ixc/RxMZvhJGHgna6cR2FjYaBYzM0VniWk49Q97lF7K07mpWHw615tJw3rLREsYg7v5xHfm5HfW1Gs4o5s7pAx6w96QpjAAAAGHRSTlMuubj0/Pb3ALP0+/T++P7+/v7+/vj+t7Vf9zp4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAQ0lEQVR4nAXBBQ6AMAAAsZsxxSGZ4P9/JC0W0XUCC77WUjy4L8xDfzpM29cwZY95U1rGZnB501pnB/G5ryOCRSolsT9xxQMjc0fX1gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/BudgetCostComparison.555786f6.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEUCm1cAl1MAnEsYp2QAz3IOvm8Boj4A3ncA0XFMaXFLdjnvKg5zecMAjm41nVP/2S02qlP/wjJtj11kelMAxGtQcWdAWlMskGMBvFUdiFUMjIQos24HjU0rb0eJazg/hpqR1VSPsEk2nG3NSdmFAAAAGXRSTlP79LT69/gtLrgA/vj39f7+/v7+/q/4+P4uCJxUSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAEVJREFUeJwFwQcSwCAIBMBTQSC9Z9T0/z8yuzBRIhWDcPn2wALlNaUNC6hMwJwc6OmHbnwd9Kqr3NweEs4DuY0wUTgf7QdyJQMkejGCpwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Calendar.d6c5ad35.png","height":113,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXviGnvh2fy4Lfx7MtMaXHvkHPuhGTq2czwh2fy7ubsz7PuhWTvimzwrZXtoozwtJ646KEaAAAADXRSTlMq9f78APGu+rX+/rX1rH+OPgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJwFwYkRwCAMBLE9f0AyNv13i0SwpU1Azswk7FnnrCnUn5m10F1m3uJvd/cuyL63E4KSing5ygGOEFRU/wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ClientControlPanel.276edbb8.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEUQ9gATwCwT9wCOcFET+QAd0E9MaXET+wAO/gAS/gA9glcKo3QplXEMjWwjb1dxiEwknDgRelxZeS+uRmRuXjsZx0Ic0jAlskIStUEuoRcwrRb9OunaAAAAFXRSTlMu/rD+9foAuP32/vj++P7+/v7+/v6kdznvAAAACXBIWXMAACxLAAAsSwGlPZapAAAAQklEQVR4nBXLRxaAIAxAwQ8kJNiwgeX+B/U5+yFjpRgZVENoCnbPwzRqpKxbTcslSG9HCl0w93N3jyD+Pi6QMfn7B0ybAi1ULX23AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/DocumentManagement.255e20c7.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVta7hjX55zZ4xiY1BwbbWxknNrabRvbLdMaXFDQFhybrKdhHteYLZlZbdsarQrLEGmejAqMEF+aleFdkn/zVnrulFoZq5kZbxISHBaWZR8b4fZibTeAAAAFnRSTlP1/vz+LP0uuAD8L/vzsDD+/v7+/v7+YgSPyQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAEJJREFUeJwly9sSgCAIBcCjhkBqdoXq/z+0cXrfhSwM8CzIsGCOCexx3eltQNCULqrA3bfjpAp+VEuJbWDzgSX//QNZYAKCwQu7CAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ExpenseManagementSystem.4a24756c.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEW3nFC6j0OwmUqkqbJMaXHfnn10pa25nVC4nVC1l0jtv7b/9up7lJaklpqaflbWlW/xr5f44Z2VeEv/8bq5m0yZk3y9lEqPkGuKlYi3nVKifF/Akk2Wsg/DAAAAFHRSTlMu/LT+AP3+9bb3/v7+9/T++P7+/m2z7r0AAAAJcEhZcwAALEsAACxLAaU9lqkAAABCSURBVHicFctHFoAgDEDBTzMJdgVs97+nj91shoiKKBHEjvIIaEt5dUWxNJ5huqRjH4bb0G/LYX49SHO1LtC7eeIPVgoCZ1ZtuIsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/GanttChart.c84a5942.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX1jG7KiXXuimjsjG5MaXHvjXKcaSrxjW7dhl7zjG6KjY1sTlmseGyhdXragkCJdnWbblF2Y2JraECscVX6kXK9fWvOemnjh2ylk42AepBxAAAAFHRSTlMu+vuvAPr79f24+P7+/v7+/v7+9w9laEYAAAAJcEhZcwAALEsAACxLAaU9lqkAAABASURBVHicDcvHAYAwEASxcWLvyMGB/isF/UXGS3EymJkNgds07bEmVPuyHU0oWjvvLjzM6/XUBOFtowgyLv39A1BnAlTck9oqAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/IncomeManagementSystem.14ca1971.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXPoSmQbx28kiXyuzH/yTRMaXH7wzL7xTP/yzWuhyP+xTP1vjKbeB+jfiHuuTDAlSbdqyzlsi6ngSH8N3Q4AAAAD3RSTlP8/vj2twD1Lvf9sLj++Lk0WEttAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nAXBhwHAIAzAMFMy6Ujg/2MroS42P1c8urpxhJeduYh9njGOEbsqE0P6YlyxcKBqOuq3hbj+SvkB9pz9poAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/InvoiceManagementSystem.10e3876f.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEUoQ1Ls7+7T2uEgPU0yS1k2T13J194lP09MaXEqP05GXmshPU18wLNvg45RZXExR1b/+/6Tx8M4pJNSpJYwSllpfYksVF1ddX4/Z25LJGY6AAAAFXRSTlP6/P4tLfr+twD09C/7/vuv+P7+/roU/zn6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAQklEQVR4nBXKSRKAMAgEwCGBAGZzI/r/l1r2uWFVgZsNeYveRRgaRDQwgSipDAgQqbRrOTT242xr/vl5xRlW1V2zfVFvAnP6fj21AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/IssueTrackingManagementSystem.ae816242.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXZVl2QR005c29bXWMadHsrb3PJUVfTV13QV11MaXGrVlzOTlR0WlE1YWNFWFWWbmVGX1xFQz7yZWs3aWuZV1tpYGWhUFWpTFCqUlhPSZilAAAAFHRSTlMu/P7+/Pz2tfUA9Ln++/7+/vgt/nExl0oAAAAJcEhZcwAALEsAACxLAaU9lqkAAABASURBVHicBcGHEcAwCACxdwVc0g472X/SSBi91o5BWymtBuI55+KCejxKdEX3OK/iioR7zOnCE8K7vwqGqAr2A1KJAmK8/hWVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/KanbanBoard.b8857f68.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVgJ1JFAzT556BnMVlXDTZXBi9XGkhMaXFWET2JX390QmVnMVlyL07///9bFT3/xqHh6fP/gFzR+Prg1JP8yL9YIlFK3P/YyYyY2POpj56/lJx4Tmyah5q8qbSzm69mQl5aFD++fH5+gZ1RBDC0MrU1AAAAGXRSTlP2L/63s/S5AC33/C77/vT4/v74/v62/v7+bSES4AAAAAlwSFlzAAAN1wAADdcBQiibeAAAAEVJREFUeJwFwYUBwDAMAzAXk8IYC+P/f5wEEhawgsDuPFJyjCV3TT9WDTyDnNbXAHmW214NlPeuxKgRcJfrMwwKCq1m+gF4ggNfycL8mgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/LOSProfitManagementSystem.c881b5e5.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVQh7pKb39Gir9NjtpNjb+9MyZKi9RMh8VMaXFOhbc+cphZT29vLktAU3pQhLZTV4Z+KjhUT3tQh7okVx6HSwBMh7d1V2tLfaxeX1M7dG4zambhdnpiAAAAFXRSTlP19PQs+/4vtgAu/v7+/rP4/v65+Pdcr/wkAAAACXBIWXMAACxLAAAsSwGlPZapAAAAQ0lEQVR4nAXBBwKAIAwEsAMqbdmgDP3/Q00gOoiGChSz9wlFodpapQLMnFKeAHaIMWyA3/u6nsNw5lvrGAfxbC17+QFmtQLH7Y+yLQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Permission.ea90bab2.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUmOnkkOXrupSUTEkphVXApO3ohOXsnOnhMaXEOEEsoO3o5T4zOXz9ZTXOtUUHscD68jijTkS3ueVMVGFEFCEkVJmwRD0dOMVIfN3ksO3VBQHBDLkPLG7cCAAAAGHRSTlP1uP4t/rX3LgD9ufj++P7+/vf+87DyuPjj2nqzAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAQElEQVR4nAXBBwKAIAwAsWPZ1r0t8P9/mqASBkZRhNqqIxRf5jZ5Ac9rzhWGdm4x9odQv74f/UZwM7OESuF6k/5qdQMEuXprlQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ProgramManagement.649a8629.png","height":113,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEUft33/2r8dsX97za6/4NH94dWoYp1MaXFHvJj/0eXy8e/338BcxZ/92q8YjYgNkoIJgoJivp6vf50YkIZUo4na0d0ksn9cwp2UvN5Qm4XQ1+/37/+IztZLvKRQwJ2O0ss9upnz8Or/6vQAR3Wkc5P77NfF4OJ1zN2ebJ0buHyM0d9MtsVUAAAAIXRSTlMq/vSuKf77APT78f7y/rXx/vL49q7+ta3+tfgGSLGrPfcyxKjlAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAASElEQVR4nAXBBQKAIAAEsANJu7sQEPX/D3SDRE+bHBKgb2ltAUyuFk48LdTYcX1dFc5wk4T7FFuYSaZNhPW7vTExw3LsSg1M/qM4BN5MbG0MAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ProjectBudgetManagementSystem.a6b3ae65.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX9xTPWmUD/xzPInzb/yDPjpDzaqzP7wzNMaXH+xjO5kkDDmUD2ujffrjPSpTP1wDLotTXXqTPqTepiAAAADXRSTlP1/Lj9L/71tQAs/P77lgYIlQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD5JREFUeJwVxkkSACEIALFWUXAB8f+fnZqcgokeqhgyIiOYaJS+Vircvktp/Dl7JdQ7/DVXJq+5j4lJBRX7AERhAd08y9cJAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ProjectDiscussion.9ea7bb83.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXOtPbVrvFifIVjS0DSsfLVu/+9r+3PtvnOtPZMaXHCo2puZlprV3BeY2zUvIHmzo9baHVrh6qiirtzWHFhf5yMd6GDpNmKseaapNu2n9e/pN6Spdt1aeeeAAAAFXRSTlMuuf7++vb6tfYA/v73/v7+/vj++PjhyWQwAAAACXBIWXMAACxLAAAsSwGlPZapAAAAQUlEQVR4nAXBBwKAIAwAsWOUFnAr4Pj/P03IOBFHBhutjQT6XrXujyJHWNbQhNh9Kb5H1M5tnpKCxe+OBhk1U/IPWr0CdGgBehsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/RequisitionManagementSystem.54b63170.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEUO/QNto6wj5xjV0eYI+QAQ/QAJ/gAH+QBMaXEM8wHkqmi8w8wX+ARD10aExJBFrZx1tslxnoZTkW/xqpTOr3Ij4CBfxXFc0Wwv4ycI/wBdzmBl1nM12TBI0FYqyiFqwEGAuzLDLchfAAAAFnRSTlMu/vn+9fS5tAD5/vu4+P7++P7++P70wMycgQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAERJREFUeJwVy0USgDAQAMGJsRFcEhz+/0qKvjceCbbCgz5yvhaQ0g9xeoRQunGOryVkpUy6HbI2rUlawG1hPy14avf3D2xOAtpsXhWnAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ResourceManagementSystem.ca6dd340.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVP8rZH28A72cFYvcpP57tirdA9xMlO87ZP87ZMaXFO9rVL/LJM+7JS1cFMysZQ7bhey8UTyWklAAAADXRSTlP1+P7++vv+LrgAsC8viVImSQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJwVy8ERwCAIAMFTQcAEsP9qM9n/EubgFhg9Z2O4jL2HHKisygIy18oET1XVPJjc7itGPH9/4wM+vgHi7th4owAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TaskBudgetManagementSystem.dc2267ff.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEWujz6skkni3t/V2ODEolLAoFKxm2hMaXG2l0bIpFPJvLuwkTe9n1GCnJu/k0V8jJiytbKJinfGytGihIeYgT+ZmJCtjz/DkkNleVOlkk1FnnWckG69rYWTeTyxmE2WiWe+tJqCeESZoIJlFvveAAAAGnRSTlO29Pv7Lbj6APUv/i33/vP+/v7+/v7496/49L6crccAAAAJcEhZcwAALEsAACxLAaU9lqkAAABHSURBVHicFcZFEoAwEATAiW4MgksM+f8jKfrUIKtCUJYgWV1aOyXUs471SDtMnhzvUo/tFoP7g8LjLF5AMn3loj3Iwhh4+gCHNQOLQosgMwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TaskDiscussion.3f35595c.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEXHMKfCsa/CSKHKTKrHMabCJ6GOZDVMaXHKLqrFNaXKNq/HK6eMWzt+bVpJmGuGqH+lbWSsh3piwIet2LLQ3rTNxaafdFqge2rLX6/MnbXCXJnMb6+tRoObR1LFdKSySImUP0o83CiyAAAAGHRSTlO2/vT09y/+AC709Sz+/v7+/vj4/vj+/vdcI0feAAAACXBIWXMAACxLAAAsSwGlPZapAAAAQUlEQVR4nAXBhQHAIADAsOI6N2D6/5VLcAatMQ6jqqhVJShzv6wFdBs6sbVAvK3N+YtwTeN+vOBlOZ8mE84TAt79agMDHdXrGQUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TaskManagement.2f148df0.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX3jG6Th5TeiG+HrMP4jW21ioe2g23yimryjW5MaXHD3+/BlFXIiGR+pK6t0OSugIb25uDX8/+WyuTIjoHGl43SimeinaPVkH3I7VEIAAAAE3RSTlMu/vT++v3+tvUA/vj0/v73/v74c6d7GAAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAEBJREFUeJwVy8kBgCAMAMEFAgl4G8D+O1XnP1TURKkQPc9uoJ7TdXfFPOxnm4JJ2VrKho6lhMMV1iFPj/B3+/oLUl0CSbWUwIMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TimeTrackingManagementSystem.5106dff6.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVtbsB1etZdWJGcQytqbb9MaXFfOEZtbbxaUIJxb7zGVUVlX59mZbeRPiSAU21KQmwvIj2ZYTG1kDyRd0lwUXbfrDVmZrpxS2R0Z35hRl9fRmN9bG42MWh8AAAAF3RSTlO4L/z++wD+9f0t/vqw+P74/v7+/vj387+94TMAAAAJcEhZcwAALEsAACxLAaU9lqkAAABDSURBVHicDcvJAYAgDATAJYQcgOINav996vwHKYAZnhCsz72oA8+U48EVaiJirNA75nUbF2Bt2c+3womMRnGkANW/f1POAmJ2KlTwAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/VATTAXManagementSystem.a46cc4c6.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVR87c2xq5C2rFQ8rdQ8bdL6bUvvKlMaXFW+7k2u7pQ8rc7zrEESNiuAAAAC3RSTlP4/P24Lv7+AC/4sKnJqG4AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA2SURBVHicFcvHEQAgEAOx9SWC+++XQX+xdjZZix0RDhUZGtMXYsZ8HkmG9JFOXwraTbEq+f0BJsIBDvlRCdAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/WorkBoardCheckList.c01a135b.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEX/ME/SG0fT2dX7ME7OoIn+MVHts69MaXH+MU+gC0Pa3uf/KVGiD0b6//r/KEqkEESfBUP7xrikEEX/NFL1w7ji8f//KlL+J0rPm2DWzJ7w8sT1ZTf/L0ejCzq1Okf2Tl65S2H9dD/cIkP+SUMigNu/AAAAHHRSTlP18/4s/Lb+AC/0/vew/rgvuPgsr/j+ubn4/v7+/jYtWgAAAAlwSFlzAAAN1wAADdcBQiibeAAAAEhJREFUeJwVxkcSgCAQBMAhuQuomCPB8P8/WvapQbx6vzCBUe7zhYKJ07FvzwjEanY6iT9O6mRhYt9InWoolCtnO4C4FbYL9AGJDQOv0yTdugAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/agile.7b53be6c.png","height":124,"width":124,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX///+37sP7mamx4r2o6q308/2l8aX8/vv91JHn+ufJxu7/+vrVsKqyu/vsz7GQ6pL2usKwq+mY5rT0oKzudYVnu3yulqao16rsN3NgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nCWLRxKAIBDAQt2VpmD7/08dIZfkEkCESfBxm+4u7n+lBMYj1ApmILSnubvYA1V9i73OdZLzBy6MAZR4neWFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/chat.f47a2756.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEXciGNMaXHkjmbPfWHssm7jjGXbkWbiimTQfmHgqmzRgWHSgmLQgGHRgWLQgGHRgWLjjWXkjmbRgGHkjWXnnWkMnkN7AAAAEnRSTlMqAKzl/tf6+vb+lde4qRcWXI6yCyl6AAAACXBIWXMAAA3uAAAN7gFv2UCnAAAAPUlEQVR4nEXKSw6AMAgA0SmWQlu/4P3PaowLd5O8obC6CQU8IrPBFh5mKSyt91pv/WN8dLHPd04ox5gqej5PtAJroBw9RQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collaboration.94246607.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEUwSV0ePlQ1XnYzS11MaXEpRVlSSVYpQ1wzSl0wSF6njVRaZV6QgmVSa4NxW2LdYVFReJBnvOBAgJ+MTU6PWelBAAAAEnRSTlP6KvvwALT7/bQq/v7+/v74/vgPyv10AAAACXBIWXMAAA4PAAAODwHGCu7pAAAAO0lEQVR4nBXFRxLAIAwAsbVxwUD6//+aQRdh1aGXUS3nzFZ0GCN35FrJdh7HDXhcoY86El/oq4KJg4v9NqsBdavSr5MAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/controlPanel.16f4a754.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEXikhDzaA//TxD/VRjRjBf+TxR4f4bjkQ/lkgxMaXFuamahfT9meYqAZ1eBdVzw1419bWPzrpKbjJX/rYn1vl3Uu5ach5bYtYfDhyXwVCXalCH/flO6fyLidCDVfzf3cUIszdeUAAAAGHRSTlP287Qt+/T+LrYA/v74+P7+/v7+/v7++PgSwX6cAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAQklEQVR4nAXBBQKAMAwAsZvRDncmyP9/SUIUBZWIUIr3XtDUN+v5Ktxts2zVQOrGaa8BTcN8XJ9FeHLOwRFFTbAu/mnaAwxFuHx9AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dashboard.b63997d0.png","height":240,"width":240,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEUlnc0WndirsaoVkMoipNUkl8Mhp9lMaXEekcQjtez/+/AVfrBfgpLAwr8bjLYagqzRz6ymyNL36+lwlavAwL3n3t7bzcbo68shlMGPnqStt7E+qNkfnNQscI9Dhaa4maOgmpfg7fZCAAAAGHRSTlMo7vz0sfLzALEo/vP8/u6x/v7++Pj+/v78KNNPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nAXBBQKAMAwEsJvRznDpBPn/K0lA3g6D9QQ4EZER4LLnrNMEV681BB3h3nNeji/CPlst6WZ41VvrCiCwMQz6AXWgA06a/Y5MAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/planning.18354fa0.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEWykVfGnFdXW1QAIk+Vf1WujljKoFvgrVzstF2OjG+MalVtaVZPi3ZAgnaHTFGQjW95kW2bV1KylFrWplrLn1qkm5XBlFlyjW2soJWNTFB2kG2JSVBPbSXoAAAAE3RSTlP6+Xgkt7C9+Pj+dFf9/uj+/uWoafAkcAAAAAlwSFlzAAAODwAADg8Bxgru6QAAAERJREFUeJwVyUcSgCAQBMCRtERRZwXD//9p2dfGvbrafLHIgz1RDLws5wUNAPWZqhGRuk1GIOhfPGCEKXFk2OJqc/v7AXJ2AzVFaeoCAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;