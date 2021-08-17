import React from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import Offers from "./components/Offers";
import Guide from "./components/Guide";
import Features from "./components/Features";
import Compatability from "./components/Compatablility";
import Intro from "./components/Intro";
import Join from "./components/Join";
import Quote from "./components/Quote";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
            <Compatability />
            <Intro />
            <Join />
            <Quote />
            <Download />

            <Contact />
            <Footer />
        </>
    );
};

export default App;
