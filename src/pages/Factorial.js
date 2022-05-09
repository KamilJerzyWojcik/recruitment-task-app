import React, { Fragment, useState } from "react";
import FactorialForm from "../components/factorial/FactorialForm";
import FactorialHistory from "../components/factorial/FactrotialHistory";
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, setIsNumbers } from '../store/FactorialSlice';

const Factorial = () => {
  const [isSafeInteger, setIsSafeInteger] = useState(true);
  const isNumber = useSelector(state => state.factorial.isNumbers)
  const dispatch = useDispatch()

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

  const addToHistoryHandler = (num, date) => {
    const factorial = calcFactorial(num)
    if (factorial) {
        dispatch(addNumber({value: factorial, date: date.toString()}));
        if (!isSafeInteger) setIsSafeInteger(true);
        if (!isNumber) dispatch(setIsNumbers({value: true}));
    }
  };

  return (
    <Fragment>
      <h1>Oblicz siłę</h1>
      <FactorialForm onSubmit={addToHistoryHandler} safeError={isSafeInteger}/>
      {isNumber && <FactorialHistory />}
    </Fragment>
  );
};

export default Factorial;
