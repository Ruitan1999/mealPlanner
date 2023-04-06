import React from "react";
import Image from "next/image";
import Cover from "../assets/banner.png";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <h1>Cook an amazing meal any night of the week</h1>
      <Image src={Cover} alt={"banner"}></Image>
    </div>
  );
};

export default Banner;
