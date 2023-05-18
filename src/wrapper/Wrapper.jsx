import React from 'react'
import "./Wrapper.css"

const Wrapper = (props) => {
    const classnames = ["wrapper"];

    if (props.flex) classnames.push("flex");
    if (props.className) classnames.push(props.className);

    return <div className={classnames.join(" ")}>{props.children}</div>;
}

export default Wrapper