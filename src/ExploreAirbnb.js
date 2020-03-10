import React from 'react';
import styled from 'styled-components';
import staysPicture from './pictures/staysPicture.jpg';
import experiencesPicture from './pictures/experiencesPicture.jpg';
import adventuresPicture from './pictures/adventuresPicture.jpg';

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
`
const ExploreCardImageContainer = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    height: 84px;
    width: 126px;
`
const ExploreCardDescription = styled.div`
    line-height: 84px;
    padding: 0px 16px 0px 24px;
`

const ExploreAirbnb = () => {
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
                <ExploreCard>
                    <ExploreCardImageContainer background={staysPicture}/>
                    <ExploreCardDescription>
                        Stays
                    </ExploreCardDescription>
                </ExploreCard>
                <ExploreCard>
                    <ExploreCardImageContainer background={experiencesPicture}/>
                    <ExploreCardDescription>
                        Experiences
                    </ExploreCardDescription>
                </ExploreCard>
                <ExploreCard>
                    <ExploreCardImageContainer background={adventuresPicture}/>
                    <ExploreCardDescription>
                        Adventures
                    </ExploreCardDescription>
                </ExploreCard>
                </ExploreCardContainer>
            </ExploreSmallContainer>
        </ExploreBigContainer>
    )
}

export default ExploreAirbnb;