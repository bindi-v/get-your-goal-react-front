
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


function Login() {
  return (
    <>

      <form>
        <div className="mb-3 d-flex justify-content-center w-50  ">
          <label for="exampleInputEmail1 mr-20" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 d-flex justify-content-center w-50">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check ms-auto">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
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
  

}

export default Login;
