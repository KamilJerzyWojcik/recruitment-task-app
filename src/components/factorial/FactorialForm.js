import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import classes from "./FactorialForm.module.css";

const FactorialForm = (props) => {
  const maxValueNumber = 100;
  const minValueNumber = 0;

  const numberInputRef = useRef();
  const [isNumberValid, setIsNumberValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const value = numberInputRef.current.value;
    const valueNumber = +value;
    if (
      value.trim().length === 0 ||
      !Number.isInteger(valueNumber) ||
      valueNumber > maxValueNumber ||
      valueNumber < minValueNumber
    ) {
      setIsNumberValid(false);
      return;
    }
    setIsNumberValid(true);
    props.onSubmit(valueNumber, new Date());
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          ref={numberInputRef}
          label="Podaj liczbę do obliczenia silni"
          input={{
            id: "number_" + Math.random(),
            type: "number",
            min: `${minValueNumber}`,
            max: `${maxValueNumber}`,
            step: "1",
            defaultValue: "0",
          }}
        />
        {!props.safeError && <p className={classes.error}>Przekroczono dopuszczalną wielkość liczby</p>}
        {!isNumberValid && <p className={classes.error}>proszę wpisać liczbę całkowitą od {minValueNumber} do {maxValueNumber}</p>}
        <Button text="Wylicz silnię" />
      </form>
    </div>
  );
};

export default FactorialForm;
