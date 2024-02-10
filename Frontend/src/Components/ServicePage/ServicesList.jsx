import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container, Button } from '@mui/material';
import Service1 from '../../Images/service1.jpg';
import { Link } from 'react-router-dom';

const services = [
    { name: 'Haircut', price: '$25', image: Service1 },
    { name: 'Manicure', price: '$20', image: Service1 },
    { name: 'Pedicure', price: '$30', image: Service1 },
    { name: 'SkinCare', price: '$30', image: Service1 },
];

const ServicesList = () => {
    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <center>
                        <Typography variant="h4" justifyContent={'center'}  >
                            Explore <span className='Secondary'>Services</span>
                        </Typography>
                    </center>
                </Grid>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                                '&:hover': { cursor: 'pointer' } // Add pointer cursor on hover
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ paddingTop: '5%' }} // 16:9 aspect ratio
                                image={service.image}
                                alt={service.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <span className='Text'>
                                        {service.name}
                                    </span>
                                </Typography>
                                <Typography>
                                    Starting Price: <span className='Secondary'>{service.price}</span>
                                </Typography>
                                <div style={{ marginTop: '1rem' }}>
                                    <Link style={{ textDecoration: 'none' }} to='/Enquire'><Button variant="outlined" color="secondary" sx={{ marginRight: 1 }}>
                                        Enquire
                                    </Button></Link>
                                    <Button variant="contained" color="secondary">
                                        Book Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ServicesList;
