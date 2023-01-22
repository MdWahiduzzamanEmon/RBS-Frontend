"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/bannerImage";
exports.ids = ["pages/api/bannerImage"];
exports.modules = {

/***/ "(api)/./pages/api/bannerImage.js":
/*!**********************************!*\
  !*** ./pages/api/bannerImage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _public_JSON_bannerImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/JSON/bannerImage */ \"(api)/./public/JSON/bannerImage.js\");\n\nfunction handler(req, res) {\n  res.status(200).json(_public_JSON_bannerImage__WEBPACK_IMPORTED_MODULE_0__.bannerImages);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFubmVySW1hZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXFCQyxHQUFyQixFQUF5QjtFQUNwQ0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLGtFQUFyQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmJzLWZyb250ZW5kLW5ldy8uL3BhZ2VzL2FwaS9iYW5uZXJJbWFnZS5qcz8wMmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhbm5lckltYWdlcyB9IGZyb20gXCIuLi8uLi9wdWJsaWMvSlNPTi9iYW5uZXJJbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGJhbm5lckltYWdlcylcbn0iXSwibmFtZXMiOlsiYmFubmVySW1hZ2VzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/bannerImage.js\n");

/***/ }),

/***/ "(api)/./public/JSON/bannerImage.js":
/*!************************************!*\
  !*** ./public/JSON/bannerImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bannerImages\": () => (/* binding */ bannerImages)\n/* harmony export */ });\nconst bannerImages = {\n  id: 1,\n  isShow: true,\n  images: [{\n    id: \"1\",\n    isShow: true,\n    img: \"/banner/project-manager1.svg\"\n  } // {\n  //   id: \"2\",\n  //   isShow: true,\n  //   img: \"/bannerslide2.png\",\n  // },\n  // {\n  //   id: \"3\",\n  //   isShow: true,\n  //   img: \"/bannerslide1.png\",\n  // },\n  ]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wdWJsaWMvSlNPTi9iYW5uZXJJbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxFQUFFLEVBQUUsQ0FEc0I7RUFFMUJDLE1BQU0sRUFBRSxJQUZrQjtFQUcxQkMsTUFBTSxFQUFFLENBQ047SUFDRUYsRUFBRSxFQUFFLEdBRE47SUFFRUMsTUFBTSxFQUFFLElBRlY7SUFHRUUsR0FBRyxFQUFFO0VBSFAsQ0FETSxDQU1OO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBZk07QUFIa0IsQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYnMtZnJvbnRlbmQtbmV3Ly4vcHVibGljL0pTT04vYmFubmVySW1hZ2UuanM/NzFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmFubmVySW1hZ2VzID0ge1xuICBpZDogMSxcbiAgaXNTaG93OiB0cnVlLFxuICBpbWFnZXM6IFtcbiAgICB7XG4gICAgICBpZDogXCIxXCIsXG4gICAgICBpc1Nob3c6IHRydWUsXG4gICAgICBpbWc6IFwiL2Jhbm5lci9wcm9qZWN0LW1hbmFnZXIxLnN2Z1wiLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgaWQ6IFwiMlwiLFxuICAgIC8vICAgaXNTaG93OiB0cnVlLFxuICAgIC8vICAgaW1nOiBcIi9iYW5uZXJzbGlkZTIucG5nXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBpZDogXCIzXCIsXG4gICAgLy8gICBpc1Nob3c6IHRydWUsXG4gICAgLy8gICBpbWc6IFwiL2Jhbm5lcnNsaWRlMS5wbmdcIixcbiAgICAvLyB9LFxuICBdLFxufTtcbiJdLCJuYW1lcyI6WyJiYW5uZXJJbWFnZXMiLCJpZCIsImlzU2hvdyIsImltYWdlcyIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./public/JSON/bannerImage.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bannerImage.js"));
module.exports = __webpack_exports__;

})();