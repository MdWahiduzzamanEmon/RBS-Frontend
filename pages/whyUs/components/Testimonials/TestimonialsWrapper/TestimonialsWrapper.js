import React from "react";
import Testimonial from "./Testimonial/Testimonial";
import styles from "./TestimonialsWrapper.module.css";

const TestimonialsWrapper = ({ testimonials, selectedCategory }) => {
  //   const showTestimonials = (testimonials, selectedCategory) => {
  //     switch (selectedCategory) {
  //       case selectedCategory: {
  //         return (
  //           <>
  //             {testimonials
  //               ?.filter(
  //                 (testimonial) => testimonial.category === selectedCategory
  //               )
  //               .map((testimonial) => (
  //                 <Testimonial
  //                   key={testimonial.id}
  //                   testimonial={testimonial}
  //                   className={`${styles.testimonial}`}
  //                 />
  //               ))}
  //           </>
  //         );
  //       }
  //       case selectedCategory === "All Features": {
  //         return (
  //           <>
  //             {testimonials?.map((testimonial) => (
  //               <Testimonial
  //                 key={testimonial.id}
  //                 testimonial={testimonial}
  //                 className={`${styles.testimonial}`}
  //               />
  //             ))}
  //           </>
  //         );
  //       }
  //       default:
  //         return (
  //           <>
  //             {testimonials?.map((testimonial) => (
  //               <Testimonial
  //                 key={testimonial.id}
  //                 testimonial={testimonial}
  //                 className={`${styles.testimonial}`}
  //               />
  //             ))}
  //           </>
  //         );
  //     }
  //   };

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
      {/* {showTestimonials(testimonials, selectedCategory)} */}
    </div>
  );
};

export default TestimonialsWrapper;
