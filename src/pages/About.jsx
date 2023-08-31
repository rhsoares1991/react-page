import React from 'react'
import MainAbout from '../constants/MainAbout'
import SideBar from '../constants/SideBar';
import style from './About.css';
import Aside from '../constants/Aside';

const About = () => {
  return (
    <div className='about__content-wrapper'>
      
      <MainAbout />
      <Aside />
      
    </div>
  )
}

export default About


