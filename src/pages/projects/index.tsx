import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    return (
        <header className="App-header">
            <h1>Projekter</h1>
            <Row>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                
            </Row>
        </header>
    );
};

export default Projects;
