import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function Login() {
  return (
    <>
    <div>Login</div>
    <Form  className='text-center'>
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
      <Form.Control type="email"  defaultValue="email@example.com" required/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="4">
      <Form.Control type="password" placeholder="Password" required/>
    </Col>
  </Form.Group>
  <Button type="submit">Login</Button>
</Form>

<h6 className='text-center'><a href='#Sign Up Instead'>Sign Up Instead</a></h6>
</>
  )
}

export default Login;