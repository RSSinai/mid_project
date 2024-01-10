import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [currLocationJs, setCurrLocationJs] = useState({
    latitude: 32.07953127200945,
    longitude: 34.76931791534278,
  });

  useEffect(() => {
    const getLocationJs = () => {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrLocationJs({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    };

    getLocationJs();
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  return (
    <>
      <MapContainer center={[32.07953127200945, 34.76931791534278]} zoom={18}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[32.06812727294921, 34.763810682209794]}>
          <Popup>Location 1: Graffiti Art</Popup>
        </Marker>
        <Marker position={[32.068944247417505, 34.76781237229591]}>
          <Popup>Location 2: Graffiti Art</Popup>
        </Marker>
        <Marker position={[32.08605130872843, 34.768870639542655]}>
          <Popup>Location 3: Graffiti Art</Popup>
        </Marker>
      </MapContainer>
      <div>
        <h1>Current Location JS</h1>
        <p>Latitude: {currLocationJs.latitude}</p>
        <p>Longitude: {currLocationJs.longitude}</p>
      </div>
    </>
  );
}

export default App;
