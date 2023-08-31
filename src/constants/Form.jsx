import React from 'react';
import './Form.css';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sucess = document.querySelector("#sucess")

  function sendEmail(e) {
      e.preventDefault();

      if (name === "" || email === "" || message === "") {
          alert("Preencha todos os campos");
          return;
      }

      const templateParams = {
          from_name: name,
          message: message,
          email: email,
      };

      emailjs.send("service_xk18tbg", "template_7jtx4cq", templateParams, "QVyXwXRwI6oY5Kfdt")
          .then((response) => {
              console.log("email enviado", response.status, response.text);
              setName("");
              setEmail("");
              setMessage("");
              sucess.setAttribute("style","display:flex")
          })
          .catch((err) => {
              console.log("erro", err);
          });
  }

  return (
      <div className="container">
        <h2 id='sucess'>I'll return your contact soon!</h2>
        <div className="contain_container">
          <h1 className="title">Any Project?</h1>

          <form className="form" onSubmit={sendEmail}>
              <input
                  className="input"
                  type="text"
                  placeholder="NAME"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
              />

              <input
                  className="input"
                  type="email"
                  placeholder="EMAIL"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
              />

              <textarea
                  className="textarea"
                  placeholder="MESSAGE"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  
              />

              <input className="button" type="submit" value="Send" />
          </form>
        </div>
          
      </div>
  );
};

export default Form;
