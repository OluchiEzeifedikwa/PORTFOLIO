import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const Project = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body className='container'>
    <div className={theme}>
      <div>
        <h1 className='project-header'>PROJECTS</h1>
        <div className='projects-container'> 
        <div className='project-card'>
          <h2>INVENTORY APP</h2>
          <Link to="/inventory" className='project-link'>View Project Details</Link>
        </div>
        <div className='project-card'>
          <h2>THE ODIN BOOK</h2>
          <Link to="/odinbook" className='project-link'>View Project Details</Link>
        </div>
        <div className='project-card'>
          <h2>CLOUD FASHION</h2>
          <Link to="/cloudfashion" className='project-link'>View Project Details</Link>
        </div>
        <div>
          <footer className='about-footer'>
            <p className='copyright'>© All Copyright 2025 by Mesh</p>
          </footer>
        </div> 
      </div>
    </div>
    </div>
    </body>
  );
};

export default Project;

