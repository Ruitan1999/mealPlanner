import Link from "next/link";
import classes from "../styles/MealPlanSection.module.css";

const MealPlanSection = () => {
  return (
    <div className={classes.section}>
      <h1>What are you waiting for? Get started NOW</h1>
      <h3>
        Our aim is to assist you in achieving your fitness goals with ease and
        efficiency, maximizing the full potential of your workouts. With our
        Meal Planner, you can select an ideal recipe plan that aligns with your
        unique fitness style in just few simple steps.
      </h3>
      <h3>
        Our system will then generate a personalized plan based on your
        criteria, ensuring that your meals support your fitness objectives
        effectively.
      </h3>
      <Link href="/getMealPlans">
        <button>Get Started Now</button>
      </Link>
    </div>
  );
};

export default MealPlanSection;
