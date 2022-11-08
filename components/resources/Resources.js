import Link from "next/link";
import React from "react";
import resourcesStyles from "./Resources.module.css";

const Resources = ({ navLinks, dispatch }) => {
  return (
    <div className={`${resourcesStyles.productContainer}`}>
      <div>
        <h1 className={`${resourcesStyles.primaryTitle}`}>
          {navLinks?.[1]?.items?.text}
        </h1>
        <Link href="/contactUs">
          <div
            className={`${resourcesStyles.primaryHoverLink}`}
            onClick={() => {
              dispatch({
                type: "CLOSE_NAVBAR",
                payload: {
                  openProduct: false,
                  openResources: false,
                  openPricing: false,
                  openWatchADemo: false,
                  innerText: "",
                },
              });
            }}
          >
            <h4 className={`${resourcesStyles.secondaryTitle}`}>
              {navLinks?.[1]?.items?.title}
            </h4>
            <p>{navLinks?.[1]?.items?.description}</p>
          </div>
        </Link>
      </div>
      {navLinks?.[1]?.subItems?.map((item) => (
        <div key={item.id}>
          <hr />
          <h1 className={`${resourcesStyles.primaryTitle}`}>{item.text}</h1>
          <Link href="/aboutUs">
            <div
              className={`${resourcesStyles.subProductContainer}`}
              onClick={() => {
                dispatch({
                  type: "CLOSE_NAVBAR",
                  payload: {
                    openProduct: false,
                    openResources: false,
                    openPricing: false,
                    openWatchADemo: false,
                    innerText: "",
                  },
                });
              }}
            >
              {item.options.map((option) => (
                <div
                  key={option.id}
                  className={`${resourcesStyles.secondaryHoverLink}`}
                >
                  <h4 className={`${resourcesStyles.tertiaryTitle}`}>
                    {option.title}
                  </h4>
                  <p>{option.description}</p>
                </div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Resources;
