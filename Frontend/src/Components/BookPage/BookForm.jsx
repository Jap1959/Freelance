import React from 'react';
import { Grid, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Container } from '@mui/material';
import '../../index.css';
const BookNowForm = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem', padding: '2rem', marginBottom: '2rem', backgroundColor: '#1E1E1E' }}>
            <center style={{marginBottom:'1rem'}}>
                <Typography variant="h5" color={'white'} gutterBottom>
                    Appointment Form
                </Typography>
                <Typography fontSize={'1rem'}  color={'#767575'} gutterBottom>
                    Please Fill the Form to Book Appointment
                </Typography>
            </center>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Name"
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
                        <Select label="Type of Service" inputProps={{ style: { color: 'white' } }}

                        >
                            <MenuItem value="Haircut">Haircut</MenuItem>
                            <MenuItem value="Manicure">Manicure</MenuItem>
                            <MenuItem value="Pedicure">Pedicure</MenuItem>
                            {/* Add more service types as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Choose Date"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: 'white' } }}
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } },
                        }}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Choose Time"
                        type="time"

                        variant="outlined"
                        InputLabelProps={{
                            shrink: true, style: { color: 'white' },

                        }}
                        InputProps={{
                            style: { color: 'white', },

                        }}
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }, '& input': { color: 'white' } } }}

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Note"
                        variant="outlined"
                        multiline
                        rows={4}
                        InputLabelProps={{ style: { color: 'white' } }}
                        InputProps={{ style: { color: 'white', } }}
                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } } }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                        Book Now
                    </Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default BookNowForm;
