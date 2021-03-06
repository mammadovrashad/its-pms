import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const card = (
  <CardContent>

  </CardContent>

);

export default function BasicCard(props: any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActions className='card-action'>
          {props.children}
        </CardActions>
      </Card>
    </Box>

  );
}
