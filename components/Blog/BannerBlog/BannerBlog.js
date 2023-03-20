import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bannerBlogImage from "../../../public/bannerBlog.png";
import styles from "./BannerBlog.module.css";

const BannerBlog = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.bannerContainer} container-lg`}>
        <div className={`${styles.bannerWrapper}`}>
          <div className={`${styles.bannerText}`}>
            <p className={`${styles.bannerCategoryText}`}>Project Management</p>
            <h3 className={`${styles.bannerTextTitle}`}>Project Management</h3>
            <p className={`${styles.bannerTextDescription}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus, totam?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ab qui earum voluptate numquam labore quia officia itaque
              deleniti. Perspiciatis, officiis.
            </p>
            <button className={`${styles.button}`}>
              Read More <FaArrowRight className={`${styles.buttonArrow}`} />
            </button>
          </div>
          <div className={`${styles.bannerImageWrapper}`}>
            <Image
              src={bannerBlogImage}
              alt="image"
              layout="fill"
              className={`${styles.bannerImage}`}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBlog;
