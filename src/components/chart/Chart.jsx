import "./chart.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Chart = () => {
  const rows = [
    {
        Location: "Hyderabad",
        Lattitude: " ",
        Langitude: " ",
        Is_Source: "Yes",

    },
    {
        Location: "Bangalore",
        Latitude: " ",
        longitude: " ",
        Is_Source: "No",

    },
    {
        Location: "Mumbai",
        Latitude: " ",
        longitude: " ",
        Is_Source: "NO",

    },
    {
        Location: "Goa",
        Latitude: " ",
        longitude: " ",
        Is_Source: "Yes",

    },
    {
        Location: "Kolkata",
        Latitude: " ",
        longitude: " ",
        Is_Source: "No",

    },
    {
      Location: "Surat",
      Latitude: " ",
      longitude: " ",
      Is_Source: "No",

  },
  {
    Location: "Pune",
    Latitude: " ",
    longitude: " ",
    Is_Source: "No",

},
 ];
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
    <Navbar/>
    <div>
    <h2>Plan Shipment</h2>
    <br/>
    <button type="submit" onClick={()=>console.log("clicked")}>Add</button>
      <br/>
      <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Location</TableCell>
          <TableCell className="tableCell">Latitude</TableCell>
          <TableCell className="tableCell">Logitude</TableCell>
          <TableCell className="tableCell">Is_Source</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow>
            <TableCell className="tableCell">{row.Location}</TableCell>
            <TableCell className="tableCell">{row.Latitude}</TableCell>
            <TableCell className="tableCell">{row.longitude}</TableCell>
            <TableCell className="tableCell">{row.Is_Source}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
      </div>

    </div>
  )
}

export default Chart
