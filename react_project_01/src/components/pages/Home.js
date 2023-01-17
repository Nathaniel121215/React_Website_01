import React from "react";
import '../../App.css';
import Cards from "../Cards";
import HeroSection from '../HeroSection';
import { ObjOne, ObjTwo } from "./Data";
import Footer from "../Footer";


function Home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            {/* <Cards {...ObjOne}/>
            <Cards {...ObjTwo}/>
             */}
            <Footer/>
        </>
        
    )
}

export default Home;