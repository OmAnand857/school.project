import React from "react";
import Header from "./Header";
import {Routes,Route} from "react-router-dom";
import Carousel from "./Carousel";
import About from "./About";
import DirectorMessage from "./DirectorMessage";
import Facilities from './Facilities';
import Events from "./Events";
import Footer from "./Footer";
import Academics from "./Academics";
import Health from "./Health";
import Testimonials from "./Testimonials";
function App(){
    return (    
        <Routes>

                 <Route path="/" element={<>  <Header/><Carousel/><About/><DirectorMessage/><Facilities/><Events/><Footer/></>}></Route>
                   <Route path="/About" element={<><Header/><About/><Footer/></>}></Route> 
                   <Route path ="/Academics" element={<><Header/><Academics/><Footer/></>} ></Route>         
                    <Route path="/Health" element={<><Header/><Health/><Footer/></>}></Route>
                    <Route path="/Testimonials" element={<><Header/><Testimonials/><Footer/></>}></Route>                
                </Routes>
    );
};
export default App;