import axios from "axios";
import { Icon, L } from "leaflet";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";

const Map = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const markers = [
    {
      geocode: [32.06812727294921, 34.763810682209794],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [32.068944247417505, 34.76781237229591],
      popUp: "Hello, I am pop up 2",
    },
    {
        geocode: [32.07877529327112, 34.768482112951034],
        popUp: "Hello, I am pop up 3",
      },
      {
        geocode: [32.07653700745182, 34.76829265360192],
        popUp: "Hello, I am pop up 4",
      },
      {
        geocode: [32.079104879527705, 34.77068134589956],
        popUp: "Hello, I am pop up 5",
      },
  ];

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

  return (
    <div>
      <div>

      </div>
      <MapContainer
        center={[32.07953127200945, 34.76931791534278]}
        zoom={18}
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
          <Marker position={marker.geocode} icon={customNewIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
