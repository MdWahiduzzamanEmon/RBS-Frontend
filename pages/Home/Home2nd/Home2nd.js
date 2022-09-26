import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";
import { Button, Card } from 'react-bootstrap';
// import images from "../../../public/";
// import avatar from "../../../public/banner2.jpeg";
import style from './Home2nd.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Home2nd = ({ home2ndData }) => {
    // console.log(home2ndData);
    
    return (
        <div className="container-lg my-5 py-5 mx-auto"
            style={{
                fontFamily: 'Poppins',
                display: (home2ndData?.isShow)? "block":"none"
                   
               
        }}
        > <div
                style={{
                    display: (home2ndData?.titleData.isShow) ? "block" : "none"
                }}
        >
                {
                    home2ndData?.titleData?.titleItems?.map((data) => (
                        <div key={data.id}

                        >
                            <h1 className="fs-2 text-center fw-bold my-3">{data.title} </h1>
                            <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
                        </div>
                    ))
                }   
        </div>
            
            
           
            <div className='row row-cols-1 row-cols-md-3 g-4'
            // style={{
            //                     display: (home2ndData?.items.isShow) ? "block" : "none"
            //                 }}
            >
            {
                    home2ndData?.cardItem?.items?.slice(0,3).map(card => (
                    <div
                            key={card.id}
                           
                        >
                        
                        <div>
                                <Card className=' card shadow-lg rounded w-sm-50'
                                    // style={{
                                    //     display: (card.isShow) ? "block" : "none"
                                    // }}
                                >
                                <Image className='img-fluid rounded-top' src={card.img} alt="" width="300px" height="200px" />
                                <Card.Body>
                                    <Card.Title className='fs-5 fw-bold'>{card.title}</Card.Title>
                                    <Card.Text className='fs-6'>
                                        {card.description}
                                    </Card.Text>
                                    <Link href='/' style={{ textDecoration: 'none' }}><button className={`${style.btnColor} border-0 `}>Read more <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>)

                )
                }
            </div>
            
        </div>
    );
};

export default Home2nd;