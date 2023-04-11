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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Card.module.css */ \"./styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst MealItem = (param)=>{\n    let { recipes  } = param;\n    // Function to remove HTML tags\n    const removeHtmlTags = (str)=>{\n        // Create a new DOMParser\n        const parser = new DOMParser();\n        // Parse the string into a Document object\n        const doc = parser.parseFromString(str, \"text/html\");\n        // Get the text content of the Document (without HTML tags)\n        const text = doc.body.textContent || \"\";\n        // Return the text content\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n        children: recipes === null || recipes === void 0 ? void 0 : recipes.map((recipe)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().header1),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: recipe.image,\n                        alt: recipe.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().summary),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Summary\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: removeHtmlTags(recipe.summary)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 12\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 12\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().serving),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Diet Option\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.diets\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Serving Size\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.servings\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Cooking Time\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: [\n                                                    recipe.readyInMinutes,\n                                                    \" min\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Health Score\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: recipe.healthScore\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().cost),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Price Per Serving\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: [\n                                                \"$\",\n                                                recipe.pricePerServing\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().button2),\n                        href: \"\".concat(recipe.sourceUrl),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"View Item\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, recipe.id, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/pages/getMealPlans/MealItem.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MealItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItem);\nvar _c;\n$RefreshReg$(_c, \"MealItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRVU7QUFxQm5ELE1BQU1FLFdBQVcsU0FBZ0M7UUFBL0IsRUFBRUMsUUFBTyxFQUFpQjtJQUMxQywrQkFBK0I7SUFDL0IsTUFBTUMsaUJBQWlCLENBQUNDLE1BQXdCO1FBQzlDLHlCQUF5QjtRQUN6QixNQUFNQyxTQUFTLElBQUlDO1FBRW5CLDBDQUEwQztRQUMxQyxNQUFNQyxNQUFNRixPQUFPRyxlQUFlLENBQUNKLEtBQUs7UUFFeEMsMkRBQTJEO1FBQzNELE1BQU1LLE9BQU9GLElBQUlHLElBQUksQ0FBQ0MsV0FBVyxJQUFJO1FBRXJDLDBCQUEwQjtRQUMxQixPQUFPRjtJQUNUO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdiLHFFQUFZO2tCQUN2QkUsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTYSxHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUMxQixxQkFDRSw4REFBQ0o7Z0JBQXFCQyxXQUFXYix3RUFBZTs7a0NBQzVDLDhEQUFDa0I7a0NBQUlGLE9BQU9HLEtBQUs7Ozs7OztrQ0FDakIsOERBQUNDO3dCQUFJQyxLQUFLTCxPQUFPTSxLQUFLO3dCQUFFQyxLQUFLUCxPQUFPRyxLQUFLOzs7Ozs7a0NBQzVDLDhEQUFDUDt3QkFBS0MsV0FBV2IscUVBQVk7a0NBRTdCLDRFQUFDWTs0QkFBSUMsV0FBV2Isd0VBQWU7OzhDQUM5Qiw4REFBQzBCOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFHeEIsZUFBZWEsT0FBT1MsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUWpDLDhEQUFDYjt3QkFBSUMsV0FBV2Isd0VBQWU7OzBDQUM3Qiw4REFBQ1k7Z0NBQUlDLFdBQVdiLHdFQUFlOztrREFDL0IsOERBQUNZOzswREFDRyw4REFBQ2M7MERBQUc7Ozs7OzswREFDSiw4REFBQ0k7MERBQUlkLE9BQU9lLEtBQUs7Ozs7Ozs7Ozs7OztrREFFbkIsOERBQUNuQjs7MERBQ0MsOERBQUNjOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNJOzBEQUFJZCxPQUFPZ0IsUUFBUTs7Ozs7Ozs7Ozs7O2tEQUV0Qiw4REFBQ3BCOzswREFDQyw4REFBQ2M7MERBQUc7Ozs7OzswREFDSiw4REFBQ0k7O29EQUFJZCxPQUFPaUIsY0FBYztvREFBQzs7Ozs7Ozs7Ozs7OztrREFFN0IsOERBQUNyQjs7MERBQ0MsOERBQUNjOzBEQUFHOzs7Ozs7MERBQ0osOERBQUNJOzBEQUFJZCxPQUFPa0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ3RCO2dDQUFJQyxXQUFXYixxRUFBWTswQ0FDMUIsNEVBQUNZOztzREFDQyw4REFBQ2M7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0k7O2dEQUFHO2dEQUFFZCxPQUFPb0IsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlsQyw4REFBQ0M7d0JBQ0N4QixXQUFXYix3RUFBZTt3QkFDMUJ1QyxNQUFNLEdBQW9CLE9BQWpCdkIsT0FBT3dCLFNBQVM7d0JBQ3pCQyxRQUFPO3dCQUNQQyxLQUFJO2tDQUVKLDRFQUFDQztzQ0FDQyw0RUFBQ0M7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBaERGNUIsT0FBTzZCLEVBQUU7Ozs7O1FBcUR2Qjs7Ozs7O0FBR047S0E1RU01QztBQThFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nZXRNZWFsUGxhbnMvTWVhbEl0ZW0udHN4PzNlMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xuXG5cbmludGVyZmFjZSBSZWNpcGUge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBzZXJ2aW5nczogbnVtYmVyO1xuICByZWFkeUluTWludXRlczogbnVtYmVyO1xuICBoZWFsdGhTY29yZTogbnVtYmVyO1xuICBwcmljZVBlclNlcnZpbmc6IG51bWJlcjtcbiAgaW1hZ2U6IGFueTtcbiAgc291cmNlVXJsOiBhbnk7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgZGlldHM6IGFueTtcbiAgLy8gc3BlY2lmeSBvdGhlciBwcm9wZXJ0aWVzIGluIHlvdXIgcmVjaXBlIG9iamVjdFxufVxuXG5pbnRlcmZhY2UgTWVhbEl0ZW1Qcm9wcyB7XG4gIHJlY2lwZXM6IFJlY2lwZVtdO1xufVxuXG5jb25zdCBNZWFsSXRlbSA9ICh7IHJlY2lwZXMgfTogTWVhbEl0ZW1Qcm9wcykgPT4ge1xuICAvLyBGdW5jdGlvbiB0byByZW1vdmUgSFRNTCB0YWdzXG4gIGNvbnN0IHJlbW92ZUh0bWxUYWdzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgRE9NUGFyc2VyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgLy8gUGFyc2UgdGhlIHN0cmluZyBpbnRvIGEgRG9jdW1lbnQgb2JqZWN0XG4gICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgLy8gR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIERvY3VtZW50ICh3aXRob3V0IEhUTUwgdGFncylcbiAgICBjb25zdCB0ZXh0ID0gZG9jLmJvZHkudGV4dENvbnRlbnQgfHwgXCJcIjtcblxuICAgIC8vIFJldHVybiB0aGUgdGV4dCBjb250ZW50XG4gICAgcmV0dXJuIHRleHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAge3JlY2lwZXM/Lm1hcCgocmVjaXBlKSA9PiB7IC8vIEFkZGVkIG51bGxpc2ggY29hbGVzY2luZyBvcGVyYXRvciB0byBoYW5kbGUgdW5kZWZpbmVkIHJlY2lwZXMgcHJvcFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtyZWNpcGUuaWR9ICBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyMX0+XG4gICAgICAgICAgICAgIDxoMT57cmVjaXBlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWNpcGUuaW1hZ2V9IGFsdD17cmVjaXBlLnRpdGxlfT48L2ltZz5cbiAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICAgICBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VtbWFyeX0+XG4gICAgICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgICAgICAgICA8cD57cmVtb3ZlSHRtbFRhZ3MocmVjaXBlLnN1bW1hcnkpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9nZXRNZWFsUGxhbnMvJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgIDxidXR0b24+VmlldyBJdGVtPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXJ2aW5nfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5EaWV0IE9wdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDI+e3JlY2lwZS5kaWV0c308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+U2VydmluZyBTaXplPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnNlcnZpbmdzfTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Db29raW5nIFRpbWU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUucmVhZHlJbk1pbnV0ZXN9IG1pbjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZWFsdGggU2NvcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPntyZWNpcGUuaGVhbHRoU2NvcmV9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvc3R9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+UHJpY2UgUGVyIFNlcnZpbmc8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgyPiR7cmVjaXBlLnByaWNlUGVyU2VydmluZ308L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbjJ9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake3JlY2lwZS5zb3VyY2VVcmx9YH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4+VmlldyBJdGVtPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc2VzIiwiTWVhbEl0ZW0iLCJyZWNpcGVzIiwicmVtb3ZlSHRtbFRhZ3MiLCJzdHIiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJ0ZXh0IiwiYm9keSIsInRleHRDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsIm1hcCIsInJlY2lwZSIsImhlYWRlcjEiLCJoMSIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJpdGVtIiwic3VtbWFyeSIsImgzIiwicCIsImRldGFpbHMiLCJzZXJ2aW5nIiwiaDIiLCJkaWV0cyIsInNlcnZpbmdzIiwicmVhZHlJbk1pbnV0ZXMiLCJoZWFsdGhTY29yZSIsImNvc3QiLCJwcmljZVBlclNlcnZpbmciLCJhIiwiYnV0dG9uMiIsImhyZWYiLCJzb3VyY2VVcmwiLCJ0YXJnZXQiLCJyZWwiLCJidXR0b24iLCJzcGFuIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/getMealPlans/MealItem.tsx\n"));

/***/ })

});