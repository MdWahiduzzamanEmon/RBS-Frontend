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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _Home_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home/Navbar/NavBar */ \"./pages/Home/Navbar/NavBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _firebase_init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase.init */ \"./firebase.init.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _components_GoToTop_GoToTop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/GoToTop/GoToTop */ \"./components/GoToTop/GoToTop.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\th\\\\Documents\\\\RBS-Frontend\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false),\n      _React$useState2 = (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      pageLoaded = _React$useState2[0],\n      setPageLoaded = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default().useState(false),\n      _React$useState4 = (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      showButton = _React$useState4[0],\n      setShowButton = _React$useState4[1];\n\n  var _useState = useState(false),\n      _useState2 = (0,C_Users_th_Documents_RBS_Frontend_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      showInfo1 = _useState2[0],\n      setShowInfo1 = _useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    setPageLoaded(true);\n  }, []);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  var user = _firebase_init__WEBPACK_IMPORTED_MODULE_8__[\"default\"].currentUser;\n\n  function handleCredentialResponse(response) {\n    var userObject = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(response.credential);\n    var idToken = response.credential;\n    var credential = firebase_auth__WEBPACK_IMPORTED_MODULE_10__.GoogleAuthProvider.credential(idToken);\n    console.log(credential); // Sign in with credential from the Google user.\n\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithCredential)(_firebase_init__WEBPACK_IMPORTED_MODULE_8__[\"default\"], credential).then(function (result) {// setUser(result.user);\n    })[\"catch\"](function (error) {\n      // Handle Errors here.\n      var errorCode = error.code;\n      var errorMessage = error.message; // The email of the user's account used.\n\n      var email = error.email; // The credential that was used.\n\n      var credential = firebase_auth__WEBPACK_IMPORTED_MODULE_10__.GoogleAuthProvider.credentialFromError(error); // ...\n    });\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    var _window$google, _window$google$accoun, _window$google$accoun2;\n\n    // if (divRef.current) {\n    (_window$google = window.google) === null || _window$google === void 0 ? void 0 : (_window$google$accoun = _window$google.accounts) === null || _window$google$accoun === void 0 ? void 0 : (_window$google$accoun2 = _window$google$accoun.id) === null || _window$google$accoun2 === void 0 ? void 0 : _window$google$accoun2.initialize({\n      client_id: \"590849894518-674a07vd5s9ntt84lrdissrursdm5o9o.apps.googleusercontent.com\",\n      // callback: (res, error) => {\n      //   // This is the function that will be executed once the authentication with google is finished\n      // },\n      callback: handleCredentialResponse\n    }); //   window.google?.accounts?.id.renderButton(divRef.current, {\n    //     type: \"standard\",\n    //     size: \"large\",\n    //     theme: \"filled_blue\",\n    //     text: \"sign_in_with\",\n    //     shape: \"rectangular\",\n    //     logo_alignment: \"left\",\n    //   });\n    // }\n\n    if (!user) {// window.google?.accounts?.id.prompt();\n      // window.google.accounts.id.cancel();\n    }\n  }, [user]); // * scroll to top button */\n\n  react__WEBPACK_IMPORTED_MODULE_6___default().useEffect(function () {\n    var handleScrollButtonVisibility = function handleScrollButtonVisibility() {\n      window.pageYOffset > 150 ? setShowButton(true) : setShowButton(false);\n    };\n\n    window.addEventListener(\"scroll\", handleScrollButtonVisibility);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScrollButtonVisibility);\n    };\n  }, []);\n\n  var handleScrollToTop = function handleScrollToTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {\n    children: pageLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.SSRProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [showButton && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_GoToTop_GoToTop__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          handleScrollToTop: handleScrollToTop\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 28\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Home_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }, this) : null\n  }, void 0, false);\n}\n\n_s(MyApp, \"BkzNMhL8kuJGE+/wanlO5N3ZQ1g=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter];\n});\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVJIOztFQVVBLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtJQUM5QmQsTUFBTSxDQUFDZSxRQUFQLENBQWdCO01BQUVDLEdBQUcsRUFBRSxDQUFQO01BQVVDLFFBQVEsRUFBRTtJQUFwQixDQUFoQjtFQUNELENBRkQ7O0VBSUEsb0JBQ0U7SUFBQSxVQUNHM0MsVUFBVSxnQkFDVCwrREFBQyx5REFBRDtNQUFBLHVCQUNFLCtEQUFDLDBEQUFEO1FBQUEsV0FFR0UsVUFBVSxpQkFBSSwrREFBQyxvRUFBRDtVQUFTLGlCQUFpQixFQUFFc0M7UUFBNUI7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUZqQixlQUdFLCtEQUFDLDJEQUFEO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFIRixlQUlFLCtEQUFDLFNBQUQsb0JBQWUxQyxTQUFmO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFKRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRFMsR0FTUDtFQVZOLGlCQURGO0FBY0Q7O0dBdEZRRjtVQVFRTjs7O0tBUlJNO0FBd0ZULCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHsgU1NSUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL0hvbWUvTmF2YmFyL05hdkJhclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwiLi4vZmlyZWJhc2UuaW5pdFwiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aENyZWRlbnRpYWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEdvVG9Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29Ub1RvcC9Hb1RvVG9wXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbcGFnZUxvYWRlZCwgc2V0UGFnZUxvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93QnV0dG9uLCBzZXRTaG93QnV0dG9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtzaG93SW5mbzEsIHNldFNob3dJbmZvMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlTG9hZGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcbiAgZnVuY3Rpb24gaGFuZGxlQ3JlZGVudGlhbFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgdXNlck9iamVjdCA9IGp3dF9kZWNvZGUocmVzcG9uc2UuY3JlZGVudGlhbCk7XG4gICAgY29uc3QgaWRUb2tlbiA9IHJlc3BvbnNlLmNyZWRlbnRpYWw7XG4gICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsKGlkVG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWwpO1xuXG4gICAgLy8gU2lnbiBpbiB3aXRoIGNyZWRlbnRpYWwgZnJvbSB0aGUgR29vZ2xlIHVzZXIuXG4gICAgc2lnbkluV2l0aENyZWRlbnRpYWwoYXV0aCwgY3JlZGVudGlhbClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgLy8gc2V0VXNlcihyZXN1bHQudXNlcik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIC8vIFRoZSBlbWFpbCBvZiB0aGUgdXNlcidzIGFjY291bnQgdXNlZC5cbiAgICAgICAgY29uc3QgZW1haWwgPSBlcnJvci5lbWFpbDtcbiAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhhdCB3YXMgdXNlZC5cbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbUVycm9yKGVycm9yKTtcbiAgICAgICAgLy8gLi4uXG4gICAgICB9KTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGRpdlJlZi5jdXJyZW50KSB7XG4gICAgd2luZG93Lmdvb2dsZT8uYWNjb3VudHM/LmlkPy5pbml0aWFsaXplKHtcbiAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lELFxuICAgICAgLy8gY2FsbGJhY2s6IChyZXMsIGVycm9yKSA9PiB7XG4gICAgICAvLyAgIC8vIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBvbmNlIHRoZSBhdXRoZW50aWNhdGlvbiB3aXRoIGdvb2dsZSBpcyBmaW5pc2hlZFxuICAgICAgLy8gfSxcbiAgICAgIGNhbGxiYWNrOiBoYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UsXG4gICAgfSk7XG4gICAgLy8gICB3aW5kb3cuZ29vZ2xlPy5hY2NvdW50cz8uaWQucmVuZGVyQnV0dG9uKGRpdlJlZi5jdXJyZW50LCB7XG4gICAgLy8gICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAvLyAgICAgc2l6ZTogXCJsYXJnZVwiLFxuICAgIC8vICAgICB0aGVtZTogXCJmaWxsZWRfYmx1ZVwiLFxuICAgIC8vICAgICB0ZXh0OiBcInNpZ25faW5fd2l0aFwiLFxuICAgIC8vICAgICBzaGFwZTogXCJyZWN0YW5ndWxhclwiLFxuICAgIC8vICAgICBsb2dvX2FsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAvLyB3aW5kb3cuZ29vZ2xlPy5hY2NvdW50cz8uaWQucHJvbXB0KCk7XG4gICAgICAvLyB3aW5kb3cuZ29vZ2xlLmFjY291bnRzLmlkLmNhbmNlbCgpO1xuICAgIH1cbiAgfSwgW3VzZXJdKTtcblxuICAvLyAqIHNjcm9sbCB0byB0b3AgYnV0dG9uICovXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IDE1MCA/IHNldFNob3dCdXR0b24odHJ1ZSkgOiBzZXRTaG93QnV0dG9uKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbEJ1dHRvblZpc2liaWxpdHkpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGxCdXR0b25WaXNpYmlsaXR5KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGFnZUxvYWRlZCA/IChcbiAgICAgICAgPFNTUlByb3ZpZGVyPlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICB7Lyoge3JvdXRlci5hc1BhdGguaW5jbHVkZXMoXCIvYmxvZ1wiKSA/IDxOYXZiYXJCbG9nIC8+IDogPE5hdkJhciAvPn0gKi99XG4gICAgICAgICAgICB7c2hvd0J1dHRvbiAmJiA8R29Ub1RvcCBoYW5kbGVTY3JvbGxUb1RvcD17aGFuZGxlU2Nyb2xsVG9Ub3B9IC8+fVxuICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L1NTUlByb3ZpZGVyPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNTUlByb3ZpZGVyIiwiTGF5b3V0IiwiTmF2QmFyIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiand0X2RlY29kZSIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwiR29Ub1RvcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJwYWdlTG9hZGVkIiwic2V0UGFnZUxvYWRlZCIsInNob3dCdXR0b24iLCJzZXRTaG93QnV0dG9uIiwic2hvd0luZm8xIiwic2V0U2hvd0luZm8xIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlciIsImN1cnJlbnRVc2VyIiwiaGFuZGxlQ3JlZGVudGlhbFJlc3BvbnNlIiwicmVzcG9uc2UiLCJ1c2VyT2JqZWN0IiwiY3JlZGVudGlhbCIsImlkVG9rZW4iLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ3aW5kb3ciLCJnb29nbGUiLCJhY2NvdW50cyIsImlkIiwiaW5pdGlhbGl6ZSIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJjYWxsYmFjayIsImhhbmRsZVNjcm9sbEJ1dHRvblZpc2liaWxpdHkiLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});