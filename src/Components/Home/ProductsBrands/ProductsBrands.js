import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
// import css here 
import './ProductsBrands.css';

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
import { Container } from '@mui/material';

// install Swiper modules
SwiperCore.use([Pagination]);

const ProductsBrands = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide><img src="https://i.ibb.co/gtmR27d/3d.webp" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/L0WBD2v/dji.webp" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/wL25cQ0/fly.webp" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/8BCRD42/one.webp" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/FzdRC98/photographer.webp" alt="" /> </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/r5RRZQt/sky.webp" alt="" /> </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default ProductsBrands;