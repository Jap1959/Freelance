import React, { useEffect } from 'react';
import { Container, Pagination,Typography, CircularProgress } from '@mui/material';
import RequestCard from './RequestCard';
import Navbar from '../Homepage/App';
import Footer from '../Homepage/Footer';
import { useState } from 'react';
import axios from 'axios';


function RequestList({ onAccept, onReject }) {
    // Static list array
    const [requests, setRequest] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setPage] = React.useState(1);
    const [count, setcount] = React.useState();
    const handleChangePage = (newPage) => {
        setPage(newPage);
    };
    async function FetchData() {
        try {

            const res = await axios.get(`https://salonbackend-s9q2.onrender.com/Request/${page}`);
            if (res.data.status === 200) {
                setRequest(res.data.Data);
                setcount(res.data.Pages);
                setloading(false);
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {

        FetchData();
    }, []);


    const refetchRequests = () => {
        FetchData();
    };
    return (
        <>
            <Navbar />
            <center style={{ marginBottom: '1rem' }}>
                <Typography variant="h3" color={'black'} gutterBottom>
                    Booking Requests
                </Typography>
            </center>
            <Container maxWidth={'md'} style={{ marginTop: '2rem', marginBottom: '1rem', backgroundColor: 'whitesmoke', borderRadius: '1rem', padding: '2rem' }} >
                {loading ? <>
                    <center>
                        <CircularProgress color='secondary' />
                    </center>
                </> : <>
                    <Container sx={{ maxWidth: 'md' }}>
                        {requests.map((request, index) => (
                            <RequestCard key={index} request={request} refetchRequests={refetchRequests} />
                        ))}
                    </Container>
                    <Pagination count={count} page={page} onChange={handleChangePage} />
                </>}
            </Container>
            <Footer />
        </>
    );
}

export default RequestList;
