import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ButtonAppBar from "./components/navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "leaflet";

function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [userLatitude, setUserLatitude] = useState("");
  const [userLongitude, setUserLongitude] = useState("");

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // You can send the location data to your server or perform any other actions here.
        // Example: Sending data to a server using Axios
        axios
          .post("https://65a06c86600f49256faff5ec.mockapi.io/coordinates", {
            latitude,
            longitude,
          })
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

  const handleUserCoordinates = () => {
    // Validate user input (you may add more validation as needed)
    if (userLatitude.trim() === "" || userLongitude.trim() === "") {
      alert("Please enter valid coordinates.");
      return;
    }
  };

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 41],
  });

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
      <div>
        <label>
          Enter Latitude:
          <input
            type="text"
            value={userLatitude}
            onChange={(e) => setUserLatitude(e.target.value)}
          />
        </label>
        <label>
          Enter Longitude:
          <input
            type="text"
            value={userLongitude}
            onChange={(e) => setUserLongitude(e.target.value)}
          />
        </label>
        <button onClick={handleUserCoordinates}>Update Map</button>
      </div>
      <ButtonAppBar />
      <MapContainer
        center={[location.latitude, location.longitude]}
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
        <Marker
          position={[location.latitude, location.longitude]}
          icon={customIcon}
        >
          <Popup>This is me! </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
