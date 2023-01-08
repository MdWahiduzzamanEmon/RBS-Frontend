import React from "react";
import LargeSubscriptionBanner from "../../components/Blog/LargeSubscriptionBanner/LargeSubscriptionBanner";
import { whyUsDemoData } from "../../public/JSON/whyUs/whyUs";
import BookingDemo from "./components/BookingDemo/BookingDemo";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyUsBanner from "./components/WhyUsBanner/WhyUsBanner";

export const getStaticProps = async () => {
  return {
    props: {
      whyUsData: whyUsDemoData,
    },
  };
};

const WhyUs = ({ whyUsData }) => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        // fontFamily: "open sans",
        fontFamily: "Ubuntu",
      }}
    >
      <WhyUsBanner whyUsData={whyUsData?.banner} />
      <BookingDemo bookingDemoData={whyUsData?.bookingDemo} />
      {/* testimonial - customer reviews */}
      <Testimonials testimonialsData={whyUsData?.testimonialsList} />
      <LargeSubscriptionBanner />
    </section>
  );
};

export default WhyUs;
