import Link from "next/link";
import React from "react";
import productStyles from "./Product.module.css";

const Product = ({ navLinks, dispatch }) => {
  return (
    <div className={`${productStyles.productContainer}`}>
      <div>
        <h1 className={`${productStyles.primaryTitle}`}>
          {navLinks?.[0]?.items?.text}
        </h1>
        <Link href="/contactUs">
          <div
            className={`${productStyles.primaryHoverLink}`}
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
            <h4 className={`${productStyles.secondaryTitle}`}>
              {navLinks?.[0]?.items?.title}
            </h4>
            <p>{navLinks?.[0]?.items?.description}</p>
          </div>
        </Link>
      </div>
      {navLinks?.[0]?.subItems?.map((item) => (
        <div key={item.id}>
          <hr />
          <h1 className={`${productStyles.primaryTitle}`}>{item.text}</h1>
          <Link href="/pricing">
            <div
              className={`${productStyles.subProductContainer}`}
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
                  className={`${productStyles.secondaryHoverLink}`}
                >
                  <h4 className={`${productStyles.tertiaryTitle}`}>
                    {option.title}
                  </h4>
                </div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
