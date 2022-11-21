import Image from "next/image";
// import bannerImageVector from "../../../public/banner/backgroundVector.png";
import bannerImage from "../../../public/banner/bannerImage.jpg";
import NavBar from "../Navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import bannerStyles from "../../../styles/Banner.module.css";
import { Col, Row } from "react-bootstrap";
import Aos from "aos";
import React from "react";
import CircularMotion from "../../../components/circularMotion/CircularMotion";

const Banner = ({ bannerData, bannerImagesData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-quart",
    });
  }, []);

  //get banner detail api
  const marqueeTextDemo = [
    {
      id: 1,
      text: "It's not a project management tool, It's completely  a project management software",
    },
  ];

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      }}
      // className="container"
    >
      {/* <NavBar></NavBar> */}
      {/* marquee text */}
      {/* <div className="container">
        <div
          style={{
            backgroundColor: "#03A8EE",
            color: "#fff",
          }}
          className={`${bannerStyles.marqueeText} shadow-lg`}
        >
          <p
            style={{
              padding: "5px",
              marginTop: "5px",
              marginBottom: "5px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            {marqueeTextDemo?.map((data) => (
              <>
                <small>{data.text}</small>
              </>
            ))}
          </p>
        </div>
      </div> */}
      <div
        className={`${bannerStyles.bannerWidth}  `}
        style={{
          backgroundImage: `url(${bannerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "35% 18%",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 81% 90%, 0 100%, 0% 50%)",
        }}
      >
        {/* marquee text */}
        <div
          style={{
            // backgroundColor: "#03A8EE",
            // backgroundColor: "#161515",
            color: "#fff",
          }}
          className="container"
        >
          <div className={`${bannerStyles.marqueeText} shadow-lg ps-3`}>
            <p
              style={{
                // padding: "10px",
                marginTop: "5px",
                marginBottom: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {marqueeTextDemo?.map((data) => (
                <>
                  <small>{data.text}</small>
                </>
              ))}
            </p>
          </div>
        </div>
        {/* <div className="d-flex align-items-center"> */}
        <div className={`${bannerStyles.bannerContent} container `}>
          <Row className="d-flex">
            <Col sm={12} md={12} lg={5}>
              {bannerData?.isShow && (
                <div>
                  {bannerData?.items?.map((item, index) => (
                    <div
                      key={item?.id}
                      style={{ display: item?.isShow ? "block" : "none" }}
                    >
                      <h1
                        className="fw-bold mb-5 "
                        style={{ fontSize: "45px" }}
                        data-aos="fade-down"
                      >
                        {item?.title}
                      </h1>
                      <div style={{ fontSize: "18px" }}>
                        <p className="" data-aos="fade-up">
                          <small>{item?.primaryDescription}</small>
                        </p>
                        <p className="" data-aos="fade-right">
                          <small>{item?.secondaryDescription}</small>
                        </p>
                        <p className=" mb-5 mb-lg-0" data-aos="fade-up">
                          <small>{item?.tertiaryDescription}</small>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Col>
            <Col sm={12} md={12} lg={7}>
              {/* {bannerImagesData?.images?.map((data, index) => (
                <Image
                  key={data.id}
                  src={data.img}
                  width={700}
                  height={500}
                  alt="project manager"
                  layout="responsive"
                  data-aos="fade-up-left"
                />
              ))} */}
              <CircularMotion />
            </Col>
          </Row>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Banner;
