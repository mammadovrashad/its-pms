import { useState } from 'react'

// From Material UI components
import {
    TextField
} from '@mui/material';

// Style
import './style.scss';

const Textarea = ({ labelName, maxCharCount, helpertext }: any) => {

    const [char, setChar] = useState("");

    return (
        <TextField
            id="outlined-textarea"
            helperText={helpertext ? `${char.length}/${maxCharCount}` : "" }
            inputProps={{ maxLength: maxCharCount }}
            value={char}
            onChange={(event) =>{
                const { value } = event.target;
                setChar(value);
            }}
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