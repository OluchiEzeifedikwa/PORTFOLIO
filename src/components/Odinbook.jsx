import React from 'react';
import './Odinbook.css';

const Odinbook = () => {
  return (
    <body className='odin'>
      <h1>Odin Book</h1>
      <p>A social media app for connecting, sharing content such as posts, comments and likes, specifically to keep in touch with others.</p>
      <h2>Skills</h2>
      <div className='odin-list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>EJS</li>
        <li>Bcrypt</li>
        <li>Passport</li>
        <li>Postgresql</li>
        <li>Prisma ORM</li>
        <li>Json Webtoken</li>
        <h2>Live Demo</h2>
        <a href="https://odin-book-aivj.onrender.com/home">Live Demo</a>

      </div>
    </body>
  );
};

export default Odinbook;