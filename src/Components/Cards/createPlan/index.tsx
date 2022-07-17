import { Button, CardActions, Typography } from '@mui/material';
import AddPlanModal from '../../Modals/addPlanModal';
import BasicCard from '../index';
import './style.css';

const CreatePlan = () => {
  return (
    <div className='create-plan'>
      <BasicCard> 
          <Typography variant="h5" component="div">
            Fəaliyyət planı yoxdur, yeni plan yarat
          </Typography>
          <AddPlanModal edit={false} />
      </BasicCard>
    </div>
  )
}

export default CreatePlan