import React from "react";

import checkImg from "../../images/check.png";

import "./Compatability.css";

const Compatability = () => {
    return (
        <div className='comp'>
            <div className='container'>
                <div className='left-side'>
                    <h2>Everything You Need</h2>
                    <ul>
                        <li>
                            <div>
                                <img src={checkImg} alt='Check' />
                            </div>
                            Android
                        </li>
                        <li>
                            <div>
                                <img src={checkImg} alt='Check' />
                            </div>
                            iPhone
                        </li>
                    </ul>
                    <p>
                        Cras ultricies ligula sed magna dictum porta. Nulla
                        porttitor accumsan tincidunt. Vestibulum ac diam sit
                        amet quam vehicula elementum sed sit amet dui. Curabitur
                        aliquet quam id dui posuere blandit. Curabitur aliquet
                        quam id dui posuere blandit. Vestibulum ac diam sit amet
                        quam.
                    </p>
                </div>
                <div className='right-side'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Compatability;
