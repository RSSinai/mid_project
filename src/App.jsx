import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ButtonAppBar from "./components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // You can send the location data to your server or perform any other actions here.
        // Example: Sending data to a server using Axios
        axios
          .post("https://65a06c86600f49256faff5ec.mockapi.io/coordinates", { latitude, longitude })
          .then((response) => {
            console.log("Location data sent successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error sending location data:", error);
          });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );

    // Cleanup function to clear the watch when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Real-Time GPS Tracking</h1>
        {location && (
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        )}
      </div>
      {/* <ButtonAppBar />
      <MapContainer
        center={[32.07953127200945, 34.76931791534278]}
        zoom={18}
        scrollWheelZoom
      >
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
      </MapContainer> */}
    </>
  );
}

export default App;
