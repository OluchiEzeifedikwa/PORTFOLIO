import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <body className='container'>
      <div>
        <h1 className='home-header'>FULL STACK DEVELOPER(PERN STACK)</h1>
        <div className='home-container'>
          <div className='home-card'>
            <h2>PROGRAMMING</h2>
            <li>Building from the scratch</li>
            <li>Debugging and troubleshooting</li>
          </div>
          <div className='home-card'>
            <h2>WEB DEVELOPMENT</h2>
            <li>The web is constantly evolving</li>
            <li>It is a creative outlet</li>
            <li>Problem-solving</li>
          </div>
          <div className='home-card'>
            <h2>CODING</h2>
            <li>It is a form of creative expression</li>
            <li>It is a global language</li>
          </div>
          <div>
            <footer className='home-footer'>
              <p className='copyright'>© All Copyright 2025 by Mesh</p>
            </footer>
          </div>
        </div>
      </div>
    </body>
    
  );
};

export default Home;