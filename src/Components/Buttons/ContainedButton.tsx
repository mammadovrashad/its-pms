import { Button } from '@mui/material';

// Style
import './style.scss';

const ContainedButton = ({text, variantName, paddingSize, disable, maxWidth}: any) => {
    return (
        <Button 
            className='customContainedButton' 
            variant={variantName}
            sx={{padding: `${paddingSize}`, width: `${maxWidth}`}}
            disabled={disable}
        >
            {text}
        </Button>
    )
}

export default ContainedButton