import React from "react";
import classes from "../styles/Goal.module.css";
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
              By simply inputting your daily calorie intake, dietary
              requirements, and excluding any allergies, our system will
              instantly provide you with personalized meal recommendations. This
              will not only save you precious time and effort, but also ensure
              that your meals align with your specific dietary needs. Say
              goodbye to the hassle of meal planning, and let our system do the
              work for you in a matter of seconds.
            </p>
          </div>
        </div>
        <div className={classes.goal1}>
          <Image src={goal2} alt={"goal1"} />
          <div>
            <h1>Making Cooking Easy</h1>
            <p>
              Our platform will provide you with detailed instructions on the
              exact number of ingredients you need, as well as step-by-step
              cooking guidance. With our help, you can confidently prepare your
              dinner with precision every time, ensuring a successful outcome
              with 100% accuracy.
            </p>
          </div>
        </div>
        <div className={classes.goal}>
          <Image src={goal3} alt={"goal1"} />
          <div>
            <h1>Finding a plan that suits you</h1>
            <p>
              You will have access to a wide selection of recipe choices, and if
              you're not satisfied with the initial options, you can easily
              search for more. Finding a recipe that perfectly fits your
              preferences will be effortless, ensuring that you can discover the
              perfect meal to suit your taste buds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
