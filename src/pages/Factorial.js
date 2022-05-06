import React, { Fragment, useContext, useState } from "react";
import FactorialForm from "../components/factorial/FactorialForm";
import FactorialHistory from "../components/factorial/FactrotialHistory";
import FactorialContext from "../components/store/FactorialContext";

const Factorial = () => {
  const [isNumbers, setIsNumbers] = useState(false);
  const factorialCtx = useContext(FactorialContext);
  const [isSafeInteger, setIsSafeInteger] = useState(true);

  const calcFactorial = number => {

      if (number === 0){
          return 1;
      }

      let factorial = 1;

      for (let i = 1; i <= number; i++){
        factorial = factorial * i;
        if (factorial > Number.MAX_SAFE_INTEGER) {
            factorial = undefined;
            setIsSafeInteger(false);
            break;
        }
      }

      return factorial;
  }

  const addToHistoryHandler = (num) => {
    const factorial = calcFactorial(num)
    if (factorial) {
        factorialCtx.addNumber(factorial);
        if (!isSafeInteger) setIsSafeInteger(true);
        if (!isNumbers) setIsNumbers(true);
    }
  };

  return (
    <Fragment>
      <h1>Oblicz siłę</h1>
      <FactorialForm onSubmit={addToHistoryHandler} safeError={isSafeInteger}/>
      {isNumbers && <FactorialHistory />}
    </Fragment>
  );
};

export default Factorial;
