import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function SignUp() {
  return (
    <>
    <Form  className='text-center'>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirstName">
    <Form.Label column sm="2">
      FirstName
    </Form.Label>
    <Col sm="4">
      <Form.Control type="firstName" placeholder="FirstName" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
    <Form.Label column sm="2">
      LastName
    </Form.Label>
    <Col sm="4">
      <Form.Control type="lastName" placeholder="LastName" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
    <Form.Label column sm="2">
      UserName
    </Form.Label>
    <Col sm="4">
      <Form.Control type="userName" placeholder="UserName" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="4">
      <Form.Control type="email"  defaultValue="email@example.com" required />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="4">
      <Form.Control type="password" placeholder="Password" required />
    </Col>
  </Form.Group>
  <Button type="submit">Sign Up!</Button>
</Form>
</>
  )
}

export default SignUp;