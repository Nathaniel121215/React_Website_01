import React from "react";
import '../../App.css';
import Cards from "../Cards";
import HeroSection from '../HeroSection';
import { ObjOne, ObjTwo } from "./Data";


function Home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            {/* <Cards {...ObjOne}/>
            <Cards {...ObjTwo}/>
             */}
        </>
        
    )
}

export default Home;