import Image from "next/image";
import React from "react";
import styles from "./AllFeaturesBanner.module.css";

const AllFeaturesBanner = ({ bannerData }) => {
  const { title, description, image } = bannerData;
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.bannerContainer} container-xl`}>
        <div>
          <div className={`${styles.bannerTitleContainer}`}>
            <h3 className={`${styles.bannerTitle}`}>{title}</h3>
            <p className={`${styles.bannerDescription}`}>{description}</p>
          </div>
          <div className={`${styles.bannerButtonContainer}`}>
            <button className={`${styles.bannerButtonLeft}`}>Try Free</button>
            <button className={`${styles.bannerButtonRight}`}>
              See Pricing
            </button>
          </div>
          <div className={`${styles.bannerImageContainer}`}>
            {/* <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            > */}
            <Image
              src={image}
              alt="image"
              width={1200}
              height={800}
              layout="intrinsic"
              objectFit="fill"
              className={`${styles.bannerImage}`}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeaturesBanner;
