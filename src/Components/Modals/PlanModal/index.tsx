import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import DisableInput from '../../Inputs/DisableInput';
import DateInput from '../../Inputs/DateInput';
import Combobox from '../../Inputs/Combobox';
import ComboCheckbox from '../../Inputs/ComboCheckbox'
import MultilineInput from '../../Inputs/MultilineInput';
import SelectInput from '../../Inputs/SelectInput';
import Textarea from '../../Inputs/Textarea';
import AbsoluteCloseButton from '../../Buttons/AbsoluteCloseButton';
import ContainedButton from '../../Buttons/ContainedButton';
import DeleteEditButton from '../../Buttons/DeleteEditButton';
import BasicModal from '..';
import {emp, stage} from '../../../Pages/firstWindows/index'

type IBtn = {
  edit: Boolean;
}
function PlanModal({ edit }: IBtn) {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  
<React.Fragment>
<Button onClick={handleOpen}>Plan yarat</Button>
  <BasicModal open={open}>
  <Box className='styleplan'>
          {!edit && <div className='div-addplan'><AbsoluteCloseButton action={handleClose} /></div>}
          <Grid container alignItems='center' sx={{ width: '100%', height: '100%' }}>
            <Grid container justifyContent='space-between' columnSpacing={2}>
              <Grid item xs={2.4}><DisableInput labelName='Task nömrəsi' defaultValue='1.2' /></Grid>
              <Grid item xs={2.4}><Combobox labelName='Mərhələ' placeholder='Mərhələ' position={stage} /></Grid>
              <Grid item xs={2.4}><ComboCheckbox labelName="İcraçı" /></Grid>
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
              <Grid item xs={6}><Textarea labelName='Tapşırığın adı' maxHeight="88px" maxCharCount='2000' helpertext={true} ></Textarea></Grid>
              <Grid item xs={6}><Textarea labelName='Tapşırıq üzrə qeydlər' maxHeight="88px" maxCharCount='4000' helpertext={true}></Textarea></Grid>
            </Grid>
            <Grid container justifyContent='space-between'>
              <Grid item >
                {edit && <DeleteEditButton action={handleClose} />}
              </Grid>
              <Grid item >
                <ContainedButton text='Yadda Saxla' variantName='contained' paddingSize='16px 32px 16px 32px' maxWidth='165px' />
              </Grid>
            </Grid>
          </Grid>
        </Box>
  </BasicModal>
</React.Fragment>
     
  );
}
export default PlanModal