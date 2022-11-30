import Image from "next/image";
import Link from "next/link";
import React from "react";
import Iframe from "react-iframe";
import styles from "./WhyUsBanner.module.css";

const WhyUsBanner = ({ whyUsData }) => {
  console.log(whyUsData);
  const { title, description, video } = whyUsData;
  console.log(title);
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.bannerContainer} container-xl`}>
        <div>
          <div className={`${styles.bannerTitleContainer}`}>
            <h3 className={`${styles.bannerTitle}`}>{title}</h3>
            <p className={`${styles.bannerDescription}`}>{description}</p>
          </div>
          {/* <div className={`${styles.bannerButtonContainer}`}>
            <Link href="/pricing">
              <button className={`${styles.bannerButtonLeft}`}>Try Free</button>
            </Link>
            <Link href="/pricing">
              <button className={`${styles.bannerButtonRight}`}>
                See Pricing
              </button>
            </Link>
          </div> */}
          <div className={`${styles.bannerImageContainer}`}>
            {/* <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            > */}
            <Iframe
              src={video}
              alt="video"
              width="100%"
              height="400px"
              objectFit="contain"
              className={`${styles.bannerImage}`}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsBanner;
