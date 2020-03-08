import React from 'react';
import NavigationBar from './NavigationBar';
import SearchBox from './SearchBox';
import dashboardPicture from './pictures/dashboardPicture.jpg';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    height: 100vh; 
    width: 100%;
    background-image: url(${dashboardPicture});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
`

const SearchBoxContainer = styled.div`
    padding-top: 70px;
    display: flex;
    justify-content: space-around;
`

const Dashboard = () => {
    return (
        <DashboardContainer alt="Dashboard Image">
            <NavigationBar/>
            <SearchBoxContainer>
                <SearchBox/>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </SearchBoxContainer>
        </DashboardContainer>
    )
}

export default Dashboard;