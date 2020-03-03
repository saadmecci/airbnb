import React from 'react';
import Navbar from './components/Navbar';
import airbnbLogo from './pictures/airbnb_logo.svg';

const NavigationBar = () => {
    return (
        <Navbar style={{color:"#ffffff"}}>
            <img src={airbnbLogo} alt="Airbnb Logo"/>
            English (US)
            $ USD
            Host a home
            Host an experience
            Help
            Sign up
            Log in
        </Navbar>
    )
}

export default NavigationBar;