import React from "react";
import Testimonial from "./Testimonial/Testimonial";
import styles from "./TestimonialsWrapper.module.css";

const TestimonialsWrapper = ({ testimonials, selectedCategory }) => {
  return (
    <div
      className={`${styles.testimonialsWrapper}`}
      //   style={{ background: "#173465" }}
    >
      {selectedCategory ? (
        <>
          {testimonials
            ?.filter((testimonial) => testimonial.category === selectedCategory)
            .map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                testimonial={testimonial}
                className={`${styles.testimonial}`}
              />
            ))}
        </>
      ) : (
        <>
          {testimonials?.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
              className={`${styles.testimonial}`}
            />
          ))}
        </>
      )}
      {selectedCategory === "All Features" && (
        <>
          {testimonials?.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
              className={`${styles.testimonial}`}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TestimonialsWrapper;
