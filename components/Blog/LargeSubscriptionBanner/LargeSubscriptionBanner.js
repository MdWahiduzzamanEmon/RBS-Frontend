import React from "react";
import styles from "./LargeSubscriptionBanner.module.css";
import imageSubscription from "../../../public/largeSubscriptionBanner.png";
import Image from "next/image";
import LargeSubscriptionSvg from "../../../svgComponents/largeSubscriptionSvg";
import Link from "next/link";

const LargeSubscriptionBanner = () => {
  return (
    <section>
      <div className={`${styles.subscriptionContainer}`}>
        <div className={`${styles.subscriptionInnerContainer} container-lg`}>
          {/* <LargeSubscriptionSvg
          className={`${styles.subscriptionContainerSVG}`}
        /> */}
          <div className={`${styles.subscriptionImageContainer}`}>
            <Image
              src={imageSubscription}
              alt="image"
              width={550}
              height={450}
              layout="responsive"
              objectFit="contain"
              className={`${styles.subscriptionImage}`}
            ></Image>
          </div>
          <div className={`${styles.subscriptionTextContainer}`}>
            <h3 className={`${styles.subscriptionTitle}`}>
              Get Started <br /> With{" "}
              <span className={`${styles.subscriptionTitleSpan}`}>Vitlous</span>
              {/* Subscribe to our newsletter */}
            </h3>
            <p className={`${styles.subscriptionDescription}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              praesentium placeat rerum odio quibusdam perferendis.
              {/* Get the latest news and updates from our team */}
            </p>
            <Link href="/pricing">
              <button className={`${styles.subscriptionButton}`}>
                Get started free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeSubscriptionBanner;
