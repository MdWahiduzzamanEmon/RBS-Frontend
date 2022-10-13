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
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      <div
        className="container  mx-auto"
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
              <h1 className="fs-2 text-center fw-bold ">{data.title} </h1>
              <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
            </div>
          ))}
        </div>
        <div className="row row-cols-2 row-cols-md-5 g-4 justify-content-center text-center">
          {home2ndData?.cardItem?.items.map((card) => (
            <div key={card.id} className="">
              <Card
                className=" card shadow-lg rounded"
                style={{
                  // display: (card.isShow) ? "block" : "none"
                  backgroundImage: `url(${card?.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  backgroundBlendMode: "multiply",
                  height: "80px",
                  color: "white",
                  fontSize: "15px",
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
                  <h1 className="p-3 fs-6 ">{card?.title}</h1>
                </div>
                {/* </div> */}
                {/* </div> */}
              </Card>
            </div>
          ))}
        </div>
        {/* reverse slider */}
      </div>
    </section>
  );
};

export default Home2nd;
