import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./PricingForSD.module.css";

const PricingForSD = ({ pricingData }) => {
  const changePriceColor = (itemName) => {
    if (itemName === "Basic") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftPurple}`;
    } else if (itemName === "Individual") {
      return `${styles.rateContainerTopItemLeft}`;
    } else if (itemName === "Standard") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftBlue}`;
    } else if (itemName === "Pro") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftGreen}`;
    } else if (itemName === "Enterprise") {
      return `${styles.rateContainerTopItemLeft} `;
    }
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        // spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
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
        {/* <div className={`${styles.container}`}> */}
        {pricingData?.items?.map((item, index) => (
          <SwiperSlide key={item.id} className={`${styles.pricingCard}`}>
            <div
              // className={`${styles.pricingCard}`}
              key={item.id}
            >
              <h5 className={`${styles.heading}`}>{item.title}</h5>
              <div className={`${styles.rateContainer}`}>
                <div className={`${styles.rateContainerTop}`}>
                  <p className={changePriceColor(item.title)}>${item.price}</p>
                  <div className={`${styles.rateContainerTopItemRight}`}>
                    <p className="mb-0">seat/</p>
                    <p>month</p>
                  </div>
                </div>
                <div className={`${styles.rateContainerBottom}`}>
                  <p className={`${styles.rateContainerBottomItemTop}`}>
                    Total ${item.monthlyPrice} / month
                  </p>
                  <p className={`${styles.rateContainerBottomItemBottom}`}>
                    <small>{item.billingDuration}</small>
                  </p>
                </div>
              </div>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
              <p className={`${styles.shortIntro}`}>{item.shortIntro}</p>

              <div className={`${styles.divider}`}></div>

              <div>
                <h3 className={`${styles.includesTitle}`}>
                  {item.features.title}
                </h3>
                <div>
                  {item.features.lists.map((list) => (
                    <div className={`${styles.rateIncludePart}`} key={list.id}>
                      <p className={`${styles.features}`}>
                        <small>{list.title}</small>
                      </p>
                      <FaExclamationCircle color="#A0A1AC" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* </div> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default PricingForSD;
