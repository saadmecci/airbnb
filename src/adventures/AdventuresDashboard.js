import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    height: 480px;
    max-height: 100%;
    max-width: 100%;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-repeat: no-repeat;
`
const Heading = styled.div`
    color: white;
    padding: 140px 80px 0px 80px;
    position absolute;
`
const Introducing = styled.div`
    font-size: 14px;
    font-family: Airbnb Cereal App Medium;
`
const Title = styled.div`
    font-size: 50px;
    font-family: Airbnb Cereal App Bold;
`
const Description = styled.div`
    font-size: 23px;
    font-family: Airbnb Cereal App Light;
`

const AdventuresDashboard = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/adventuresdata")
            .then((results) => {
                setData(results.data.dashboard);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <DescriptionContainer background={data.imageUrl}>
            <Heading>
                <Introducing>
                    INTRODUCING
                </Introducing>
                <Title>
                    Airbnb Adventures
                </Title>
                <Description>
                    Multi-day trips led by local experts &mdash;<br/>
                    activities, meals, and stays included.
                </Description>
            </Heading>
        </DescriptionContainer>
    )
}

export default AdventuresDashboard;