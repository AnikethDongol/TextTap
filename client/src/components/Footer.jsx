import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        {/* Footer Links Section */}
        <Row>
          <Col>
            <div className="footer-links">
              <Link to="/" className="text-white mx-3">Home</Link>
              <Link to="/about" className="text-white mx-3">About Us</Link>
              <Link to="/contact" className="text-white mx-3">Contact</Link>
              <Link to="/privacy-policy" className="text-white mx-3">Privacy Policy</Link>
            </div>
          </Col>
        </Row>

        {/* Social Media Links Section */}
        <Row className="mt-3">
          <Col>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                Instagram
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                Pinterest
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                Twitter
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-3">
          <Col>
            <p className="mb-0">© 2024 TextTap - All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
