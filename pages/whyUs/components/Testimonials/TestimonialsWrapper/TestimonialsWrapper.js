import React from "react";
import Testimonial from "./Testimonial/Testimonial";
import styles from "./TestimonialsWrapper.module.css";

const TestimonialsWrapper = ({ testimonials }) => {
  console.log(testimonials);
  return (
    <div
      className={`${styles.testimonialsWrapper}`}
      //   style={{ background: "#173465" }}
    >
      {testimonials?.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          testimonial={testimonial}
          className={`${styles.testimonial}`}
        />
      ))}
    </div>
  );
};

export default TestimonialsWrapper;
