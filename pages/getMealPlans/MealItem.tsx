import React, { ReactNode } from "react";

import classes from "../../styles/Card.module.css";

import Link from "next/link";

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
  // specify other properties in your recipe object
}

interface MealItemProps {
  recipes: Recipe[];
}

const MealItem = ({ recipes }: MealItemProps) => {
  // Function to remove HTML tags
  const removeHtmlTags = (str: string): string => {
    // Create a new DOMParser
    const parser = new DOMParser();

    // Parse the string into a Document object
    const doc = parser.parseFromString(str, "text/html");

    // Get the text content of the Document (without HTML tags)
    const text = doc.body.textContent || "";

    // Return the text content
    return text;
  };

  return (
    <div className={classes.card}>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}  className={classes.header1}>
              <h1>{recipe.title}</h1>
              <img src={recipe.image} alt={recipe.title}></img>
           <div  className={classes.item}>
           
           <div className={classes.summary}>
            <h3>Summary</h3>
            <p>{removeHtmlTags(recipe.summary)}</p>
            </div>
            
            {/* <Link href={`/getMealPlans/${recipe.id}`}>
              <button>View Item</button>
            </Link> */}
            
            </div>
            <div className={classes.details}>
              <div className={classes.serving}>
                <div>
                  <h3>Serving Size</h3>
                  <h2>{recipe.servings}</h2>
                </div>
                <div>
                  <h3>Cooking Time</h3>
                  <h2>{recipe.readyInMinutes} min</h2>
                </div>
                <div>
                  <h3>Health Score</h3>
                  <h2>{recipe.healthScore}</h2>
                </div>
              </div>
              <div className={classes.cost}>
                <div>
                  <h3>Price Per Serving</h3>
                  <h2>${recipe.pricePerServing}</h2>
                </div>
              </div>
            </div>
            <a
              className={classes.button2}
              href={`${recipe.sourceUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <span>View Item</span>
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MealItem;
