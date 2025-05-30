import React from 'react';
import './About.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    
    <body className={theme}>
    <div className={theme}>
        <h1 className='about-header'>ABOUT ME</h1>
        <div className='about-container'>
          <div className='about-card'>
            <h2>Bio</h2>
            <p>I'm a full-stack developer with expertise in crafting scalable, efficient, and secure applications.</p>
          </div>
          <div className='about-card'>
            <h2>Front-end</h2>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </div>
          <div className='about-card'>
            <h2>Back-end</h2>
            <li>Node.js</li>
            <li>Express</li>
            <li>Postgresql</li>
            <li>Prisma ORM</li>
            <li>Json Web Token</li>
          </div>
          <div className='about-card'>
            <h2>Security</h2>
            <p>Secure authentication with Passport.js and data protection best practices</p>
          </div>
          <div className='about-card'>
            <h2>Key Expertise</h2>
            <li>Full-stack development</li>
            <li>REST API design</li>
            <li>Database Optimization</li>
            <li>Authentication and security</li>
            <li>UI design and development</li>
          </div>
          <div className='about-card'>
            <h2>Education</h2>
            <li>The Odin Project</li>
            <li>Back-end Web Development(Udemy)</li>
          </div>
        </div>
      </div>
      <div>
        <footer className='about-footer'>
          <p className='copyright'>© All Copyright 
          2025 
          by MaryannMesh
          </p>
        </footer>
    </div> 
    {/* </div> */}
    </body>

    
  );
};

export default About;