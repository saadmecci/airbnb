import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardDisplayer from './components';

const StaysBigContainer = styled.div`
    display: block;
    padding: 0px 80px 0px 80px;
`
const StaysSmallContainer = styled.div`
    display: block;
    margin: 40px 0px 40px 0px;
`
const StaysTitleContainer = styled.div`
    margin-bottom: 16px;
    font-family: Airbnb Cereal App Book;
    font-weight: 600;
    color: #222222;
    font-size: 22px;
`

const AllStays = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios.get("http://localhost:5000/staysdata")
            .then((results) => {
                setData(results.data.placesToStay);
            })
            .catch((error) => {
                throw error;
            });
        }
        getData();
    }, []);

    return (
        <StaysBigContainer>
            <StaysSmallContainer>
                <StaysTitleContainer>
                    All stays
                </StaysTitleContainer>
                <CardDisplayer data={data}/>
            </StaysSmallContainer>
        </StaysBigContainer>
    )
}

export default AllStays;