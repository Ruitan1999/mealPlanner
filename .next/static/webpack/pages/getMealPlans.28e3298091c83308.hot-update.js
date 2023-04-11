"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/getMealPlans",{

/***/ "./pages/getMealPlans/PopupOverlay.tsx":
/*!*********************************************!*\
  !*** ./pages/getMealPlans/PopupOverlay.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PopupOverley_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupOverley.module.css */ \"./pages/getMealPlans/PopupOverley.module.css\");\n/* harmony import */ var _PopupOverley_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PopupOverley_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// PopupOverlay.tsx\n\n\n\nconst PopupOverlay = (param)=>{\n    let { onClose , recipes , recipeId  } = param;\n    const matchedRecipe = recipes.find((recipe)=>recipe.id === recipeId); // Find the matching recipe based on recipeId\n    const removeHtmlTags = (str)=>{\n        const parser = new DOMParser();\n        const doc = parser.parseFromString(str, \"text/html\");\n        const text = doc.body.textContent || \"\";\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PopupOverley_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupOverlay),\n        onClick: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_PopupOverley_module_css__WEBPACK_IMPORTED_MODULE_2___default().popupContent),\n            children: matchedRecipe ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: matchedRecipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PopupOverley_module_css__WEBPACK_IMPORTED_MODULE_2___default().summary),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Summary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: removeHtmlTags(matchedRecipe.summary)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClose,\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, matchedRecipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"No Recipe Found\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClose,\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/PopupOverlay.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PopupOverlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopupOverlay);\nvar _c;\n$RefreshReg$(_c, \"PopupOverlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXRNZWFsUGxhbnMvUG9wdXBPdmVybGF5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUJBQW1COztBQUVPO0FBQ3FCO0FBdUIvQyxNQUFNRSxlQUFlLFNBQW1EO1FBQWxELEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxTQUFRLEVBQWlCO0lBSWpFLE1BQU1DLGdCQUFnQkYsUUFBUUcsSUFBSSxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPQyxFQUFFLEtBQUtKLFdBQVcsNkNBQTZDO0lBRWpILE1BQU1LLGlCQUFpQixDQUFDQyxNQUF3QjtRQUNoRCxNQUFNQyxTQUFTLElBQUlDO1FBQ25CLE1BQU1DLE1BQU1GLE9BQU9HLGVBQWUsQ0FBQ0osS0FBSztRQUN4QyxNQUFNSyxPQUFPRixJQUFJRyxJQUFJLENBQUNDLFdBQVcsSUFBSTtRQUNyQyxPQUFPRjtJQUNUO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVduQiw4RUFBb0I7UUFBRXFCLFNBQVNuQjtrQkFDN0MsNEVBQUNnQjtZQUFJQyxXQUFXbkIsOEVBQW9CO3NCQUNuQ0ssOEJBQ0csOERBQUNhOztrQ0FDQyw4REFBQ0s7a0NBQUlsQixjQUFjbUIsS0FBSzs7Ozs7O2tDQUN4Qiw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDUDt3QkFBSUMsV0FBV25CLHlFQUFlOzswQ0FDM0IsOERBQUMyQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDRjswQ0FBR2hCLGVBQWVKLGNBQWNxQixPQUFPOzs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDRTt3QkFBT1AsU0FBU25CO2tDQUFTOzs7Ozs7O2VBUmxCRyxjQUFjRyxFQUFFOzs7OzBDQVcxQiw4REFBQ1U7O2tDQUNDLDhEQUFDSztrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDSzt3QkFBT1AsU0FBU25CO2tDQUFTOzs7Ozs7Ozs7Ozt5QkFFN0I7Ozs7Ozs7Ozs7O0FBSVQ7S0FyQ01EO0FBdUNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dldE1lYWxQbGFucy9Qb3B1cE92ZXJsYXkudHN4PzMyODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9wdXBPdmVybGF5LnRzeFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9Qb3B1cE92ZXJsZXkubW9kdWxlLmNzcydcblxuaW50ZXJmYWNlIFJlY2lwZSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNlcnZpbmdzOiBudW1iZXI7XG4gIHJlYWR5SW5NaW51dGVzOiBudW1iZXI7XG4gIGhlYWx0aFNjb3JlOiBudW1iZXI7XG4gIHByaWNlUGVyU2VydmluZzogbnVtYmVyO1xuICBpbWFnZTogYW55O1xuICBzb3VyY2VVcmw6IGFueTtcbiAgc3VtbWFyeTogc3RyaW5nO1xuICBkaWV0czogYW55O1xuICAvLyBzcGVjaWZ5IG90aGVyIHByb3BlcnRpZXMgaW4geW91ciByZWNpcGUgb2JqZWN0XG59XG5cblxuaW50ZXJmYWNlIE1lYWxJdGVtUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICByZWNpcGVzOiBSZWNpcGVbXTtcbiAgcmVjaXBlSWQ6IG51bWJlcjsgLy8gQWRkIGEgbmV3IHByb3AgZm9yIHRoZSByZWNpcGUgSURcbn1cblxuY29uc3QgUG9wdXBPdmVybGF5ID0gKHsgb25DbG9zZSwgcmVjaXBlcywgcmVjaXBlSWQgfTogTWVhbEl0ZW1Qcm9wcykgPT4ge1xuXG5cbiAgXG4gIGNvbnN0IG1hdGNoZWRSZWNpcGUgPSByZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gcmVjaXBlSWQpOyAvLyBGaW5kIHRoZSBtYXRjaGluZyByZWNpcGUgYmFzZWQgb24gcmVjaXBlSWRcblxuICAgIGNvbnN0IHJlbW92ZUh0bWxUYWdzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC9odG1sXCIpO1xuICAgIGNvbnN0IHRleHQgPSBkb2MuYm9keS50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucG9wdXBPdmVybGF5fSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBvcHVwQ29udGVudH0+XG4gICAgICB7bWF0Y2hlZFJlY2lwZSA/ICggLy8gUmVuZGVyIHRoZSBjb250ZW50IG9ubHkgaWYgYSByZWNpcGUgaXMgbWF0Y2hlZFxuICAgICAgICAgIDxkaXYga2V5PXttYXRjaGVkUmVjaXBlLmlkfT5cbiAgICAgICAgICAgIDxoMT57bWF0Y2hlZFJlY2lwZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICAgICAgICAgICAgPGgzPlN1bW1hcnk8L2gzPlxuICAgICAgICAgICAgICAgIDxwPntyZW1vdmVIdG1sVGFncyhtYXRjaGVkUmVjaXBlLnN1bW1hcnkpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPk5vIFJlY2lwZSBGb3VuZDwvaDE+XG4gICAgICAgICAgICB7LyogUmVuZGVyIGEgbWVzc2FnZSBpZiBubyByZWNpcGUgaXMgZm91bmQgKi99XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwT3ZlcmxheTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzZXMiLCJQb3B1cE92ZXJsYXkiLCJvbkNsb3NlIiwicmVjaXBlcyIsInJlY2lwZUlkIiwibWF0Y2hlZFJlY2lwZSIsImZpbmQiLCJyZWNpcGUiLCJpZCIsInJlbW92ZUh0bWxUYWdzIiwic3RyIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwidGV4dCIsImJvZHkiLCJ0ZXh0Q29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInBvcHVwT3ZlcmxheSIsIm9uQ2xpY2siLCJwb3B1cENvbnRlbnQiLCJoMSIsInRpdGxlIiwicCIsInN1bW1hcnkiLCJoMyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/getMealPlans/PopupOverlay.tsx\n"));

/***/ })

});