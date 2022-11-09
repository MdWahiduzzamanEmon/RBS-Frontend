import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
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
          {miniPricingData?.packages?.map((plan) => (
            <div key={plan.id} className={`${styles.singlePlan}`}>
              <h4>{plan.title}</h4>
              <p>{plan.details}</p>
              <div className={`${styles.rateContainerMiniPricing}`}>
                <p className="fs-1">
                  <small>{plan.price}</small>
                </p>
                <div>
                  <p className="mb-0">
                    <small>seat/</small>
                  </p>
                  <p className="mb-1">
                    <small>month</small>
                  </p>
                </div>
              </div>
              <button className={`${styles.primaryButton} mb-2`}>
                Try for free
              </button>
              <Link href="/pricing">
                <p
                  className={`${styles.mPricingLink}`}
                  style={{ cursor: "pointer", color: "#5a5ad5" }}
                >
                  {/* <small> */}
                  Learn more <FaChevronRight fontSize="10px" />
                  {/* </small> */}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniPricing;
