import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@emotion/react';
import {  createTheme, Grid } from '@mui/material'
import './style.css'
import '../../Common/Fonts/fonts.css';
import AddMemberTable from '../Tables/addMemberTable'
const style = {
    position: 'absolute' as 'absolute',
    width: '35%',
    height:"65%",
    left:'0%',
    top:'0%',
    right:'0%',
    bottom:'0%',
    bgcolor: '#FFFFFF',
    borderRadius: '6px',
    boxShadow: '0px 2px 16px rgba(41, 45, 50, 0.12)',
    paddingTop:'32px',
    paddingLeft:"24px",
    paddingRight:'36px',
    paddingBottom:"24px",
    margin:'auto',
    overflow:'auto'
  };
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

 const AddMemberModal:React.FC=()=> {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}> 
    
    <Button sx={{fontSize:'100px'}} onClick={handleOpen}>Open modal</Button>
  <Modal
      open={open}
      onClose={handleClose}
      >
    <Box sx={style}>
        <Grid container>
          <Grid item xs={12}> <Typography  color ='primary.main'>Komanda üzvü əlavə et</Typography></Grid>
          <Grid item xs={12}>
            <AddMemberTable />
            </Grid>
         </Grid>
      </Box>   
    </Modal>
  </ThemeProvider>
   
  );
}
export default AddMemberModal