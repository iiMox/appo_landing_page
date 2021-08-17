import React from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import Offers from "./components/Offers";
import Guide from "./components/Guide";
import Features from "./components/Features";

const App = () => {
    useEffect(() => {
        const myHeader = document.querySelector(".header nav");
        const mySlider = document.querySelector(".header .slider");

        mySlider.style.height = `${
            window.innerHeight - myHeader.offsetHeight
        }px`;
    }, []);

    return (
        <>
            <Header />
            <Offers />
            <Guide />
            <Features />
        </>
    );
};

export default App;
