import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const BuyProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    // getting the match product using id here 
    useEffect(() => {
        fetch(`http://localhost:5000/drones/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <Box>
            {/* navigation here */}
            <Navigation />

            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 6 }}>
                    <Grid item md={6}></Grid>
                </Grid>
            </Container>

            {/* footer here */}
            <Footer />
        </Box>
    );
};

export default BuyProduct;