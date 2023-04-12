import React from "react";
import { useRouter } from "next/router";
import classes from "./mealitemid.module.css";

const MealItemId = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back(); // Navigate back to the previous page
  };

  const getDataFromLocalStorage = (key: string): any | null => {
    if (typeof window !== "undefined") {
      // Check if window is defined (to avoid issues during server-side rendering)
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : null;
    }
    return null;
  };

  const recipess = getDataFromLocalStorage("recipes");

  // Get the id from the URL query parameters and convert it to a string
  const { mealItemId } = router.query;
  const idString = mealItemId ? mealItemId.toString() : "";

  // Find the recipe with the matching id
  const selectedRecipe = recipess && recipess.find(
    (item: any) => item.id.toString() === idString
  );

  // Check if selectedRecipe is not null before accessing its properties
  if (!selectedRecipe) {
    return <div>Loading...</div>; // Add a loading state or handle the case where selectedRecipe is null
  }

  console.log(selectedRecipe);

  const removeHtmlTags = (str: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    const text = doc.body.textContent || "";
    return text;
  };
  const pricePerServingInDollars = (selectedRecipe.pricePerServing / 100).toFixed(2);

  return (
    <div key={selectedRecipe.id} className={classes.recipe}>
      <button onClick={handleBackButtonClick}>Back</button>
      <h1>{selectedRecipe.title}</h1>
      <div className={classes.snapshot}>
        <div>
          <h2>Prep</h2>
          <h3>{selectedRecipe.preparationMinutes} min</h3>
        </div>
        <div>
          <h2>Cooking Time</h2>
          <h3>{selectedRecipe.cookingMinutes} min</h3>
        </div>
        <div>
          <h2>Ready In</h2>
          <h3>{selectedRecipe.readyInMinutes} min</h3>
        </div>
        <div>
          <h2>Servings</h2>
          <h3>{selectedRecipe.servings} servings</h3>
        </div>
        <div>
          <h2>Price Per Serving</h2>
          <h3>$ {pricePerServingInDollars}</h3>
        </div>
        <div>
          <h2>Health Score</h2>
          <h3>{selectedRecipe.healthScore}</h3>
        </div>
      </div>

      <img src={selectedRecipe.image} alt={selectedRecipe.title}></img>

      <div>
        <h1>Summary</h1>
        <p className={classes.Summary}>
          {removeHtmlTags(selectedRecipe.summary)}
        </p>
      </div>

      <div>
        <h1>Diet</h1>
        {selectedRecipe.diets?.map((item: any, index: number) => {
          return (
            <li key={index} className={classes.diets}>
              {item}
            </li>
          );
        })}
      </div>

      <div>
        <h1 >Ingredients</h1>
        {selectedRecipe.extendedIngredients?.map((item: any, index: number) => {
          return (
            <h1 key={index} className={classes.Ingredients}>
             -  {item.original}
            </h1>
          );
        })}
      </div>
      <div>
        <h1>Instructions</h1>
        {selectedRecipe.analyzedInstructions[0].steps?.map(
          (item: any, index: number) => {
            return (
              <li key={index}  className={classes.Instructions}>
                Step {index}: {item.step}
              </li>
            );
          }
        )}
      </div>

      <div>
        <h1>Cooking Tips</h1>
        {selectedRecipe.tips.cooking?.map((item: any, index: number) => {
          return <li key={index} className={classes.Cooking}> {removeHtmlTags(item)}</li>;
        })}
          </div>
          <div>
        <h1>Green Tips</h1>
        {selectedRecipe.tips.green?.map((item: any, index: number) => {
          return <li key={index} className={classes.Green}> {item}</li>;
        })}
        </div>
         <div>
        <h1>Health Tips</h1>
        {selectedRecipe.tips.health?.map((item: any, index: number) => {
          return <li key={index} className={classes.Health}> {removeHtmlTags(item)}</li>;
        })}
       </div>
  

       <div>
        <h1>Credit</h1>
        <p className={classes.creditsText}>{selectedRecipe.creditsText}</p>
      </div>
    </div>
  );
};

export default MealItemId;
