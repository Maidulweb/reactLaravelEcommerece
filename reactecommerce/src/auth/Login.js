import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../assets/css/Main.css'
const Login = () => {
    return (
        <div>
           <Header />
           <div className='row'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className='col-md-9'>
                <form className='all-form'>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Login;