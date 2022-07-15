import { Button, CardActions, Typography } from '@mui/material';
import React from 'react';
import AddMemberModal from '../../Modals/addMemberModal';
import BasicCard from '../index';
import './style.css'


const CreateNewTeam: React.FC = () => {
  return (
    <div className="create-team">
      <BasicCard>
        <CardActions className='card-action'>
          <Typography variant="h5" component="div">
            Komanda yoxdur, yeni komanda yarat
          </Typography>
          <Button size="small">
            <AddMemberModal/>
          </Button>
        </CardActions>
      </BasicCard>
    </div>
  )
}

export default CreateNewTeam;