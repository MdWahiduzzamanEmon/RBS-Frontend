import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./WatchDemosBanner.module.css";

const WatchDemosBanner = (data) => {
  const { title, description, image } = data.data;
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.bannerContainer} container-lg`}>
        <div className={`${styles.bannerTitleContainer}`}>
          <h3 className={`${styles.bannerTitle}`}>{title}</h3>
          <p className={`${styles.bannerDescription}`}>{description}</p>
        </div>

        <div className={`${styles.bannerImageContainer}`}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/q6LMjurECZM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WatchDemosBanner;
