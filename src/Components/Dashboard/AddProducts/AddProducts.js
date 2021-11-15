import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const AddProducts = () => {

    const { user } = useAuth();

    const [product, setProduct] = useState({})

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...product }
        newProduct[field] = value;
        setProduct(newProduct)
    }

    const handleAdding = () => {
        const productInfo = {
            ...product,
            addby: user.displayName
        }
        fetch('https://safe-tundra-13022.herokuapp.com/drones', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productInfo)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Review Placed successfully!",
                        icon: "success",
                    });
                }
            })
    }

    return (
        <Container sx={{
            width: {
                xs: '100%',
                sm: '100%',
                md: '100%',
                lg: '70%',
            }, mx: 'auto'
        }}>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Add a product </Typography>
            <Box className="product-card " sx={{ p: 3, m: 2 }}>

                <TextField
                    sx={{ width: '95%', my: 1 }}
                    id="outlined-basic"
                    label="product Name"
                    name="name"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <TextField
                    sx={{ width: '95%', my: 1 }}
                    id="outlined-basic"
                    label="description"
                    name="description"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <TextField
                    sx={{ width: '95%', my: 1 }}
                    id="outlined-basic"
                    label="price"
                    name="price"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <TextField
                    sx={{ width: '95%', my: 1 }}
                    id="outlined-basic"
                    label="Image Link"
                    name="img"
                    variant="outlined"
                    onBlur={handleBlur}
                />
                <Button
                    onClick={handleAdding}
                    sx={{ width: '95%', my: 2, bgcolor: 'text.primary' }}
                    type="submit"
                    size="large"
                    variant="contained">
                    Post
                </Button>
            </Box>
        </Container>
    );
};

export default AddProducts;