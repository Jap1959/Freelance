import React, { useContext, useState } from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { userContext } from '../../Navigation';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { dispatch } = useContext(userContext);
    const [loading, setloading] = useState(false);
    const Navigate = useNavigate();
    const [User, setUser] = useState({
        Email: '', Password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
    };
    const handleSubmit = async (e) => {
        setloading(true);
        try {
            const Data = {
                Email: User.Email,
                Password: User.Password
            };
            const response = await axios.post('https://salonbackend-s9q2.onrender.com/Login', Data);
            console.log(response.data);
            if (response.data.status === 200) {
                localStorage.setItem('isLogin', true);
                setloading(false);
                Navigate('/');
                window.location.reload();
            } else {
                console.log('Some Error Occured');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '83vh' }}
        >
            <Grid item xs={10} md={4}>
                <Card variant="outlined" sx={{ padding: '1rem' }}>
                    <CardContent>
                        <center>
                            <Typography variant='h5' gutterBottom>
                                Enter Your Email and Password
                            </Typography>
                        </center>
                        <form>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name='Email'
                                        type="email"
                                        value={User.Email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        InputLabelProps={{ style: { color: 'black' } }}
                                        InputProps={{ style: { color: 'black' } }}
                                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' }, '&:hover fieldset': { borderColor: 'black' }, '&.Mui-focused fieldset': { borderColor: 'black' } } }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name='Password'
                                        type='password'
                                        value={User.Password}
                                        onChange={handleChange}
                                        variant="outlined"
                                        InputLabelProps={{ style: { color: 'black' } }}
                                        InputProps={{ style: { color: 'black' } }}
                                        sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' }, '&:hover fieldset': { borderColor: 'black' }, '&.Mui-focused fieldset': { borderColor: 'black' } } }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleSubmit}
                                    >
                                        {loading ? <CircularProgress style={{ color: 'black' }} /> : <Typography> Login</Typography>}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default LoginForm;
