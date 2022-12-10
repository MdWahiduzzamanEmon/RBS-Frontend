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
        fontFamily: "Poppins",
        padding: "50px 0",
        // backgroundImage:
        //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        //   "linear-gradient(to right, #24c6dc, #514a9d)",
      }}
    >
      <div
        style={{
          display: featuresData?.titleData?.isShow ? "block" : "none",
        }}
        className={`${styles.description}`}
      >
        {featuresData?.titleData?.titleItems?.map((data) => (
          <div key={data.id} data-aos="zoom-out-right">
            <h1 className="fs-2 text-center fw-bold mb-3">{data.title} </h1>
            <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
          </div>
        ))}
      </div>
      <div className="container ">
        <div
          className="row container justify-content-center text-center"
          // data-layout="masonry"
          // style="overflow: visible"
        >
          {featuresData?.cardItem?.items.slice(0, 12).map((card) => (
            <div
              className="col-md-4 col-lg-3 mb-4"
              key={Math.random()}
              // data-aos="zoom-out-right"
            >
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "20px",
                }}
                className={`${styles.card}`}
              >
                <Image
                  src={card.img}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
                <h3 className="fs-5 fw-bold mt-3 text-capitalize">
                  {card.title}
                </h3>
                {/* <p className="fs-6 px-1 ">{card.description}</p> */}
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
