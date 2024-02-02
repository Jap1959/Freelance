import React from 'react';
import { AppBar, Button, CssBaseline, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = [{ item: 'Home', val: '/' }, { item: 'Services', val: '' }, { item: 'About Us', val: '' }, { item: 'Contact Us', val: '' }];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, marginLeft: '4rem' }}>
        Brand Name
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Grid container direction="column">
      <CssBaseline />
      <AppBar position="fixed" component="nav" sx={{ px: '16px', py: '8px' }}>
        <Toolbar>
          <Grid container justifyContent="space-around" alignItems="center">
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Brand Name
            </Typography>
            <Hidden smDown>
              <div sx={{ display: 'flex', justifyContent: 'center' }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: 'black', mx: 2 }}>
                    <Typography color={window.location.pathname === item.val ? 'secondary' : 'secondary1'}>
                      {item.item}
                    </Typography>
                  </Button>
                ))}
              </div>
            </Hidden>
            <Button variant="contained" color="secondary">
              Book Now
            </Button>
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
          {/* Your main content */}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DrawerAppBar;
