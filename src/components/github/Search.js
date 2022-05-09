import React, { useRef, useState } from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  const enteredLoginRef = useRef();
  const [isValidLogin, setIsValidLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const login = enteredLoginRef.current.value;
    if (login.trim().length === 0) {
      setIsValidLogin(false);
      return;
    }
    setIsValidLogin(true);
    props.onSubmit(login);
    enteredLoginRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.form__control}>
          <label className={classes.form__label} htmlFor="login">Wpisz login</label>
          <input className={classes.form__input} type="text" id="login" ref={enteredLoginRef} />
          {!isValidLogin && <p className={classes.error}>proszę wpisać login</p>}
        </div>
        <div className={classes.actions}>
        <button className={classes.actions__button + " btn"} type="submit">Wyszukaj</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
