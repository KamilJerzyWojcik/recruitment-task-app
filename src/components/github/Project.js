import React from "react";
import CommitItem from "./CommitItem";
import classes from "./Project.module.css";

const Project = props => {
  return (
    <div>
      <li key={props.project.id.toString()} className={props.index % 2 === 0 ? classes.list__item : classes.list__item__special} >{props.project.name}</li>
      Ostatnie zmiany:
      <ul>
        {props.project.commits.map((c, index) => (
          <CommitItem index={index} key={c.id.toString()} commit={c} />
        ))}
      </ul>
    </div>
  );
};

export default Project;