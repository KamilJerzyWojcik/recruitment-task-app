import React, { useReducer } from "react";
import FactorialContext from "./FactorialContext";

const defaultFactorialState = {
  numbers: [],
};

const ADD_NUMBER = "ADD";

const numberReducer = (state, action) => {
  if (action.type === ADD_NUMBER) {
    const updatedNumber = [action.number, ...state.numbers];
    return {
      numbers: updatedNumber,
    };
  }

  return defaultFactorialState;
};

const FactorialProvider = (props) => {
  const [factorialState, dispatchFactorialAction] = useReducer(
    numberReducer,
    defaultFactorialState
  );

  const addNumberHandler = (number) => {
    dispatchFactorialAction({ type: ADD_NUMBER, number: {value: number.value, date: number.date} });
  };

  const factorialContext = {
    numbers: factorialState.numbers,
    addNumber: addNumberHandler,
  };

  return (
    <FactorialContext.Provider value={factorialContext}>
      {props.children}
    </FactorialContext.Provider>
  );
};

export default FactorialProvider;
