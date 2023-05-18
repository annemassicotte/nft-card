import React from 'react'
import "./Image.css";

const Image = (props) => {
    const classnames = ["img"];
    if (props.className) classnames.push(props.className);

    const src = props.src;
    const alt = props.alt;

    return <img src={src} alt={alt} className={classnames.join(" ")} />;
}

export default Image