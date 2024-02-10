import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('https://salonbackend-s9q2.onrender.com/testimonials');
                console.log(response.data.Data);
                setTestimonials(response.data.Data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <>
            <center>
                <Typography variant='h4' marginBottom={'2rem'}>
                    Our <span className='Secondary'>Testimonials</span>
                </Typography>
            </center>
            <Container sx={{ maxWidth: 'md', marginBottom: '3rem' }}>

                <Carousel
                    infiniteLoop={true}
                    interval={3000}
                    autoPlay={true}
                    showArrows={true}
                    dynamicHeight={true}
                    showStatus={false}
                    showThumbs={false}
                >
                    {testimonials.length > 0 && testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <Container sx={{ width: '100%' }}>
                                        <img src={testimonial.imageUrl} alt="testimonial" style={{ maxWidth: '100%' }} />
                                    </Container>
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <div style={{ paddingLeft: '16px' }}>
                                        <Typography variant='h2'>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant='h6' color={'text'}>
                                            {testimonial.review}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </Carousel>
            </Container>
        </>
    );
};

export default TestimonialSection;
