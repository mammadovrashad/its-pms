import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@emotion/react';
import {  createTheme, Grid } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import './style.css'
import '../../../Common/Fonts/fonts.css';

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

 const DeleteMemberModal:React.FC=()=> {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}> 
    
    <Button onClick={handleOpen}>Open modal</Button>
  <Modal
      open={open}
      >
     
        <Box className='stylemember' >
          <div className='div-delmember'><ClearIcon /></div>
    <Grid  container  justifyContent='center' alignItems='center' sx={{width:'100%',height:'100%'}} spacing={0}>
        <Grid item  >
        <p className='title3'>Komanda üzvünü silmək istədiyinizə əminsiniz mi ?</p>
        </Grid>
        <Grid container justifyContent='center'>
        <Grid item  ><Button onClick ={handleClose}>Ləğv et</Button></Grid>
        <Grid item  ><Button>Sil</Button></Grid>
        </Grid>
    </Grid>
      </Box> 
      
    </Modal>
  </ThemeProvider>
   
  );
}
export default DeleteMemberModal