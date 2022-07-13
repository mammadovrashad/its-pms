import { useState } from 'react'
import CalendarIcon from './CalendarIcon'; 

// date-fns
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';

// Style
import './style.scss';

const DateInput = ({ labelName }: any) => {
    const [value, setValue] = useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                components={{
                    OpenPickerIcon: CalendarIcon
                }}
                label={labelName}
                inputFormat="dd.MM.yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} className="DateInput" />}
            />
        </LocalizationProvider>
    );
}

export default DateInput;