// From Material UI components
import {
    TextField
} from '@mui/material';

// Style
import './style.scss';

const MultilineInput = ({ labelName, placeholder, charCount, readOnly }: any) => {

    return (
        <TextField
            id="outlined-textarea"
            label={labelName}
            placeholder={placeholder}
            // multiline
            fullWidth
            className="MultilineInput"
            inputProps={{ maxLength: charCount, readOnly }}
        />

        /*
        <TextField
            id="outlined-textarea"
            label={labelName}
            placeholder={placeholder}
            multiline
            fullWidth
            className="MultilineInput"
        />
        */
    )
}

export default MultilineInput;