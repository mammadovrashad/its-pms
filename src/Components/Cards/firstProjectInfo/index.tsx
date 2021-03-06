import './style.css';
import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import BasicCard from '..';
import MultilineInput from '../../Inputs/MultilineInput';
import Textarea from '../../Inputs/Textarea';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FirstProjectInfo: React.FC<{getInputValue:any}> = ({getInputValue}) => {

    return (
        <div className='first-project-info'>
            <BasicCard>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{paddingBottom: '36px'}}>
                            <Item className='grid-item'>
                                <Typography className='info-text'>
                                    İlkin layihə məlumatları
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item className='grid-item'>
                                <MultilineInput labelName='Layihənin adı' placeholder='Dashboard Management Systems' charCount='50'/>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item className='grid-item'>
                                <MultilineInput labelName='Layihənin kodu' placeholder='№122343244355' charCount='50' readOnly={false}/>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item className='grid-item'>
                                <MultilineInput labelName='Biznes tərəfdaşı' placeholder='Department adı' charCount='50'/>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='grid-item'>
                                <Textarea getInputValue={getInputValue} labelName='Layihənin qısa izahı' maxHeight="64px" />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </BasicCard>
        </div>
    )
}

export default FirstProjectInfo;