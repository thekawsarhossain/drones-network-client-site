import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import spinner from '../../../image/loading.gif';

const Products = () => {

    // getting peoducts data here 
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://safe-tundra-13022.herokuapp.com/drones-home')
            .then(response => response.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }, []);

    return (
        <Container sx={{ my: 10 }}>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold', textAlign: 'left' }}>FEATURED COLLECTION</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 6 }}>
                {
                    loading ? <img style={{ width: '10%', margin: ' 25px auto 0 auto' }} src={spinner} alt="" /> :
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