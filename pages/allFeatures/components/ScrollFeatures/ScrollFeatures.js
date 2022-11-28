import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ScrollFeatures.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const ScrollFeatures = ({ items }) => {
  console.log(items);
  return (
    <section
      style={{
        padding: "50px 0",
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
      }}
    >
      <div className="container-xl p-5">
        <div>
          <h1 className={`${styles.scrollFeaturesContainerTitle}`}>
            {items?.scrollFeatures?.title}
          </h1>
        </div>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
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
          >
            {items?.scrollFeatures?.features?.map((item) => (
              <SwiperSlide
                key={item.id}
                className={`${styles.sFeatureContainer}`}
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={150}
                    layout="responsive"
                    objectFit="cover"
                    className={`${styles.sFeatureContainerImage}`}
                  ></Image>
                  <h1 className={`${styles.sFeatureContainerTitle}`}>
                    {item.title}
                  </h1>
                  <p className={`${styles.sFeatureContainerDescription}`}>
                    {item.description}
                  </p>
                  <Link href={`/allFeatures/${item.name}`}>
                    <button className={`${styles.sFeatureContainerButton}`}>
                      Read More
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default ScrollFeatures;
