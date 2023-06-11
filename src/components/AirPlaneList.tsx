import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserForm from "./userForm";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    name: "delhi to kolkata",
    time: "9: 30",
    number: "12345",
    startPoint: "delhi",
    endPoint: "kolkata",
    date: "10/02/2023",
  },
  {
    name: "delhi to Mumbai",
    time: "10: 40",
    number: "11123",
    startPoint: "delhi",
    endPoint: "Mumbai",
    date: "17/02/2023",
  },
  {
    name: "delhi to UK",
    time: "3: 30",
    number: "123415",
    startPoint: "delhi",
    endPoint: "UK",
    date: "11/02/2023",
  },
  {
    name: "delhi to chennia",
    time: "10: 30",
    number: "122345",
    startPoint: "delhi",
    endPoint: "chennia",
    date: "14/02/2023",
  },
];

export default function AirPlaneList() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 5,
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Plan name</TableCell>
            <TableCell align="right">Plan time</TableCell>
            <TableCell align="right">Plan number</TableCell>
            <TableCell align="right">Plan start point</TableCell>
            <TableCell align="right">Plan end point</TableCell>
            <TableCell align="right">Plan date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.startPoint}</TableCell>
              <TableCell align="right">{row.endPoint}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <UserForm />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
