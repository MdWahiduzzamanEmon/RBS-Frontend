import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import React from 'react';
import image2 from '../../../public/image2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home9th = ({home9thData}) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
       easing:"ease-out-cubic",

        });
    }, [])

    return (
        <div className=' container-lg my-5 pt-5'
            style={{
                fontFamily: 'Poppins',
                display: home9thData?.isShow ? 'block' : 'none',
        }}
        >
            {
                home9thData?.items?.map((data,index)=>(
                    <div key={data?.id}>
            <h1 className="fs-2 text-center fw-bold my-3 w-50  m-auto">{data?.title}</h1>
            <div className='d-grid my-5 gap-5'>
            {/* <div className='row row-cols-1 row-cols-md-2'> */}
                <Row className='d-flex justify-content-md-between'>
                    <Col xs={12} md={5}>
                       
                            <Col className='bg-light shadow-lg rounded-3 me-md-5'>
                                <FontAwesomeIcon className='text-center fs-1 text-success pt-3 ps-3' icon={faCheckCircle} />
                                <p className=' fs-4 fw-bold p-3 '>{data?.subTitle1}</p> </Col>
                            <Col className='shadow-lg rounded-3 mx-md-5' style={{
                                backgroundColor: "#1D2333",
                            }}>
                                <FontAwesomeIcon className='text-center text-white fs-1 pt-3 ps-3'
                                    style={{ color: "#1D2333" }}
                                    icon={faCheckCircle} />
                                <p className=' fs-4 fw-bold p-3 text-white '>{data?.subTitle2}</p> </Col>
                        <Col className='bg-light shadow-lg rounded-3 me-md-5'>
                                <FontAwesomeIcon className='text-center fs-1 text-warning pt-3 ps-3' icon={faCheckCircle} />
                                <p className=' fs-4 fw-bold p-3 '>{data?.subTitle3}</p> </Col>
                        
                    </Col>
                    {/* <Col className=' d-flex bg-light rounded-3 '>
                      
                        <Image src={image2} alt=" "
                            className="rounded-3 shadow-lg p-5" />
                    </Col> */}
                    <Col xs={12} md={7} className='d-flex bg-light rounded-3 '>
                        <div className='w-100'>
                        <Image
                            data-aos="flip-left"
                            src={data?.image} alt=" "
                            width='100%'
                            height='80%'
                            layout='responsive'
                            objectFit='cover'
                            className="d-flex rounded-5 justify-content-center align-items-center shadow-lg p-2" />
                        </div>
                    </Col>
                </Row>
               

            </div>
                    </div>
                ))
            }
            </div>
        
    );
};

export default Home9th;
