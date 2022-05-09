import React from "react";
import classes from "./CommitItem.module.css";
import {getDate} from "../../services/DateService";

const CommitItem = (props) => {

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
