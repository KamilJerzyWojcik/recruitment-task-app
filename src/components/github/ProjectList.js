import React from "react";
import Project from "./Project";

const ProjectList = props => {
    return <div>
        <h1>Project List</h1>
        <ul>
        {props.projects.map(p => <Project key={p.id.toString()} project = {p}/>)}
        </ul>
    </div>
};

export default ProjectList;