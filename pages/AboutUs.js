import React from 'react';
import AboutBanner from '../components/AboutUs/AboutBanner';
import Team from '../components/AboutUs/Team';
import About2nd from '../components/AboutUs/About2nd';
import Home2nd from './Home/Home2nd/Home2nd';
import Home4th from './Home/Home4th';
import About3rd from '../components/AboutUs/About3rd';

const index = () => {
    return (
        <div style={{
            color: "rgb(23, 52, 101)",
           fontFamily: 'Poppins'
        }}>
            <AboutBanner></AboutBanner>
            <About2nd/>
            {/* <Home4th /> */}
            <About3rd/>
            <Team/>
        </div>
    );
};

export default index;