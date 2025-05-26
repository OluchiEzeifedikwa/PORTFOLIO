import React from 'react';
import './Home.css';
import projectImage from './home.jpg';
import projectImage2 from './odinbook.jpg';
import projectImage3 from './dashboard.jpg';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import TypingEffect from './TypingEffect';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
  <body className={theme}>
  <div className={theme}>
    <div>
      <h1 className='home-header'>FULL STACK DEVELOPER (PERN STACK)</h1>
      <TypingEffect text='Hi! I am Oluchi. Let me walk you through my portfolio' speed={250} /> 
      <div className='home-container'>
        <div className='home-card'>
          <img src={projectImage} alt="Project Image" />
        </div>
        <div className='home-card'>
          <img src={projectImage2} alt="Project Image" />
        </div>
        <div className='home-card'>
          <img src={projectImage3} alt="Project Image" />
        </div>
        <div>
          <footer className='home-footer'>
          <p className='copyright'>© All Copyright 2025 by Mesh</p>
          </footer>
        </div>
      </div>
      </div>
    </div>
    </body>
  );
};

export default Home;