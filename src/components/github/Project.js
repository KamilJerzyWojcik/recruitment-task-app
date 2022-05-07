import React from "react";
import CommitItem from "./CommitItem";

const Project = props => {
  return (
    <div>
      <li key={props.project.id.toString()}>{props.project.name}</li>
      <ul>
        {props.project.commits.map((c) => (
          <CommitItem key={c.id.toString()} commit={c} />
        ))}
      </ul>
    </div>
  );
};

export default Project;