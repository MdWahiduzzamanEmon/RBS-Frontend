import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./Home6th.module.css";
import Slider from "./slider";
import React from "react";
import Aos from "aos";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, EffectCreative, Pagination } from "swiper";
import { useRef } from "react";

const Home6th = ({ home6thData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1400,
      easing: "ease-in-out-quart",
    });
  }, []);

  // const activeSlide = useRef;
  // React.useEffect(() => {
  // activeSlide.current = console.log(activeSlide);
  // const handleClick = (event) => {
  //   console.log("Button clicked");
  // };
  // const element = activeSlide.current;
  // element?.addEventListener("change", handleClick);
  // return () => {
  //   element?.removeEventListener("change", handleClick);
  // };
  // }, [activeSlide]);
  // const swiperSlide = useSwiperSlide();
  // console.log(swiperSlide);

  // const [swiper, setSwiper] = React.useState(null);

  // const slideTo = (index) => {
  //   if (swiper) swiper.slideTo(index);
  // };
  // console.log(swiper?.activeIndex);

  const [activeSlide, setActiveSlide] = React.useState(0);

  console.log(activeSlide);

  return (
    <div
      className="mx-auto"
      style={{
        backgroundImage: `url(${home6thData?.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        padding: "50px 0",
        backgroundColor: "rgb(30, 35, 52)",
      }}
    >
      <div
        className=" container-lg mx-auto text-white row row-cols-1 row-cols-md-3 g-4"
        data-aos="zoom-in"
      >
        <div className="text-center">
          <h1 style={{ fontSize: "60px" }}>{home6thData?.column1Title}</h1>
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <h5>{home6thData?.column1SubTitle}</h5>

          <p>{home6thData?.column1Description}</p>
        </div>
        <div>
          {/* <blockquote className={`${style.quote} quote`}>
            {home6thData?.column2Text}{" "}
          </blockquote>
          <p>{home6thData?.column2Name}</p> */}
          <Swiper
            effect={"creative"}
            pagination={true}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // onSwiper={setSwiper}
            onSwiper={(swiper) => console.log(swiper.activeIndex)}
            onSlideChange={(swiper) =>
              console.log("slide change", setActiveSlide(swiper.activeIndex))
            }
          >
            {home6thData?.reviewLists?.map((review) => (
              <SwiperSlide
                style={{ backgroundColor: "" }}
                key={review.id}
                // ref={activeSlide}
                // onChange={(e) => console.log("catching data")}
              >
                {/* {console.log(review)} */}
                <blockquote className={`${style.quote} quote`}>
                  {review?.review}
                </blockquote>

                <p>- {review.name} </p>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide style={{ backgroundColor: "black" }}>
              <blockquote className={`${style.quote} quote`}>
                {home6thData?.column2Text}{" "}
              </blockquote>
              <p>{home6thData?.column2Name}</p>
            </SwiperSlide> */}
            {/* <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>

        <div>
          <h2 className="text-center text-lg-start mb-5">
            {home6thData?.column3Title}
          </h2>

          <div>
            {home6thData?.reviewLists?.map((review, index) => (
              <div
                key={review?.id}
                className="d-flex flex-column justify-content-center align-items-center justify-content-md-start flex-md-row gap-2"
              >
                {activeSlide === index ? (
                  <>
                    <div className="w-25">
                      <Image
                        src={review?.img}
                        alt=" "
                        height={150}
                        width={150}
                        objectFit="cover"
                        layout="responsive"
                        className="rounded-2"
                      />
                    </div>
                    <div className="text-center text-lg-start">
                      <h6>{review?.name}</h6>
                      <p className="">
                        <small>{review?.designation}</small>
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div data-aos="zoom-in-up">
        <Slider sliderData={home6thData?.slider}></Slider>
      </div> */}
    </div>
  );
};

export default Home6th;
