import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Sign In form data submitted:', formData);
  };

  return (
    <div className="signin-page">
      <Container className="signin-container">
        <h1 className="text-center">Sign In</h1>
        <Form onSubmit={handleSubmit} className="signin-form">
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Sign In
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignIn;
