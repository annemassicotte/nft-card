import React from 'react'
import "./Hr.css"

const Hr = (props) => {
    const classnames = ["hr"];

    if (props.className) classnames.push(props.className);

    return <hr className={classnames.join(" ")} />;
}

export default Hr