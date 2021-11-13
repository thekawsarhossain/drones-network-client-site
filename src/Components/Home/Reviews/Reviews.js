import { Container, Typography } from '@mui/material';
import React from 'react';
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


// fake review data here 
const reviews = [
    {
        img: human,
        name: 'human',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id hic.',
        rating: 3.5
    },
    {
        img: human,
        name: 'human',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id hic.',
        rating: 2.5
    },
    {
        img: human,
        name: 'human',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id hic.',
        rating: 1.5
    },
    {
        img: human,
        name: 'human',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id hic.',
        rating: 2.5
    },
    {
        img: human,
        name: 'human',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id hic.',
        rating: 4.5
    },
    {
        img: human,
        name: 'human',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est id hic.',
        rating: 5
    },
]


const Reviews = () => {
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