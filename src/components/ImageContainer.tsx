import React from "react";
import "./ImageContainer.css";

interface Props {
    src:string;
}

const ImageContainer = (props: Props) => {
    return (
        <div className="image-container">
            <div className="image-child"></div>
        </div>
    );
};

export default ImageContainer;
