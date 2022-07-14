import './style.css';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItsLogo from './img/Asset13';
import Avatar from './img/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid, Menu, MenuItem} from '@mui/material';

const Header:React.FC=()=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl);
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
padding:'0px 45px'}} alignItems='center' justifyContent='space-between'>
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
<button
className='btn'
 id="basic-button"
 aria-controls={open1 ? 'basic-menu' : undefined}
 aria-haspopup="true"
 aria-expanded={open1 ? 'true' : undefined}
 onClick={handleDropClick}

      >
        <ExpandMoreIcon />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        onClose={handleDropClose}
      >
        <MenuItem onClick={handleDropClose}>
        <LogoutIcon></LogoutIcon>
        Profildən çıx
        </MenuItem>
      </Menu>
</Grid>
</Grid>
</Grid>
</Grid>
</section>
    )
}
export default Header