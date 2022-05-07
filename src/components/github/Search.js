import React, { useRef, useState } from "react";

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
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="login">Wpisz login</label>
          <input type="text" id="login" ref={enteredLoginRef} />
          {!isValidLogin && <p>proszę wpisać login</p>}
        </div>
        <button type="submit">Wyszukaj</button>
      </form>
    </div>
  );
};

export default Search;
