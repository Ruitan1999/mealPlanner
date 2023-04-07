// src/store.js
import { createStore } from "redux";

const initialState = {
  timeFrame: "",
  targetCalories: "",
  diet: "",
  exclude: [],
  result: null,
  recipes: [],
  loading: false,
  loadingRecipes: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIME_FRAME":
      return { ...state, timeFrame: action.payload };
    case "SET_TARGET_CALORIES":
      return { ...state, targetCalories: action.payload };
    case "SET_DIET":
      return { ...state, diet: action.payload };
    case "SET_EXCLUDE":
      return { ...state, exclude: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_LOADING_RECIPES":
      return { ...state, loadingRecipes: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
