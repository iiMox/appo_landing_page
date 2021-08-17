import React from "react";

import fbImg from "../../images/facebook.png";
import twImg from "../../images/twitter.png";
import drImg from "../../images/dribble.png";
import goImg from "../../images/google.png";
import ytImg from "../../images/youtube.png";

import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='rights'>
                    <span> &copy; 2018 - Appo. All Right Reserved</span>
                </div>
                <div className='social'>
                    <ul>
                        <li>
                            <img src={fbImg} alt='Facebook' />
                        </li>
                        <li>
                            <img src={twImg} alt='Twitter' />
                        </li>
                        <li>
                            <img src={drImg} alt='Dribble' />
                        </li>
                        <li>
                            <img src={goImg} alt='Google' />
                        </li>
                        <li>
                            <img src={ytImg} alt='Youtube' />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
