import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login"
import './assets/css/Main.css'
import Register from "./auth/Register";
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
