import React from "react";
import "./Text.css";

const Text = (props) => {
    const classnames = ["text"];

    if (props.className) classnames.push(props.className);

    switch (props.as) {
        case "span":
            return <span className={classnames.join(" ")}>{props.children}</span>;
        case "blockquote":
            return <blockquote className={classnames.join(" ")}>{props.children}</blockquote>
        default:
            return <p className={classnames.join(" ")}>{props.children}</p>;
    }
};

export default Text;
