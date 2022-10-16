import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import todoBoard1 from "../../../public/todoBoard1.png";

const Home9thSlider = ({ home9thData }) => {
  console.log(home9thData);
  return (
    <div className="w-100">
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {home9thData?.pics?.map(
          (data) => (
            <SwiperSlide key={data.id}>
              <Image
                key={data.id}
                src={data?.img}
                width="100%"
                height="80%"
                layout="responsive"
                // objectFit="cover"
                alt="image"
              />
            </SwiperSlide>
          )
          // console.log(data.img)
        )}
        {/* </Swiper> */}
      </Swiper>
    </div>
  );
};

export default Home9thSlider;
