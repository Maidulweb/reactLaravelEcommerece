import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Home from "./pages/Home";
import Login from "./auth/Login"
import './assets/css/Main.css'
import Register from "./auth/Register";


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use( function(config){
  const token = localStorage.getItem('new_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
  })

function App() {
  return (
    <div className="app">
 <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
