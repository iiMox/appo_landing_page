import React from "react";

import "./Navbar.css";

import logoImg from "../../images/logo.png";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='container'>
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
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
