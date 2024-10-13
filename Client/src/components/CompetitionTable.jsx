import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function CompetitionTable({data}) {
    console.log(data);  
  return (
    data &&
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: "rgb(31,41,55)", color: "white", height: "100vh" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: "white"}}>Team Name</TableCell>
            <TableCell sx={{color: "white"}} align="right">Team Lead Name</TableCell>
            <TableCell sx={{color: "white"}} align="right">Team Lead Email</TableCell>
            <TableCell sx={{color: "white"}} align="right">Team Lead Number</TableCell>
            <TableCell sx={{color: "white"}} align="right">Education Institution</TableCell>
            <TableCell sx={{color: "white"}} align="right">Competition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "white" }}
            >
              <TableCell sx={{color: "white"}} component="th" scope="row">
                {row.teamName}
              </TableCell>
              <TableCell sx={{color: "white"}} align="right">{row.teamLeadName}</TableCell>
              <TableCell sx={{color: "white"}} align="right">{row.teamLeadEmail}</TableCell>
              <TableCell sx={{color: "white"}} align="right">{row.teamLeadNumber}</TableCell>
              <TableCell sx={{color: "white"}} align="right">{row.educationalInstitute}</TableCell>
              <TableCell sx={{color: "white"}} align="right">{row.competition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};  