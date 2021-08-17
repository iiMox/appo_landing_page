import React from "react";

import "./Links.css";

const Links = (props) => {
    return (
        <div className='links'>
            <h4>{props.title}</h4>
            <ul>
                {props.links.map((link) => (
                    <li>{link}</li>
                ))}
            </ul>
        </div>
    );
};

export default Links;
