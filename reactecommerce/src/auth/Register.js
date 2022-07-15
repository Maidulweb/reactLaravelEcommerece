import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../assets/css/Main.css';

const Register = () => {
   const [registerState, setRegister] = useState({
    name : '',
    email : '',
    password:''
   })

   const handleInput = (e)=>{
    e.preventDefault()
    setRegister({
        ...registerState,
        [e.target.name]:e.target.value
    })
   }

   const data = {
    'name' : registerState.name,
    'email' : registerState.email,
    'password' : registerState.password,
   }

   const registerSubmit = (e) => {
    e.preventDefault();
      axios.post('http://localhost:8000/api/register', data)
                 .then (res =>{
                     if( res.data.status === 200) {
                       console.log('ok')
                     }else {
                        console.log('Error!!!!!!!!!!')
                     }
                 })
   }

    return (
        <div>
             <Header />
           <div className='row'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className='col-md-9'>
                <form onSubmit={registerSubmit} className='all-form'>
                <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name='name' onChange={handleInput} type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name='email' onChange={handleInput} type="email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input name='password' onChange={handleInput} type="password" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Register;