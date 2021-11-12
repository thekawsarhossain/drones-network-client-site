import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import drone from '../../../image/drone.png';
import './Banner.css';


const Banner = () => {
    return (
        <Box className="banner-background" sx={{ py: 16 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item md={5} >
                        <img className="img-animation" src={drone} alt="" />
                    </Grid>
                    <Grid item md={7} sx={{ textAlign: 'start' }}>
                        <Typography variant="h2" style={{ color: '#FFF', fontWeight: 'bold' }}>DRONES ARE <br /> CHANGE THE GAME</Typography>
                        <Typography variant="body1" style={{ color: '#E7E6E1' }}>Drone is one of the most trending in the world right now. Drones have ultra-stable flight, and they can hover and perform different acrobatics in the air.When it comes to commercial drones for entertainment, they have a short control distance and can fly for just a few minutes.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;