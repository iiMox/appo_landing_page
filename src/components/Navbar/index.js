import React from "react";

import "./Navbar.css";

import logoImg from "../../images/logo.png";

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav>
                    <div className='logo'>
                        <img src={logoImg} alt='LOGO' />
                    </div>
                    <div className='links'>
                        <ul>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className='left-side'>
                        <button>Get The App</button>
                        <div className='more'>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
