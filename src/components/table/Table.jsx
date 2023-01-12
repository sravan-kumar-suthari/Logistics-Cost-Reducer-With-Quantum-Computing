import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Made by Moses Mwila 
// for Zykar Solutions Limited

const List = () => {

 const rows = [
    {
        customer: "Arlyn Mwila",
        
    },
    {
        customer: "Jamal Banda",
        
    },
    {
        customer: "Monse Tembo",
        
    },
    {
        customer: "Arlyn Mwila",
        
    },
    {
        customer: "Oscar Bwalya",
        
    },
 ];


  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">logs</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow>
            <TableCell className="tableCell">{row.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List
