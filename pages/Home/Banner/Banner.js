// import bannerImage from "../../../public/banner/cover2.jpg";
// import bannerImageVector from "../../../public/banner/backgroundVector.png";
import Aos from "aos";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { banner } from "../../../public/JSON/banner";
import bannerStyles from "../../../styles/Banner.module.css";
import ApprovalIcon from "../../../svgComponents/ApprovalIcon";
import BossIcon from "../../../svgComponents/BossIcon";
import SettingIcon from "../../../svgComponents/SettingIcon";
const Banner = ({ bannerImagesData }) => {
  const bannerData = banner;
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

  function createMarkup(c) {
    // let formattedText = c.replace({ divStyle }, { divStyle });
    return { __html: c };
  }

  const divStyle = {
    color: "blue",
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  return (
    <section
      style={{
        backgroundImage: "linear-gradient(to right, #24c6dc, #514a9d)",
      }}
      // style={{
      //   backgroundImage:
      //     "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      // }}
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
          backgroundImage: "linear-gradient(to right, #140C1F, #140C1F)",

          // `url(${bannerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "35% 18%",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 81% 90%, 0 100%, 0% 50%)",
        }}
      >
        {/* marquee text */}
        <div
          style={{
            color: "#fff",
          }}
          className="container"
        >
          {/* <div className={`${bannerStyles.marqueeText} shadow-lg ps-3`}>
            <p
              style={{
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
          </div> */}
        </div>
        {/* <div className="d-flex align-items-center"> */}
        <div className={`${bannerStyles.bannerContent} container `}>
          <div>
            <div>
              {bannerData?.items?.map((item, index) => (
                <div key={item?.id}>
                  <h1
                    className={`${bannerStyles.secondaryHeading}`}
                    style={{
                      // fontSize: "44px",
                      // fontFamily: "Work Sans",
                      textAlign: "center",
                      // fontWeight: 200,
                    }}
                    data-aos="fade-down"
                    dangerouslySetInnerHTML={createMarkup(item?.title)}
                  >
                    {/* {item.title1} <font color="#0f0"> {item.blueText1}</font>{" "}
                    {item.title2} */}
                    {/* {item?.title} */}
                  </h1>
                  <h1
                    // className="fw-bold mb-5 "
                    style={{
                      // fontSize: "70px",
                      //  color: "#000000",
                      // fontFamily: "Work Sans",
                      textAlign: "center",
                    }}
                    className={`${bannerStyles.primaryHeading} mb-5 `}
                    dangerouslySetInnerHTML={createMarkup(item?.title2)}
                    data-aos="fade-down"
                  >
                    {/* {item.title3} <font color="#0f0"> {item.blueText2}</font>{" "}
                    {item.title4} */}
                    {/* {item?.title} */}
                  </h1>
                  {/* <div className="d-flex justify-content-center"> */}
                  <Row
                    style={{
                      fontSize: "16px",
                      fontFamily: "Poppins",
                      textTransform: "lowercase",
                      // gap: "5px",
                    }}
                    className={`${bannerStyles.row} g-4`}
                  >
                    <Col sm={12} md={12} lg={4}>
                      <div
                        style={{
                          border: "1px solid #0f0",
                        }}
                        className={`${bannerStyles.rowColumn}`}
                      >
                        <i>
                          <ApprovalIcon
                            fill="#0f0"
                            height="20px"
                            width="20px"
                          />
                        </i>
                        {item?.primaryDescription}
                      </div>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                      <div
                        style={{
                          border: "1px solid #f0f",
                        }}
                        className={`${bannerStyles.rowColumn}`}
                      >
                        <i>
                          <SettingIcon fill="#f0f" height="20px" width="20px" />
                        </i>
                        {item?.secondaryDescription}
                      </div>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                      <div
                        style={{
                          border: "1px solid #0ff",
                        }}
                        className={`${bannerStyles.rowColumn}`}
                      >
                        <i>
                          <BossIcon fill="#0ff" height="20px" width="20px" />
                        </i>
                        {item?.tertiaryDescription}
                      </div>
                    </Col>
                  </Row>
                  {/* </div> */}

                  {/* <div style={{
                      fontSize: "18px",
                      // color: "#000",
                      justifyContent: "center",
                      textAlign: "center",

                    }}>
                      <p className="" data-aos="fade-up"
                        style={{
                          display: "flex",
                          direction: "row",
                          gap: "10px",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            hight: "20px",
                            width: "20px",
                            fill: '#f0f'
                          }}
                        >
                          <SettingIcon />
                        </p>
                        <small>
                          {item?.primaryDescription}

                        </small>
                      </p>
                      <p className="" data-aos="fade-right">
                        <small>{item?.secondaryDescription}</small>
                      </p>
                      <p className=" mb-5 mb-lg-0" data-aos="fade-up">
                        <small>{item?.tertiaryDescription}</small>
                      </p>
                    </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Banner;
