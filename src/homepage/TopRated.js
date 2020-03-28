import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardDisplayer from './components';

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

const TopRated = () => {

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
        <AdventuresBigContainer>
            <AdventuresSmallContainer>
                <div style={{display:"block"}}>
                    <div style={{width:"50%"}}>
                        <AdventuresTitleContainer>
                            Top Rated Experiences
                        </AdventuresTitleContainer>
                        <AdventuresDescriptionContainer>
                            Experiences conducted by top rated local experts from around the world.
                        </AdventuresDescriptionContainer>
                    </div>
                </div>
                <CardDisplayer data={data}/>
            </AdventuresSmallContainer>
        </AdventuresBigContainer>
    )
}

export default TopRated;