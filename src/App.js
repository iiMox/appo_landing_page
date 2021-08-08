import React from "react";
import { useEffect } from "react";

import Header from "./components/Header";

const App = () => {
    useEffect(() => {
        const myHeader = document.querySelector(".header nav");
        const mySlider = document.querySelector(".header .slider");

        mySlider.style.height = `${
            window.innerHeight - myHeader.offsetHeight
        }px`;
        console.log(window.innerHeight);
        console.log(myHeader.offsetHeight);
    }, []);

    return (
        <>
            <Header />
        </>
    );
};

export default App;
