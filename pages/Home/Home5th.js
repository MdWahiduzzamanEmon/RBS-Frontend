import React from 'react';
import Iframe from 'react-iframe'

import YouTube from "react-youtube";

const Home5th = ({home5thData}) => {
   
    return (
        <div style={{ fontFamily: 'Poppins', display: home5thData?.isShow ? 'block': 'none' }}>
           {
            home5thData?.titleData?.map((data,index)=> (
                <div key={data?.id} style={{display: data?.isShow ? 'block': 'none'}}>
                <h1 className="text-center fs-2 fw-bold my-3">{data?.title}</h1>
                <p className="fs-6  text-center mb-5 px-2">{data?.description}</p>
                </div>
            ))
           }
            {
                home5thData?.videos?.map((data,index)=> (
                    <div key={data?.id} style={{display: data?.isShow ? 'block': 'none'}}>
                        <div className="flex items-center container">
                        <Iframe url={data?.video}
                            width="100%"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative" />   
                    </div>
                    </div>
                ))
            }
   
        </div>
    );
};

export default Home5th;