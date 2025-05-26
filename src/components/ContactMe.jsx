import React from 'react';
import './ContactMe.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import TypingEffect from './TypingEffect';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
  <body className={theme}>
    {/* <div className='contact-card'> */}
    <div className={theme}>
      <h1 className='contact-header'>CONTACT ME</h1>
      <div className='contact-card'>
      <div className={theme}>
      <TypingEffect text="Please feel free to reach out to me on the channels below:" speed={250} /></div>
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
    </div>
  </body>    
  );
};

export default Contact;