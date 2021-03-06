// From Material UI components
import {
    TextField
} from '@mui/material';

// Style
import './style.scss';

const DisableInput = ({ labelName, defaultValue }: any) => {

    return (
        <TextField
            id="outlined-textarea"
            label={labelName}
            defaultValue={defaultValue}
            fullWidth
            disabled
            className="DisableInput"
            // sx={{margin: '20px 0'}}
        />
    )
}

export default DisableInput;