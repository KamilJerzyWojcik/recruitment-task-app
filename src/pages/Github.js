import React from "react";
import ProjectList from "../components/github/ProjectList";
import Search from "../components/github/Search";

const Github = () => {
    return <div>
        <h1>Wyszukaj projekty na Github</h1>
        <Search />
        <ProjectList/>
    </div>
};

export default Github;