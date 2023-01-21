import "./listLocation.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListLocation = () => {
  const rows = [
    {
      location: "Hyderabad",
      lat: "17.3850° N",
      long: "78.4867° E",
      is_source: "Yes",
    },
    {
      location: "Hyderabad",
      lat: "17.3850° N",
      long: "78.4867° E",
      is_source: "Yes",
    },
    {
      location: "Hyderabad",
      lat: "17.3850° N",
      long: "78.4867° E",
      is_source: "Yes",
    },
    {
      location: "Hyderabad",
      lat: "17.3850° N",
      long: "78.4867° E",
      is_source: "Yes",
    },
    {
      location: "Hyderabad",
      lat: "17.3850° N",
      long: "78.4867° E",
      is_source: "Yes",
    },
  ];

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <br/>
          <div class="card">
          <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Location Name</TableCell>
                <TableCell className="tableCell">Latitude</TableCell>
                <TableCell className="tableCell">Longitude</TableCell>
                <TableCell className="tableCell">Is Source</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell className="tableCell">{row.location}</TableCell>
                  <TableCell className="tableCell">{row.lat}</TableCell>
                  <TableCell className="tableCell">{row.long}</TableCell>
                  <TableCell className="tableCell">{row.is_source}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
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

export default ListLocation;
