import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'
import Body from './Body';
import Footer from './Footer';
import '../styles/Home.css';


function Home() {
    return (
        console.log(window.location.pathname),
        <div className='home'>
            <div className='homebody'>
                <Sidebar />
                <Body />
            </div>
            <Footer />
            
        </div>
    );
}

export default Home;