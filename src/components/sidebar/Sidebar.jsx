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
            <Link to="/users" style={{textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            <span>Plan Shipment</span>
            </li>
            </Link>
            <Link to="/Chart" style={{textDecoration: "none"}}>
            <li>
              <StoreIcon className="icon" />
            <span>Locations</span>
            </li>
            </Link>
            <Link to="/Featured" style={{textDecoration: "none"}}>
            <li>
              <CreditCardIcon className="icon" />
            <span>Vehicales</span>
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
