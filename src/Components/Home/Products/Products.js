import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Typography variant="h3" style={{ fontWeight: 'bold' }}>FEATURED COLLECTION</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Products;