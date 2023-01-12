import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <form action="/" method="post">
        <div class="container">
        <h3>Plan Shipment</h3>
          <label for="region"><b>Region</b></label>
          <input type="text"  name="uname" required/><br/>
          <label for="source"><b>Source Reginal WH</b></label>
          <input type="text"  name="psw" required/>
          <label for="dest"><b>Destination WH</b></label>
          <input type="text"  name="psw" required/>
          <button type="submit">Create</button>
       </div>
      </form>
      </div>
    </div>
)
}

export default List
