import "./App.css";

import Map from "./components/map/Map";
import PersistentDrawerLeft from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="map-container">
        <PersistentDrawerLeft/>
        <div><Map /></div>
      </div>
    </>
  );
}

export default App;
