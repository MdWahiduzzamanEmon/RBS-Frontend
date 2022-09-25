import Navbar from "../Navbar/NavBar";
import Image from 'next/image';
import banner2 from '../../../public/banner2.jpeg'
import download from '../../../public/download.jpg'
import NavBar from "../Navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bannerStyles from '../../../styles/Banner.module.css';
import BannerSlider from './BannerSlider'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect,useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation, } from "swiper";
import { Col, Row } from "react-bootstrap";

const Banner = ({bannerData, bannerImagesData}) => {
    console.log(bannerData.items)
    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // },[])

   //get banner detail api




    return (
        <>
            <div
                className={`${bannerStyles.bannerWidth}  `}
                style={{
                    backgroundImage: `url(${download.src})`,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 81% 90%, 0 100%, 0% 50%)"

                }}
            >
                <NavBar></NavBar>
                {/* <div className="d-flex align-items-center justify-content-center"> */}
                <div
                    className="container mx-auto  pt-5">
                    {/* <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center p-3"> */}
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={5}
                        // data-aos="fade-right"
                        // className="mb-3 mb-lg-0"
                        >
                           {
                            bannerData?.isShow && (
                                <div>
                                {
                                    bannerData?.items?.map((item,index)=> (
                                        <div 
                                        key={item?.id}
                                        style={{display: item?.isShow ? 'block':'none'}}
                                        >
                                        <h1 className="fs-1 fw-bold">{item?.title}</h1>
                                        <p className="fs-6">{item?.description}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            )
                           }
                            <Row
                            // className="d-flex flex-lg-row flex-column"
                            >
                                <button className={`${bannerStyles.buttonGradientOutline} `}><span>Discover More</span> <FontAwesomeIcon icon={faArrowRight} /></button>
                                <button className={`${bannerStyles.buttonGradient} border-0`}>More Features <FontAwesomeIcon icon={faArrowRight} /></button>
                            </Row>
                        </Col>
                        <Col md={7}
                            // style={{ height: "350", width: "500" }}
                            className=""
                        >
                         {
                            bannerImagesData.isShow && (
                                <BannerSlider 
                                bannerImagesData={bannerImagesData}
                                />
                            )
                         }
                        </Col>
                        {/* </div> */}
                    </Row>
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Banner;