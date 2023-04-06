import React from "react";
import classes from "./Cover.module.css";
import Image from "next/image";
import cover from "../assets/cover.png";
const Cover = () => {
  return (
    <>
      <div className={classes.cover}>
        <div className={classes.writingSection}>
          <h1>Don’t know what to cook next?</h1>
          <p>
            Let us help you to decide the next meal for you. Taking out the
            stree of thinking constantly what to cook next. We will plan all the
            cooking recipe for you that suits your needs.
          </p>
        </div>
        <div className={classes.coverSection}>
          <svg
            viewBox="0 0 1728 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes.curvyline}
          >
            <path
              d="M0 6.53499C141.767 0.021816 475.57 10.8437 676.643 106.237C927.985 225.478 1122.94 256.04 1308.3 219.466C1493.65 182.892 1640.62 27.0765 1727 22.0664"
              stroke="#161616"
              strokeWidth="2"
            />
          </svg>

          <Image src={cover} alt={"dish"}></Image>
        </div>
      </div>
    </>
  );
};

export default Cover;
