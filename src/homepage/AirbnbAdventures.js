import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import BigCardDisplayer from '../components/BigCardDisplayer';

const AdventuresBigContainer = styled.div`
    padding: 0px 80px 0px 80px;
    margin-bottom: 80px;
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
                <AdventuresTitleContainer>
                    Introducing Airbnb Adventures
                </AdventuresTitleContainer>
                <AdventuresDescriptionContainer>
                    Multi-day trips led by local experts &mdash; activites, meals, and stays included.
                </AdventuresDescriptionContainer>
                <BigCardDisplayer data={data}/>
            </AdventuresSmallContainer>
        </AdventuresBigContainer>
    )
}

export default AirbnbAdventures;