import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.actions}>
      <button className={classes.actions__button + " btn"}>{props.text}</button>
    </div>
  );
};

export default Button;
