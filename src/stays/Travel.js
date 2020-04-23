import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

const TravelBigContainer = styled.div`
    display: block;
    font-family: Airbnb Cereal App Book;
    font-weight: 600;
`
const TravelSmallContainer = styled.div`
    margin: 40px 0px 40px 0px;
    padding: 0px 80px 0px 80px;
`
const TravelTitleContainer = styled.div`
    color: #222222;
    font-size: 22px;
    margin-bottom: 12px;
`
const TravelCardsContainer = styled.div`
    margin: 8px 0px 8px 0px;
    display: flex;
    justify-content: space-between;
`
const TravelCard = styled.div`
    margin: 4px 6px 8px 0px;
    border-right-width: 5px;
    border-left-width: 5px;
    cursor: pointer;
    width: 13%;
    border-width: 0px 5px 0px 5px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    overflow: hidden;
`
const TravelCardPicture = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    width: 168px;
    height: 112px;
`
const TravelCardTitle = styled.div`
    font-size: 14px;
    padding: 16px;
`

const Travel = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/staysdata")
            .then((results) => {
                setData(results.data.travelTheWorld);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <TravelBigContainer>
            <TravelSmallContainer>
                <TravelTitleContainer>
                    Travel the world with Airbnb
                </TravelTitleContainer>
                <TravelCardsContainer>
                {data.map((item, index) =>
                    <TravelCard key={index}>
                        <TravelCardPicture background={item.imageUrl}/>
                        <TravelCardTitle>
                            {item.city}
                        </TravelCardTitle>
                    </TravelCard>
                )}
                </TravelCardsContainer>
            </TravelSmallContainer>
        </TravelBigContainer>
    )
}

export default Travel;