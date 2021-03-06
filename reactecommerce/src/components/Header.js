import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import '../assets/css/Header.css'
import axios from 'axios';

const Header = () => {

const navigate = useNavigate();

const submitlogout = (e) => {
  e.preventDefault();
  axios.post('/api/logout')
       .then( res => {
         if(res.data.status === 200) {
          localStorage.clear()
          navigate('/')
         }
       })
}

var authLogout = ''
if(!localStorage.getItem('auth_token')){
  authLogout = (
    <>
 <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
    </>
  )
}else {
  authLogout = (
    <>
    <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Profile
  </Link>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><Link className="dropdown-item" to="/">Account</Link></li>
    <li><button className="dropdown-item" type='button' onClick={submitlogout}>Logout</button></li>
  </ul>
</li>
    </>
  )
}

    return (
        <div className='header'>
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="logo" to="/"><img src={Logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {authLogout}
      </ul>
    </div>
  </div>
</nav>
        </div>
        </div>
    );
};

export default Header;