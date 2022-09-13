import React from 'react';
import Banner from '../pages/Home/Banner/Banner';
import NavBar from '../pages/Home/Navbar/NavBar';
// import NavBar from '../pages/Home/Banner/Navbar';
import Footer from './Footer/Footer';

const Layout = ({children}) => {
    return (
        <>
            <div >
            {children}
        </div>
        <Footer/>
        </>
    );
};

export default Layout;