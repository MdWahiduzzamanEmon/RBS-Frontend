import React from "react";
import styles from "./MiniPricing.module.css";

const MiniPricing = ({ miniPricingData }) => {
  console.log(miniPricingData);
  return (
    <section
      style={{
        background: "rgb(226, 246, 254)",
        padding: "50px 0",
      }}
    >
      <div className={`${styles.miniPricingContainer} container`}>
        <h1 className={`${styles.miniPricingTitle}`}>
          {miniPricingData.title}
        </h1>
        <div className={`${styles.planContainer}`}>
          {miniPricingData.packages.map((plan) => (
            <div key={plan.id} className={`${styles.singlePlan}`}>
              <h4>{plan.title}</h4>
              <p>{plan.details}</p>
              <p>
                <small>{plan.price}</small>
              </p>
              <button className={`${styles.primaryButton}`}>
                Try for free
              </button>
              <p>Learn more</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniPricing;
