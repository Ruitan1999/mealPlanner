import React from "react";
import Image from "next/image";
import classes from "../../styles/Card.module.css";
import testImg from "../../assets/banner.png";

const MealItem = () => {
  return (
    <div className={classes.card}>
      <h1>Test Item</h1>
      <Image src={testImg} alt={"test"}></Image>
      <div className={classes.details}>
        <div className={classes.serving}>
          <div>
            <h3>Serving Size</h3>
            <h2>5</h2>
          </div>
          <div>
            <h3>Cooking Time</h3>
            <h2>20min</h2>
          </div>
          <div>
            <h3>Health Score</h3>
            <h2>4</h2>
          </div>
        </div>
        <div className={classes.cost}>
          <div>
            <h3>Price Per Serving</h3>
            <h2>$45</h2>
          </div>
        </div>
      </div>
      <button>View Item</button>
    </div>
  );
};

export default MealItem;
