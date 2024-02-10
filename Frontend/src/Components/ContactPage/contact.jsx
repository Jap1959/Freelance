import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Container, IconButton, Box, Avatar, Divider, Snackbar, Alert } from '@mui/material';
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp, FaYoutube, FaFacebookF } from "react-icons/fa";
import axios from 'axios';
const ContactSection = () => {
    const [Contact, setContact] = useState({
        Name: '',
        Email: '',
        Mobile: '',
        Message: '',
        Service: '',
    });
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: '',
        serverity: 'error'
    });
    const { vertical, horizontal, open, message, serverity } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...Contact, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { Name, Email, Mobile, Service, Message } = Contact;
            const Data = { Name: Name, Email: Email, Mobile: Mobile, Service: Service, Message: Message };
            const response = await axios.post('https://salonbackend-s9q2.onrender.com/SendEmail', Data);
            console.log(response);
            console.log(response.data.status);
            if (response.data.status === 200) {
                setState({ ...state, open: true, message: response.data.message });
            } else {
                setState({ ...state, open: true, message: response.data.message });
            }
            setContact({
                Name: '',
                Email: '',
                Mobile: '',
                Message: '',
                Service: '',
            });
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    }
    return (
        <Container maxWidth="lg" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Grid container spacing={4}>
                {/* Contact Information */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: '#E0E0E0', borderRadius: '8px', padding: '2rem' }}>
                        <Typography style={{ color: 'black' }} variant="h5" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography variant="h7" style={{ color: '#767575' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            vestibulum, ex ac auctor laoreet, ipsum velit venenatis nisl,
                            vel aliquet lorem nisi et sapien.
                        </Typography>
                        <Grid container spacing={4} style={{ marginTop: '0.5rem' }}>
                            {/* <Grid container spacing={1}> */}
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                            <IoLocationOutline color='#1E1E1E' />
                                        </Avatar>
                                        <span style={{ marginLeft: '1rem', color: '#767575' }}>Your Address Here</span>
                                    </span>
                                </Typography>
                            </Grid>
                            {/* </Grid> */}
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                            <CiMail color='#1E1E1E' />
                                        </Avatar>
                                        <span style={{ marginLeft: '1rem', color: '#767575' }}>example@example.com</span>
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                            <BsTelephone color='#1E1E1E' />
                                        </Avatar>
                                        <span style={{ marginLeft: '1rem', color: '#767575' }}>  +1 234 5678</span>
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <IconButton color="primary" size="small">
                                    <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                        <FaInstagram color='#1E1E1E' />
                                    </Avatar>
                                </IconButton>
                                <IconButton color="primary" size="small">
                                    <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                        <FaWhatsapp color='#1E1E1E' />
                                    </Avatar>
                                </IconButton>
                                <IconButton color="primary" size="small">
                                    <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                        <FaYoutube color='#1E1E1E' />
                                    </Avatar>
                                </IconButton>
                                <IconButton color="primary" size="small">
                                    <Avatar style={{ backgroundColor: '#E0E0E0', border: 'solid 1px #FB7902' }}>
                                        <FaFacebookF color='#1E1E1E' />
                                    </Avatar>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                {/* Have any Question */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ borderRadius: '8px', padding: '2rem' }}>
                        <Typography style={{ color: 'black' }} variant="h5" gutterBottom>
                            Have any Question ?
                        </Typography>
                        <Divider />
                        <Typography fontSize={'0.8rem'} >
                            <span className='Secondary'>Business hours:</span> <strong>Mon-Sat</strong> 8:00 AM - 9:00 PM
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item md={6}>
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
                                    value={Contact.Name}
                                    name='Name'
                                    onChange={handleChange}
                                    fullWidth margin="normal" label="Your Name" variant="outlined" />
                            </Grid>
                            <Grid item md={6}>
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
                                    value={Contact.Email}
                                    name='Email'
                                    onChange={handleChange} fullWidth margin="normal" label="Your Email" variant="outlined" />
                            </Grid>
                            <Grid item md={6}>
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
                                    value={Contact.Service}
                                    name='Service'
                                    onChange={handleChange}
                                    fullWidth margin="normal" label="Which Service?" variant="outlined" />
                            </Grid>
                            <Grid item md={6}>
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
                                    value={Contact.Mobile}
                                    name='Mobile'
                                    onChange={handleChange}
                                    fullWidth margin="normal" label="Mobile Number" variant="outlined" />
                            </Grid>
                            <Grid item md={12}>
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
                                    value={Contact.Message}
                                    name='Message'
                                    onChange={handleChange}
                                    fullWidth margin="normal" label="Your Message" variant="outlined" multiline rows={4} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={handleSubmit} color="secondary1">
                                    <Typography color={'white'} variant='h6' sx={{ minWidth: '8rem' }} >
                                        Send
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}

                onClose={handleClose}
                autoHideDuration={3000}
                key={vertical + horizontal}
            >
                <Alert
                    onClose={handleClose}
                    severity='success'
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactSection;
