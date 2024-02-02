import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Avatar from '@mui/material/Avatar';
import Service1 from '../../Images/service1.jpg';
import Service2 from '../../Images/service2.jpg';
import Service3 from '../../Images/service3.jpg';

const TestimonialSection = () => {
    const testimonials = [
        { id: Service1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' },
        { id: Service2, name: 'Jane Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' },
    ];

    return (
        <>
            <center>
                <Typography variant='h2' marginBottom={'2rem'}>
                    Our <span className='Secondary'>Testimonials</span>
                </Typography>
            </center>
            <Container sx={{ maxWidth: 'md' }}>

                <Carousel
                    infiniteLoop={true}
                    interval={3000}
                    autoPlay={true}
                    showArrows={true}
                    dynamicHeight={true}
                    showStatus={false}
                    showThumbs={false}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Container sx={{ width: '100%' }}>
                                        <img src={testimonial.id} alt="testimonial" style={{ maxWidth: '100%' }} />
                                    </Container>
                                </Grid>
                                <Grid item xs={12} md={8}>
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
