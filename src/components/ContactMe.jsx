import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


function Contact() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container fluid className="p-5 flex-grow-1">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center">
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Hello World')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Please feel free to reach out to me on the channels below:")
                    .start();
                }}
                options={{
                  wrapperClassName: 'fs-3 fw-bold',
                }}
              />
            </div>
            <div className='d-flex flex-column align-items-center' style={{ gap: '20px' }}>
              <div className="mx-2 border p-2 w-100" style={{ maxWidth: '600px', borderRadius: '20px', border: '1px solid #ccc', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center'}}>
                <a href="https://github.com/OluchiEzeifedikwa" className="fs-4 text-dark"><FaGithub /></a>
              </div>
              <div className="mx-2 border p-2 w-100" style={{ maxWidth: '600px', borderRadius: '20px', border: '1px solid #0077b5', backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
                <a href="http://linkedin.com/in/oluchi-ezeifedikwa-80b8a51a9" className="fs-4 text-white"><FaLinkedin /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark varant-dark text-white text-center p-3 border-top mt-auto">
        <Container>
          <Row>
            <Col md={12}>
              <p>&copy; {new Date().getFullYear()} Oluchi Ezeifedikwa. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
export default Contact;
    