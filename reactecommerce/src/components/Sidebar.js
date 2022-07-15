import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Sidebar.css'
import Arrow from '../assets/img/arrow.png'
const Sidebar = () => {
    return (
        <div className='sidebar'>
<div className="sidebar-body">
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="home-btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Auth
        </button>
        <span><img src={Arrow} alt='arrow' /></span>
        <div className="collapse show" id="home-collapse">
          <ul className="home-btn-ul btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="/login" className="link-dark d-inline-flex text-decoration-none rounded">Login</Link></li>
            <li><Link to="/register" className="link-dark d-inline-flex text-decoration-none rounded">Register</Link></li>
            <li><Link to="/" className="link-dark d-inline-flex text-decoration-none rounded">Logout</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="home-btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="home-btn-ul btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="/" className="link-dark d-inline-flex text-decoration-none rounded">Overview</Link></li>
            <li><Link to="/" className="link-dark d-inline-flex text-decoration-none rounded">Weekly</Link></li>
            <li><Link to="/" className="link-dark d-inline-flex text-decoration-none rounded">Monthly</Link></li>
            <li><Link to="/" className="link-dark d-inline-flex text-decoration-none rounded">Annually</Link></li>
          </ul>
        </div>
      </li>
      
    </ul>
  </div>
        </div>
    );
};

export default Sidebar;