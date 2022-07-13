import MultilineInput from '../../Components/Inputs/MultilineInput'
import Textarea from '../../Components/Inputs/Textarea'
import Combobox from '../../Components/Inputs/Combobox'
import ComboCheckbox from '../../Components/Inputs/ComboCheckbox'
import DisableInput from '../../Components/Inputs/DisableInput'
import DateInput from '../../Components/Inputs/DateInput'
import SelectInput from '../../Components/Inputs/SelectInput'

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

  const stage = [
    {id: 1, label: 'Analiz'},
    {id: 2, label: 'Dizayn'},
    {id: 3, label: 'Development'},
    {id: 4, label: 'Test'},
    {id: 5, label: 'Demo'}, 
    {id: 6, label: 'Tətbiq'}, 
  ]

  return (
    <div>
      <MultilineInput
        labelName={"Layihənin adı"}
        placeholder={"Dashboard Management Systems"}
        charCount={5}
        readOnly={false}
      />

      <Textarea
        labelName={"Layihənin qısa izahı"}
        maxCharCount={2000}
      />

      <Textarea
        labelName={"Tapşırığın adı"}
        maxCharCount={500}
      />

      <Combobox
        labelName={"Rol"}
        placeholder={"Front-end"}
        position={position}
      />

      <ComboCheckbox
        emp={emp}
      />

      <DisableInput
        labelName={"Task nömrəsi"}
        defaultValue={"1.2"}
      />

      <DateInput
        labelName={"Bitmə tarixi"}
      />

      <SelectInput />
    </div>
  )
}

export default FirstWindow;