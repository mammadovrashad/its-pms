import { Button } from '@mui/material';

// Style
import './style.scss';

const DeleteEditButton = ({action}:any) => {
    return (
        <Button
onClick={action}
            className='customDeleteEditButton'
            variant="outlined"
        >
            Sil
        </Button>
    )
}

export default DeleteEditButton