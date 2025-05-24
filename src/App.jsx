import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/ContactMe.jsx";
import Inventory from "./components/inventory.jsx";
import Odinbook from "./components/odinbook.jsx";
import Cloudfashion from "./components/cloudfashion.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/odinbook" element={<Odinbook />} />
          <Route path="/cloudfashion" element={<Cloudfashion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;