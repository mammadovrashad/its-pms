import React from 'react'
import { Modal } from '@mui/material'
import '../Modals/style.css'
import { ThemeProvider } from '@emotion/react';
import {createTheme} from '@mui/material';

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

function BasicModal(props:any) {

  return (
    <ThemeProvider theme={theme}>
       <Modal
    open={props.open}
    >
      {props.children}
    </Modal>
    </ThemeProvider>
   
  )
}

export default BasicModal