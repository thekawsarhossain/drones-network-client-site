import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {

    // getting peoducts data here 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/drones-home')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <Container sx={{ my: 10 }}>
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>FEATURED COLLECTION</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 6 }}>
                {
                    products.map(product => <Product
                        key={product._id}
                        products={product}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default Products;