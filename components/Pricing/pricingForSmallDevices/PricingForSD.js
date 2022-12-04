import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./PricingForSD.module.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Image from "next/image";

const PricingForSD = ({ pricingData }) => {
  const changePriceColor = (itemName) => {
    if (itemName === "Basic") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftPurple}`;
    } else if (itemName === "Individual") {
      return `${styles.rateContainerTopItemLeft}`;
    } else if (itemName === "Standard") {
      return `${styles.rateContainerTopItemLeft} ${styles.rateContainerTopItemLeftBlue}`;
    } else if (itemName === "Premium") {
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
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
              {/* <div className={`${styles.rateContainer}`}>
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
              <p className={`${styles.shortIntro}`}>{item.shortIntro}</p> */}

              <div className={`${styles.rateContainer}`}>
                <div className={`${styles.rateContainerTop}`}>
                  {item.title !== "Enterprise" && (
                    <>
                      <p className={changePriceColor(item.title)}>
                        ${item.price}
                      </p>
                      <div className={`${styles.rateContainerTopItemRight}`}>
                        <p className="mb-0">seat/</p>
                        <p>month</p>
                      </div>
                    </>
                  )}
                </div>
                <div className={`${styles.rateContainerBottom}`}>
                  {item.title === "Enterprise" ? (
                    <Image
                      src={item?.icon}
                      alt="enterprise image"
                      width={80}
                      height={150}
                      objectFit="contain"
                      // layout="responsive"
                      style={{
                        width: "50px",
                        height: "50px",
                        margin: "0 auto",
                      }}
                    ></Image>
                  ) : (
                    <>
                      <p className={`${styles.rateContainerBottomItemTop}`}>
                        Total ${item.monthlyPrice} / month
                      </p>
                      <p className={`${styles.rateContainerBottomItemBottom}`}>
                        <small>{item.billingDuration}</small>
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div>
                {item.title === "Enterprise" ? (
                  <button className={`${styles.primaryButton}`}>
                    Contact us
                  </button>
                ) : (
                  <button className={`${styles.primaryButton}`}>
                    Try for free
                  </button>
                )}
                <p className={`${styles.shortIntro}`}>{item.shortIntro}</p>
              </div>

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
                      {["top"].map((placement) => (
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Voluptas, aut.
                            </Tooltip>
                          }
                          trigger="click"
                        >
                          <Button
                            variant="secondary"
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          >
                            <FaExclamationCircle
                              color="#A0A1AC"
                              // title="Within boards we have rows, or 'Items' - An Item can be anything you want it to be - Task, project, customer, etc. Each free account starts with 200 free Items. You can get more Items by referring friends to create their own accounts."
                              style={{ cursor: "pointer" }}
                            ></FaExclamationCircle>
                          </Button>
                        </OverlayTrigger>
                      ))}
                      {/* <FaExclamationCircle color="#A0A1AC" /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PricingForSD;
