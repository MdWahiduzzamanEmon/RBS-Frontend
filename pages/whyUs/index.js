import React from "react";
import { whyUsDemoData } from "../../public/JSON/whyUs/whyUs";
import BookingDemo from "./components/BookingDemo/BookingDemo";
import WhyUsBanner from "./components/WhyUsBanner/WhyUsBanner";

export const getStaticProps = async () => {
  return {
    props: {
      whyUsData: whyUsDemoData,
    },
  };
};

const WhyUs = ({ whyUsData }) => {
  console.log(whyUsData);
  return (
    <section>
      <WhyUsBanner whyUsData={whyUsData?.banner} />
      <BookingDemo bookingDemoData={whyUsData?.bookingDemo} />
    </section>
  );
};

export default WhyUs;
