import Link from "next/link";
import React from "react";
import productStyles from "./Product.module.css";

const Product = ({ navLinks }) => {
  return (
    <div className={`${productStyles.productContainer}`}>
      <div>
        <h1 className={`${productStyles.primaryTitle}`}>
          {navLinks?.[0]?.items?.text}
        </h1>
        <Link href="/home">
          <div className={`${productStyles.primaryHoverLink}`}>
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
          <div className={`${productStyles.subProductContainer}`}>
            {item.options.map((option) => (
              <div
                key={option.id}
                className={`${productStyles.secondaryHoverLink}`}
              >
                <h4 className={`${productStyles.tertiaryTitle}`}>
                  {option.title}
                </h4>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
