import React from 'react';
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