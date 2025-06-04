import React from 'react';

const Inventory = () => {
  return (
    <div className='inventory'>
      <div>
      <h1>Inventory Application</h1>
      <p>A web app for collection of kitchen items, basically for retailers, warehouses and logistics firms.</p>
      </div>
      <div className='inventory-div'>
      <h2>Skills</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>Express/Node.js</li>
        <li>Postgresql</li>
      </div>
      <a href="https://odin-inventory-application-qlkz.onrender.com/items">Live Demo</a>
    </div>
  );
};

export default Inventory;