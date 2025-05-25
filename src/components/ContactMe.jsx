import React from 'react';
import './ContactMe.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import TypingEffect from './TypingEffect';

const Contact = () => {
  return (
  <body className='container'>
    <div className='contact-card'>
      <h1>CONTACT ME</h1>
      <TypingEffect text="Please feel free to reach out to me on the channels below:" speed={500} />
      <a href="https://github.com/OluchiEzeifedikwa"><FaGithub /></a>
      <a href="http://linkedin.com/in/oluchi-ezeifedikwa-80b8a51a9"><FaLinkedin /></a>
      <a href="oluchiezeifedikwa@gmail.com"><FaEnvelope /></a>
    </div>
    <div>
      <footer className='contact-footer'>
        <p className='copyright'>© All Copyright 
          2025 
          by Mesh
        </p>
      </footer>
    </div> 
  </body>    
  );
};

export default Contact;