import React from 'react';
import Aside from '../constants/Aside';
import MainHome from '../constants/MainHome';
import './Home.css';

const Home = () => {
  return (
    <div className='app__Home'>
      <div className='home__content-wrapper'>
        <Aside />
        <MainHome />
      </div>
    </div>
  );
}

export default Home;

