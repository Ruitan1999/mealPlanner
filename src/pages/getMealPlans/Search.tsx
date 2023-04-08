import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import classes from "../../styles/getMealPlans.module.css";
import { CircularProgress } from "@mui/material";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import MealItem from "./MealItem";

interface MyRecipe {
  id: number;
  title: string;
  servings: number;
  readyInMinutes: number;
  healthScore: number;
  pricePerServing: number;
  image: any;

  // other properties
}

const Search = () => {
  const [targetCalories, setTargetCalories] = useState("");
  const [diet, setDiet] = useState("");
  const [exclude, setExclude] = useState([]);
  const [result, setResult] = useState(null);
  const [recipes, setRecipes] = useState<MyRecipe[]>([]); // Update the type of recipes to be an array of Recipe objects
  const [loading, setLoading] = useState(false);
  const [loadingRecipes, setLoadingRecipes] = useState(false); // Add loading state for second API call
  const [error, setError] = useState(null); // Add an error state

  const handleExcludeChange = (event: { target: { value: any } }) => {
    const selectedOptions = event.target.value;
    setExclude(selectedOptions);
  };

  const resetHanlder = () => {
    setTargetCalories("");
    setDiet("");
    setExclude([]);

    // Clear data from localStorage
    localStorage.removeItem("recipes");
  };

  const fetchData = () => {
    const storedData = localStorage.getItem("recipes");
    if (storedData) {
      setRecipes(JSON.parse(storedData));
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true); // set loading to true
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
      params: {
        timeFrame: "week",
        targetCalories,
        diet,
        exclude,
      },
      headers: {
        "X-RapidAPI-Key": "04d9070678msh5527fe2984c1037p11d8b0jsn33adb02c04ac",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await Axios.request(options);
      if (response.data.items) {
        const ids = response.data.items.map((item: { value: string }) => {
          const jsonData = JSON.parse(item.value);
          return jsonData.id;
        });
        const giantIds = ids.join(",");
        setResult(giantIds);
        // Reset form fields after successful form submission

        setTargetCalories("");
        setDiet("");
        setExclude([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // set loading back to false after API call is complete
    }
  };

  useEffect(() => {
    const axios = require("axios");
    if (result !== null) {
      setLoadingRecipes(true); // set loading to true for second API call

      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
        params: {
          ids: result,
        },
        headers: {
          "X-RapidAPI-Key":
            "04d9070678msh5527fe2984c1037p11d8b0jsn33adb02c04ac",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then(function (response: { data: React.SetStateAction<MyRecipe[]> }) {
          // setLoading(false); // Set loading to false when data is successfully fetched
          setRecipes(response.data);
          // Store fetched data in localStorage
          localStorage.setItem("recipes", JSON.stringify(response.data));
        })
        .catch(function (error: any) {
          // setLoading(false);
          setError(error);
          console.error(error);
        })
        .finally(() => {
          setLoadingRecipes(false); // set loading to false after second API call is complete
        });
    }
    fetchData(); // Call fetchData to retrieve data from localStorage
  }, [result]);

  // Render loading spinner while fetching data for both API calls
  if (loading || loadingRecipes) {
    return <CircularProgress />;
  }

  // Render error message if data fetching fails for both API calls
  if (error) {
    return <div>Error: {"nope"}</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          fullWidth
          margin="normal"
          id="targetCalories"
          name="targetCalories"
          label="Target Calories"
          value={targetCalories}
          onChange={(e) => setTargetCalories(e.target.value)}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="diet">Diet</InputLabel>
          <Select
            id="diet"
            name="Diet"
            value={diet}
            label="Diet"
            onChange={(e) => setDiet(e.target.value)}
          >
            <MenuItem value="vegetarian">Vegetarian</MenuItem>
            <MenuItem value="vegan">Vegan</MenuItem>
            <MenuItem value="kosher">Kosher</MenuItem>
            <MenuItem value="halal">Halal</MenuItem>
            <MenuItem value="gluten-free">Gluten Free</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="exclude">Allergies</InputLabel>
          <Select
            id="exclude"
            name="exclude"
            multiple
            value={exclude}
            onChange={handleExcludeChange}
            label="Exclude"
          >
            <MenuItem value="milk">Milk</MenuItem>
            <MenuItem value="egg">Egg</MenuItem>
            <MenuItem value="fish">Fish</MenuItem>
            <MenuItem value="shellfish">Shellfish</MenuItem>
            <MenuItem value="nuts">Tree nuts</MenuItem>
            <MenuItem value="peanuts">Peanuts</MenuItem>
            <MenuItem value="wheat">Wheat</MenuItem>
            <MenuItem value="soybeans">Soybeans</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!targetCalories}
          sx={{
            width: "1300px",
            height: "56px",
            fontSize: "18px",
            backgroundColor: "black",
          }}
        >
          Generate Plans
        </Button>
        <Button
          type="button"
          onClick={resetHanlder}
          variant="contained"
          color="error"
          sx={{
            width: "1000px",
            height: "56px",
            fontSize: "18px",
          }}
        >
          Reset
        </Button>
      </form>
      <div className={classes.items}>
        <MealItem recipes={recipes}></MealItem>
      </div>
    </>
  );
};

export default Search;
