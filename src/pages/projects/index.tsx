import React from "react";
import { Row } from "reactstrap";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "./projects";

const Projects = () => {
    return (
        <header className="App-header">
            <h1>Projekter</h1>
            <Row>
                {projects.map((x) => {
                    return <ProjectCard key={x.id} project={x} />;
                })}
            </Row>
        </header>
    );
};

export default Projects;
