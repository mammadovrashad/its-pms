import './style.css';
import React, { useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItsLogo from './img/Asset13';
import Avatar from './img/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid, Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import { width } from '@mui/system';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleDropClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeLogOut();
    setAnchorEl(event.currentTarget);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
  };
  const profileW: any = useRef();
  let [outWidth, setOutWIdth] = useState('260')

  const changeLogOut = () => {
    console.log(profileW.current.clientWidth);
    setOutWIdth(profileW.current.clientWidth);
  }


  return (
    <section className='container-header'>
      <Grid container className='header-menu' alignItems='center' justifyContent='space-between'>
        <Grid item >
          <ItsLogo />
        </Grid>
        <Grid item>
          <Grid container alignItems='center' spacing={1.5}>
            {/* <Grid item>
    <Avatar />
</Grid> */}
            {/* <Grid item>
    <p className='title-style'>Ağarəhim Quluzadə</p>
</Grid> */}
            <Grid item >
              <Button
                ref={profileW}
                className='btn'
                id="basic-button"
                aria-controls={open1 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? 'true' : undefined}
                onClick={handleDropClick}
                // startIcon={<Avatar />}
                disableRipple
                style={{
                  minWidth: '260px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}

              >
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Avatar  />
                  <p style={{marginLeft:"16px"}} className='title-style'>Fddddddddddd</p>
                </div>
                <div className="out-icon">
                  <ExpandMoreIcon sx={{ color: 'black', transform: 'translateX(30%)' }} />
                </div>

              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open1}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                onClose={handleDropClose}
                className="testClass"
              >
                <MenuItem onClick={handleDropClose} style={{ minWidth: '260px', width: `${outWidth}px` }}>
                  <LogoutIcon></LogoutIcon>
                  <p className='logout'>Profildən çıx</p>
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