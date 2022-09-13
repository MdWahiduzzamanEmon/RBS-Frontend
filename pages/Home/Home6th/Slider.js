import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper';
import style from "./Home6th.module.css";
// import required modules
import { Pagination } from "swiper";
import Image from "next/image";


export default function Slider() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <div
                className={`${style.background} 
                container-lg my-5 p-5 mx-auto rounded-5 w-100 text-white`} 
                >
                <Swiper
                    className={`${style.swiper} `}
                    slidesPerView="auto"
                    loop={true}
                    autoplay={{
                        delay:3000
                    }}
                spaceBetween={30}
                centeredSlides={true}
                   
                pagination={{
                    clickable: true,
                }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                           
               
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                modules={[Pagination,Autoplay]}
                // className="mySwiper"
            >
                
                    <SwiperSlide
                        className={`${style.SwiperSlide}`}
                    ><h1 className={`${style.SwiperSlide}`}
                        >AIRTEL</h1>
                    </SwiperSlide>
                    <SwiperSlide
                        className={`${style.SwiperSlide}`}
                    ><h1>RBS Tech </h1>
                    </SwiperSlide>
                    <SwiperSlide
                        className={`${style.SwiperSlide}`}
                    ><h1>RBS Tech</h1>
                    </SwiperSlide>
                    <SwiperSlide
                        className={`${style.SwiperSlide}`}
                    ><h1>TELETALK</h1>
                    </SwiperSlide>
                    <SwiperSlide
                        className={`${style.SwiperSlide}`}
                    ><h1>TELETALK</h1>
                    </SwiperSlide>
                </Swiper>
                </div>
            
        </>
    );
}
