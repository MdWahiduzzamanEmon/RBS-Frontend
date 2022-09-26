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


const ProductSlider = ({productSliderData}) => {
    console.log(productSliderData)
    const [isSSR, setIsSSR] = React.useState(true);
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return (
       <section style={{display: productSliderData?.isShow ? 'block' : 'none'}}>
            {!isSSR && 
                <div className="container-lg py-5 my-5 ">
                    <h1 className="text-center text-decoration-underline pb-5">{productSliderData?.title}</h1>
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
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
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
                       
                            {
                                productSliderData?.items.map((data,index)=> (
                                <>
                                {
                                    data?.isShow && (
                                        <SwiperSlide key={data?.id} >
                                        <Card >
                                        <div className="w-100">
                                        <Image src={data?.image} alt=" " variant="top" layout="responsive" width='100%' height='50%' objectFit='cover'/>
                                        </div>
                                            <Card.Body>
                                                <Card.Title>{data?.title}</Card.Title>
                                                <Card.Text>
                                                {data?.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        </SwiperSlide>
                                    )
                                }
                                </>
                                ))
                            }
                    </Swiper>
                </div>
                } 
    </section>
    );
};

export default ProductSlider;