<<<<<<< HEAD
const App = () => {

  return (
    <div>
    </div>
=======
import { Fragment } from 'react';
import AddMemberModal from './Components/Modals/addMemberModal';
import AddPlanModal from './Components/Modals/addPlanModal';
import DeleteMemberModal from './Components/Modals/deleteMemberModal';
import DeletePlanModal from './Components/Modals/DeletePlanModal';
import EditPlanModal from './Components/Modals/editPlanModal';
import Pages from './Pages'
import Header from './Components/Header';
const App:React.FC = () => {
  return (
    <Fragment>
      <Header />
    <AddMemberModal />
    <DeleteMemberModal />
<AddPlanModal /> 
     <DeletePlanModal />
    <EditPlanModal />
    
    </Fragment>
>>>>>>> origin/master
  )
}

export default App;