import React from 'react';
import FAQItem from './FAQItem'; // Importe o componente
import './FAQSection.css';
import { IoAdd } from 'react-icons/io5';



const FAQSection = () => {
  const faqData = [
    {
      question: 'Languages Knowledge ',
      answer: 'ReactJS ,NodeJS(basic), Typescript(basic), NestJS, GIT, RestAPI, Express, UI Design, Responsive Web App, JavaScript, GitHub, MongoDB, Redux, React Router, Styled Components.  ',
    },
    {
      question: 'HTML/CSS',
      answer: 'HTML5, CSS3, Semantic HTML, FlexBox, CSS Grid, Bootstrap, Sass, Querys, ',
    },
    {
      question: 'Design Knowledge',
      answer: 'Figma, Photoshop, LightRoom, UI/UI',
    },
    {
      question: 'Extra',
      answer: 'Knowledge in creating and managing brands, extensive experience in commerce, excellent communication and ease of learning',
    },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  return (
    <div className="faq-section">
      <h2>My Specialties</h2>

      
        <div className="faq-list">
          {faqData.map((item, index) => (
           <div className="faq-box">
            <FAQItem key={index} question={item.question} answer={item.answer} />                
          </div>
                      
          
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
