import React from 'react';
import './MainWorks.css';
import { IoArrowForwardSharp } from "react-icons/io5";
import Logo from "../assets/mybs.png";
import { Link } from 'react-router-dom';


const MainWorks = () => {
  return (
    <div className='app__MainWorks_wrapper'>
        <h2>RECENT PROJECT</h2>
        <div className="app__MainWorks-container1">
            <Link to="https://github.com/rhsoares1991/dashboardmybusyness" className='links'>
                <div className="app__MainWorks-text">                
                    <p className='app__MainWorks-desciption'>Full Stack Application</p>
                    <h2 className='app__MainWorks-title'>My BusynessApp</h2>                    
                    <IoArrowForwardSharp className='arrow' />                    
                </div>
                <div className="app__MainWorks-photo">
                    <img src={Logo} alt="" />
                </div>
            </Link>

            <Link to="https://github.com/rhsoares1991/dashboardmybusyness" className='links'>
                <div className="app__MainWorks-text">                
                    <p className='app__MainWorks-desciption'>Full Stack Application</p>
                    <h2 className='app__MainWorks-title'>My BusynessApp</h2>                    
                    <IoArrowForwardSharp className='arrow' />                    
                </div>
                <div className="app__MainWorks-photo">
                    <img src={Logo} alt="" />
                </div>
            </Link>
        </div>
        <div className="app__MainWorks-container1">
            <Link to="https://github.com/rhsoares1991/dashboardmybusyness" className='links'>
                <div className="app__MainWorks-text">                
                    <p className='app__MainWorks-desciption'>Full Stack Application</p>
                    <h2 className='app__MainWorks-title'>My BusynessApp</h2>                    
                    <IoArrowForwardSharp className='arrow' />                    
                </div>
                <div className="app__MainWorks-photo">
                    <img src={Logo} alt="" />
                </div>
            </Link>

            <Link to="https://github.com/rhsoares1991/dashboardmybusyness" className='links'>
                <div className="app__MainWorks-text">                
                    <p className='app__MainWorks-desciption'>Full Stack Application</p>
                    <h2 className='app__MainWorks-title'>My BusynessApp</h2>                    
                    <IoArrowForwardSharp className='arrow' />                    
                </div>
                <div className="app__MainWorks-photo">
                    <img src={Logo} alt="" />
                </div>
            </Link>   
                  
        </div>
        <Link to="https://github.com/rhsoares1991/react-page">
        <div className='app_Main-buttonContainer'> 
            <button className='btn'>Visit my GitHub</button>   
        </div>
        </Link>
        
    </div>
  )
}

export default MainWorks