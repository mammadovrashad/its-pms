import './style.css';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItsLogo from './img/Asset13';
import Avatar from './img/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Grid, Menu, MenuItem} from '@mui/material';

const Header:React.FC=()=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleDropClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleDropClose = () => {
      setAnchorEl(null);
    };

    return(
<section className='container-header'> 
<Grid container sx={{width:"100%",
height:'100%',
padding:'0px 50px'}} alignItems='center' justifyContent='space-between'>
<Grid item >
    <ItsLogo />
</Grid>
<Grid item>
<Grid container alignItems='center'  spacing={1.5}>
<Grid item>
    <Avatar />
</Grid>
<Grid item>
    <p className='title-style'>Ağarəhim Quluzadə</p>
</Grid>
<Grid item>
<Button
 onClick={handleDropClick}
sx={{color:'black'}}
      >
        <ExpandMoreIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleDropClose}
      >
        <MenuItem onClick={handleDropClose}>
        <LogoutIcon></LogoutIcon>Profildən çıx</MenuItem>
      </Menu>
</Grid>
</Grid>
</Grid>
</Grid>
</section>
    )
}
export default Header