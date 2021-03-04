import React from 'react';
import logo from './files/TyreSales.png';
import { Container, Row, Col } from 'react-bootstrap';

// import { Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={1}>
          <img src={logo} width="200px" height="100px" alt=''></img>
        </Col>
        <Col lg={{ span: 3, offset: 3 }}>
          {/* <h2>Type Sales</h2> */}
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default Header;
