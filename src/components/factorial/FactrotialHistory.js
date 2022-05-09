import React from "react";
import classes from "./FactorialHistory.module.css";
import { useSelector } from 'react-redux';

const FactorialHistory = () => {
  const numbersState = useSelector(state => state.factorial.numbers);

  const getDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
  };

  const numbers = numbersState.map((number, index) => {
    return (
      <li className={index % 2 === 0 ? classes.list__item : classes.list__item__special} key={index}>
        <div>data: {getDate(new Date(number.date))}</div>
        <div>wartość: {number.value}</div>
      </li>
    );
  });

  return (
    <div>
      <h1>Factorial history</h1>
      <ul className={classes.list}>{numbers}</ul>
    </div>
  );
};

export default FactorialHistory;
