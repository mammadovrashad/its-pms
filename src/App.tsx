import Pages from "./Pages/index"

// From Material UI components
import {
  Container
} from "@mui/material";

const App = () => {

  return (
    <div>
      <Container maxWidth="lg" sx={{ padding: '20px' }}>
        <Pages />
      </Container>
    </div>
  )
}

export default App