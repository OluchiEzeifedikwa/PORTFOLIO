import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/ContactMe.jsx";
import Inventory from "./components/Inventory.jsx";
import Odinbook from "./components/Odinbook.jsx";
import Cloudfashion from "./components/Cloudfashion.jsx";
import { ThemeProvider } from './components/ThemeContext.jsx';
import './app.css';
import Content from './components/Content.jsx';

const App = () => {
  // const { theme } = useContext(ThemeContext);

  return (
  <ThemeProvider>
    {/* <body className={theme}> */}
    <BrowserRouter>
      <Navbar />
      <Content />      
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
    {/* </body> */}
  </ThemeProvider>

  );
}

export default App;