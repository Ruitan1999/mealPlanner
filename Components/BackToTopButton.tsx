import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import classes from "../styles/About.module.css";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setShowButton(window.scrollY > 100);
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${classes.backToTopButton} ${showButton ? classes.show : ""}`}
      onClick={handleButtonClick}
      aria-label="Back to Top"
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default BackToTopButton;
