// import React from 'react';

import YouTube from "react-youtube";

const Home5th = () => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        }
    }
    const OnReady=(e)=> {
        e.target.pauseVideo()
    }
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold my-3">10-Minutes Setup</h1>
                <p className="text-xl text-center mb-5"
                    style={{
                        color: "rgb(75, 101, 126)"
                    }}
                >Use Timeline to plan projects right the first time. See how the pieces you <br /> can spot gapsand overlaps before you start.</p>
            </div>
            <div className="flex items-center ">
              
                <YouTube className="mx-auto border-8 " videoId="mTz0GXj8NN0"
                    opts={opts} onReady={()=>OnReady} />
            </div>
   
        </div>
    );
};

export default Home5th;