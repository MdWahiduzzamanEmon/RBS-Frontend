import React from "react";
import styles from "./TCategories.module.css";
import TCategory from "./TCategory/TCategory";

const TCategories = ({ categoriesData }) => {
  console.log(categoriesData);
  return (
    <div className={`${styles.categoriesWrapper}`}>
      {categoriesData?.map((category) => (
        <TCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default TCategories;
