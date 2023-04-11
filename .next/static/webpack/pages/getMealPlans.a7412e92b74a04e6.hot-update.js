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

/***/ "./pages/getMealPlans/MealItem.tsx":
/*!*****************************************!*\
  !*** ./pages/getMealPlans/MealItem.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PopupOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupOverlay */ \"./pages/getMealPlans/PopupOverlay.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    _s();\n    const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenPopup = ()=>{\n        setIsPopupOpen(true);\n    };\n    const handleClosePopup = ()=>{\n        setIsPopupOpen(false);\n    };\n    // const removeHtmlTags = (str: string): string => {\n    //   const parser = new DOMParser();\n    //   const doc = parser.parseFromString(str, \"text/html\");\n    //   const text = doc.body.textContent || \"\";\n    //   return text;\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: recipes === null || recipes === void 0 ? void 0 : recipes.map((recipe)=>{\n            // Added nullish coalescing operator to handle undefined recipes prop\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().header1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: recipe.image,\n                        alt: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().item)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().serving),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Serving Size\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.servings\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Cooking Time\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    recipe.readyInMinutes,\n                                                    \" min\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Health Score\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.healthScore\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cost),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Price Per Serving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: [\n                                                \"$\",\n                                                recipe.pricePerServing\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleOpenPopup,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"View Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 15\n                    }, undefined),\n                    isPopupOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopupOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClose: handleClosePopup\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MealItem, \"vFErrUU1qYQoaBmFpaEBY5pk8jE=\");\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFFVztBQUNUO0FBb0IxQyxNQUFNSSxXQUFXLFNBQWdDO1FBQS9CLEVBQUVDLFFBQU8sRUFBaUI7O0lBQzFDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBELE1BQU1PLGtCQUFrQixJQUFNO1FBQzVCRCxlQUFlLElBQUk7SUFDckI7SUFFQSxNQUFNRSxtQkFBbUIsSUFBTTtRQUM3QkYsZUFBZSxLQUFLO0lBQ3RCO0lBRUEsb0RBQW9EO0lBQ3BELG9DQUFvQztJQUNwQywwREFBMEQ7SUFDMUQsNkNBQTZDO0lBQzdDLGlCQUFpQjtJQUNqQixLQUFLO0lBRUwscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdULHFFQUFZO2tCQUN6Qkcsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTUSxHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUN4QixxRUFBcUU7WUFDckUscUJBQ0UsOERBQUNKO2dCQUFvQkMsV0FBV1Qsd0VBQWU7O2tDQUM3Qyw4REFBQ2M7a0NBQUlGLE9BQU9HLEtBQUs7Ozs7OztrQ0FDakIsOERBQUNDO3dCQUFJQyxLQUFLTCxPQUFPTSxLQUFLO3dCQUFFQyxLQUFLUCxPQUFPRyxLQUFLOzs7Ozs7a0NBQ3pDLDhEQUFDUDt3QkFBSUMsV0FBV1QscUVBQVk7Ozs7OztrQ0FXNUIsOERBQUNRO3dCQUFJQyxXQUFXVCx3RUFBZTs7MENBQzdCLDhEQUFDUTtnQ0FBSUMsV0FBV1Qsd0VBQWU7O2tEQUM3Qiw4REFBQ1E7OzBEQUNDLDhEQUFDZTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBSVosT0FBT2EsUUFBUTs7Ozs7Ozs7Ozs7O2tEQUV0Qiw4REFBQ2pCOzswREFDQyw4REFBQ2U7MERBQUc7Ozs7OzswREFDSiw4REFBQ0M7O29EQUFJWixPQUFPYyxjQUFjO29EQUFDOzs7Ozs7Ozs7Ozs7O2tEQUU3Qiw4REFBQ2xCOzswREFDQyw4REFBQ2U7MERBQUc7Ozs7OzswREFDSiw4REFBQ0M7MERBQUlaLE9BQU9lLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHM0IsOERBQUNuQjtnQ0FBSUMsV0FBV1QscUVBQVk7MENBQzFCLDRFQUFDUTs7c0RBQ0MsOERBQUNlO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNDOztnREFBRztnREFBRVosT0FBT2lCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FVaEMsOERBQUNDO3dCQUFRQyxTQUFTekI7a0NBQ2hCLDRFQUFDMEI7c0NBQUs7Ozs7Ozs7Ozs7O29CQUdUNUIsNkJBQWUsOERBQUNILHFEQUFZQTt3QkFBQ2dDLFNBQVMxQjs7Ozs7OztlQTlDL0JLLE9BQU9zQixFQUFFOzs7OztRQWlEdkI7Ozs7OztBQUdOO0dBM0VNaEM7S0FBQUE7QUE2RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0TWVhbFBsYW5zL01lYWxJdGVtLnRzeD8zZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFBvcHVwT3ZlcmxheSBmcm9tIFwiLi9Qb3B1cE92ZXJsYXlcIjtcblxuaW50ZXJmYWNlIFJlY2lwZSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNlcnZpbmdzOiBudW1iZXI7XG4gIHJlYWR5SW5NaW51dGVzOiBudW1iZXI7XG4gIGhlYWx0aFNjb3JlOiBudW1iZXI7XG4gIHByaWNlUGVyU2VydmluZzogbnVtYmVyO1xuICBpbWFnZTogYW55O1xuICBzb3VyY2VVcmw6IGFueTtcbiAgc3VtbWFyeTogc3RyaW5nO1xuICBkaWV0czogYW55O1xuICAvLyBzcGVjaWZ5IG90aGVyIHByb3BlcnRpZXMgaW4geW91ciByZWNpcGUgb2JqZWN0XG59XG5cbmludGVyZmFjZSBNZWFsSXRlbVByb3BzIHtcbiAgcmVjaXBlczogUmVjaXBlW107XG59XG5cbmNvbnN0IE1lYWxJdGVtID0gKHsgcmVjaXBlcyB9OiBNZWFsSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0SXNQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICBzZXRJc1BvcHVwT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHNldElzUG9wdXBPcGVuKGZhbHNlKTtcbiAgfTtcblxuICAvLyBjb25zdCByZW1vdmVIdG1sVGFncyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAvLyAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCBcInRleHQvaHRtbFwiKTtcbiAgLy8gICBjb25zdCB0ZXh0ID0gZG9jLmJvZHkudGV4dENvbnRlbnQgfHwgXCJcIjtcbiAgLy8gICByZXR1cm4gdGV4dDtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAge3JlY2lwZXM/Lm1hcCgocmVjaXBlKSA9PiB7XG4gICAgICAgIC8vIEFkZGVkIG51bGxpc2ggY29hbGVzY2luZyBvcGVyYXRvciB0byBoYW5kbGUgdW5kZWZpbmVkIHJlY2lwZXMgcHJvcFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtyZWNpcGUuaWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXIxfT5cbiAgICAgICAgICAgIDxoMT57cmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17cmVjaXBlLmltYWdlfSBhbHQ9e3JlY2lwZS50aXRsZX0+PC9pbWc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1bW1hcnl9PlxuICAgICAgICAgICAgICAgIDxoMz5TdW1tYXJ5PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57cmVtb3ZlSHRtbFRhZ3MocmVjaXBlLnN1bW1hcnkpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL2dldE1lYWxQbGFucy8ke3JlY2lwZS5pZH1gfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcnZpbmd9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+U2VydmluZyBTaXplPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnNlcnZpbmdzfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Db29raW5nIFRpbWU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUucmVhZHlJbk1pbnV0ZXN9IG1pbjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZWFsdGggU2NvcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuaGVhbHRoU2NvcmV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvc3R9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+UHJpY2UgUGVyIFNlcnZpbmc8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPiR7cmVjaXBlLnByaWNlUGVyU2VydmluZ308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b24yfVxuICAgICAgICAgICAgICBocmVmPXtgJHtyZWNpcGUuc291cmNlVXJsfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17aGFuZGxlT3BlblBvcHVwfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5WaWV3IEl0ZW08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIDwvYT4gKi99XG4gICAgICAgICAgICB7aXNQb3B1cE9wZW4gJiYgPFBvcHVwT3ZlcmxheSBvbkNsb3NlPXtoYW5kbGVDbG9zZVBvcHVwfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJQb3B1cE92ZXJsYXkiLCJNZWFsSXRlbSIsInJlY2lwZXMiLCJpc1BvcHVwT3BlbiIsInNldElzUG9wdXBPcGVuIiwiaGFuZGxlT3BlblBvcHVwIiwiaGFuZGxlQ2xvc2VQb3B1cCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJtYXAiLCJyZWNpcGUiLCJoZWFkZXIxIiwiaDEiLCJ0aXRsZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaXRlbSIsImRldGFpbHMiLCJzZXJ2aW5nIiwiaDMiLCJoMiIsInNlcnZpbmdzIiwicmVhZHlJbk1pbnV0ZXMiLCJoZWFsdGhTY29yZSIsImNvc3QiLCJwcmljZVBlclNlcnZpbmciLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsIm9uQ2xvc2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});