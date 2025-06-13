import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/ContactMe.jsx';
import Projects from './components/Projects.jsx';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Inventory from "./components/inventory.jsx";
import Odinbook from "./components/Odinbook.jsx";
import Todolist from './components/Todolist.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.className = storedTheme === 'light' ? 'light-mode' : 'dark-mode';
    } else {
      const hour = new Date().getHours();
      if (hour >= 18 || hour < 6) {
        setTheme('dark');
        document.body.className = 'dark-mode';
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme === 'light' ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme === 'light' ? 'light' : 'dark'} expand="lg" sticky="top" className="shadow-sm">
          <Container fluid className="d-flex justify-content-between">
            <Navbar.Brand as={Link} to="/" className="me-auto fw-bold fs-4">MaryannMesh</Navbar.Brand>
            {/* <Navbar.Brand as={Link} to="/" className="me-auto fw-bold fs-5 fs-md-4">MaryannMesh</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="d-flex align-items-center">
                <Nav.Link as={Link} to="/" className={`fw-bold fs-5 nav-link-custom ${theme === 'light' ? 'text-dark' : 'text-light'}`}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className={`fw-bold fs-5 nav-link-custom ${theme === 'light' ? 'text-dark' : 'text-light'}`}>About</Nav.Link>
                <Nav.Link as={Link} to="/projects" className={`fw-bold fs-5 nav-link-custom ${theme === 'light' ? 'text-dark' : 'text-light'}`}>Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact" className={`fw-bold fs-5 nav-link-custom ${theme === 'light' ? 'text-dark' : 'text-light'}`}>Contact</Nav.Link>
                <div className="ms-3" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                  {theme === 'light' ? <span style={{ fontSize: '24px' }}>🌓</span> : <span style={{ fontSize: '24px' }}>🔆</span>}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/odinbook" element={<Odinbook />} />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;