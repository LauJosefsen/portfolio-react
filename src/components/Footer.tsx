import React from "react";
import "./Footer.css";
import { AiOutlineCopyright } from "react-icons/ai";

interface Props {}

const Footer = (props: Props) => {
    return (
        <div className="footer d-flex">
            <div className="w-100  text-center justify-content-center align-self-center"><AiOutlineCopyright/>{' '}Josefsens IT 2020, CVR: 41477075</div>
        </div>
    );
    // <div className="footer text-center"><span className="align-middle">CVR: 12345678</span></div>;
};

export default Footer;
