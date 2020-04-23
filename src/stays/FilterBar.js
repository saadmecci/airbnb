import React from 'react';
import styled from 'styled-components/macro';
import { FilterButton } from '../components/Button';

const FilterBarBigContainer = styled.div`
    display: block;
    padding: 25px 0px 7px 0px;
`
const FilterBarSmallContainer = styled.div`
    padding-left: 80px;
    line-height: 20px;
`

const FilterBar = () => {
    return (
        <>
        <FilterBarBigContainer>
            <FilterBarSmallContainer>
                <FilterButton>Cancellation flexibility</FilterButton>
                <FilterButton>Type of place</FilterButton>
                <FilterButton>Price</FilterButton>
                <FilterButton>Instant Book</FilterButton>
                <FilterButton>More filters</FilterButton>
            </FilterBarSmallContainer>
        </FilterBarBigContainer>
        </>
    )
}

export default FilterBar;