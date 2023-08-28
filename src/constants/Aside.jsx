
import React from "react";
import { IoHomeOutline, IoHammerOutline, IoPersonOutline, IoCodeWorking, IoCallOutline  } from "react-icons/io5";
import SideBar from "./SideBar";
import style from "./Aside.css";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Works from "../pages/Works";

function Aside() {
  return (
    <div className='app_aside'>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />           
      <p className="aside__logo">ROGERIO<span>.</span></p>
      <div className="aside__icons-navigation">
        <Link to="/">
          <IoHomeOutline className="aside__icon" />
        </Link>
        <Link to="/About">
          <IoPersonOutline className="aside__icon" />
        </Link>
        <Link to="/Services">
          <IoHammerOutline className="aside__icon" />
        </Link>
        <Link to="/Works">
          <IoCodeWorking className="aside__icon"/>
        </Link>
        <Link to="/Contact">
          <IoCallOutline className="aside__icon" />
        </Link>  
      </div>
    </div>
  );
}

export default Aside;
