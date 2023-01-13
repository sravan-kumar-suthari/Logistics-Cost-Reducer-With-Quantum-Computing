import "./featured.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Featured = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
    <Navbar/>
    <div> Vehical details</div>
      </div>
    </div>
  )
}

export default Featured
