import React from 'react'
import About from "./About/About";
import Anketa from "./Anketa/Anketa";
import Header from "./Header/Header";

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
