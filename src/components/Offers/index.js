import React from "react";

import Offer from "../Offer/index";

import "./Offers.css";

const Offers = () => {
    return (
        <div className='services'>
            <div className='container'>
                <h2>Everything needded to power your app brend online</h2>
                <hr />
                <div className='services-container'>
                    <Offer imageName='design' title='Modern Flat Design' />
                    <Offer imageName='free' title='First 7 Days Free' />
                    <Offer imageName='support' title='Fully Support' />
                    <Offer imageName='paint' title='User Friendly' />
                </div>
            </div>
        </div>
    );
};

export default Offers;
