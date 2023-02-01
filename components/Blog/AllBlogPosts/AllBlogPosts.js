import React from "react";
import styles from "./AllBlogPosts.module.css";
import { allBlogsDemoData } from "../../../public/JSON/Blog/AllBlogsJson/AllBlogsJson";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

const AllBlogPosts = () => {
  return (
    <section>
      <div className={`${styles.blogsContainer} container-lg`}>
        {allBlogsDemoData.map((blog) => (
          <div key={blog.id} className={`${styles.blog}`}>
            <div className={`${styles.blogImage}`}>
              <Image
                src={blog.image}
                alt="image"
                width={250}
                height={150}
                layout="responsive"
                objectFit="cover"
              ></Image>
            </div>
            <div className={`${styles.blogText}`}>
              <p className={`${styles.blogCategory} mt-3`}>{blog.category}</p>
              <h3>{blog.title}</h3>
            </div>
            <p className={`${styles.blogTimeDuration}`}>
              <small>
                <FaRegClock className={`${styles.blogTimeDurationIcon} `} />
                <span className={`${styles.blogTimeDurationSpan} ps-1`}>
                  Reading time about 5 min
                </span>
              </small>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlogPosts;
