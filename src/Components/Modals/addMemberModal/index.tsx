import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { createTheme, Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import AddMemberTable from '../../Tables/addMemberTable'
import { ThemeProvider } from '@emotion/react';
import Combobox from '../../Inputs/Combobox';
import ComboCheckbox from '../../Inputs/ComboCheckbox'

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(",")
  },
  palette: {
    primary: {
      main:'#068FDB'
    }
 }})
 const emp = [
  { id: 1, label: 'Nərmin Ağayeva' },
  { id: 2, label: 'Nərmin Ağayeva' },
  { id: 3, label: 'Nərmin Ağayeva' },
  { id: 4, label: 'Nərmin Ağayeva' },
  { id: 5, label: 'Nərmin Ağayeva' },
  { id: 6, label: 'Nərmin Ağayeva' },
  { id: 7, label: 'Nərmin Ağayeva' },
  { id: 8, label: 'Nərmin Ağayeva' },
]

 const position = [
  { id: 1, label: 'Layihə rəhbəri' },
  { id: 2, label: 'Məhsul sahibi' },
  { id: 3, label: 'UI/UX dizayner' },
  { id: 4, label: 'IT analitik' },
  { id: 5, label: 'DB admin' },
  { id: 6, label: 'SQL developer' },
  { id: 7, label: 'Front-end developer' },
  { id: 8, label: 'Back-end developer' },
];
 const AddMemberModal:React.FC=()=> {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Open modal</Button>
  <Modal
      open={open}
      >
    <Box className='styleaddMember'>
        <Grid  container>
          <Grid item xs={12}> 
          <h1 className='title1'>Komanda üzvü əlavə et</h1>
          </Grid>
         <Grid container columnSpacing={2} >
          <Grid item xs={6}><Combobox labelName='Rol' placeholder ='Rol' position={position}/></Grid>
          {/* <Grid item xs={6}><ComboCheckbox  emp={emp}/></Grid> */}
         </Grid>
          <Grid item xs={12}>
            <AddMemberTable />
            </Grid>
            <Grid item xs={12}>
            <Button onClick={handleClose}>Ləğv et</Button>
            </Grid> 
         </Grid>
         </Box>
    </Modal> 
    </ThemeProvider>
      

     
  );
}
export default AddMemberModal