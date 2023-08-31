import React from 'react';
import Aside from '../constants/Aside';
import MainHome from '../constants/MainHome';
import './Home.css';

const Home = () => {
  return (
      <div className='home__content-wrapper'>        
        <MainHome />
        <Aside />
      </div>
  );
}

export default Home;

