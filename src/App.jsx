
import './App.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// markers
const markers = [
  {
    geocode: [32.06812727294921, 34.763810682209794],
    popUp: "Hello, I am pop up 1"
  }
];

function App() {

  return (
    <>
      <MapContainer center={[32.07953127200945,34.76931791534278]} zoom={18}>
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
    </>
  )
}

export default App
