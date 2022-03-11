import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';


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
    state = {
        isLoading: true,
        users: []
        
      };
    
      async componentDidMount() {
        const response = await fetch('http://localhost:8081/users');
        const body = await response.json();
        this.setState({users: body, isLoading: false});
      }
        

render() {
    const {users} = this.state;
    return (
        <div className="User text-center">
          <header className="User-header">
            
            <div className="User-intro text-center ">
              <h2>Users</h2>
              {users.map(user =>
                  <div key={user.id} className=" text-center mb-1">
                                
                     <ListGroup horizontal className='text-center'>
                     <ListGroup.Item>{user.id}</ListGroup.Item>
                     <ListGroup.Item>{user.firstName}</ListGroup.Item>
                     <ListGroup.Item>{user.lastName}</ListGroup.Item>
                     <ListGroup.Item>{user.userName}</ListGroup.Item>
                     <ListGroup.Item>({user.email})</ListGroup.Item>
                     </ListGroup>
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default User;
