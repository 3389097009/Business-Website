import React from "react";
import Home from "./Container/Home/Home";
import About from "./Components/Common/About";
import Contact from "./Components/Common/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
function App() {
    return (<div>
        <Navbar></Navbar>

        <Routes>
            <Route path="/" element={<Home />} > </Route>
            <Route exact path="/about" element={<About />}> </Route>
            <Route path="/contact" element={<Contact />} > </Route>
        </Routes>
        <Footer></Footer>
    </div>


    )
}

export default App;
