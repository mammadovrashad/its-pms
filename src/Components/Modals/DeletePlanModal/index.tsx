import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@emotion/react';
import {  createTheme, Grid} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import './style.css';
import '../../../Common/Fonts/fonts.css';
import AbsoluteCloseButton from '../../Buttons/AbsoluteCloseButton';
import ContainedButton from '../../Buttons/ContainedButton';

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

 const DeletePlanModal:React.FC=()=> {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}> 
    
    <Button onClick={handleOpen}>Open modal</Button>
  <Modal
      open={open}
      >
       
          <Box className ='styledeleteplan'>
            <div className='div-delplan'><AbsoluteCloseButton action={handleClose} /></div>
        <Grid  container  justifyContent='center' alignItems='center' sx={{width:'100%',height:'100%'}} spacing={0}>
        <Grid item  >
        <p className='title3'>Fəaliyyət planını silmək istədiyinizə əminsiniz mi ?</p>
        </Grid>
        <Grid container justifyContent='center' spacing={2}>
        <Grid item ><ContainedButton text='Ləğv et' variantName='outlined' paddingSize='16px 32px 16px 32px' action={handleClose}/></Grid>
        <Grid item ><ContainedButton text='Sil' variantName='contained' paddingSize='16px 32px 16px 32px' /></Grid>
        </Grid>
       
    </Grid>
    </Box>
      
        
    </Modal>
  </ThemeProvider>
   
  );
}
export default DeletePlanModal