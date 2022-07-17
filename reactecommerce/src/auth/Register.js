import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../assets/css/Main.css';

const Register = () => {
    const navigate = useNavigate();
   const [registerState, setRegister] = useState({
    name : '',
    email : '',
    password:''
   })

   const handleInput = (e)=>{
    setRegister({...registerState,[e.target.name]:e.target.value})
   }

   const data = {
    'name' : registerState.name,
    'email' : registerState.email,
    'password' : registerState.password,
   }

   const registerSubmit = (e) => {
    e.preventDefault();
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/register', data)
        .then (res =>{
            if( res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                navigate('/login');
            }else {
               console.log('Error!!!!!!!!!!')
            }
        })
        .catch (error=>{
            console.log('axios Error!!!!!!!!!!')
        })
    });
      
   }

    return (
        <div>
         
                <form onSubmit={registerSubmit} className='all-form'>
                <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name='name' onChange={handleInput} value={registerState.name} type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name='email' onChange={handleInput} value={registerState.email} type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name='password' onChange={handleInput} value={registerState.password} type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

export default Register;