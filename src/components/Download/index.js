import React from "react";

import phonesImg from "../../images/phones.png";
import androidImg from "../../images/android.png";
import iosImg from "../../images/ios.png";

import "./Download.css";

const Download = () => {
    return (
        <div className='download'>
            <div className='container'>
                <div className='left-side'>
                    <img src={phonesImg} alt='Phones' />
                </div>
                <div class='right-side'>
                    <h2>Now Available</h2>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Nulla
                        porttitor accumsan tincidunt. Vestibulum ac diam sit
                        amet quam vehicula elementum sed sit amet dui. quam
                        vehicula elementum sed sit ametsuada.
                    </p>
                    <div className='download-buttons'>
                        <img src={androidImg} alt='android' />
                        <img src={iosImg} alt='ios' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
