import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const FeatureWithLeftImage = ({ feature }) => {
  const { title, description, keyPoints } = feature;
  return (
    <div
      style={{
        fontFamily: "Poppins",
        background: "rgb(226, 246, 254)",
        // background: "linear-gradient(to right, #24c6dc, #514a9d)",
        padding: "50px 0",
      }}
    >
      <div className="d-flex flex-column-reverse  flex-lg-row align-items-center container-lg">
        <div className="p-3 w-100 w-lg-50" data-aos="zoom-in-down">
          {/* {home3rdData?.items?.map((data, index) => ( */}
          <div>
            <h1 className="fs-2 fw-bold  mb-3">{title}</h1>
            <p
              className="fs-6"
              style={{
                color: "rgb(75, 101, 126)",
              }}
            >
              {description}
            </p>
            {keyPoints.map((keyPoint, index) => (
              <div key={keyPoint.id}>
                <h3 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCheckCircle} color="#FF9900" />
                  </span>
                  {title}
                </h3>
                <p
                  className="fs-6"
                  style={{
                    color: "rgb(75, 101, 126)",
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
          {/* ))} */}
        </div>
        <div className="p-3 w-100 w-lg-50" data-aos="zoom-in-down">
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

export default FeatureWithLeftImage;
