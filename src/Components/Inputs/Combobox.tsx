// From Material UI components
import {
    TextField,
    Autocomplete
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Style
import './style.scss';

const Combobox = ({ labelName, placeholder, position }: any) => {

    return (
        <Autocomplete
            multiple
            disablePortal
            id="combo-box-demo"
            options={position}
            renderInput={(params) => <TextField {...params} label={labelName} placeholder={placeholder} />}
            className="comboboxInput"
            sx={{ margin: '10px 0' }}
            popupIcon={<ExpandMoreIcon />}
        />
    )
}

export default Combobox