import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Walka.pro</h1>
        <h2>Walk A PRO - Best tours built by professionals</h2>
        <Link to="/login">
          <button class="button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
