import React from "react";
import styles from "./Categories.module.css";

const CategoriesBlog = () => {
  const categories = [
    {
      name: "Project Management",
    },
    {
      name: "Product Management",
    },
    {
      name: "Time Management",
    },
    {
      name: "Marketing",
    },
    {
      name: "Communication",
    },
  ];
  return (
    <section>
      <div className={`${styles.categoriesContainer} container-xl`}>
        {categories.map((category) => (
          <div key={category.id} className={`${styles.category}`}>
            {category.name}
          </div>
        ))}
        {/* <div>Product Management</div>
        <div>Time Management</div>
        <div>Marketing</div>
        <div>Communication</div> */}
      </div>
    </section>
  );
};

export default CategoriesBlog;
