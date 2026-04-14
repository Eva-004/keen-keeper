import React from 'react';
import Banner from './Banner/Banner';
import AllFriends from './allFriends/AllFriends';

const HomePage = () => {
    return (
        <div className='bg-base-200 py-20'>
            <Banner></Banner>
            <AllFriends></AllFriends>
        </div>
    );
};

export default HomePage;