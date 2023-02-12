import React from "react";

import mealsImage from "../../../../assets/meals.jpg";

import classes from "./HeaderImage.module.css";

const HeaderImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="A table full of food" />
    </div>
  );
};

export default HeaderImage;
