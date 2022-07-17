import React from 'react'
import { Modal } from '@mui/material'
import '../Modals/style.css'

function BasicModal(props:any) {

  return (
    <Modal
    open={props.open}
    >
      {props.children}
    </Modal>
  )
}

export default BasicModal