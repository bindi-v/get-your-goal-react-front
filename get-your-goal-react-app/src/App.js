import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path= "/dashboard" element={<Dashboard/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<SignUp/>} />
       </Routes>
       <Footer/>
    </Router>
    </>
  );
}

export default App;
