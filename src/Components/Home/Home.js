import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;