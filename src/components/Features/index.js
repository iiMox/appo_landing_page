import React from "react";

import FeatureImg from "../../images/stable_feature.png";
import PhoneImg from "../../images/phone_rotated.png";
import Feature from "../Feature";

import "./Features.css";

const Features = () => {
    return (
        <div className='features'>
            <div className='container'>
                <div className='stable'>
                    <div className='left-side'>
                        <h2>Stable And Ready</h2>
                        <p>
                            Cras ultricies ligula sed magna dictum porta. Nulla
                            porttitor accumsan tincidunt. Vestibulum ac diam sit
                            amet quam vehicula elementum sed sit amet dui.
                            Curabitur aliquet quam id dui posuere blandit.
                            Curabitur aliquet quam id dui posuere blandit.
                            Vestibulum ac diam sit amet quam.
                        </p>
                        <button>Download Free Today</button>
                    </div>
                    <div className='right-side'>
                        <img src={FeatureImg} alt='Feature' />
                    </div>
                </div>
                <div className='props'>
                    <div className='left-side'>
                        <img src={PhoneImg} alt='Phone' />
                    </div>
                    <div className='right-side'>
                        <Feature image='heart' title='Made With Love' />
                        <Feature image='tag' title='Free of Use' />
                        <Feature image='case' title='Fully Support Avaliable' />
                        <Feature image='pen' title='Flat and Modern Ui & Ux' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
