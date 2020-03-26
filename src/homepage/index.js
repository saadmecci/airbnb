import React from 'react';
import Dashboard from './Dashboard';
import ExploreAirbnb from './ExploreAirbnb';
import AirbnbAdventures from "./AirbnbAdventures";
import styled from 'styled-components';

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const HomePage = () => {
    return (
        <HomePageContainer>
            <Dashboard/>
            <ExploreAirbnb/>
            <AirbnbAdventures/>
        </HomePageContainer>
    )
}

export default HomePage;