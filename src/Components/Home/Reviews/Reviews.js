import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import human from '../../../image/another.jpg';
import { Box } from '@mui/system';
import Review from './Review/Review';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import './Reviews.css';

// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://safe-tundra-13022.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Box>
            <Typography variant="h4" className="title" style={{ fontWeight: 'bold' }}>REVIEW BY USERS</Typography>
            <Container sx={{ my: 6 }}>
                <Swiper sx={{ pt: 3 }} effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "initialSlide": 3,
                    "activeSlideKey": 4,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide >{<Review reviews={review} />}</SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </Box >
    );
};

export default Reviews;