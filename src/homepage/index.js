import React from 'react';
import Dashboard from './Dashboard';
import ExploreAirbnb from './ExploreAirbnb';
import AirbnbAdventures from "./AirbnbAdventures";
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
        <Dashboard/>
        <ExploreAirbnb/>
        <AirbnbAdventures/>
        <Footer/>
        </>
    )
}

export default HomePage;