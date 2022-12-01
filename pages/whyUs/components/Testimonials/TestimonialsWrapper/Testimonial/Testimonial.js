import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = ({ testimonial }) => {
  console.log(testimonial);
  //   const { name, title, text } = testimonial;
  return (
    <div className={`${styles.testimonialWrapper}`}>
      <div className={`${styles.blankWrapper}`}></div>
      <div className={`${styles.text}`}>
        <h3>{testimonial?.title}</h3>
        <p>{testimonial?.text}</p>
        <p>- {testimonial.name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
