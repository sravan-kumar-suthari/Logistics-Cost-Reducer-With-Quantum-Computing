import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {Link} from "react-router-dom";

const Sidebar = () => {

  // const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>
     <span className="logo">Accenture</span>
     </Link>
    </div>
    <hr />
    <div className="center">
        <ul>
           <p className="title"></p>
           <Link to="/" style={{textDecoration: "none"}}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </li>
            </Link>
            <Link to="/Shipment" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Plan Shipment</span>
            </li>
            </Link>
            <p className="title">Locations</p>
            <Link to="/Location" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Add Location</span>
            </li>
            </Link>
            <Link to="/ListLocation" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Location Master List</span>
            </li>
            <p className="title">Vehicle</p>
            </Link>
            <Link to="/Vehicle" style={{textDecoration: "none"}}>
            <li>
              <CreditCardIcon className="icon" />
            <span>Vehicles</span>
            </li>
            </Link>
        </ul>

    </div>
    {/* <div className="bottom">
        <div className="colorOption"
        onClick={() => dispatch({ type : "LIGHT"})}>
        </div>

          <div className="colorOption"
        onClick={() => dispatch({ type : "DARK"})}>
        </div>

    </div> */}
    </div>
  )
}

export default Sidebar
