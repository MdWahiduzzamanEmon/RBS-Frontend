import Image from "next/image";
import Link from "next/link.js";
import React from "react";
import LargeSubscriptionBanner from "../../components/Blog/LargeSubscriptionBanner/LargeSubscriptionBanner.js";
import { allFeaturesDemoData } from "../../public/JSON/allFeatures/allFeatures.js";
import { allFeaturesMainPageData } from "../../public/JSON/allFeatures/allFeaturesMainPage.js";
import AllFeaturesBanner from "./components/AllFeaturesBanner/AllFeaturesBanner.js";
import FeatureCategories from "./components/FeatureCategories/FeatureCategories.js";

export const getStaticProps = async () => {
  return {
    props: {
      featureLists: allFeaturesDemoData,
      allFeaturesMainPageData,
    },
  };
};

const AllFeatures = ({ featureLists, allFeaturesMainPageData }) => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        fontFamily: "Ubuntu",
      }}
    >
      {/* banner */}
      <AllFeaturesBanner bannerData={allFeaturesMainPageData?.banner} />

      <FeatureCategories
        categoriesData={allFeaturesMainPageData?.featureLists}
      />
      <LargeSubscriptionBanner />
    </section>
  );
};

export default AllFeatures;
