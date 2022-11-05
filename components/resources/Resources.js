import Link from "next/link";
import React from "react";
import resourcesStyles from "./Resources.module.css";

const Resources = ({ navLinks }) => {
  return (
    <div className={`${resourcesStyles.productContainer}`}>
      <div>
        <h1 className={`${resourcesStyles.primaryTitle}`}>
          {navLinks?.[0]?.items?.text}
        </h1>
        <Link href="/home">
          <div className={`${resourcesStyles.primaryHoverLink}`}>
            <h4 className={`${resourcesStyles.secondaryTitle}`}>
              {navLinks?.[0]?.items?.title}
            </h4>
            <p>{navLinks?.[0]?.items?.description}</p>
          </div>
        </Link>
      </div>
      {navLinks?.[0]?.subItems?.map((item) => (
        <div key={item.id}>
          <hr />
          <h1 className={`${resourcesStyles.primaryTitle}`}>{item.text}</h1>
          <div className={`${resourcesStyles.subProductContainer}`}>
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
        </div>
      ))}
    </div>
  );
};

export default Resources;
