import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import CardDisplayer from './components';

const TopBigContainer = styled.div`
    display: block;
    padding: 0px 80px 0px 80px;
`
const TopSmallContainer = styled.div`
    display: block;
    margin: 40px 0px 40px 0px;
`
const TopContainerHeader = styled.div`
    margin-bottom: 16px;
`
const TopTitleContainer = styled.div`
    font-family: Airbnb Cereal App Book;
    font-weight: 600;
    color: #222222;
    font-size: 22px;
`
const TopDescriptionContainer = styled.div`
    margin-top: 4px;
`

const TopRatedStays = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/staysdata")
            .then((results) => {
                setData(results.data.topRated);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return(
        <TopBigContainer>
            <TopSmallContainer>
                <TopContainerHeader>
                    <TopTitleContainer>
                        Top-rated places to stay
                    </TopTitleContainer>
                    <TopDescriptionContainer>
                        Explore some of the best-reviewed stays in the world
                    </TopDescriptionContainer>
                </TopContainerHeader>
                <CardDisplayer data={data}/>
            </TopSmallContainer>
        </TopBigContainer>
    )
}

export default TopRatedStays;