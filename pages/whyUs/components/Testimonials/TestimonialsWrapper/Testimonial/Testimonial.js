import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = ({ testimonial }) => {
  const { name, title, text, category } = testimonial;
  return (
    <div className={`${styles.testimonialWrapper}`}>
      <div className={`${styles.blankWrapper}`}></div>
      <div className={`${styles.text}`}>
        <p className={`${styles.textCategory}`}>{category}</p>
        <h3 className={`${styles.textTitle}`}>{title}</h3>
        <p>{text}</p>
        <p>- {name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
