import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import {  createTheme, Grid} from '@mui/material';
import './style.css';
import '../../../Common/Fonts/fonts.css';
import AbsoluteCloseButton from '../../Buttons/AbsoluteCloseButton';
import ContainedButton from '../../Buttons/ContainedButton';
import BasicModal from '..';
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
    
    <Button onClick={handleOpen}>Sil</Button>
 <BasicModal open={open}>
 <Box className ='styledeleteplan'>
            <div className='div-delplan'><AbsoluteCloseButton action={handleClose} /></div>
        <Grid  container  justifyContent='center' alignItems='center' sx={{width:'100%',height:'100%'}} spacing={0}>
        <Grid item  >
        <p className='title3'>Fəaliyyət planını silmək istədiyinizə əminsiniz mi ?</p>
        </Grid>
        <Grid container justifyContent='center' spacing={2}>
        <Grid item ><ContainedButton text='Sil' variantName='contained' paddingSize='16px 32px 16px 32px' maxWidth='120px' /></Grid>
        </Grid>
       
    </Grid>
    </Box>
      
        
 </BasicModal>
       
  </ThemeProvider>
   
  );
}
export default DeletePlanModal