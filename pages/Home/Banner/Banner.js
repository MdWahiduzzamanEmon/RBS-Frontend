import Navbar from "../Navbar/NavBar";
import Image from "next/image";
import banner2 from "../../../public/banner2.jpeg";
// import download from "../../../public/download.jpg";
// import bannerImage1 from "../../../public/bannerImage1.jpg";
import bannerImage2 from "../../../public/bannerImage2.jpg";
import bannerImage4 from "../../../public/bannerImage4.jpg";
import NavBar from "../Navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import bannerStyles from "../../../styles/Banner.module.css";
import BannerSlider from "./BannerSlider";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Col, Row } from "react-bootstrap";
import { data } from "autoprefixer";

const Banner = ({ bannerData, bannerImagesData }) => {
  // useEffect(() => {
  //     AOS.init({ duration: 2000 });
  // },[])

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
    >
      <div
        className={`${bannerStyles.bannerWidth}  `}
        style={{
          backgroundImage: `url(${bannerImage4.src})`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 81% 90%, 0 100%, 0% 50%)",
        }}
      >
        <NavBar></NavBar>
        {/* <div className="d-flex align-items-center justify-content-center"> */}
        {/* Marquee text */}
        <div
          style={{
            backgroundColor: "#F3F3F3",
            color: "#000",
            // marginTop: "10px",
          }}
          className="shadow-lg"
        >
          <p
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {marqueeTextDemo?.map((data) => (
              <>
                <FontAwesomeIcon icon={faCircle} size="2xs" color="red" />{" "}
                <small className="ms-2"> {data.text}</small>
              </>
            ))}
          </p>
        </div>
        <div
          className={` ${bannerStyles.bannerContent} container mx-auto  pt-5`}
        >
          {/* <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center p-3"> */}
          <Row className="d-flex ">
            <Col
              md={5}
              // data-aos="fade-right"
              // className="mb-3 mb-lg-0"
            >
              {bannerData?.isShow && (
                <div>
                  {bannerData?.items?.map((item, index) => (
                    <div
                      key={item?.id}
                      style={{ display: item?.isShow ? "block" : "none" }}
                    >
                      <h1 className="fw-bold " style={{ fontSize: "45px" }}>
                        {item?.title}
                      </h1>
                      <div style={{ fontSize: "18px" }}>
                        <p className=" ">
                          <small>{item?.primaryDescription}</small>
                        </p>
                        <p className="">
                          <small>{item?.secondaryDescription}</small>
                        </p>
                        <p className="">
                          <small>{item?.tertiaryDescription}</small>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* <Row
                            // className="d-flex flex-lg-row flex-column"
                            >
                                <button className={`${bannerStyles.buttonGradientOutline} `}><span>Discover More</span> <FontAwesomeIcon icon={faArrowRight} /></button>
                                <button className={`${bannerStyles.buttonGradient} border-0`}>More Features <FontAwesomeIcon icon={faArrowRight} /></button>
                            </Row> */}
            </Col>
            <Col
              md={7}
              // style={{ height: "400px", width: "600px" }}
              // className=" d-flex justify-content-center align-items-center"
            >
              {/* {bannerImagesData.isShow && (
                <BannerSlider bannerImagesData={bannerImagesData} />
              )} */}
              {bannerImagesData?.images?.map((data, index) => (
                <Image
                  key={data.id}
                  src={data.img}
                  width="100%"
                  height="70%"
                  alt="project manager"
                  layout="responsive"
                  // style={{ objectFit: "cover" }}
                ></Image>
              ))}
            </Col>
            {/* </div> */}
          </Row>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Banner;
