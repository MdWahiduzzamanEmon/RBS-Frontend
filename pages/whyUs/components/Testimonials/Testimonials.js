import React from "react";
import TCategories from "./TCategories/TCategories";
import styles from "./Testimonials.module.css";
import TestimonialsWrapper from "./TestimonialsWrapper/TestimonialsWrapper";

const Testimonials = ({ testimonialsData }) => {
  return (
    <section>
      <div className={`${styles.testimonialsWrapper} container-xl`}>
        <h1 className={`${styles.testimonialsWrapperTitle}`}>
          {testimonialsData.title}
        </h1>
        <p className={`${styles.testimonialsWrapperDescription}`}>
          {testimonialsData.description}
        </p>
        <TCategories categoriesData={testimonialsData?.categories} />
        <TestimonialsWrapper testimonials={testimonialsData?.testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
