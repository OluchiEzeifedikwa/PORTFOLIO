import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container className="mt-5 flex-grow-1">
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <h1 className="display-4">FULLSTACK DEVELOPER</h1>
            <p className="lead fs-5">Postgresql | Express | React | Node.js</p>
            {/* <Button variant="primary" size="lg">Learn More</Button> */}
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-5 flex-grow-1">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src='/home.jpg' />
              <Card.Body>
                <Card.Title>Inventory App</Card.Title>
                <Card.Text>A web application used for collection of kitchen and food items. Built with Express, Node.js, postgresql, EJS</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="/odinbook.jpg" />
              <Card.Body>
                <Card.Title>Odinbook App</Card.Title>
                <Card.Text>A social media app used to connect to people, share and like posts. Built with Express, Node.js, EJS, postgresql, Prisma ORM, passport, JWT authentication</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="dashboard.jpg" />
              <Card.Body>
                <Card.Title>Cloud Fashion</Card.Title>
                <Card.Text>A static website used to show how to implement the flexbox and layout. Built with HTML and flexbox</Card.Text>
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

export default Home;