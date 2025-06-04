import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container fluid className="p-5 flex-grow-1">
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center mb-4">
            <Typewriter 
              onInit={(typewriter) => {
                typewriter
                .typeString('<h1 className="display-4">ABOUT ME</h1>')
                .pauseFor(1000)
                .deleteAll()
                .typeString("I am a fullstack developer with expertise in crafting scalable, efficient and secure applications.")
                .start();
              }}
              options={{
                wrapperClassName: 'fs-3 fw-bold',
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="mb-4">
            <div style={{backgroundColor: '#708090'}} className='text-white p-3 rounded'>
              <h2>Front-end</h2>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <div style={{backgroundColor: '#000000', color: '#FFFFFF'}} className='p-3 rounded'>
              <h2>Back-end</h2>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Postgresql</li>
                <li>Prisma ORM</li>
                <li>Json Web Token</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <div style={{backgroundColor: '#708090'}} className='text-white p-3 rounded'>
              <h2>Security</h2>
              <p>Secure authentication with Passport.js and data protection best practices</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="mb-4">
            <div style={{backgroundColor: '#000000', color: '#FFFFFF'}} className='p-3 rounded'>
              <h2>Key Expertise</h2>
              <ul>
                <li>Full-stack development</li>
                <li>REST API design</li>
                <li>Database Optimization</li>
                <li>Authentication and security</li>
                <li>UI design and development</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <div style={{backgroundColor: '#708090'}} className='text-white p-3 rounded'>
              <h2>Education</h2>
              <ul>
                <li>The Odin Project</li>
                <li>Back-end Web Development(Udemy)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center p-3 border-top mt-auto">
        <Container>
          <Row>
            <Col xs={12}>
              <p>&copy; {new Date().getFullYear()} Oluchi Ezeifedikwa. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default About;