// From Material UI components
import {
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    SelectChangeEvent,
    ListItemText
} from '@mui/material';

import { useState } from 'react'
import { emp } from '../../Pages/firstWindows';

// Style
import './style.scss';

// Import Icon
import Icon from './ChevronDownIcon2';
import Check from './Check';
import Check1 from './Check1';

/* const names = [
    { id: 1, label: 'Nərmin Ağayeva' },
    { id: 2, label: 'Oliver Hansen' },
    { id: 3, label: 'Van Henry' },
    { id: 4, label: 'April Tucker' },
    { id: 5, label: 'Ralph Hubbard' },
    { id: 6, label: 'Omar Alexander' },
    { id: 7, label: 'Carlos Abbott' },
    { id: 8, label: 'Nərmin Ağayeva' },
]; */

const Combobox = ({ labelName }: any) => {

    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const { target: { value }, } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl className="comboboxInput">
                <InputLabel id="demo-multiple-checkbox-label">{labelName}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label={labelName} />}
                    renderValue={(selected) => selected.map((obj: any) => emp[obj - 1].label).join(", ")}
                    IconComponent={Icon}
                >
                    {emp.map((name: any) => (
                        <MenuItem key={name.id} value={name.id}>
                            <Checkbox icon={<Check1 />} checkedIcon={<Check />} checked={personName.indexOf(name.id) > -1} />
                            <ListItemText primary={name.label} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );

}

export default Combobox