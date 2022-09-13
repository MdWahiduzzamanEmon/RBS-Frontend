import React from 'react';
import Iframe from 'react-iframe'

import YouTube from "react-youtube";

const Home5th = () => {
   
    return (
        <div style={{ fontFamily: 'Poppins' }}>
            <div>
                <h1 className="text-center fs-2 fw-bold my-3">10-Minutes Setup</h1>
                <p className="fs-6  text-center mb-5 px-2">Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gapsand overlaps before you start.</p>
            </div>
            <div className="flex items-center container">
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />   </div>
   
        </div>
    );
};

export default Home5th;