import { useState } from 'react'

// From Material UI components
import {
    TextField
} from '@mui/material';

import {
    DesktopDatePicker
} from '@mui/x-date-pickers';

const DateInput = () => {
    const [value, setValue] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
        />
    )
}

export default DateInput