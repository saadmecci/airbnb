import React from 'react';
import airbnbLogoRed from './pictures/airbnbLogoRed.svg';
import { NavbarButton2 } from './components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
    height: 80px;
    color: #747474;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px 80px 0px 80px;
    box-sizing: border-box;
    border-bottom-color: #DDDDDD;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
`
const LogoContainer = styled(Link)`
    height: 31px;
    width: 29px;
    cursor: pointer;
`

const NavigationBar2 = () => {

    return (
        <Navbar>
            <LogoContainer to={`/`}>
                <img src={airbnbLogoRed} alt="Airbnb Logo"/>
            </LogoContainer>
            <div style={{lineHeight:"31px"}}>
                <NavbarButton2>English (US)</NavbarButton2>
                <NavbarButton2>$ USD</NavbarButton2>
                <NavbarButton2>Help</NavbarButton2>
                <NavbarButton2>Sign up</NavbarButton2>
            </div>
        </Navbar>
    )
}

export default NavigationBar2;