import React from "react";
import Project from "./Project";

const ProjectList = props => {
    return <div>
        <h3>Projekty dla: {props.login}</h3>
        <ul>
        {props.projects.map(p => <Project key={p.id.toString()} project = {p}/>)}
        </ul>
    </div>
};

export default ProjectList;