import React from "react";
import Search from "./Search";
import classes from "./Index.module.css";
import { Provider } from 'react-redux';
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Meal Planner Helper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
};

export default index;
