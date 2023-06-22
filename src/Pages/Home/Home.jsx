import React from 'react';
import CategoryLine from '../../COmponents/CategoryLine/CategoryLine';
import RoomCard from '../../COmponents/Room/RoomCard';

const Home = () => {
    return (
        <div className='container mx-auto'>
          <CategoryLine></CategoryLine> 
          <RoomCard></RoomCard>           
        </div>
    );
};

export default Home;