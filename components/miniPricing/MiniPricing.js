import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "./MiniPricing.module.css";
import Aos from "aos";

const MiniPricing = ({ miniPricingData }) => {
  const changePriceColor = (itemName) => {
    if (itemName === "Basic") {
      return `${styles.rateContainerItemPurple}`;
    } else if (itemName === "Standard") {
      return ` ${styles.rateContainerItemBlue}`;
    } else if (itemName === "Premium") {
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
              <div style={{ height: "150px" }}>
                <h4>{plan.title}</h4>
                <p style={{ fontSize: "15px" }}>{plan.details}</p>
                <div className={`${styles.rateContainerMiniPricing}`}>
                  {plan.title !== "Enterprise" && (
                    <p className={changePriceColor(plan.title)}>
                      <small>{plan.price}</small>
                    </p>
                  )}
                  <div className={`${styles.rateContainerRight}`}>
                    {plan.title === "Enterprise" && (
                      <button className={`${styles.primaryButton}`}>
                        Contact us
                      </button>
                    )}
                    {plan.title === "Basic" && (
                      <p className="mb-0">
                        <small>person/</small>
                      </p>
                    )}
                    {plan.title !== "Basic" && plan.title !== "Enterprise" && (
                      <p className="mb-0">
                        <small>company/</small>
                      </p>
                    )}
                    {plan.title !== "Enterprise" && (
                      <p className="">
                        <small>month</small>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <ul className={`${styles.featuresList}`}>
                  <li>Unlimited User</li>
                  <li>Whit Label Branding</li>
                  <li>Kanban Board</li>
                  <li>Gantt Chart</li>
                  <li>Resource Management</li>
                  <li>Time Tracking</li>
                  <li>Document Management</li>
                  <li>Issue Tracking</li>
                </ul>
              </div>

              <Link href="/pricing">
                <button className={`${styles.primaryButton} mb-2`}>
                  Try for free
                </button>
              </Link>
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
