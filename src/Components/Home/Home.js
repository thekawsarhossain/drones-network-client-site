import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import ProductsBrands from './ProductsBrands/ProductsBrands';
import Reviews from './Reviews/Reviews';
import Products from './Products/Products';

const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner />
            <ProductsBrands />
            <Products />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;