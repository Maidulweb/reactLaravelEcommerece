import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
           <Header />
           <div className='row'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className='col-md-9'>
                <Content />
            </div>
           </div>
        </div>
    );
};

export default Home;