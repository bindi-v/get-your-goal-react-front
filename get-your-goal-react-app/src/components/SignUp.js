import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container} from 'react-bootstrap';
//import { Input } from 'reactstrap';

class SignUp extends Component {

  emptyItem = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: ''
};

constructor (props) {
  super(props);
  this.state = {
    item: this.emptyItem
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

 async componentDidMount() {
  if(this.props.match.params.id !== "new") {
    const user = await (await fetch(`http://localhost:8081/users/${this.props.match.params.id}`)).json();
    this.setState({ item: user });
  }
}
handleChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  let item = {...this.state.item};
  item[name] = value;
  this.setState({item});
}

 async handleSubmit(event) {
  event.preventDefault();
  const {item} = this.state;
  await fetch('http://localhost:8081/users/' + (item.id ? '/' + item.id : ''), {
    method: (item.id) ? "PUT" : "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item),
  });
   this.props.history.push("http://localhost:8081/users/");
}

render() {
  //const url = "http://localhost:8081/users/";
  const{item} = this.state;
  const title = <h5>{item.id ? "Edit User" : "Add User"}</h5>
  return (
    <Container className='text-center'> {title}
    <Form  className='text-center' onSubmit={this.handleSubmit}>
    <Form.Group as={Row} className="mb-2 " controlId="formPlaintextFirstName">
    <Form.Label column sm="2" >
      FirstName
    </Form.Label>
    {/* <Input type="text" name="firstName" id="firstName" className="col-6" value={item.firstName || ''}
                           onChange={this.handleChange} autoComplete="firstName" required /> */}

    <Col sm="4">
      <Form.Control type="text" name="firstName"  placeholder="FirstName" value={item.firstName || ''}
      onChange={this.handleChange} autoComplete="firstName" required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-2" controlId="formPlaintextLastName">
    <Form.Label column sm="2">
      LastName
    </Form.Label>
    {/* <Input type="text" name="lastName" id="lastName" className="col-6" value={item.lastName || ''}
                           onChange={this.handleChange} autoComplete="lastName" required /> */}

    <Col sm="4">
      <Form.Control type="text" name="lastName"  placeholder="LastName" value={item.lastName || ''}
       onChange={this.handleChange} autoComplete="lastName" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-2" controlId="formPlaintextUserName">
    <Form.Label column sm="2">
      UserName
    </Form.Label>
    {/* <Input type="text" name="userName" id="userName" className="col-6" value={item.userName || ''}
                           onChange={this.handleChange} autoComplete="userName" required /> */}

    <Col sm="4">
      <Form.Control type="text" placeholder="UserName" name="userName"  value={item.userName || ''}
      onChange={this.handleChange} autoComplete="userName" required />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    {/* <Input type="text" name="email" id="email" className="col-6" value={item.email || ''}
                           onChange={this.handleChange} autoComplete="email" required /> */}

     <Col sm="4">
      <Form.Control type="email" name="email"  placeholder="email@example.com" 
      value={item.email || ''} onChange={this.handleChange} autoComplete="email" required />
    </Col> 
  </Form.Group>

  <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    {/* <Input type="password" name="password" id="password" className="col-6" value={item.password || ''}
                           onChange={this.handleChange} autoComplete="password" required /> */}

     <Col sm="4">
      <Form.Control type="password" placeholder="Password" name="password"  value={item.password || ''}
       onChange={this.handleChange} autoComplete="password" required />
    </Col> 
  </Form.Group>
  <Form.Group>
  <Button type="submit">Sign Up!</Button>
  <Button color="secondary" tag={Link} to="/users">Cancel</Button>
  </Form.Group>
</Form>
</Container>
  )
}
}

export default SignUp;