import React from "react";

import { useState } from "react";

import "./Feature.css";

const Feature = ({ image, title }) => {
    const [hidden, setHidden] = useState(true);

    return (
        <div
            className='feature'
            onClick={(e) => {
                if (hidden) {
                    setHidden(false);
                } else {
                    setHidden(true);
                }
                const siblings = document.querySelector(
                    ".features .props .right-side"
                ).childNodes;
                siblings.forEach((item) => {
                    item.classList.remove("active");
                });
                while (!e.target.classList.contains("feature")) {
                    e.target = e.target.parentNode;
                }
                e.target.classList.add("active");
            }}
        >
            <div className='img-box'>
                <img
                    src={require(`../../images/${image}.png`).default}
                    alt='Feature'
                />
            </div>
            <div className='desc-box'>
                <h4>{title}</h4>
                <p className={`${hidden ? "hidden" : ""}`}>
                    Cras ultricies ligula sed magna dictum porta. Nulla
                    porttitor accumsan tincidunt. Vestibulum ac diam.
                </p>
            </div>
        </div>
    );
};

export default Feature;
