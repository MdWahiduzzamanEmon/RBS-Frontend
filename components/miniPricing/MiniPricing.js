import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "./MiniPricing.module.css";
import Aos from "aos";

const MiniPricing = ({ miniPricingData }) => {
  const changePriceColor = (itemName) => {
    if (itemName === "Individual") {
      return `${styles.rateContainerItemBlack}`;
    } else if (itemName === "Basic") {
      return `${styles.rateContainerItemPurple}`;
    } else if (itemName === "Standard") {
      return ` ${styles.rateContainerItemBlue}`;
    } else if (itemName === "Pro") {
      return ` ${styles.rateContainerItemGreen}`;
    } else if (itemName === "Enterprise") {
      return ` ${styles.rateContainerItemBlack}`;
    }
  };

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        padding: "50px 0",
      }}
    >
      <div className={`${styles.miniPricingContainer} container`}>
        <h1 className={`${styles.miniPricingTitle}`} data-aos="fade-down-right">
          {miniPricingData.title}
        </h1>
        <div className={`${styles.planContainer}`} data-aos="fade-up-right">
          {miniPricingData?.packages?.map((plan) => (
            <div key={plan.id} className={`${styles.singlePlan}`}>
              <h4>{plan.title}</h4>
              <p style={{ fontSize: "15px" }}>{plan.details}</p>
              <div className={`${styles.rateContainerMiniPricing}`}>
                <p className={changePriceColor(plan.title)}>
                  <small>{plan.price}</small>
                </p>
                <div className={`${styles.rateContainerRight}`}>
                  <p className="mb-0">
                    <small>seat/</small>
                  </p>
                  <p className="">
                    <small>month</small>
                  </p>
                </div>
              </div>
              <button className={`${styles.primaryButton} mb-2`}>
                Try for free
              </button>
              {/* <Link href="/pricing">
                <p
                  className={`${styles.mPricingLink}`}
                  style={{ cursor: "pointer", color: "#5a5ad5" }}
                > */}
              {/* <small> */}
              {/* Learn more <FaChevronRight fontSize="10px" /> */}
              {/* </small> */}
              {/* </p>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniPricing;
