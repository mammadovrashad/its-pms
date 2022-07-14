// From Material UI components
import {
    TextField,
    Autocomplete,
    Checkbox
} from '@mui/material';

// Style
import './style.scss';

// Import Icon
import Icon from './ChevronDownIcon';

const Combobox = ({ emp }: any) => {

    return (
        <Autocomplete
            popupIcon={<Icon />}
            multiple
            limitTags={1}
            className="comboboxInput"
            id="checkboxes-tags-demo"
            options={emp}
            // sx={{margin: '20px 0'}}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option.label}
            renderOption={(props, option, { selected }) => (
                <li key={emp.id} {...props}>
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

/* or MUI Select Checkmarks */

export default Combobox