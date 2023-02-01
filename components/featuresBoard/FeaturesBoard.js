import Image from "next/image";
import Link from "next/link";
import React from "react";
import { home2ndJson } from "../../public/JSON/home2ndJson";
import styles from "./FeaturesBoard.module.css";
const featuresData = home2ndJson;

const FeaturesBoard = () => {
  return (
    <section
      style={{
        fontFamily: "Ubuntu",
        padding: "130px 0",
        background: "linear-gradient(55deg, #24c6dc 0%,#140c1f 100%)",
      }}
    >
      <div className={`${styles.description} container-lg`}>
        {featuresData?.titleData?.titleItems?.map((data) => (
          <div key={data.id} data-aos="zoom-out-right">
            <h1
              className="mb-3 text-center"
              style={{
                color: "#fff",
              }}
            >
              {data.title}{" "}
            </h1>
            <p
              className="text-center fs-6 mb-5 text-white  "
              style={{
                opacity: "0.8",
              }}
            >
              {data.titleDescription}{" "}
            </p>
          </div>
        ))}
      </div>
      <div className="container ">
        <div className="row justify-content-center text-center">
          {featuresData?.cardItem?.items.slice(0, 12).map((card) => (
            <div className="col-md-4 col-lg-3 mb-4" key={Math.random()}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  minHeight: "100px",
                }}
              >
                <Image
                  src={card.img}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                />
                <h3
                  className="fs-6 fw-bold mt-3 text-capitalize 
              
                "
                  style={{
                    color: "#fff",
                  }}
                >
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.featureButtonWrapper}`}>
          <Link href="/allFeatures">
            <button className={`${styles.featureBoardButton}`}>View All</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBoard;
