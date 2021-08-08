import React from "react";

import "./Slider.css";

import phoneImg from "../../images/phone.png";

const Slider = () => {
    return (
        <div className='slider'>
            <div className='container'>
                <div className='left-side'>
                    <h1>Choose a better way to represent your app</h1>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Nulla
                        porttitor accumsan tincidunt. Vestibulum ac diam sit
                        amet quam vehicula elementum sed sit amet dui. Curabitur
                        aliquet quam id dui posuere.
                    </p>
                    <div className='buttons'>
                        <button>Download Free Today</button>
                        <button>Reach Out To Us</button>
                    </div>
                </div>
                <div className='right-side'>
                    <img src={phoneImg} alt='Smartphone' />
                </div>
            </div>
        </div>
    );
};

export default Slider;
