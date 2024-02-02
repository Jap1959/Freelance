import React from 'react';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Typography } from '@mui/material';
import { FaArrowRight } from "react-icons/fa";
import Service1 from '../../Images/service1.jpg';
import Service2 from '../../Images/service2.jpg';
import Service3 from '../../Images/service3.jpg';
const ServicesSection = () => {
    const photos = [
        { id: 1, src: Service1, alt: 'Service 1' },
        { id: 2, src: Service2, alt: 'Service 2' },
        { id: 3, src: Service3, alt: 'Service 3' },
    ];

    return (
        <div style={{ marginBottom: '5rem' }}>
            <center style={{ marginBottom: '2rem' }}>
                <Typography variant='h4'>
                    Services provided by <span className='Secondary'>Brand Name</span>
                </Typography>
            </center>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showStatus={false}
            >
                {photos.map((photo) => (
                    <Container sx={{ maxWidth: 'xl', height: '35rem' }} key={photo.id}>
                        <img src={photo.src} alt={photo.alt} />
                    </Container>
                ))}
            </Carousel>
            <br></br>
            <br></br>
            <center>
                <Button size="large" variant="contained" color="secondary1">
                    <Typography fontSize={'1.5rem'} color={'white'}>
                        <center>
                            Explore Services
                            <span> <FaArrowRight /></span>
                        </center>
                    </Typography>
                </Button>
            </center>
        </div>
    );
};

export default ServicesSection;
