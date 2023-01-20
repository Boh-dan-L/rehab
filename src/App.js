import React, { useEffect, useState } from "react";
import { BrowserRouter , Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import PageOne from "./PageOne/PageOne";
import PageVideoCouse from "./PageVideoCurse/PageVideoCouse";
import PagePrice from './PagePrice/PagePrice';
import PageContacts from './PageContacts/PageContacts';
import Layout from './components/Layout/Layout';
import Loader from "./preloader/Loader";



// const route = createBrowserRouter( createRoutesFromElements(
// <Route path="/" element={<Layout/>}>
//     <Route index element={<PageOne/>} />
//     <Route path="/online" element = {<PageVideoCouse/>}/>
//     <Route path="/services" element = {<PagePrice/>}/>
//     <Route path="/contacts" element = {<PageContacts/>}/>
// </Route>
// ))

const App = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[])

    return (
        <>
            {
                loading ?
                <Loader/>
                :
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<PageOne/>} />
                            <Route path="/online" element = {<PageVideoCouse/>}/>
                            <Route path="/services" element = {<PagePrice/>}/>
                            <Route path="/contacts" element = {<PageContacts/>}/>
                        </Route>
                    </Routes>
            }
        </>
    )

};
export default App;