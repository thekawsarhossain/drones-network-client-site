import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Product.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
    const { img, name, price, description, _id } = products;

    // const history = useHistory();

    // //  handle buy here 
    // const handleBuy = id => {
    //     history.push(`/product/${id}`);
    // }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="product-card" sx={{ maxWidth: 365, p: 2, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={img}
                    alt="drone image"
                />
                <CardContent sx={{ textAlign: 'start' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                        {/* description.length > 50 ? description.split(' ').slice(0, 20).join(' ') : */}
                    </Typography>
                    <Typography sx={{ py: 1 }} variant="subtitle1" >
                        Price: {price}$
                    </Typography>

                    <Link to={`/product/${_id}`}> <Button sx={{ bgcolor: 'text.primary' }} size="small" variant="contained">Buy Now</Button> </Link>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Product;