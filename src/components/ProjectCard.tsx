import React from "react";
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
const ProjectCard = () => {
    return (
        <Col sm={12} xl={4} className="mb-3 mt-3">
            <Card>
                <CardImg top width="100%" src="/images/profile.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProjectCard;
