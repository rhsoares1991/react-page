import React from "react";
import { IoHomeOutline, IoHammerOutline, IoPersonOutline, IoCodeWorking, IoCallOutline, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin  } from "react-icons/io5";
import SideBar from "./SideBar";
import style from "./Aside.css";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Works from "../pages/Works";
import { PiStackSimpleLight } from 'react-icons/pi';

function Aside() {
  return (
    <div className='app_aside'>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />           
      <p className="aside__logo">ROGERIO<span>.</span></p>
      <div className="aside__icons-navigation">
        <Link to="/" className="app__icons_box">
          <IoHomeOutline className="aside__icon" />
          <p>Home</p>
        </Link>
        <Link to="/About" className="app__icons_box">
          <IoPersonOutline className="aside__icon" />
          <p>About</p>
        </Link>
        <Link to="/Services" className="app__icons_box">
          <PiStackSimpleLight className="aside__icon" />
          <p>Stacks</p>
        </Link>
        <Link to="/Works" className="app__icons_box">
          <IoCodeWorking className="aside__icon"/>
          <p>Works</p>
        </Link>
        <Link to="/Contact" className="app__icons_box">
          <IoCallOutline className="aside__icon" />
          <p>Contact</p>
        </Link>  
      </div>
    </div>
  );
}

export default Aside;
