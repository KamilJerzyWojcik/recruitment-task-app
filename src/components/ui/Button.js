import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.actions}>
      <button className="btn">{props.text}</button>
    </div>
  );
};

export default Button;
