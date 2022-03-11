import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Button, Container} from 'react-bootstrap';
import { Input } from 'reactstrap';

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
  await fetch('http://localhost:8081/users/' + (item.id ? '/' + item.id: ''), {
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
    <Form.Group as={Row} className="mb-2" controlId="formPlaintextFirstName">
    <Form.Label column sm="1">
      FirstName
    </Form.Label>
    <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                           onChange={this.handleChange} autoComplete="firstName"/>

    {/* <Col sm="4">
      <Form.Control type="firstName" placeholder="FirstName" required/>
    </Col> */}
  </Form.Group>
  <Form.Group as={Row} className="mb-2" controlId="formPlaintextLastName">
    <Form.Label column sm="1">
      LastName
    </Form.Label>
    <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                           onChange={this.handleChange} autoComplete="lastName"/>

    {/* <Col sm="4">
      <Form.Control type="lastName" placeholder="LastName" required />
    </Col> */}
  </Form.Group>
  <Form.Group as={Row} className="mb-2" controlId="formPlaintextUserName">
    <Form.Label column sm="1">
      UserName
    </Form.Label>
    <Input type="text" name="userName" id="userName" value={item.userName || ''}
                           onChange={this.handleChange} autoComplete="userName"/>

    {/* <Col sm="4">
      <Form.Control type="userName" placeholder="UserName" required />
    </Col> */}
  </Form.Group>
  <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
    <Form.Label column sm="1">
      Email
    </Form.Label>
    <Input type="text" name="email" id="email" value={item.email || ''}
                           onChange={this.handleChange} autoComplete="email"/>

    {/* <Col sm="4">
      <Form.Control type="email"  defaultValue="email@example.com" required />
    </Col> */}
  </Form.Group>

  <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword">
    <Form.Label column sm="1">
      Password
    </Form.Label>
    <Input type="text" name="password" id="password" value={item.password || ''}
                           onChange={this.handleChange} autoComplete="password"/>

    {/* <Col sm="4">
      <Form.Control type="password" placeholder="Password" required />
    </Col> */}
  </Form.Group>
  <Button type="submit">Sign Up!</Button>
  <Button color="secondary" tag={Link} to="/users">Cancel</Button>

</Form>
</Container>
  )
}
}

export default SignUp;