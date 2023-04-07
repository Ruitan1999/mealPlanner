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

/***/ "./src/pages/getMealPlans/MealItem.tsx":
/*!*********************************************!*\
  !*** ./src/pages/getMealPlans/MealItem.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: recipes.map((recipe)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, recipe.id, false, {\n                        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().serving),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Serving Size\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.servings\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Cooking Time\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.readyInMinutes\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Health Score\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.healthScore\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cost),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Price Per Serving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: recipe.pricePerServing\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/getMealPlans/\".concat(recipe.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"View Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Desktop/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2V0TWVhbFBsYW5zL01lYWxJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBRVU7QUFFdEI7QUFpQjdCLE1BQU1HLFdBQVcsU0FBZ0M7UUFBL0IsRUFBRUMsUUFBTyxFQUFpQjtJQUMxQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0wscUVBQVk7a0JBQ3pCRyxRQUFRSSxHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUN2QixxQkFDRTs7a0NBQ0UsOERBQUNDO2tDQUFvQkQsT0FBT0UsS0FBSzt1QkFBeEJGLE9BQU9HLEVBQUU7Ozs7O2tDQUVsQiw4REFBQ1A7d0JBQUlDLFdBQVdMLHdFQUFlOzswQ0FDN0IsOERBQUNJO2dDQUFJQyxXQUFXTCx3RUFBZTs7a0RBQzdCLDhEQUFDSTs7MERBQ0MsOERBQUNVOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFJUCxPQUFPUSxRQUFROzs7Ozs7Ozs7Ozs7a0RBRXRCLDhEQUFDWjs7MERBQ0MsOERBQUNVOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFJUCxPQUFPUyxjQUFjOzs7Ozs7Ozs7Ozs7a0RBRTVCLDhEQUFDYjs7MERBQ0MsOERBQUNVOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFJUCxPQUFPVSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzNCLDhEQUFDZDtnQ0FBSUMsV0FBV0wscUVBQVk7MENBQzFCLDRFQUFDSTs7c0RBQ0MsOERBQUNVO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNDO3NEQUFJUCxPQUFPWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJakMsOERBQUNuQixrREFBSUE7d0JBQUNvQixNQUFNLGlCQUEyQixPQUFWYixPQUFPRyxFQUFFO2tDQUNwQyw0RUFBQ1c7c0NBQU87Ozs7Ozs7Ozs7Ozs7UUFJaEI7Ozs7OztBQUdOO0tBdENNcEI7QUF3Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dldE1lYWxQbGFucy9NZWFsSXRlbS50c3g/MWZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgdGVzdEltZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2Jhbm5lci5wbmdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFJlY2lwZSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNlcnZpbmdzOiBudW1iZXI7XG4gIHJlYWR5SW5NaW51dGVzOiBudW1iZXI7XG4gIGhlYWx0aFNjb3JlOiBudW1iZXI7XG4gIHByaWNlUGVyU2VydmluZzogbnVtYmVyO1xuICBpbWFnZTogYW55O1xuICAvLyBzcGVjaWZ5IG90aGVyIHByb3BlcnRpZXMgaW4geW91ciByZWNpcGUgb2JqZWN0XG59XG5cbmludGVyZmFjZSBNZWFsSXRlbVByb3BzIHtcbiAgcmVjaXBlczogUmVjaXBlW107XG59XG5cbmNvbnN0IE1lYWxJdGVtID0gKHsgcmVjaXBlcyB9OiBNZWFsSXRlbVByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICB7cmVjaXBlcy5tYXAoKHJlY2lwZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDEga2V5PXtyZWNpcGUuaWR9PntyZWNpcGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtyZWNpcGUuaW1hZ2V9IGFsdD17cmVjaXBlLnRpdGxlfT48L0ltYWdlPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXJ2aW5nfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPlNlcnZpbmcgU2l6ZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5zZXJ2aW5nc308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+Q29va2luZyBUaW1lPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnJlYWR5SW5NaW51dGVzfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZWFsdGggU2NvcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuaGVhbHRoU2NvcmV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvc3R9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+UHJpY2UgUGVyIFNlcnZpbmc8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUucHJpY2VQZXJTZXJ2aW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2dldE1lYWxQbGFucy8ke3JlY2lwZS5pZH1gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiTGluayIsIk1lYWxJdGVtIiwicmVjaXBlcyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJtYXAiLCJyZWNpcGUiLCJoMSIsInRpdGxlIiwiaWQiLCJkZXRhaWxzIiwic2VydmluZyIsImgzIiwiaDIiLCJzZXJ2aW5ncyIsInJlYWR5SW5NaW51dGVzIiwiaGVhbHRoU2NvcmUiLCJjb3N0IiwicHJpY2VQZXJTZXJ2aW5nIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});