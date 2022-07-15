import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { createTheme} from '@mui/material'
import './style.css'
import '../../../Common/Fonts/fonts.css';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(",")
  },
  palette: {
    primary: {
      main: '#068FDB'
    }
  }
})

const AddMemberModal: React.FC = () => {
  const [open, setOpen] = React.useState<any>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Open modal</Button>
     <Modal
     open={open}>
      <div>salam</div>
     </Modal>
    </ThemeProvider>



  );
}
export default AddMemberModal