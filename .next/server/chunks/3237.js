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
              color: "rgb(75, 101, 126)",
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
/* harmony default export */ const todoBoard5 = ({"src":"/_next/static/media/todoBoard5.a997f903.png","height":510,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAjUlEQVR42mOIiYk7dPjozVt3rl69dvPqtXv3758/fyEpIZEhLjb27r0Hv//8/ffvPwR8+vzFwsKCwTcg5M7t239+//7169ffvyDpt2/eWFtbMQDBvfsPgAp//frz6/ef33//v3zxytnOFixx7/5/JPD+wyc7G2sGLS2tHTt2Xrly5TwYABmnTp9xc3MDALwvarScU3K2AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./components/ManagePlatform.js/managePlatformDetailInformation/ManagePlatformDetailInformation.module.css
var ManagePlatformDetailInformation_module = __webpack_require__(9570);
var ManagePlatformDetailInformation_module_default = /*#__PURE__*/__webpack_require__.n(ManagePlatformDetailInformation_module);
;// CONCATENATED MODULE: ./public/image/construction2.png
/* harmony default export */ const construction2 = ({"src":"/_next/static/media/construction2.5b54e993.png","height":720,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAvklEQVR42g3Jya6CMBhA4b7/A9z1jQ/gEDdqoiZqiFMCglIQB1CkVv7OLW5lcxbfQY2z1iilpTHGusa5Ni1pBLQUHKxtvdbVMvf75Hr4unbcIg60ab6w7UHc+RSR743yZ4ner6ImdyUZ+/8jOE3esE4ey9MdxafssOgLyc/BfrjbBOGx25ue8xIpKWkNrw8FwbwET2arYL9zmiFBrn6cznFqqoLikAlGVoMq9BCUGc4uUV5IDgKoVnw9HGfh8Qd9SqeOMAjCqAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
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
/* harmony default export */ const oneSoftwareImage = ({"src":"/_next/static/media/oneSoftwareImage.3bc3e9fa.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AKKjkpSPiwAAAG1ta8vGwtrb3LWzt66mpwCxtq23t7S0p6LX1dTv8vLHx8i/urzHwMMAur7B8/X16eTi4uHh8fj6xdPXnqKlwrq8AMTL0MC/wbOgm+fk5OTn59DJxY95cXp6fAB0c3Rtbm7y9fb+///39vfYysZnOieknZ2BU1WgdBiTEwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footer-image1.bdde1b26.png","height":591,"width":564,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42k2OIU/DQBiGv1GHwIHjJyBRGBKC4icQTAU/AIECNAY3g0BOjGCxCAQhwxEYAbJuy5W21/Wut+sdd9fSfDRNluxJXvW+efOArXEFGqSpDqR0p0XhDouifCRUbcECRFydjnREvgRy4QaSW8xyc9GWQlXXTciY6NsgNu80d92MmU86UzftgM3deTxT4yRXV0mgGH0hHzG3Dwn/w8mP2oGIys0o1cMw1f2E2OfwNR1ErLwPsxq/p9JvX4JQ7ffvhhvit/RVhZgJ1z32e2vrsOsBoaazkJW63tYOsXF6g2XizHlnl08dPrdeys3JaML2/KOeBwDwD8afpg8ZjtXZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/AllTypesOfApproval.f3a26e7a.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9ElEQVR42h3PO0rEQByA8e8/M8lmEVmjYKGgLCISwQOELQUr8QQewMKTeIKAhY0XsNRWlmAlVlpYrCgo+IhhlZ2dPMZH8XVf8xOAISdJRZ0JKgXQ6Nxsdw+AW8k5TurD+WFvdyXWSoFRlPevNEcvRbgeDUxDkJmlKO7vbLnxRxnO9GZxsXbl81Psl9vMCJLiwX3Z0I4nGBPBtw9/w4tPjQdEBK01Vdty+XCBnZas7c/RXFuUQF67igmts5HlpjnncWHkiu47wVuQyxWnyXRPDV1fxaqG0cYdVeHYPEuKTtQZCMDf5EMyvyip/gxQocr9qv9n/gA9YGF5+vEPmAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ApprovalManagementSystem.255b3fd1.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42hWKMUvDQACF76e4nghOdXBwrjSaRi2iguIsOLi4OUr9A0JBY4cSrEFI2iTSJrY9idJNqlAFHToouBgj1cO75Zl78ODxfY+o6F8tOvXdZLPjQE6mrpxIXVZKQ5qVkOW/Dl1IGsnx4xUqfRf14Q1Ohm3MfzrJquhRsvIbsJknD/1KWTwfELy/jjB6eRPTgzpKvMWIMXZkLozRCyLYhwZccxd21UTR81H48WR2cGWue4dGdI/gugPHuUC15mOuews9c0TnPss3z2FsmWJz7wzb+zVs7Fgi79lQjmg8oksfl0nxwcS6dYQ1qwx9cArFCpkjKhpiushDpvG2VFVbMQ0x+Qcq9Kgt4UZdNAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/BudgetCostComparison.555786f6.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42gWAPUsCYRzAf//rfBSR6DJzKaiQ4JYaIuKQHIIWh75GbSEEQVAfoC/QfYhe1iBoSq5FwiDsJkPKNAxf4eyx7kIAqJZsBJcQBwSmxEPkAKgJzyV7aRSVcwOsZDdkGASM5k2aM7HuRzaZNwkjNxmIlb4O9Huur8Zak7gJdWcvYSFp1yASxw7/2FoLVHn2h0pGKG4qVRhp8L8ck4nB4UKb7RWfVnUZo/fLye4lhc4Od29zYmDide6/aZxWdKru8zAscnFb11e1I1B9T/CP7Y3GoLz41LIe4xNaKgvDdYh/dlenz/MCQPPMptFzeWk7qclYMrFXL6v8faD2D/S/ZdyPw+TuAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Calendar.d6c5ad35.png","height":113,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42h2PvUrEQBgA59t87uYHkWhha2kKS+EOKx/EPuhbWOoL3L2NIOEqS0krWgkxh4hgNsmuesVUwxQjAP39TWX89zpEWQAYiZtgixpopb+7rkRd449OSps6APwwYLuXbZyGC+Xna83pWcn5pU8Ojy1A7N69PD2UsW1WCslCMocOnzZ+dJgECrdnZ6dgdGmIHpJ9Qn5AEGHmD82ISQFxwjCPmzgOuDL1JsvB5Yhznsnz7xRNa16fm/nRlGItxEAYveWt3aKuFoD+9qpimlaoXYLsSlR3m7+eQldC9CbjKgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ClientControlPanel.276edbb8.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42iXPsUpCURzA4d+10wn1mh3BREFoMmyIIggkqqmlHqPFR6gHCXyDxrZovYPcqeYGQykILOwQN/T213tOSNu3fgDgaZMRFT3ScMi6JyKjDRAssT+66htVMcNZzHClRMs1KeVD+1i/PlIGevZ7YQavG3L5s6vH5Tq3YUGOt1KDp6dsQOdg8sVo8qkP1z6ovluSWUlLMYUmnRwLoJWH05TtuwI+SXg+e2NcnVL2oGrexE+NmxMUEu+dazGOwc6DNOdo7cJYpYHthlmlj5qb+4sX8lNF4Fe1uNC6nO0CUBbatTS3rAkO2fwNIiP/zT9K/mFnuKFjxQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/DocumentManagement.255e20c7.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42i3PPUvDQADG8XydODqLOLiJQ7ERUbTt9TXp5ZK2KkVQpAoVOolWBxHFF3ARbHptc+l04mQHv0n2u+UxfXnW/7P8jOmow023OpSUCs3oUB8yLk9qPXMRB9MY2+UALvlAucixdRCBFMP42OemwZy+rDhjtLwnNemaeLuo4/uxpW5O75EpCGkwOtIk/4msVcdzm+D2sgb1k8Lf+zk2doU2PDfSVrqNpWULK+sEvJsFJin8vpxhc29+kCT3itW1vNpPNxBcdyDurlSn+QBSCqVRtfsmo2HsVHpw7AF2cmNsZyIUSiI+8vhMkpyCRDKSiUb7lOtGwmz6X7P4D1rCjjobP3+4AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ExpenseManagementSystem.4a24756c.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42h3Pv0rDQBwH8O/vLncFpUIksYPUIhYxKDhKqKOLiihScHJy8RV8k3Rw1ycQ/AMuIauC4OIYwRZDoGlsc0nuRD9v8CEAeBgce0Y0AjDyTVUCpo4M0SWAd7oPjjwtrbDIRnbymWFpzQG3XJBWKVD1WC0bgZgk9k77QvXPrrFh7YKNb5XFZjZIBKwsYn/VPkRr/1Q2uxpx5wDR3I38mG6Dm8xnMBUYl4CQMNMET8kQCyvLoGYXuvoGP+/7e3n60lnMHaVZm6tihk2dq/r1jsNthPQ3KC0K+c+XzSdvGLlX4GYeZfyctrZkjwDgcXDiVUIGhpFPxRC1HkfCWf9v/gLCZmZUkheNxwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/GanttChart.c84a5942.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+0lEQVR42j2PP0vDQADF7+vc6hfo4O7oJoLVDFEvJkWECtEaI5q7pKEibq4OUnByEcGUgrtYQXQyUEHIJa2tmEN4HpZ2eNPv8f4QAOSnuU2H3EkKbqtCaIVWkglGoRn5jmr0IzBlGq+i3zKQiio+OYMUlpTaRAbC7rwHa7jllfLheA5pcx65MMpRxJAJKyE6Sn3FDt52TZwv1dCt+7hxfTx5NobRpiIy3FJ5YCLzl9HzdnDnmjjzVvD6b2CKjE6MTq91gIur67LLG7h06ng8qpbjaQXcCn059eR9u43neA/9ww0NHOQhm4wEQH73F+i4sZgM+LoqdKyGs5t/VS+tIBOdeUcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/IncomeManagementSystem.14ca1971.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42h2Pv0rEQBDGv9ld9lZDxEAQoo3ttYLF4QvlkfI4NpLCB7BQEEQ0hSHYmL3xdudm79d8ML/5wxCU+Hi33WzMAMEuJYEy2jPTa77QqjJU9mn+4Wb+PaC9dEgJ4ENebq7DgwnBDNO0b94+I9eVhSHC+1fkbx1AksGVtfW5haZ//VgROeMvZt+1HsU5KCkL2saV6VODCNDUqjQNgJH/pdxlZwnTzPCOuLvyEJHRwJt+5bxcVNZDue0CiOBjzAsF2xMUeb7f5n0eVOzIlRKNEDm9eQRqDl/PfkYCLAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/InvoiceManagementSystem.10e3876f.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42h3Pu0rDUAAG4P80ycmt2ByswQoOVTKcWBCcWoSu7k7SyUn0TXyE9lkEB1GixVUUBKumhKYIMda09OTSQr43+AhKLsc2G4CpbRACvlv3mKFdAnglQIufXZ08uNxhukKBosCt94zvn9/IMrRjGTVzcNTi7OK8J8R8TmVNxyScirtRwA4NrS+jabVTkWIcRlTKlshWCf5nCV38Jci3rE4FEkGaZ1ApRa5S3MefULp72Hd3IOIZKvBjjyoKGps18Tbxcf0yRNduiHAFSHnhSUj0J7tp94KxX/16H0H5mOLxZijlQRRpzDwlKB1wQO7D2eg4rIpUlb26ZZbNNXttXL49vLAMAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/IssueTrackingManagementSystem.ae816242.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42h2Pv0rDUBhHf1/uTWKwoKFiQsXBTuYBHELfwC7q7KKLPoHgm+SFShD8syhdG+oSEtuhkrQ3937X4IEznekQer6m14mCzdjzU1gLMOcBm0cAc5pfXiXL4XD2dnIadp0CC4kD1jgvy/XZajWRbRBkLSF8jmMF1XmAxQWzeqp/wsb3M8lAytLFdLf1xnWJl6MRxkHnkQCYKJUQAs7mFzdNjVF8CK5KfEQRSBuACI60Nm9diddiqb6LBQp3D8ebRvUFDnNOi7uH5L2qZs12F0aDfZheYRgDrdeOEBNCz+ftfdIxZ5o5hTEgINdC/G/+Ad5dbGhr1aNFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/KanbanBoard.b8857f68.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR42mOAAk0rBoaDgQxWv8IZnH+5MBgeBInBJRdNnvfuwN7D/4/tP/R/48q1/zcuWvZ/amPPO7AiSwb7gxe3bPv//9zBn///////6Pnr/7def/65af3W//YMDAcZPESCf52fP+///5b8//8/XPr//Pqu/4FX//+fsWLn/2AGht8M/gzuv87t2Pn/7+WL/7+9OPH//tm1/1dfe/9/xapN//1AClJVQw7WJJf+ry6s+tle0/e/prD5f11g4M8Cn4j/YUxmhxjSzaM14/l834Uy6P5vyC35nx2T9d+TQel/EIPuu2gpK4hPch0TNLOt4g9mO0T+itF2+R0tb3coQcdVM0HHlQEAGgmD+Y2Ee1AAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/LOSProfitManagementSystem.c881b5e5.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mMAAb+27ZqB7TsPOnfv/eUKxCA2SAws6Q+RfOfZvuN/cdrU//lpU/57ANkgMZAcQ1Dr9oPuXXv/52XN+rnc2+H/PC/b/+lAthdQLBAoxxDYtuOXZ/vO/7HpU/7P9kv+P9kv6X9I+uT/3kAxkBxDQMeuX/4NG/+bVK34X5nc/b80qfu/ZfWK/76NG/+D5IBW7D/o3Nz6X6aK4eddI5H/V4z4/+/MYPjZXVj/36TzwEGG0Lazmp5Ns94Z1LX+n57a+X9yeuf/ioLG/zll09+JTjwP8Ulw61nNkLYDB4269v0yAWLrzoMHGSZAJAEMFYkEO7RM3QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Permission.ea90bab2.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mMAAV3rSk0Fq6qDDBbVv7Rsq37p2FUfVLas1ARLagMllayq3lnYVv6Pdy39L2VU/p9Pt/S/pk3VO7AiI5vKgwwm1f9bg0t+Pki1+B8fWvU/LG3iT1mTiv+aIDkDm8pfIAXdoSX/j0Y4/J/W1vm/vr79v4Nb+X8Z86pfDAzm1b9iXUr//6kL/P+uyPH/123q/98vVvlfGeL5n0E69xcDr2XVQS+H8v/1jsE/c0yc/t9cqvP/0Wz9nxluzv8ZGDwOMphal2uKW1W/YzCq+M8gEPKfgcENiL3+M7B5vlOU8Yb4xNCqTNME6DU9q/JfcnJBv6QF3Q4pyPiAJQFmgms+UDGqrQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ProgramManagement.649a8629.png","height":113,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42g3Nu0rDUBzH8d//5JzTpBfTqIWIgg6CFBTtZiiISBcXn6M+QjcHRx8gD+EioouToHbuIPE2ecEO9iKhJU1ycprvA3w/hLyTy/P6t0z9LCMv+TXBNXV3VlUbQEC47dSh2CN45iAwgbt/wJZAyxph+6/JO4OKf/xTdWxWitlXQepGCBYinr0K56pi+by/7Hrv64c4qpHcMMfAxAXcsgQBD8/XHhtxRh8LBkKrCDCFxOlDJQNoI98IA8wm616kKUTCEygJFo1hTESsWQkrhXKXNRb3LqrcwExOBYocytlClBMp0bC1ttumz0iLm7fe/suwd8YJBypL9RKXT83a5imAYA5YYVmfUiTSPQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ProjectBudgetManagementSystem.a6b3ae65.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzUlEQVR42h3PsU6DUBSA4f9c6BU1tMFY42C6M8vS+EI8Ei+kLDo7upgOXSghkPZeOKdJvzf4BMC+q9KCNabsnQAJLepq4FfspyoPB/uM0RXrB2U4CwC7F+0g+Ui50MRFCzfmwXn1xz5hiWko8qHIH0Mj9lWFqLrq/nO6eUWG4HGc7ibKtzE6bgwEdtvASRb+ppnXTQARHEIr5ojZGIY48pz3PK37EOMMKq0ztTpNpDPMTxfh3gvbjXk16UitFgBr30uQBrW9mmDQJpndmlfrt2XBXe+rmQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ProjectDiscussion.9ea7bb83.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABA0lEQVR42iXOX0vCUAAF8Pt17jeJvkbPkVAvgRBKEP2DRoXbSxLhQ0nm7jaXQg8XQds0bdeCei9SqFHuj+5inDY6cF7O7+WQLANrRkc3ARe2lKK5kE/1kAtrTtP+Y4+Ffrn5jXOli4uDNjT7E139x39uSEqGjYR3qhPkSneJsl+AtrOB4tl9wi8/8Jga8W4XkmkjbK8s472n4EuUoKwuoXbYgWj9SiJYJE+MCfLqFV7sdby2NlFQKzitvSEz8mBE3DEjHK2pSX6vjK3iMXZzatI2AwxSIy4LaHrU91iESn2M6vUYHgsxtOa+a4SUZHH1Ke2bMfeMWHpmLPvWjDvp5uhT8ge7orx9iDVMiwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/RequisitionManagementSystem.54b63170.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mMAg/8Mmgy/GA4y/AGSEHwQJAaX9Pvg9W7ygwX/my9N/d97ecb/umeT/ru8CX0HUfSb4eCku3P+N+zc97N7Wef/jxuK/n/ZsuTn3LPJ/xn+MRwEKfjVfGv6f4WVU//nzy3+/3hX0/+361L+bzpi9J/hL+MvsIL+6wv/l2/e+H/hju3/Hzx/9f/K5Zv//e86gkwAKzgY8Sr6f9aDkp/rLm/5//bh+/+3rt//afLO9j/DX4aDDFo/VTUZ/jC8Y/jH8J/hI8P/3juT/ic9Tf3P8JPhndVPC4hPDL7pa6r+UDgo+psR7k2z3wZgSQA95I3rZjlZowAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ResourceManagementSystem.ca6dd340.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEVL9bNP77dI+bBM9bNP77dP7rhO7rhM9rNQ87VN9LRQ8bZQ8rZT67pH2sJH2cNmu9RQ9LVR8rVP87VQ8rZP8bZQ8bZT7blP77dN6btb3sNj2MdS4MBU2sRD3sBM2MRA28FM08ZYy8tNz8hjwtFByslAyclV/jHaAAAAFXRSTlMAACkpKSkpwcHBwe7u+fn5+vr6+vp500TtAAAAR0lEQVR42gVABxZAIAD9NhUlSUsa3P+KHpqB7AcZGvT0vJ+LjpjN9n6rmSFKTCkWAelDzsFLTJbXyu2EjjmtHeuAdlFqafEDpKEEhX8n31sAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TaskBudgetManagementSystem.dc2267ff.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCUlEQVR42h3Pu0rDYACG4S9pDq1G6A9FNCIROkgmNzFYcNdNR2chg3fjEhfBwWtwUsFSA4LUKqItqINCi4fUtmnSJP/B0Gd9p1dC7vp0z6ZQPc6pwxiFBOGXFO4CeJYuTnbtcUobg99XUlANELIABhmUiX5Zo5sykHm9gUys2lFarB6i+9FGMzTT28o6EdGPpySTb8e09mFVbW1peQWVrTqunh60etwB59yRs6QN01pFUdcQjoaIgz/kBSxLAKkAmQnd5+EnZksz6eNbD537FmprG+mOvogw9X2lPL/tdl+OG6NhQIwxRWTM4b11ruGr2RcCroTc5dmBHQU3nqoRh9MYk+jOB8d08x8HI3kvLlRFXwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TaskDiscussion.3f35595c.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42h3PsUrDQBwH4N/9c7mDtFaiQuhQqAWRLKLgEgQnfQNfwC1P45xFx0w+gw5SIi4u2tZFQekgRNNWmti73EXwe4OPAcAtrkIBnhCcqBFAo5BZ2BjAmN3gMmyfd4byzPc11yBjQb8W1fWy0OnqiATcxAmEn66N1MXsAcU2wT2QinelT6CEsx6PKvWNwcKIfk7w5jV0tRLlMoc7aEXc7Qo8j+7A5Ax1LfA0yfFD72iPA+xvnYDbRZ0F/b1j2mFqPp2K0vvCbu9UOZ+OsI8643Zi4s7h+lB+eP6G3IRCCf7aEsbVhX0xMQOAe6RhzU3CQhYxQ2jebEYV/Tf/AE8oZeq35X88AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TaskManagement.2f148df0.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42i2PzUrDQBSF53XyOD5BXVgx/d/4AlK1aZIGpEJF0bZgwApdqKCbouO6LeqiPwhFNyEqTIdUIzOLnnJD7/Z8nPsdRqe9rDEvb/KFY+rY3dZ/1S3+fZg11mHOCKpFMW3WMay76F12Mb5oIKoVRALJ/RSfNI/Rb/vquveKMF7ifvSlCKImJq0d/XFygLvzDl5mP/gXIUaBxFPnBrGT1mxeK+nIymNQycN/eMZ7+Ivu4xsGRzYWTkYzaRf5zDMxbm2ooVXA7dkV+i1fkROJs3hv15h6aUFQZOXweVrBpN1AYJeEcs1kSQJRE70jJ1lOceVmknAFCbyrkGti1ecAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/TimeTrackingManagementSystem.5106dff6.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR42h3PsUrDQACH8f9d0pS0DeWaIlhREXEIGQUhVHwFX6KDdClCcXHwNbL7DoIgbjUUBXFpNxEplQ6aNNHEu8slBn8P8MFHUBmMHx3JE78olaeDwIQKakqcAZiTwfmD0/qaTbbkilmahl8p8N7cBzftUFeiT2me+s10wQ75pThRdzjiPrrZh1BEYyWor9eqbFLfxDQaGg1Z4DNz8dZoG4ZQMHTi6TkobL7AsXUDW7iIvBjdgxfcPp/iaeWCGqQIlvU9XOdDcTXfBu/soNeZCdP4wbekARmN7p10vZyUhDLGQ8RmG7sswWvUC5nV6hNUxhdTR2ZrX4J4Wlkg5nqw0Sr/N/8AVpdvLznH3HUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/VATTAXManagementSystem.a46cc4c6.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3ElEQVR42hWMTUrDUBRGz72pr2pLbSZShw4zcxqyAmeCuAeXlGU4Ex0WSnZgxoIDQTBIq/l5L++awjf44HCOANy3L1noxxIjl0QAKrecPQK1PITX7PDZ7eJgqSj4A7i18vfVN5ubdTELXSzHPqZt44fozc1XJ7ilG3Qmab/3pWKWiwjTnI0GZkhizi0TLFquCIzBiB4me/qB77eB/XtgqqBglQSH85tBwzkS59AuhrPLY4FK7n6eM7CdRVLD+P0wFldKckozdhT6dHFbW6QQla2q+tW1enVsjxCo/wH9HmhpBl/GSwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/WorkBoardCheckList.c01a135b.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+ElEQVR42g3KO04CQQCA4X+GmQFFIRsTsJCQ2K16gRUr4wmId9BbeI29gxUHsPBBttDOKJpYGKOBRAUSYWFnHyPF130CwB2d+u5uHEItEE2Nm+dR7qfnwEAUh12f8bIvTtpesfNE8v3B2mgXHmuTrJx1FE6F4uXLS3oXNm165vP1mWz4YOu9a6+13wgleRGwLrBxZuayTbJ5QKr3zNXsnbdZHkicg7pBpimlxRxXZMgVjeL2NxESXYoYLqhsVa3X2KCqLMZkFspoLSNhg66vp7Y/Pd727msVmI5IfmIml8uJaqmOAEhXSUV/4YA4uEEKg4rKLX0GDP4BdbFnrFWfdekAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/agile.7b53be6c.png","height":124,"width":124,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAqUlEQVR42lWOSw6CMBiEe1cv4Dnc+TiFkPggUEU2QgJEYhojMdEdbkxNUwUV1NrWYl3oLOZP5s98GSCEkD/igitXIVDnUYkBdoyTkbNcp8pBWTLLxDCLnMJq4x5h5NtYJhQlVHPQFdnEroH8BeYLBv2nfkTHlYmDuqFQRRq6ncl5HYWHuDFrZr5bDae3OAFyY8idydK+t4X7wLuPXdrqXkYQCEWU//qsegM8p6vRnYMpUQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/chat.f47a2756.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR4nE2PMUoDYRCF35t1l5UsuAFtRRAsBAtL8QLiHQQ3hYewMdoIHkGsPIMewEIszZZiGwgY0M6Efzf/5C2kyBQzzPDB94b17QCqA3d/NPK0LBLXfNd+pfs362G1D/IDxA4JlL0EAuCOH7UT1neDV2/8PAYPliDrFxswICBlxoQv/Ly+/Mt3s7K3l2PxH1FkBm4amnFAO2l+O2AqYFuAL2aRHWC5eRgHtpMw7RTPUlysFOlK0UqRSvHE0U3Vp/FNIY+UbT0k1A45GlYw41aMfq95JmAu4EtvHgt5WAI68ViG0UL+OgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collaboration.94246607.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR42mMAAS33OE1L39iDDDaxv0AYxAaJATEDg6FnnKaFT9w7BuvY/w3l8f9BGKjoP0gMJMdg5BV30MIn9j+DVfzPE7MD/x+fE/SfwS75J0jMyCv2IIOxV+wvI2+QrtD/26aU/N82uei/gJIVUDIeiON+MYAIbfeY/7OT0//XdE3/X9kz+3/ShOX/9dyjIQpYPeMOJnhF/3+RGvazwN7jv3J6w/+8Q89/mseX/9d3CDrIwOCerFnpE/lus2/A/1oX3/+KBT3/nSdt/W+V2/5OjYFBkwEMPJI0GTwTDgp6J/wycQz5patmfFATKKnJwMAAAKC6behmRHxBAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 1465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/controlPanel.16f4a754.png","height":114,"width":113,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9ElEQVR42iXPT0oCURzA8e/vzfP5vxxJKFJcJUydYHDrKbpAnSZazgnadIBOIEOrwIW2iKJABsKaKMt8M86LcP1ZfQTg+ZIAiBBCpdqIeLFy/jkwk38spDvO6PqusKzXc5xbUat8plVzNNTaI0p++v51fmr3dytm0PAQ59mT9MbfyFWkkUaYrRN+X6em2AkY9TsYow2TY77uCFVRrCiVW4w6t5Q/HrB9zbKa4MhpThClZBN7OGbzgV19KxbvJRb5oc3TN6gTy8uFCXLdGleTA799n2GzHDF1Kptp6tV6Q9k2TeC0jfYem2H9qSzoZUypdwbM/gAxV15YCg3/agAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dashboard.b63997d0.png","height":240,"width":240,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42h2PP0vDQABHf3fJHSkoqU2sglDQwRt0dLDpIu5Orn4B/UKZ3Ys4ODkqreDSDlERFEQtVEvIP2vM9cz1D7w3vekRAGheDUX6k/jQ2iMACCHd1WrtFMAz2T3vi+A376DUDspynmfM1P/hzordMoMk8dtbf45orElCOed0Alnksv9ZOCePQ98EZd5GnaLuMr5sueBWBdoAz9QL0Bt5JkyARxJlleN7/IaBWsd2jQGTMaA1jMbx2WE4iDejOJUVZhhFluK69y4vnzLjw7JvSfPiVdxFeUco5RzYDBQaN7HCg9Th/hJrEQA4agfifiT9r1x5IIBr0u4eLxebU0BiaBb2ewbbAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/planning.18354fa0.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AbxNUP/1/QHrCEQB2rYQLDvj+f8AfwLWw9DnBaBfgPbKAcSCVXMcIgaMCw39ANL0JwD/AAD/LwvZAQgHBe6Vt/eGAc6gWrQcEwRL9fPv/OcPYgQIBAAAAuOc+xAOEgUEAv7LAdCeWf8ZEgMA9vb8AL34GAD6/QAATA7oAP8CAwAQCgH5AfS4Xffv9P8I/fv8AL/4GAD5/P8AUhPqAAUGBADh6vwAAeCqW8sDAgI0+fjw++sRYgUHBAAABOSd/BQTEgTs8/yzAYluVHloSAl4+Pj7DtP3J////wABLgvZAPn3AwDj3ft1AQAATiSRdwkyMRf7aacPK0Dm+AAAafjVvgfPACv67P4XG9R2mJZVt9cAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ })

};
;