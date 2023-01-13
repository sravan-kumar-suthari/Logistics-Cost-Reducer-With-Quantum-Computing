import 'bootstrap/dist/css/bootstrap.min.css';
import "./chart.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import React from 'react';
import GoogleMapsContainer from "../googleMaps/GoogleMapsContainer";

const Chart = () => {
  const handleClick = () => {
    alert('Add Details');
};
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
    <Navbar/>
    <br/>
    <div class="card">
        <div class="card-body">
          <h3 class="card-title">Locations</h3>
              <form>
                <button type="button" class="btn btn-primary" onClick={handleClick}>Add</button>
              </form> 
       </div>
    </div>
    <br/>
    <div class="card">
          <GoogleMapsContainer/>
    </div>
    </div>
   </div>
  )
}

export default Chart;
