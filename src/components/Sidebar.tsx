import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import "./Sidebar.css";
import ImageContainer from "./ImageContainer";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ImageContainer src="" />
            <h3>Peter Griffin</h3>

            <p>Software studerende</p>
            <p>
                <MdEmail /> lau@josefsens.dk
            </p>
            <p>
                <MdPhone /> +45 29 72 14 01
            </p>
            <Nav className="code">
                <NavItem>
                    <Link className="nav-link" to="/">INTRODUKTION</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/projects">PROJEKTER</Link>
                </NavItem>
                <NavItem>
                    <NavLink target="_blanc" href="https://github.com/LauJosefsen">GITHUB</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink target="_blanc" href="https://www.linkedin.com/in/lau-ernebjerg-josefsen-09734717a/">LINKEDIN</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Sidebar;
