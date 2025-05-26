import React from 'react';
import './inventory.css';

const Inventory = () => {
  return (
    <body>

    <div className='inventory'>
      <div>
      <h1>Inventory Application</h1>
      <p>A web app for collection of kitchen items, basically for retailers, warehouses and logistics firms.</p>
      </div>

      <div className='features-div'>
      <h2>Skills</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>Express/Node.js</li>
        <li>Postgresql</li>
      </div>
      <h2>Live Demo</h2>
      <a href="https://odin-inventory-application-qlkz.onrender.com/">Live Demo</a>
    </div>
    </body>
  );
};

export default Inventory;