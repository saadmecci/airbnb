import React from 'react';
import Navbar from './components/Navbar';
import airbnbLogo from './pictures/airbnb_logo.svg';
import Button from './components/Button';

const NavigationBar = () => {
    return (
        <Navbar style={{color:"#ffffff"}}>
            <div className="airbnb-logo">
                <img src={airbnbLogo} alt="Airbnb Logo"/>
            </div>
            <div className="button-container">
                <Button>English (US)</Button>
                <Button>$ USD</Button>
                <Button>Host a home</Button>
                <Button>Host an experience</Button>
                <Button>Help</Button>
                <Button>Sign up</Button>
                <Button>Log in</Button>
            </div>
        </Navbar>
    )
}

export default NavigationBar;