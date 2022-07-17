import { Fragment } from 'react';
import CreatePlan from './Components/Cards/createPlan';
import Header from './Components/Header';
import CreateNewTeam from './Components/Cards/createNewComands';
import DeleteModal from './Components/Modals/DeleteModal';
import PlanModal from './Components/Modals/PlanModal';
import NewProject from './Pages/NewProject';
const App: React.FC = () => {
  return (
    <Fragment>
<NewProject />
    </Fragment>

  )
}

export default App;