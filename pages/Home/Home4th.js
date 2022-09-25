import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import project2 from "../../public/image/project2.webp";
import imagesIcon1 from "../../public/image/imageIcon1.png";
import imagesIcon2 from "../../public/image/imageIcon2.png";


const Home4th = ({ home4thData }) => {
    console.log(home4thData.itemData.items)
    return (
        
            // <div className="d-flex flex-column flex-lg-row ">
        <div className="container-lg d-grid grid-column grid-md-row my-5"
            style={{
                fontFamily: 'Poppins',
                display: (home4thData?.isShow) ? "block" : "none"
        }}
        >{
                home4thData?.itemData?.items?.map((data, index) => (
                    <Row key={index}
                        // style={{ display: (data?.isShow) ? "block" : "none" }}
                    >
                        <Col xs={12} md={6} className=" d-flex  bg-light rounded-5 align-items-center">
                            <div className="w-100 " >
                                <Image
                                    className=" justify-content-center p-2 w-25 h-25  max-w-sm rounded-5  shadow-lg" src={data.img} alt=" "
                                    // height="400" width="450" 
                                    height="100%" width="100%"
                                    objectFit="cover" layout="responsive"
                                    
                                     />
                            </div>
                        </Col>
                        <Col >
                            <h1 className="fs-2 fw-bold">{data.title }</h1>
                            <p className='fs-6 my-3'>{ data.titleDescription}</p>
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <Image src={imagesIcon1} alt=" "></Image>
                                <h3 className="fs-5 fw-bold ms-2">{data.subTitle1}</h3>
                            </div>
                            <p className='fs-6 my-3'>{data.subTitleDescription1 }</p>
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                <Image src={imagesIcon2} alt=" "

                                ></Image>
                                <h3 className="fs-5 fw-bold ms-2">{data.subTitle2}</h3>
                            </div>
                            <p className='fs-6 my-3'>{data.subTitleDescription1}</p>

                        </Col>

                    </Row>    
                ))
        }
              
        </div>
     
    );
};

export default Home4th;