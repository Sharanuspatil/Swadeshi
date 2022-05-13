import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mainImage from "../assets/main1.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
