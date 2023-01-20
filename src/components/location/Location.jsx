import 'bootstrap/dist/css/bootstrap.min.css';
import "./location.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import React from 'react';
import GoogleMapsContainer from "../googleMaps/GoogleMapsContainer";

const Location = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar/>
      <br/>
          <GoogleMapsContainer/>
      </div>
   </div>
  )
}

export default Location;
