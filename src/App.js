import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import "./style/dark.scss";
import { useContext} from "react";
import { DarkModeContext} from "./context/darkModeContext";
import Chart from "./components/chart/Chart";
import Featured from "./components/featured/Featured";
import GoogleMapsContainer from "./components/googleMaps/GoogleMapsContainer";

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
      <Route path="users" exact>
        <Route index element={<List/>}/>
         </Route>
      <Route path="Chart" element={<Chart/>}/>
      <Route path="Featured" element={<Featured/>}/>
    </Routes>
  </BrowserRouter>
    </div>

  );
}



export default App;
