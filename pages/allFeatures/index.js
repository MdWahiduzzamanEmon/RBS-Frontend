import Link from "next/link.js";
import React from "react";
import { allFeaturesDemoData } from "../../public/JSON/allFeatures/allFeatures.js";

export const getStaticProps = async () => {
  return {
    props: {
      featureLists: allFeaturesDemoData,
    },
  };
};

const AllFeatures = ({ featureLists }) => {
  console?.log(featureLists);
  return (
    <div>
      {featureLists.map((featureList) => (
        <Link href={"/allFeatures/" + featureList.name} key={featureList.id}>
          <h1>{featureList.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default AllFeatures;
