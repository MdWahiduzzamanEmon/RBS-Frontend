import Link from "next/link";
import React from "react";
import styles from "./SmallBanner.module.css";

const SmallBanner = () => {
  return (
    <section>
      <div className={`${styles.smallBannerContainer} container-xl`}>
        <div className={`${styles.textContainer}`}>
          <div className={`${styles.smallBannerText}`}>
            <span className={`${styles.smallBannerSubText1}`}>
              Replace Your Expensive Project Management Software:
            </span>
            <div style={{ margin: "2px" }}></div>
            <span>
              One
              <span className={`${styles.smallBannerSubText2}`}>
                Software
              </span>, <br />
              one
              <span className={`${styles.smallBannerSubText3}`}>Company</span>,
              <span className={`${styles.smallBannerSubText4}`}>unlimited</span>
              users,
              <span className={`${styles.smallBannerSubText5}`}>unlimited</span>
              features <br />
              and
              <span className={`${styles.smallBannerSubText3}`}>unlimited</span>
              opportunities.
            </span>
          </div>
          <div>
            <Link href="/pricing">
              <button className={`${styles.smallBannerButton}`}>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBanner;
