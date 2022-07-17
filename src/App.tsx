import { Fragment } from 'react';
import CreateNewTeam from './Components/Cards/createNewComands';
import CreatePlan from './Components/Cards/createPlan';
// import AddMemberTable from './Components/Tables/addMemberTable';
// import CreateTeamTable from './Components/Tables/createTeamTable';
// import ProjectDetailsTable from './Components/Tables/projectDetailsTable';
// import AddMemberModal from './Components/Modals/addMemberModal';
// import AddPlanModal from './Components/Modals/addPlanModal';
// import DeleteMemberModal from './Components/Modals/deleteMemberModal';
// import DeletePlanModal from './Components/Modals/DeletePlanModal';

import Header from './Components/Header';
import BasicModal from './Components/Modals';
import AddMemberModal from './Components/Modals/addMemberModal';
import AddPlanModal from './Components/Modals/addPlanModal';
import DeleteMemberModal from './Components/Modals/deleteMemberModal';
import DeletePlanModal from './Components/Modals/DeletePlanModal';

const App: React.FC = () => {
  return (
    <Fragment>
<CreatePlan />
<CreateNewTeam />
<DeleteMemberModal />
<DeleteMemberModal />
    </Fragment>

  )
}

export default App;