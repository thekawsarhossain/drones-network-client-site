import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import spinner from '../../../image/loading.gif';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const CheckoutForm = ({ price, id }) => {

    const [clientScrect, setClientScrect] = useState('');
    useEffect(() => {
        fetch('https://safe-tundra-13022.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ price })
        })
            .then(response => response.json())
            .then(data => setClientScrect(data.clientSecret))
    }, [price])

    // process state 
    const [processing, setProcessing] = useState(false);

    // stripe hooks here 
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // checking 
        if (!stripe || !elements) {
            return;
        }

        //getting card details here 
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true)
        // main card charging start here  
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            swal({
                title: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            setProcessing(false)
        }
        else {
            console.log(paymentMethod)
        }

        // confirm payment here || payment intent here 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientScrect, // client secret here 
            {
                payment_method: {
                    card: card,
                    billing_details: { // this billing details can be dynamically handled like we can add here our user name email etc
                        name: 'demo',
                    },
                },
            },
        );
        if (intentError) {
            swal({
                title: `${intentError.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            setProcessing(false)
        }
        else {
            console.log('this is paymentIntent', paymentIntent)
            swal({
                title: 'You payment is successfull',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            const url = `https://safe-tundra-13022.herokuapp.com/order-payment/${id}`
            fetch(url, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => console.log(data))
            setProcessing(false)
        }

    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {processing ? <img style={{ width: '5%', marginTop: 10 }} src={spinner} alt="" /> : <Button sx={{ bgcolor: 'text.primary', mt: 2 }} size="small" variant="contained" type="submit" disabled={!stripe}>
                Pay ${price}
            </Button>}
        </form>
    );
};

export default CheckoutForm;