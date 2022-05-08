import React from "react";
import Project from "./Project";

const ProjectList = props => {
    return <div>
        <h3>Projekty dla: {props.login}</h3>
        <ul>
        {props.projects.map(p => <Project key={p.id.toString()} project = {p}/>)}
        {props.projects.length === 0 && <h3>Brak dostępnych projektów</h3>}
        </ul>
    </div>
};

export default ProjectList;