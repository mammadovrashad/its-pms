import React, { Fragment } from 'react'
import FirstWindows from './firstWindows'
import { Container } from '@mui/material';

const Pages: React.FC = () => {
  return (
    <Fragment>
      <Container maxWidth="xl">
        <FirstWindows />
      </Container>
    </Fragment>
  )
}

export default Pages;