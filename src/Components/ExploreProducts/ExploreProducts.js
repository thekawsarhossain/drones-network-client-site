import { Container, Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import spinner from '../../image/loading.gif';

const ExploreProducts = () => {

    const [loading, setLoading] = useState(true)

    // getting peoducts data here 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/drones')
            .then(response => response.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, []);

    return (
        <Box>
            <Navigation />
            <Container sx={{ my: 10 }}>
                <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>ALL COLLECTIONS</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 6 }}>
                    {
                        loading ? <img style={{ width: '10%', margin: ' 25px auto 0 auto' }} src={spinner} alt="" /> :
                            products.map(product => <ExploreProduct
                                key={product._id}
                                products={product}
                            />)
                    }
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default ExploreProducts;