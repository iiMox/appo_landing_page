import React from "react";

import "./Offer.css";

const Offer = ({ imageName, title }) => {
    return (
        <div className='offer'>
            <div className='offer-img'>
                <img
                    src={require(`../../images/${imageName}.png`).default}
                    alt='Service'
                />
            </div>
            <h4>{title}</h4>
            <p>
                Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                accumsan tincidunt. Vestibulum ac diamdo.
            </p>
        </div>
    );
};

export default Offer;
