import React, { ReactNode } from "react";
import Image from "next/image";
import classes from "../../styles/Card.module.css";
import testImg from "../../assets/banner.png";

interface Recipe {
  id: number;

  // specify other properties in your recipe object
}

interface MealItemProps {
  recipes: Recipe[];
}

const MealItem = ({ recipes }: MealItemProps) => {
  return (
    <div className={classes.card}>
      {recipes.map((recipe) => {
        return (
          <>
            <h1 key={recipe.id}>{recipes.title}</h1>
            <Image src={testImg} alt={"test"}></Image>
            <div className={classes.details}>
              <div className={classes.serving}>
                <div>
                  <h3>Serving Size</h3>
                  <h2>{recipes.servings}</h2>
                </div>
                <div>
                  <h3>Cooking Time</h3>
                  <h2>{recipes.readyInMinutes}</h2>
                </div>
                <div>
                  <h3>Health Score</h3>
                  <h2>{recipes.healthScore}</h2>
                </div>
              </div>
              <div className={classes.cost}>
                <div>
                  <h3>Price Per Serving</h3>
                  <h2>{recipes.pricePerServing}</h2>
                </div>
              </div>
            </div>
            <button>View Item</button>
          </>
        );
      })}
    </div>
  );
};

export default MealItem;
