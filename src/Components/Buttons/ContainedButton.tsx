import { Button } from '@mui/material';

// Style
import './style.scss';

const ContainedButton = ({text, variantName, paddingSize, disable}: any) => {
    return (
        <Button 
            className='customContainedButton' 
            variant={variantName}
            sx={{padding: `${paddingSize}`}}
            disabled={disable}
        >
            {text}
        </Button>
    )
}

export default ContainedButton