import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AdventuresBigContainer = styled.div`
    padding: 0px 80px 0px 80px;
    margin-bottom: 150px;
`
const AdventuresSmallContainer = styled.div`
    margin: 40px 0px 40px 0px;
`
const AdventuresTitleContainer = styled.div`
    font-family: Airbnb Cereal App Book;
    font-size: 22px;
    font-weight: 900;
    line-height: 26px;
    padding-left: 8px;
`
const AdventuresDescriptionContainer = styled.div`
    margin: 5px 0px 5px 0px;
    padding-left: 8px;
`
const AdventuresCardContainer = styled.div`
    display: flex;
    margin: 20px 0px 12px 0px;
`
const AdventuresCard = styled.div`
    margin: 8px;
    cursor: pointer;
    width: 20%;
`
const AdventuresImage = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    margin-bottom: 12px;
    border-radius: 8px;
    min-height: 230px;
    height: 100%;
    width: 100%;
`
const AdventuresCountry = styled.div`
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 6px;
    font-family: Airbnb Cereal App Medium;
`
const AdventuresName = styled.div`
    font-size: 16px;
    line-height: 20px;
`
const AdventuresPriceTime = styled.div`
    font-size: 16px;
    line-height: 20px;
    margin-top: 6px;
`
const AdventuresRating = styled.div`
    font-size: 14px;
    line-height: 18px;
    margin-top: 2px;
`

const AirbnbAdventures = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/homepagedata")
            .then((results) => {
                setData(results.data.airbnbAdventures);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <AdventuresBigContainer>
            <AdventuresSmallContainer>
                <div style={{display:"block"}}>
                    <div style={{width:"50%"}}>
                        <AdventuresTitleContainer>
                            Introducing Airbnb Adventures
                        </AdventuresTitleContainer>
                        <AdventuresDescriptionContainer>
                            Multi-day trips led by local experts &mdash; activites, meals, and stays included.
                        </AdventuresDescriptionContainer>
                    </div>
                </div>
                <AdventuresCardContainer>
                    {data.map((item, index) => 
                        <AdventuresCard key={index}>
                            <AdventuresImage background={item.imageUrl}/>
                            <AdventuresCountry>
                                {item.country}
                            </AdventuresCountry>
                            <AdventuresName>
                                {item.name}
                            </AdventuresName>
                            <AdventuresPriceTime>
                                ${item.price}/{item.unit} &bull; {item.time}
                            </AdventuresPriceTime>
                            <AdventuresRating>
                                {item.rating}
                            </AdventuresRating>
                        </AdventuresCard>
                    )}
                </AdventuresCardContainer>
            </AdventuresSmallContainer>
        </AdventuresBigContainer>
    )
}

export default AirbnbAdventures;