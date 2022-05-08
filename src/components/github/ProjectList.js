import React from "react";
import Project from "./Project";
import classes from "./ProjectList.module.css";

const ProjectList = props => {
    return <div>
        <h3>Projekty dla: {props.login}</h3>
        <ul className={classes.list}>
        {props.projects.map((p, index) => <Project index={index} key={p.id.toString()} project = {p}/>)}
        {props.projects.length === 0 && <h3>Brak dostępnych projektów</h3>}
        </ul>
    </div>
};

export default ProjectList;