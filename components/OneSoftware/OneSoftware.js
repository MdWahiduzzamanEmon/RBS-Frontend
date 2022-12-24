import Image from "next/image";
import React from "react";
import styles from "./OneSoftware.module.css";
import oneSoftwareImage from "../../public/oneSoftwareImage.png";
import Link from "next/link";

const OneSoftware = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "";
    setEmail("");
    console.log(email);
  };
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
      {/* <div className={`${styles.textButtonContainer}`}> */}
      <div className={`${styles.textContainer}`}>
        <h3 className={`${styles.title}`}>
          Replace Your Expensive Project Management Software:
        </h3>
        <p className={`${styles.highlightedTitle}`}>
          One
          <span className={`${styles.highlightedTitleColored1}`}>Software</span>
          ,<br /> one
          <span className={`${styles.highlightedTitleColored2}`}>Company</span>,
          <span className={`${styles.highlightedTitleColored3}`}>
            Unlimited
          </span>
          users,
          <span className={`${styles.highlightedTitleColored4}`}>
            Unlimited
          </span>
          features <br /> and
          <span className={`${styles.highlightedTitleColored5}`}>
            Unlimited
          </span>
          opportunities.
        </p>
        <form className={`${styles.submitContainer}`} onSubmit={handleSubmit}>
          <input
            className={`${styles.emailField}`}
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {/* <Link href="/pricing"> */}
          <button className={`${styles.smallBannerButton}`} type="submit">
            Submit Now
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
    // </div>
  );
};

export default OneSoftware;
