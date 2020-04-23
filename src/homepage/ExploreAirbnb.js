import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExploreBigContainer = styled.div`
    width: 100%;
    margin: 40px 0px; 40px; 0px;
`
const ExploreSmallContainer = styled.div`
    padding: 0px 80px 0px 80px;
    font-family: Airbnb Cereal App Book;
    color: #212121;
`
const ExploreCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
const ExploreCard = styled.div`
    background: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-grow: 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.02);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    overflow: hidden;
    margin: 0px 10px 0px 10px;
    cursor: pointer;
`
const ExploreCardImageContainer = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    height: 84px;
    width: 126px;
`
const ExploreCardDescription = styled.div`
    color: #323232;
    line-height: 84px;
    padding: 0px 16px 0px 24px;
`
const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    style: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const ExploreAirbnb = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/homepagedata")
            .then((results) => {
                setData(results.data.explore);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <ExploreBigContainer>
            <ExploreSmallContainer>
                <div>
                    <div style={{
                            alignContent:"left", 
                            height:"34px", 
                            width:"640px",
                            fontSize:"22px",
                            fontWeight:"900",
                            paddingLeft: "10px",
                            }}>
                        Explore Airbnb
                    </div>
                </div>
                <ExploreCardContainer>
                    {data.map((item, index) => 
                        <StyledLink to={`/${item.title}`} key={index}>
                            <ExploreCard>
                                <ExploreCardImageContainer background={item.imageUrl}/>
                                <ExploreCardDescription>
                                    {item.title}
                                </ExploreCardDescription>
                            </ExploreCard>
                        </StyledLink>
                    )}
                </ExploreCardContainer>
            </ExploreSmallContainer>
        </ExploreBigContainer>
    )
}

export default ExploreAirbnb;