import { useState } from 'react';
import { Select, SelectChangeEvent, MenuItem, FormControl, InputLabel } from '@mui/material';

// Style
import './style.scss';

// Import Icon
import ChevronDownIcon from './ChevronDownIcon';

const stages = [
  {
    value: 'Açıq',
  },
  {
    value: 'İcradadır'
  },
  {
    value: 'Gecikir',
  },
  {
    value: 'Dayandırılıb',
  },
  {
    value: 'Bağlı',
  },
];

const SelectInput = () => {

  const [stage, setStage] = useState('Açıq');

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);

    setStage(event.target.value as string);
  };

  return (
    <FormControl className="SelectInput" fullWidth>
      <InputLabel id="demo-simple-select-label">Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="outlined-select"
        value={stage}
        label="Status"
        onChange={handleChange}
        IconComponent={ChevronDownIcon}
      >
        {stages.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectInput