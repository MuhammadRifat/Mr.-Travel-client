import React from 'react';
import Destination from '../Destination/Destination';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Testimonials from '../Testimonials/Testimonials';
import Tours from '../Tours/Tours';
import TravelGuide from '../TravelGuide/TravelGuide';

// Homepage of this Website
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Destination></Destination>
            <Tours></Tours>
            <Testimonials></Testimonials>
            <TravelGuide></TravelGuide>
            <Footer></Footer>
        </div>
    );
};

export default Home;