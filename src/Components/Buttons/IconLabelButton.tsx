import { Button } from '@mui/material';
import ActionButton from './ActionButton';

// Style
import './style.scss';

const IconLabelButton = () => {
    return (
        <Button className='customIconLabelBtn' variant="text" startIcon={<ActionButton />}>
            əlavə et
        </Button>
    )
}

export default IconLabelButton