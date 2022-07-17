import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../assets/css/Main.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const [loginState, setLogin] = useState({
        email:'',
        password:'',
    })

    const handleInput = (e) => {
        e.preventDefault();
        setLogin({...loginState, [e.target.name] : e.target.value})
    }

    const data = {
        'email' : loginState.email,
        'password' : loginState.password,
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/api/login', data)
            .then (res =>{
                if( res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    navigate('/');
                }else {
                   console.log('The provided credentials are incorrect!!!!!')
                }
            })
            .catch (error=>{
                console.log('axios Error!!!!!!!!!!')
            })
        });
          
       }
       
    return (
        <div>
                <form onSubmit={loginSubmit} className='all-form'>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={loginState.email} onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={loginState.password} onChange={handleInput} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

export default Login;