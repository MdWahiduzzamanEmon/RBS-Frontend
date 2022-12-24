import Image from "next/image";
import React from "react";
import styles from "./OneSoftware.module.css";
import oneSoftwareImage from "../../public/oneSoftwareImage.png";
import Link from "next/link";

const OneSoftware = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageContainer}`}>
        <Image
          src={oneSoftwareImage}
          alt="one software image"
          width={400}
          height={300}
          layout="fill"
        ></Image>
      </div>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.textContainer}`}>
        <h3 className={`${styles.title}`}>
          Replace Your Expensive Project Management Software:
        </h3>
        <p className={`${styles.highlightedTitle}`}>
          One
          <span className={`${styles.highlightedTitleColored1}`}>Software</span>
          , one
          <span className={`${styles.highlightedTitleColored2}`}>Company</span>,
          <span className={`${styles.highlightedTitleColored3}`}>
            Unlimited
          </span>
          users,
          <span className={`${styles.highlightedTitleColored4}`}>
            Unlimited
          </span>
          features and
          <span className={`${styles.highlightedTitleColored5}`}>
            Unlimited
          </span>
          opportunities.
        </p>
        <div>
          <Link href="/pricing">
            <button className={`${styles.smallBannerButton}`}>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneSoftware;
