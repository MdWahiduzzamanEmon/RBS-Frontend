import React from "react";
import TCategories from "./TCategories/TCategories";
import styles from "./Testimonials.module.css";
import TestimonialsWrapper from "./TestimonialsWrapper/TestimonialsWrapper";

const Testimonials = ({ testimonialsData }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  console.log(selectedCategory);
  return (
    <section>
      <div className={`${styles.testimonialsWrapper} container-xl`}>
        <h1 className={`${styles.testimonialsWrapperTitle}`}>
          {testimonialsData.title}
        </h1>
        <p className={`${styles.testimonialsWrapperDescription}`}>
          {testimonialsData.description}
        </p>
        <TCategories
          categoriesData={testimonialsData?.categories}
          setSelectedCategory={setSelectedCategory}
        />
        <TestimonialsWrapper
          testimonials={testimonialsData?.testimonials}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
};

export default Testimonials;
