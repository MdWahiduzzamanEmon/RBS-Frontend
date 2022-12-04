import React from "react";
import styles from "./TCategory.module.css";

const TCategory = ({ category, setSelectedCategory }) => {
  const { title } = category;

  return (
    <div className={`${styles.categoryWrapper}`}>
      <p
        className={`${styles.categoryTitle}`}
        onClick={(e) => setSelectedCategory(e.target.innerText)}
      >
        {title}
      </p>
    </div>
  );
};

export default TCategory;
