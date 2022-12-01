import React from "react";
import styles from "./TCategory.module.css";

const TCategory = ({ category }) => {
  const { title } = category;
  return (
    <div className={`${styles.categoryWrapper}`}>
      <p className={`${styles.categoryTitle}`}>{title}</p>
    </div>
  );
};

export default TCategory;
