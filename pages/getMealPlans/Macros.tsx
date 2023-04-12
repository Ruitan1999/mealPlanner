import React from "react";
import classes from "./mealitemid.module.css";

const Macros = ({ macros }: any) => {
  return (
    <div className={classes.macros}>
      <div>
        <h3>calories</h3>
        {macros && macros.calories && <p>{macros.calories}kcal</p>}
      </div>
      <div>
        <h3>carbs</h3>
        {macros && macros.carbs && <p>{macros.carbs}</p>}
      </div>
      <div>
        <h3>fat</h3>
        {macros && macros.fat && <p>{macros.fat}</p>}
      </div>
      <div>
        <h3>protein</h3>
        {macros && macros.protein && <p>{macros.protein}</p>}
      </div>
      <div>
        <h3>Percent Carbs</h3>
        {macros &&
          macros.caloricBreakdown &&
          macros.caloricBreakdown.percentCarbs && (
            <p>{macros.caloricBreakdown.percentCarbs}%</p>
          )}
      </div>
      <div>
        <h3>Percent Fat</h3>
        {macros &&
          macros.caloricBreakdown &&
          macros.caloricBreakdown.percentFat && (
            <p>{macros.caloricBreakdown.percentFat}%</p>
          )}
      </div>
      <div>
        <h3>Percent Protein</h3>
        {macros &&
          macros.caloricBreakdown &&
          macros.caloricBreakdown.percentProtein && (
            <p>{macros.caloricBreakdown.percentProtein}%</p>
          )}
      </div>
      <div>
        <h3>Weight Per Serving</h3>
        {macros &&
          macros.weightPerServing &&
          macros.weightPerServing.amount && (
            <p>{macros.weightPerServing.amount}g</p>
          )}
      </div>
    </div>
  );
};

export default Macros;
