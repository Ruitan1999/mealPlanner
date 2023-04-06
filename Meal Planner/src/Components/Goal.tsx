import React from "react";
import classes from "./Goal.module.css";
import Image from "next/image";
import goal1 from "../assets/goal1.png";
import goal2 from "../assets/goal2.png";
import goal3 from "../assets/goal3.png";

const Goal = () => {
  return (
    <div className={classes.goalsSection}>
          <h1 className={classes.mainTitle}>Our Goals</h1>
    <div className={classes.goals}>
      
      <div className={classes.goal}>
        <Image src={goal1} alt={"goal1"} />
        <div>
          <h1>Time Saving</h1>
          <p>
            It will save you a lot of time and hassle, all you need to do is
            enter your daily calories intake and it will give you result
            instantly.
          </p>
        </div>
      </div>
      <div className={classes.goal1}>
        <Image src={goal2} alt={"goal1"} />
        <div>
          <h1>Making Cooking Easy</h1>
          <p>
            It will save you a lot of time and hassle, all you need to do is
            enter your daily calories intake and it will give you result
            instantly.
          </p>
        </div>
      </div>
      <div className={classes.goal}>
        <Image src={goal3} alt={"goal1"} />
        <div>
          <h1>Finding a plan that suits you</h1>
          <p>
            It will save you a lot of time and hassle, all you need to do is
            enter your daily calories intake and it will give you result
            instantly.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Goal;
