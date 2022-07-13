import { Fragment } from 'react';
import AddMemberTable from './Components/Tables/addMemberTable';
import CreateTeamTable from './Components/Tables/createTeamTable';
import ProjectDetailsTable from './Components/Tables/projectDetailsTable';
// import AddMemberModal from './Components/Modals/addMemberModal';
// import AddPlanModal from './Components/Modals/addPlanModal';
// import DeleteMemberModal from './Components/Modals/deleteMemberModal';
// import DeletePlanModal from './Components/Modals/DeletePlanModal';
// import EditPlanModal from './Components/Modals/editPlanModal';
// import Header from './Components/Header';
// import Pages from './Pages/index'
const App: React.FC = () => {
  return (
    <Fragment>
      {/* <Header />
    <AddMemberModal />
     <DeleteMemberModal />
<AddPlanModal /> 
     <DeletePlanModal />
    <EditPlanModal />  */}
    <ProjectDetailsTable/>
    </Fragment>
  )
}

export default App