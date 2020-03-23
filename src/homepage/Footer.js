import React from 'react';
import styled from 'styled-components';
import { FooterButton } from '../components/Button';

const FooterBigContainer = styled.div`
    border-top-color: #DDDDDD;
    border-top-style: solid;
    border-top-width: 1px;
    display: block;
`
const FooterSmallContainer = styled.div`
    box-sizing: border-box;
    color: #484848;
    display: block;
    padding: 0px 90px 0px 90px;
    font-size: 13px;
`
const FooterTopSection = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 48px 0px 48px 0px;
    margin: 0px -12px 0px -12px;
`
const FooterTopSubsection = styled.div`
    display: block;
    flex-grow: 1;
`
const FooterBottomSection = styled.div`
    display: flex;
    padding: 24px 0px 24px 0px;
    border-top-color: #DDDDDD;
    border-top-style: solid;
    border-top-width: 1px;
    font-size: 14px;
`
const SectionHeader = styled.div`
    font-family: Airbnb Cereal App Bold;
    padding: 0px 6px 0px 6px;
`

const Footer = () => {
    return (
        <FooterBigContainer>
            <FooterSmallContainer>
                <FooterTopSection>
                    <FooterTopSubsection>
                        <SectionHeader>ABOUT</SectionHeader>
                        <FooterButton>Diversity &amp; Belonging</FooterButton>
                        <FooterButton>Accessibility</FooterButton>
                        <FooterButton>Trust &amp; Safety</FooterButton>
                        <FooterButton>Airbnb Citizen</FooterButton>
                        <FooterButton>Newsroom</FooterButton>
                    </FooterTopSubsection>
                    <FooterTopSubsection>
                        <SectionHeader>COMMUNITY</SectionHeader>
                        <FooterButton>Airbnb Magazine &amp; Belonging</FooterButton>
                        <FooterButton>Airbnb for Work</FooterButton>
                        <FooterButton>Invite Friends</FooterButton>
                        <FooterButton>Gift Cards</FooterButton>
                        <FooterButton>Careers</FooterButton>
                    </FooterTopSubsection>
                    <FooterTopSubsection>
                        <SectionHeader>HOST</SectionHeader>
                        <FooterButton>Host your home</FooterButton>
                        <FooterButton>Host an experience</FooterButton>
                        <FooterButton>Responsible hosting</FooterButton>
                        <FooterButton>Open Homes</FooterButton>
                        <FooterButton>Olympics</FooterButton>
                        <FooterButton>Resource Center</FooterButton>
                    </FooterTopSubsection>
                    <FooterTopSubsection>
                        <SectionHeader>SUPPORT</SectionHeader>
                        <FooterButton>Help Center</FooterButton>
                        <FooterButton>Neighborhood Support</FooterButton>
                    </FooterTopSubsection>
                </FooterTopSection>
                <FooterBottomSection>
                    &copy; 2020 Airbnb, Inc. All Rights Reserved
                </FooterBottomSection>
            </FooterSmallContainer>
        </FooterBigContainer>
    )
}

export default Footer;