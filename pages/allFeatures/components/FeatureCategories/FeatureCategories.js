import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./FeatureCategories.module.css";

const FeatureCategories = ({ categoriesData }) => {
  console.log(categoriesData);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      }}
    >
      {categoriesData?.map((feature) => (
        <div
          key={feature.id}
          className={`${styles.categoriesContainer} container-xl`}
        >
          <h3 className={`${styles.categoriesContainerTitle}`}>
            {feature.title}
          </h3>
          <div className={`${styles.featureCardsContainer}`}>
            {feature.features.map((item) => (
              <FeatureCard key={item.id} featureCardData={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureCategories;
