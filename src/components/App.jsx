import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const App = () => {
  const handleClick = () => {
    window.alert('you tapped to Button');
    console.log('you tapped to Button');
  };
  return (
    <Container lg className="h-100">
      <Row className="h-100 justify-content-center align-items-center px-5 py-5">
        <Col className="align-items-center col-8 shadow">
          <div className="d-flex flex-column align-items-center my-5">
            <div className="fs-4 align-items-center badge bg-primary text-wrap">Welcome to template</div>
            <div className="mb-5">React + Bootstrap</div>
            <Button onClick={handleClick} variant="danger" size="">tap on me</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
