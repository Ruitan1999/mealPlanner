import Head from "next/head";
import { Nunito } from "next/font/google";
import About from "../Components/About";
import Cover from "../Components/Cover";
import Banner from "../Components/Banner";
import Goal from "../Components/Goal";
import MealPlanSection from "../Components/MealPlanSection";
import classes from './index.module.css'

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {

  
  return (
    <>
      <Head>
        <title>Meal Planner Helper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.cover}>
        <Cover></Cover>
        <About></About>
        <Banner></Banner>
        <Goal></Goal>
        <MealPlanSection></MealPlanSection>
      </main>
    </>
  );
}
