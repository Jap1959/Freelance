import React from 'react';
import { AppBar, Button, Container, Divider, Grid, TextField, Toolbar, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, Pinterest } from '@mui/icons-material';

function Footer() {
    return (
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Container>
                    <Grid container spacing={3} sx={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
                        {/* Brand and Useful Links */}
                        <Grid item xs={6} md={1}>
                            <Typography variant="h5" color="secondary">
                                Brand
                            </Typography>
                            <Grid container marginTop={'1rem'} direction="column" spacing={1} >
                                <Grid item>
                                    <Typography variant="body">Products</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body">Services</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Support */}
                        <Grid item xs={6} md={2} >
                            <Typography variant="h5" color="secondary">
                                Support
                            </Typography>
                            <Grid container marginTop={'1rem'} direction="column" spacing={1} >
                                <Grid item >
                                    <Typography variant="body">FAQ</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body">Contact Us</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body">Terms of Service</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Useful Links */}
                        <Grid item xs={6} md={2} >
                            <Typography variant="h5" color="secondary">
                                Useful Links
                            </Typography>
                            <Grid container marginTop={'1rem'} direction="column" spacing={1} >
                                <Grid item >
                                    <Typography variant="body">Home</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body">Services</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body">About us</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Useful Links */}
                        <Grid item xs={6} md={3} >
                            <Typography variant="h5" color="secondary">
                                Connect
                            </Typography>
                            <Grid container marginTop={'1rem'} direction="row" spacing={1} >
                                <Grid item>
                                    <Facebook />
                                </Grid>
                                <Grid item>
                                    <Twitter />
                                </Grid>
                                <Grid item>
                                    <Instagram />
                                </Grid>
                                <Grid item>
                                    <Pinterest />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <center style={{ marginBottom: '1rem' }}>
                                <Typography variant="h4" color="inherit">
                                    Get to know more
                                </Typography>
                            </center>
                            <TextField
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                        borderColor: 'black', // Change 'blue' to your desired focus border color
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'black', // Change 'blue' to your desired focus label color
                                    },
                                    marginBottom: '1rem',
                                }}
                                id="outlined-basic" label="Name" variant="outlined" fullWidth />
                            <TextField
                                sx={{
                                    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                        borderColor: 'black', // Change 'blue' to your desired focus border color
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'black', // Change 'blue' to your desired focus label color
                                    },
                                    marginBottom: '1rem'
                                }}
                                id="outlined-basic" label="Email" type='Email' variant="outlined" fullWidth />

                            <Button
                                variant="contained" color="secondary1" fullWidth>
                                <Typography color={'white'}>
                                    Subscribe
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
            <center>
                <Divider sx={{ maxWidth: 'lg' }} />
            </center>
            {/* All Rights Reserved */}
            <center>
                <Grid container maxWidth={'lg'} direction="row" spacing={3} sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                    {/* Brand Name */}
                    <Grid item xs={4}>
                        <Typography variant="h6" align='center' component="div">
                            Milli's <span className='Secondary'>Makeover</span>
                        </Typography>
                    </Grid>
                    {/* Copyright Information */}
                    <Grid item xs={4}>
                        <Typography variant="body" align="center" color="inherit">
                            &copy; {new Date().getFullYear()}   Milli's <span className='Secondary'>Makeover</span> All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body" align="center" color="inherit">
                            Exprience the <span className='Secondary'>Royality</span>
                        </Typography>
                    </Grid>
                </Grid>
            </center>
        </AppBar>
    );
}

export default Footer;
