import "./App.css";

import "leaflet/dist/leaflet.css";

import Map from "./components/map/Map";
import ClippedDrawer from "./components/sidebar/Sidebar";
import { WidthFull } from "@mui/icons-material";

function App() {
  return (
    <>
      <div className="map-container">
        <ClippedDrawer />
        <div><Map /></div>
      </div>
    </>
  );
}

export default App;
