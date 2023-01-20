import Home from "./pages/home/Home";
import Shipment from "./pages/shipment/Shipment";
import ListLocation from "./pages/listLocation/ListLocation";
import "./style/dark.scss";
import { useContext} from "react";
import { DarkModeContext} from "./context/darkModeContext";
import Location from "./components/location/Location";
import Vehicle from "./components/vehicle/Vehicle";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Shipment" element={<Shipment/>}/>
      <Route path="Location" element={<Location/>}/>
      <Route path="ListLocation" element={<ListLocation/>}/>
      <Route path="Vehicle" element={<Vehicle/>}/>
    </Routes>
  </BrowserRouter>
    </div>

  );
}



export default App;
