import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Header.css'; // Optional for styling

function Header() {
  return (
    <header className="header">
      {/* Top Navigation Bar */}
      <Navbar bg="dark" expand="lg" className="border-bottom shadow-sm navbar-dark">
        <Container>
          {/* Logo and App Name */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
              src="/images/logo.jpg"
              width="80"
              height="80"
              className="me-2" // Default styling
              style={{ borderRadius: '50%' }} // Round image
              alt="Star Invest Logo"
            />
            <div>
              <div style={{ fontSize: '1.8rem', color: 'gold', fontWeight: 'bold' }}>
                Star Invest
              </div>
              <div style={{ fontSize: '1rem', color: '#ccc', fontStyle: 'italic' }}>
                The Celebrity Stock Market
              </div>
            </div>
          </Navbar.Brand>

          {/* Mobile Menu Toggle */}
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            {/* Navigation Links */}
            <Nav className="me-auto">
              <Nav.Link href="#now-trading">Now Trading</Nav.Link>
              <Nav.Link href="#news">News & Events</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#earn">Earn H$</Nav.Link>
            </Nav>

            {/* Authentication Buttons */}
            <div>
              <Button variant="outline-warning" className="me-2">
                Login
              </Button>
              <Button variant="warning">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
