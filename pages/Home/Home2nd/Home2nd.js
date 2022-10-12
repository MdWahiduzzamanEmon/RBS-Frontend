import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
// import images from "../../../public/";
// import avatar from "../../../public/banner2.jpeg";
import style from "./Home2nd.module.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Home2nd = ({ home2ndData }) => {
  const [isSSR, setIsSSR] = React.useState(true);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <section>
      {!isSSR && (
        <div
          className=" my-5 py-5 mx-auto"
          style={{
            fontFamily: "Poppins",
            display: home2ndData?.isShow ? "block" : "none",
          }}
        >
          {" "}
          <div
            style={{
              display: home2ndData?.titleData.isShow ? "block" : "none",
            }}
            className={`${style.description}`}
          >
            {home2ndData?.titleData?.titleItems?.map((data) => (
              <div key={data.id}>
                <h1 className="fs-2 text-center fw-bold my-3">{data.title} </h1>
                <p className="text-center fs-6 mb-5">
                  {data.titleDescription}{" "}
                </p>
              </div>
            ))}
          </div>
          <div
          // className="row row-cols-1 row-cols-md-3 g-4"
          // style={{
          //                     display: (home2ndData?.items.isShow) ? "block" : "none"
          //                 }}
          >
            {/* {home2ndData?.cardItem?.items?.slice(0, 3).map((card) => ( */}
            {/* {home2ndData?.cardItem?.items.map((card) => (
          <div key={card.id}> */}
            {/* <div>
              <Home2ndSlider card={card} />
            </div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={5}
              freeMode={true}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {home2ndData?.cardItem?.items.slice(0, 6).map((card) => (
                <div key={card.id}>
                  <SwiperSlide
                  // style={{ transitionTimingFunction: "linear" }}
                  >
                    <Card
                      className=" card shadow-lg rounded "
                      style={{
                        // display: (card.isShow) ? "block" : "none"
                        backgroundImage: `url(${card?.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        backgroundBlendMode: "multiply",
                        height: "150px",
                        color: "white",
                      }}
                    >
                      {/* <Image
                  className="img-fluid rounded-top"
                  src={card.img}
                  alt=""
                  width="300px"
                  height="200px"
                /> */}
                      {/* <Card.Body>
                  <Card.Title className="fs-5 p-5 ">{card.title}</Card.Title> */}
                      {/* <Card.Text className="fs-6">{card.description}</Card.Text> */}
                      {/* <Link href="/" style={{ textDecoration: "none" }}>
                    <button className={`${style.btnColor} border-0 `}>
                      Read more <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </Link> */}
                      {/* </Card.Body> */}
                      {/* <div
                  className="card text-white bg-primary mb-3"
                  //   style={{ maxWidth: "18rem" }}
                > */}
                      {/* <div className="card-header">Header</div> */}
                      {/* <div className="card h-100"> */}
                      {/* <Image src="..." class="card-img-top" alt="..."> */}
                      <div className=" m-auto">
                        <h5 className="p-3 ">{card?.title}</h5>
                      </div>
                      {/* </div> */}
                      {/* </div> */}
                    </Card>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
          {/* reverse slider */}
          <div
            style={{ marginTop: "25px" }}
            // className="row row-cols-1 row-cols-md-3 g-4"
            // style={{
            //                     display: (home2ndData?.items.isShow) ? "block" : "none"
            //                 }}
          >
            {/* {home2ndData?.cardItem?.items?.slice(0, 3).map((card) => ( */}
            {/* {home2ndData?.cardItem?.items.map((card) => (
          <div key={card.id}> */}
            {/* <div>
              <Home2ndSlider card={card} />
            </div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={5}
              freeMode={true}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {home2ndData?.cardItem?.items.slice(6, 12).map((card) => (
                <div key={card.id}>
                  <SwiperSlide style={{ transitionTimingFunction: "linear" }}>
                    <Card
                      className=" card shadow-lg rounded "
                      style={{
                        // display: (card.isShow) ? "block" : "none"
                        backgroundImage: `url(${card?.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        backgroundBlendMode: "multiply",
                        height: "150px",
                        color: "white",
                      }}
                    >
                      {/* <Image
                  className="img-fluid rounded-top"
                  src={card.img}
                  alt=""
                  width="300px"
                  height="200px"
                /> */}
                      {/* <Card.Body>
                  <Card.Title className="fs-5 p-5 ">{card.title}</Card.Title> */}
                      {/* <Card.Text className="fs-6">{card.description}</Card.Text> */}
                      {/* <Link href="/" style={{ textDecoration: "none" }}>
                    <button className={`${style.btnColor} border-0 `}>
                      Read more <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </Link> */}
                      {/* </Card.Body> */}
                      {/* <div
                  className="card text-white bg-primary mb-3"
                  //   style={{ maxWidth: "18rem" }}
                > */}
                      {/* <div className="card-header">Header</div> */}
                      {/* <div className="card h-100"> */}
                      {/* <Image src="..." class="card-img-top" alt="..."> */}
                      <div className="m-auto">
                        <h5 className="p-5">{card?.title}</h5>
                      </div>
                      {/* </div> */}
                      {/* </div> */}
                    </Card>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home2nd;
