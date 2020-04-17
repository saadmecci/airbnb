import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    margin-top 32px;
    padding: 0px 80px 0px 80px;
    color: #484848;
`
const NameContainer = styled.div`
    margin-bottom: 5px;
    font-size: 12.5px;
    font-family: Airbnb Cereal App Medium;
`
const DescriptionContainer = styled.div`
    display: block;
    font-family: Airbnb Cereal App Bold;
`
const Heading = styled.h1`
    margin: 0px;
    font-size: 45px;
    line-height: 1.18;
    letter-spacing: 0.6px;
`

const Title = () => {
    return (
        <TitleContainer>
            <NameContainer>
                AIRBNB EXPERIENCES
            </NameContainer>
            <DescriptionContainer>
                <Heading>One-of-a-kind activities<br/>hosted by experts</Heading>
            </DescriptionContainer>
        </TitleContainer>
    )
}

export default Title;