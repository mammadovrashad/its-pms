import { Container } from '@mui/material';
import { Fragment } from 'react';
/* import AddMemberModal from './Components/Modals/addMemberModal';
import AddPlanModal from './Components/Modals/addPlanModal';
import DeleteMemberModal from './Components/Modals/deleteMemberModal';
import DeletePlanModal from './Components/Modals/DeletePlanModal';
import EditPlanModal from './Components/Modals/editPlanModal';
import Header from './Components/Header'; */
import Pages from './Pages/index'
const App: React.FC = () => {
  return (
    <Fragment>
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        <Pages />
      </Container>
      {/* <Header />
      <AddMemberModal />
      <DeleteMemberModal />
      <AddPlanModal />
      <DeletePlanModal />
      <EditPlanModal /> */}
    </Fragment>
  )
}

export default App;