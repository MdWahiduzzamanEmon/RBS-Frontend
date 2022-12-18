import Link from "next/link";
import React from "react";
import styles from "./DemoVideoCard.module.css";

const DemoVideoCard = () => {
  return (
    <div className={`${styles.wrap}`}>
      <div className={`${styles.blankWrapper}`}></div>
      <div className={`${styles.text}`}>
        <div className="">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/q6LMjurECZM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h3>how to use vitlous dashboard </h3>
        {/* <p className={`${styles.description}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio debitis
          dolore nesciunt magnam, culpa quo?
        </p> */}
      </div>
      {/* <Link href={`/allFeatures/${featureCardData?.name}`}>
        <button className={`${styles.cardButton}`}>Read More</button>
      </Link> */}
    </div>
  );
};

export default DemoVideoCard;
