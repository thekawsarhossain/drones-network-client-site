import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {

    // recive data using react router location hook here 
    const location = useLocation();
    const productName = location.state.productName;
    const productPrice = location.state.productPrice;

    return (
        <Box>
            {/* title here  */}
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Make your payment here </Typography>

            {/* main data start here  */}
            <Box className="product-card" sx={{ p: 2, mt: 3, width: { md: '100%', lg: '50%', sm: '100%' }, mx: 'auto', textAlign: 'start' }}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Payment for <mark>{productName}</mark> </Typography>
                <Typography variant="h6">Price: ${productPrice}</Typography>
            </Box>
        </Box>
    );
};

export default Payment;