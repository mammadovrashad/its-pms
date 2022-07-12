// From Material UI components
import {
    Grid,
    TextField
} from '@mui/material';

// Style
import './style.scss';

const MultilineInput = ({ labelName, placeholder, charCount, readOnly }: any) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                    id="outlined-textarea"
                    label={labelName}
                    placeholder={placeholder}
                    multiline
                    fullWidth
                    className="MultilineInput"
                    inputProps={{ maxLength: charCount, readOnly }}
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-textarea"
                    label="Layihənin kodu"
                    placeholder="№122343244355"
                    multiline
                    fullWidth
                    className="MultilineInput"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="outlined-textarea"
                    label="Biznes tərəfdaşı"
                    placeholder="Department adı"
                    multiline
                    fullWidth
                    className="MultilineInput"
                />
            </Grid>
            <TextField
                id="outlined-textarea"
                label="Test"
                placeholder="Test"
                multiline
                fullWidth
                margin='normal'
                className="MultilineInput"
            />
        </Grid>

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