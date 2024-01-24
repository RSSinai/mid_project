import React from "react";
import CardComp from "../card/Card";
import "./Services.css";

const Services = () => {
  return (
    <>
      <h2>Services</h2>
      <div className="cards-line">
        <CardComp className="cardMUI"/>
        <CardComp className="cardMUI"/>
        <CardComp className="cardMUI"/>
      </div>
    </>
  );
};

export default Services;
