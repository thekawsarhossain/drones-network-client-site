import { Box, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

// publishable key of stripe here 
const stripePromise = loadStripe('pk_test_51KBf3nLtzMak2uXHOzyhMxTYmWczV8bRpmGrR5sNCjzgPBdSvIUGaCzhaYct1q21VuwPgJUytR60k6TAmG5tsYjl00RJteoUwt')

const Payment = () => {

    const { Id } = useParams();

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

                {/* stripe elements here  */}
                {productPrice && <Elements stripe={stripePromise}>
                    <CheckoutForm price={productPrice} id={Id} />
                </Elements>}
            </Box>
        </Box>
    );
};

export default Payment;