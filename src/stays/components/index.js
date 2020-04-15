import React from 'react';
import RedStar from '../../pictures/redStar.svg';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const SmallCard = styled.div`
    padding-top: 8px;
    margin: 0px 10px 20px 0px;
    width: 19%;
    cursor: pointer;
`
const ImageContainer = styled.div`
    height: 162px;
    width: 243px;
    border-radius: 3px;
    overflow: hidden;
    box-sizing: border-box;
`
const CarouselImageDiv = styled.div`
    height: 163px;
    width: 100%;
    border-radius: 3px;
`
const InfoContainer = styled.div`
    margin: 14px 0px 4px 0px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
`
const StatusContainer = styled.div`
    padding: 1px 5px 1px 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #222222;
    border-radius: 4px;
    font-family: Airbnb Cereal App Medium;
    font-size: 12px;
    font-weight: 200;
`
const LocationContainer = styled.div`
    margin-left: 6px;
    color: #717171;
`
const RatingsContainer = styled.div`
    display: flex;
    padding-top: 2px;
`
const StarContainer = styled.div`
    height: 12px;
    width: 12px;
    margin-right: 3px;
`
const NumberContainer = styled.div`
    color: #222222;
`
const NameContainer = styled.div`
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: keep-all;
`
const PriceTimeContainer = styled.div`
    display: flex;
`
const PriceContainer = styled.div`
    font-family: Airbnb Cereal App Medium;
`
const TimeContainer = styled.div`
`

const CardDisplayer = (props) => (
    <CardsContainer>
        {props.data.map((item, index) => 
            <SmallCard key={index}>
                <ImageContainer>
                    <Carousel 
                        showStatus={false}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        <CarouselImageDiv>
                            <img src={item.imageUrl[0]} alt={item.location}/>
                        </CarouselImageDiv>
                        <CarouselImageDiv>
                            <img src={item.imageUrl[1]} alt={item.location}/>
                        </CarouselImageDiv>
                        <CarouselImageDiv>
                            <img src={item.imageUrl[2]} alt={item.location}/>
                        </CarouselImageDiv>
                        <CarouselImageDiv>
                            <img src={item.imageUrl[3]} alt={item.location}/>
                        </CarouselImageDiv>
                        <CarouselImageDiv>
                            <img src={item.imageUrl[4]} alt={item.location}/>
                        </CarouselImageDiv>
                    </Carousel>
                </ImageContainer>
                <InfoContainer>
                    {item.status !== null &&
                        <StatusContainer>
                            {item.status}
                        </StatusContainer>
                    }
                    <LocationContainer>
                        {item.location}
                    </LocationContainer>
                    <RatingsContainer>
                        <StarContainer>
                            <img src={RedStar} alt="red star"/>
                        </StarContainer>
                        <NumberContainer>
                            {item.rating}
                        </NumberContainer>
                    </RatingsContainer>
                </InfoContainer>
                <NameContainer>
                    {item.name}
                </NameContainer>
                <PriceTimeContainer>
                    <PriceContainer>
                        ${item.price}
                    </PriceContainer>
                    <TimeContainer>
                        &nbsp;/&nbsp;night
                    </TimeContainer>
                </PriceTimeContainer>
            </SmallCard>
        )}
    </CardsContainer>
)

export default CardDisplayer;