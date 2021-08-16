import React from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import Offers from "./components/Offers";
import Guide from "./components/Guide";

const App = () => {
    useEffect(() => {
        const myHeader = document.querySelector(".header nav");
        const mySlider = document.querySelector(".header .slider");

        mySlider.style.height = `${
            window.innerHeight - myHeader.offsetHeight
        }px`;

        const containerWidth = document.querySelector(".container").style.width;
        console.log(document.querySelector(".container").style);
        document.querySelector(".guide .box").style.width =
            containerWidth + "px";
    }, []);

    return (
        <>
            <Header />
            <Offers />
            <Guide />
        </>
    );
};

export default App;
