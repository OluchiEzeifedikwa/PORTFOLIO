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
      <h1 className='home-header'>FULL STACK DEVELOPER</h1>
      <h2 className='pern-stack'></h2>
      <h2 className='pern-stack'><TypingEffect text='Postgresql | Express | React | Node.js' speed={250} /></h2>
      <div className='home-container'>
        <div className='home-card'>
          <img src={projectImage} alt="Project Image" />
          <p className={theme}>A web app for managing kitchen inventory, designed for retailers, warehouses and logistics firms. Designed with HTML, CSS, Express, Node.js
          Postgresql</p>
        </div>
        <div className='home-card'>
          <img src={projectImage2} alt="Project Image" />
          <p className={theme}>A social media app for users to connect, share content, and engage with others. Built with Express, Node.js, postgresql, prisma-orm, EJS, passport, bcrypt, Json Webtoken</p>
        </div>
        <div className='home-card'>
          <img src={projectImage3} alt="Project Image" />
          <p>A static website showing how to layout the admin dashboard</p>
        </div>
        <div>
          <footer className='home-footer'>
          <p className='copyright'>© All Copyright 2025 by MaryannMesh</p>
          </footer>
        </div>
      </div>
      </div>
    </div>
    </body>
  );
};

export default Home;