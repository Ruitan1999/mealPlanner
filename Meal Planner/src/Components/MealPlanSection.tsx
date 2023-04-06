import React from "react";
import classes from "./MealPlanSection.module.css";
import { Autocomplete, Box, Button, TextField } from "@mui/material";

const MealPlanSection = () => {
  return (
    <div className={classes.section}>
      <h1>Whats Your Target Calories? </h1>
      <h3>
        The goal for us is to helps you to achieve your goal more easily and
        efficiently, maximising the full potential of the workout.
      </h3>
      <h3>
        Our Meal Planer will help you select an ideal recipe plan that fits your
        style of fitness in 3 steps. Then the system will generate a plan based
        on your criteria.
      </h3>


      <div className={classes.search}>
        
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            sx={{width: "800px", height: "55px"}}
          />
          <Button variant="contained" sx={{height: "55px"}}>Search</Button>

      </div>

    </div>
  );
};

export default MealPlanSection;
