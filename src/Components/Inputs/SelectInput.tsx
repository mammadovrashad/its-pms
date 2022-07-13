import { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

// Style
import './style.scss';

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

  const [stage, setTage] = useState('Açıq');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTage(event.target.value);
  };

  return (
    <TextField
      id="outlined-select"
      className="SelectInput"
      select
      label="Status"
      value={stage}
      onChange={handleChange}
      sx={{ margin: '15px 0' }}
    >
      {stages.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectInput