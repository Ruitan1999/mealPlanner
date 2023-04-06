import React from "react";
import Search from "./Search";
import classes from "./Index.module.css";

const index = () => {
  return (
    <div className={classes.main}>
      <div className={classes.searchSection}>
        <h1>
          Generate a meal plan with three meals per day (breakfast, lunch, and
          dinner).
        </h1>
        <h4>
          You can utilise the search form below to customize your preferences,
          including time frame, target calories, diet, and exclusions.
        </h4>
        <Search></Search>
      </div>
    </div>
  );
};

export default index;
