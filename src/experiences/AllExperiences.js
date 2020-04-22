import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BigCardDisplayer from '../components/BigCardDisplayer';

const AdventuresContainer = styled.div`
    padding: 0px 80px 0px 80px;
    margin: 40px 0px 160px 0px;
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

const AllExperiences = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/homepagedata")
            .then((results) => {
                setData(results.data.topRated);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <AdventuresContainer>
            <AdventuresTitleContainer>
                Experiences from around the world
            </AdventuresTitleContainer>
            <AdventuresDescriptionContainer>
                Experiences conducted by top rated local experts from around the world.
            </AdventuresDescriptionContainer>
            <BigCardDisplayer data={data}/>
        </AdventuresContainer>
    )
}

export default AllExperiences;