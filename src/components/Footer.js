import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p>
              Created by <strong>Tamseel Ahmed Sheikh</strong> for class <strong>WRI470</strong>
            </p>
          </Col>
        </Row>
      </Container>

    </footer>
  );
}

// Footer style to stick to the bottom of the page
const footerStyle = {
  backgroundColor: '#000',
  color: 'gold',
  padding: '0px 0',
//   position: 'fixed',
  bottom: 0,
  width: '100%',
  left: 0,
  textAlign: 'center',
};

export default Footer;
