import { Button } from '@mui/material';

// Style
import './style.scss';

const ContainedButton = ({text, variantName, paddingSize, disable, action, maxWidth}: any) => {
    return (
        <Button 
            className='customContainedButton' 
            variant={variantName}
            onClick={action}
            sx={{padding: `${paddingSize}`, width: `${maxWidth}`}}
            disabled={disable}
        >
            {text}
        </Button>
    )
}

export default ContainedButton