import React from 'react';
import './HeroSection.css';
import Train from '../assets/images/Train.png' 

function HeroSection() {
  return (
    <div className="hero">
      <img src={Train} alt="Train" className="hero-image" />
      <div className="hero-text">
        <h1>เชื่อมต่อรถไฟฟ้าโดยสารสาธารณะด้วยพลังงานไฟฟ้า</h1>
      </div>
    </div>
  );
}

export default HeroSection;
