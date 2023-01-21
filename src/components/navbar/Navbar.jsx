import "./navbar.scss"
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
// import FullScreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
// import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutLinedIcon from "@mui/icons-material/ListOutlined";
// import { useContext} from "react";
// import { DarkModeContext} from "../../context/darkModeContext";

const Navbar = () => {

  // const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div>
          {/* <input type="text" placeholder="Search...." />
          <SearchOutlinedIcon /> */}
        </div>
        <div className="items">
          <div className="item">
           <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
