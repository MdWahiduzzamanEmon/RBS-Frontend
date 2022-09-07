// import React from 'react';

import YouTube from "react-youtube";

const Home5th = () => {
    const opts = {
        height: "390",
        width: "640",
        // marginX:"auto",
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
            <div className="block items-center mx-auto">
                <h3 className="text-4xl text-center font-bold my-3">RBS-Technology - Youtube</h3>
                <YouTube className="mx-auto" videoId="sTnm5jvjgjM"
                    opts={opts} onReady={()=>OnReady} />
            </div>
   
        </div>
    );
};

export default Home5th;