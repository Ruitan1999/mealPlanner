import React from "react";
import classes from "./Macros.module.css";

const Macros = ({ macros }: any) => {
  return (
    <div className={classes.macros}>
      <div>
        <h3>calories</h3>
        <p>{macros.calories}kcal</p>
      </div>
      <div>
        <h3>carbs</h3>
        <p>{macros.carbs}</p>
      </div>
      <div>
        <h3>fat</h3>
        <p>{macros.fat}</p>
      </div>
      <div>
        <h3>protein</h3>
        <p>{macros.protein}</p>
      </div>
      {/* <div>
        <h3>Percent Carbs</h3>
        <p>{macros.caloricBreakdown.percentCarbs}%</p>
      </div>
      <div>
        <h3>Percent Fat</h3>
        <p>{macros.caloricBreakdown.percentFat}%</p>
      </div>
      <div>
        <h3>Percent Protein</h3>
        <p>{macros.caloricBreakdown.percentProtein}%</p>
      </div>
      <div>
        <h3>Weight Per Serving</h3>
        <p>{macros.weightPerServing.amount}g</p>
      </div> */}
    </div>
  );
};

export default Macros;
