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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PopupOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupOverlay */ \"./pages/getMealPlans/PopupOverlay.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    _s();\n    const getDataFromLocalStorage = (key)=>{\n        if (true) {\n            // Check if window is defined (to avoid issues during server-side rendering)\n            const storedData = localStorage.getItem(key);\n            return storedData ? JSON.parse(storedData) : null;\n        }\n        return null;\n    };\n    // Usage\n    const recipess = getDataFromLocalStorage(\"recipes\");\n    console.log(recipess);\n    const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenPopup = ()=>{\n        setIsPopupOpen(true);\n    };\n    const handleClosePopup = ()=>{\n        setIsPopupOpen(false);\n    };\n    // const removeHtmlTags = (str: string): string => {\n    //   const parser = new DOMParser();\n    //   const doc = parser.parseFromString(str, \"text/html\");\n    //   const text = doc.body.textContent || \"\";\n    //   return text;\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: recipes === null || recipes === void 0 ? void 0 : recipes.map((recipe)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().header1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: recipe.image,\n                        alt: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().item)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().serving),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Serving Size\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.servings\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Cooking Time\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    recipe.readyInMinutes,\n                                                    \" min\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Health Score\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.healthScore\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().cost),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Price Per Serving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: [\n                                                \"$\",\n                                                recipe.pricePerServing\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleOpenPopup,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"View Item\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, undefined),\n                    isPopupOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopupOverlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onClose: handleClosePopup,\n                        recipes: recipes,\n                        recipeId: recipe.id\n                    }, recipe.id, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                lineNumber: 62,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MealItem, \"vFErrUU1qYQoaBmFpaEBY5pk8jE=\");\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFFVztBQUNUO0FBb0IxQyxNQUFNSSxXQUFXLFNBQWdDO1FBQS9CLEVBQUVDLFFBQU8sRUFBaUI7O0lBRTFDLE1BQU1DLDBCQUEwQixDQUFDQyxNQUE0QjtRQUMzRCxJQUFJLElBQTZCLEVBQUU7WUFDakMsNEVBQTRFO1lBQzVFLE1BQU1DLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQ0g7WUFDeEMsT0FBT0MsYUFBYUcsS0FBS0MsS0FBSyxDQUFDSixjQUFjLElBQUk7UUFDbkQsQ0FBQztRQUNELE9BQU8sSUFBSTtJQUNiO0lBRUEsUUFBUTtJQUNSLE1BQU1LLFdBQVdQLHdCQUF3QjtJQUN6Q1EsUUFBUUMsR0FBRyxDQUFDRjtJQUdaLE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNaUIsa0JBQWtCLElBQU07UUFDNUJELGVBQWUsSUFBSTtJQUNyQjtJQUVBLE1BQU1FLG1CQUFtQixJQUFNO1FBQzdCRixlQUFlLEtBQUs7SUFDdEI7SUFFQSxvREFBb0Q7SUFDcEQsb0NBQW9DO0lBQ3BDLDBEQUEwRDtJQUMxRCw2Q0FBNkM7SUFDN0MsaUJBQWlCO0lBQ2pCLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV25CLHFFQUFZO2tCQUN6Qkcsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTa0IsR0FBRyxDQUFDLENBQUNDLFNBQVc7WUFFeEIscUJBQ0UsOERBQUNKO2dCQUFvQkMsV0FBV25CLHdFQUFlOztrQ0FDN0MsOERBQUN3QjtrQ0FBSUYsT0FBT0csS0FBSzs7Ozs7O2tDQUNqQiw4REFBQ0M7d0JBQUlDLEtBQUtMLE9BQU9NLEtBQUs7d0JBQUVDLEtBQUtQLE9BQU9HLEtBQUs7Ozs7OztrQ0FDekMsOERBQUNQO3dCQUFJQyxXQUFXbkIscUVBQVk7Ozs7OztrQ0FTNUIsOERBQUNrQjt3QkFBSUMsV0FBV25CLHdFQUFlOzswQ0FDN0IsOERBQUNrQjtnQ0FBSUMsV0FBV25CLHdFQUFlOztrREFDN0IsOERBQUNrQjs7MERBQ0MsOERBQUNlOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFJWixPQUFPYSxRQUFROzs7Ozs7Ozs7Ozs7a0RBRXRCLDhEQUFDakI7OzBEQUNDLDhEQUFDZTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzs7b0RBQUlaLE9BQU9jLGNBQWM7b0RBQUM7Ozs7Ozs7Ozs7Ozs7a0RBRTdCLDhEQUFDbEI7OzBEQUNDLDhEQUFDZTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBSVosT0FBT2UsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ25CO2dDQUFJQyxXQUFXbkIscUVBQVk7MENBQzFCLDRFQUFDa0I7O3NEQUNDLDhEQUFDZTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQzs7Z0RBQUc7Z0RBQUVaLE9BQU9pQixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2hDLDhEQUFDQzt3QkFBUUMsU0FBU3pCO2tDQUNoQiw0RUFBQzBCO3NDQUFLOzs7Ozs7Ozs7OztvQkFHVDVCLDZCQUFlLDhEQUFDYixxREFBWUE7d0JBQUMwQyxTQUFTMUI7d0JBQWtCZCxTQUFTQTt3QkFBMEJ5QyxVQUFVdEIsT0FBT3VCLEVBQUU7dUJBQS9CdkIsT0FBT3VCLEVBQUU7Ozs7OztlQXZDakZ2QixPQUFPdUIsRUFBRTs7Ozs7UUEwQ3ZCOzs7Ozs7QUFHTjtHQW5GTTNDO0tBQUFBO0FBcUZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dldE1lYWxQbGFucy9NZWFsSXRlbS50c3g/M2UxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQb3B1cE92ZXJsYXkgZnJvbSBcIi4vUG9wdXBPdmVybGF5XCI7XG5cbmludGVyZmFjZSBSZWNpcGUge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBzZXJ2aW5nczogbnVtYmVyO1xuICByZWFkeUluTWludXRlczogbnVtYmVyO1xuICBoZWFsdGhTY29yZTogbnVtYmVyO1xuICBwcmljZVBlclNlcnZpbmc6IG51bWJlcjtcbiAgaW1hZ2U6IGFueTtcbiAgc291cmNlVXJsOiBhbnk7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgZGlldHM6IGFueTtcbiAgLy8gc3BlY2lmeSBvdGhlciBwcm9wZXJ0aWVzIGluIHlvdXIgcmVjaXBlIG9iamVjdFxufVxuXG5pbnRlcmZhY2UgTWVhbEl0ZW1Qcm9wcyB7XG4gIHJlY2lwZXM6IFJlY2lwZVtdO1xufVxuXG5jb25zdCBNZWFsSXRlbSA9ICh7IHJlY2lwZXMgfTogTWVhbEl0ZW1Qcm9wcykgPT4ge1xuXG4gIGNvbnN0IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlID0gKGtleTogc3RyaW5nKTogYW55IHwgbnVsbCA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIENoZWNrIGlmIHdpbmRvdyBpcyBkZWZpbmVkICh0byBhdm9pZCBpc3N1ZXMgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZylcbiAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgcmV0dXJuIHN0b3JlZERhdGEgPyBKU09OLnBhcnNlKHN0b3JlZERhdGEpIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIFxuICAvLyBVc2FnZVxuICBjb25zdCByZWNpcGVzcyA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKFwicmVjaXBlc1wiKTtcbiAgY29uc29sZS5sb2cocmVjaXBlc3MpOyBcblxuXG4gIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0SXNQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW5Qb3B1cCA9ICgpID0+IHtcbiAgICBzZXRJc1BvcHVwT3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHNldElzUG9wdXBPcGVuKGZhbHNlKTtcbiAgfTtcblxuICAvLyBjb25zdCByZW1vdmVIdG1sVGFncyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAvLyAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCBcInRleHQvaHRtbFwiKTtcbiAgLy8gICBjb25zdCB0ZXh0ID0gZG9jLmJvZHkudGV4dENvbnRlbnQgfHwgXCJcIjtcbiAgLy8gICByZXR1cm4gdGV4dDtcbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAge3JlY2lwZXM/Lm1hcCgocmVjaXBlKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cmVjaXBlLmlkfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyMX0+XG4gICAgICAgICAgICA8aDE+e3JlY2lwZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3JlY2lwZS5pbWFnZX0gYWx0PXtyZWNpcGUudGl0bGV9PjwvaW1nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgICAgICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3JlbW92ZUh0bWxUYWdzKHJlY2lwZS5zdW1tYXJ5KX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VydmluZ30+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5TZXJ2aW5nIFNpemU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuc2VydmluZ3N9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPkNvb2tpbmcgVGltZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5yZWFkeUluTWludXRlc30gbWluPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPkhlYWx0aCBTY29yZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5oZWFsdGhTY29yZX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29zdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5QcmljZSBQZXIgU2VydmluZzwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+JHtyZWNpcGUucHJpY2VQZXJTZXJ2aW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgICAgICAgIDxidXR0b24gIG9uQ2xpY2s9e2hhbmRsZU9wZW5Qb3B1cH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+VmlldyBJdGVtPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAge2lzUG9wdXBPcGVuICYmIDxQb3B1cE92ZXJsYXkgb25DbG9zZT17aGFuZGxlQ2xvc2VQb3B1cH0gcmVjaXBlcz17cmVjaXBlc30ga2V5PXtyZWNpcGUuaWR9ICByZWNpcGVJZD17cmVjaXBlLmlkfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJQb3B1cE92ZXJsYXkiLCJNZWFsSXRlbSIsInJlY2lwZXMiLCJnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSIsImtleSIsInN0b3JlZERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicmVjaXBlc3MiLCJjb25zb2xlIiwibG9nIiwiaXNQb3B1cE9wZW4iLCJzZXRJc1BvcHVwT3BlbiIsImhhbmRsZU9wZW5Qb3B1cCIsImhhbmRsZUNsb3NlUG9wdXAiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwibWFwIiwicmVjaXBlIiwiaGVhZGVyMSIsImgxIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIml0ZW0iLCJkZXRhaWxzIiwic2VydmluZyIsImgzIiwiaDIiLCJzZXJ2aW5ncyIsInJlYWR5SW5NaW51dGVzIiwiaGVhbHRoU2NvcmUiLCJjb3N0IiwicHJpY2VQZXJTZXJ2aW5nIiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJvbkNsb3NlIiwicmVjaXBlSWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});