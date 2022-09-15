import React from 'react';
import AboutBanner from '../components/AboutUs/AboutBanner';
import Team from '../components/AboutUs/Team';
import About2nd from '../components/AboutUs/About2nd';
import About3rd from '../components/AboutUs/About3rd';


const index = () => {
    return (
        <div style={{
            color: "rgb(23, 52, 101)",
            fontFamily: 'Poppins'
        }}>
            <AboutBanner />
            <About2nd />
            <About3rd />
            <Team />

        </div>
    );
};

export default index;