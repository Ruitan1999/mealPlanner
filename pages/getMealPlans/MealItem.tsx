import React, { useState } from "react";

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
  diets: any;
  // specify other properties in your recipe object
}

interface MealItemProps {
  recipes: Recipe[];
}

const MealItem = ({ recipes }: MealItemProps) => {

  return (
    <div className={classes.card}>
      {recipes?.map((recipe) => {
        return (
          <div key={recipe.id} className={classes.header1}>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title}></img>
            <div className={classes.item}></div>

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

            
            <Link href={`/getMealPlans/${recipe.id}`}>
              <button>Learn More</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MealItem;
