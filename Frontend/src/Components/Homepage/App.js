import React, { useContext, useEffect, useReducer, useState } from 'react';
import { AppBar, Badge, Button, CssBaseline, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { userContext } from '../../Navigation';
import axios from 'axios';
import { initialState, reducer } from '../../reducer';
const drawerWidth = 240;
const navItems = [{ item: 'Home', val: '/' }, { item: 'Services', val: '/Services' }, { item: 'About Us', val: '' }, { item: 'Contact Us', val: '/Contactus' }];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { state } = React.useContext(userContext);
  useEffect(() => {
    console.log(state);
  }, [state])
  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" align='center' component="div" marginTop={'0.5rem'}>
        Milli's <span className='Secondary'>Makeover</span>
      </Typography>
      <Divider style={{ marginTop: '0.5rem' }} />

      <List justifyContent='center'>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link style={{ textDecoration: 'none', color: '#767575' }} to={`${item.val}`}>
              <ListItemButton
                sx={{ textAlign: 'center' }}>
                <ListItemText style={{ color: `${window.location.pathname === item.val ? '#FB7902' : '#767575'}` }} primary={item.item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        {state.login === true && <ListItem >
          <Link style={{ textDecoration: 'none' }} to='/Notification'>
            <Badge badgeContent={''} color="error">
              <Button color="text">Notifications</Button>
            </Badge>
          </Link>
        </ListItem>}
        {state.login === true && <ListItem >
          <Link style={{ textDecoration: 'none' }} to='/Review'>
            <Badge badgeContent={''} color="error">
              <Button variant="contained" color="secondary">Add review</Button>
            </Badge>
          </Link>
        </ListItem>}
        <ListItem >
          <Link style={{ textDecoration: 'none' }} to='/Book'>
            <Button variant="contained" color="secondary">
              Book Now
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          {state.login !== true && <Link style={{ textDecoration: 'none' }} to='/Login'>
            <Button variant="outlined" color="secondary">
              Login
            </Button>
          </Link>}
        </ListItem>
      </List>
    </div>
  );


  return (
    <Grid container direction="column">
      <CssBaseline />
      <AppBar position="fixed" component="nav" sx={{ px: '16px', py: '8px' }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">

            <Typography variant="h6" component="div">
              Milli's <span className='Secondary'>Makeover</span>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Hidden smDown>
              <div sx={{ display: 'flex', justifyContent: 'center' }}>
                {navItems.map((item) => (
                  <Link style={{ textDecoration: 'none', color: '#767575' }} to={`${item.val}`}>
                    <Button key={item} sx={{ color: 'black', mx: 2 }}>
                      <Typography color={window.location.pathname === item.val ? 'secondary' : 'secondary1'}>
                        {item.item}
                      </Typography>
                    </Button>
                  </Link>
                ))}
                <Link style={{ textDecoration: 'none' }} to='/Book'>
                  <Button variant="contained" color="secondary">
                    Book Now
                  </Button>
                </Link>
                {state.login === true && <Link style={{ textDecoration: 'none', marginLeft: '1rem' }} to='/Notification '>
                  <Button color="text">
                    <Badge badgeContent={''} color="error">
                      <IoIosNotificationsOutline size={30} color='text' />
                    </Badge>
                  </Button>
                </Link>}
                {state.login === true &&
                  <Link style={{ textDecoration: 'none', marginLeft: '1rem' }} to='/Review'>

                    <Button variant="contained" color="secondary">Add review</Button>

                  </Link>
                }
                {state.login !== true && <Link style={{ textDecoration: 'none', marginLeft: '1rem' }} to='/Login'>
                  <Button variant="outlined" color="secondary">
                    Login
                  </Button>
                </Link>}
              </div>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Grid item xs={12} sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DrawerAppBar;
