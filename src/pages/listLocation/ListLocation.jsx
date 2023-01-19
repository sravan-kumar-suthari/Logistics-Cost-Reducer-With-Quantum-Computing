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
      id: 11443155,
      product: "Accer Nitro 5",
      customer: "Arlyn Mwila",
      date: "1 March",
      amount: 987,
      method: "Cash On Delivery",
      status: "Approved",
  },
  {
      id: 2235235,
      product: "Playstation 5",
      customer: "Jamal Banda",
      date: "1 April",
      amount: 2057,
      method: "Mobile Money",
      status: "Pending",
  },
  {
      id: 11443155,
      product: "Denim Jeans 5",
      customer: "Monse Tembo",
      date: "1 May",
      amount: 687,
      method: "Cash On Delivery",
      status: "Approved",
  },
  {
      id: 2235235,
      product: "Apple Iphone 14",
      customer: "Arlyn Mwila",
      date: "1 June",
      amount: 1757,
      method: "Online Payment",
      status: "Approved",
  },
  {
      id: 2235235,
      product: "Apple Iphone 14 Pro",
      customer: "Oscar Bwalya",
      date: "1 June",
      amount: 7757,
      method: "Online Payment",
      status: "Approved",
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
                <TableCell className="tableCell">Tracking ID</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell className="tableCell" align="right">{row.id}</TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  <TableCell className="tableCell">{row.method}</TableCell>
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
