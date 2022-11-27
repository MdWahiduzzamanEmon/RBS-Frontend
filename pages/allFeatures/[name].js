import Image from "next/image";
import Link from "next/link.js";
import React from "react";
import { allFeaturesDemoData } from "../../public/JSON/allFeatures/allFeatures";
import styles from "./SingleFeature.module.css";

export const getStaticPaths = async () => {
  const paths = allFeaturesDemoData.map((feature) => ({
    params: { name: feature.name.toString() },
  }));
  console.log(allFeaturesDemoData);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const featuresData = allFeaturesDemoData.filter(
    (feature) => feature.name.toString() === params.name
  );
  return {
    props: {
      feature: featuresData,
    },
  };
};

const SingleFeature = ({ feature }) => {
  //   console.log(allFeaturesDemoData);
  console.log(feature);
  return (
    <div className="container-xl">
      {feature.map((item) => (
        <div key={item.id}>
          {/* <h1 className={`${styles.title}`}>{item.details.title}</h1> */}
          <div
            className={`${styles.bannerContainer} flex-md-column flex-sm-column flex-lg-row flex-column align-items-center justify-content-center`}
          >
            <div
              className={`${styles.bannerInnerContainerTop} p-5 text-justify`}
            >
              <p className={`${styles.bannerInnerContainerPath}`}>
                Features/{item.banner.title}
              </p>
              <h3 className={`${styles.bannerInnerContainerTitle}`}>
                {item.banner.title}
              </h3>
              <p className={`${styles.bannerInnerContainerDetails}`}>
                {item.banner.description}
              </p>
            </div>
            <div className={`${styles.bannerInnerContainerBottom}`}>
              <video
                autoPlay
                loop
                muted
                src={item?.banner?.video}
                // layout="responsive"
                width="600"
                height="auto"
                // className={`${styles.bannerInnerContainerVideo}`}
              ></video>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleFeature;
