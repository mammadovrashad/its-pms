import { Fab } from '@mui/material';
import PlusIcon from './PlusIcon';

// Style
import './style.scss';

const ActionButton = () => {
    return (
        <Fab size="medium" className="customActionButton" aria-label="add">
            <PlusIcon />
        </Fab>
    )
}

export default ActionButton