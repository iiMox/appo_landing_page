import React from "react";

import playImg from "../../images/play.png";

import "./Intro.css";

const Intro = () => {
    return (
        <div className='video'>
            <div className='container'>
                <div className='play-button'>
                    <img src={playImg} alt='Play' />
                </div>
                <h4>WATCH THE VIDEO</h4>
                <p>
                    Cras ultricies ligula sed magna dictum porta. Nulla
                    porttitor accumsan tincidunt. Vestibulum ac diam sit amet
                    quam vehicula elementum sed sit amet dui. Curabitur aliquet
                    quam id dui posuere blandit. Curabitur aliquet quam id dui
                    posuere blandit. Vestibulum ac diam sit amet quam.
                </p>
            </div>
        </div>
    );
};

export default Intro;
