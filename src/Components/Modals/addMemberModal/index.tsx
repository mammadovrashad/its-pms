import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { createTheme,Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import AddMemberTable from '../../Tables/addMemberTable'
import { ThemeProvider } from '@emotion/react';
import Combobox from '../../Inputs/Combobox';
import ComboCheckbox from '../../Inputs/ComboCheckbox'
import AddIcon from '@mui/icons-material/Add';
import { emp, position } from '../../../Pages/firstWindows';
import ActionButton from '../../Buttons/ActionButton';
import ContainedButton from '../../Buttons/ContainedButton';
import AbsoluteCloseButton from '../../Buttons/AbsoluteCloseButton';
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
        <div className='div-addmember'><AbsoluteCloseButton action={handleClose} /></div>
          <Grid container alignItems='center' sx={{ width: '100%', height: '100%' }}>
            <Grid item xs={12}>
              <h1 className='title1'>Komanda üzvü əlavə et</h1>
            </Grid>
            <Grid container columnSpacing={3} justifyContent='space-between' >
              <Grid item xs={5}><Combobox labelName='Rol' placeholder='Front-End' position={position} /></Grid>
              <Grid item xs={5}><ComboCheckbox emp={emp} /></Grid>
              <Grid item xs={2} >
                <ActionButton />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AddMemberTable />
            </Grid>
            <Grid container columnSpacing={2} justifyContent='flex-end'>
            <Grid item >
             <ContainedButton text='Ləğv et' variantName='outlined' paddingSize='16px 32px 16px 32px' action={handleClose}/>
            </Grid>
            <Grid item >
        <ContainedButton text='Yadda saxla' variantName='contained' paddingSize='16px 32px 16px 32px'/>
            </Grid> 
         </Grid>
         </Grid>
         </Box>
    </Modal> 
    </ThemeProvider>



  );
}
export default AddMemberModal