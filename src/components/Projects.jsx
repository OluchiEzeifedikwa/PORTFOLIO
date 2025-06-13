import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container fluid className="p-5 flex-grow-1">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex align-items-stretch">
          <Card className="h-100">
            <Card.Img variant="top" src="kitchen.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title className="fs-5">Inventory App</Card.Title>
              <Link to="/inventory" className="text-decoration-none">View Project</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex align-items-stretch">
          <Card className="h-100">
            <Card.Img variant="top" src="odinbook.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title className="fs-5">Odin book</Card.Title>
              <Link to="/odinbook" className="text-decoration-none">View Project</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex align-items-stretch">
          <Card className="h-100">
            <Card.Img variant="top" src="dashboard.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title className="fs-5">Todolist</Card.Title>
              <Link to="/todolist" className="text-decoration-none">View Project</Link>
            </Card.Body>
          </Card>
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

export default Projects;