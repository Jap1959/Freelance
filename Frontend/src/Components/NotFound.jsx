import React from 'react';
import { Typography, Container } from '@mui/material';
import NotFound from '../Images/404.svg'
const NotFoundPage = () => {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <center>
                <img style={{ width: '70%' }} src={NotFound} alt='404'></img>
                <Typography variant="h4" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="body1">
                    Sorry, the page you are looking for could not be found.
                </Typography>
            </center>
        </Container>
    );
};

export default NotFoundPage;
