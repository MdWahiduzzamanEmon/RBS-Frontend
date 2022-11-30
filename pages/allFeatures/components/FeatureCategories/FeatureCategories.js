import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import StickyCategoriesMenu from "../StickyCategoriesMenu/StickyCategoriesMenu";
import styles from "./FeatureCategories.module.css";

const FeatureCategories = ({ categoriesData }) => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      }}
    >
      <div className="container-xl" style={{ position: "relative" }}>
        {/* section Categories Menu bar */}
        <div style={{ position: "sticky", top: "20px", zIndex: "50" }}>
          <StickyCategoriesMenu />
        </div>

        {categoriesData?.map((feature) => (
          <div
            key={feature.id}
            className={`${styles.categoriesContainer}`}
            id={feature.title}
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
      </div>
    </section>
  );
};

export default FeatureCategories;
