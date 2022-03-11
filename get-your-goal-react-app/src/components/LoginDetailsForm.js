import { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';


function LoginDetailsForm() {

    const [signUp, setSignUp] = useState();
    const [showForm, setShowForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] =  useState(false);
    const [userData, setUserData] = useState({ firstName: "", lastName: "", email: "", userName: "", password: ""});
    const [error, setError] = useState();
    
    useEffect(() => {
        fetchFromApi();
    }, []);

    function fetchFromApi() {
        fetch("http://localhost:8081/users")
        .then(response => response.json())
        .then(result => { console.log(JSON.stringify(result)); setSignUp(result); })
        .catch(console.log(error));
    }

    function addClick() {
        setUserData({ firstName: "", lastName: "", userName: "", email: "", password: ""});
        setShowForm(true);
    }

    function notify({ action, goal, error }) {
        if(error) {
            setError(error);
            setShowForm(false);
            setShowSignUpForm(false);
            return;
        }
    }

  return (
    <div>LoginDetailsForm</div>
  )
}

export default LoginDetailsForm