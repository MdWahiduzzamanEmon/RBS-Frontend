import React from "react";
import AllBlogPosts from "../../components/Blog/AllBlogPosts/AllBlogPosts";
import BannerBlog from "../../components/Blog/BannerBlog/BannerBlog";
import CategoriesBlog from "../../components/Blog/CategoriesBlog/CategoriesBlog";
import FeaturedArticles from "../../components/Blog/FeaturedArticles/FeaturedArticles";
import LargeSubscriptionBanner from "../../components/Blog/LargeSubscriptionBanner/LargeSubscriptionBanner";
import NavbarBlog from "../../components/Blog/NavbarBlog/NavbarBlog";
import SearchBar from "../../components/Blog/SearchBar/SearchBar";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className="">
      {/* <NavbarBlog /> */}
      <div className={`${styles.bannerContainer}`}>
        <BannerBlog />
      </div>
      {/* <SearchBar /> */}
      <AllBlogPosts />
      <CategoriesBlog />
      <FeaturedArticles />
      <LargeSubscriptionBanner />
    </div>
  );
};

export default Blog;
