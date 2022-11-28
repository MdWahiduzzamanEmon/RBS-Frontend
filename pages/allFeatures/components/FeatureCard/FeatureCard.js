import Link from "next/link";
import React from "react";
import styles from "./FeatureCard.module.css";

const FeatureCard = ({ featureCardData }) => {
  console.log(featureCardData);
  return (
    <div className={`${styles.card}`}>
      <h3 className={`${styles.cardTitle}`}>{featureCardData?.title}</h3>
      <p className={`${styles.cardDescription}`}>
        {featureCardData?.description}
      </p>
      <Link href={`/allFeatures/${featureCardData?.name}`}>
        <button className={`${styles.cardButton}`}>Read More</button>
      </Link>
    </div>
  );
};

export default FeatureCard;
