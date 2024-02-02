import React from 'react';
import { Grid, Typography, Container } from '@mui/material';

const StatsSection = () => {
    return (
        <Container sx={{ marginTop: '2rem', marginBottom: '2rem', backgroundColor: '' }}>
            <Grid container spacing={4}>
                {/* Views */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" color={'secondary'} align="center">
                        10,000+
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Views
                    </Typography>
                </Grid>

                {/* Customers */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" color={'secondary'} align="center">
                        500+
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Customers
                    </Typography>
                </Grid>

                {/* Service Numbers */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" color={'secondary'} align="center">
                        20+
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Service Numbers
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default StatsSection;
