import React from 'react';
import Banner from '../pages/Home/Banner/Banner';
import NavBar from '../pages/Home/Banner/NavBar';

const Layout = ({children}) => {
    return (
        <>
          <NavBar/>
            <Banner />
        <div className='container-lg'>
            {children}
        </div>
        </>
    );
};

export default Layout;