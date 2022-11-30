import Image from "next/image";
import React from "react";
import styles from "./BookingDemo.module.css";

const BookingDemo = ({ bookingDemoData }) => {
  const { title, description, image } = bookingDemoData;
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.imageWrapper}`}>
        <Image
          src={image}
          alt="person image"
          width={300}
          height={400}
          layout="intrinsic"
          className={`${styles.bookingImage}`}
        ></Image>
      </div>
      <div className={`${styles.blankWrapper1}`}></div>
      <div className={`${styles.blankWrapper2}`}></div>

      <div className={`${styles.textWrapper}`}>
        <div className={`${styles.textWrapperInner}`}>
          <h3 className={`${styles.textWrapperTitle}`}>{title}</h3>
          <p className={`${styles.textWrapperDescription}`}>{description}</p>
          <button className={`${styles.cardButton}`}>Book Demo</button>
        </div>
      </div>
    </div>
  );
};

export default BookingDemo;
