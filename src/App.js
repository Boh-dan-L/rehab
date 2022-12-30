import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import PageOne from "./PageOne/PageOne";
import PageVideoCouse from "./PageVideoCurse/PageVideoCouse";
import PagePrice from './PagePrice/PagePrice';
import PageContacts from './PageContacts/PageContacts';


const App = () => {

    return (
        <BrowserRouter>

                <Navbar/>
                <Routes>
                    <Route path="/" element={<PageOne/>} />
                    <Route path="/online" element = {<PageVideoCouse/>}/>
                    <Route path="/services" element = {<PagePrice/>}/>
                    <Route path="/contacts" element = {<PageContacts/>}/>
                </Routes>
                <Footer/>
        </BrowserRouter>
    )

};
export default App;