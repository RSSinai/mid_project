import "./App.css";
import {  Route, Routes } from 'react-router-dom';
import Map from "./pages/map/Map";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      
    </>
  );
}

export default App;

