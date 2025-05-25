import React from 'react';
import './Home.css';
import projectImage from './home.jpg';
import projectImage2 from './odinbook.jpg';
import projectImage3 from './dashboard.jpg';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
  <body className='container'>
  <div className={theme}>
    <div>
      <h1 className='home-header'>FULL STACK DEVELOPER(PERN STACK)</h1>
      <h2><i>Hi! I'm MaryannMesh</i></h2>
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