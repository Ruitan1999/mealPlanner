"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/getMealPlans/[mealItemId]",{

/***/ "./src/pages/getMealPlans/[mealItemId].tsx":
/*!*************************************************!*\
  !*** ./src/pages/getMealPlans/[mealItemId].tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/.pnpm/react-redux@8.0.5_@types+react-dom@18.0.11_@types+react@18.0.33_react-dom@18.2.0_react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js\");\n/* harmony import */ var _recipeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipeReducer */ \"./src/pages/getMealPlans/recipeReducer.tsx\");\n\nvar _s = $RefreshSig$();\n\n // Import Redux actions and state\nconst MealItemID = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // Use useDispatch hook to dispatch actions\n    const recipes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.recipes); // Use useSelector hook to access Redux state\n    dispatch((0,_recipeReducer__WEBPACK_IMPORTED_MODULE_2__.setRecipess)(recipes));\n    console.log(recipes);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"hi\"\n        }, void 0, false, {\n            fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/[mealItemId].tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ruitan/Downloads/React.js - Meal Order App/mealPlanner/src/pages/getMealPlans/[mealItemId].tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MealItemID, \"urL96ljde7Xr4AVTiY3dDRaAbOQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = MealItemID;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MealItemID);\nvar _c;\n$RefreshReg$(_c, \"MealItemID\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2V0TWVhbFBsYW5zL1ttZWFsSXRlbUlkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUNLLENBQUMsaUNBQWlDO0FBRzlGLE1BQU1HLGFBQWEsSUFBTTs7SUFHekIsTUFBTUMsV0FBV0gsd0RBQVdBLElBQUksMkNBQTJDO0lBQzNFLE1BQU1JLFVBQVVMLHdEQUFXQSxDQUFDLENBQUNNLFFBQXdCQSxNQUFNRCxPQUFPLEdBQUcsNkNBQTZDO0lBR2xIRCxTQUFTRiwyREFBV0EsQ0FBQ0c7SUFFbkJFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdWO0dBaEJNUDs7UUFHV0Ysb0RBQVdBO1FBQ1pELG9EQUFXQTs7O0tBSnJCRztBQWtCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2V0TWVhbFBsYW5zL1ttZWFsSXRlbUlkXS50c3g/Njg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRSZWNpcGVzcywgUmVjaXBlc1N0YXRlIH0gZnJvbSAnLi9yZWNpcGVSZWR1Y2VyJzsgLy8gSW1wb3J0IFJlZHV4IGFjdGlvbnMgYW5kIHN0YXRlXG5cblxuY29uc3QgTWVhbEl0ZW1JRCA9ICgpID0+IHtcblxuXG5jb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7IC8vIFVzZSB1c2VEaXNwYXRjaCBob29rIHRvIGRpc3BhdGNoIGFjdGlvbnNcbmNvbnN0IHJlY2lwZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlY2lwZXNTdGF0ZSkgPT4gc3RhdGUucmVjaXBlcyk7IC8vIFVzZSB1c2VTZWxlY3RvciBob29rIHRvIGFjY2VzcyBSZWR1eCBzdGF0ZVxuICBcblxuZGlzcGF0Y2goc2V0UmVjaXBlc3MocmVjaXBlcykpO1xuXG4gIGNvbnNvbGUubG9nKHJlY2lwZXMpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPmhpPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lYWxJdGVtSUQ7XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldFJlY2lwZXNzIiwiTWVhbEl0ZW1JRCIsImRpc3BhdGNoIiwicmVjaXBlcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/getMealPlans/[mealItemId].tsx\n"));

/***/ })

});