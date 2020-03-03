import React from 'react';
import NavigationBar from './NavigationBar';
import dashboardPicture from './pictures/dashboardPicture.jpg';
import styled from 'styled-components';

//const dashboardStyle = {
//    height: "100vh", 
//    width: "100%",
//    backgroundImage: `url(${dashboardPicture})`,
//    backgroundSize: "cover",
//    backgroundRepeat: "no-repeat",
//    display: "flex",
//    flexDirection: "column"
//}

const DashboardContainer = styled.div`
    height: 100vh; 
    width: 100%;
    background-image: url(${dashboardPicture});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
`

const Dashboard = () => {
    return (
        <DashboardContainer alt="Dashboard Image">
            <NavigationBar/>
        </DashboardContainer>
    )
}

export default Dashboard;