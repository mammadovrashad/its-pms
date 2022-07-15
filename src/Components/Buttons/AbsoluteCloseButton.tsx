import { IconButton } from '@mui/material';
import XIcon from './xIcon';

// Style
import './style.scss';

const AbsoluteCloseButton = ({action}:any) => {
    return (
        <IconButton onClick={action} className='customIconButton' aria-label="delete" size="large">
            <XIcon />
        </IconButton>
    )
}

export default AbsoluteCloseButton