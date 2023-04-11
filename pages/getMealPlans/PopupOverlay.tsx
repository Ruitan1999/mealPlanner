import React from "react";
import classes from "./PopupOverley.module.css";

interface Recipe {
  id: number;
  title: string;
  servings: number;
  readyInMinutes: number;
  healthScore: number;
  pricePerServing: number;
  image: any;
  sourceUrl: any;
  summary: string;
  diets: any;
  // specify other properties in your recipe object
}

interface MealItemProps {
  onClose: () => void;
  recipes: Recipe[];
  recipeId: number; // Add a new prop for the recipe ID
  key: number;
}

const PopupOverlay = ({ onClose, recipes, recipeId }: MealItemProps) => {



  const matchedRecipe = recipes.find((recipe) => recipe.id === recipeId); // Find the matching recipe based on recipeId


  
  const removeHtmlTags = (str: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    const text = doc.body.textContent || "";
    return text;
  };

  return (
    <div className={classes.popupOverlay} onClick={onClose}>
      <div className={classes.popupContent}>
        {matchedRecipe ? (
          <div>
            <h1>{matchedRecipe.title}</h1>
            <div className={classes.summary}>
              <h3>Summary</h3>
              <p>{removeHtmlTags(matchedRecipe.summary)}</p>
            </div>
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <div>
            <h1>No Recipe Found</h1>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupOverlay;
