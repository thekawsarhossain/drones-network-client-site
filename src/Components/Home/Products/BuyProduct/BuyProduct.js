import { Card, Container, Grid, Typography, CardMedia, CardContent, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';

const BuyProduct = () => {
    const { id } = useParams();

    const { user } = useAuth();
    const [product, setProduct] = useState({});

    // initial information
    const initialInformation = { name: user.displayName, email: user.email, price: product.price }
    const [bookingData, setBookingData] = useState(initialInformation);

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newBooking = { ...bookingData }
        newBooking[field] = value;
        setBookingData(newBooking)
    }

    // getting the match product using id here 
    useEffect(() => {
        fetch(`https://safe-tundra-13022.herokuapp.com/drones/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [id]);

    // handle booking function here 
    const handleBooking = () => {

        // importtant data 
        const orderData = {
            ...bookingData,
            productPrice: product?.price,
            productName: product.name,
            status: 'pending',
            date: new Date().toLocaleDateString()
        }

        fetch('https://safe-tundra-13022.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Order Placed successfully!",
                        icon: "success",
                    });
                }
            })
    }

    return (
        <Box>
            {/* navigation here */}
            <Navigation />

            <Container sx={{ py: 4 }}>
                <Typography variant="h4" className="title-2" style={{ fontWeight: 'bold' }}>Booking Product</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ py: 6 }}>
                    {/* booking form */}
                    <Grid item md={6}>
                        <TextField
                            sx={{ width: '80%', my: 1 }}
                            defaultValue={user?.displayName}
                            id="outlined-basic"
                            label="Your Name"
                            name="name"
                            variant="outlined"
                            onBlur={handleBlur}
                        />
                        <TextField
                            sx={{ width: '80%', my: 1 }}
                            defaultValue={user?.email}
                            id="outlined-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            onBlur={handleBlur}
                        />
                        <TextField
                            sx={{ width: '80%', my: 1 }}
                            id="outlined-basic"
                            label="Your Number"
                            name="number"
                            variant="outlined"
                            onBlur={handleBlur}
                        />
                        <TextField
                            sx={{ width: '80%', my: 1 }}
                            id="outlined-basic"
                            label="Your Address"
                            name="address"
                            variant="outlined"
                            onBlur={handleBlur}
                        />
                        <Button
                            onClick={handleBooking}
                            sx={{ width: '80%', my: 1, bgcolor: 'text.primary' }}
                            type="submit"
                            size="large"
                            variant="contained">
                            Book Now
                        </Button>
                    </Grid>
                    <Grid item md={6}>
                        <Card className="product-card" sx={{ maxWidth: 465, p: 2, boxShadow: 0 }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={product.img}
                                alt="drone image"
                            />
                            <CardContent sx={{ textAlign: 'start' }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                                <Typography sx={{ py: 1 }} variant="subtitle1" >
                                    Price: {product.price}$
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* footer here */}
            <Footer />
        </Box>
    );
};

export default BuyProduct;