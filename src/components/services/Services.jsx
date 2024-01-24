import React from "react";
import CardComp from "../card/Card";
import "./Services.css";

const Services = () => {
  return (
    <>
      <h2 className="service-title">Services</h2>
      <div className="cards-line">
        <CardComp title={'Security Patrols'} image={'https://i.ibb.co/dW6XgPV/Screenshot-2024-01-24-at-6-34-11-PM.png'} info={'Optimize security routes with our SaaS map tool. Real-time tracking enhances coverage and efficiency, empowering robust security protocols.'}/>
        <CardComp title={'Foodie Tours'} image={'https://i.ibb.co/gPsPhBd/Screenshot-2024-01-24-at-6-35-49-PM.png'} info={'Craft immersive culinary journeys with our user-friendly map tool. Customize routes, highlight local gems, and share engaging content for unforgettable foodie experiences.'}/>
        <CardComp title={'Graffiti Tours'} image={'https://i.ibb.co/zr9P0Ln/Screenshot-2024-01-24-at-5-36-29-PM.png'} info={'Explore street art hotspots with our tailored map tool. Create curated routes showcasing vibrant murals and graffiti masterpieces, providing an interactive platform for urban art enthusiasts.'}/>
      </div>
      <div className="cards-line">
      <CardComp title={'Real Estate'} image={'https://i.ibb.co/nmgbcr1/Screenshot-2024-01-24-at-7-10-30-PM.png'} info={'Transform property exploration using our map tool designed for real estate. Create personalized tours, showcase property highlights, and provide potential buyers with an immersive and informative experience for successful real estate transactions.'}/>
        <CardComp title={'Shopping'} image={'https://i.ibb.co/WybqvSy/Screenshot-2024-01-24-at-7-11-02-PM.png'} info={'Streamline retail excursions with our SaaS map tool. Optimize shopping routes, discover local stores, and enhance the retail experience with real-time tracking and personalized recommendations.'}/>
        <CardComp title={'Managing Employee'} image={'https://i.ibb.co/y5fXZt0/Screenshot-2024-01-24-at-7-10-08-PM.png'} info={'Revolutionize workforce management with our intuitive map tool. Efficiently plan employee schedules, optimize routes for field teams, and utilize real-time tracking to enhance overall productivity.'}/>
      </div>
    </>
  );
};

export default Services;
