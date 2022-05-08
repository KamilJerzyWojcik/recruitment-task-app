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
      className={props.index % 2 === 0 ? classes.item : classes.commitspecial}
    >
      <div className={classes.container}>Data: {getDate(props.commit.date)}</div>
      <div className={classes.container}>Wiadomość: {props.commit.message}</div>
    </li>
  );
};

export default CommitItem;
