import React from 'react';
import style from "../constants/MainHome.css";
import Photo from "../assets/Layer 1.png";
import { Form, Link } from 'react-router-dom';
import Contact from '../pages/Contact';
import { IoCallOutline, IoMailOpenOutline, IoSendSharp } from 'react-icons/io5';
import star from "../assets/star 4.png"
import decoration5 from "../assets/Elements.png"


const MainHome = () => {
  return (
    
        <div className="app_Home_Main">
          <div className="app__Home_Main-text"> 
            <div className='decoration1' />        
            <h2 className="app__Home_Main-text_description">MY NAME IS  <span> ROGERIO SOARES</span></h2>            
            <p className='description2'><span>Front-End Developer</span> based in Brazil</p>
            <Link to="/Contact">
                <button className='app__btn'>
                    <p>Let’s talk with me</p>
                    <IoSendSharp className='app_btn_icon'/>
                </button>
            </Link>
            <div className="app_main_contactInfo">
                <div className="icons_app">
                  <IoCallOutline />
                  <p>+77 044 7935 8248</p>
                </div>
                <div className="icons_app">
                  <IoMailOpenOutline />
                  <p>rogeriohenriquelemos@gmail.com</p>
                </div>
                
                
            </div>
            
            
          </div>
          <div className='app__home_Main-Photo'>
                                
            <img src={Photo} alt="" className='photo' />
            <img src={star} alt="" className='decoration7' />
            <img src={star} alt="" className='decoration8' />
            <img src={decoration5} alt="" className='decoration6' /> 
          </div>
      </div>

  )
}

export default MainHome