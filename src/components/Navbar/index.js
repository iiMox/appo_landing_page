import React from "react";

import "./Navbar.css";

import logoImg from "../../images/logo.png";

const Navbar = () => {
    const onClickLink = (e) => {
        const myLi = e.target;
        const itemsList = myLi.parentNode.childNodes;
        itemsList.forEach((item) => {
            item.classList.remove("active");
        });
        myLi.classList.add("active");
    };

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='logo'>
                        <img src={logoImg} alt='LOGO' />
                    </div>
                    <div className='links'>
                        <ul>
                            <li onClick={(e) => onClickLink(e)}>Home</li>
                            <li onClick={(e) => onClickLink(e)}>Features</li>
                            <li onClick={(e) => onClickLink(e)}>Pricing</li>
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
