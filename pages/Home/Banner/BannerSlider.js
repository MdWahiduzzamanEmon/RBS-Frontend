import { Swiper, SwiperSlide } from "swiper/react";
// import banner2 from '../../../public/banner2.png'
// import bannerSlide2 from '../../../public/bannerslide2.png'
// import bannerSlide1 from '../../../public/bannerslide1.png'
// import download from '../../../public/download.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from 'swiper';
import style from "../../../styles/Banner.module.css";
import Image from "next/image";
import React, { useEffect } from "react";
// import required modules
import { Pagination, Navigation } from "swiper";

const images = [
    {
        id:"1",
        img:"/banner2.png"
    },
    {
        id:"2",
        img:"/bannerslide2.png"
    },
    {
        id:"3",
        img:"/bannerslide1.png"
    }
]

export default function Slider() {
    const [isSSR, setIsSSR] = React.useState(true);
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        setIsSSR(false);
    }, []);
    return (
        <>

            {!isSSR && <div >
                <>
                    <Swiper
                        // spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay,
                            // Pagination, Navigation
                        ]}
                    // className="mySwiper"
                    >{
                            images.map((image => (
                                <>
                                    <SwiperSlide key={image.id} className={`${style.slideImg} slideImg`}>
                                        <Image src={image.img} alt="banner image"
                                            height="400px" width="600px"
                                            style={{ objectFit: "cover" }}
                                        // layout="content"
                                        />
                                    </SwiperSlide>
                                    {/* <SwiperSlide className={`${style.slideImg} slideImg`}>
                                        <Image src={image.img} alt="banner image"
                                            height="400px" width="600px"
                                            style={{
                                                objectFit: "cover"
                                            }}
                                        /></SwiperSlide>
                                    <SwiperSlide className={`${style.slideImg} slideImg`}><Image src={bannerSlide1} alt="banner image"
                                        height="400px" width="600px"
                                        style={{
                                            objectFit: "content"
                                        }}
                                    /></SwiperSlide> */}
                                </> 
                            )))
                    }
                        {/* <SwiperSlide className={`${style.slideImg} slideImg`}>
                            <Image src={banner2} alt="banner image"
                                height="400px" width="600px"
                                style={{ objectFit: "cover" }}
                            // layout="content"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={`${style.slideImg} slideImg`}>
                            <Image src={bannerSlide2} alt="banner image"
                                height="400px" width="600px"
                                style={{
                                    objectFit: "cover"
                                }}
                            /></SwiperSlide>
                        <SwiperSlide className={`${style.slideImg} slideImg`}><Image src={bannerSlide1} alt="banner image"
                            height="400px" width="600px"
                            style={{
                                objectFit: "content"
                            }}
                        /></SwiperSlide> */}


                    </Swiper>
                </>
            </div>}

        </>
    );
}
