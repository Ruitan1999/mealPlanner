"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/MealPlanSection.tsx":
/*!********************************************!*\
  !*** ./src/Components/MealPlanSection.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MealPlanSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MealPlanSection.module.css */ \"./src/Components/MealPlanSection.module.css\");\n/* harmony import */ var _MealPlanSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MealPlanSection_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MealPlanSection = ()=>{\n    _s();\n    const [timeFrame, setTimeFrame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [targetCalories, setTargetCalories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [diet, setDiet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [exclude, setExclude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const options = {\n            method: \"GET\",\n            url: \"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate\",\n            params: {\n                timeFrame,\n                targetCalories,\n                diet,\n                exclude\n            },\n            headers: {\n                \"X-RapidAPI-Key\": \"230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a\",\n                \"X-RapidAPI-Host\": \"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com\"\n            }\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].request(options);\n            const ids = response.data.items.map((item)=>{\n                const jsonData = JSON.parse(item.value);\n                return jsonData.id;\n            });\n            const giantIds = ids.join(\",\");\n            setResult(giantIds);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\n        const options = {\n            method: \"GET\",\n            url: \"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk\",\n            params: {\n                ids: result\n            },\n            headers: {\n                \"X-RapidAPI-Key\": \"230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a\",\n                \"X-RapidAPI-Host\": \"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com\"\n            }\n        };\n        axios.request(options).then(function(response) {\n            setRecipes(response.data);\n        }).catch(function(error) {\n            console.error(error);\n        });\n    }, [\n        result\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_MealPlanSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Whats Your Target Calories? \"\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"The goal for us is to helps you to achieve your goal more easily and efficiently, maximising the full potential of the workout.\"\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Our Meal Planer will help you select an ideal recipe plan that fits your style of fitness in 3 steps. Then the system will generate a plan based on your criteria.\"\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Get Started Here\"\n            }, void 0, false, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"timeFrame\",\n                        children: \"Time Frame:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"timeFrame\",\n                        value: timeFrame,\n                        onChange: (e)=>setTimeFrame(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"targetCalories\",\n                        children: \"Target Calories:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"targetCalories\",\n                        value: targetCalories,\n                        onChange: (e)=>setTargetCalories(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"diet\",\n                        children: \"Diet:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"diet\",\n                        value: diet,\n                        onChange: (e)=>setDiet(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"exclude\",\n                        children: \"Exclude:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"exclude\",\n                        value: exclude,\n                        onChange: (e)=>setExclude(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/Meal Planner/src/Components/MealPlanSection.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MealPlanSection, \"g4DVPDcXCt97wye894dmNurJ+DM=\");\n_c = MealPlanSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealPlanSection);\nvar _c;\n$RefreshReg$(_c, \"MealPlanSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPMUI7d0JBQ1BpRCxVQUFVLENBQUNDLElBQU1qRCxRQUFRaUQsRUFBRUMsTUFBTSxDQUFDekIsS0FBSzs7Ozs7O2tDQUd6Qyw4REFBQ2tCO3dCQUFNQyxTQUFRO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTHRCLE9BQU94Qjt3QkFDUCtDLFVBQVUsQ0FBQ0MsSUFBTS9DLFdBQVcrQyxFQUFFQyxNQUFNLENBQUN6QixLQUFLOzs7Ozs7a0NBRzVDLDhEQUFDZTt3QkFBT00sTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBbkhNcEQ7S0FBQUE7QUFxSE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTWVhbFBsYW5TZWN0aW9uLnRzeD8xZDdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lYWxQbGFuU2VjdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuXG5jb25zdCBNZWFsUGxhblNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt0aW1lRnJhbWUsIHNldFRpbWVGcmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RhcmdldENhbG9yaWVzLCBzZXRUYXJnZXRDYWxvcmllc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RpZXQsIHNldERpZXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtleGNsdWRlLCBzZXRFeGNsdWRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci1yZWNpcGUtZm9vZC1udXRyaXRpb24tdjEucC5yYXBpZGFwaS5jb20vcmVjaXBlcy9tZWFscGxhbnMvZ2VuZXJhdGVcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICB0aW1lRnJhbWUsXG4gICAgICAgIHRhcmdldENhbG9yaWVzLFxuICAgICAgICBkaWV0LFxuICAgICAgICBleGNsdWRlLFxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcIjIzMDIzNGYyMTFtc2g4ZGQ2ZDhjMjM3NGMyNzBwMTY0MjQwanNuYWQxOTRjOWUxYjZhXCIsXG4gICAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6XG4gICAgICAgICAgXCJzcG9vbmFjdWxhci1yZWNpcGUtZm9vZC1udXRyaXRpb24tdjEucC5yYXBpZGFwaS5jb21cIixcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLnJlcXVlc3Qob3B0aW9ucyk7XG4gICAgICBjb25zdCBpZHMgPSByZXNwb25zZS5kYXRhLml0ZW1zLm1hcCgoaXRlbTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGl0ZW0udmFsdWUpO1xuICAgICAgICByZXR1cm4ganNvbkRhdGEuaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGdpYW50SWRzID0gaWRzLmpvaW4oXCIsXCIpO1xuICAgICAgc2V0UmVzdWx0KGdpYW50SWRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIHVybDogXCJodHRwczovL3Nwb29uYWN1bGFyLXJlY2lwZS1mb29kLW51dHJpdGlvbi12MS5wLnJhcGlkYXBpLmNvbS9yZWNpcGVzL2luZm9ybWF0aW9uQnVsa1wiLFxuICAgICAgcGFyYW1zOiB7IGlkczogcmVzdWx0IH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCIyMzAyMzRmMjExbXNoOGRkNmQ4YzIzNzRjMjcwcDE2NDI0MGpzbmFkMTk0YzllMWI2YVwiLFxuICAgICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOlxuICAgICAgICAgIFwic3Bvb25hY3VsYXItcmVjaXBlLWZvb2QtbnV0cml0aW9uLXYxLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBheGlvc1xuICAgICAgLnJlcXVlc3Qob3B0aW9ucylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZTogeyBkYXRhOiBhbnkgfSkge1xuICAgICAgICBzZXRSZWNpcGVzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbcmVzdWx0XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgPGgxPldoYXRzIFlvdXIgVGFyZ2V0IENhbG9yaWVzPyA8L2gxPlxuICAgICAgPGgzPlxuICAgICAgICBUaGUgZ29hbCBmb3IgdXMgaXMgdG8gaGVscHMgeW91IHRvIGFjaGlldmUgeW91ciBnb2FsIG1vcmUgZWFzaWx5IGFuZFxuICAgICAgICBlZmZpY2llbnRseSwgbWF4aW1pc2luZyB0aGUgZnVsbCBwb3RlbnRpYWwgb2YgdGhlIHdvcmtvdXQuXG4gICAgICA8L2gzPlxuICAgICAgPGgzPlxuICAgICAgICBPdXIgTWVhbCBQbGFuZXIgd2lsbCBoZWxwIHlvdSBzZWxlY3QgYW4gaWRlYWwgcmVjaXBlIHBsYW4gdGhhdCBmaXRzIHlvdXJcbiAgICAgICAgc3R5bGUgb2YgZml0bmVzcyBpbiAzIHN0ZXBzLiBUaGVuIHRoZSBzeXN0ZW0gd2lsbCBnZW5lcmF0ZSBhIHBsYW4gYmFzZWRcbiAgICAgICAgb24geW91ciBjcml0ZXJpYS5cbiAgICAgIDwvaDM+XG4gICAgICA8YnV0dG9uPkdldCBTdGFydGVkIEhlcmU8L2J1dHRvbj5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZUZyYW1lXCI+VGltZSBGcmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInRpbWVGcmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3RpbWVGcmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVGcmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXJnZXRDYWxvcmllc1wiPlRhcmdldCBDYWxvcmllczo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInRhcmdldENhbG9yaWVzXCJcbiAgICAgICAgICB2YWx1ZT17dGFyZ2V0Q2Fsb3JpZXN9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXJnZXRDYWxvcmllcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWV0XCI+RGlldDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImRpZXRcIlxuICAgICAgICAgIHZhbHVlPXtkaWV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGNsdWRlXCI+RXhjbHVkZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImV4Y2x1ZGVcIlxuICAgICAgICAgIHZhbHVlPXtleGNsdWRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXhjbHVkZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWFsUGxhblNlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJBeGlvcyIsIk1lYWxQbGFuU2VjdGlvbiIsInRpbWVGcmFtZSIsInNldFRpbWVGcmFtZSIsInRhcmdldENhbG9yaWVzIiwic2V0VGFyZ2V0Q2Fsb3JpZXMiLCJkaWV0Iiwic2V0RGlldCIsImV4Y2x1ZGUiLCJzZXRFeGNsdWRlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsImhlYWRlcnMiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJpZHMiLCJkYXRhIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwianNvbkRhdGEiLCJKU09OIiwicGFyc2UiLCJ2YWx1ZSIsImlkIiwiZ2lhbnRJZHMiLCJqb2luIiwiZXJyb3IiLCJjb25zb2xlIiwiYXhpb3MiLCJyZXF1aXJlIiwidGhlbiIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwiaDMiLCJidXR0b24iLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/MealPlanSection.tsx\n"));

/***/ })

});