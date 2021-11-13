import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../image/logo.png';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: '#212121', color: '#CECECE' }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 8, textAlign: 'start' }}>
                    <Grid item md={4}>
                        <img src={logo} alt="" />
                        <Typography sx={{ py: 1 }} variant="body2">We are SKYLON Drone online seller, we are officially sell the extrime level Drone in Bangladesh. We are doing this since 10 years. We always sell the best and authentic products.</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography sx={{ py: 1, color: '#fff' }} variant="h6">ADDRESS</Typography>
                        <Box>
                            <Typography sx={{ py: 1 }} variant="button">Offic: <span>Aruail, BrahmanBaria, Bangladesh </span> </Typography> <br />
                            <Typography sx={{ py: 1 }} variant="button">Mobile: <span>+088 01907000000</span></Typography> <br />
                            <Typography sx={{ py: 1 }} variant="button">Email: <span>skylon@web.gmail.com</span></Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Typography sx={{ py: 1, color: '#fff', textAlign: 'right' }} variant="h6">SIGN UP TO NEWSLETTER</Typography>
                        <TextField variant="filled" sx={{ bgcolor: '#fff' }} fullWidth label="Email" id="fullWidth" />
                    </Grid>
                </Grid>
            </Container>
            <Typography sx={{ color: '#fff', textAlign: 'right' }} variant="caption">All rights are reserved by &copy; SKYLON</Typography>
        </Box>
    );
};

export default Footer;