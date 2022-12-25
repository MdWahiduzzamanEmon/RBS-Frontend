import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./WatchDemosBanner.module.css";

const WatchDemosBanner = (data) => {
  const { title, description, image } = data.data;
  console.log(title, description, image);
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
          {/* <div className={`${styles.bannerImageContainer}`}>
            <Image
              src={image}
              alt="image"
              width={1200}
              height={800}
              layout="intrinsic"
              objectFit="fill"
              className={`${styles.bannerImage}`}
            />
          </div> */}
          <div className={`${styles.bannerImageContainer}`}>
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube-nocookie.com/embed/q6LMjurECZM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchDemosBanner;
