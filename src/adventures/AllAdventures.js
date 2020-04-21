import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BigCardDisplayer from '../components/BigCardDisplayer';

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
    padding-left: 8px;
`

const AllAdventures = () => {

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
                    Popular adventures from around the world
                </AdventuresTitleContainer>
                <BigCardDisplayer data={data}/>
            </AdventuresSmallContainer>
        </AdventuresBigContainer>
    )
}

export default AllAdventures;