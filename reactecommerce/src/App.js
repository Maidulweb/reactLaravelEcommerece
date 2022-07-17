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
import PrivateRoute from "./pages/PrivateRoute";


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use( function(config){
  const token = localStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
  })

function App() {
  return (
    <div className="app">
 <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<PrivateRoute><Login /></PrivateRoute>} />
          <Route path="/register" element={<PrivateRoute><Register /></PrivateRoute>} />
        </Route>
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
