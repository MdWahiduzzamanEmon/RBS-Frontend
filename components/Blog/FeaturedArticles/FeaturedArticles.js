import React from "react";
import styles from "./FeaturedArticles.module.css";
import image1 from "../../../public/product-Banner.png";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

const FeaturedArticles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "How to be a better Product Manager",
      image: image1,
      category: "Product Management",
      timeDuration: "2 min ",
    },
    {
      id: 2,
      title: "How to be a better Product Manager",
      image: image1,
      category: "Product Management",
      timeDuration: "2 min ",
    },
    {
      id: 3,
      title: "How to be a better Product Manager",
      image: image1,
      category: "Product Management",
      timeDuration: "2 min ",
    },
    {
      id: 4,
      title: "How to be a better Product Manager",
      image: image1,
      category: "Product Management",
      timeDuration: "2 min ",
    },
    {
      id: 5,
      title: "How to be a better Project Manager",
      image: image1,
      category: "Project Management",
      timeDuration: "2 min ",
    },
    {
      id: 6,
      title: "How to manage your time better",
      image: image1,
      category: "Time Management",
      timeDuration: "2 min ",
    },
  ];
  return (
    <section className="container-lg">
      <h3 className={`${styles.containerPrimaryTitle}`}>Featured Articles</h3>
      <div className={`${styles.featuredArticleContainer} `}>
        {featuredArticles.map((featuredArticle) => (
          <div key={featuredArticle.id} className={`${styles.featuredArticle}`}>
            <div className={`${styles.featuredArticleImageWrapper}`}>
              <Image
                src={featuredArticle.image}
                alt="image"
                width={250}
                height={150}
                layout="responsive"
                objectFit="cover"
                className={`${styles.articleImage}`}
              ></Image>
            </div>
            <div className={`${styles.articleText}`}>
              <p className={`${styles.articleCategory} mt-3`}>
                {featuredArticle.category}
              </p>
              <h3 className={`${styles.articleTitle}`}>
                {featuredArticle.title}
              </h3>
            </div>
            <p className={`${styles.articleTimeDuration}`}>
              <small>
                {" "}
                <FaRegClock className={`${styles.articleTimeDurationIcon} `} />
                <span className={`${styles.articleTimeDurationSpan} ps-1 `}>
                  Reading time about {featuredArticle.timeDuration}
                </span>
              </small>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
