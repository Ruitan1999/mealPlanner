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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    // Function to remove HTML tags\n    const removeHtmlTags = (str)=>{\n        // Create a new DOMParser\n        const parser = new DOMParser();\n        // Parse the string into a Document object\n        const doc = parser.parseFromString(str, \"text/html\");\n        // Get the text content of the Document (without HTML tags)\n        const text = doc.body.textContent || \"\";\n        // Return the text content\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: recipes.map((recipe)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: recipe.image,\n                        alt: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: removeHtmlTags(recipe.summary)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().serving),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        children: \"Serving Size\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        children: recipe.servings\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        children: \"Cooking Time\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        children: [\n                                                            recipe.readyInMinutes,\n                                                            \" min\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        children: \"Health Score\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        children: recipe.healthScore\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().cost),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Price Per Serving\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: [\n                                                        \"$\",\n                                                        recipe.pricePerServing\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().button2),\n                                href: \"\".concat(recipe.sourceUrl),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"View Item\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 12\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2V0TWVhbFBsYW5zL01lYWxJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUVVO0FBcUJuRCxNQUFNRSxXQUFXLFNBQWdDO1FBQS9CLEVBQUVDLFFBQU8sRUFBaUI7SUFDMUMsK0JBQStCO0lBQy9CLE1BQU1DLGlCQUFpQixDQUFDQyxNQUF3QjtRQUM5Qyx5QkFBeUI7UUFDekIsTUFBTUMsU0FBUyxJQUFJQztRQUVuQiwwQ0FBMEM7UUFDMUMsTUFBTUMsTUFBTUYsT0FBT0csZUFBZSxDQUFDSixLQUFLO1FBRXhDLDJEQUEyRDtRQUMzRCxNQUFNSyxPQUFPRixJQUFJRyxJQUFJLENBQUNDLFdBQVcsSUFBSTtRQUVyQywwQkFBMEI7UUFDMUIsT0FBT0Y7SUFDVDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXYixxRUFBWTtrQkFDekJFLFFBQVFhLEdBQUcsQ0FBQyxDQUFDQyxTQUFXO1lBQ3ZCLHFCQUNFLDhEQUFDSjs7a0NBRUcsOERBQUNLO2tDQUFJRCxPQUFPRSxLQUFLOzs7Ozs7a0NBQ2pCLDhEQUFDQzt3QkFBSUMsS0FBS0osT0FBT0ssS0FBSzt3QkFBRUMsS0FBS04sT0FBT0UsS0FBSzs7Ozs7O2tDQUM1Qyw4REFBQ047OzBDQUNBLDhEQUFDVzswQ0FBR3BCLGVBQWVhLE9BQU9RLE9BQU87Ozs7OzswQ0FDakMsOERBQUNaO2dDQUFJQyxXQUFXYix3RUFBZTs7a0RBQzdCLDhEQUFDWTt3Q0FBSUMsV0FBV2Isd0VBQWU7OzBEQUM3Qiw4REFBQ1k7O2tFQUNDLDhEQUFDZTtrRUFBRzs7Ozs7O2tFQUNKLDhEQUFDQztrRUFBSVosT0FBT2EsUUFBUTs7Ozs7Ozs7Ozs7OzBEQUV0Qiw4REFBQ2pCOztrRUFDQyw4REFBQ2U7a0VBQUc7Ozs7OztrRUFDSiw4REFBQ0M7OzREQUFJWixPQUFPYyxjQUFjOzREQUFDOzs7Ozs7Ozs7Ozs7OzBEQUU3Qiw4REFBQ2xCOztrRUFDQyw4REFBQ2U7a0VBQUc7Ozs7OztrRUFDSiw4REFBQ0M7a0VBQUlaLE9BQU9lLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFHM0IsOERBQUNuQjt3Q0FBSUMsV0FBV2IscUVBQVk7a0RBQzFCLDRFQUFDWTs7OERBQ0MsOERBQUNlOzhEQUFHOzs7Ozs7OERBQ0osOERBQUNDOzt3REFBRzt3REFBRVosT0FBT2lCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPbEMsOERBQUNDO2dDQUNDckIsV0FBV2Isd0VBQWU7Z0NBQzFCb0MsTUFBTSxHQUFvQixPQUFqQnBCLE9BQU9xQixTQUFTO2dDQUN6QkMsUUFBTztnQ0FDUEMsS0FBSTswQ0FFSiw0RUFBQ0M7OENBQ0MsNEVBQUNDO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXRDRnpCLE9BQU8wQixFQUFFOzs7OztRQTRDdkI7Ozs7OztBQUdOO0tBbkVNekM7QUFxRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dldE1lYWxQbGFucy9NZWFsSXRlbS50c3g/MWZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFJlY2lwZSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNlcnZpbmdzOiBudW1iZXI7XG4gIHJlYWR5SW5NaW51dGVzOiBudW1iZXI7XG4gIGhlYWx0aFNjb3JlOiBudW1iZXI7XG4gIHByaWNlUGVyU2VydmluZzogbnVtYmVyO1xuICBpbWFnZTogYW55O1xuICBzb3VyY2VVcmw6IGFueTtcbiAgc3VtbWFyeTogc3RyaW5nO1xuICAvLyBzcGVjaWZ5IG90aGVyIHByb3BlcnRpZXMgaW4geW91ciByZWNpcGUgb2JqZWN0XG59XG5cbmludGVyZmFjZSBNZWFsSXRlbVByb3BzIHtcbiAgcmVjaXBlczogUmVjaXBlW107XG59XG5cbmNvbnN0IE1lYWxJdGVtID0gKHsgcmVjaXBlcyB9OiBNZWFsSXRlbVByb3BzKSA9PiB7XG4gIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBIVE1MIHRhZ3NcbiAgY29uc3QgcmVtb3ZlSHRtbFRhZ3MgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBET01QYXJzZXJcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbiAgICAvLyBQYXJzZSB0aGUgc3RyaW5nIGludG8gYSBEb2N1bWVudCBvYmplY3RcbiAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAvLyBHZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgRG9jdW1lbnQgKHdpdGhvdXQgSFRNTCB0YWdzKVxuICAgIGNvbnN0IHRleHQgPSBkb2MuYm9keS50ZXh0Q29udGVudCB8fCBcIlwiO1xuXG4gICAgLy8gUmV0dXJuIHRoZSB0ZXh0IGNvbnRlbnRcbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAge3JlY2lwZXMubWFwKChyZWNpcGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cmVjaXBlLmlkfT5cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxoMT57cmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWNpcGUuaW1hZ2V9IGFsdD17cmVjaXBlLnRpdGxlfT48L2ltZz5cbiAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPntyZW1vdmVIdG1sVGFncyhyZWNpcGUuc3VtbWFyeSl9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcnZpbmd9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+U2VydmluZyBTaXplPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnNlcnZpbmdzfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Db29raW5nIFRpbWU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUucmVhZHlJbk1pbnV0ZXN9IG1pbjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZWFsdGggU2NvcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuaGVhbHRoU2NvcmV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvc3R9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+UHJpY2UgUGVyIFNlcnZpbmc8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPiR7cmVjaXBlLnByaWNlUGVyU2VydmluZ308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvZ2V0TWVhbFBsYW5zLyR7cmVjaXBlLmlkfWB9PlxuICAgICAgICAgICAgICA8YnV0dG9uPlZpZXcgSXRlbTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b24yfVxuICAgICAgICAgICAgICBocmVmPXtgJHtyZWNpcGUuc291cmNlVXJsfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuPlZpZXcgSXRlbTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiTWVhbEl0ZW0iLCJyZWNpcGVzIiwicmVtb3ZlSHRtbFRhZ3MiLCJzdHIiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJ0ZXh0IiwiYm9keSIsInRleHRDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsIm1hcCIsInJlY2lwZSIsImgxIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInAiLCJzdW1tYXJ5IiwiZGV0YWlscyIsInNlcnZpbmciLCJoMyIsImgyIiwic2VydmluZ3MiLCJyZWFkeUluTWludXRlcyIsImhlYWx0aFNjb3JlIiwiY29zdCIsInByaWNlUGVyU2VydmluZyIsImEiLCJidXR0b24yIiwiaHJlZiIsInNvdXJjZVVybCIsInRhcmdldCIsInJlbCIsImJ1dHRvbiIsInNwYW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});