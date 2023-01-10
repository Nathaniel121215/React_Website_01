import React from "react";
import '../../App.css';
import Cards from "../Cards";
import HeroSection from '../HeroSection';
import { ObjOne, ObjTwo } from "./Data";


function Test () {
    return (
        <>
            <Cards/>
            {/* <Cards {...ObjOne}/>
            <Cards {...ObjTwo}/>
             */}
        </>
        
    )
}

export default Test;