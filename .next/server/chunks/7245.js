exports.id = 7245;
exports.ids = [7245];
exports.modules = {

/***/ 7245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Home6th_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9125);
/* harmony import */ var _Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3978);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _slider__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _slider__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Home6th = ({
  home6thData
}) => {
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    aos__WEBPACK_IMPORTED_MODULE_5___default().init({
      duration: 1400,
      easing: "ease-in-out-quart"
    });
  }, []); // const activeSlide = useRef;
  // React.useEffect(() => {
  // activeSlide.current = console.log(activeSlide);
  // const handleClick = (event) => {
  //   console.log("Button clicked");
  // };
  // const element = activeSlide.current;
  // element?.addEventListener("change", handleClick);
  // return () => {
  //   element?.removeEventListener("change", handleClick);
  // };
  // }, [activeSlide]);
  // const swiperSlide = useSwiperSlide();
  // console.log(swiperSlide);
  // const [swiper, setSwiper] = React.useState(null);
  // const slideTo = (index) => {
  //   if (swiper) swiper.slideTo(index);
  // };
  // console.log(swiper?.activeIndex);

  const [activeSlide, setActiveSlide] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: "mx-auto",
    style: {
      backgroundImage: `url(${home6thData?.backgroundImage})`,
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
      padding: "50px 0",
      backgroundColor: "rgb(30, 35, 52)",
      fontFamily: "Poppins"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: " container-lg mx-auto text-white row row-cols-1 row-cols-md-3 g-4",
      "data-aos": "zoom-in",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h1", {
          style: {
            fontSize: "60px"
          },
          children: home6thData?.column1Title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          className: `${(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon)}`,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          className: `${(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon)}`,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          className: `${(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon)}`,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          className: `${(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon)}`,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          className: `${(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon)}`,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h5", {
          children: home6thData?.column1SubTitle
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
          children: home6thData?.column1Description
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
          effect: "creative",
          pagination: true,
          grabCursor: true,
          modules: [swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay],
          className: "mySwiper",
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          } // onSwiper={setSwiper}
          ,
          onSlideChange: swiper => setActiveSlide(swiper.activeIndex),
          children: home6thData?.reviewLists?.map(review => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
            style: {
              backgroundColor: ""
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("blockquote", {
              className: `${(_Home6th_module_css__WEBPACK_IMPORTED_MODULE_9___default().quote)} quote`,
              children: review?.review
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              children: ["- ", review.name, " "]
            })]
          }, review.id))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h2", {
          className: "text-center text-lg-start mb-5",
          children: home6thData?.column3Title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: home6thData?.reviewLists?.map((review, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: "d-flex flex-column justify-content-center align-items-center justify-content-md-start flex-md-row gap-2",
            children: activeSlide === index ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "w-25",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: review?.img,
                  alt: " ",
                  height: 150,
                  width: 150,
                  objectFit: "cover",
                  layout: "responsive",
                  className: "rounded-2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "text-center text-lg-start",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
                  children: review?.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                  className: "",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("small", {
                    children: review?.designation
                  })
                })]
              })]
            }) : null
          }, review?.id))
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home6th);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
 // Import Swiper styles




 // import required modules






function Slider({
  sliderData
}) {
  console.log(sliderData);
  const [isSSR, setIsSSR] = React.useState(true);
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: !isSSR && /*#__PURE__*/_jsx("div", {
      className: `${style.background} container-lg my-5 p-5 mx-auto rounded-5 text-white`,
      children: /*#__PURE__*/_jsx(Swiper, {
        className: `${style.swiper} `,
        slidesPerView: 4,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true
        },
        spaceBetween: 30,
        centeredSlides: true // scrollbar={{ draggable: true }}
        ,
        pagination: {
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
        modules: [Pagination, Autoplay],
        children: sliderData?.map(data => /*#__PURE__*/_jsx(_Fragment, {
          children: data.isShow && /*#__PURE__*/_jsx(SwiperSlide, {
            className: `${style.SwiperSlide}`,
            children: /*#__PURE__*/_jsx("h1", {
              children: data.client
            })
          }, data.id)
        }))
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9125:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "Home6th_icon__Q7wAo",
	"background": "Home6th_background__ga2pp",
	"swiper": "Home6th_swiper__nXK8t",
	"swiperSlide": "Home6th_swiperSlide__rA1OX",
	"quote": "Home6th_quote__2zMbx"
};


/***/ })

};
;