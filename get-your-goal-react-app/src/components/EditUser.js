import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
//import User from './User';

class EditUser extends Component {

    emptyItem = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  async componentDidMount() {
      if(this.props.match.params.id !== 'new') {
          const user = await ( await fetch(`http://localhost:8081/users/${this.props.match.params.id}`)).json();
          this.setState({item: user});
      }
  }

  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
      item[name] = value;
      this.setState({ item });
  }

  async handleSubmit(event) {
      event.preventDefault();
      const { item } = this.state;

      await fetch('http://localhost:8081/users/' + (item.id ? '/' + item.id : ''), {
          method: (item.id) ? 'PUT' : 'POST',
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify(item),
      });
      this.props.history.push("http://localhost:8081/users/");
  }

  render() {
      const { item } = this.state;
      const user = <h3>{item.id ? "Edit User" : "Add User"}</h3>
  
  return (
    <div>
    <Container>
{user}
<Form onSubmit={this.handleSubmit}>
    <FormGroup as={Row} controlId="formPlaintextFirstName">
        <Label for="firstName" >FirstName</Label>
        <Input className="col-4" type="text" name="firstName" id="firstName" value={item.firstName || ''}
                onChange={this.handleChange}  />
    </FormGroup>
    <FormGroup as={Row} controlId="formPlaintextLastName" >
        <Label for="lastName" >LastName</Label>
        <Input className="col-4" type="text" name="lastName" id="lastName" value={item.lastName || ''}
                onChange={this.handleChange} autoComplete="lastName" />
    </FormGroup>
    <FormGroup as={Row} controlId="formPlaintextUserName" >
        <Label for="userName" >UserName</Label>
        <Input className="col-4" type="text" name="userName" id="userName" value={item.userName || ''}
                onChange={this.handleChange} autoComplete="userName" />
    </FormGroup>
    <FormGroup as={Row} controlId="formPlaintextEmail" >
        <Label for="email" >Email</Label>
        <Input className="col-4" type="text" name="email" id="email" value={item.email || ''}
                onChange={this.handleChange} autoComplete="email" />
    </FormGroup>
    <FormGroup as={Row} controlId="formPlaintextPassword" >
        <Label for="password">Password</Label>
        <Input className="col-4" type="text" name="password" id="password" value={item.password || ''}
                onChange={this.handleChange} autoComplete="password" />
    </FormGroup>
    
    <FormGroup>
    <Button color="primary" type="submit">Save</Button>{' '}
    <Button color="secondary" tag={Link} to="/users">Cancel</Button>
  </FormGroup>
    
</Form>

    </Container>
    </div>
  )
}
}
export default EditUser;