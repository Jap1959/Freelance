import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import axios from 'axios';

function RequestCard({ request,refetchRequests }) {
    const handleAccept = async (e) => {
        e.preventDefault();
        try {
            const Data = { status: true, Reqid: request.Reqid };
            const response = await axios.post('https://salonbackend-s9q2.onrender.com/RequestStatus', Data);
            if (!response.status === 200) {
                throw new Error('Failed to send email');
            }
            refetchRequests();
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    };

    const handleReject = async (e) => {
        e.preventDefault();
        try {
            const Data = { status: false, Reqid: request.Reqid };
            const response = await axios.post('/RequestStatus', Data);
            if (!response.status === 200) {
                throw new Error('Failed to send email');
            }
            refetchRequests();
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    };
    const getdate = (date) => {
        const dateTimeString = date;
        const dateTime = new Date(dateTimeString);
        const formattedDateTime = dateTime.toLocaleTimeString('en-US', {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
        return formattedDateTime;
    }
    const getstatus = (val) => {
        let staus = 'pending';
        if (val === 0) {
            staus = 'Rejected';
        }
        else if (val === 1) {
            staus = 'Confirmed';
        }
        return staus;
    }
    return (
        <Container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card variant="outlined" style={{ borderRadius: '2rem', marginBottom: '1rem' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {request.Name}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Email: {request.Email}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Date: {getdate(request.date)}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Service: {request.Service}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Mobile Number: {request.PhoneNumber}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            Service Type: {request.Servicetype}
                        </Typography>
                        {request.Servicetype !== 'Onsite' && <Typography color="textSecondary" gutterBottom>
                            Address: {request.Address}
                        </Typography>}
                        <Typography color="textSecondary" gutterBottom>
                            Status: {getstatus(request.RequestStatus)}
                        </Typography>
                        {request.RequestStatus === -1 && <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }} onClick={handleAccept}>
                                    Accept
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleReject}>
                                    Reject
                                </Button>
                            </Grid>
                        </Grid>}
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}

export default RequestCard;
