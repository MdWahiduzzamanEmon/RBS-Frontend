import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper';
// import "./styles.css";
// import required modules
import { Pagination } from "swiper";
import { Card } from "react-bootstrap";
import Image from "next/image";
import cardProduct1 from '../../public/cardProduct1.jpg'


const ProductSlider = () => {
    const [isSSR, setIsSSR] = React.useState(true);
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        setIsSSR(false);
    }, []);
    return (
       <>
            {!isSSR && 
                <div className="container-lg py-5 my-5 ">
                    <h1 className="text-center text-decoration-underline pb-5">More Related Products</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 1000
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card>
                                <Image src={cardProduct1} alt=" " variant="top" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide> <Card>
                            <Image src={cardProduct1} alt=" " variant="top" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide> <Card>
                            <Image src={cardProduct1} alt=" " variant="top" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text <br />
                                    lead-in to additional content. <br />
                                    This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide> <Card>
                            <Image src={cardProduct1} alt=" " variant="top" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text <br />
                                    lead-in to additional content. <br />
                                    This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide> <Card>
                            <Image src={cardProduct1} alt=" " variant="top" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text <br />
                                    lead-in to additional content. <br />
                                    This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card></SwiperSlide>
                        <SwiperSlide> <Card>
                            <Image src={cardProduct1} alt=" " variant="top" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text <br />
                                    lead-in to additional content. <br />
                                    This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card></SwiperSlide>
                        
                    </Swiper>
                </div>
                } 
    </>
    );
};

export default ProductSlider;