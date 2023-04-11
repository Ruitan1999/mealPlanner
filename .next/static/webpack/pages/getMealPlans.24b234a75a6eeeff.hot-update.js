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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    _s();\n    const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenPopup = ()=>{\n        setIsPopupOpen(true);\n    };\n    const handleClosePopup = ()=>{\n        setIsPopupOpen(false);\n    };\n    // Function to remove HTML tags\n    const removeHtmlTags = (str)=>{\n        // Create a new DOMParser\n        const parser = new DOMParser();\n        // Parse the string into a Document object\n        const doc = parser.parseFromString(str, \"text/html\");\n        // Get the text content of the Document (without HTML tags)\n        const text = doc.body.textContent || \"\";\n        // Return the text content\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: recipes === null || recipes === void 0 ? void 0 : recipes.map((recipe)=>{\n            // Added nullish coalescing operator to handle undefined recipes prop\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().header1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: recipe.image,\n                        alt: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().item)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().serving),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Serving Size\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.servings\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Cooking Time\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    recipe.readyInMinutes,\n                                                    \" min\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Health Score\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.healthScore\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().cost),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Price Per Serving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: [\n                                                \"$\",\n                                                recipe.pricePerServing\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().button2),\n                        href: \"\".concat(recipe.sourceUrl),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"View Item\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                lineNumber: 57,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MealItem, \"vFErrUU1qYQoaBmFpaEBY5pk8jE=\");\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUVXO0FBb0JuRCxNQUFNRyxXQUFXLFNBQWdDO1FBQS9CLEVBQUVDLFFBQU8sRUFBaUI7O0lBRTFDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBR3BELE1BQU1NLGtCQUFrQixJQUFNO1FBQzVCRCxlQUFlLElBQUk7SUFDckI7SUFFQSxNQUFNRSxtQkFBbUIsSUFBTTtRQUM3QkYsZUFBZSxLQUFLO0lBQ3RCO0lBR0EsK0JBQStCO0lBQy9CLE1BQU1HLGlCQUFpQixDQUFDQyxNQUF3QjtRQUM5Qyx5QkFBeUI7UUFDekIsTUFBTUMsU0FBUyxJQUFJQztRQUVuQiwwQ0FBMEM7UUFDMUMsTUFBTUMsTUFBTUYsT0FBT0csZUFBZSxDQUFDSixLQUFLO1FBRXhDLDJEQUEyRDtRQUMzRCxNQUFNSyxPQUFPRixJQUFJRyxJQUFJLENBQUNDLFdBQVcsSUFBSTtRQUVyQywwQkFBMEI7UUFDMUIsT0FBT0Y7SUFDVDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXakIscUVBQVk7a0JBQ3pCRSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNpQixHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUN4QixxRUFBcUU7WUFDckUscUJBQ0UsOERBQUNKO2dCQUFvQkMsV0FBV2pCLHdFQUFlOztrQ0FDN0MsOERBQUNzQjtrQ0FBSUYsT0FBT0csS0FBSzs7Ozs7O2tDQUNqQiw4REFBQ0M7d0JBQUlDLEtBQUtMLE9BQU9NLEtBQUs7d0JBQUVDLEtBQUtQLE9BQU9HLEtBQUs7Ozs7OztrQ0FDekMsOERBQUNQO3dCQUFJQyxXQUFXakIscUVBQVk7Ozs7OztrQ0FZNUIsOERBQUNnQjt3QkFBSUMsV0FBV2pCLHdFQUFlOzswQ0FDN0IsOERBQUNnQjtnQ0FBSUMsV0FBV2pCLHdFQUFlOztrREFDN0IsOERBQUNnQjs7MERBQ0MsOERBQUNlOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOzBEQUFJWixPQUFPYSxRQUFROzs7Ozs7Ozs7Ozs7a0RBRXRCLDhEQUFDakI7OzBEQUNDLDhEQUFDZTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzs7b0RBQUlaLE9BQU9jLGNBQWM7b0RBQUM7Ozs7Ozs7Ozs7Ozs7a0RBRTdCLDhEQUFDbEI7OzBEQUNDLDhEQUFDZTswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBSVosT0FBT2UsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ25CO2dDQUFJQyxXQUFXakIscUVBQVk7MENBQzFCLDRFQUFDZ0I7O3NEQUNDLDhEQUFDZTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQzs7Z0RBQUc7Z0RBQUVaLE9BQU9pQixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWxDLDhEQUFDQzt3QkFDQ3JCLFdBQVdqQix3RUFBZTt3QkFDMUJ3QyxNQUFNLEdBQW9CLE9BQWpCcEIsT0FBT3FCLFNBQVM7d0JBQ3pCQyxRQUFPO3dCQUNQQyxLQUFJO2tDQUVKLDRFQUFDQztzQ0FDQyw0RUFBQ0M7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNUNGekIsT0FBTzBCLEVBQUU7Ozs7O1FBaUR2Qjs7Ozs7O0FBR047R0F0Rk03QztLQUFBQTtBQXdGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4PzNlMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBSZWNpcGUge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBzZXJ2aW5nczogbnVtYmVyO1xuICByZWFkeUluTWludXRlczogbnVtYmVyO1xuICBoZWFsdGhTY29yZTogbnVtYmVyO1xuICBwcmljZVBlclNlcnZpbmc6IG51bWJlcjtcbiAgaW1hZ2U6IGFueTtcbiAgc291cmNlVXJsOiBhbnk7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgZGlldHM6IGFueTtcbiAgLy8gc3BlY2lmeSBvdGhlciBwcm9wZXJ0aWVzIGluIHlvdXIgcmVjaXBlIG9iamVjdFxufVxuXG5pbnRlcmZhY2UgTWVhbEl0ZW1Qcm9wcyB7XG4gIHJlY2lwZXM6IFJlY2lwZVtdO1xufVxuXG5jb25zdCBNZWFsSXRlbSA9ICh7IHJlY2lwZXMgfTogTWVhbEl0ZW1Qcm9wcykgPT4ge1xuXG4gIGNvbnN0IFtpc1BvcHVwT3Blbiwgc2V0SXNQb3B1cE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgY29uc3QgaGFuZGxlT3BlblBvcHVwID0gKCkgPT4ge1xuICAgIHNldElzUG9wdXBPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgc2V0SXNQb3B1cE9wZW4oZmFsc2UpO1xuICB9O1xuICBcblxuICAvLyBGdW5jdGlvbiB0byByZW1vdmUgSFRNTCB0YWdzXG4gIGNvbnN0IHJlbW92ZUh0bWxUYWdzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgRE9NUGFyc2VyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgLy8gUGFyc2UgdGhlIHN0cmluZyBpbnRvIGEgRG9jdW1lbnQgb2JqZWN0XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgLy8gR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIERvY3VtZW50ICh3aXRob3V0IEhUTUwgdGFncylcbiAgICBjb25zdCB0ZXh0ID0gZG9jLmJvZHkudGV4dENvbnRlbnQgfHwgXCJcIjtcblxuICAgIC8vIFJldHVybiB0aGUgdGV4dCBjb250ZW50XG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIHtyZWNpcGVzPy5tYXAoKHJlY2lwZSkgPT4ge1xuICAgICAgICAvLyBBZGRlZCBudWxsaXNoIGNvYWxlc2Npbmcgb3BlcmF0b3IgdG8gaGFuZGxlIHVuZGVmaW5lZCByZWNpcGVzIHByb3BcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cmVjaXBlLmlkfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyMX0+XG4gICAgICAgICAgICA8aDE+e3JlY2lwZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3JlY2lwZS5pbWFnZX0gYWx0PXtyZWNpcGUudGl0bGV9PjwvaW1nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgICAgICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3JlbW92ZUh0bWxUYWdzKHJlY2lwZS5zdW1tYXJ5KX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9nZXRNZWFsUGxhbnMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIDxidXR0b24+VmlldyBJdGVtPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcnZpbmd9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+U2VydmluZyBTaXplPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnNlcnZpbmdzfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Db29raW5nIFRpbWU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUucmVhZHlJbk1pbnV0ZXN9IG1pbjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZWFsdGggU2NvcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuaGVhbHRoU2NvcmV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvc3R9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+UHJpY2UgUGVyIFNlcnZpbmc8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPiR7cmVjaXBlLnByaWNlUGVyU2VydmluZ308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjJ9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake3JlY2lwZS5zb3VyY2VVcmx9YH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+VmlldyBJdGVtPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJNZWFsSXRlbSIsInJlY2lwZXMiLCJpc1BvcHVwT3BlbiIsInNldElzUG9wdXBPcGVuIiwiaGFuZGxlT3BlblBvcHVwIiwiaGFuZGxlQ2xvc2VQb3B1cCIsInJlbW92ZUh0bWxUYWdzIiwic3RyIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwidGV4dCIsImJvZHkiLCJ0ZXh0Q29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJtYXAiLCJyZWNpcGUiLCJoZWFkZXIxIiwiaDEiLCJ0aXRsZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaXRlbSIsImRldGFpbHMiLCJzZXJ2aW5nIiwiaDMiLCJoMiIsInNlcnZpbmdzIiwicmVhZHlJbk1pbnV0ZXMiLCJoZWFsdGhTY29yZSIsImNvc3QiLCJwcmljZVBlclNlcnZpbmciLCJhIiwiYnV0dG9uMiIsImhyZWYiLCJzb3VyY2VVcmwiLCJ0YXJnZXQiLCJyZWwiLCJidXR0b24iLCJzcGFuIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});