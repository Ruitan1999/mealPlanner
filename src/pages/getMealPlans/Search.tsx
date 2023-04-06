import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import classes from "../../styles/getMealPlans.module.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

const Search = () => {
  const [timeFrame, setTimeFrame] = useState("");
  const [targetCalories, setTargetCalories] = useState("");
  const [diet, setDiet] = useState("");
  const [exclude, setExclude] = useState([]);
  const [result, setResult] = useState(null);
  const [recipes, setRecipes] = useState(null);

  const handleExcludeChange = (event: { target: { value: any } }) => {
    const selectedOptions = event.target.value;
    setExclude(selectedOptions);
  };

  const resetHanlder = () => {
    setTimeFrame("");
    setTargetCalories("");
    setDiet("");
    setExclude([]);
  };

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

      // Reset form fields after successful form submission
      setTimeFrame("");
      setTargetCalories("");
      setDiet("");
      setExclude([]);
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
      "X-RapidAPI-Key": "230234f211msh8dd6d8c2374c270p164240jsnad194c9e1b6a",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
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
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="timeFrame">Time Frame</InputLabel>
          <Select
            id="timeFrame"
            name="timeFrame"
            value={timeFrame}
            label="Time Frame"
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
          </Select>
        </FormControl>

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
    </>
  );
};

export default Search;
