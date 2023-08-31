import React from 'react';
import Aside from '../constants/Aside';
import Form from '../constants/Form.jsx';
import "./Contact.css";


const Contact = () => {
  return (
    <div className='container__main'>
      <div className="mainContact">
        <div className='mainContact-textArea'>
          <h2 className='mainContact-textArea-title'>REACH OUT ME</h2>
          <p className='mainContact-textArea-adress'>855, Marechal Floriano, 79006-440, Campo Grande BR</p>
          <p className='ops'>I am currently living in London UK, but moving soon to Brazil</p>
          <div className="mainContact-textArea_mail">
            <h2>+44 77 4935 8248</h2>
            <h2 className='mail'>rogeriohenriquelemos@gmail.com</h2>
          </div>
          <div className="mainContact-textArea-links">
            <a href="https://instagram.com/rogeriohenriquess">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/rog%C3%A9rio-henrique-soares-50b776129">LINKEDIN</a>
            <a href="https://github.com/rhsoares1991">GITHUB</a>
          </div>
        </div>
        
        <Form />

      </div>
      <Aside />
      
    </div>
  )
}

export default Contact