import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderImage from "./HeaderImage/";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <HeaderImage />
    </>
  );
};

export default Header;
