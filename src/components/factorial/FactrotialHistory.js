import React, { useContext } from "react";
import FactorialContext from "../store/FactorialContext";

const FactorialHistory = () => {
  const factorialCtx = useContext(FactorialContext);

  const numbers = factorialCtx.numbers.map((number, index) => <li key={index}>{number}</li>);

  return (
    <div>
      <h1>Factorial history</h1>
      <ul>{numbers}</ul>
    </div>
  );
};

export default FactorialHistory;
