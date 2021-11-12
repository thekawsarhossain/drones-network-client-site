import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import ProductsBrands from './ProductsBrands/ProductsBrands';
import Products from '../../Components/Shared/Products/Products';
import Reviews from './Reviews/Reviews';

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