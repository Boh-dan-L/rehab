import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import PageOne from "./PageOne";
import PageVideoCouse from "./PageVideoCouse";


const App = () => {

    return (
        <BrowserRouter>

                <Navbar/>
                <Routes>
                    <Route path="/" element={<PageOne/>} />
                    <Route path="/online" element = {<PageVideoCouse/>}/>
                </Routes>
                <Footer/>
        </BrowserRouter>
    )

};
export default App;