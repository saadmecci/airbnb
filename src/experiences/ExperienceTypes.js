import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div`
    padding: 0px 80px 0px 80px;
    margin-top: 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`
const Card = styled.div`
    margin: 4px 6px 0px 0px;
    cursor: pointer;
`
const CardImage = styled.div`
    width: 413px;
    height: 276px;
    border-radius: 8px;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    overflow: hidden;
`
const CardBanner = styled.div`
    margin-top: 10px;
    color: #484848;
`
const CardTitle = styled.div`
    font-size: 18px;
    font-family: Airbnb Cereal App Medium;
`
const CardDescription = styled.div`
    margin-top: 4px;
    font-size: 14px;
    width: 400px;
    color: #717171;
`

const ExperienceTypes = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/experiencesData")
            .then((results) => {
                setData(results.data.types);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <CardContainer>
            {data.map((item, index) => 
                <Card key={index}>
                    <CardImage background={item.imageUrl}/>
                    <CardBanner>
                        <CardTitle>
                            {item.name}
                        </CardTitle>
                        <CardDescription>
                            {item.description}
                        </CardDescription>
                    </CardBanner>
                </Card>
            )}
        </CardContainer>
    )
}

export default ExperienceTypes;