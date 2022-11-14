import React from 'react'
import About from "./components/About/About";
import Anketa from "./components/Anketa/Anketa";
import Header from "./components/Header/Header";

const PageOne = () => {
    return (
        <div>
            <Header/>
            <Anketa/>
            <About/>
        </div>
    )
}

export default PageOne
