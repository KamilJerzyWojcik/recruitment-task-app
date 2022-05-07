import React from "react";

const Search = (props) => {
  const clickHandler = () => {
    props.onSubmit("KamilJerzyWojcik");
  };

  return (
    <div>
      <h1>Serach form</h1>
      <button onClick={clickHandler}>Wyszukaj</button>
    </div>
  );
};

export default Search;
