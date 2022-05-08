import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.control}>
      <label className={classes.control__label} htmlFor={props.input.id}>{props.label}</label>
      <input className={classes.control__input} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
