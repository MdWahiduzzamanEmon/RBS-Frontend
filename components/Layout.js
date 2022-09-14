import React from 'react';
import Banner from '../pages/Home/Banner/Banner';
import NavBar from '../pages/Home/Navbar/NavBar';
import FooterCommon from './FooterCommon/FooterCommon';

const Layout = ({children}) => {
    return (
        <>
            <div >
            {children}
        </div>
        <FooterCommon/>
        </>
    );
};

export default Layout;