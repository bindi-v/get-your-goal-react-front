import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';


// function User() {

//  const  state = { 
//        user: {},
//        users: [],
//        numberOfUsers: 0
//    }

//     async function getAllUsers() {
//         const response = await fetch("http://localhost:8080/users");
//         return await response.json();
//     }

//     async function createUser(data) {
//         const response = await fetch(`http://localhost:8080/users`, {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(data)
//         })
//         return await response.json();
//     }

//     createUser = (e) => {
//         createUser(this.state.user)
//         .then(response => {
//             console.log(response);
//             this.setState({numberOfUsers: this.state.numberOfUsers + 1})
//         });
//         this.setState({user: {}})
//     }

//     getAllUsers = () => {
//         getAllUsers()
//         .then(users => {
//             console.log(users)
//             this.setState({ users: users, numberOfUsers: users.length})
//         });
//     }

//    const onChangeForm = (e) => {
//         let user = this.state.user
//         if(e.target.name === "firstName") {
//             user.firstName = e.target.value;
//         } else if(e.target.name === "lastName") {
//             user.lastName = e.target.value;
//         } else if (e.target.name === "email") {
//             user.email = e.target.value;
//         } else if(e.target.name === "userName"){
//             user.userName = e.target.value;
//         } else if(e.target.name === "password"){
//             user.password = e.target.value;
//         }
//         this.setState({user})
//     }

    
//         return (
//             <div className='row'>User
            
//             <div className='container mrgnbtm'>
//                 <div className='row'>
//                     <div className='col-md-8'>
//                         <div user={this.state.user}
//                                     onChangeForm={this.onChangeForm}
//                                     createUser={this.createUser}></div>

//                         </div>
//                     <div className='col-md-4'>
//                         <div className='card'
//                         numberOfUsers={this.state.numberOfUsers}
//                         getAllUsers={this.getAllUsers}></div>
//                         </div>
//                     </div>
//                 </div>
//             <div className='row mrgnbtm'>
//                 <div users={this.state.users}></div>
//                 </div>
//             </div>
//           );
  
// }

// export default User

class User extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {users: [], isLoading: true};
  //   this.remove = this.remove.bind(this);
  // }
    state = {
        isLoading: true,
        users: []
        
      };
    
      async componentDidMount() {
        const response = await fetch('http://localhost:8081/users');
        const body = await response.json();
        this.setState({users: body, isLoading: false});
      }
       async remove(id) {
        await fetch(`http://localhost:8081/users/${id}`, { 
               method: "DELETE",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
          })
          .then(() => {
          let updatedUser = [...this.state.user].filter(i => i.id !== id);
          this.setState({user: updatedUser});
          // ({ action: "delete", user: user }))
        //.catch(error => notify({ action: "delete", error: error }));
        });
      } 

render() {
    const {users, isLoading} = this.state;
    if(isLoading) {
      return <p>Loading...</p>;
    }
    // const userList = users.map(user => {
    //   const userData = `${user.firstName || ''} ${user.lastName || ''} ${user.userName || ''} ${user.email || ''} ${user.password || ''}`;
    //   return <tr key={user.id}>
    //     <td style={{whiteSpace: 'nowrap'}}>{user.firstName}</td>
    //     <td>{userData}</td>
    //     <td>{users.events.map(event => {
    //       return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
    //         year: 'numeric',
    //         month: 'long',
    //         day: '2-digit'
    //       }).format(new Date(event.date))}: {event.title}</div>
    //     })}</td>
    //     <td>
    //       <ButtonGroup>
    //         <Button size="sm" color="primary" tag={Link} to={"/groups/" + user.id}>Edit</Button>
    //         <Button size="sm" color="danger" onClick={() => this.remove(user.id)}>Delete</Button>
    //       </ButtonGroup>
    //     </td>
    //   </tr>
    // });

    return (

      // <div>
      //   <Container fluid>
      //     <div className="float-right">
      //       <Button color="success" tag={Link} to="/users">Add User</Button>
      //     </div>
      //     <h3>User List</h3>
      //     <Table className="mt-4">
      //       <thead>
      //       <tr>
      //         <th width="20%">First Name</th>
      //         <th width="20%">Last Name</th>
      //         <th>User Name</th>
      //         <th width="10%">Email</th>
      //       </tr>
      //       </thead>
      //       <tbody>
      //       {userList}
      //       </tbody>
      //     </Table>
      //   </Container>
      // </div>

        <div className="row text-center">
          
          <Container fluid>
          <h3>Users</h3>
          <Table className="mt-4">
          <thead>
            <tr>
            <th width="5%">First Name</th>
            <th width="5%">Last Name</th>
            <th width="5%">User Name</th>
            <th width="5%">Email</th>
          {/* <header className="card">
            
            <div className="card-body text-center "> */}
              </tr> 
              </thead>
              <tbody>
              {users.map(user =>
                  <div key={user.id} className=" text-center mb-1">
                                
                     <ListGroup horizontal className='text-center'>
                     <ListGroup.Item>{user.id}</ListGroup.Item>
                     <ListGroup.Item>{user.firstName}</ListGroup.Item>
                     <ListGroup.Item>{user.lastName}</ListGroup.Item>
                     <ListGroup.Item>{user.userName}</ListGroup.Item>
                     <ListGroup.Item>({user.email})</ListGroup.Item>
                     <td>
                     {/* <div className='card-footer' d-flex="true" justify-content-center="true"> */}
                     <ButtonGroup>
                     <Button size="sm" color="primary" tag={Link} to={"/users/" + user.id}>Edit</Button>
                <Button className='btn btn-danger mr-3' type="button" onClick={() => this.remove(user.id)}>Delete</Button>
               {/* <button className='btn btn-secondary mr-2' type="button" onClick={() => notify({ action: "edit-form", user: user })}>Edit</button> */}
                {/* </div> */}
                </ButtonGroup>
                </td>
                     </ListGroup>
                  </div>
              )}
            {/* </div>
          </header> */}
         </tbody>
          </Table>
          </Container>
        </div>
    );
  }
}
export default User;
