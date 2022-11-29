import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ featureCardData }) => {
  return (
    // <div className={`${styles.card}`}>
    //   <h3 className={`${styles.cardTitle}`}>{featureCardData?.title}</h3>
    //   <p className={`${styles.cardDescription}`}>
    //     {featureCardData?.description}
    //   </p>
    //   <Link href={`/allFeatures/${featureCardData?.name}`}>
    //     <button className={`${styles.cardButton}`}>Read More</button>
    //   </Link>
    // </div>
    // <div className={`${styles.wrap}`}>
    //   <div></div>

    <div className={`${styles.wrap}`}>
      <div className={`${styles.blankWrapper}`}></div>
      <div className={`${styles.text}`}>
        <h3>{featureCardData?.title}</h3>
        <p className={`${styles.description}`}>
          {featureCardData?.description}
        </p>
      </div>
      <Link href={`/allFeatures/${featureCardData?.name}`}>
        <button className={`${styles.cardButton}`}>Read More</button>
      </Link>
    </div>
    // </div>
  );
};

export default FeatureCard;
