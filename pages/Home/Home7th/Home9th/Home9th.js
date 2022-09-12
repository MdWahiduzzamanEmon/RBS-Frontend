import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import React from 'react';
import image2 from '../../../../public/image/image2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home9th = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
       easing:"ease-out-cubic",

        });
    }, [])
    return (
        <div className='my-5'>
            <h1 className="text-4xl text-center font-bold my-3">Best 3 Reason For Choose Our <br /> Software Service</h1>
            <div className='d-grid my-5 gap-5'>
            {/* <div className='row row-cols-1 row-cols-md-2'> */}
                <Row className='d-flex justify-content-md-between'>
                    <Col xs={12} md={5}>
                       
                            <Col className='bg-light shadow-lg rounded-3 me-md-5'>
                                <FontAwesomeIcon className='text-center fs-1 text-success pt-3 ps-3' icon={faCheckCircle} />
                                <p className=' fs-4 fw-bold p-3 '>Managing Change Requests <br /> and Scope Creep</p> </Col>
                            <Col className='shadow-lg rounded-3 mx-md-5' style={{
                                backgroundColor: "#1D2333",
                            }}>
                                <FontAwesomeIcon className='text-center text-white fs-1 pt-3 ps-3'
                                    style={{ color: "#1D2333" }}
                                    icon={faCheckCircle} />
                                <p className=' fs-4 fw-bold p-3 text-white '>Know Who is Available <br /> and When</p> </Col>
                        <Col className='bg-light shadow-lg rounded-3 me-md-5'>
                                <FontAwesomeIcon className='text-center fs-1 text-warning pt-3 ps-3' icon={faCheckCircle} />
                                <p className=' fs-4 fw-bold p-3 '>Full Implementation and <br /> Training Support</p> </Col>
                        
                    </Col>
                    {/* <Col className=' d-flex bg-light rounded-3 '>
                      
                        <Image src={image2} alt=" "
                            className="rounded-3 shadow-lg p-5" />
                    </Col> */}
                    <Col xs={12} md={7} className='d-flex bg-light rounded-3 '>
                    
                        <Image
                            data-aos="flip-left"
                            
                            src={image2} alt=" "
                            className="d-flex w-25 h-25 rounded-5 justify-content-center align-items-center shadow-lg p-2" />
                    </Col>
                </Row>
               

            </div>
            </div>
        
    );
};

export default Home9th;
