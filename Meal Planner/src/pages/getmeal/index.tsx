import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

const Meal = () => {
    const [timeFrame, setTimeFrame] = useState("");
    const [targetCalories, setTargetCalories] = useState("");
    const [diet, setDiet] = useState("");
    const [exclude, setExclude] = useState("");
    const [result, setResult] = useState(null);
    const [recipes, setRecipes] = useState(null);
  
    const handleSubmit = async (event: { preventDefault: () => void }) => {
      event.preventDefault();
  
      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
        params: {
          timeFrame,
          targetCalories,
          diet,
          exclude,
        },
        headers: {
          "X-RapidAPI-Key": "230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
  
      try {
        const response = await Axios.request(options);
        const ids = response.data.items.map((item: { value: string }) => {
          const jsonData = JSON.parse(item.value);
          return jsonData.id;
        });
        const giantIds = ids.join(",");
        setResult(giantIds);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      const axios = require("axios");
      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
        params: { ids: result },
        headers: {
          "X-RapidAPI-Key": "230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then(function (response: { data: any }) {
          setRecipes(response.data);
        })
        .catch(function (error: any) {
          console.error(error);
        });
    }, [result]);

    console.log(recipes);
    
    return (
        <div>
             <form onSubmit={handleSubmit}>
        <label htmlFor="timeFrame">Time Frame:</label>
        <input
          type="text"
          name="timeFrame"
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        />

        <label htmlFor="targetCalories">Target Calories:</label>
        <input
          type="text"
          name="targetCalories"
          value={targetCalories}
          onChange={(e) => setTargetCalories(e.target.value)}
        />

        <label htmlFor="diet">Diet:</label>
        <input
          type="text"
          name="diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        />

        <label htmlFor="exclude">Exclude:</label>
        <input
          type="text"
          name="exclude"
          value={exclude}
          onChange={(e) => setExclude(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
        </div>
    );
};

export default Meal;