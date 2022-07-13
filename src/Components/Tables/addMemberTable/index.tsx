import './style.css';
import '../../../Common/Fonts/fonts.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React, { useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:'#F4FAFF',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const AddMemberTable: React.FC = () => {
  const [memberData, setMemberData] = useState<any[]>([
    {
      id: 1,
      profession: 'Front end developer',
      employe: 'Nərmin Ağayeva',
    },
    {
      id: 2,
      profession: 'Front end developer',
      employe: 'Nərmin Ağayeva',
    },

  ]);


  return (
      <div className="container">
        <TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow >
              <StyledTableCell>Rol</StyledTableCell>
              <StyledTableCell>Əmakdaş</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memberData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>
                  {row.profession}
                </StyledTableCell>
                <StyledTableCell>
                  <Box>
                    {row.employe}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25195 4.50195H3.75195H15.752" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.2539 4.5V15C14.2539 15.3978 14.0959 15.7794 13.8146 16.0607C13.5333 16.342 13.1517 16.5 12.7539 16.5H5.25391C4.85608 16.5 4.47455 16.342 4.19325 16.0607C3.91194 15.7794 3.75391 15.3978 3.75391 15V4.5M6.00391 4.5V3C6.00391 2.60218 6.16194 2.22064 6.44325 1.93934C6.72455 1.65804 7.10608 1.5 7.50391 1.5H10.5039C10.9017 1.5 11.2833 1.65804 11.5646 1.93934C11.8459 2.22064 12.0039 2.60218 12.0039 3V4.5" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.5 8.24805V12.748" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5 8.24805V12.748" stroke="#FF0055" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      );
}
      export default AddMemberTable;