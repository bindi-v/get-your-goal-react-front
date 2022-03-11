import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app'>
    <Router>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path= "/dashboard" element={<Dashboard/>} />
       <Route path="/users" element={<User/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<SignUp/>} />
       </Routes>
       <Footer/>
    </Router>
    </div>
  );
}

export default App;
