import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import DisableInput from '../../Inputs/DisableInput';
import DateInput from '../../Inputs/DateInput';
import Combobox from '../../Inputs/Combobox';
import ComboCheckbox from '../../Inputs/ComboCheckbox'
import MultilineInput from '../../Inputs/MultilineInput';
import SelectInput from '../../Inputs/SelectInput';
import Textarea from '../../Inputs/Textarea';
import ClearIcon from '@mui/icons-material/Clear';
import AbsoluteCloseButton from '../../Buttons/AbsoluteCloseButton';
import ContainedButton from '../../Buttons/ContainedButton';
import DeleteEditButton from '../../Buttons/DeleteEditButton';

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
const stage = [
  { id: 1, label: 'Analiz' },
  { id: 2, label: 'Dizayn' },
  { id: 3, label: 'Development' },
  { id: 4, label: 'Test' },
  { id: 5, label: 'Demo' },
  { id: 6, label: 'Tətbiq' },

]
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
type IBtn = {
  edit:Boolean;
}
function AddPlanModal({ edit}: IBtn) {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>

      <Button onClick={handleOpen}>Plan yarat</Button>
      <Modal
        open={open} >
          <Box className='styleplan'>
          {!edit && <div className='div-addplan'><AbsoluteCloseButton action={handleClose} /></div>}
          
        <Grid container alignItems='center' sx={{ width: '100%', height: '100%' }}>
              <Grid container justifyContent='space-between' columnSpacing={2}>
                <Grid item xs={2.4}><DisableInput labelName='Task nömrəsi' defaultValue='1.2' /></Grid>
                <Grid item xs={2.4}><Combobox labelName='Mərhələ' placeholder='Mərhələ' position={stage} /></Grid>
                <Grid item xs={2.4}><ComboCheckbox emp={emp} /></Grid>
                <Grid item xs={2.4}><DateInput labelName='Başlama tarixi' /></Grid>
                <Grid item xs={2.4}><DateInput labelName='Bitmə tarixi' /></Grid>
              </Grid>
              <Grid container justifyContent='space-between' columnSpacing={2}>
                <Grid item xs={3}><MultilineInput labelName='İcra müddəti' charCount='200' readOnly={false} /></Grid>
                <Grid item xs={3}><MultilineInput labelName='İcra göstəricisi' charCount='200' readOnly={false} /></Grid>
                <Grid item xs={3}><DateInput labelName='Son icra tarixi' /></Grid>
                <Grid item xs={3}><SelectInput /></Grid>
              </Grid>
              <Grid container justifyContent='space-between' columnSpacing={2}>
                <Grid item xs={6}><Textarea labelName='Tapşırığın adı' maxCharCount='2000'></Textarea></Grid>
                <Grid item xs={6}><Textarea labelName='Tapşırıq üzrə qeydlər' maxCharCount='4000'></Textarea></Grid>
              </Grid>
              <Grid container justifyContent='space-between'>
                <Grid item >
                 {edit && <DeleteEditButton  action={handleClose}/>}
                </Grid>
                <Grid item >
              
                    <ContainedButton  text='Yadda Saxla' variantName='contained' paddingSize='16px 32px 16px 32px' maxWidth='165px'/>
                 

                </Grid>

              </Grid>
              {/* <Grid container justifyContent='flex-end'>
    <Grid item>
      <Button onClick={handleClose}>Ləğv et</Button>
    </Grid>
    <Grid item>
      <Button onClick={handleClose}>Yadda Saxla</Button>
    </Grid>
    <Grid item>
      <Button>{btn}</Button>
    </Grid>
  </Grid> */}
            </Grid>


          </Box>
        {/* </div> */}
      </Modal>
    </ThemeProvider>
  );
}
export default AddPlanModal