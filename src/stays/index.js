import React from 'react';
import FilterBar from './FilterBar';
import Travel from './Travel';
import TopRatedStays from './TopRatedStays';
import AllStays from './AllStays';

const Stays = () => {
    return (
        <>
        <FilterBar/>
        <Travel/>
        <TopRatedStays/>
        <AllStays/>
        </>
    )
}

export default Stays;