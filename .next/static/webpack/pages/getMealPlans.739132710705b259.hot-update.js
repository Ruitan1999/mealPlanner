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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    // Function to remove HTML tags\n    const removeHtmlTags = (str)=>{\n        // Create a temporary div element\n        const tempDiv = document.createElement(\"div\");\n        // Set the string as innerHTML of the div\n        tempDiv.innerHTML = str;\n        // Get the text content of the div (without HTML tags)\n        const text = tempDiv.textContent || tempDiv.innerText || \"\";\n        // Remove the temporary div from the DOM\n        document.body.removeChild(tempDiv);\n        // Return the text content\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: recipes.map((recipe)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: recipe.image,\n                        alt: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: recipe.summary\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().serving),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Serving Size\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.servings\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Cooking Time\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    recipe.readyInMinutes,\n                                                    \" min\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Health Score\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.healthScore\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().cost),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Price Per Serving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: [\n                                                \"$\",\n                                                recipe.pricePerServing\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().button2),\n                        href: \"\".concat(recipe.sourceUrl),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"View Item\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 14\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n                lineNumber: 53,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2V0TWVhbFBsYW5zL01lYWxJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUVVO0FBcUJuRCxNQUFNRSxXQUFXLFNBQWdDO1FBQS9CLEVBQUVDLFFBQU8sRUFBaUI7SUFHNUMsK0JBQStCO0lBQy9CLE1BQU1DLGlCQUFpQixDQUFDQyxNQUF3QjtRQUM5QyxpQ0FBaUM7UUFDakMsTUFBTUMsVUFBVUMsU0FBU0MsYUFBYSxDQUFDO1FBRXZDLHlDQUF5QztRQUN6Q0YsUUFBUUcsU0FBUyxHQUFHSjtRQUVwQixzREFBc0Q7UUFDdEQsTUFBTUssT0FBT0osUUFBUUssV0FBVyxJQUFJTCxRQUFRTSxTQUFTLElBQUk7UUFFekQsd0NBQXdDO1FBQ3hDTCxTQUFTTSxJQUFJLENBQUNDLFdBQVcsQ0FBQ1I7UUFFMUIsMEJBQTBCO1FBQzFCLE9BQU9JO0lBQ1Q7SUFNRSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV2YscUVBQVk7a0JBQ3pCRSxRQUFRZSxHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUN2QixxQkFDRSw4REFBQ0o7Z0JBQW9CQyxXQUFXZixxRUFBWTs7a0NBQzFDLDhEQUFDb0I7a0NBQUlGLE9BQU9HLEtBQUs7Ozs7OztrQ0FDakIsOERBQUNDO3dCQUFJQyxLQUFLTCxPQUFPTSxLQUFLO3dCQUFFQyxLQUFLUCxPQUFPRyxLQUFLOzs7Ozs7a0NBQ3pDLDhEQUFDSztrQ0FBR1IsT0FBT1MsT0FBTzs7Ozs7O2tDQUNsQiw4REFBQ2I7d0JBQUlDLFdBQVdmLHdFQUFlOzswQ0FDN0IsOERBQUNjO2dDQUFJQyxXQUFXZix3RUFBZTs7a0RBRTdCLDhEQUFDYzs7MERBQ0MsOERBQUNnQjswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBSWIsT0FBT2MsUUFBUTs7Ozs7Ozs7Ozs7O2tEQUV0Qiw4REFBQ2xCOzswREFDQyw4REFBQ2dCOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNDOztvREFBSWIsT0FBT2UsY0FBYztvREFBQzs7Ozs7Ozs7Ozs7OztrREFFN0IsOERBQUNuQjs7MERBQ0MsOERBQUNnQjswREFBRzs7Ozs7OzBEQUNKLDhEQUFDQzswREFBSWIsT0FBT2dCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHM0IsOERBQUNwQjtnQ0FBSUMsV0FBV2YscUVBQVk7MENBQzFCLDRFQUFDYzs7c0RBQ0MsOERBQUNnQjtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQzs7Z0RBQUc7Z0RBQUViLE9BQU9rQixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT2pDLDhEQUFDQzt3QkFDQXRCLFdBQVdmLHdFQUFlO3dCQUMxQnVDLE1BQU0sR0FBb0IsT0FBakJyQixPQUFPc0IsU0FBUzt3QkFDekJDLFFBQU87d0JBQ1BDLEtBQUk7a0NBRUosNEVBQUNDO3NDQUVDLDRFQUFDQzswQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF0Q0YxQixPQUFPMkIsRUFBRTs7Ozs7UUEyQ3ZCOzs7Ozs7QUFHTjtLQTNFTTVDO0FBNkVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4PzFmZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBSZWNpcGUge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBzZXJ2aW5nczogbnVtYmVyO1xuICByZWFkeUluTWludXRlczogbnVtYmVyO1xuICBoZWFsdGhTY29yZTogbnVtYmVyO1xuICBwcmljZVBlclNlcnZpbmc6IG51bWJlcjtcbiAgaW1hZ2U6IGFueTtcbiAgc291cmNlVXJsOiBhbnk7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgLy8gc3BlY2lmeSBvdGhlciBwcm9wZXJ0aWVzIGluIHlvdXIgcmVjaXBlIG9iamVjdFxufVxuXG5pbnRlcmZhY2UgTWVhbEl0ZW1Qcm9wcyB7XG4gIHJlY2lwZXM6IFJlY2lwZVtdO1xufVxuXG5jb25zdCBNZWFsSXRlbSA9ICh7IHJlY2lwZXMgfTogTWVhbEl0ZW1Qcm9wcykgPT4ge1xuXG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBIVE1MIHRhZ3NcbmNvbnN0IHJlbW92ZUh0bWxUYWdzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IGRpdiBlbGVtZW50XG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBcbiAgLy8gU2V0IHRoZSBzdHJpbmcgYXMgaW5uZXJIVE1MIG9mIHRoZSBkaXZcbiAgdGVtcERpdi5pbm5lckhUTUwgPSBzdHI7XG4gIFxuICAvLyBHZXQgdGhlIHRleHQgY29udGVudCBvZiB0aGUgZGl2ICh3aXRob3V0IEhUTUwgdGFncylcbiAgY29uc3QgdGV4dCA9IHRlbXBEaXYudGV4dENvbnRlbnQgfHwgdGVtcERpdi5pbm5lclRleHQgfHwgXCJcIjtcbiAgXG4gIC8vIFJlbW92ZSB0aGUgdGVtcG9yYXJ5IGRpdiBmcm9tIHRoZSBET01cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wRGl2KTtcbiAgXG4gIC8vIFJldHVybiB0aGUgdGV4dCBjb250ZW50XG4gIHJldHVybiB0ZXh0O1xufTtcblxuXG5cblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIHtyZWNpcGVzLm1hcCgocmVjaXBlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3JlY2lwZS5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICAgICAgPGgxPntyZWNpcGUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZWNpcGUuaW1hZ2V9IGFsdD17cmVjaXBlLnRpdGxlfT48L2ltZz5cbiAgICAgICAgICAgIDxwPntyZWNpcGUuc3VtbWFyeX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VydmluZ30+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5TZXJ2aW5nIFNpemU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuc2VydmluZ3N9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPkNvb2tpbmcgVGltZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5yZWFkeUluTWludXRlc30gbWluPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPkhlYWx0aCBTY29yZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5oZWFsdGhTY29yZX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29zdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5QcmljZSBQZXIgU2VydmluZzwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+JHtyZWNpcGUucHJpY2VQZXJTZXJ2aW5nfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9nZXRNZWFsUGxhbnMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIDxidXR0b24+VmlldyBJdGVtPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b24yfVxuICAgICAgICAgICAgICBocmVmPXtgJHtyZWNpcGUuc291cmNlVXJsfWB9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNwYW4+VmlldyBJdGVtPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiTWVhbEl0ZW0iLCJyZWNpcGVzIiwicmVtb3ZlSHRtbFRhZ3MiLCJzdHIiLCJ0ZW1wRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGV4dCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiYm9keSIsInJlbW92ZUNoaWxkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsIm1hcCIsInJlY2lwZSIsIml0ZW0iLCJoMSIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwic3VtbWFyeSIsImRldGFpbHMiLCJzZXJ2aW5nIiwiaDMiLCJoMiIsInNlcnZpbmdzIiwicmVhZHlJbk1pbnV0ZXMiLCJoZWFsdGhTY29yZSIsImNvc3QiLCJwcmljZVBlclNlcnZpbmciLCJhIiwiYnV0dG9uMiIsImhyZWYiLCJzb3VyY2VVcmwiLCJ0YXJnZXQiLCJyZWwiLCJidXR0b24iLCJzcGFuIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});