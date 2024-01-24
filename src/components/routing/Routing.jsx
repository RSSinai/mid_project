import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

const Routing = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(32.09037125669832, 34.77248358694854), L.latLng(32.05927694970633, 34.796552300138956)],
      routeWhileDragging: true,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);
  return null;
};

export default Routing;
