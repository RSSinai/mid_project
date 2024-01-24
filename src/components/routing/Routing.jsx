import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});


function getByTransport(transport,control) {
    var path = "";
    switch (transport) {
    case 'car':
    path = "https://routing.openstreetmap.de/routed-car/route/v1";
    break;
    case 'bike':
    path = "https://routing.openstreetmap.de/routed-bike/route/v1";
    break;
    case 'foot':
    path = "https://routing.openstreetmap.de/routed-foot/route/v1";
    break;
    default:
    break;
    }
    control._router.options.serviceUrl = path;
    }


const Routing = ({ center, selectedCoordinates }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !selectedCoordinates || selectedCoordinates.length < 2) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(center.lat, center.lng),
        L.latLng(selectedCoordinates[0], selectedCoordinates[1]),
      ],
      routeWhileDragging: true,
      addWaypoints: false,
      draggableWaypoints: false,
      router: new L.Routing.OSRMv1({
        serviceUrl: 'https://routing.openstreetmap.de/routed-foot/route/v1',
      }),
      profile: 'foot-walking',  // Specify walking profile
      profileOptions: {
        walking_speed: 1.5,  // Adjust walking speed if needed
        use_roads: false,    // Avoid using roads for walking
      },
      reverseWaypoints: true,
      fitSelectedRoutes: true,
      createMarker: function () {
        return null;
      },
      showAlternatives: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, center, selectedCoordinates]);

  return null;
};

export default Routing;
