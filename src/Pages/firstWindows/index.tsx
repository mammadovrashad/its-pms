import MultilineInput from '../../Components/Inputs/MultilineInput'
import Textarea from '../../Components/Inputs/Textarea'
import Combobox from '../../Components/Inputs/Combobox'
import ComboCheckbox from '../../Components/Inputs/ComboCheckbox'
import DisableInput from '../../Components/Inputs/DisableInput'
import DateInput from '../../Components/Inputs/DateInput'
import SelectInput from '../../Components/Inputs/SelectInput'
import ContainedButton from '../../Components/Buttons/ContainedButton'
import AbsoluteCloseButton from '../../Components/Buttons/AbsoluteCloseButton'
import ActionButton from '../../Components/Buttons/ActionButton'
import DeleteEditButton from '../../Components/Buttons/DeleteEditButton'
import IconLabelButton from '../../Components/Buttons/IconLabelButton'
import { Container } from '@mui/material'

export const position = [
  { id: 1, label: 'Layihə rəhbəri' },
  { id: 2, label: 'Məhsul sahibi' },
  { id: 3, label: 'UI/UX dizayner' },
  { id: 4, label: 'IT analitik' },
  { id: 5, label: 'DB admin' },
  { id: 6, label: 'SQL developer' },
  { id: 7, label: 'Front-end developer' },
  { id: 8, label: 'Back-end developer' },
];
export const emp = [
  { id: 1, label: 'Nərmin Ağayeva' },
  { id: 2, label: 'Oliver Hansen' },
  { id: 3, label: 'Van Henry' },
  { id: 4, label: 'April Tucker' },
  { id: 5, label: 'Ralph Hubbard' },
  { id: 6, label: 'Omar Alexander' },
  { id: 7, label: 'Carlos Abbott' },
  { id: 8, label: 'Nərmin Ağayeva' },
]
export const stage = [
  { id: 1, label: 'Analiz' },
  { id: 2, label: 'Dizayn' },
  { id: 3, label: 'Development' },
  { id: 4, label: 'Test' },
  { id: 5, label: 'Demo' },
  { id: 6, label: 'Tətbiq' },
]
const FirstWindow = () => {

  return (
    <Container>

      {/* Basic Input */}
      <MultilineInput
        labelName={"Layihənin adı"}
        placeholder={"Dashboard Management Systems"}
        charCount={5}
        readOnly={false}
      />

      <br /><br />

      {/* Textarea Input */}
      <Textarea
        labelName={"Layihənin qısa izahı"}
        maxCharCount={Infinity}
        helpertext={false}
      />

      <br /><br />

      {/* Textarea Input */}
      <Textarea
        labelName={"Tapşırığın adı"}
        maxCharCount={500}
        helpertext={true}
      />

      <br /><br />

      {/* Combobox - Rol, Mərhələ */}
      <Combobox
        labelName={"Rol"}
        placeholder={"Front-end"}
        position={position}
      />

      <br /><br />

      {/* Select Input - Status */}
      <SelectInput />

      <br /><br />

      {/* ComboCheckBox (Select) - Əməkdaş, İcraçı */}
      <ComboCheckbox
        labelName="İcraçı"
      />

      <br /><br />

      {/* Disable Input */}
      <DisableInput
        labelName={"Task nömrəsi"}
        defaultValue={"1.2"}
      />

      <br /><br />

      {/* Date Input */}
      <DateInput
        labelName={"Bitmə tarixi"}
      />

      <br /><br /><br />

      <ContainedButton
        text={"yeni layihə yarat"}
        paddingSize={"16px 32px"}
        variantName={"contained"}
        disable={false}
        maxWidth={"202px"}
      />

      <br /><br />

      <ContainedButton
        text={"yadda saxla"}
        paddingSize={"16px 24px"}
        variantName={"contained"}
        maxWidth={"149px"}
      />

      <br /><br />

      <ContainedButton
        text={"sil"}
        paddingSize={"16px 50.5px"}
        variantName={"contained"}
        maxWidth={"120px"}
      />

      <br /><br />

      <ContainedButton
        text={"ləğv et"}
        paddingSize={"16px 32px"}
        variantName={"outlined"}
      />

      <br /><br />

      <AbsoluteCloseButton />

      <br /><br />

      <ActionButton />

      <br /><br />

      <DeleteEditButton />

      <br /><br />

      <IconLabelButton />

    </Container>
  )

}

export default FirstWindow;