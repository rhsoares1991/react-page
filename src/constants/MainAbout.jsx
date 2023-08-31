import React from 'react';
import Aside from "../constants/Aside";
import Photo from "../assets/Layer 1.png";
import style from "./MainAbout.css";
import { IoDownloadOutline, IoCallOutline, IoMailOutline, IoPersonOutline, IoLocationOutline  } from "react-icons/io5";
import DoubleQuotes from "../assets/quotes.png";

const MainAbout = () => {
  return (
    <div className='home__content-wrapper'>
      <div className="app_About_profile">
        <div className="app__About_profile_left">
          <p>Nice to meet you!</p>
          <h2>WELCOME TO...</h2>
          <div className='app_About_profile-container'>      
              <img src={Photo} alt="" className='app__About_profile_picture'/>
          </div>
          <h2 className='app_About_profile-name'>ROGERIO SOARES</h2>
          <p><span>Front-End</span> Developer</p>
          <div className="app_About_profile-download">            
            <a href='#'>DOWNLOAD CV</a>
            <IoDownloadOutline />
          </div>
          
        </div>
        <div className="app_About_profile_right">
          <div className="app_About_top">
            <div className="app_About_profile_right-leftPart">              
              <div className="app__About_profile_right-number">
                <IoCallOutline className='app__About_profile-btn'/>
                <p>+44 77 4935 8248</p>                
              </div>

              <div className="app__About_profile_right-number">
                <IoMailOutline className='app__About_profile-btn'/>
                <p>rogeriohenriquelemos@gmail.com</p>              
              </div>
            </div>

            <div className="app_About_profile_right-rightPart">
              <div className="app__About_profile_right-number">
                <IoPersonOutline className='app__About_profile-btn'/>
                <p>31 yrs</p>              
              </div>

              <div className="app__About_profile_right-number">
                <IoLocationOutline className='app__About_profile-btn'/>
                <p>Campo Grande- MS BRAZIL</p>
                
              </div>
            </div>


          </div>
          <div className="app_About_profile-right-number">
            <div className="app_About_profile-texts">
              <h2 className='app_About_profile-text'>passionate about design</h2>
              <p>The best feeling is when I write the code and the design is perfect!</p>
            </div>
          </div>
          <div className="app_About_profile_efeito">
            <img src={DoubleQuotes} alt="" />
            <p>The details are not the details. They make the design.</p>
          </div>

          
        </div>
      </div>
      <Aside />
    </div>
  )
}
export default MainAbout