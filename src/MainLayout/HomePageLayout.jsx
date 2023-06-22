import React from 'react';
import Header from '../ShearSection/Header/Header';
import Footer from '../ShearSection/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='pt-24 mb-10'>
                <Outlet></Outlet>
            </div>

            <div className='mt-28'>
            <Footer></Footer>
                
            </div>    
        </div>
    );
};

export default HomePageLayout;