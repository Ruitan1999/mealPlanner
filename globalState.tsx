// globalState.js

import { createContext } from "react";

export const globalState = {
  recipes: [], // Update initial value to an empty array
};

export const GlobalContext = createContext(globalState);
