import React from 'react';
import AboutBanner from '../components/AboutUs/AboutBanner';
import Team from '../components/AboutUs/Team';
import About2nd from '../components/AboutUs/About2nd';
import About3rd from '../components/AboutUs/About3rd';
import axios from 'axios';


const aboutUs = ({about2ndData}) => {
    return (
        <div style={{
            color: "rgb(23, 52, 101)",
           fontFamily: 'Poppins'
        }}>
            <AboutBanner></AboutBanner>
            <About2nd about2ndData={about2ndData}/>
          
            <About3rd/>
            <Team />
           
        </div>
    );
};

export default aboutUs;

export async function getServerSideProps(){
    const about2ndInfos = await axios.get('http://localhost:3000/api/aboutus/about2ndapi')

    return {
        props:{
            about2ndData: about2ndInfos.data
        }
    }

}