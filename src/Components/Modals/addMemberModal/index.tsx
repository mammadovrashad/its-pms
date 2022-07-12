import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import AddMemberTable from '../../Tables/addMemberTable'

 

 const AddMemberModal:React.FC=()=> {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
      Open modal</Button>
  <Modal
      open={open}
      >
    <Box className='styleaddMember'>
        <Grid  container>
          <Grid item xs={12}> 
          <h1 className='title1'>Komanda üzvü əlavə et</h1>
          </Grid>
          <Grid item xs={12}>
            <AddMemberTable />
            <Button onClick={handleClose}>Ləğv et</Button>
            </Grid>
         </Grid>
         </Box>
    </Modal> 
    </React.Fragment>
     
  );
}
export default AddMemberModal