// From Material UI components
import {
    TextField,
    Autocomplete,
    Checkbox
} from '@mui/material';

// Style
import './style.scss';

const position = [
    { id: 1, label: 'Nərmin Ağayeva' },
    { id: 2, label: 'Nərmin Ağayeva' },
    { id: 3, label: 'Nərmin Ağayeva' },
    { id: 4, label: 'Nərmin Ağayeva' },
    { id: 5, label: 'Nərmin Ağayeva' },
    { id: 6, label: 'Nərmin Ağayeva' },
    { id: 7, label: 'Nərmin Ağayeva' },
    { id: 8, label: 'Nərmin Ağayeva' },
];

const Combobox = () => {

    return (
        <Autocomplete
            multiple
            className="comboboxInput"
            id="checkboxes-tags-demo"
            options={position}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => (
                <li key={option.id} {...props}>
                    <Checkbox
                        checked={selected}
                    />
                    {option.label}
                </li>
            )}
            renderInput={(params) => (
                <TextField {...params} label="Əməkdaş" placeholder="Ad Soyad" />
            )}
        />
    )
}

export default Combobox