import React from "react";
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
    <div className='hero-container' id="hero">
        <div className='video-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted></video> 
        </div>
           
        <div className="main-header">ADVENTURE AWAITS</div>
        <div className="sub-header">What are you waiting for?</div>
        <div className="button-container">
            <button className="btns">GET STARTED</button>
            <button className="btns btns--outline">WATCH TRAILER</button>
        </div>
    </div>
    );
  }
  
  export default HeroSection;