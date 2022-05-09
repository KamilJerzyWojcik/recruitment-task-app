import React from "react";
import classes from "./CommitItem.module.css";

const CommitItem = (props) => {
    const getDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
    
        return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
      };

  return (
    <li
      key={props.commit.id.toString()}
      className={props.index % 2 === 0 ? classes.list__item : classes.list__item__special}
    >
      <div className={classes.list__container}>Data: {getDate(new Date(props.commit.date))}</div>
      <div className={classes.list__container}>Wiadomość: {props.commit.message}</div>
    </li>
  );
};

export default CommitItem;
