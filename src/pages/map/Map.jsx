import React from "react";
import MapComp from "../../components/map/MapComp";
import PersistentDrawerLeft from "../../components/sidebar/Sidebar";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <div >
        <PersistentDrawerLeft />
        <MapComp />
      </div>
    </div>
  );
};

export default Map;
