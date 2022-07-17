import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
const Home = () => {
    return (
        <div>
           <Header />
           <div className='row'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className='col-md-9'>
            <Outlet />
            </div>
           </div>
        </div>
    );
};

export default Home;