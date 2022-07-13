import './style.css';
import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#F4FAFF'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

   
const ProjectDetailsTable: React.FC = () => {

    const [projectThead, setProjectThead] = useState<any[]>([
        {
          id: 1,
          atribute:'T No'
        },
        {
          id: 2,
          atribute:'Tapşırığın adı'
        },
        {
            id: 3,
            atribute:'İcraçı'
        },
        {
            id: 4,
            atribute:'İcra Müddəti'
        },
        {
            id: 5,
            atribute:'Son İcra Tarixi'
        },
        {
            id: 6,
            atribute:'Başlama Tarixi'
        },
        {
            id: 7,
            atribute:'Bitmə Tarixi'
        },
        {
            id: 8,
            atribute:'İcra faizi'
        },
        {
            id: 9,
            atribute:'Status'
        },
        {
            id: 10,
            atribute:'Tapşırığın qeydləri'
        },
    ]);
    const[projectTBody,setProjectTBody]=useState<any[]>([
        {
            id:1,
            No:'9.8.9',
            taskName:'FrontEnd hissənin əsas ekra...',
            Executor:'Rəşad Məmmədov',
            executorTime:'10 gün',
            lastDateOfExecution:'12.05.2022',
            startDate:'29.12.2022',
            endDate:'12.05.2022',
            executorPerformance:'100%',
            Status:'Davam edir',
            taskNotes:'Task vaxtında edildi...'
        },
        {
            id:2,
            No:'2.5.2',
            taskName:'Backend hissənin əsas ekra...',
            Executor:'Rəşad Məmmədov',
            executorTime:'20 gün',
            lastDateOfExecution:'12.05.2022',
            startDate:'12.05.2022',
            endDate:'12.05.2022',
            executorPerformance:'50%',
            Status:'Başlamayıb',
            taskNotes:'Əlavə düzəlişlər olmalıdır...'
        },
        
    ]);

    return (
        <div className="project-details">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {
                                projectThead.map((a:any)=>{
                                  return(
                                    <StyledTableCell  key={a.id}>{a.atribute}</StyledTableCell>
                                  )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        projectTBody.map((row:any) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell >{row.No}</StyledTableCell>
                                <StyledTableCell >{row.taskName}</StyledTableCell>
                                <StyledTableCell>{row.Executor}</StyledTableCell>
                                <StyledTableCell>{row.executorTime}</StyledTableCell>
                                <StyledTableCell>{row.lastDateOfExecution}</StyledTableCell>
                                <StyledTableCell>{row.startDate}</StyledTableCell>
                                <StyledTableCell>{row.endDate}</StyledTableCell>
                                <StyledTableCell>{row.executorPerformance}</StyledTableCell>
                                <StyledTableCell>{row.Status}</StyledTableCell>
                                <StyledTableCell>{row.taskNotes}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ProjectDetailsTable;