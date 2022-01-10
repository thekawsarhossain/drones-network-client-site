import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import spinner from '../../../../image/loading.gif'

const UpdateProduct = () => {

    const history = useHistory();
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    // getting the match product using id here 
    useEffect(() => {
        fetch(`https://safe-tundra-13022.herokuapp.com/drones/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .finally(() => setLoading(false))
    }, [id]);

    // updateing product here 
    const initialState = { name: product?.name, description: product?.description, price: product?.price, img: product?.img }
    const [updatedProduct, setUpdatedProduct] = useState(initialState)
    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...updatedProduct }
        newProduct[field] = value;
        setUpdatedProduct(newProduct)
    }

    const handleUpdate = () => {
        setLoading(true)
        fetch(`https://safe-tundra-13022.herokuapp.com/drone/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedProduct)
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount) {
                    swal({
                        title: "Good job!",
                        text: "Product Updated successfully!",
                        icon: "success",
                    });
                    history.push('/dashboard/manage-products');
                }
            })
            .finally(() => setLoading(false))
    }

    if (loading) {
        return <img style={{ width: '12%', margin: ' 25px auto' }} src={spinner} alt="" />
    }

    return (
        <Box>
            <Container sx={{
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '70%',
                }, mx: 'auto'
            }}>
                <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>Update product </Typography>
                <Box className="product-card " sx={{ p: 3, m: 2 }}>

                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        defaultValue={product.name}
                        id="outlined-basic"
                        label="product Name"
                        name="name"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        defaultValue={product.description}
                        id="outlined-basic"
                        label="description"
                        name="description"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        defaultValue={product.price}
                        id="outlined-basic"
                        label="price"
                        name="price"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    <TextField
                        sx={{ width: '95%', my: 1 }}
                        defaultValue={product.img}
                        id="outlined-basic"
                        label="Image Link"
                        name="img"
                        variant="outlined"
                        onBlur={handleBlur}
                        required
                    />
                    {!loading ? <Button
                        onClick={handleUpdate}
                        sx={{ width: '95%', my: 2, bgcolor: 'text.primary' }}
                        type="submit"
                        size="large"
                        variant="contained">
                        Post
                    </Button> : <img style={{ width: '5%', margin: ' 25px auto' }} src={spinner} alt="" />}
                </Box>
            </Container>
        </Box>
    );
};

export default UpdateProduct;