import './style.css';
import { Box,Grid, Paper } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import BasicCard from '..';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FirstProjectInfo:React.FC = () => {

    return (
        <div className='first-project-info'>
            <BasicCard>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Item>xs=12</Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>xs=12</Item>
                            </Grid>
                        </Grid>
                    </Box>
            </BasicCard>
        </div>
    )
}

export default FirstProjectInfo;