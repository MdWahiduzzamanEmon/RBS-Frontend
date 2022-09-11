import React from 'react';
import Banner from '../pages/Home/Banner/Banner';
import NavBar from '../pages/Home/Banner/NavBar';
import Footer from './Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
          <NavBar/>
            <Banner />
        <div className='container-lg'>
            {children}
        </div>
        <Footer/>
        </>
    );
};

export default Layout;