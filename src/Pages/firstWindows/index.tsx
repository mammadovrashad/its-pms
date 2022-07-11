import MultilineInput from '../../Components/Inputs/MultilineInput'
import Textarea from '../../Components/Inputs/Textarea'
import Combobox from '../../Components/Inputs/Combobox'
import ComboCheckbox from '../../Components/Inputs/ComboCheckbox'
import DisableInput from '../../Components/Inputs/DisableInput'

const FirstWindow = () => {

  const position = [
    { id: 1, label: 'Layihə rəhbəri' },
    { id: 2, label: 'Məhsul sahibi' },
    { id: 3, label: 'UI/UX dizayner' },
    { id: 4, label: 'IT analitik' },
    { id: 5, label: 'DB admin' },
    { id: 6, label: 'SQL developer' },
    { id: 7, label: 'Front-end developer' },
    { id: 8, label: 'Back-end developer' },
  ];

  return (
    <div>
      <MultilineInput
        labelName={"Layihənin adı"}
        placeholder={"Dashboard Management Systems"}
        charCount={5}
        readOnly={false}
      />

      <Textarea />

      <Combobox
        labelName={"Rol"}
        placeholder={"Front-end"}
        position={position}
      />

      <ComboCheckbox />

      <DisableInput
        labelName={"Task nömrəsi"}
        defaultValue={"1.2"}
      />
    </div>
  )
}

export default FirstWindow;