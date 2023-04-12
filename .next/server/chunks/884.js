exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 7060:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "getMealPlans_form__HLdOn",
	"items": "getMealPlans_items__Nl2s3"
};


/***/ }),

/***/ 884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _styles_getMealPlans_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7060);
/* harmony import */ var _styles_getMealPlans_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_getMealPlans_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MealItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6285);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Search = ()=>{
    const [targetCalories, setTargetCalories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [diet, setDiet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [exclude, setExclude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Update the type of recipes to be an array of Recipe objects
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loadingRecipes, setLoadingRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Add loading state for second API call
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Add an error state
    const handleExcludeChange = (event)=>{
        const selectedOptions = event.target.value;
        setExclude(selectedOptions);
    };
    const fetchData = ()=>{
        const storedData = localStorage.getItem("recipes");
        if (storedData) {
            setRecipes(JSON.parse(storedData));
        }
    };
    const resetHanlder = ()=>{
        setTargetCalories("");
        setDiet("");
        setExclude([]);
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setLoading(true); // set loading to true
        const options = {
            method: "GET",
            url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
            params: {
                timeFrame: "week",
                targetCalories,
                diet,
                exclude
            },
            headers: {
                "X-RapidAPI-Key": "04d9070678msh5527fe2984c1037p11d8b0jsn33adb02c04ac",
                "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        };
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].request(options);
            if (response.data.items) {
                const ids = response.data.items.map((item)=>{
                    const jsonData = JSON.parse(item.value);
                    return jsonData.id;
                });
                const giantIds = ids.join(",");
                setResult(giantIds);
                // Reset form fields after successful form submission
                setTargetCalories("");
                setDiet("");
                setExclude([]);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false); // set loading back to false after API call is complete
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const axios = __webpack_require__(2167);
        if (result !== null) {
            setLoadingRecipes(true); // set loading to true for second API call
            const options = {
                method: "GET",
                url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
                params: {
                    ids: result
                },
                headers: {
                    "X-RapidAPI-Key": "04d9070678msh5527fe2984c1037p11d8b0jsn33adb02c04ac",
                    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
                }
            };
            axios.request(options).then(function(response) {
                // setLoading(false); // Set loading to false when data is successfully fetched
                setRecipes(response.data);
                // dispatch(setRecipess(response.data)); // Dispatch the recipes data to Redux store using the action
                // Store fetched data in localStorage
                localStorage.setItem("recipes", JSON.stringify(response.data));
            }).catch(function(error) {
                // setLoading(false);
                setError(error);
                console.error(error);
            }).finally(()=>{
                setLoadingRecipes(false); // set loading to false after second API call is complete
            });
        }
        fetchData(); // Call fetchData to retrieve data from localStorage
    }, [
        result,
        dispatch
    ]);
    // Render loading spinner while fetching data for both API calls
    if (loading || loadingRecipes) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {});
    }
    // Render error message if data fetching fails for both API calls
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "Error: ",
                "nope"
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: (_styles_getMealPlans_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                        fullWidth: true,
                        margin: "normal",
                        id: "targetCalories",
                        name: "targetCalories",
                        label: "Target Calories",
                        value: targetCalories,
                        onChange: (e)=>setTargetCalories(e.target.value)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                        fullWidth: true,
                        margin: "normal",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                                htmlFor: "diet",
                                children: "Diet"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                id: "diet",
                                name: "Diet",
                                value: diet,
                                label: "Diet",
                                onChange: (e)=>setDiet(e.target.value),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "vegetarian",
                                        children: "Vegetarian"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "vegan",
                                        children: "Vegan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "kosher",
                                        children: "Kosher"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "halal",
                                        children: "Halal"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "gluten-free",
                                        children: "Gluten Free"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                        fullWidth: true,
                        margin: "normal",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                                htmlFor: "exclude",
                                children: "Allergies"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                id: "exclude",
                                name: "exclude",
                                multiple: true,
                                value: exclude,
                                onChange: handleExcludeChange,
                                label: "Exclude",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "milk",
                                        children: "Milk"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "egg",
                                        children: "Egg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "fish",
                                        children: "Fish"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "shellfish",
                                        children: "Shellfish"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "nuts",
                                        children: "Tree nuts"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "peanuts",
                                        children: "Peanuts"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "wheat",
                                        children: "Wheat"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                        value: "soybeans",
                                        children: "Soybeans"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        disabled: !targetCalories,
                        sx: {
                            width: "1300px",
                            height: "56px",
                            fontSize: "18px",
                            backgroundColor: "black"
                        },
                        children: "Generate Plans"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        type: "button",
                        onClick: resetHanlder,
                        variant: "contained",
                        color: "error",
                        sx: {
                            width: "1000px",
                            height: "56px",
                            fontSize: "18px"
                        },
                        children: "Reset"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_getMealPlans_module_css__WEBPACK_IMPORTED_MODULE_5___default().items),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MealItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    recipes: recipes
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
function dispatch(arg0) {
    throw new Error("Function not implemented.");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;