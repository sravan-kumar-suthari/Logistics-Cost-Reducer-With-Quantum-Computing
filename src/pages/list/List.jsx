import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <br/>
        <div class="card">
        <div class="card-body">
          <h3 class="card-title">Plan Shipment</h3>
              <form>
                <div class="row col-4">
                <label type="text" value="text">Region</label>
                  <input type="text" class="form-control" id="Region" name="Region"/>
                </div>
                <div class="inline-group row">
                <div class="col col-4">
                    <label type="text" value="text">Source Regional WH</label>
                    <input type="text" class="form-control" id="source" name="source"/>
                  </div>
                  <div class="col col-4">
                  <label type="text" value="text">Destination WH</label>
                    <input type="text" class="form-control" id="desti" name="desti"/>
                  </div>
                </div>
                <br/>
                <button type="button" class="btn btn-primary">Create</button>
              </form> 
        </div>
      </div>
    </div>
  </div> 
)
}

export default List
