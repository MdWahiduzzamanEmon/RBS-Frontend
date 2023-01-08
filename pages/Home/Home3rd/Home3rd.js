import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Aos from "aos";
import customizableTaskBoard from "../../../public/image/customizable-task-board.png";

const Home3rd = ({ home3rdData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div
      style={{
        // fontFamily: "open sans",
        // background: "#50577A",
        // background: "#41475E",
        // background: "#2A2B36",

        // background: "linear-gradient(55deg, #47E2D0 0%,#47BDE2 100%)",
        // color: "#50577A",
        // background: "#E7F8FD",
        padding: "130px 0",
      }}
    >
      <div className="d-flex flex-column-reverse flex-lg-row align-items-center container-lg gap-5">
        <div className=" w-100 w-lg-50" data-aos="zoom-in-down">
          {home3rdData?.items?.map((data, index) => (
            <div key={data?.id}>
              <h1 className=" fw-bold mb-3">{data?.title}</h1>
              <p
                className="fs-6 mb-4"
                style={{
                  // color: "rgba(255, 255, 255, 0.8)",
                  // color: "rgb(75, 101, 126)",
                  textAlign: "justify",
                }}
              >
                {data?.description}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#00D2D2" />
                </span>
                {data?.subTitle1}
              </h3>
              <p
                className="fs-6"
                style={{
                  // color: "rgb(75, 101, 126)",
                  // color: "#000",
                  textAlign: "justify",
                }}
              >
                {data?.subTitle1Description}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#FF9900" />
                </span>
                {data?.subTitle2}
              </h3>
              <p
                className="fs-6"
                style={{
                  // color: "rgb(75, 101, 126)",
                  // color: "#000",
                  textAlign: "justify",
                }}
              >
                {data?.subTitle2Description}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#FF7575" />
                </span>
                {data?.subTitle3}
              </h3>
              <p
                className="fs-6 "
                style={{
                  // color: "rgb(75, 101, 126)",
                  textAlign: "justify",
                }}
              >
                {data?.subTitle3Description}
              </p>
            </div>
          ))}
        </div>
        <div className=" w-100 w-lg-50" data-aos="zoom-in-down">
          {home3rdData?.items?.map((data, index) => (
            <Image
              key={data?.id}
              src={data.image}
              alt=" "
              objectFit="contain"
              width={500}
              height={450}
              layout="responsive"
              className="rounded-5 p-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3rd;
