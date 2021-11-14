import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import noImage from '../../../../image/noImage.png';

const Review = ({ reviews }) => {
    const { img, name, comment, rating } = reviews;
    return (

        <Card sx={{ maxWidth: 375 }}>
            <CardMedia
                component="img"
                height="80"
                image={img ? img : noImage}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'start' }} variant="body2" color="text.secondary">
                    {comment}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
            </CardContent>
        </Card>
    );
};

export default Review;