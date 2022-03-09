import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-light" expand='md'>
    <div className='container'> 
    <h2 className="navbar-brand bg-light navbar-primary logo">GetYourGoal</h2> 
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
    <FaBars style={{ color: "#rgb(235, 195, 64)"}}/>
    </button>
    <div >
            <ul className="d-flex justify-content-end align-items-end m-0">
                <li className='nav-link px-2 pb-0'>
                    <NavLink to='/' className='nav-link' >
                        Home
                        </NavLink>
                </li>
                <li className='nav-link px-2 pb-0'>
                 <NavLink to='/dashboard' className="nav-link" >
                     Dashboard
                     </NavLink>
                </li>
                <li className='nav-link px-2 pb-0'>
                 <NavLink to='/login' className="nav-link" >
                     Login
                     </NavLink>
                </li>
                <li className='nav-link px-2 pb-0'>
                 <NavLink to='/signup' className="nav-link" >
                     SignUp
                     </NavLink>
                </li>
                </ul>
            </div> 
     </div>  
    </nav>
  )
}

export default Navbar;