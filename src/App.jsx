import React, { useState, useEffect } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ButtonAppBar from './components/navbar/Navbar';

function App() {
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    // Function to get the user's current location
    const getUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Update state with user's current coordinates
            setCoordinates({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported in this browser.');
      }
    };

    // Call getUserLocation to get the initial coordinates
    getUserLocation();

    // Call getUserLocation function at desired intervals
    const intervalId = setInterval(getUserLocation, 2000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <ButtonAppBar />
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={18} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Your existing Marker and Popup components */}
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
    </>
  );
}

export default App;
