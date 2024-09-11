import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

import "./Map.css";
import Routing from "../routing/Routing";

const MapComp = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  useEffect(() => {
    fetch("https://65ac10dffcd1c9dcffc78aea.mockapi.io/coordinates")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("what", data);
        setMarkers(data);
      });
  }, []);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setCenter({ lat: latitude, lng: longitude });
    });

    // Cleanup function to clear the watch when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const customSelfIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
  });
  const customNewIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/727/727606.png",
    iconSize: [40, 41],
  });

  function sendCoordinateNavigation(coordinates) {
    // Update the selectedCoordinates state
    setSelectedCoordinates(coordinates);
    console.log(selectedCoordinates);
  }

  return center ? (
    <div>
      <div></div>
      <MapContainer
        center={center}
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
          <Popup>This is me!</Popup>
        </Marker>
        {/* Mapping through the markers */}
        {markers.map((marker, index) =>
          marker.geocode ? (
            <Marker position={marker.geocode} icon={customNewIcon} key={index}>
              <Popup>
                <div>
                  <h1>{marker.popUp}</h1>
                </div>
                {marker.image}
                <img src={marker.imageURL} alt="Marker Image" />
                <button
                  onClick={() => sendCoordinateNavigation(marker.geocode)}
                >
                  Navigate
                </button>
              </Popup>
            </Marker>
          ) : (
            // You can replace the following with your own loading or placeholder component
            <div key={index}>Loading...</div>
          )
        )}
        <div className="routing-machine">
          <Routing center={center} selectedCoordinates={selectedCoordinates} />
        </div>
      </MapContainer>
    </div>
  ) : null;
};

export default MapComp;
