import React from 'react';
import Navbar from './components/Navbar';
import airbnbLogo from './pictures/airbnb_logo.svg';
import { NavbarButton } from './components/Button';

const NavigationBar = () => {
    return (
        <Navbar style={{color:"#ffffff"}}>
            <div className="airbnb-logo">
                <img src={airbnbLogo} alt="Airbnb Logo"/>
            </div>
            <div className="button-container">
                <NavbarButton>English (US)</NavbarButton>
                <NavbarButton>$ USD</NavbarButton>
                <NavbarButton>Host a home</NavbarButton>
                <NavbarButton>Host an experience</NavbarButton>
                <NavbarButton>Help</NavbarButton>
                <NavbarButton>Sign up</NavbarButton>
                <NavbarButton>Log in</NavbarButton>
            </div>
        </Navbar>
    )
}

export default NavigationBar;