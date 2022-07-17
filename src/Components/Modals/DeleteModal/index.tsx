import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
import './style.css'
import AbsoluteCloseButton from '../../Buttons/AbsoluteCloseButton';
import ContainedButton from '../../Buttons/ContainedButton';
import BasicModal from '..';
 
type Message={
  message:string;
}

function DeleteModal({message}: Message) {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <React.Fragment>
      <Button onClick={handleOpen}>Sil</Button>

      <BasicModal open={open}>
        <Box className='stylemember'>
          <div className='div-delmember'><AbsoluteCloseButton action={handleClose} /></div>
          <Grid container justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%' }} spacing={0}>
            <Grid item>
              <p className='title3'>{message}</p>
            </Grid>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item><ContainedButton text='Sil' variantName='contained' paddingSize='16px 32px 16px 32px' maxWidth='120px' /></Grid>
            </Grid>
          </Grid>
        </Box>
      </BasicModal>
    </React.Fragment>
  );
}
export default DeleteModal