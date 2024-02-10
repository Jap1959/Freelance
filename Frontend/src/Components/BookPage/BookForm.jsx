import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Snackbar, Alert } from '@mui/material';
import '../../index.css';
import axios from 'axios';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
const BookNowForm = () => {
    const [FormData, setFormData] = useState({
        Name: '', Email: '',
        Service: '',
        Mobile: '', Address: '',
    });
    const yesterday = dayjs().subtract(1, 'day');
    const [SelectService, setSelectService] = useState('Haircut');
    const [SelectTypeService, setSelectTypeService] = useState('Door to Door');
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: '',
    });
    const { vertical, horizontal, open, message } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };
    const handleDateTimeChange = (newDateTime) => {
        setSelectedDateTime(newDateTime);
    };
    const handleSelect = (e) => {
        const { value } = e.target;
        setSelectService(value);
    }
    const handleTypeSelect = (e) => {
        const { value } = e.target;
        setSelectTypeService(value);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const { Name, Email, Mobile, Address } = FormData;
            const Data = { Name: Name, Email: Email, date: selectedDateTime, Mobile: Mobile, Address: Address, Service: SelectService, Servicetype: SelectTypeService };
            const response = await axios.post('https://salonbackend-s9q2.onrender.com/Book', Data);
            if (!response.status === 200) {
                throw new Error('Failed to send email');
            }
            setState({ ...state, open: true, message: response.data.message });
            setFormData({
                Name: '', Email: '',
                Service: '',
                Mobile: '', Address: '',
            });
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem', padding: '2rem', marginBottom: '2rem', backgroundColor: '#1E1E1E', height: '100%' }}>
            <center style={{ marginBottom: '1rem' }}>
                <Typography variant="h5" color={'white'} gutterBottom>
                    Appointment Form
                </Typography>
                <Typography fontSize={'1rem'} color={'#767575'} gutterBottom>
                    Please Fill the Form to Book Appointment
                </Typography>
            </center>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        name='Name'
                        onChange={handleChange}
                        value={FormData.Name}
                        variant="outlined"
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white' } }}
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        name='Email'
                        onChange={handleChange}
                        value={FormData.Email}
                        variant="outlined"
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white' } }}
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Phone"
                        name='Mobile'
                        onChange={handleChange}
                        value={FormData.Mobile}
                        variant="outlined"
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white' } }}
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
                        fullWidth variant="outlined">
                        <InputLabel style={{ color: 'white' }}>Type of Service</InputLabel>
                        <Select
                            onChange={handleTypeSelect}
                            name='Service' value={SelectTypeService} label="Type of Service"
                            sx={{ '& .MuiSelect-icon': { color: 'white' }, '& .MuiSelect-select': { color: 'white' } }}
                        >
                            <MenuItem value="Door to Door">Door to Door</MenuItem>
                            <MenuItem value="Onsite">Onsite</MenuItem>
                            {/* Add more service types as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
                        fullWidth variant="outlined">
                        <InputLabel style={{ color: 'white' }}>Service</InputLabel>
                        <Select
                            onChange={handleSelect}
                            name='Service' value={SelectService} label="Service"
                            sx={{ '& .MuiSelect-icon': { color: 'white' }, '& .MuiSelect-select': { color: 'white' } }}
                        >
                            <MenuItem value="Haircut">Haircut</MenuItem>
                            <MenuItem value="Manicure">Manicure</MenuItem>
                            <MenuItem value="Pedicure">Pedicure</MenuItem>
                            {/* Add more service types as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            defaultValue={yesterday}
                            onChange={handleDateTimeChange}
                            disablePast
                            sx={{
                                '& input': {
                                    color: 'white', // Change input value color
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& .MuiIconButton-root': {
                                    color: 'white', // Change icon color
                                },
                                width: '100%'
                            }}
                            views={['year', 'month', 'day', 'hours', 'minutes']}
                        />
                        {/* <DateTimePicker
                            renderInput={(props) => (
                                <TextField {...props} fullWidth label="Choose Date and Time" variant="outlined" />
                            )}
                            value={selectedDateTime}
                            onChange={handleDateTimeChange}
                            minDate={new Date()} // Set minimum selectable date and time to current date and time
                            disablePast // Disable past dates and times
                        /> */}
                    </LocalizationProvider>
                </Grid>

                {SelectTypeService === 'Door to Door' && <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Address"
                        name='Address'
                        onChange={handleChange}
                        value={FormData.Address}
                        variant="outlined"
                        multiline
                        rows={4}
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white', } }}
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
                    />
                </Grid>}
                <Grid item xs={12}>
                    <Button onClick={handleSend} variant="contained" color="primary">
                        Book Now
                    </Button>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                severity="success"
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
        </Container>
    );
};

export default BookNowForm;
