import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
              <a href="/inventory" className="text-decoration-none">View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex align-items-stretch">
          <Card className="h-100">
            <Card.Img variant="top" src="odinbook.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title className="fs-5">Odin book</Card.Title>
              <a href="/odinbook" className="text-decoration-none">View Project</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4 d-flex align-items-stretch">
          <Card className="h-100">
            <Card.Img variant="top" src="dashboard.jpg" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title className="fs-5">cloud fashion</Card.Title>
              <a href="/cloudfashion" className="text-decoration-none">View Project</a>
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