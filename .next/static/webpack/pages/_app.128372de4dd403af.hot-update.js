"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _Home_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home/Navbar/NavBar */ \"./pages/Home/Navbar/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _firebase_init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.init */ \"./firebase.init.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _components_GoToTop_GoToTop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/GoToTop/GoToTop */ \"./components/GoToTop/GoToTop.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\th\\\\Documents\\\\RBS-Frontend\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false),\n      _React$useState2 = (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      pageLoaded = _React$useState2[0],\n      setPageLoaded = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false),\n      _React$useState4 = (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      showButton = _React$useState4[0],\n      setShowButton = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    setPageLoaded(true);\n  }, []);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var user = _firebase_init__WEBPACK_IMPORTED_MODULE_8__[\"default\"].currentUser;\n\n  function handleCredentialResponse(response) {\n    var userObject = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(response.credential);\n    var idToken = response.credential;\n    var credential = firebase_auth__WEBPACK_IMPORTED_MODULE_10__.GoogleAuthProvider.credential(idToken);\n    console.log(credential); // Sign in with credential from the Google user.\n\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithCredential)(_firebase_init__WEBPACK_IMPORTED_MODULE_8__[\"default\"], credential).then(function (result) {// setUser(result.user);\n    })[\"catch\"](function (error) {\n      // Handle Errors here.\n      var errorCode = error.code;\n      var errorMessage = error.message; // The email of the user's account used.\n\n      var email = error.email; // The credential that was used.\n\n      var credential = firebase_auth__WEBPACK_IMPORTED_MODULE_10__.GoogleAuthProvider.credentialFromError(error); // ...\n    });\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    var _window$google, _window$google$accoun, _window$google$accoun2;\n\n    // if (divRef.current) {\n    (_window$google = window.google) === null || _window$google === void 0 ? void 0 : (_window$google$accoun = _window$google.accounts) === null || _window$google$accoun === void 0 ? void 0 : (_window$google$accoun2 = _window$google$accoun.id) === null || _window$google$accoun2 === void 0 ? void 0 : _window$google$accoun2.initialize({\n      client_id: \"590849894518-674a07vd5s9ntt84lrdissrursdm5o9o.apps.googleusercontent.com\",\n      // callback: (res, error) => {\n      //   // This is the function that will be executed once the authentication with google is finished\n      // },\n      callback: handleCredentialResponse\n    }); //   window.google?.accounts?.id.renderButton(divRef.current, {\n    //     type: \"standard\",\n    //     size: \"large\",\n    //     theme: \"filled_blue\",\n    //     text: \"sign_in_with\",\n    //     shape: \"rectangular\",\n    //     logo_alignment: \"left\",\n    //   });\n    // }\n\n    if (!user) {// window.google?.accounts?.id.prompt();\n      // window.google.accounts.id.cancel();\n    }\n  }, [user]); // * scroll to top button */\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    var handleScrollButtonVisibility = function handleScrollButtonVisibility() {\n      window.pageYOffset > 150 ? setShowButton(true) : setShowButton(false);\n    };\n\n    window.addEventListener(\"scroll\", handleScrollButtonVisibility);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScrollButtonVisibility);\n    };\n  }, []);\n\n  var handleScrollToTop = function handleScrollToTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {\n    children: pageLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.SSRProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [showButton && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_GoToTop_GoToTop__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          handleScrollToTop: handleScrollToTop\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 28\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, this) : null\n  }, void 0, false);\n}\n\n_s(MyApp, \"XPtkYT7yF6RUaaXw8/WFO2VcZUs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxHQUFHLEVBQUUsQ0FBUDtNQUFVQyxRQUFRLEVBQUU7SUFBcEIsQ0FBaEI7RUFDRCxDQUZEOztFQUlBLG9CQUNFO0lBQUEsVUFDR3pDLFVBQVUsZ0JBQ1QsK0RBQUMseURBQUQ7TUFBQSx1QkFDRSwrREFBQywwREFBRDtRQUFBLFdBRUdFLFVBQVUsaUJBQUksK0RBQUMsb0VBQUQ7VUFBUyxpQkFBaUIsRUFBRW9DO1FBQTVCO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGakIsZUFJRSwrREFBQyxTQUFELG9CQUFleEMsU0FBZjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBSkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURTLEdBU1A7RUFWTixpQkFERjtBQWNEOztHQXJGUUY7VUFPUU47OztLQVBSTTtBQXVGVCwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB7IFNTUlByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9Ib21lL05hdmJhci9OYXZCYXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF1dGggZnJvbSBcIi4uL2ZpcmViYXNlLmluaXRcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25JbldpdGhDcmVkZW50aWFsIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBHb1RvVG9wIGZyb20gXCIuLi9jb21wb25lbnRzL0dvVG9Ub3AvR29Ub1RvcFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW3BhZ2VMb2FkZWQsIHNldFBhZ2VMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0J1dHRvbiwgc2V0U2hvd0J1dHRvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlTG9hZGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgZnVuY3Rpb24gaGFuZGxlQ3JlZGVudGlhbFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgdXNlck9iamVjdCA9IGp3dF9kZWNvZGUocmVzcG9uc2UuY3JlZGVudGlhbCk7XG4gICAgY29uc3QgaWRUb2tlbiA9IHJlc3BvbnNlLmNyZWRlbnRpYWw7XG4gICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsKGlkVG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWwpO1xuXG4gICAgLy8gU2lnbiBpbiB3aXRoIGNyZWRlbnRpYWwgZnJvbSB0aGUgR29vZ2xlIHVzZXIuXG4gICAgc2lnbkluV2l0aENyZWRlbnRpYWwoYXV0aCwgY3JlZGVudGlhbClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gc2V0VXNlcihyZXN1bHQudXNlcik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cbiAgICAgICAgY29uc3QgZW1haWwgPSBlcnJvci5lbWFpbDtcbiAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhhdCB3YXMgdXNlZC5cbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbUVycm9yKGVycm9yKTtcbiAgICAgICAgLy8gLi4uXG4gICAgICB9KTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGRpdlJlZi5jdXJyZW50KSB7XG4gICAgd2luZG93Lmdvb2dsZT8uYWNjb3VudHM/LmlkPy5pbml0aWFsaXplKHtcbiAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lELFxuICAgICAgLy8gY2FsbGJhY2s6IChyZXMsIGVycm9yKSA9PiB7XG4gICAgICAvLyAgIC8vIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBvbmNlIHRoZSBhdXRoZW50aWNhdGlvbiB3aXRoIGdvb2dsZSBpcyBmaW5pc2hlZFxuICAgICAgLy8gfSxcbiAgICAgIGNhbGxiYWNrOiBoYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UsXG4gICAgfSk7XG4gICAgLy8gICB3aW5kb3cuZ29vZ2xlPy5hY2NvdW50cz8uaWQucmVuZGVyQnV0dG9uKGRpdlJlZi5jdXJyZW50LCB7XG4gICAgLy8gICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAvLyAgICAgc2l6ZTogXCJsYXJnZVwiLFxuICAgIC8vICAgICB0aGVtZTogXCJmaWxsZWRfYmx1ZVwiLFxuICAgIC8vICAgICB0ZXh0OiBcInNpZ25faW5fd2l0aFwiLFxuICAgIC8vICAgICBzaGFwZTogXCJyZWN0YW5ndWxhclwiLFxuICAgIC8vICAgICBsb2dvX2FsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAvLyB3aW5kb3cuZ29vZ2xlPy5hY2NvdW50cz8uaWQucHJvbXB0KCk7XG4gICAgICAvLyB3aW5kb3cuZ29vZ2xlLmFjY291bnRzLmlkLmNhbmNlbCgpO1xuICAgIH1cbiAgfSwgW3VzZXJdKTtcblxuICAvLyAqIHNjcm9sbCB0byB0b3AgYnV0dG9uICovXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IDE1MCA/IHNldFNob3dCdXR0b24odHJ1ZSkgOiBzZXRTaG93QnV0dG9uKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbEJ1dHRvblZpc2liaWxpdHkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGxCdXR0b25WaXNpYmlsaXR5KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGFnZUxvYWRlZCA/IChcbiAgICAgICAgPFNTUlByb3ZpZGVyPlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7Lyoge3JvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvYmxvZ1wiKSA/IDxOYXZiYXJCbG9nIC8+IDogPE5hdkJhciAvPn0gKi99XG4gICAgICAgICAgICB7c2hvd0J1dHRvbiAmJiA8R29Ub1RvcCBoYW5kbGVTY3JvbGxUb1RvcD17aGFuZGxlU2Nyb2xsVG9Ub3B9IC8+fVxuICAgICAgICAgICAgey8qIDxOYXZCYXIgLz4gKi99XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvU1NSUHJvdmlkZXI+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU1NSUHJvdmlkZXIiLCJMYXlvdXQiLCJOYXZCYXIiLCJSZWFjdCIsInVzZVJvdXRlciIsImF1dGgiLCJqd3RfZGVjb2RlIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJHb1RvVG9wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsInBhZ2VMb2FkZWQiLCJzZXRQYWdlTG9hZGVkIiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJoYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UiLCJyZXNwb25zZSIsInVzZXJPYmplY3QiLCJjcmVkZW50aWFsIiwiaWRUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzdWx0IiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImVtYWlsIiwiY3JlZGVudGlhbEZyb21FcnJvciIsIndpbmRvdyIsImdvb2dsZSIsImFjY291bnRzIiwiaWQiLCJpbml0aWFsaXplIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsImNhbGxiYWNrIiwiaGFuZGxlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});