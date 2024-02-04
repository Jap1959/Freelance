import React from 'react';
import { AppBar, Button, CssBaseline, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{ item: 'Home', val: '/' }, { item: 'Services', val: '/Services' }, { item: 'About Us', val: '' }, { item: 'Contact Us', val: '/Contactus' }];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
        <ListItem >
          <Link style={{ textDecoration: 'none' }} to='/Book'>
            <Button variant="contained" color="secondary">
              Book Now
            </Button>
          </Link>
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
