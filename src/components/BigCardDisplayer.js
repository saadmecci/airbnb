import React from 'react';
import styled from 'styled-components/macro';

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
const BigCardDisplayer = (props) => (
    <AdventuresCardContainer>
        {props.data.map((item, index) => 
            <AdventuresCard key={index}>
                <AdventuresImage background={item.imageUrl}/>
                <AdventuresCountry>
                    {item.country}
                </AdventuresCountry>
                <AdventuresName>
                    {item.name}
                </AdventuresName>
                {item.time ? 
                    <AdventuresPriceTime>
                        ${item.price}/{item.unit} &bull; {item.time}
                    </AdventuresPriceTime>
                :
                    <AdventuresPriceTime>
                        ${item.price}/{item.unit}
                    </AdventuresPriceTime>
                }
                <AdventuresRating>
                    {item.rating}
                </AdventuresRating>
            </AdventuresCard>
        )}
    </AdventuresCardContainer>
)

export default BigCardDisplayer;