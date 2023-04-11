// recipeReducer.ts

import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { MyRecipe } from './Search';

// Define RecipesState type
export type RecipesState = {
  recipes: MyRecipe[];
  loading: boolean;
  error: string | null;
};

// Define setRecipess action creator with payload type
export const setRecipess = createAction<MyRecipe[]>('recipes/setRecipess');

// Define initial state
const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};

// Define recipeReducer using createReducer function
const recipeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRecipess, (state, action: PayloadAction<MyRecipe[]>) => {
    state.recipes = action.payload;
    state.loading = false;
    state.error = null;
  });
});

export default recipeReducer;
