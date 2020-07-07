import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import Project from "../interfaces/Project";
import { Link } from "react-router-dom";

interface Props {
    project: Project;
}
const ProjectCard = (props: Props) => {
    return (
        <Col sm={12} xl={4} className="mb-3 mt-3">
            <Card>
                <CardImg top width="100%" src="/images/profile.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.project.name}</CardTitle>
                    <CardSubtitle>{props.project.description}</CardSubtitle>
                    <Link to={"projects/" + props.project.id}>
                        <Button className="float-right">Se mere</Button>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProjectCard;
