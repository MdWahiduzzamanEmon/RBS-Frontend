import Image from "next/image";
import Link from "next/link.js";
import React from "react";
import { allFeaturesDemoData } from "../../public/JSON/allFeatures/allFeatures.js";
import { allFeaturesMainPageData } from "../../public/JSON/allFeatures/allFeaturesMainPage.js";
import AllFeaturesBanner from "./components/AllFeaturesBanner/AllFeaturesBanner.js";

export const getStaticProps = async () => {
  return {
    props: {
      featureLists: allFeaturesDemoData,
      allFeaturesMainPageData,
    },
  };
};

const AllFeatures = ({ featureLists, allFeaturesMainPageData }) => {
  console?.log(featureLists);
  return (
    <section>
      {/* banner */}
      <AllFeaturesBanner bannerData={allFeaturesMainPageData?.banner} />
      {featureLists.map((featureList) => (
        <Link href={"/allFeatures/" + featureList.name} key={featureList.id}>
          <h1>{featureList.name}</h1>
        </Link>
      ))}
    </section>
  );
};

export default AllFeatures;
