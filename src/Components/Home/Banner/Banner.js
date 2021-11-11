import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import drone from '../../../image/drone.png';
import banner from '../../../image/banner.jpg';
import './Banner.css';


const bannerBg = {
    background: `url(${banner}) no-repeat `,
    backgroundSize: 'cover'
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ py: 16 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item md={6} >
                        <img className="img-animation" src={drone} alt="" />
                    </Grid>
                    <Grid item md={6} >
                        <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'text.secobdary' }}>DRONES CHANGE THE GAME</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;