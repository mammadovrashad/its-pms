import { useState } from 'react'

// From Material UI components
import {
    TextField
} from '@mui/material';

// Style
import './style.scss';

const Textarea = ({ labelName, maxCharCount }: any) => {

    const [char, setChar] = useState("");

    return (
        <TextField
            id="outlined-textarea"
            helperText={`${char.length}/${maxCharCount}`}
            inputProps={{ maxLength: maxCharCount }}
            value={char}
            onChange={(event) => {
                const { value } = event.target;
                setChar(value);
            }}
            label={labelName}
            fullWidth
            multiline
            rows={3}
            placeholder="Layihə üzrə qeydlər"
            // margin='normal'
            className="TextareaInput"
        />
    )
}

export default Textarea