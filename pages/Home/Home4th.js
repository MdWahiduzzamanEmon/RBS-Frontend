import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import project2 from "../../public/image/project2.webp";
import imagesIcon1 from "../../public/image/imageIcon1.png";
import imagesIcon2 from "../../public/image/imageIcon2.png";

const Home4th = ({ home4thData }) => {
  return (
    <div
      className="bg-light"
      style={{
        display: home4thData?.isShow ? "block" : "none",
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        padding: "50px 0",
        //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      }}
    >
      <div
        className="container-lg   d-grid grid-column grid-md-row "
        style={{
          fontFamily: "Poppins",
        }}
      >
        {home4thData?.items?.map((data, index) => (
          <Row
            key={index}
            className="align-items-center"
            // style={{ display: (data?.isShow) ? "block" : "none" }}
          >
            <Col
              xs={12}
              md={6}
              className=" d-flex rounded-5 align-items-center py-5"
            >
              <div className="w-100 ">
                <Image
                  className=" justify-content-center max-w-sm rounded-5 p-2"
                  src={data.img}
                  alt=" "
                  // height="400" width="450"
                  height="70%"
                  width="100%"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </Col>
            <Col>
              <h1 className="fs-2 fw-bold">{data.title}</h1>
              <p className="fs-6 my-3">{data.titleDescription}</p>
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-center">
                <Image src={imagesIcon1} alt=" "></Image>
                <h3 className="fs-5 fw-bold ms-2">{data.subTitle1}</h3>
              </div>
              <p className="fs-6 my-3">{data.subTitleDescription1}</p>
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-center">
                <Image src={imagesIcon2} alt=" "></Image>
                <h3 className="fs-5 fw-bold ms-2">{data.subTitle2}</h3>
              </div>
              <p className="fs-6 my-3">{data.subTitleDescription2}</p>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Home4th;
