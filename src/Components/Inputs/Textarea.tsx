// From Material UI components
import {
    TextField
} from '@mui/material';

// Style
import './style.scss';

const Textarea = () => {
    return (
        <TextField
            id="outlined-textarea"
            label="Layihənin qısa izahı"
            fullWidth
            multiline
            rows={3}
            placeholder="Layihə üzrə qeydlər"
            margin='normal'
            className="TextareaInput"
        />
    )
}

export default Textarea