// From Material UI components
import {
    TextField,
    Autocomplete,
    Checkbox
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Style
import './style.scss';

const Combobox = ({ emp }: any) => {

    return (
        <Autocomplete
            multiple
            className="comboboxInput"
            id="checkboxes-tags-demo"
            options={emp}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option.label}
            popupIcon={<ExpandMoreIcon />}
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

export default Combobox