import Technology from "./Technology";

export interface Project {
    name: string;
    description: string;
    technologies: Technology[];
    start_date: Date;
    end_date: Date;
    location: string;
}
export default Project;
