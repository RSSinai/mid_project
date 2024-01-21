import axios from "axios";
import { Icon, L } from "leaflet";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

const Map = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    fetch('https://65ac10dffcd1c9dcffc78aea.mockapi.io/coordinates')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('what',data);
        setMarkers(data);
      });
  }, []);


  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      }
    );

    // Cleanup function to clear the watch when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);



  const customSelfIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 41],
  });
  const customNewIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/727/727606.png",
    iconSize: [40, 41],
  });


// RECENTER BUTTON : 





  return (
    <div>
      <div>

      </div>
      <MapContainer
        center={[32.07953127200945, 34.76931791534278]}
        zoom={18}
        doubleClickZoom={true}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[location.latitude, location.longitude]}
          icon={customSelfIcon}
        >
          <Popup>This is me! </Popup>
        </Marker>
        {/* Mapping through the markers */}
        {markers.map((marker) => (
  marker.geocode ? (
    <Marker position={marker.geocode} icon={customNewIcon}> 
      <Popup>{marker.popUp}</Popup>
    </Marker>
  ) : (
    // You can replace the following with your own loading or placeholder component
    <div>Loading...</div>
  )
))}
      </MapContainer>
    </div>
  );
};

export default Map;
