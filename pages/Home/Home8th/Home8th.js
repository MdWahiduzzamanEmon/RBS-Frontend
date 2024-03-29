import React from "react";
import gradientImage from "../../../public/gradient-image-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import home8thStyles from "./Home8th.module.css";
import Image from "next/image";
import Aos from "aos";
import communicationImage from "../../../public/image/online-communication.png";

const Home8th = ({ home8thData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <section
      className={`${home8thStyles.sectionStyles}`}
      style={{
        backgroundImage: `url(${gradientImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: home8thData?.isShow ? "block" : "none",
        padding: "50px 0 130px",
        // backgroundColor: "rgb(226, 246, 254)",
        // fontFamily: "open sans",
      }}
    >
      <div className=" container-lg">
        {home8thData?.items?.map((data, index) => (
          <div
            key={index}
            // className="row row-cols-1 row-cols-md-1 row-cols-lg-2 align-items-center "
            className="d-flex flex-column flex-lg-row align-items-center  gap-5"
          >
            <div data-aos="zoom-in-right" className="w-100 w-lg-50">
              <Image
                key={data?.id}
                src={communicationImage}
                alt=" "
                objectFit="contain"
                width={500}
                height={450}
                layout="responsive"
                className="rounded-5 "
              />
            </div>

            <div data-aos="zoom-in-right" className="w-100 w-lg-50">
              <h1 className="fw-bold mt-3 mb-3">{data.title}</h1>
              <p className="fs-6 mb-4" style={{ textAlign: "justify" }}>
                {data.titleDescription}
              </p>
              <div>
                <h1 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCircleCheck} color="#00D2D2" />
                  </span>
                  {data.subTitle1}
                </h1>
                <p className="fs-6" style={{ textAlign: "justify" }}>
                  {data.subTitleDescription1}
                </p>
              </div>
              <div>
                <h1 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCircleCheck} color="#FF9900" />
                  </span>
                  {data.subTitle2}
                </h1>
                <p className="fs-6" style={{ textAlign: "justify" }}>
                  {data.subTitleDescription2}
                </p>
              </div>
              <div>
                <h1 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCircleCheck} color="#FF7575" />
                  </span>
                  {data.subTitle3}
                </h1>
                <p className="fs-6" style={{ textAlign: "justify" }}>
                  {data.subTitleDescription3}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home8th;
