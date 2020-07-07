import Project from "../../interfaces/Project";
import { PHP, HTMLCSS, Bootstrap } from "./technologies";

export const projects: Project[] = [
    {
        name: "TV2 - Klar Parat Svar kategoritavle",
        description: "WIP",
        technologies: [PHP, HTMLCSS, Bootstrap],
        start_date: new Date(2019, 1),
        end_date: new Date(2020, 1),
        location: "Aarhus, Odense",
    },
];
