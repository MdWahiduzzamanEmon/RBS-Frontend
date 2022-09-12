import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import project2 from "../../public/image/project2.webp";
import imagesIcon1 from "../../public/image/imageIcon1.png";
import imagesIcon2 from "../../public/image/imageIcon2.png";


const Home4th = () => {
    return (
        
            // <div className="d-flex flex-column flex-lg-row ">
        <div className="container-lg d-grid grid-column grid-md-row my-5"
            style={{
                fontFamily: 'Poppins'
        }}
        >
            <Row>
                <Col xs={12} md={6} className=" d-flex  bg-light rounded-5 align-items-center">
                    <div >
                            <Image src={project2} alt=" "
                            className="w-25 h-25 justify-content-center  max-w-sm  shadow-lg" />
                        </div>
                </Col>
                <Col >
                    <h1 className="fs-2 fw-bold">Your Base For Classic, Agile Project Management</h1>
                    <p className='fs-6 my-3'>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                        <Image src={imagesIcon1} alt=" "></Image>
                        <h3 className="fs-5 fw-bold ms-2">Free And Open Source Software</h3>
                    </div>
                    <p className='fs-6 my-3'>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>
                    <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                        <Image src={imagesIcon2} alt=" "
                        
                        ></Image>
                        <h3 className="fs-5 fw-bold ms-2">Free And Open Source Software</h3>
                    </div>
                    <p className='fs-6 my-3'>On the other hand we denounce with righteus indignation dislike men who are beguiled and</p>

                </Col>
               
            </Row>   
        </div>
     
    );
};

export default Home4th;