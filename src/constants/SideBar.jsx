import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { IoHomeOutline, IoPersonOutline, IoHammerOutline, IoCodeWorking, IoCallOutline, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin  } from "react-icons/io5";
import style from "./SideBar.css";
import { Link } from "react-router-dom";
import { PiStackSimpleLight } from 'react-icons/pi'

const SideBar = () => {
  return (
    <Menu>      
        <header className="sidebarheader">    
          <h2>ROGERIO<span className="dot-app">.</span></h2>
        </header>
        <div className="app_sideBar-button" role='navigation'>
          <Link to="/"  className='app__container_links'>
            <IoHomeOutline className="side__icon" />
            <p>HOME</p>
          </Link>

          <Link to="/About" className='app__container_links'>            
            <IoPersonOutline className="side__icon" />
            <p>ABOUT</p>
          </Link>

          <Link to="/Services" className='app__container_links'>
            <PiStackSimpleLight className="side__icon" />
            <p>STACKS</p>
          </Link>

          <Link to="/Works" className='app__container_links'>
            <IoCodeWorking className="side__icon"/>
            <p>WORKS</p>
          </Link>

          <Link to="/Contact" className='app__container_links'>
            <IoCallOutline className="side__icon" />
            <p>CONTACT</p>
          </Link>
        </div>
        <div className="app__sideBar_socialContainer">
          <Link to="https://instagram.com/rogeriohenriquess">
            <IoLogoInstagram className='app__sideBar_icons'/>
          </Link>

          <Link to="https://github.com/rhsoares1991">
            <IoLogoGithub className='app__sideBar_icons'/>
          </Link>
          
          <Link to="https://www.linkedin.com/in/rog%C3%A9rio-henrique-soares-50b776129">
            <IoLogoLinkedin className='app__sideBar_icons'/>
          </Link>
        </div>
        
      
    </Menu>
  )
}

export default SideBar;


