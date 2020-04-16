import React from 'react';
import airbnbLogoWhite from './pictures/airbnbLogoWhite.svg';
import { NavbarButton } from './components/Button';
import styled from 'styled-components';

const Navbar = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 25px 80px 0px 80px;
    box-sizing: border-box;
`
const LogoContainer = styled.div`
    height: 31px;
    width: 29px;
`

const NavigationBar = () => {

    return (
        <Navbar>
            <LogoContainer>
                <img src={airbnbLogoWhite} alt="Airbnb Logo"/>
            </LogoContainer>
            <div style={{lineHeight:"31px"}}>
                <NavbarButton>English (US)</NavbarButton>
                <NavbarButton>Host your home</NavbarButton>
                <NavbarButton>Host an experience</NavbarButton>
                <NavbarButton>Help</NavbarButton>
                <NavbarButton>Log in</NavbarButton>
                <NavbarButton>Sign up</NavbarButton>
            </div>
        </Navbar>
    )
}

export default NavigationBar;