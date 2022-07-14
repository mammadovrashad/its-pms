// From Material UI components
import {
    TextField,
    Autocomplete
} from '@mui/material';

// Import Icon
import Icon from './ChevronDownIcon';

// Style
import './style.scss';

const Combobox = ({ labelName, placeholder, position }: any) => {

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={position}
            renderInput={(params) => <TextField {...params} label={labelName} placeholder={placeholder} />}
            className="comboboxInput"
            popupIcon={<Icon />}
            // Test
        />
    )
}

export default Combobox