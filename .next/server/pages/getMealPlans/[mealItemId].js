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
exports.id = "pages/getMealPlans/[mealItemId]";
exports.ids = ["pages/getMealPlans/[mealItemId]"];
exports.modules = {

/***/ "./pages/getMealPlans/[mealItemId].tsx":
/*!*********************************************!*\
  !*** ./pages/getMealPlans/[mealItemId].tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MealItemId = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const getDataFromLocalStorage = (key)=>{\n        if (false) {}\n        return null;\n    };\n    const recipess = getDataFromLocalStorage(\"recipes\");\n    console.log(recipess);\n    // Get the id from the URL query parameters\n    const { id  } = router.query;\n    // Find the recipe with the matching id\n    const selectedRecipe = recipess?.find((recipe)=>recipe.id === id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: selectedRecipe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: selectedRecipe.id\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/[mealItemId].tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/[mealItemId].tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/[mealItemId].tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MealItemId);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXRNZWFsUGxhbnMvW21lYWxJdGVtSWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBRXhDLE1BQU1FLGFBQWEsSUFBTTtJQUN2QixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTUcsMEJBQTBCLENBQUNDLE1BQTRCO1FBQzNELElBQUksS0FBNkIsRUFBRSxFQUlsQztRQUNELE9BQU8sSUFBSTtJQUNiO0lBRUEsTUFBTU0sV0FBV1Asd0JBQXdCO0lBQ3pDUSxRQUFRQyxHQUFHLENBQUNGO0lBRVosMkNBQTJDO0lBQzNDLE1BQU0sRUFBRUcsR0FBRSxFQUFFLEdBQUdYLE9BQU9ZLEtBQUs7SUFFM0IsdUNBQXVDO0lBQ3ZDLE1BQU1DLGlCQUFpQkwsVUFBVU0sS0FBSyxDQUFDQyxTQUFnQkEsT0FBT0osRUFBRSxLQUFLQTtJQUVyRSxxQkFDRSw4REFBQ0s7a0JBQ0VILGdDQUNDLDhEQUFDRztzQkFDQyw0RUFBQ0M7MEJBQUlKLGVBQWVGLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7QUFFQSxpRUFBZVosVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWxwbGFubmVyLy4vcGFnZXMvZ2V0TWVhbFBsYW5zL1ttZWFsSXRlbUlkXS50c3g/NTkxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBNZWFsSXRlbUlkID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5OiBzdHJpbmcpOiBhbnkgfCBudWxsID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gQ2hlY2sgaWYgd2luZG93IGlzIGRlZmluZWQgKHRvIGF2b2lkIGlzc3VlcyBkdXJpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nKVxuICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICByZXR1cm4gc3RvcmVkRGF0YSA/IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCByZWNpcGVzcyA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKFwicmVjaXBlc1wiKTtcbiAgY29uc29sZS5sb2cocmVjaXBlc3MpO1xuXG4gIC8vIEdldCB0aGUgaWQgZnJvbSB0aGUgVVJMIHF1ZXJ5IHBhcmFtZXRlcnNcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIC8vIEZpbmQgdGhlIHJlY2lwZSB3aXRoIHRoZSBtYXRjaGluZyBpZFxuICBjb25zdCBzZWxlY3RlZFJlY2lwZSA9IHJlY2lwZXNzPy5maW5kKChyZWNpcGU6IGFueSkgPT4gcmVjaXBlLmlkID09PSBpZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3NlbGVjdGVkUmVjaXBlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3NlbGVjdGVkUmVjaXBlLmlkfTwvaDE+XG4gICAgICAgICAgey8qIFJlbmRlciBvdGhlciBjb250ZW50IG9mIHRoZSBzZWxlY3RlZCByZWNpcGUgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lYWxJdGVtSWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJNZWFsSXRlbUlkIiwicm91dGVyIiwiZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UiLCJrZXkiLCJzdG9yZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInJlY2lwZXNzIiwiY29uc29sZSIsImxvZyIsImlkIiwicXVlcnkiLCJzZWxlY3RlZFJlY2lwZSIsImZpbmQiLCJyZWNpcGUiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/getMealPlans/[mealItemId].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/getMealPlans/[mealItemId].tsx"));
module.exports = __webpack_exports__;

})();