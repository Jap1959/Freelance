import React from 'react';
import { CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Hero from '../../Images/service1.jpg';
import '../../index.css';
function HeroSection() {
    return (
        <Container style={{ backgroundColor: '#FFFBF2', marginBottom: '3rem' }}>
            <Grid container>
                <Grid item xs={12} >
                    <CardContent>
                        <Container maxWidth="md">
                            <Typography variant="h3" >
                                <center>
                                    We Show your <span className='Secondary'>skin,hair</span> and
                                    <span className='Secondary'> body</span> the care and attention they deserve
                                </center>
                            </Typography>
                        </Container>
                    </CardContent>
                </Grid>
                <Grid item xs={12}  >
                    <center>
                        <CardMedia
                            sx={{ maxWidth: 'lg' }}
                            component="img"
                            height="500"
                            image={Hero}
                            alt="Placeholder"
                        />
                    </center>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeroSection;
