import {Typography } from '@mui/material';
import React from 'react';
import AddMemberModal from '../../Modals/addMemberModal';
import BasicCard from '../index';
import './style.css'


const CreateNewTeam: React.FC = () => {
  return (
    <div className="create-team">
      <BasicCard>
          <Typography variant="h5" component="div">
            Komanda yoxdur, yeni komanda yarat
          </Typography>
          <AddMemberModal/>
      </BasicCard>
    </div>
  )
}

export default CreateNewTeam;