import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { createTheme, Fab, Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import AddMemberTable from '../../Tables/addMemberTable'
import { ThemeProvider } from '@emotion/react';
import Combobox from '../../Inputs/Combobox';
import ComboCheckbox from '../../Inputs/ComboCheckbox'
import AddIcon from '@mui/icons-material/Add';
import { emp, position } from '../../../Pages/firstWindows';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(",")
  },
  palette: {
    primary: {
      main: '#068FDB'
    }
  }
})

const AddMemberModal: React.FC = () => {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Komanda yarat</Button>
      <Modal
        className='modal'
        open={open}
      >
        <Box className='styleaddMember'>
          <Grid container alignItems='center' sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={12}>
              <h1 className='title1'>Komanda üzvü əlavə et</h1>
            </Grid>
            <Grid container columnSpacing={2} >
              <Grid item xs={5}><Combobox labelName='Rol' placeholder='Front-End' position={position} /></Grid>
              <Grid item xs={5}><ComboCheckbox emp={emp} /></Grid>
              <Grid item xs={2} sx={{display:'flex', justifyContent:'end'}}>
                <Fab  color='success' size="medium" aria-label="add">
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AddMemberTable />
            </Grid>
            <Grid container justifyContent='flex-end'>
            <Grid item >
              <Button>Yadda saxla</Button>
            </Grid>
            <Grid item >
        <Button onClick={handleClose}>Ləğv et</Button></Grid>
            </Grid> 
         </Grid>
         </Box>
    </Modal> 
    </ThemeProvider>



  );
}
export default AddMemberModal