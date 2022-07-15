import { Fragment } from 'react';
import AddMemberTable from './Components/Tables/addMemberTable';
import CreateTeamTable from './Components/Tables/createTeamTable';
import ProjectDetailsTable from './Components/Tables/projectDetailsTable';
import AddMemberModal from './Components/Modals/addMemberModal';
import AddPlanModal from './Components/Modals/addPlanModal';
import DeleteMemberModal from './Components/Modals/deleteMemberModal';
import DeletePlanModal from './Components/Modals/DeletePlanModal';

import Header from './Components/Header';
import Pages from './Pages/index';
import { Button, Modal } from '@mui/material';
import ContainedButton from './Components/Buttons/ContainedButton';
import AbsoluteCloseButton from './Components/Buttons/AbsoluteCloseButton';

const App: React.FC = () => {
  return (
    <Fragment>
       <Header />
      <AddMemberModal />
      <DeleteMemberModal />
      <DeletePlanModal />
      <AddPlanModal edit={true} />
     <AddPlanModal edit={false} />
    </Fragment>
  )
}

export default App