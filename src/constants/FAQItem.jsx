import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import './FAQItem.css'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <ul>
        <li>
          <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
            {question}
            <div className='FAQ__add-container'> 
              <IoAdd className='app__icon'/>
            </div>
            
          </div>
          {isOpen && <div className="faq-answer">{answer}</div>}
        </li>
      </ul>
    </div>
  );
};

export default FAQItem;
