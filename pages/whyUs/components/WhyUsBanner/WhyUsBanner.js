import Image from "next/image";
import Link from "next/link";
import React from "react";
import Iframe from "react-iframe";
import styles from "./WhyUsBanner.module.css";

const WhyUsBanner = ({ whyUsData }) => {
  const { title, description, video } = whyUsData;
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.bannerContainer} container-xl`}>
        <div>
          <div className={`${styles.bannerTitleContainer}`}>
            <h3 className={`${styles.bannerTitle}`}>{title}</h3>
            <p className={`${styles.bannerDescription}`}>{description}</p>
          </div>

          <div className={`${styles.bannerImageContainer}`}>
            <Iframe
              src={video}
              alt="video"
              width="100%"
              height="400px"
              objectFit="contain"
              className={`${styles.bannerImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsBanner;
