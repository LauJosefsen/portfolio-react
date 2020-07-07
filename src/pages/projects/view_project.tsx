import React from "react";
import { RouteComponentProps } from "react-router";
import { projects } from "./projects";

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export const ViewProject = (props: Props) => {
    let project = projects.filter((x) => x.id === props.match.params.id)[0];
    if (!project) props.history.push("/");
    return <h1>{project.name}</h1>;
};
