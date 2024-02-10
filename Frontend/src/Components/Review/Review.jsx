import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Grid, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import Navbar from '../Homepage/App';

function AddReviewPage() {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [review, setReview] = useState('');
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: '',
        severity: 'success',
    });
    const { vertical, horizontal, open, message, severity } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('photo', photo);
            formData.append('photoName', photo.name);
            formData.append('review', review);

            const res = await axios.post('https://salonbackend-s9q2.onrender.com/reviews', formData);
            console.log(res.data);
            if (res.data.status === 200) {
                setState({ ...state, open: true, message: res.data.message, severity: 'success' });
            } else {
                setState({ ...state, open: true, message: res.data.message, severity: 'error' });
            }
            setName('');
            setReview('');
            setPhoto('');
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    return (
        <>
            <Navbar />

            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '83vh' }}>
                <Card sx={{ maxWidth: 'md', paddingBottom: '3rem' }}>
                    <CardContent>
                        <center>
                            <Typography variant='h4' gutterBottom>
                                Add Review
                            </Typography>
                        </center>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={handleNameChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            Upload Photo <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                            <TextField
                                label="Review"
                                value={review}
                                onChange={handleReviewChange}
                                multiline
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                            <Button type="submit" variant="contained" color="secondary">
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    severity={severity}
                    onClose={handleClose}
                    autoHideDuration={3000}
                    key={vertical + horizontal}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            </Grid>
        </>
    );
}

export default AddReviewPage;
