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
        <div className={classes.control}>
          <label htmlFor="login">Wpisz login</label>
          <input type="text" id="login" ref={enteredLoginRef} />
          {!isValidLogin && <p>proszę wpisać login</p>}
        </div>
        <div className={classes.actions}>
        <button type="submit" className='btn'>Wyszukaj</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
