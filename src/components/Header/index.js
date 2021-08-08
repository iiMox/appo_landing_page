import React from "react";
import Navbar from "../Navbar/index";
import Slider from "../Slider/index";

import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <Slider />
        </div>
    );
};

export default Header;
