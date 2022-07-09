import { Fragment } from 'react';
import AddMemberModal from './Components/addMemberModal';
import AddPlanModal from './Components/addPlanModal';
import DeleteMemberModal from './Components/deleteMemberModal';
import DeletePlanModal from './Components/DeletePlanModal';
import Pages from './Pages'
const App:React.FC = () => {
  return (
    <Fragment>
      <AddPlanModal />
<AddMemberModal />
<DeleteMemberModal />
<DeletePlanModal />
    </Fragment>
  )
}

export default App;