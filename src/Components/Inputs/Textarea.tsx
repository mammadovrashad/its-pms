import { useState } from 'react'

// From Material UI components
import {
    TextField
} from '@mui/material';

// Style
import './style.scss';

const Textarea = ({ labelName, maxCharCount, helpertext, maxHeight, getInputValue }: any) => {

    const [char, setChar] = useState("");

    const changeState = (event: any) => {
        const { value } = event.target;
        setChar(value);
    }

    const allOnChange = (event: any) => {
        changeState(event);
        getInputValue(event);
    }

    return (
        <TextField
            id="outlined-textarea"
            helperText={helpertext ? `${char.length}/${maxCharCount}` : ""}
            sx={[{ ".MuiOutlinedInput-input": { height: `${maxHeight} !important` } }]}
            inputProps={{ maxLength: maxCharCount }}
            value={char}
            onChange={
                allOnChange
            }
            label={labelName}
            fullWidth
            multiline
            rows={4}
            placeholder="Layihə üzrə qeydlər"
            className="TextareaInput"
        />
    )
}

export default Textarea