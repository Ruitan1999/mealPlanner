import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeReducer";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export default store;